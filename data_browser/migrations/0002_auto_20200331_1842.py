# Generated by Django 2.0.13 on 2020-03-31 17:42

from django.db import migrations, models

import data_browser.models


class Migration(migrations.Migration):

    dependencies = [("data_browser", "0001_initial")]

    operations = [
        migrations.AlterField(
            model_name="view",
            name="id",
            field=models.CharField(
                default=data_browser.models.get_id,
                max_length=12,
                primary_key=True,
                serialize=False,
            ),
        )
    ]
