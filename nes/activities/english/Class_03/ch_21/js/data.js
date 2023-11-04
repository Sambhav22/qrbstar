export const chapter = "Chapter - 21: Maior Somnath Sharma ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "When did India become independent?",
          optionA: "1947",
          optionB: "1948",
          optionC: "1949",
          correctAnswer: "1947",
        },
        {
          question: "How did Pakistan send its soldiers to occupy Kashmir?",
          optionA: "In military uniforms",
          optionB: "Disguised as tribal people",
          optionC: "By air",
          correctAnswer: "Disguised as tribal people",
        },
        {
          question:
            "What was the name of the Indian officer mentioned in the text who had a broken hand but still went to fight the enemy?",
          optionA: "Major Sunil Sharma",
          optionB: "Major Somnath Sharma",
          optionC: "Major Sameer Sharma",
          correctAnswer: "Major Somnath Sharma",
        },
        {
          question:
            "Where was Major Somnath Sharma and his company posted during the battle?",
          optionA: "In a village",
          optionB: "On a small hill in Badgam",
          optionC: "Near the Pakistani border",
          correctAnswer: "On a small hill in Badgam",
        },
        {
          question:
            "What kind of clothing did the disguised Pakistani soldiers wear to hide their identity?",
          optionA: "Military uniforms",
          optionB: "Turbans",
          optionC: "Firan (long loose coats)",
          correctAnswer: "Firan (long loose coats)",
        },
        {
          question:
            "How many attackers did Major Somnath Sharma and his soldiers face during the battle?",
          optionA: "Over 100",
          optionB: "Over 200",
          optionC: "More than 700",
          correctAnswer: "More than 700",
        },
        {
          question:
            "How many Indian soldiers were killed in the battle for Badgam?",
          optionA: "7",
          optionB: "23",
          optionC: "300",
          correctAnswer: "23",
        },
        {
          question:
            "What was the highest Indian award for bravery that Major Somnath Sharma was awarded?",
          optionA: "Param Vir Chakra",
          optionB: "Bharat Ratna",
          optionC: "Padma Shri",
          correctAnswer: "Param Vir Chakra",
        },
        {
          question: "How did Major Somnath Sharma die during the battle?",
          optionA: "Shot by an enemy soldier",
          optionB: "A bomb fell near him",
          optionC: "Natural causes",
          correctAnswer: "A bomb fell near him",
        },
        {
          question: "How was Badgam saved from the enemy?",
          optionA: "By a diplomatic agreement",
          optionB: "By retreating Indian soldiers",
          optionC: "Our soldiers won the battle",
          correctAnswer: "Our soldiers won the battle",
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
          question:
            "When India became free in 1947, Kashmir became our _________.",
          options: ["territory", "land", "part"],
          correctAnswer: "part",
        },
        {
          question:
            "Pakistan sent its soldiers disguised as _________ to occupy Kashmir.",
          options: ["tourists", "tribespeople", "diplomats"],
          correctAnswer: "tribespeople",
        },
        {
          question: "Major Som.nath Sharma broke his hand while _________.",
          options: ["exercising", "climbing", "swimming"],
          correctAnswer: "exercising",
        },
        {
          question:
            "Major Som.nath Sharma was awarded the _________ for his bravery.",
          options: ["Bharat Ratna", "Param Vir Chakra", "Padma Shri"],
          correctAnswer: "Param Vir Chakra",
        },
        {
          question:
            "The disguised Pakistani soldiers were wearing long loose coats called _________.",
          options: ["turbans", "cloaks", "firan"],
          correctAnswer: "firan",
        },
        {
          question:
            "Major Somnath Sharma and his soldiers were posted in _________ during the battle.",
          options: ["a forest", "a village", "Badgam"],
          correctAnswer: "Badgam",
        },
        {
          question:
            "The Indian Army was not in Kashmir at that time, so many Indian soldiers were sent by _________.",
          options: ["road", "train", "air"],
          correctAnswer: "air",
        },
        {
          question:
            "There were more than ______ attackers when the Pakistanis attacked the Indian post.",
          options: ["100", "300", "700"],
          correctAnswer: "700",
        },
        {
          question:
            "Major Somnath Sharma and his soldiers fought bravely despite facing more than _______ attackers.",
          options: ["100", "200", "700"],
          correctAnswer: "700",
        },
        {
          question:
            "Major Somnath Sharma was killed when a bomb fell ___________.",
          options: ["near the enemy", "near the Indian soldiers", "near him"],
          correctAnswer: "near him",
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
          question: "Kashmir became part of India in 1947.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Pakistan sent its soldiers dressed as tribal people to occupy Kashmir.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Major Som.nath Sharma had a broken leg during the battle.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Major Somnath Sharma and his soldiers were stationed in a forest during the battle.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The Indian Army was present in Kashmir at the time of the attack.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The disguised Pakistani soldiers wore long loose coats called 'firan' to hide their identity.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The Indian soldiers faced more than 200 attackers during the battle.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Major Somnath Sharma was awarded the Bharat Ratna for his bravery.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Major Somnath Sharma died due to an injury caused by enemy gunfire.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The battle for Badgam was won by the Pakistani soldiers.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
