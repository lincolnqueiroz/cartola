from django.db import models

# Create your models here.

class Jogador(models.Model):
    name = models.CharField(max_length=30, primary_key=True)
    role = models.CharField(max_length=30)