from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

# Create your models here.
class Quizzes(models.Model):

    class Meta:
        verbose_name = "Quiz"
        verbose_name_plural = "Quizzes"
        ordering = ['id']

    category = models.ForeignKey(Category, default=1, on_delete=models.DO_NOTHING)
    title = models.CharField(default= _("New Quiz"), max_length=255, verbose_name=_("Quiz Title"))
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Updated(models.Model):
    date_updated = models.DateTimeField(verbose_name = _("Last Updated"),auto_now_add= True)

    class Meta:
        abstract = True

class Question(Updated):
    class Meta:
        verbose_name = "Question"
        verbose_name_plural = "Questions"
        ordering = ['id']

    SCALE = (
        (0, _('Beginner')),
        (0, _('Intermidiate')),
        (0, _('Expert')),
    )

    TYPE= (
        (0, _('Multiple Choice')),
    )

    quiz = models.ForeignKey(Quizzes, related_name='question', on_delete=models.DO_NOTHING)
    technique = models.IntegerField(choices=TYPE, default=0, verbose_name=_("Type of Question"))
    difficulty = models.IntegerField(choices=SCALE, default=0, verbose_name=_("Difficulty"))
    title = models.CharField(verbose_name=_("Title"), max_length=255)
    date_created = models.DateTimeField(verbose_name=_("Date Created"),  auto_now_add=True)

    def __str__(self):
        return self.title


class Answer(Updated):
    class Meta:
        verbose_name = "Answer"
        verbose_name_plural = "Answers"
        ordering = ['id']

    question = models.ForeignKey(Question, related_name='answer', on_delete=models.DO_NOTHING)
    answer_text = models.CharField(verbose_name = _("Answer Text"), max_length=255)
    is_right = models.BooleanField(default=False)