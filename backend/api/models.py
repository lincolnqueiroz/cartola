from django.db import models

# Create your models here.

class Jogador(models.Model):
    name = models.CharField(max_length=30)