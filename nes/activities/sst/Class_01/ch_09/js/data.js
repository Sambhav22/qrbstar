export const chapter = "Chapter - 9: Learning at School ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What do students learn at school?",
        optionA: "Only how to read and write",
        optionB: "How to count, draw, and paint",
        optionC: "How to cook and clean",
        correctAnswer: "How to count, draw, and paint",
      },
      {
        question:
          "According to the text, what is life at school the basis for?",
        optionA: "Becoming professional athletes",
        optionB: "Developing artistic talents",
        optionC: "Becoming good citizens",
        correctAnswer: "Becoming good citizens",
      },
      {
        question: "What do students learn about at school?",
        optionA: "Only about themselves",
        optionB: "Only about their friends",
        optionC: "People, country, and the world",
        correctAnswer: "People, country, and the world",
      },
      {
        question: "What is one of the things students learn at school?",
        optionA: "How to build houses",
        optionB: "How to sing and dance",
        optionC: "How to fly airplanes",
        correctAnswer: "How to sing and dance",
      },
      {
        question:
          "In addition to academics, what do students learn at school according to the text?",
        optionA: "Only how to behave well",
        optionB: "The spirit of togetherness and how to work in groups",
        optionC: "How to be solitary and independent",
        correctAnswer: "The spirit of togetherness and how to work in groups",
      },
      {
        question: "What is described as a 'temple of learning' in the text?",
        optionA: "Libraries",
        optionB: "Schools",
        optionC: "Museums",
        correctAnswer: "Schools",
      },
      {
        question:
          "What skill is NOT mentioned as something students learn at school?",
        optionA: "Reading and writing",
        optionB: "Drawing and painting",
        optionC: "Riding bicycles",
        correctAnswer: "Riding bicycles",
      },
      {
        question:
          "What does the text suggest students learn to appreciate at school?",
        optionA: "Being a loner",
        optionB: "The importance of solitude",
        optionC: "The value of togetherness",
        correctAnswer: "The value of togetherness",
      },
      {
        question:
          "What is the underlying message of the text regarding the purpose of school?",
        optionA: "Schools are a waste of time",
        optionB: "Schools are only for academic learning",
        optionC: "Schools play a role in developing well-rounded individuals",
        correctAnswer:
          "Schools play a role in developing well-rounded individuals",
      },
      {
        question:
          "According to the text, what is one of the outcomes of life at school?",
        optionA: "Learning how to be a dictator",
        optionB: "Learning how to work together in groups",
        optionC: "Learning how to be a professional athlete",
        correctAnswer: "Learning how to work together in groups",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "At school, we learn how to read and _______________.",
        optionA: "paint",
        optionB: "swim",
        optionC: "write",
        correctAnswer: "write",
      },
      {
        question:
          "In addition to academics, students learn the spirit of _______________ and how to work in groups.",
        optionA: "competition",
        optionB: "togetherness",
        optionC: "isolation",
        correctAnswer: "togetherness",
      },
      {
        question:
          "Life at school is the basis that helps us become good _______________.",
        optionA: "astronauts",
        optionB: "citizens",
        optionC: "musicians",
        correctAnswer: "citizens",
      },
      {
        question: "We learn about people, country, and the _______________.",
        optionA: "universe",
        optionB: "world",
        optionC: "animals",
        correctAnswer: "world",
      },
      {
        question:
          "Apart from academics, students learn how to behave _______________.",
        optionA: "poorly",
        optionB: "well",
        optionC: "quietly",
        correctAnswer: "well",
      },
      {
        question:
          'School is often described as a "_______________ of learning."',
        optionA: "library",
        optionB: "temple",
        optionC: "playground",
        correctAnswer: "temple",
      },
      {
        question:
          "Students also learn how to work on a _______________ at school.",
        optionA: "farm",
        optionB: "computer",
        optionC: "spaceship",
        correctAnswer: "computer",
      },
      {
        question:
          "One of the things students learn at school is how to sing and _______________.",
        optionA: "shout",
        optionB: "dance",
        optionC: "whisper",
        correctAnswer: "dance",
      },
      {
        question:
          "At school, we not only learn how to count but also how to _______________.",
        optionA: "swim",
        optionB: "ride bicycles",
        optionC: "paint",
        correctAnswer: "ride bicycles",
      },
      {
        question:
          "School is a place where we learn many good things and become well-rounded _______________.",
        optionA: "artists",
        optionB: "individuals",
        optionC: "athletes",
        correctAnswer: "individuals",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question:
          "The principal is responsible for teaching different subjects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The sports teacher's primary role is to teach sports.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The dance teacher is responsible for teaching dance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The receptionist issues books to the students.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The librarian watches the school gate.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The peon looks after the plants at the school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The guard receives visitors and telephone calls.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The bus driver brings the students to the school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The subject teachers teach different subjects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "All other persons at school work under the principal's guidance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
