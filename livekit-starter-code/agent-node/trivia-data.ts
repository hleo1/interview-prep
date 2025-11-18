/**
 * Trivia questions data
 */

export interface TriviaQuestion {
  category: string;
  question: string;
  answer: string;
  alternatives: string[];
}

export const TRIVIA_QUESTIONS: TriviaQuestion[] = [
  // Science
  {
    category: "Science",
    question: "What is the chemical symbol for gold?",
    answer: "Au",
    alternatives: ["gold", "au"]
  },
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    answer: "Mars",
    alternatives: ["mars"]
  },
  {
    category: "Science",
    question: "How many bones are in the human body?",
    answer: "206",
    alternatives: ["two hundred six", "two hundred and six", "206"]
  },
  {
    category: "Science",
    question: "What is the largest organ in the human body?",
    answer: "Skin",
    alternatives: ["skin", "the skin"]
  },
  // History
  {
    category: "History",
    question: "In which year did World War II end?",
    answer: "1945",
    alternatives: ["1945", "nineteen forty five"]
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    answer: "George Washington",
    alternatives: ["george washington", "washington"]
  },
  {
    category: "History",
    question: "Which ancient wonder is still standing?",
    answer: "Great Pyramid of Giza",
    alternatives: ["great pyramid", "pyramid of giza", "giza pyramid", "pyramids"]
  },
  {
    category: "History",
    question: "Who discovered America in 1492?",
    answer: "Christopher Columbus",
    alternatives: ["christopher columbus", "columbus"]
  },
  // Geography
  {
    category: "Geography",
    question: "What is the capital of Australia?",
    answer: "Canberra",
    alternatives: ["canberra"]
  },
  {
    category: "Geography",
    question: "Which is the longest river in the world?",
    answer: "Nile",
    alternatives: ["nile", "the nile", "nile river"]
  },
  {
    category: "Geography",
    question: "What is the smallest country in the world?",
    answer: "Vatican City",
    alternatives: ["vatican", "vatican city", "the vatican"]
  },
  // Movies
  {
    category: "Movies",
    question: "Who directed Inception?",
    answer: "Christopher Nolan",
    alternatives: ["christopher nolan", "nolan"]
  },
  {
    category: "Movies",
    question: "Which movie won the Oscar for Best Picture in 1994?",
    answer: "Forrest Gump",
    alternatives: ["forrest gump"]
  },
  // Sports
  {
    category: "Sports",
    question: "How many players are on a soccer team?",
    answer: "11",
    alternatives: ["eleven", "11"]
  },
  {
    category: "Sports",
    question: "In which sport would you perform a slam dunk?",
    answer: "Basketball",
    alternatives: ["basketball", "basket ball"]
  }
];

/**
 * Shuffle array in place
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

