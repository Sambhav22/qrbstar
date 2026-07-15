export const chapter = "Chapter - 18: Conversation";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              'What is the missing word in the sentence "My name is _____________ _"?',
            options: ["John", "Emily", "[User-inputted name]"],
            answer: "[User-inputted name]",
          },
          {
            question: "How does the person identify their gender?",
            options: ["Boy", "Girl", "Not specified"],
            answer: "Not specified",
          },
          {
            question:
              'In the statement "I am ____ years old," what should be filled in the blank?',
            options: ["Five", "[User-inputted age]", "Ten"],
            answer: "[User-inputted age]",
          },
          {
            question:
              'What is the missing word in the sentence "My father\'s name is _____________ _"?',
            options: ["Robert", "Susan", "[User-inputted father's name]"],
            answer: "[User-inputted father's name]",
          },
          {
            question: "What is the occupation of the person's father?",
            options: ["Doctor", "Teacher", "[User-inputted occupation]"],
            answer: "[User-inputted occupation]",
          },
          {
            question:
              'What is the missing word in the sentence "My mother\'s name is _____________ _"?',
            options: ["Jennifer", "Michael", "[User-inputted mother's name]"],
            answer: "[User-inputted mother's name]",
          },
          {
            question: "What is the occupation of the person's mother?",
            options: ["Engineer", "Chef", "[User-inputted occupation]"],
            answer: "[User-inputted occupation]",
          },
          {
            question: "What is the name of the person's school?",
            options: [
              "Sunshine Elementary",
              "[User-inputted school name]",
              "Green Valley High",
            ],
            answer: "[User-inputted school name]",
          },
          {
            question: "In which class does the person study?",
            options: ["First", "[User-inputted class]", "Fifth"],
            answer: "[User-inputted class]",
          },
          {
            question: "What is the person's hobby?",
            options: ["Reading", "Painting", "[User-inputted hobby]"],
            answer: "[User-inputted hobby]",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        questions: [
          {
            question: "What is your name? \nMy name is _____________ _",
            options: ["John", "Emily", "[User-inputted name]"],
            answer: "[User-inputted name]",
          },
          {
            question: "Are you a boy or a girl? \nI am a _______",
            options: ["Boy", "Girl", "Not specified"],
            answer: "[User-selected option]",
          },
          {
            question: "How old are you? \nI am ____ years old.",
            options: ["Five", "[User-inputted age]", "Ten"],
            answer: "[User-inputted age]",
          },
          {
            question:
              "What is your father's name? \nMy father's name is _____________ _",
            options: ["Robert", "Susan", "[User-inputted father's name]"],
            answer: "[User-inputted father's name]",
          },
          {
            question:
              "What is your father? \nMy father is a/an _____________ _",
            options: [
              "Engineer",
              "Teacher",
              "[User-inputted father's occupation]",
            ],
            answer: "[User-inputted father's occupation]",
          },
          {
            question:
              "What is your mother's name? \nMy mother's name is _____________ _",
            options: ["Jennifer", "Michael", "[User-inputted mother's name]"],
            answer: "[User-inputted mother's name]",
          },
          {
            question:
              "What is your mother? \nMy mother is a/an _____________ _",
            options: [
              "Doctor",
              "Artist",
              "[User-inputted mother's occupation]",
            ],
            answer: "[User-inputted mother's occupation]",
          },
          {
            question:
              "What is the name of your school? \nThe name of my school is ___________ _",
            options: [
              "Sunshine Elementary",
              "[User-inputted school name]",
              "Green Valley High",
            ],
            answer: "[User-inputted school name]",
          },
          {
            question:
              "In which class do you study? \nI study in ________________ _",
            options: ["First", "[User-inputted class]", "Fifth"],
            answer: "[User-inputted class]",
          },
          {
            question: "What is your hobby? \nMy hobby is _______________",
            options: ["Reading", "Painting", "[User-inputted hobby]"],
            answer: "[User-inputted hobby]",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        questions: [
          {
            question: "The person's name is _____________ _",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The person identifies as a _______",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The person is ____ years old.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The father's name is _____________ _",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The father is a/an _____________ _",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The mother's name is _____________ _",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The mother is a/an _____________ _",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The school's name is ___________ _",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The person studies in ________________ _",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The person's hobby is _______________",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
