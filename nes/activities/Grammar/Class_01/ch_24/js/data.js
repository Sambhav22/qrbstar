export const chapter = "Chapter - 24: Days of the Week";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "Which day comes after Monday?",
            options: ["Sunday", "Tuesday", "Wednesday"],
            answer: "Tuesday",
          },
          {
            question: "What day comes before Saturday?",
            options: ["Thursday", "Sunday", "Friday"],
            answer: "Friday",
          },
          {
            question: "If today is Sunday, what day will it be tomorrow?",
            options: ["Monday", "Tuesday", "Wednesday"],
            answer: "Monday",
          },
          {
            question: "Which day is in the middle of the week?",
            options: ["Tuesday", "Wednesday", "Thursday"],
            answer: "Wednesday",
          },
          {
            question: "If today is Friday, what day was it two days ago?",
            options: ["Wednesday", "Thursday", "Tuesday"],
            answer: "Wednesday",
          },
          {
            question: "Which day comes right before Thursday?",
            options: ["Tuesday", "Wednesday", "Friday"],
            answer: "Wednesday",
          },
          {
            question: "What day comes two days before Sunday?",
            options: ["Friday", "Saturday", "Monday"],
            answer: "Friday",
          },
          {
            question:
              "If today is Saturday, what day will it be three days from now?",
            options: ["Tuesday", "Wednesday", "Sunday"],
            answer: "Sunday",
          },
          {
            question: "Which day is traditionally considered a weekend day?",
            options: ["Wednesday", "Thursday", "Saturday"],
            answer: "Saturday",
          },
          {
            question:
              "If today is Tuesday, what day will it be five days from now?",
            options: ["Sunday", "Monday", "Saturday"],
            answer: "Sunday",
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
            question: "The day that comes after __________ is Tuesday.",
            options: ["Sunday", "Monday", "Wednesday"],
            answer: "Monday",
          },
          {
            question:
              "If today is Saturday, the day that comes two days before it is __________.",
            options: ["Thursday", "Friday", "Sunday"],
            answer: "Friday",
          },
          {
            question: "The day that is right before __________ is Friday.",
            options: ["Tuesday", "Wednesday", "Saturday"],
            answer: "Saturday",
          },
          {
            question:
              "If today is Wednesday, the day that comes three days from now is __________.",
            options: ["Sunday", "Thursday", "Saturday"],
            answer: "Saturday",
          },
          {
            question:
              "The day that is in the middle of the week is __________.",
            options: ["Tuesday", "Wednesday", "Thursday"],
            answer: "Wednesday",
          },
          {
            question:
              "If today is Sunday, the day that comes two days after it is __________.",
            options: ["Tuesday", "Wednesday", "Monday"],
            answer: "Tuesday",
          },
          {
            question: "The day that is right after __________ is Monday.",
            options: ["Friday", "Thursday", "Wednesday"],
            answer: "Thursday",
          },
          {
            question:
              "If today is Monday, the day that comes four days from now is __________.",
            options: ["Friday", "Saturday", "Tuesday"],
            answer: "Friday",
          },
          {
            question:
              "The day that is traditionally considered a weekend day is __________.",
            options: ["Wednesday", "Thursday", "Saturday"],
            answer: "Saturday",
          },
          {
            question:
              "If today is Friday, the day that comes one day before it is __________.",
            options: ["Thursday", "Saturday", "Sunday"],
            answer: "Thursday",
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
            question: "Sunday is the first day of the week.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "There are a total of 8 days in a week.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Wednesday is the middle day of the week.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Friday comes before Thursday.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Monday is traditionally considered the second day of the weekend.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "There are 52 weeks in a non-leap year.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Saturday is the last day of the week.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Tuesday comes after Monday.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Thursday is the fifth day of the week.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The weekend consists of Saturday and Sunday.",
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
