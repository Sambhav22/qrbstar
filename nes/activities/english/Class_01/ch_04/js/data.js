export const chapter = "Chapter - 4: 'i' Sound";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the subject of the first sentence?",
        optionA: "Fish",
        optionB: "River",
        optionC: "Kid",
        correctAnswer: "Fish",
      },
      {
        question: "Who is the kid with in the second sentence?",
        optionA: "Father",
        optionB: "Mother",
        optionC: "Friend",
        correctAnswer: "Mother",
      },
      {
        question: "What is the main question in the text?",
        optionA: "What is the time?",
        optionB: "Where is Kiran?",
        optionC: "Who is singing a song?",
        correctAnswer: "What is the time?",
      },
      {
        question: "What is the message in 'You will win this time'?",
        optionA: "You lost last time",
        optionB: "You will win every time",
        optionC: "You are a winner",
        correctAnswer: "You lost last time",
      },
      {
        question: "Where is Little Kiran in the text?",
        optionA: "In a park",
        optionB: "On a hill",
        optionC: "By the river",
        correctAnswer: "On a hill",
      },
      {
        question: "What is Little Kiran doing on the hill?",
        optionA: "Fishing",
        optionB: "Singing a song",
        optionC: "Playing soccer",
        correctAnswer: "Singing a song",
      },
      {
        question: "Who complimented Kiran's singing?",
        optionA: "Her teacher",
        optionB: "Her friend",
        optionC: "Her mother",
        correctAnswer: "Her friend",
      },
      {
        question: "How did Kiran respond to the compliment?",
        optionA: "She smiled and said thank you",
        optionB: "She said she's not a good singer",
        optionC: "She ignored the compliment",
        correctAnswer: "She smiled and said thank you",
      },
      {
        question: "What did her friend request at the end of the conversation?",
        optionA: "To stop singing",
        optionB: "To sing one more song",
        optionC: "To go home",
        correctAnswer: "To sing one more song",
      },
      {
        question: "When does Kiran plan to sing again?",
        optionA: "Right away",
        optionB: "At eight",
        optionC: "At nine",
        correctAnswer: "At nine",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "Little Kiran is on a ________.",
        optionA: "river",
        optionB: "hill",
        optionC: "beach",
        correctAnswer: "hill",
      },
      {
        question: "Kiran is ________ a song.",
        optionA: "dancing",
        optionB: "singing",
        optionC: "playing",
        correctAnswer: "singing",
      },
      {
        question: '"You sing ________," said her friend.',
        optionA: "beautifully",
        optionB: "loudly",
        optionC: "quietly",
        correctAnswer: "beautifully",
      },
      {
        question: '"I ________ you," said Kiran with a smile.',
        optionA: "thank",
        optionB: "thanking",
        optionC: "thanked",
        correctAnswer: "thank",
      },
      {
        question: '"Sing one more ________," said her friend.',
        optionA: "song",
        optionB: "dance",
        optionC: "story",
        correctAnswer: "song",
      },
      {
        question: "The kid was with his ________.",
        optionA: "father",
        optionB: "mother",
        optionC: "sister",
        correctAnswer: "mother",
      },
      {
        question: "What is the ________?",
        optionA: "question",
        optionB: "answer",
        optionC: "time",
        correctAnswer: "time",
      },
      {
        question: "A fish swims in the ________.",
        optionA: "ocean",
        optionB: "river",
        optionC: "lake",
        correctAnswer: "river",
      },
      {
        question: '"I shall now sing at ________," said she.',
        optionA: "seven",
        optionB: "eight",
        optionC: "nine",
        correctAnswer: "nine",
      },
      {
        question: "________ will win this time.",
        optionA: "You",
        optionB: "We",
        optionC: "They",
        correctAnswer: "You",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Little Kiran is on a hill.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Kiran is singing a song.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: '"You sing beautifully," said her friend.',
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: '"I thank you," said Kiran with a smile.',
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: '"Sing one more song," said her friend.',
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The kid was with his mother.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "What is the time?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "A fish swims in the river.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: '"I shall now sing at nine," said she.',
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "She is playing soccer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
