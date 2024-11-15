from rest_framework import serializers
from .models import Film, Review

class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    date_created = serializers.DateTimeField(read_only=True, format='%Y-%m-%d')

    def validate_rating(self, value):
        if value not in [1, 3, 5]:
            raise serializers.ValidationError("Rating must be 1, 3, or 5 stars.")
        return value

    class Meta:
        model = Review
        fields = ['user', 'rating', 'description', 'date_created']

class FilmSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    poster_image = serializers.ImageField(use_url=True)

    class Meta:
        model = Film
        fields = ['id', 'title', 'description', 'date_published', 'poster_image', 'reviews']
