export const chapter = "Chapter - 23: The Long Wail";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What was in the nest when the spotted cat first found it?",
          optionA: "Two lovely blue eggs",
          optionB: "Five tiny birds",
          optionC: "Nothing",
          correctAnswer: "Nothing",
        },
        {
          question:
            "How many weeks did the spotted cat wait before climbing up to the nest for the first time?",
          optionA: "One week",
          optionB: "Two weeks",
          optionC: "Three weeks",
          correctAnswer: "One week",
        },
        {
          question: "What did the spotted cat prefer over eggs?",
          optionA: "Eggs",
          optionB: "Young birds",
          optionC: "Mice and rats",
          correctAnswer: "Young birds",
        },
        {
          question: "How did the spotted cat occupy her time while waiting?",
          optionA: "Playing with the eggs",
          optionB: "Catching mice and rats",
          optionC: "Singing to herself",
          correctAnswer: "Catching mice and rats",
        },
        {
          question:
            "How many eggs were in the nest when the spotted cat checked it after waiting for another week?",
          optionA: "Two eggs",
          optionB: "Three eggs",
          optionC: "Five eggs",
          correctAnswer: "Five eggs",
        },
        {
          question:
            "Why did the spotted cat decide to wait longer after finding five eggs in the nest?",
          optionA: "She thought eggs were better than birds",
          optionB: "She wanted the eggs to hatch into young birds",
          optionC: "She didn't like eggs at all",
          correctAnswer: "She wanted the eggs to hatch into young birds",
        },
        {
          question:
            "Why did the spotted cat become very happy after the eggs hatched into five tiny birds?",
          optionA: "She loved the color of the birds",
          optionB: "She could finally eat them",
          optionC: "She was patient and it paid off",
          correctAnswer: "She was patient and it paid off",
        },
        {
          question:
            "What made the spotted cat decide to wait even longer before taking one of the young birds?",
          optionA: "The young birds were too loud",
          optionB: "The young birds were too thin",
          optionC: "She wasn't hungry yet",
          correctAnswer: "The young birds were too thin",
        },
        {
          question:
            "What was the father-bird doing to help the young birds grow fat?",
          optionA: "Feeding them worms",
          optionB: "Chasing away the spotted cat",
          optionC: "Singing them lullabies",
          correctAnswer: "Feeding them worms",
        },
        {
          question:
            "What was the spotted cat's reaction when she found the nest empty?",
          optionA: "She was happy and left the nest",
          optionB: "She was confused and waited longer",
          optionC: "She was angry and called the birds ungrateful",
          correctAnswer: "She was angry and called the birds ungrateful",
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
            "When the spotted cat first found the nest, it was ________.",
          options: ["Empty", "Filled with mice", "Covered in leaves"],
          correctAnswer: "Empty",
        },
        {
          question:
            "The spotted cat was a patient cat, and ________ was before her.",
          options: ["Winter", "Summer", "Spring"],
          correctAnswer: "Summer",
        },
        {
          question:
            "The spotted cat decided to wait for young birds because she believed that ________ were better than eggs.",
          options: ["Mice", "Squirrels", "Young birds"],
          correctAnswer: "Young birds",
        },
        {
          question:
            "While waiting, the spotted cat passed the time by catching ________.",
          options: ["Butterflies", "Mice and rats", "Frogs"],
          correctAnswer: "Mice and rats",
        },
        {
          question:
            "After waiting for another week, the spotted cat found ________ eggs in the nest.",
          options: ["Two", "Three", "Five"],
          correctAnswer: "Five",
        },
        {
          question:
            "The spotted cat decided to wait longer for the eggs to hatch into young birds because she believed that ________ birds were much better.",
          options: ["Small", "Thin", "Fat"],
          correctAnswer: "Fat",
        },
        {
          question:
            "The father-bird helped the young birds grow fat by bringing them ________.",
          options: ["Worms", "Berries", "Seeds"],
          correctAnswer: "Worms",
        },
        {
          question:
            "The spotted cat became very happy when she saw the young birds in the nest because her patience had ________.",
          options: ["Disappeared", "Paid off", "Frustrated her"],
          correctAnswer: "Paid off",
        },
        {
          question:
            "When the spotted cat found the nest empty, she called the birds ________ and ________.",
          options: [
            "Grateful, happy",
            "Ungrateful, mean",
            "Friendly, generous",
          ],
          correctAnswer: "Ungrateful, mean",
        },
        {
          question:
            "The spotted cat believed that it was a ________ to be patient.",
          options: ["Waste of time", "Good thing", "Boring activity"],
          correctAnswer: "Good thing",
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
            "The spotted cat found the nest empty when she first saw it.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The spotted cat waited for a total of three weeks before checking the nest again.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The spotted cat preferred eggs over young birds.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The spotted cat filled her time by catching butterflies while waiting.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "There were three eggs in the nest when the spotted cat checked it for the second time.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The father-bird helped the young birds grow fat by bringing them seeds.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The spotted cat was angry when she found the nest empty.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The spotted cat believed that thin birds were better than fat ones.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The spotted cat was impatient and couldn't wait to eat the young birds.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The spotted cat's patience paid off in the end.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
