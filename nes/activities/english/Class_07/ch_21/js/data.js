export const chapter = "Chapter - 21: fhe Stranger Mother";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "Where was the narrator waiting for the north-bound train?",
            options: ["a) Bus station", "b) Ambala station", "c) School"],
            answer: "b) Ambala station",
          },
          {
            question: "How old was the narrator when this incident occurred?",
            options: ["a) 10", "b) 12", "c) 14"],
            answer: "b) 12",
          },
          {
            question:
              "What did the woman offer to the narrator at the station?",
            options: ["a) Books", "b) Tea and sweets", "c) Jewelry"],
            answer: "b) Tea and sweets",
          },
          {
            question:
              "How did the woman's kindness and generosity affect the narrator's feelings?",
            options: [
              "a) Made him suspicious",
              "b) Made him feel grateful and open up",
              "c) Made him dislike her",
            ],
            answer: "b) Made him feel grateful and open up",
          },
          {
            question:
              "What did the narrator say about his liking for strangers when he was cautioned by Satish's mother?",
            options: [
              "a) He dislikes strangers",
              "b) He likes strangers",
              "c) He is indifferent to strangers",
            ],
            answer: "b) He likes strangers",
          },
          {
            question:
              "Who did the woman pretend to be when questioned by Satish's mother?",
            options: [
              "a) A school teacher",
              "b) A relative",
              "c) The narrator's mother",
            ],
            answer: "c) The narrator's mother",
          },
          {
            question:
              "What gift did Satish's mother give to the narrator to share with Satish?",
            options: [
              "a) A cricket bat",
              "b) A bag of fruits and a big box of chocolates",
              "c) A football",
            ],
            answer: "b) A bag of fruits and a big box of chocolates",
          },
          {
            question:
              "How did the narrator feel about Satish's mother's patronizing tone?",
            options: ["a) Grateful", "b) Indifferent", "c) Hateful"],
            answer: "c) Hateful",
          },
          {
            question: "How does the story end?",
            options: [
              "a) The narrator and Satish's mother have a heated argument.",
              "b) The narrator and Satish's mother wave goodbye.",
              "c) The narrator kisses the woman on the platform.",
            ],
            answer: "c) The narrator kisses the woman on the platform.",
          },
          {
            question: "What color was the woman's attire at the station?",
            options: ["a) Red", "b) Blue", "c) White"],
            answer: "c) White",
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
        question:
          "In the story, the narrator was waiting for the north-bound train at ________ station.",
        options: ["a) Bus", "b) Ambala", "c) School"],
        answer: "b) Ambala",
      },
      {
        question:
          "The narrator was about ________ years old when this incident occurred.",
        options: ["a) 10", "b) 12", "c) 14"],
        answer: "b) 12",
      },
      {
        question:
          "The woman at the station offered the narrator tea and ________.",
        options: ["a) Books", "b) Sweets", "c) Jewelry"],
        answer: "b) Sweets",
      },
      {
        question:
          "The woman's kindness and generosity made the narrator feel __________ and open up.",
        options: ["a) Suspicious", "b) Grateful", "c) Disliked"],
        answer: "b) Grateful",
      },
      {
        question:
          "When cautioned by Satish's mother, the narrator expressed that he __________ strangers.",
        options: ["a) Dislikes", "b) Likes", "c) Is indifferent to"],
        answer: "b) Likes",
      },
      {
        question:
          "The woman pretended to be the narrator's ________ when questioned by Satish's mother.",
        options: ["a) School teacher", "b) Relative", "c) Mother"],
        answer: "c) Mother",
      },
      {
        question:
          "Satish's mother gave the narrator a bag of fruits and a big box of _______ to share with Satish.",
        options: ["a) Cricket bat", "b) Sweets", "c) Chocolates"],
        answer: "c) Chocolates",
      },
      {
        question:
          "The narrator felt __________ about Satish's mother's patronizing tone.",
        options: ["a) Grateful", "b) Indifferent", "c) Hateful"],
        answer: "c) Hateful",
      },
      {
        question:
          "The story ends with the narrator kissing the woman on the platform as the ________ moves slowly out of the station.",
        options: ["a) Bus", "b) Train", "c) Car"],
        answer: "b) Train",
      },
      {
        question:
          "The woman on the platform is described as a pale, sweet woman in a ________ attire.",
        options: ["a) Red", "b) Blue", "c) White"],
        answer: "c) White",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The narrator was waiting for the south-bound train.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The woman at the station offered the narrator books.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The woman's kindness and generosity made the narrator feel suspicious.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The woman pretended to be the narrator's school teacher when questioned by Satish's mother.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Satish's mother gave the narrator a bag of fruits and a big box of chocolates to share with Satish.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The narrator felt grateful about Satish's mother's patronizing tone.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The story ends with the narrator kissing the woman on the platform as the train moves slowly out of the station.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The woman on the platform is described as a pale, sweet woman in a red attire.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The narrator was traveling with his parents.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Satish and the narrator had a heated argument on the platform.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
