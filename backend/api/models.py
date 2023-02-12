from django.db import models
from django.core.exceptions import ValidationError
from django.contrib.auth.models import AbstractUser



# Create your models here.

class User(AbstractUser):
    username = models.CharField(max_length=30, primary_key=True)
    email = models.CharField(max_length=60, default=username)
    nick = models.CharField(max_length=30)


class Time(models.Model):
    name = models.CharField(max_length=30,primary_key=True)
    pathLogo = models.CharField(max_length=30,default='sem logo')


class Jogador(models.Model):
    def validate_valor(valor):
        if valor > 100 or valor < 0:
            raise ValidationError('valor fora do intervalo')
    LANE_CHOICES = [
        ('top','Top Laner'),
        ('jg','Jungler'),
        ('mid','Mid Laner'),
        ('sup','Suporte'),
        ('adc','Ad Carry'),]
    name = models.CharField(max_length=30, primary_key=True)
    role = models.CharField(max_length=30, choices=LANE_CHOICES)
    time = models.ForeignKey(Time,on_delete=models.SET_NULL, null=True)
    pathFoto = models.CharField(max_length=30,default='sem foto')
    valor = models.IntegerField(validators=[validate_valor],default=50)


class Jogo(models.Model):
    data = models.DateTimeField()
    rodada = models.IntegerField()
    time_blue = models.ForeignKey(Time,on_delete=models.CASCADE,related_name='time_blue')
    time_red = models.ForeignKey(Time,on_delete=models.CASCADE,related_name='time_red')

class Escalacao(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    rodada = models.IntegerField()
    top = models.ForeignKey(Jogador, on_delete=models.CASCADE, related_name="top")
    jg = models.ForeignKey(Jogador, on_delete=models.CASCADE, related_name="jg")
    mid = models.ForeignKey(Jogador, on_delete=models.CASCADE, related_name="mid")
    adc = models.ForeignKey(Jogador, on_delete=models.CASCADE, related_name="adc")
    sup = models.ForeignKey(Jogador, on_delete=models.CASCADE, related_name="sup")

class Pontuacao(models.Model):
    jogo = models.ForeignKey(Jogo,on_delete=models.CASCADE)
    jogador = models.ForeignKey(Jogador,on_delete=models.CASCADE)
    Pontuacao = models.IntegerField()

