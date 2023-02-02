from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from django.http import JsonResponse, HttpResponse
import mwclient 
# Create your views here.

@api_view(['GET'])
def helloWorld(request):
    return JsonResponse({'message':'hello world!'})

