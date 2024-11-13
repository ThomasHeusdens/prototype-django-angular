from django.db import models
from django.contrib.auth.models import User

class Film(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date_published = models.DateField()
    poster_image = models.ImageField(upload_to='posters/', blank=True, null=True)

    def __str__(self):
        return self.title

class Review(models.Model):
    RATINGS = [
        (1, '1 Star'),
        (2, '2 Stars'),
        (3, '3 Stars'),
        (4, '4 Stars'),
        (5, '5 Stars')
    ]
    film = models.ForeignKey('Film', on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField(choices=RATINGS)
    description = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.film.title} - {self.rating} Stars"
