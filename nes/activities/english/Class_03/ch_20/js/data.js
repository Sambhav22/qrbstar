export const chapter = "Chapter - 20: The Stance";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What was the farmer's original intention when he and his son set out to the market?",
        optionA: "To ride the donkey",
        optionB: "To walk alongside the donkey",
        optionC: "To sell the donkey",
        correctAnswer: "To sell the donkey",
      },
      {
        question:
          "Why did the farmer and his son initially choose to walk instead of riding the donkey?",
        optionA: "They wanted to exercise.",
        optionB: "They were too heavy for the donkey.",
        optionC: "They wanted the donkey to appear fresh and healthy.",
        correctAnswer: "They wanted the donkey to appear fresh and healthy.",
      },
      {
        question:
          "Why did the farmer ask his son to ride the donkey instead of walking?",
        optionA: "To save time.",
        optionB: "To avoid being mocked.",
        optionC: "To give the son a chance to ride.",
        correctAnswer: "To avoid being mocked.",
      },
      {
        question:
          "What did the group of women say when they saw the son riding the donkey?",
        optionA: "They are both wise.",
        optionB: "The son is more stupid than the donkey.",
        optionC: "The farmer is making a good decision.",
        correctAnswer: "The son is more stupid than the donkey.",
      },
      {
        question:
          "What did the farmer do after being embarrassed by the comments of the group of women?",
        optionA: "He continued walking.",
        optionB: "He asked his son to walk alongside.",
        optionC: "He rode the donkey himself.",
        correctAnswer: "He rode the donkey himself.",
      },
      {
        question: "How did the vendor react to the farmer riding the donkey?",
        optionA: "He praised the farmer for his decision.",
        optionB: "He criticized the farmer for being an old fool.",
        optionC: "He offered to buy the donkey.",
        correctAnswer: "He criticized the farmer for being an old fool.",
      },
      {
        question:
          "What did the priest suggest they should have done with the donkey?",
        optionA: "Carried it on their shoulders.",
        optionB: "Sold it at the market.",
        optionC: "Rode it together.",
        correctAnswer: "Carried it on their shoulders.",
      },
      {
        question:
          "Why did the farmer and his son finally climb down from the donkey?",
        optionA: "They decided to sell it.",
        optionB: "They felt sorry for the donkey.",
        optionC: "They heard a traveler's comment.",
        correctAnswer: "They heard a traveler's comment.",
      },
      {
        question: "How did the farmer and his son enter the market in the end?",
        optionA: "Riding the donkey.",
        optionB: "Walking side by side.",
        optionC: "Carrying the donkey.",
        correctAnswer: "Carrying the donkey.",
      },
      {
        question:
          "How did the farmer respond to the laughter and mockery they faced in the market?",
        optionA: "He became angry and shouted at the crowd.",
        optionB: "He decided to keep walking with the donkey as they were.",
        optionC: "He sold the donkey as quickly as possible.",
        correctAnswer:
          "He decided to keep walking with the donkey as they were.",
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
          "There lived a __________ in a village who needed money for a domestic task.",
        options: ["farmer", "doctor", "teacher"],
        correctAnswer: "farmer",
      },
      {
        question: "The farmer and his son were on the way to the __________.",
        options: ["park", "market", "school"],
        correctAnswer: "market",
      },
      {
        question:
          "They wanted to look the donkey __________ and healthy, so they walked slowly and did not ride it.",
        options: ["sick", "fresh", "fast"],
        correctAnswer: "fresh",
      },
      {
        question:
          "The son rode the donkey, and they had barely gone a few steps when a group of women passed by. One of them remarked, 'Look at this young fool! He rides the donkey when the old father __________.'",
        options: ["dances", "sings", "walks"],
        correctAnswer: "walks",
      },
      {
        question:
          "The farmer was embarrassed and asked his son to get down, and he __________ rode the donkey now.",
        options: ["quickly", "slowly", "himself"],
        correctAnswer: "himself",
      },
      {
        question:
          "The farmer was confused and asked his son to climb up __________ him.",
        options: ["above", "behind", "alongside"],
        correctAnswer: "behind",
      },
      {
        question:
          "Even this stance did not last long when they heard a priest comment, 'What an __________ on the poor beast!'",
        options: ["honor", "atrocity", "achievement"],
        correctAnswer: "atrocity",
      },
      {
        question:
          "The farmer and his son quickly climbed down and took a new __________.",
        options: ["direction", "position", "stance"],
        correctAnswer: "stance",
      },
      {
        question:
          "When the two entered the market, they could hear a loud laughter __________ around.",
        options: ["disappearing", "bursting", "fading"],
        correctAnswer: "bursting",
      },
      {
        question: "The two were now carrying the __________.",
        options: ["elephant", "donkey", "bicycle"],
        correctAnswer: "donkey",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The sun rises in the west.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Dogs are a type of reptile.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Water boils at room temperature.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The Earth is flat.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Oxygen is a noble gas.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The moon is made of cheese.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Paris is the capital of France.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Jupiter is the smallest planet in our solar system.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "All mammals lay eggs.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Water is composed of hydrogen and helium.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
