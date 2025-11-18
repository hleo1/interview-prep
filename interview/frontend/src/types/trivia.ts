export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Category {
  name: string;
  icon: string;
  questions: Question[];
}


