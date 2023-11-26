from django.urls import path
from . import views

urlpatterns = [path("understandcode/", views.understand_code)]
