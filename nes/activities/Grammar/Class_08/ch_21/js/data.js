export const chapter = "Chapter - 21: Story Writing ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What was the farmer's main flaw in the first story?",
          optionA: "Laziness",
          optionB: "Lack of resources",
          optionC: "Unwillingness to seek help",
          correctAnswer: "A) Laziness",
        },
        {
          question: "Why did the farmer's cart get stuck in the mud?",
          optionA: "Due to heavy load",
          optionB: "Recent rains making the road muddy",
          optionC: "Bullocks refused to move",
          correctAnswer: "B) Recent rains making the road muddy",
        },
        {
          question:
            "Who advised the farmer to help himself first in the first story?",
          optionA: "Zeus",
          optionB: "Hercules",
          optionC: "Poseidon",
          correctAnswer: "B) Hercules",
        },
        {
          question:
            "How did the farmer eventually get his cart out of the mud?",
          optionA: "Hercules lifted the cart out",
          optionB: "He sought help from passer-bys",
          optionC: "He put his own shoulder to the wheel",
          correctAnswer: "C) He put his own shoulder to the wheel",
        },
        {
          question: "What lesson can be derived from the first story?",
          optionA: "Kindness leads to success",
          optionB: "Self-reliance is important",
          optionC: "It's best to depend on others",
          correctAnswer: "B) Self-reliance is important",
        },
        {
          question:
            "What did the farmer do when he found the snake in the second story?",
          optionA: "Left it in the field",
          optionB: "Took it home and warmed it by the fire",
          optionC: "Crushed its head with a stick",
          correctAnswer: "B) Took it home and warmed it by the fire",
        },
        {
          question: "Why did the snake attack the farmer's son?",
          optionA: "It was hungry",
          optionB: "It mistook the son for a threat",
          optionC: "It was playful",
          correctAnswer: "B) It mistook the son for a threat",
        },
        {
          question: "What did the farmer realize after the snake's attack?",
          optionA: "He should've left the snake in the field",
          optionB: "Evil cannot be changed by kindness alone",
          optionC: "He should've kept the snake as a pet",
          correctAnswer: "B) Evil cannot be changed by kindness alone",
        },
        {
          question: "What did the farmer do to save his son from the snake?",
          optionA: "Asked the snake to stop",
          optionB: "Crushed the snake's head with a stick",
          optionC: "Ran away with his son",
          correctAnswer: "B) Crushed the snake's head with a stick",
        },
        {
          question:
            "What was the farmer's initial intention when he found the snake?",
          optionA: "To harm it",
          optionB: "To keep it as a pet",
          optionC: "To help it recover",
          correctAnswer: "C) To help it recover",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      [
        {
          question:
            "The farmer in the first story always depended on others and was not _______.",
          options: ["self-reliant", "resourceful", "independent"],
          correctAnswer: "self-reliant",
        },
        {
          question: "Due to the recent rains, the road was muddy and _______.",
          options: ["slippery", "dry", "smooth"],
          correctAnswer: "slippery",
        },
        {
          question: "Hercules advised the farmer to help _______.",
          options: ["others", "himself", "the bullocks"],
          correctAnswer: "himself",
        },
        {
          question:
            "The farmer eventually got his cart out of the mud by putting his own _______ to the wheel.",
          options: ["hands", "shoulder", "feet"],
          correctAnswer: "shoulder",
        },
        {
          question:
            "The snake in the second story was lying half-frozen across the _______.",
          options: ["river", "path", "field"],
          correctAnswer: "path",
        },
        {
          question:
            "The farmer took the snake home and warmed it by the _______.",
          options: ["river", "fire", "stove"],
          correctAnswer: "fire",
        },
        {
          question:
            "The snake moved towards the farmer's children, raising a hue and cry out of _______.",
          options: ["anger", "fear", "excitement"],
          correctAnswer: "fear",
        },
        {
          question:
            "The farmer realized that evil cannot be changed by _______ alone.",
          options: ["goodness", "kindness", "anger"],
          correctAnswer: "kindness",
        },
        {
          question:
            "The farmer saved his son from the snake by crushing its head with a _______.",
          options: ["stick", "stone", "rope"],
          correctAnswer: "stick",
        },
        {
          question:
            "The farmer's initial intention when he found the snake was to help it _______.",
          options: ["recover", "harm", "escape"],
          correctAnswer: "recover",
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
          question: "The farmer in the first story was very hardworking.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The recent rains made the road muddy and slippery in the first story.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The farmer sought help from Hercules when his cart got stuck in the mud.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The farmer's cart was pulled out of the mud by Hercules alone.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The farmer's son was attacked by a snake in the second story.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The farmer intentionally harmed the snake in the second story.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The snake attacked the farmer's children out of playfulness.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The farmer realized that evil can be changed by kindness alone.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The farmer's son was saved from the snake by running away.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The farmer's initial intention when he found the snake was to harm it.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
