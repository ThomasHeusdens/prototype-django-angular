from django.urls import path
from . import views

urlpatterns = [
    path('', views.FilmListView.as_view(), name='film-list'),
    path('<int:pk>/', views.FilmDetailView.as_view(), name='film-detail'),
    path('<int:film_id>/add-review/', views.AddReviewView.as_view(), name='add-review'), 
]
