import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionslist',
  templateUrl: './questionslist.component.html',
  styleUrls: ['./questionslist.component.css']
})
export class QuestionslistComponent {
  showResponse: boolean = false;
  title: string = '';
  paramId: string = '';
  showSaveButton: boolean = false;
  forms: { id: string; title: string; questions: any[]; answerType: string; }[] = []; // Add answerType property
  // selectedAnswerType: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramId = this.route.snapshot.params['id'];
    this.forms.push({
      title: this.title,
      id: this.paramId,
      questions: [
        {
          id: this.uuid(),
          questionText: 'What is your favorite color?',
          answerType: 'checkbox',
          answers: [
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' },
            { label: 'Green', value: 'green' }
          ]
        },
        {
          id: this.uuid(),
          questionText: 'How old are you?',
          answerType: 'input',
          answers: [
            { value: '' }
          ]
        },
        {
          id: this.uuid(),
          questionText: 'Select your gender:',
          answerType: 'radio',
          answers: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'other' }
          ]
        }
      ],
      answerType: '' 
    });
  }
  
  uuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  handleQuestionTextChange(formId: any, questionId: string | null, value: string): void {
    if (formId && questionId) {
      const form = this.forms.find(form => form.id === formId);
      if (form) {
        const question = form.questions.find(question => question.id === questionId);
        if (question) {
          question.questionText = value;
        }
      }
    }
  }
  
  handleAnswerTypeChange(form: any, event: any): void {
    form.answerType = event.target.value;
    // this.selectedAnswerType = event.target.value;

    if (form.answerType === 'checkbox' || form.answerType === 'radio' || form.answerType === 'input') {
      form.questions.forEach((question: any) => {
        question.answers = [];
      });
    }
  }

  handleAddOption(formId: string, question: any): void {
    const form = this.forms.find(form => form.id === formId);
    if (form) {
      const targetQuestion = form.questions.find(q => q.id === question.id);
      if (targetQuestion) {
        targetQuestion.answers.push({ label: 'New Answer', value: '' });
      }
    }
  }
  

  handleAddQuestion(formId: string): void {
    const newQuestion = {
      id: this.uuid(),
      questionText: 'question ',
      answerType: '',
      answers: []
    };
    const form = this.forms.find(form => form.id === formId);
    if (form) {
      form.questions.push(newQuestion);
    }
  }

  handleDeleteQuestion(formId: string, questionId: string): void {
    const form = this.forms.find(form => form.id === formId);
    if (form) {
      form.questions = form.questions.filter(question => question.id !== questionId);
    }
  }



}
