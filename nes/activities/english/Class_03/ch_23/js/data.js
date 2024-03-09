export const chapter = "Chapter -23: The Long Wait";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What did the spotted cat find in the nest when she first discovered it?",
          optionA: "Two young birds",
          optionB: "Five eggs",
          optionC: "Nothing",
          correctAnswer: "Nothing",
        },
        {
          question:
            "How many eggs were in the nest when the spotted cat checked it the second time?",
          optionA: "Two",
          optionB: "Five",
          optionC: "Ten",
          correctAnswer: "Five",
        },
        {
          question: "What did the spotted cat think was better than eggs?",
          optionA: "Young birds",
          optionB: "Mice and rats",
          optionC: "Sleeping",
          correctAnswer: "Young birds",
        },
        {
          question:
            "What did the spotted cat do while waiting for the eggs to hatch?",
          optionA: "Climbed other trees",
          optionB: "Caught mice and rats",
          optionC: "Swam in the river",
          correctAnswer: "Caught mice and rats",
        },
        {
          question:
            "What did the spotted cat see in the nest on her third visit?",
          optionA: "Ten eggs",
          optionB: "Five young birds",
          optionC: "Three young birds",
          correctAnswer: "Five young birds",
        },
        {
          question:
            "Why did the spotted cat decide to wait longer before taking any birds?",
          optionA: "She was not hungry",
          optionB: "She wanted them to grow fat",
          optionC: "She was scared of the birds",
          correctAnswer: "She wanted them to grow fat",
        },
        {
          question: "What did the father-bird do all day?",
          optionA: "Played with the spotted cat",
          optionB: "Brought worms to feed the young birds",
          optionC: "Flew away",
          correctAnswer: "Brought worms to feed the young birds",
        },
        {
          question:
            "Why did the spotted cat think the young birds would soon be fat enough?",
          optionA: "She saw them eating a lot",
          optionB: "She noticed they were growing bigger",
          optionC: "She saw the father-bird bringing worms",
          correctAnswer: "She saw the father-bird bringing worms",
        },
        {
          question:
            "What did the spotted cat find in the nest when she finally decided to take a bird?",
          optionA: "Fat young birds",
          optionB: "Thin young birds",
          optionC: "No birds",
          correctAnswer: "No birds",
        },
        {
          question:
            "How did the spotted cat feel when she found the nest empty?",
          optionA: "Happy",
          optionB: "Hungry",
          optionC: "Angry",
          correctAnswer: "Angry",
        },
   ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question:
            "When the spotted cat first found the nest, it was ________.",
          optionA: "empty",
          optionB: "full of eggs",
          optionC: "full of birds",
          correctAnswer: "empty",
        },
        {
          question:
            "The spotted cat decided to wait because she thought ________ were better than eggs.",
          optionA: "mice and rats",
          optionB: "young birds",
          optionC: "sleeping",
          correctAnswer: "young birds",
        },
        {
          question:
            "While waiting for the eggs to hatch, the spotted cat caught ________.",
          optionA: "butterflies",
          optionB: "mice and rats",
          optionC: "fish",
          correctAnswer: "mice and rats",
        },
        {
          question:
            "On the spotted cat's third visit, there were ________ in the nest.",
          optionA: "ten eggs",
          optionB: "five young birds",
          optionC: "three young birds",
          correctAnswer: "five young birds",
        },
        {
          question:
            "The spotted cat decided to wait longer because she wanted the birds to ________.",
          optionA: "sing",
          optionB: "grow fat",
          optionC: "fly away",
          correctAnswer: "grow fat",
        },
        {
          question:
            "The father-bird spent his day bringing ________ to the nest.",
          optionA: "sticks",
          optionB: "worms",
          optionC: "seeds",
          correctAnswer: "worms",
        },
        {
          question:
            "The spotted cat thought the young birds would soon be fat enough because she saw the father-bird bringing ________.",
          optionA: "sticks",
          optionB: "worms",
          optionC: "stones",
          correctAnswer: "worms",
        },
        {
          question:
            "When the spotted cat finally decided to take a bird, the nest was ________.",
          optionA: "full of fat young birds",
          optionB: "empty",
          optionC: "full of thin young birds",
          correctAnswer: "empty",
        },
        {
          question:
            "The spotted cat felt ________ when she found the nest empty.",
          optionA: "happy",
          optionB: "hungry",
          optionC: "angry",
          correctAnswer: "angry",
        },
        {
          question:
            "The spotted cat thought the birds in the nest were the ________ creatures she ever saw.",
          optionA: "best",
          optionB: "worst",
          optionC: "happiest",
          correctAnswer: "worst",
        },
   ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question:
            "The spotted cat found two young birds in the nest when she first discovered it.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The spotted cat waited patiently for the young birds to hatch.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The spotted cat thought eggs were better than young birds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The spotted cat caught mice and rats while waiting for the eggs to hatch.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The spotted cat found three young birds in the nest on her third visit.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The spotted cat wanted the young birds to grow fat before taking any.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The father-bird played with the spotted cat all day long.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The spotted cat thought the young birds would soon be fat enough because she saw them eating a lot.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The spotted cat found fat young birds in the nest when she finally decided to take one.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The spotted cat felt happy when she found the nest empty.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
   ],
  };
}

export var activityData;
