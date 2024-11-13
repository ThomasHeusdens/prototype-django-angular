from django.db import migrations, models
from datetime import date

def create_sample_data(apps, schema_editor):
    Film = apps.get_model('films', 'Film')
    Review = apps.get_model('films', 'Review')
    User = apps.get_model('auth', 'User')

    user, created = User.objects.get_or_create(username='testuser', defaults={'password': 'password'})
    
    film1 = Film.objects.create(title="Inception", description="A mind-bending thriller by Christopher Nolan.", date_published=date(2010, 7, 16), poster_image="posters/inception.jpg")
    film2 = Film.objects.create(title="The Matrix", description="A sci-fi classic that challenges reality.", date_published=date(1999, 3, 31), poster_image="posters/matrix.jpg")
    film3 = Film.objects.create(title="Parasite", description="A dark social satire from South Korea.", date_published=date(2019, 5, 30), poster_image="posters/parasite.jpg")

    Review.objects.create(film=film1, user=user, rating=5, description="Amazing movie, a masterpiece!", date_created=date(2023, 1, 1))
    Review.objects.create(film=film1, user=user, rating=3, description="Interesting but complex.", date_created=date(2023, 2, 1))
    Review.objects.create(film=film1, user=user, rating=1, description="Not my cup of tea.", date_created=date(2023, 3, 1))

    Review.objects.create(film=film2, user=user, rating=5, description="Groundbreaking visuals and story.", date_created=date(2023, 1, 1))
    Review.objects.create(film=film2, user=user, rating=3, description="Good but confusing.", date_created=date(2023, 2, 1))
    Review.objects.create(film=film2, user=user, rating=1, description="Didn't enjoy it much.", date_created=date(2023, 3, 1))

    Review.objects.create(film=film3, user=user, rating=5, description="Incredible, thought-provoking movie!", date_created=date(2023, 1, 1))
    Review.objects.create(film=film3, user=user, rating=3, description="Engaging but dark.", date_created=date(2023, 2, 1))
    Review.objects.create(film=film3, user=user, rating=1, description="Too dark for my taste.", date_created=date(2023, 3, 1))

    film4 = Film.objects.create(title="Avatar", description="A visual spectacle.", date_published=date(2009, 12, 18), poster_image="posters/avatar.jpg")
    Review.objects.create(film=film4, user=user, rating=5, description="Stunning visuals!", date_created=date(2024, 11, 1))

    film5 = Film.objects.create(title="Joker", description="A dark character study.", date_published=date(2019, 10, 4), poster_image="posters/joker.jpg")
    Review.objects.create(film=film5, user=user, rating=1, description="Too dark for me.", date_created=date(2024, 11, 1))
    Review.objects.create(film=film5, user=user, rating=5, description="Masterpiece!", date_created=date(2024, 11, 2))

    film6 = Film.objects.create(title="Dune", description="A sci-fi epic.", date_published=date(2021, 10, 22), poster_image="posters/dune.jpg")

def remove_sample_data(apps, schema_editor):
    Film = apps.get_model('films', 'Film')
    Review = apps.get_model('films', 'Review')
    Film.objects.all().delete()
    Review.objects.all().delete()

class Migration(migrations.Migration):

    dependencies = [
        ('films', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_sample_data, remove_sample_data),
    ]
