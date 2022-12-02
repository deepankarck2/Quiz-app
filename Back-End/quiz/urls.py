from django.urls import path
from .views import Quiz, RandomQuestion, QuizQuestion

app_name = 'quiz'

urlpatterns = [
    path('quiz/', Quiz.as_view(), name='quiz'),
    path('<str:topic>/random_ques', RandomQuestion.as_view(), name='random-question'),
    path('<str:topic>/get_question', QuizQuestion.as_view(), name='quiz-question'),
]
