from django.db import models

# Create your models here.

class Persona(models.Model):
    id = models.AutoField(primary_key = True)
    nombres = models.CharField(max_length = 50)
    apellidos = models.CharField(max_length = 50)
    idtipodocumento = models.CharField(max_length = 50)
    documento = models.IntegerField(unique = True)
    lugarresidencia = models.CharField(max_length = 50)
    fechanacimiento = models.CharField(max_length = 50)
    email = models.EmailField(max_length = 200)
    telefono = models.CharField(max_length = 10)
    usuario = models.CharField(max_length = 50, unique=True)
    password = models.CharField(max_length = 20)
    
    def __str__(self):
        return self.nombres