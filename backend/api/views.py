from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from django.http import JsonResponse, HttpResponse
from rest_framework.permissions import IsAuthenticated

from api.serializers import *

import mwclient 

from api.models import *
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

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getJogador(request, role):
    roleDic = {
        "top":"Top",
        "jg":"Jungle",
        "mid":"Mid",
        "adc":"Bot",
        "sup":"Support"
    }
    try:
        print(role)
        print(request.user)
        players = Jogador.objects.filter(role=roleDic[role])
        serializer = JogadorSerializer(players, many=True)
        return JsonResponse(serializer.data, safe=False)
    except Exception as exp:
        print(exp)
        return HttpResponse(status=401,content="Não foi possível obter jogadores")

