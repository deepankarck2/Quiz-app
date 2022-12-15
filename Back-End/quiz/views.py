from django.shortcuts import render
from rest_framework import generics, status
from .models import Quizzes, Question
from .serializer import * 
from rest_framework.views import APIView
from django.http import JsonResponse, HttpResponse
from rest_framework.response import Response 
import random
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

# Create your views here.
def home(request):
    return HttpResponse("<h2> Home Page </h2>")

class Quiz(generics.ListAPIView):
    serializer_class = QuizSerializer
    queryset = Quizzes.objects.all()

class RandomQuestion(APIView):
    def get(self, request, format=None, **kwargs):
        question = Question.objects.filter(quiz__title= kwargs['topic']).order_by('?')[:1]
        serializer = RandomQuestionSeializer(question, many=True)
        return Response(serializer.data)

class QuizQuestion(APIView):
    def get(self, request, format=None, **kwargs):
        num_of_questions = 5
        question = list(Question.objects.filter(quiz__title= kwargs['topic']))
        #question = random.shuffle(question)
        random.shuffle(question)

        serializer = QuestionSerializer(question[:num_of_questions], many=True)
        return Response(serializer.data)

@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)