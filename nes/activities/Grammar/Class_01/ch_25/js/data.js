export const chapter = "Chapter - 25 : Months of the Year";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "In which position does February occur in a standard calendar?",
            options: ["1st", "2nd", "3rd"],
            answer: "2nd",
          },
          {
            question: "Which month typically has 30 days?",
            options: ["April", "June", "September"],
            answer: "September",
          },
          {
            question:
              "Which two consecutive months have the same number of days?",
            options: [
              "March and April",
              "June and July",
              "August and September",
            ],
            answer: "March and April",
          },
          {
            question: "Which month is the seventh month of the year?",
            options: ["July", "August", "September"],
            answer: "July",
          },
          {
            question: "In a leap year, which month has 29 days?",
            options: ["February", "March", "April"],
            answer: "February",
          },
          {
            question:
              "Which month marks the beginning of the second half of the year?",
            options: ["June", "July", "August"],
            answer: "July",
          },
          {
            question:
              "Which month is known for having the longest day in the Northern Hemisphere?",
            options: ["June", "July", "August"],
            answer: "June",
          },
          {
            question:
              "Which month is often associated with spring in the Southern Hemisphere?",
            options: ["October", "November", "September"],
            answer: "September",
          },
          {
            question:
              "In which month does the winter solstice occur in the Northern Hemisphere?",
            options: ["December", "January", "February"],
            answer: "December",
          },
          {
            question: "Which month is named after the Roman god of war?",
            options: ["March", "April", "May"],
            answer: "March",
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
            question: "The month of __________ comes after December.",
            options: ["January", "February", "March"],
            answer: "February",
          },
          {
            question:
              "In the northern hemisphere, June has the __________ day of the year.",
            options: ["Shortest", "Longest", "Equal"],
            answer: "Longest",
          },
          {
            question:
              "The winter solstice usually occurs in the month of __________.",
            options: ["November", "December", "January"],
            answer: "December",
          },
          {
            question:
              "September is often associated with the beginning of the __________ season.",
            options: ["Winter", "Spring", "Autumn"],
            answer: "Autumn",
          },
          {
            question:
              "The month of __________ is named after the Roman god of war.",
            options: ["March", "April", "May"],
            answer: "March",
          },
          {
            question: "__________ is the seventh month of the year.",
            options: ["July", "August", "September"],
            answer: "July",
          },
          {
            question:
              "The month of __________ is known for its unpredictable weather, bringing showers.",
            options: ["April", "May", "June"],
            answer: "April",
          },
          {
            question: "October is the __________ month of the year.",
            options: ["Eighth", "Ninth", "Tenth"],
            answer: "Tenth",
          },
          {
            question: "In a leap year, February has __________ days.",
            options: ["28", "29", "30"],
            answer: "29",
          },
          {
            question:
              "The month of __________ is traditionally associated with new beginnings and resolutions.",
            options: ["January", "February", "March"],
            answer: "January",
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
            question: "February is always the coldest month of the year.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "April typically has 31 days.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "September marks the beginning of autumn in the Northern Hemisphere.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "July is the only month with exactly 30 days.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "In a leap year, February has 29 days.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "June has the shortest day of the year in the Southern Hemisphere.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "November is the only month that cannot be abbreviated to a single letter.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "December is the last month of the year in the Gregorian calendar.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "March and April always have the same number of days.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "August is named after the Roman emperor Augustus.",
            options: ["True", "False"],
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
