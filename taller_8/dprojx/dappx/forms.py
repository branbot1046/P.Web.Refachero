from django import forms
from .models import Persona

class PersonaForm(forms.ModelForm):
    class Meta:
        model = Persona
        fields = '__all__'
        labels = {
				'nombres': 'Nombres',
				'apellidos': 'Apellidos',
				'idtipodocumento':'Tipo de documento',
				'documento': 'Numero de Documento',
                'lugarresidencia': 'Ciudad',
				'fechanacimiento': 'Fecha de nacimiento',
				'email':'Correo electronico',
                'telefono': 'Telefono',
				'usuario': 'Username',
				'password': 'Password',
		}