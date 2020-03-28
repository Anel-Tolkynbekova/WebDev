from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from api.models import Product, Category
from django.http.request import HttpRequest



def get_products(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    print(products_json)
    return JsonResponse(products_json, safe=False)


def get_proudct(request, id):
    products = Product.objects.all()
    for i in products:
        if i.id == id:
            return JsonResponse(i.to_json())
    return HttpResponse("<h1>No such file .(</h1>")
def get_categories(request):
    categories = Category.objects.all()
    categories_json = [cat.to_json() for cat in categories]
    return JsonResponse(categories_json, safe=False)
def get_category(request, id):
    categories = Category.objects.all()
    for i in categories:
        if i.id == id:
            return JsonResponse(i.to_json())
    return HttpResponse("<h1>No such file .(</h1>")
def get_category_products(request, id):
    products = Product.objects.all()
    out = []
    for i in products:
        if i.category_id.id == id:
            out.append(i.to_json())
    return JsonResponse(out, safe=False)