export const chapter = "Chapter - 7: Our School";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What do students learn at school besides reading and writing?",
        optionA: "How to cook",
        optionB: "How to play musical instruments",
        optionC: "Many good things",
        correctAnswer: "Many good things",
      },
      {
        question:
          "According to the New Education Policy, which stage of education is for children aged 14-18?",
        optionA: "Foundational Stage",
        optionB: "Preparatory Stage",
        optionC: "Secondary Stage",
        correctAnswer: "Secondary Stage",
      },
      {
        question: "What is the purpose of a school's assembly hall/ground?",
        optionA: "To hold science experiments",
        optionB: "To conduct morning prayer",
        optionC: "To serve lunch",
        correctAnswer: "To conduct morning prayer",
      },
      {
        question: "What does a school's classroom typically have?",
        optionA: "Desks and chairs for students",
        optionB: "A swimming pool",
        optionC: "A cinema screen",
        correctAnswer: "Desks and chairs for students",
      },
      {
        question:
          "What does a school's library provide to students besides their syllabus?",
        optionA: "Extra desks for studying",
        optionB: "Books for extra learning",
        optionC: "Extra recess time",
        correctAnswer: "Books for extra learning",
      },
      {
        question: "Where do students learn about computers at school?",
        optionA: "In the library",
        optionB: "In the classroom",
        optionC: "In the computer laboratory",
        correctAnswer: "In the computer laboratory",
      },
      {
        question: "What is the role of a school's canteen?",
        optionA: "To conduct parent-teacher meetings",
        optionB: "To sell eatables to students",
        optionC: "To provide medical services",
        correctAnswer: "To sell eatables to students",
      },
      {
        question: "Who is the head of the school?",
        optionA: "The librarian",
        optionB: "The principal",
        optionC: "The security guard",
        correctAnswer: "The principal",
      },
      {
        question:
          "What is the main responsibility of a receptionist at school?",
        optionA: "Teaching students",
        optionB: "Attending calls and visitors",
        optionC: "Serving lunch",
        correctAnswer: "Attending calls and visitors",
      },
      {
        question: "Who is in charge of keeping the school clean?",
        optionA: "The gardener",
        optionB: "The sweeper",
        optionC: "The principal",
        correctAnswer: "The sweeper",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question:
          "We go to study at school. Apart from reading and writing, we learn many good things at school like, how to _______________.",
        optionA: "cook",
        optionB: "play musical instruments",
        optionC: "become a good citizen of the country",
        correctAnswer: "become a good citizen of the country",
      },
      {
        question:
          "According to the New Education Policy (NEP), children of ages 8-11 are taught Class 3 to 5 at the ______________ Stage.",
        optionA: "Foundational",
        optionB: "Preparatory",
        optionC: "Middle School",
        correctAnswer: "Preparatory",
      },
      {
        question:
          "A school has an assembly hall/ground where teachers and students assemble for ______________ morning prayer.",
        optionA: "science experiments",
        optionB: "sports activities",
        optionC: "morning prayer",
        correctAnswer: "morning prayer",
      },
      {
        question:
          "A classroom has desks and chairs for students and a table and chair for the teacher. Teachers come to teach students in their respective ______________.",
        optionA: "classes",
        optionB: "periods",
        optionC: "extracurricular activities",
        correctAnswer: "periods",
      },
      {
        question:
          "A school has a playground for the children to play. It may have ______________ also.",
        optionA: "art supplies",
        optionB: "swings",
        optionC: "computers",
        correctAnswer: "swings",
      },
      {
        question:
          "A school has a library which provides different books to the students other than their syllabus for ______________ learning. It also has various newspapers and magazines.",
        optionA: "extracurricular",
        optionB: "physical education",
        optionC: "science",
        correctAnswer: "extracurricular",
      },
      {
        question:
          "A school has a computer laboratory for the students to learn ______________.",
        optionA: "mathematics",
        optionB: "history",
        optionC: "computers",
        correctAnswer: "computers",
      },
      {
        question:
          "A school has a canteen from where students can buy different ______________ for themselves.",
        optionA: "sports equipment",
        optionB: "eatables",
        optionC: "textbooks",
        correctAnswer: "eatables",
      },
      {
        question:
          "The principal is the head of the school. There are many teachers at a school for teaching different ______________ subjects.",
        optionA: "art",
        optionB: "science",
        optionC: "dance",
        correctAnswer: "science",
      },
      {
        question:
          "A security guard maintains the record of visitors as well as keeps strict watch on the school. This helps ensure ______________.",
        optionA: "safety and security",
        optionB: "cleanliness",
        optionC: "extracurricular activities",
        correctAnswer: "safety and security",
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
