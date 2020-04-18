from django.contrib import admin
from django.urls import path
import api.views as v

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/companies', v.get_companies),
    path('api/companies/<int:id>', v.get_company),
    path('api/companies/<int:id>/vacancies', v.get_vacancy_by_company),
    path('api/vacancies/', v.get_vacancies),
    path('api/vacancies/<int:id>', v.get_vacancy),
    path('api/vacancies/top_ten/', v.top_ten),
    ]

