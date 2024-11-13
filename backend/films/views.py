from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .models import Film, Review
from .serializers import FilmSerializer, ReviewSerializer


class FilmListView(APIView):
    def get(self, request):
        films = Film.objects.all()
        serializer = FilmSerializer(films, many=True)
        return Response(serializer.data)

class FilmDetailView(APIView):
    def get(self, request, pk):
        try:
            film = Film.objects.get(pk=pk)
            serializer = FilmSerializer(film)
            return Response(serializer.data)
        except Film.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class AddReviewView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, film_id):
        film = Film.objects.get(pk=film_id)
        rating = request.data.get('rating')
        
        if Review.objects.filter(film=film, user=request.user, rating=rating).exists():
            return Response({"error": "You have already reviewed this film with this rating."}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user, film=film)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)