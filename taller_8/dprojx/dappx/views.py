from django.shortcuts import render, redirect
from .models import Persona
from .forms  import PersonaForm
# Create your views here.

def registrar(request):
    if request.method == 'GET':
        form = PersonaForm()
        contexto = {
            'form':form
        }
    else:
        form =  PersonaForm(request.POST)
        contexto={
            'form':form
        }
        print(form)
        if form.is_valid():
            form.save()
            return redirect('listar')
    return render (request,'registro.html',contexto)

def listar(request):
    personas = Persona.objects.all()
    contexto={
       'personas':personas
    }
    return render (request,'listar.html',contexto)

def editar(request,id):
    persona = Persona.objects.get(id = id)
    if request.method == 'GET':
        form = PersonaForm(instance = persona)
        contexto = {
            'form':form
        }
    else:
        form = PersonaForm(request.POST, instance = persona)
        contexto = {
            'form':form
        }
        if form.is_valid():
            form.save()
            return redirect('listar')

    return render (request,'registro.html',contexto)

def borrar(request,id):
    persona = Persona.objects.get(id = id)
    persona.delete()
    return redirect('listar')