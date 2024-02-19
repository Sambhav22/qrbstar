export const chapter = "Chapter - 23:  Application Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the purpose of Reema's application?",
          optionA: "Requesting extra classes",
          optionB: "Seeking leave of absence",
          optionC: "Inviting the Principal to a party",
          correctAnswer: "Seeking leave of absence",
        },
        {
          question:
            "On which day does Reema's birthday fall according to the application?",
          optionA: "Unspecified",
          optionB: "Mentioned but hidden",
          optionC: "Not mentioned",
          correctAnswer: "Not mentioned",
        },
        {
          question: "Why does Reema want leave of absence?",
          optionA: "Attending a family function",
          optionB: "Organizing a birthday party",
          optionC: "Preparing for exams",
          correctAnswer: "Organizing a birthday party",
        },
        {
          question: "To whom is the application addressed?",
          optionA: "Class Teacher",
          optionB: "Principal",
          optionC: "School Secretary",
          correctAnswer: "Principal",
        },
        {
          question:
            "In which school does Reema study according to the application?",
          optionA: "Delhi Public School",
          optionB: "Delhi International School",
          optionC: "Delhi High School",
          correctAnswer: "Delhi Public School",
        },
        {
          question:
            "What is Reema's class and section mentioned in the application?",
          optionA: "Class II B",
          optionB: "Class I A",
          optionC: "Class III C",
          correctAnswer: "Class II B",
        },
        {
          question: "What is Reema's Roll Number as per the application?",
          optionA: "Roll No. 10",
          optionB: "Roll No. 12",
          optionC: "Roll No. 15",
          correctAnswer: "Roll No. 12",
        },
        {
          question: "What is the closing salutation used in the application?",
          optionA: "Yours truly",
          optionB: "Yours faithfully",
          optionC: "Yours sincerely",
          correctAnswer: "Yours faithfully",
        },
        {
          question:
            "According to the application, for how many days is Reema requesting leave?",
          optionA: "Two days",
          optionB: "One day",
          optionC: "Three days",
          correctAnswer: "One day",
        },
        {
          question:
            "What is the missing information in the application that needs to be filled by Reema?",
          optionA: "Leave start date",
          optionB: "School address",
          optionC: "Birthday gift list",
          correctAnswer: "Leave start date",
        },
      ],
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
            question: "You are _________.",
            options: ["a) Principal", "b) Reema", "c) Class II B"],
            answer: "b) Reema",
          },
          {
            question:
              "Write an application to your ________ for leave of absence for one day on your birthday.",
            options: ["a) Teacher", "b) Classmate", "c) Principal"],
            answer: "c) Principal",
          },
          {
            question:
              "The date for the leave application is missing. Fill in the blank: Date: _________.",
            options: [
              "a) December 25",
              "b) [Insert current date]",
              "c) January 1",
            ],
            answer: "b) [Insert current date]",
          },
          {
            question:
              "Fill in the blank: The Principal of ________ Public School.",
            options: ["a) Mumbai", "b) Delhi", "c) Kolkata"],
            answer: "b) Delhi",
          },
          {
            question: "Reema's birthday falls on _________.",
            options: [
              "a) June 10",
              "b) [Insert your current date]",
              "c) November 15",
            ],
            answer: "b) [Insert your current date]",
          },
          {
            question: "Reema requests leave of absence for ________ day(s).",
            options: ["a) Half", "b) One", "c) Two"],
            answer: "b) One",
          },
          {
            question: "Reema wants to hold a ________ on her birthday.",
            options: ["a) Meeting", "b) Party", "c) Class"],
            answer: "b) Party",
          },
          {
            question:
              'The closing line of the application is "Yours ________."',
            options: ["a) Truly", "b) Sincerely", "c) Faithfully"],
            answer: "c) Faithfully",
          },
          {
            question: "Reema is in ________.",
            options: ["a) Class I", "b) Class II B", "c) Class III"],
            answer: "b) Class II B",
          },
          {
            question: "Reema's roll number is ________.",
            options: ["a) 5", "b) 12", "c) 20"],
            answer: "b) 12",
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
            question: "Reema's birthday falls on [Insert your current date].",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question:
              "The date for the leave application is missing. Fill in the blank: Date: [Insert current date].",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question: "Reema wants to hold a party on her birthday.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question:
              "The Principal of Delhi Public School is located in Mumbai.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question: "Reema is in Class III.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question: "Reema's roll number is 20.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question: "Reema is requesting leave for two days on her birthday.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question: "The closing line of the application is 'Yours Truly.'",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question: "Reema's birthday falls on November 15.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question: "Reema is in Class II B.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
        ],
      },
    ],
  };
}

export var activityData;
