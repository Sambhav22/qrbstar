export const chapter = "Chapter - 7: My School ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What do students learn at school?",
        optionA: "Only to play",
        optionB: "To read, write, and other good things",
        optionC: "To eat in the canteen",
        correctAnswer: "To read, write, and other good things",
      },
      {
        question: "What does a classroom typically contain?",
        optionA: "Only a blackboard",
        optionB: "Desks, tables, and chairs",
        optionC: "Dustbin and cupboard",
        correctAnswer: "Desks, tables, and chairs",
      },
      {
        question: "Where do teachers usually teach students?",
        optionA: "In the playground",
        optionB: "In the auditorium",
        optionC: "In the classroom",
        correctAnswer: "In the classroom",
      },
      {
        question: "Which room is used for learning computers?",
        optionA: "Music and dance room",
        optionB: "Library",
        optionC: "Computer lab",
        correctAnswer: "Computer lab",
      },
      {
        question: "What place is used for conducting functions?",
        optionA: "Canteen",
        optionB: "Auditorium",
        optionC: "Principal's office",
        correctAnswer: "Auditorium",
      },
      {
        question: "What room is used for learning music and dance?",
        optionA: "Computer lab",
        optionB: "Music and dance room",
        optionC: "Library",
        correctAnswer: "Music and dance room",
      },
      {
        question: "Where does the principal of the school sit?",
        optionA: "In the classroom",
        optionB: "In the staffroom",
        optionC: "In the playground",
        correctAnswer: "In the staffroom",
      },
      {
        question: "What is typically found on the walls of a classroom?",
        optionA: "Only charts",
        optionB: "Only maps",
        optionC: "Maps, charts, and a blackboard",
        correctAnswer: "Maps, charts, and a blackboard",
      },
      {
        question: "Where can you find different books?",
        optionA: "In the canteen",
        optionB: "In the computer lab",
        optionC: "In the library",
        correctAnswer: "In the library",
      },
      {
        question: "What is a school's open area where students can play?",
        optionA: "Computer lab",
        optionB: "Playground",
        optionC: "Music and dance room",
        correctAnswer: "Playground",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "We go to school every day to _______.",
        optionA: "eat",
        optionB: "play",
        optionC: "study",
        correctAnswer: "study",
      },
      {
        question: "A school usually has a very large _______.",
        optionA: "garden",
        optionB: "building",
        optionC: "library",
        correctAnswer: "building",
      },
      {
        question: "In a classroom, students sit at _______.",
        optionA: "desks",
        optionB: "tables",
        optionC: "chairs",
        correctAnswer: "desks",
      },
      {
        question: "Teachers come and teach students in the _______.",
        optionA: "library",
        optionB: "auditorium",
        optionC: "classroom",
        correctAnswer: "classroom",
      },
      {
        question: "A classroom has desks for _______.",
        optionA: "teachers",
        optionB: "students",
        optionC: "principals",
        correctAnswer: "students",
      },
      {
        question: "It has a table and chair for the _______.",
        optionA: "janitor",
        optionB: "librarian",
        optionC: "teacher",
        correctAnswer: "teacher",
      },
      {
        question:
          "A classroom has a blackboard, maps, and _______ on the walls.",
        optionA: "paintings",
        optionB: "clocks",
        optionC: "charts",
        correctAnswer: "charts",
      },
      {
        question: "A school also has a _______ to offer eatables.",
        optionA: "library",
        optionB: "canteen",
        optionC: "auditorium",
        correctAnswer: "canteen",
      },
      {
        question: "A computer lab is used for learning _______.",
        optionA: "cooking",
        optionB: "computers",
        optionC: "music and dance",
        correctAnswer: "computers",
      },
      {
        question: "A library is full of different _______.",
        optionA: "toys",
        optionB: "books",
        optionC: "musical instruments",
        correctAnswer: "books",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "School buildings are typically very small.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Students sit in the classroom.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A classroom has a table and chair for the teacher.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The canteen is a place to offer books.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The principal's office is a place where the principal sits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The playground is used for learning computers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "A library is full of different books.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "An auditorium is used for conducting functions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "A music and dance room is where students play music and dance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Students go to school every day to eat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
