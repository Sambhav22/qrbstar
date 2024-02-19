export const chapter = "Chapter - 29 :   Letter Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "What is the missing word in the text after '6 o'clock father'?",
            options: ["Surprise", "Cake", "Address"],
            answer: "Address",
          },
          {
            question:
              "What year is mentioned in the text for the birthday party?",
            options: ["20XY", "20XX", "20ZZ"],
            answer: "20XX",
          },
          {
            question: "Fill in the blank: 'My birthday falls on _______.'",
            options: ["Today", "Tomorrow", "[Insert Date]"],
            answer: "[Insert Date]",
          },
          {
            question: "What kind of party is the author hosting?",
            options: ["Movie night", "Costume party", "Birthday party"],
            answer: "Birthday party",
          },
          {
            question: "Where will the party be held in the evening?",
            options: ["Park", "Restaurant", "[Insert Location]"],
            answer: "[Insert Location]",
          },
          {
            question: "Complete the sentence: 'It will be held at my _____.'",
            options: ["School", "House", "Playground"],
            answer: "House",
          },
          {
            question:
              "What does the author invite the reader to in the last paragraph?",
            options: ["Movie", "Dinner", "Birthday party"],
            answer: "Birthday party",
          },
          {
            question:
              "What does the reader have to come with, according to the invitation?",
            options: ["Gift", "Pet", "Friend"],
            answer: "Friend",
          },
          {
            question: "What special entertainment is mentioned in the text?",
            options: ["Live band", "Magician", "Clown"],
            answer: "Magician",
          },
          {
            question: "How does the author end the invitation?",
            options: ["Sincerely", "Best wishes", "Thank you"],
            answer: "Thank you",
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
            question: '"tricks 6 o\'clock __________."',
            options: ["Cake", "Father", "Mother"],
            answer: "Father",
          },
          {
            question: 'Complete the sentence: "My birthday falls on _______."',
            options: ["Today", "Tomorrow", "[Insert Date]"],
            answer: "[Insert Date]",
          },
          {
            question: '"I am giving a ______ _ party."',
            options: ["Surprise", "Birthday", "Magical"],
            answer: "Birthday",
          },
          {
            question:
              'Complete the sentence: "The party will be held in the evening at _______."',
            options: ["Park", "Restaurant", "[Insert Location]"],
            answer: "[Insert Location]",
          },
          {
            question: '"It will be held at my _____ _."',
            options: ["School", "House", "Playground"],
            answer: "House",
          },
          {
            question:
              'Complete the sentence: "I invite you to my birthday _______."',
            options: ["Dinner", "Celebration", "Party"],
            answer: "Party",
          },
          {
            question: '"You should come with your and ______ _."',
            options: ["Cake", "Gift", "Friend"],
            answer: "Friend",
          },
          {
            question:
              'Complete the sentence: "I have also arranged for a magician. He will entertain us with his _______."',
            options: ["Music", "Tricks", "Dance"],
            answer: "Tricks",
          },
          {
            question: '"Thank you. Yours _______."',
            options: ["Truly", "Sincerely", "Friend"],
            answer: "Friend",
          },
          {
            question: 'Complete the closing phrase: "Yours _______."',
            options: ["Respectfully", "Gratefully", "Obediently"],
            answer: "Gratefully",
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
            question: "The person is hosting a surprise birthday party.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The party will be held in the morning.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The location of the party is a restaurant.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The party will take place at the friend's house.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "The invitation requests attendees to bring a pet.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The person has arranged for a live band.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The invitation is for a dinner celebration.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The magician will entertain with dance.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The closing phrase is 'Yours Respectfully.'",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The person expresses gratitude at the end.",
            options: ["True", "False"],
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
