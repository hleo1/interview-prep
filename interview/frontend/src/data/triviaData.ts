import type { Category } from '../types/trivia';

export const categories: Category[] = [
  {
    name: "Science",
    icon: "🔬",
    questions: [
      {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Au", "Gd", "Ag"],
        correctAnswer: 1
      },
      {
        question: "What planet is known as the Red Planet?",
        options: ["Venus", "Jupiter", "Mars", "Saturn"],
        correctAnswer: 2
      },
      {
        question: "How many bones are in the human body?",
        options: ["186", "206", "226", "246"],
        correctAnswer: 1
      },
      {
        question: "What is the speed of light?",
        options: ["299,792 km/s", "199,792 km/s", "399,792 km/s", "99,792 km/s"],
        correctAnswer: 0
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Brain", "Liver", "Skin"],
        correctAnswer: 3
      }
    ]
  },
  {
    name: "History",
    icon: "📜",
    questions: [
      {
        question: "In which year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        correctAnswer: 2
      },
      {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
        correctAnswer: 1
      },
      {
        question: "Which ancient wonder is still standing?",
        options: ["Colossus of Rhodes", "Hanging Gardens", "Great Pyramid of Giza", "Lighthouse of Alexandria"],
        correctAnswer: 2
      },
      {
        question: "The fall of the Berlin Wall occurred in which year?",
        options: ["1987", "1988", "1989", "1990"],
        correctAnswer: 2
      },
      {
        question: "Who discovered America in 1492?",
        options: ["Ferdinand Magellan", "Amerigo Vespucci", "Christopher Columbus", "Vasco da Gama"],
        correctAnswer: 2
      }
    ]
  },
  {
    name: "Geography",
    icon: "🌍",
    questions: [
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: 2
      },
      {
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correctAnswer: 1
      },
      {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2
      },
      {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        correctAnswer: 1
      },
      {
        question: "Which desert is the largest in the world?",
        options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
        correctAnswer: 3
      }
    ]
  },
  {
    name: "Movies",
    icon: "🎬",
    questions: [
      {
        question: "Who directed 'Inception'?",
        options: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Quentin Tarantino"],
        correctAnswer: 1
      },
      {
        question: "Which movie won the Oscar for Best Picture in 1994?",
        options: ["Pulp Fiction", "The Shawshank Redemption", "Forrest Gump", "The Lion King"],
        correctAnswer: 2
      },
      {
        question: "What year was the first 'Star Wars' movie released?",
        options: ["1975", "1977", "1979", "1981"],
        correctAnswer: 1
      },
      {
        question: "Who played Jack in 'Titanic'?",
        options: ["Brad Pitt", "Tom Cruise", "Leonardo DiCaprio", "Matt Damon"],
        correctAnswer: 2
      },
      {
        question: "Which film features the quote 'May the Force be with you'?",
        options: ["Star Trek", "Star Wars", "Guardians of the Galaxy", "Interstellar"],
        correctAnswer: 1
      }
    ]
  },
  {
    name: "Sports",
    icon: "⚽",
    questions: [
      {
        question: "How many players are on a soccer team?",
        options: ["9", "10", "11", "12"],
        correctAnswer: 2
      },
      {
        question: "In which sport would you perform a slam dunk?",
        options: ["Volleyball", "Basketball", "Tennis", "Baseball"],
        correctAnswer: 1
      },
      {
        question: "How many Grand Slam tournaments are there in tennis?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1
      },
      {
        question: "What country hosted the 2016 Summer Olympics?",
        options: ["China", "UK", "Brazil", "Russia"],
        correctAnswer: 2
      },
      {
        question: "In golf, what is a hole-in-one called?",
        options: ["Eagle", "Birdie", "Ace", "Albatross"],
        correctAnswer: 2
      }
    ]
  }
];


