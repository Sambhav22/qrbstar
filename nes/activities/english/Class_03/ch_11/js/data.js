export const chapter = "Chapter - 11: Dolly's Doll";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What time of day do the children gather in the park for their games?",
          optionA: "Morning",
          optionB: "Afternoon",
          optionC: "Evening",
          correctAnswer: "Afternoon",
        },
        {
          question: "Which games do the children play in the park?",
          optionA: "Cricket and basketball",
          optionB: "Football and tennis",
          optionC: "Cricket, football, kho-kho, and more",
          correctAnswer: "Cricket, football, kho-kho, and more",
        },
        {
          question:
            "What did Dolly have in her hands when she entered the park?",
          optionA: "A book",
          optionB: "A toy car",
          optionC: "A doll",
          correctAnswer: "A doll",
        },
        {
          question: "How do the children react when Dolly shows her doll?",
          optionA: "They laugh",
          optionB: "They look away",
          optionC: "They gather around her",
          correctAnswer: "They gather around her",
        },
        {
          question: "What special feature does Dolly claim her doll has?",
          optionA: "It can fly",
          optionB: "It can sing",
          optionC: "It can perform various actions using a remote",
          correctAnswer: "It can perform various actions using a remote",
        },
        {
          question:
            "What action did the doll perform when Dolly pressed the remote button for the first time?",
          optionA: "It danced",
          optionB: "It clapped",
          optionC: "It turned to the left",
          correctAnswer: "It clapped",
        },
        {
          question:
            "How did the children react when they saw the doll's actions?",
          optionA: "They got scared",
          optionB: "They cried",
          optionC: "They clapped, shrieked, and jumped in joy",
          correctAnswer: "They clapped, shrieked, and jumped in joy",
        },
        {
          question:
            "What did Dolly say when she decided it was time for the doll to rest?",
          optionA: "My doll is hungry.",
          optionB: "My doll is tired.",
          optionC: "My doll is bored.",
          correctAnswer: "My doll is tired.",
        },
        {
          question:
            "What action did the doll perform when Dolly pressed a button before it went to sleep?",
          optionA: "It sang a rhyme",
          optionB: "It played a game",
          optionC: "It started to run",
          correctAnswer: "It sang a rhyme",
        },
        {
          question:
            "How did the children react when the doll began to sing before going to sleep?",
          optionA: "They ignored it",
          optionB: "They cried",
          optionC: "They clapped and raised a loud noise",
          correctAnswer: "They clapped and raised a loud noise",
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
            "In the afternoon, when the sun was not very ___, children gathered in the neighborhood park.",
          optionA: "cold",
          optionB: "hot",
          optionC: "rainy",
          correctAnswer: "hot",
        },
        {
          question:
            "The children played different games in the park, including cricket, football, kho-kho, blind race, hide-n-seek, and ___.",
          optionA: "tennis",
          optionB: "badminton",
          optionC: "basketball",
          correctAnswer: "badminton",
        },
        {
          question: "Dolly had a ___ in her hands when she entered the park.",
          optionA: "book",
          optionB: "doll",
          optionC: "toy car",
          correctAnswer: "doll",
        },
        {
          question: "Dolly's doll could perform various actions using a ___.",
          optionA: "remote",
          optionB: "controller",
          optionC: "phone",
          correctAnswer: "remote",
        },
        {
          question:
            "When Dolly pressed the remote button, the doll started to ___.",
          optionA: "run",
          optionB: "clap",
          optionC: "sing",
          correctAnswer: "clap",
        },
        {
          question:
            "Each time Dolly pressed a button on the remote, the doll performed a ___ action.",
          optionA: "similar",
          optionB: "random",
          optionC: "different",
          correctAnswer: "different",
        },
        {
          question: "The children were ___ to see the doll's actions.",
          optionA: "sad",
          optionB: "happy",
          optionC: "surprised",
          correctAnswer: "happy",
        },
        {
          question:
            'In the end, Dolly said, "My doll is ___ now. She is hungry and wants to sleep."',
          optionA: "sad",
          optionB: "tired",
          optionC: "excited",
          correctAnswer: "tired",
        },
        {
          question:
            "The children ___ and raised a loud noise when the doll began to sing before going to sleep.",
          optionA: "cried",
          optionB: "ignored",
          optionC: "clapped",
          correctAnswer: "clapped",
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
            "Children gathered in the neighborhood park in the morning for evening games.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The children played various games in the park, including cricket, football, and kho-kho.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Dolly's doll could perform multiple actions using a remote.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Dolly's doll could run on its own without using a remote.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "When Dolly pressed the remote button, the doll started to sing.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The children were sad to see the doll's actions.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Dolly's doll was tired and hungry after performing various actions.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The children cried when the doll began to sing before going to sleep.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The children clapped and raised a loud noise in excitement.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The children played hide-n-seek in the park.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
