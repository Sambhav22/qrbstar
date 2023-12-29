export const chapter = "Chapter - 4: Pastime";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What is the students' response when Ms. Shruti enters the class?",
          optionA: "Good afternoon, Ma'am!",
          optionB: "Good morning, Ma'am!",
          optionC: "Hello, Teacher!",
          correctAnswer: "Good morning, Ma'am!",
        },
        {
          question: "Which day is it when Ms. Shruti asks the students?",
          optionA: "Tuesday",
          optionB: "Wednesday",
          optionC: "Monday",
          correctAnswer: "Monday",
        },
        {
          question: "What did Ms. Shruti do on Sunday?",
          optionA: "Knitted a sweater",
          optionB: "Went sailing",
          optionC: "Played badminton",
          correctAnswer: "Knitted a sweater",
        },
        {
          question:
            "What is the term used by Ms. Shruti for the activities done in free time?",
          optionA: "Hobbies",
          optionB: "Pastime",
          optionC: "Leisure",
          correctAnswer: "Pastime",
        },
        {
          question:
            "According to Ms. Shruti, when she asks a question, who should answer?",
          optionA: "All students",
          optionB: "Only one student",
          optionC: "Students on the right",
          correctAnswer: "Only one student",
        },
        {
          question: "What did Naina do yesterday?",
          optionA: "Played badminton",
          optionB: "Went sailing",
          optionC: "Flew a kite",
          correctAnswer: "Went sailing",
        },
        {
          question: "What did Chirag do in his free time?",
          optionA: "Played badminton",
          optionB: "Flew a kite",
          optionC: "Helped his father wash the car",
          correctAnswer: "Flew a kite",
        },
        {
          question: "What activity does Ms. Shruti praise as a hobby?",
          optionA: "Reading",
          optionB: "Playing sports",
          optionC: "Clapping",
          correctAnswer: "Reading",
        },
        {
          question: "What did Mudit do yesterday?",
          optionA: "Played badminton",
          optionB: "Helped his father wash the car",
          optionC: "Made a painting of Gandhiji",
          correctAnswer: "Helped his father wash the car",
        },
        {
          question:
            "According to Ms. Shruti, what must be done with free time?",
          optionA: "Waste it",
          optionB: "Clap for oneself",
          optionC: "Utilize it well",
          correctAnswer: "Utilize it well",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            "Ms. Shruti entered the class, and the students greeted her with, 'Good morning, Ma'am!' They then ____________.",
          optionA: "stood up",
          optionB: "sat down",
          optionC: "started clapping",
          correctAnswer: "sat down",
        },
        {
          question:
            "Ms. Shruti asked, 'What day is it today?' and the students responded, 'It is ____________.'",
          optionA: "Sunday",
          optionB: "Monday",
          optionC: "Tuesday",
          correctAnswer: "Monday",
        },
        {
          question:
            "According to Ms. Shruti, when she asks a question, only ____________ student has to answer.",
          optionA: "two",
          optionB: "one",
          optionC: "all",
          correctAnswer: "one",
        },
        {
          question:
            "Ms. Shruti mentioned that on Sunday, she knitted a sweater for her ____________.",
          optionA: "friend",
          optionB: "teacher",
          optionC: "mother",
          correctAnswer: "mother",
        },
        {
          question:
            "Naina shared that she went ____________ in the City Lake with her parents.",
          optionA: "cycling",
          optionB: "sailing",
          optionC: "hiking",
          correctAnswer: "sailing",
        },
        {
          question:
            "Chirag mentioned that he flew a ____________ with his father.",
          optionA: "balloon",
          optionB: "kite",
          optionC: "drone",
          correctAnswer: "kite",
        },
        {
          question: "Manu said he played ____________ with his friends.",
          optionA: "chess",
          optionB: "badminton",
          optionC: "soccer",
          correctAnswer: "badminton",
        },
        {
          question:
            "Nalini revealed that her father bought her a ____________, and she read it.",
          optionA: "toy",
          optionB: "storybook",
          optionC: "magazine",
          correctAnswer: "storybook",
        },
        {
          question:
            "Mudit shared that he helped his father wash the ____________.",
          optionA: "dishes",
          optionB: "clothes",
          optionC: "car",
          correctAnswer: "car",
        },
        {
          question: "Saroj mentioned that she made a painting of ____________.",
          optionA: "a landscape",
          optionB: "a historical figure",
          optionC: "Gandhiji",
          correctAnswer: "Gandhiji",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "The students greeted Ms. Shruti with 'Good afternoon, Ma'am!' when she entered the class.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Ms. Shruti asked, 'What day is it today?' and the students responded that it is Tuesday.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Ms. Shruti mentioned that on Sunday, she played badminton with her friends.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "According to Ms. Shruti, when she asks a question, all students have to answer.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Naina went sailing in the City Lake with her parents.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Chirag mentioned that he flew a kite with his mother.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Manu said he played soccer with his friends.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Nalini's father bought her a toy, and she read it yesterday.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Mudit helped his father wash the car.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Saroj made a painting of Gandhiji.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
