export const chapter = "Chapter - 7: People at School";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Who is the overall incharge of the school?",
        optionA: "Subject teachers",
        optionB: "Librarian",
        optionC: "Principal",
        correctAnswer: "Principal",
      },
      {
        question: "What does the sports teacher teach?",
        optionA: "Dance",
        optionB: "Sports",
        optionC: "Mathematics",
        correctAnswer: "Sports",
      },
      {
        question: "What does the receptionist do at the school?",
        optionA: "Teaches dance",
        optionB: "Issues books to students",
        optionC: "Receives visitors and telephone calls",
        correctAnswer: "Receives visitors and telephone calls",
      },
      {
        question: "Who issues books to the students?",
        optionA: "Librarian",
        optionB: "Principal",
        optionC: "Sports teacher",
        correctAnswer: "Librarian",
      },
      {
        question: "What does the peon do at the school?",
        optionA: "Teaches subjects",
        optionB: "Rings the bell",
        optionC: "Watches the gate",
        correctAnswer: "Rings the bell",
      },
      {
        question: "Who looks after the plants at the school?",
        optionA: "Gardener",
        optionB: "Bus driver",
        optionC: "Librarian",
        correctAnswer: "Gardener",
      },
      {
        question: "Who watches the gate at the school?",
        optionA: "Principal",
        optionB: "Dance teacher",
        optionC: "Guard",
        correctAnswer: "Guard",
      },
      {
        question: "What is the role of the bus driver at the school?",
        optionA: "Teaches mathematics",
        optionB: "Brings the students to school",
        optionC: "Issues books to students",
        correctAnswer: "Brings the students to school",
      },
      {
        question:
          "What is the collective term for all the people who work at the school?",
        optionA: "Students",
        optionB: "School staff",
        optionC: "Teachers",
        correctAnswer: "School staff",
      },
      {
        question:
          "Which staff member teaches different subjects at the school?",
        optionA: "Dance teacher",
        optionB: "Receptionist",
        optionC: "Subject teachers",
        correctAnswer: "Subject teachers",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "The principal is the overall _______________ of the school.",
        optionA: "teacher",
        optionB: "incharge",
        optionC: "librarian",
        correctAnswer: "incharge",
      },
      {
        question: "All other persons work under _______________ guidance.",
        optionA: "librarian's",
        optionB: "principal's",
        optionC: "teacher's",
        correctAnswer: "principal's",
      },
      {
        question: "The subject teachers teach different _______________.",
        optionA: "dances",
        optionB: "subjects",
        optionC: "sports",
        correctAnswer: "subjects",
      },
      {
        question: "The sports teacher teaches _______________.",
        optionA: "books",
        optionB: "sports",
        optionC: "dances",
        correctAnswer: "sports",
      },
      {
        question: "The dance teacher teaches _______________.",
        optionA: "dances",
        optionB: "sports",
        optionC: "books",
        correctAnswer: "dances",
      },
      {
        question: "The receptionist receives visitors and _______________.",
        optionA: "subjects",
        optionB: "dances",
        optionC: "telephone calls",
        correctAnswer: "telephone calls",
      },
      {
        question: "The librarian issues books to the _______________.",
        optionA: "peon",
        optionB: "students",
        optionC: "guard",
        correctAnswer: "students",
      },
      {
        question: "The peon _______________ the bell.",
        optionA: "guards",
        optionB: "rings",
        optionC: "drives",
        correctAnswer: "rings",
      },
      {
        question: "The gardener looks after the _______________.",
        optionA: "sports",
        optionB: "dances",
        optionC: "plants",
        correctAnswer: "plants",
      },
      {
        question: "The bus driver brings the students to _______________.",
        optionA: "gate",
        optionB: "library",
        optionC: "school",
        correctAnswer: "school",
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
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "The sports teacher's primary role is to teach sports.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "The dance teacher is responsible for teaching dance.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "The receptionist issues books to the students.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "The librarian watches the school gate.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "The peon looks after the plants at the school.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "The guard receives visitors and telephone calls.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "The bus driver brings the students to the school.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "The subject teachers teach different subjects.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "All other persons at school work under the principal's guidance.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
