from rest_framework import serializers
from api.models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','email','nick']

class TimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Time
        fields = ['name','pathLogo']

class JogadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jogador
        fields = ['name','role','time','pathFoto','valor']

class JogoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jogo
        fields = ['id','data','rodada','time_blue','time_red']

class EscalacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Escalacao
        fields = ['id','user','rodada','top','jd','mid','adc','sup']

class PontuacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pontuacao
        fields = ['id','jogo','jogador','Pontuacao']
