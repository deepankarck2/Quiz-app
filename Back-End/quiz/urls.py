from django.urls import path
from .views import Quiz, RandomQuestion, QuizQuestion, home, register
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = 'quiz'
 
urlpatterns = [
    path('quiz/', Quiz.as_view(), name='quiz'),
    path('<str:topic>/random_ques', RandomQuestion.as_view(), name='random-question'),
    path('<str:topic>/get_question', QuizQuestion.as_view(), name='quiz-question'),

    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', register, name='register'),
]
