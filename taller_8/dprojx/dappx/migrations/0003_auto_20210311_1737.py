# Generated by Django 3.1.2 on 2021-03-11 22:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dappx', '0002_auto_20210311_1526'),
    ]

    operations = [
        migrations.AlterField(
            model_name='persona',
            name='documento',
            field=models.IntegerField(unique=True),
        ),
        migrations.AlterField(
            model_name='persona',
            name='usuario',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]
