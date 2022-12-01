from django.shortcuts import render
from rest_framework import generics
from .models import Quizzes, Question
from .serializer import * 
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework.response import Response 
import random

# Create your views here.
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
        num_of_questions = 3 
        question = list(Question.objects.filter(quiz__title= kwargs['topic']))
        #question = random.shuffle(question)
        random.shuffle(question)

        serializer = QuestionSerializer(question[:num_of_questions], many=True)
        return Response(serializer.data)