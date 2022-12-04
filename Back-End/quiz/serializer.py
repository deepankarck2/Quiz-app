from rest_framework import serializers
from .models import Quizzes, Question, Answer 
from django.contrib.auth.models import User

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quizzes
        fields = [
            'title',
        ]

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = [
            'id',
            'answer_text',
            'is_right',
        ]

class RandomQuestionSeializer(serializers.ModelSerializer):
    answer = AnswerSerializer(many=True)
    class Meta:
        model = Question
        fields = [
            'title',
            'answer',
        ]

class QuestionSerializer(serializers.ModelSerializer):
    answer = AnswerSerializer(many=True)
    quiz = QuizSerializer(read_only= True)

    class Meta:
        model = Question
        fields = [
            'quiz',
            'title',
            'answer',
        ]

class UserSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = '__all__'
    
    def create(self, validated_data):
        user = User.objects.create(
            username = validated_data['username'],
            email = validated_data['email']
        )

        user.set_password(validated_data['password'])
        user.save()
        return user