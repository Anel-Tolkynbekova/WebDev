from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=23)
    description = models.TextField(max_length=300)
    city = models.CharField(max_length=23)
    address = models.TextField(max_length=300)
    def to_json(self):
        return {
                'name': self.name,
                'description': self.description,
                'city': self.city,
                'address': self.address,
                }
class Vacancy(models.Model):
    name = models.CharField(max_length=23)
    description = models.TextField(max_length=300)
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    def to_json(self):
        return {
                'name': self.name,
                'description': self.description,
                'salary': self.salary,
                'company': self.company.id,
                }
#from api.models import Vacancy, Company
#c = Company(name = 'kek',description= 'lol' , city = 'ses', address = 'pop')

