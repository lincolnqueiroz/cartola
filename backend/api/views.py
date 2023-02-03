from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from django.http import JsonResponse, HttpResponse
import mwclient 

from api.models import Jogador
# Create your views here.

@api_view(['GET'])
def helloWorld(request):
    return JsonResponse({'message':'hello world!'})

@api_view(['POST'])
def createJogador(request):
    try:
        Jogador.objects.create(name=request.data["name"], role=request.data["role"])
        return HttpResponse(status=200)
    except:
        return HttpResponse(status=401,content="Jogador já existe")


