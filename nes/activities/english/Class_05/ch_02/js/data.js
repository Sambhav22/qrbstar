export const chapter = "Chapter - 2: The Natural Enemy ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "Who lived on the banyan tree in the thick forest?",
          optionA: "Crow",
          optionB: "Rabbit",
          optionC: "Pigeon",
          correctAnswer: "Pigeon",
        },
        {
          question:
            "What was the reason for the pigeon to fly to the nearest village?",
          optionA: "To meet a friend",
          optionB: "To find a new hollow",
          optionC: "To eat grains during the harvest time",
          correctAnswer: "To eat grains during the harvest time",
        },
        {
          question:
            "How long did the pigeon promise to be away when visiting the village?",
          optionA: "One day",
          optionB: "Two days",
          optionC: "One week",
          correctAnswer: "One week",
        },
        {
          question:
            "Who enters the pigeon's hollow during the pigeon's absence?",
          optionA: "Crow",
          optionB: "Rabbit",
          optionC: "Squirrel",
          correctAnswer: "Rabbit",
        },
        {
          question:
            "What does the rabbit say when the pigeon returns to the hollow?",
          optionA: "I've been waiting for you.",
          optionB: "You can have it.",
          optionC: "It's mine now.",
          correctAnswer: "It's mine now.",
        },
        {
          question:
            "Who suggests going to a wise man to resolve the dispute between the pigeon and the rabbit?",
          optionA: "Crow",
          optionB: "Pigeon",
          optionC: "Rabbit",
          correctAnswer: "Pigeon",
        },
        {
          question:
            "What animal do the pigeon and rabbit seek as a wise man to resolve their dispute?",
          optionA: "Elephant",
          optionB: "Cat",
          optionC: "Owl",
          correctAnswer: "Cat",
        },
        {
          question:
            "Why does the cat initially claim he cannot listen properly to their problem?",
          optionA: "Because he's uninterested",
          optionB: "Because he's grown weak and old",
          optionC: "Because he's too busy",
          correctAnswer: "Because he's grown weak and old",
        },
        {
          question:
            "How do the pigeon and rabbit react when the cat asks them to come closer to tell their problem?",
          optionA: "They move closer immediately",
          optionB: "They refuse to come closer",
          optionC: "They move closer but with caution",
          correctAnswer: "They move closer but with caution",
        },
        {
          question:
            "What happens to the pigeon and the rabbit when they approach the cat for help?",
          optionA:
            "The cat listens to their problem and resolves it peacefully.",
          optionB: "The cat pounces on them and catches them for lunch.",
          optionC: "The cat advises them to seek help from the wise owl.",
          correctAnswer: "The cat pounces on them and catches them for lunch.",
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
            "In the thick forest, a ________________ and a crow lived on a banyan tree.",
          optionA: "squirrel",
          optionB: "pigeon",
          optionC: "rabbit",
          correctAnswer: "pigeon",
        },
        {
          question:
            "Pigeon planned to fly to the nearest village because it was the time of the year when it could eat grains to its ________________.",
          optionA: "satisfaction",
          optionB: "desire",
          optionC: "appetite",
          correctAnswer: "appetite",
        },
        {
          question:
            "Crow expressed concern about how the pigeon would come back from the village in the dark. Pigeon assured Crow that it would return in ________________.",
          optionA: "a day",
          optionB: "two days",
          optionC: "a week",
          correctAnswer: "a week",
        },
        {
          question:
            "Crow promised to make sure no other animal came and lived in the hollow for a week but said it wouldn't be responsible if the pigeon didn't come within a week.",
          optionA: "True",
          optionB: "False",
          optionC: "Uncertain",
          correctAnswer: "True",
        },
        {
          question:
            "Rabbit entered the hollow in the tree because the pigeon hadn't returned for ________________.",
          optionA: "two days",
          optionB: "a week",
          optionC: "ten days",
          correctAnswer: "ten days",
        },
        {
          question:
            "When the pigeon returned to the hollow, Rabbit insisted that the hollow was now ________________ and belonged to him.",
          optionA: "occupied",
          optionB: "empty",
          optionC: "owned",
          correctAnswer: "occupied",
        },
        {
          question:
            "The pigeon and the rabbit decided to seek the advice of a wise man to resolve their dispute. They mentioned seeing a gentle ________________ under a neem tree.",
          optionA: "elephant",
          optionB: "cat",
          optionC: "owl",
          correctAnswer: "cat",
        },
        {
          question:
            "The cat claimed that it couldn't listen properly to their problem because it had grown weak and old and wanted to do good to the world.",
          optionA: "True",
          optionB: "False",
          optionC: "Uncertain",
          correctAnswer: "True",
        },
        {
          question:
            "When the pigeon and the rabbit approached the cat to tell their problem, the cat ________________ upon them and caught them for his delicious lunch.",
          optionA: "listened carefully",
          optionB: "pounced",
          optionC: "ignored them",
          correctAnswer: "pounced",
        },
        {
          question:
            "The rabbit suggested that he and the pigeon should go to the cat to get justice and resolve their dispute.",
          optionA: "True",
          optionB: "False",
          optionC: "Uncertain",
          correctAnswer: "True",
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
            "In the provided story, the pigeon and the crow were the only two birds living on the banyan tree.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The pigeon flew to the village for a single day and returned in the evening.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The crow promised to look after the pigeon's hollow for two weeks in the pigeon's absence.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "When the rabbit entered the hollow, the pigeon and the crow were present.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The rabbit willingly vacated the hollow when the pigeon returned.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The pigeon suggested going to a gentle cat under a neem tree to resolve their dispute.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The cat claimed it couldn't listen to the pigeon and rabbit properly because it had grown weak and old.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The pigeon and the rabbit approached the cat cautiously and maintained a safe distance.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The cat listened to the pigeon and the rabbit's problem and helped them peacefully resolve their dispute.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The pigeon and the rabbit sought the cat's help to have a meal together.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
