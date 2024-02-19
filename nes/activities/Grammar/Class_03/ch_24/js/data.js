export const chapter = "Chapter - 24: Letter  Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What did Sandhya receive as a birthday gift from her brother?",
          optionA: "Toy",
          optionB: "Storybook",
          optionC: "Dress",
          correctAnswer: "Storybook",
        },
        {
          question: "Where does Sandhya live?",
          optionA: "Mumbai",
          optionB: "New Delhi",
          optionC: "Kolkata",
          correctAnswer: "New Delhi",
        },
        {
          question:
            "How did Sandhya feel about her brother's absence on her birthday?",
          optionA: "Excited",
          optionB: "Overwhelmed",
          optionC: "Indifferent",
          correctAnswer: "Overwhelmed",
        },
        {
          question:
            "What is Sandhya planning to do after finishing the letter?",
          optionA: "Watch TV",
          optionB: "Cook dinner",
          optionC: "Read all the stories in the storybook",
          correctAnswer: "Read all the stories in the storybook",
        },
        {
          question: "Where does Sandhya ask her brother to write regularly?",
          optionA: "In a diary",
          optionB: "In a postcard",
          optionC: "In letters",
          correctAnswer: "In letters",
        },
        {
          question:
            "What message does Sandhya convey about her family remembering her brother?",
          optionA: "They forget him",
          optionB: "They remember him daily",
          optionC: "They remember him occasionally",
          correctAnswer: "They remember him daily",
        },
        {
          question: "Sandhya's address is at:",
          optionA: "Ankur Mansions",
          optionB: "Ankur Apartments",
          optionC: "Ankur Towers",
          correctAnswer: "Ankur Apartments",
        },
        {
          question: "In which city does Sandhya live?",
          optionA: "Mumbai",
          optionB: "New Delhi",
          optionC: "Kolkata",
          correctAnswer: "New Delhi",
        },
        {
          question:
            "Sandhya thanked her brother for the birthday gift but mentioned it cannot make up for:",
          optionA: "His absence",
          optionB: "The celebration",
          optionC: "Her other gifts",
          correctAnswer: "His absence",
        },
        {
          question: "What is Sandhya's closing message to her brother?",
          optionA: "Come late",
          optionB: "Come soon",
          optionC: "Don't come",
          correctAnswer: "Come soon",
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
          question: "Hello, how are you? I missed you a lot on my ___________.",
          options: ["Anniversary", "Birthday", "Graduation"],
          correctAnswer: "Birthday",
        },
        {
          question:
            "I was overwhelmed with the gift that you sent me on this __________.",
          options: ["Event", "Occasion", "Celebration"],
          correctAnswer: "Occasion",
        },
        {
          question:
            "I thank you for this lovely gift, but it cannot make up for your __________.",
          options: ["Presence", "Absence", "Surprise"],
          correctAnswer: "Absence",
        },
        {
          question:
            "The storybook you sent me as the gift contains many interesting __________.",
          options: ["Comics", "Recipes", "Stories"],
          correctAnswer: "Stories",
        },
        {
          question:
            "The next thing I am going to do is to read them all soon after I finished this __________.",
          options: ["Call", "Visit", "Letter"],
          correctAnswer: "Letter",
        },
        {
          question: "We all remember you __________.",
          options: ["Weekly", "Monthly", "Daily"],
          correctAnswer: "Daily",
        },
        {
          question: "Keep writing __________.",
          options: ["Occasionally", "Rarely", "Regularly"],
          correctAnswer: "Regularly",
        },
        {
          question: "We are waiting for you, come __________.",
          options: ["Eventually", "Quickly", "Soon"],
          correctAnswer: "Soon",
        },
        {
          question: "I once again thank you for the __________ gift.",
          options: ["Beautiful", "Nice", "Expensive"],
          correctAnswer: "Nice",
        },
        {
          question: "Yours __________ Sandhya.",
          options: ["Sincerely", "Affectionately", "Respectfully"],
          correctAnswer: "Affectionately",
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
            "Sandhya received a dress as a birthday gift from her brother.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Sandhya lives in Kolkata.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Sandhya felt indifferent about her brother's absence on her birthday.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Sandhya is planning to cook dinner after finishing the letter.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Sandhya asks her brother to write in a diary regularly.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Sandhya's address is at Ankur Towers.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Sandhya thanked her brother for an expensive gift.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Sandhya lives in New Delhi.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Sandhya is overwhelmed with the gift from her brother.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Sandhya closed the letter with 'Yours respectfully.'",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
