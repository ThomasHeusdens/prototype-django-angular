from rest_framework import serializers
from .models import Film, Review

class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    date_created = serializers.DateTimeField(read_only=True)

    class Meta:
        model = Review
        fields = ['user', 'rating', 'description', 'date_created']

class FilmSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    poster_image = serializers.ImageField(use_url=True)

    class Meta:
        model = Film
        fields = ['id', 'title', 'description', 'date_published', 'poster_image', 'reviews']
