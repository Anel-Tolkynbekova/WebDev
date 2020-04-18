from django.shortcuts import render
from .models import Company, Vacancy
from django.http.response import HttpResponse, JsonResponse
from django.http.request import HttpRequest
# Create your views here.
def get_companies(request):


    # select * from companies where name like %company%
    # c = Company.objects.filter(name__contains='Anel')

    # select * from companies where name like company%
    # c = Company.objects.filter(name__startswith='Anel')

    # c = Company.objects.filter(name='Anel')
    # c = Company.objects.filter(name__exact='Anel')

    # name in or price in so on
    # c = Company.objects.filter(name__in=['Anel1', 'Anel2'])

    # c = Company.objects.filter(description__isnull=False)

    # c = Company.objects.filter(price__gt=2000)

    # c = Company.objects.get(price=2000)

    #ASC
    #DESC
    # c = Company.objects.order_by('-name')
    # c = Company.objects.filter(price_gte=1000).order_by('-name')

    c = Company.objects.all()
    c_json = [cm.to_json() for cm in c]
    return JsonResponse(c_json, safe=False)

def get_company(request, id):
    try:
        # select * from companies where id = <company_id>
        c = Company.objects.get(id = id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(c.to_json())

def get_vacancy_by_company(request, id):
    v = Vacancy.objects.all()
    out = []
    for vac in v:
        if vac.company.id == id:
            out.append(vac.to_json())
    return JsonResponse(out,safe=False)
def get_vacancies(request):
    v = Vacancy.objects.filter(salary__lte=2000)
    # v = Vacancy.objects.all()
    vacs = [vc.to_json() for vc in v]
    return JsonResponse(vacs, safe=False)
def get_vacancy(request, id):
    v = Vacancy.objects.all()
    for i in v:
        if i.id == id:
            out = i.to_json()
            return JsonResponse(out)
    return HttpResponse("<h1>No such file .(</h1>")
def sort_salary(vac):
    return vac.salary
def top_ten(request):
    v = Vacancy.objects.all()
    out = sorted(v, key=sort_salary)[-10:]
    out = [cm.to_json() for cm in out]
    return JsonResponse(out, safe=False)
