export const chapter = "Chapter - 4: Role of Books in Our Life";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Why are books called companions of a person?",
        "optionA": "They can speak",
        "optionB": "They are expensive",
        "optionC": "They provide comfort and guidance",
        "correctAnswer": "They provide comfort and guidance"
      },
      {
        "question": "What do books mainly help to develop in readers?",
        "optionA": "Analytical skills",
        "correctAnswer": "Analytical skills",
        "optionB": "Fear",
        "optionC": "Weakness"
      },
      {
        "question": "What type of books deals with real facts and information?",
        "optionA": "Fiction",
        "optionB": "Poetry",
        "optionC": "Non-fiction",
        "correctAnswer": "Non-fiction"
      },
      {
        "question": "How do books help in personal growth?",
        "optionA": "By wasting time",
        "optionB": "By providing guidance and advice",
        "correctAnswer": "By providing guidance and advice",
        "optionC": "By reducing thinking"
      },
      {
        "question": "What happens when we read books regularly?",
        "optionA": "Brain activity improves",
        "correctAnswer": "Brain activity improves",
        "optionB": "Memory decreases",
        "optionC": "Thinking stops"
      },
      {
        "question": "Why do readers enjoy fiction books?",
        "optionA": "They provide homework",
        "optionB": "They take readers into different worlds",
        "correctAnswer": "They take readers into different worlds",
        "optionC": "They contain only facts"
      },
      {
        "question": "How can books influence society?",
        "optionA": "By changing weather",
        "optionB": "By stopping communication",
        "optionC": "By inspiring ideas and movements",
        "correctAnswer": "By inspiring ideas and movements"
      },
      {
        "question": "What do books help us understand better?",
        "optionA": "Machines",
        "optionB": "Human emotions and experiences",
        "correctAnswer": "Human emotions and experiences",
        "optionC": "Games"
      },
      {
        "question": "What mental ability is improved by reading books?",
        "optionA": "Memory",
        "correctAnswer": "Memory",
        "optionB": "Noise",
        "optionC": "Confusion"
      },
      {
        "question": "Why are books important in education?",
        "optionA": "They decorate classrooms",
        "optionB": "They provide structured knowledge",
        "correctAnswer": "They provide structured knowledge",
        "optionC": "They replace teachers"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Books are a __________ of knowledge.",
        "optionA": "bag",
        "optionB": "repository",
        "correctAnswer": "repository",
        "optionC": "box"
      },
      {
        "question": "Books encourage __________ thinking.",
        "optionA": "lazy",
        "optionB": "slow",
        "optionC": "critical",
        "correctAnswer": "critical"
      },
      {
        "question": "Books help develop __________ skills in students.",
        "optionA": "reading",
        "correctAnswer": "reading",
        "optionB": "sleeping",
        "optionC": "jumping"
      },
      {
        "question": "Fiction books create __________ worlds.",
        "optionA": "real",
        "optionB": "imaginary",
        "correctAnswer": "imaginary",
        "optionC": "boring"
      },
      {
        "question": "Books help in __________ growth of a person.",
        "optionA": "personal",
        "correctAnswer": "personal",
        "optionB": "harmful",
        "optionC": "useless"
      },
      {
        "question": "Reading books improves __________.",
        "optionA": "height",
        "optionB": "weight",
        "optionC": "memory",
        "correctAnswer": "memory"
      },
      {
        "question": "Books preserve __________ of society.",
        "optionA": "food",
        "optionB": "culture",
        "correctAnswer": "culture",
        "optionC": "clothes"
      },
      {
        "question": "Books enhance __________ in readers.",
        "optionA": "confusion",
        "optionB": "noise",
        "optionC": "creativity",
        "correctAnswer": "creativity"
      },
      {
        "question": "Books help in sharing __________.",
        "optionA": "ideas",
        "correctAnswer": "ideas",
        "optionB": "anger",
        "optionC": "silence"
      },
      {
        "question": "Books create __________ in learning.",
        "optionA": "interest",
        "correctAnswer": "interest",
        "optionB": "fear",
        "optionC": "boredom"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Books help in developing imagination.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Books are not useful for gaining knowledge.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Reading books improves concentration.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Books can guide people in difficult situations.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Books are only meant for entertainment.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Books help us understand different cultures.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Books do not affect thinking ability.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Books can inspire new ideas and actions.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Reading books reduces mental ability.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Books help in self-improvement and learning.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
