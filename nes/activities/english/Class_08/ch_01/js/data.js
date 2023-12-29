export const chapter = "Chapter - 1: Coming of the King";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What interrupted the children's play in the playground?",
        options: [
          "A. A traveling circus",
          "B. A passing herald announcing the King's arrival",
          "C. A sudden rainstorm",
        ],
        answer: "B",
      },
      {
        question:
          "Why did the children decide to clean and tidy up their playground?",
        options: [
          "A. They wanted to impress their parents.",
          "B. They hoped the King might see their playground.",
          "C. They were bored and looking for something to do.",
        ],
        answer: "B",
      },
      {
        question: "What did the children use to clean their playground?",
        options: [
          "A. Brooms and mops",
          "B. Hoes, rakes, and a wheelbarrow",
          "C. Vacuum cleaners",
        ],
        answer: "B",
      },
      {
        question:
          "In addition to cleaning, what did the children do to make the playground attractive?",
        options: [
          "A. Brought in new toys",
          "B. Decorated it with rushes and garlands",
          "C. Painted the walls with bright colors",
        ],
        answer: "B",
      },
      {
        question:
          "What did the littlest child do to make the playground look beautiful?",
        options: [
          "A. Watered the plants",
          "B. Danced around with joy",
          "C. Scattered marigold buds",
        ],
        answer: "C",
      },
      {
        question:
          "Who eventually comes to visit the playground, though not the King?",
        options: [
          "A. The Queen",
          "B. A group of travelers",
          "C. A kind, tired man",
        ],
        answer: "C",
      },
      {
        question: "What did the man do when he saw the playground?",
        options: [
          "A. He scolded the children for not keeping it clean.",
          "B. He asked if he could come in and rest.",
          "C. He ignored it and continued on his way.",
        ],
        answer: "B",
      },
      {
        question: "How did the children feel about the man's visit?",
        options: [
          "A. They were angry with him for not being the King.",
          "B. They were overjoyed and welcomed him warmly.",
          "C. They were scared and ran away.",
        ],
        answer: "B",
      },
      {
        question:
          "What did the children decide to do with the playground after the man's visit?",
        options: [
          "A. They decided to lock it and keep it a secret.",
          "B. They planned to destroy it because it wasn't perfect.",
          "C. They wanted to keep it pretty and clean for themselves.",
        ],
        answer: "C",
      },
      {
        question:
          "What made the children describe the man's hair as a 'crown of gold'?",
        options: [
          "A. He was wearing a golden crown.",
          "B. The setting sun made his hair look golden.",
          "C. He told them he was a king.",
        ],
        answer: "B",
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
          "Some children were at play in their ___________ one day when a herald rode through the town...",
        options: ["A. school", "B. playground", "C. library"],
        correctAnswer: "B",
      },
      {
        question:
          "The herald was blowing a trumpet and crying aloud, 'The King! The King passes by this road today. Make ready for the ___________!'",
        options: ["A. Queen", "B. President", "C. King"],
        correctAnswer: "C",
      },
      {
        question:
          "The children decided to clean and tidy up their playground because they hoped the ___________ might see it.",
        options: ["A. mayor", "B. King", "C. teacher"],
        correctAnswer: "B",
      },
      {
        question:
          "One child brought a hoe, another a rake, and a third ran to fetch the ___________ from behind the garden gate to clean the playground.",
        options: ["A. bicycle", "B. car", "C. wheelbarrow"],
        correctAnswer: "C",
      },
      {
        question:
          "The children decorated the playground with rushes and ___________ to make it pretty.",
        options: [
          "A. candy",
          "B. oak leaves and pine tassels",
          "C. plastic toys",
        ],
        correctAnswer: "B",
      },
      {
        question:
          "The littlest child pulled marigold buds and scattered them all around the playground 'to look like ___________,' he said.",
        options: ["A. jewels", "B. gold", "C. silver"],
        correctAnswer: "B",
      },
      {
        question:
          "A man with travel-worn clothes and a kind, tired face passed along the road and stopped to look over the ___________.",
        options: ["A. mountain", "B. wall", "C. fence"],
        correctAnswer: "B",
      },
      {
        question:
          "The children set the man on a seat they had made out of an old cask and covered it with an old red cloak to make it look like a ___________.",
        options: ["A. throne", "B. chair", "C. bench"],
        correctAnswer: "A",
      },
      {
        question:
          "The children decided to keep the playground pretty and clean for themselves because they thought pretty and clean was nicer than ___________.",
        options: [
          "A. messy and dirty",
          "B. noisy and chaotic",
          "C. colorful and creative",
        ],
        correctAnswer: "A",
      },
      {
        question:
          "The man's hair looked like a '___________' when the sun shone on it.",
        options: ["A. hat", "B. crown of gold", "C. mess"],
        correctAnswer: "B",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The herald announced the King's arrival in the town.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The children decided to clean and tidy up their playground because they wanted to impress their parents.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The children used brooms and mops to clean their playground.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The littlest child scattered rose petals around the playground.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The man who visited the playground was a king.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The man was delighted to see the faces of his neighbors.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The cable connection was expected to be out of service for one day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The family enjoyed more family time during the cable outage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The children played with expensive materials during their childhood.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The family decided to limit their TV time to three hours a day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
