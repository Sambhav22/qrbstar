export const chapter = "Chapter - 25: Story  Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What did the hen lay every day?",
          optionA: "Silver egg",
          optionB: "Golden egg",
          optionC: "Bronze egg",
          correctAnswer: "Golden egg",
        },
        {
          question: "Why did the farmer become rich?",
          optionA: "Because of his crops",
          optionB: "Because of the hen laying golden eggs",
          optionC: "Because of selling milk",
          correctAnswer: "Because of the hen laying golden eggs",
        },
        {
          question: "What did the farmer think about the hen?",
          optionA: "It's generous",
          optionB: "It's greedy",
          optionC: "It's lazy",
          correctAnswer: "It's greedy",
        },
        {
          question:
            "What did the farmer expect to find when he cut open the hen's stomach?",
          optionA: "Gold coins",
          optionB: "Silver eggs",
          optionC: "More eggs",
          correctAnswer: "More eggs",
        },
        {
          question: "Why did the dog cross the stream?",
          optionA: "To catch a fish",
          optionB: "To find a bone",
          optionC: "To drink water",
          correctAnswer: "To find a bone",
        },
        {
          question:
            "What did the dog see in the water when he crossed the bridge?",
          optionA: "Another dog",
          optionB: "A cat",
          optionC: "His own reflection",
          correctAnswer: "His own reflection",
        },
        {
          question:
            "What did the dog have in his mouth when he saw his reflection?",
          optionA: "Stick",
          optionB: "Stone",
          optionC: "Bone",
          correctAnswer: "Bone",
        },
        {
          question: "What did the dog lose when he opened his mouth to bark?",
          optionA: "His reflection",
          optionB: "His bone",
          optionC: "His tail",
          correctAnswer: "His bone",
        },
        {
          question: "Why did the dog end up with no bone?",
          optionA: "It was stolen by another dog",
          optionB: "It fell into the water when he barked",
          optionC: "He buried it and forgot",
          correctAnswer: "It fell into the water when he barked",
        },
        {
          question:
            "What can be concluded about the characters in the stories?",
          optionA: "They were content",
          optionB: "They were wise",
          optionC: "They were greedy",
          correctAnswer: "They were greedy",
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
            "There was a farmer. He had a ____. It laid a ____ egg every day.",
          options: ["Cow", "Hen", "Horse"],
          correctAnswer: "Hen",
        },
        {
          question:
            "The farmer became very ____ after selling the golden eggs.",
          options: ["Poor", "Sick", "Rich"],
          correctAnswer: "Rich",
        },
        {
          question:
            "The farmer thought the hen was ____ and decided to cut open its ____.",
          options: ["Generous", "Miser", "Lazy"],
          correctAnswer: "Miser",
        },
        {
          question:
            "Unfortunately, the farmer did not find any eggs but the ____ of the hen.",
          options: ["Heart", "Liver", "Stomach"],
          correctAnswer: "Stomach",
        },
        {
          question: "In the story of the dog, he found a piece of ____.",
          options: ["Wood", "Bone", "Meat"],
          correctAnswer: "Bone",
        },
        {
          question:
            "The dog saw his own ____ in the water while crossing a ____.",
          options: ["Shadow", "Reflection", "Footprints"],
          correctAnswer: "Reflection",
        },
        {
          question:
            "The dog opened his mouth to ____, and his bone fell into the ____.",
          options: ["Bark", "Sleep", "Bark", "Water"],
          correctAnswer: "Water",
        },
        {
          question: "As a result, the dog ended up with ____ bone.",
          options: ["Two", "No", "Another"],
          correctAnswer: "No",
        },
        {
          question:
            "The dog thought there was ____ dog with a bone in the water.",
          options: ["Another", "No", "A third"],
          correctAnswer: "Another",
        },
        {
          question:
            "The moral of these stories is that the characters were ____.",
          options: ["Wise", "Content", "Greedy"],
          correctAnswer: "Greedy",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "The hen in the story laid a silver egg every day.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The farmer became poor after selling the golden eggs.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The dog in the story found a piece of wood.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The dog saw another dog with a bone in the water.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The farmer found many eggs in the hen's stomach.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The dog lost its bone when it barked.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The farmer was satisfied with the golden eggs.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The dog ended up with two bones.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The hen in the story was generous.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The characters in the stories were content.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
