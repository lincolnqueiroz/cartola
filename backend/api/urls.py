from django.urls import path

from . import views

urlpatterns = [
    path('hello-world', views.helloWorld, name='helloWorld'),
]
