export const chapter = "Chapter -12: The Right Size ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "Why did the elephant want to make friends with the forest animals?",
        optionA: "Because he was lonely",
        optionB: "Because he was hungry",
        optionC: "Because he was bored",
        correctAnswer: "Because he was lonely",
      },
      {
        question: "Who did the elephant first ask to be his friend?",
        optionA: "Monkey",
        optionB: "Rabbit",
        optionC: "Deer",
        correctAnswer: "Monkey",
      },
      {
        question: "Why did the monkey refuse to be the elephant's friend?",
        optionA: "Because the elephant was too small",
        optionB: "Because the elephant was too big to swing on trees",
        optionC: "Because the monkey didn't like elephants",
        correctAnswer: "Because the elephant was too big to swing on trees",
      },
      {
        question:
          "Which animal mentioned that the elephant was too big to enter its hole?",
        optionA: "Monkey",
        optionB: "Rabbit",
        optionC: "Deer",
        correctAnswer: "Rabbit",
      },
      {
        question: "Why did the deer refuse to be the elephant's friend?",
        optionA: "Because the elephant couldn't run fast",
        optionB: "Because the elephant was too big",
        optionC: "Because the deer was already friends with the tiger",
        correctAnswer: "Because the elephant was too big",
      },
      {
        question: "What made the elephant sad?",
        optionA: "All the animals were too small",
        optionB: "All the animals wanted to be his friend",
        optionC:
          "All the animals refused his friendship because he was too big",
        correctAnswer:
          "All the animals refused his friendship because he was too big",
      },
      {
        question:
          "What was the reason behind the forest animals running in fright?",
        optionA: "The elephant was chasing them",
        optionB: "The king of the jungle was hunting them for joy",
        optionC: "There was a forest fire",
        correctAnswer: "The king of the jungle was hunting them for joy",
      },
      {
        question:
          "How did the elephant protect the forest animals from the mad king?",
        optionA: "By running away with them",
        optionB: "By lifting the king in his trunk and warning him",
        optionC: "By hiding them in his trunk",
        correctAnswer: "By lifting the king in his trunk and warning him",
      },
      {
        question:
          "What did the tiger say when the elephant confronted him about hunting for joy?",
        optionA: "I am sorry, I won't do it again.",
        optionB: "I am the king of the jungle. I can do what I like.",
        optionC: "You are right, I should stop hunting for joy.",
        correctAnswer: "I am the king of the jungle. I can do what I like.",
      },
      {
        question:
          "How did the other animals react after seeing the elephant help them?",
        optionA: "They continued to run away in fright",
        optionB: "They wanted to be friends with the elephant",
        optionC: "They attacked the elephant",
        correctAnswer: "They wanted to be friends with the elephant",
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
          "__________ expresses interest in making friends with the forest animals.",
        optionA: "Giraffe",
        optionB: "Elephant",
        optionC: "Lion",
        correctAnswer: "Elephant",
      },
      {
        question:
          "The monkey refused to be the elephant's friend because the elephant was too big to ________ on trees.",
        optionA: "Climb",
        optionB: "Swing",
        optionC: "Sleep",
        correctAnswer: "Swing",
      },
      {
        question:
          "The rabbit couldn't be the elephant's friend because the elephant was too big to enter her ________.",
        optionA: "House",
        optionB: "Hole",
        optionC: "Nest",
        correctAnswer: "Hole",
      },
      {
        question:
          "The deer refused to be the elephant's friend because the elephant couldn't run fast and ________ high.",
        optionA: "Fly",
        optionB: "Jump",
        optionC: "Swim",
        correctAnswer: "Jump",
      },
      {
        question:
          "All the animals refused the elephant's friendship because they thought he was too big to be a ________.",
        optionA: "Leader",
        optionB: "Friend",
        optionC: "King",
        correctAnswer: "Friend",
      },
      {
        question:
          "The forest animals were running in fright because the king was hunting for ________.",
        optionA: "Food",
        optionB: "Joy",
        optionC: "Shelter",
        correctAnswer: "Joy",
      },
      {
        question:
          "The elephant lifted the tiger in his trunk and warned him not to ________ any animal.",
        optionA: "Help",
        optionB: "Trouble",
        optionC: "Ignore",
        correctAnswer: "Trouble",
      },
      {
        question:
          'The tiger growled, "I am the king of the jungle. I can do ________ I like."',
        optionA: "What",
        optionB: "Where",
        optionC: "When",
        correctAnswer: "What",
      },
      {
        question:
          'The forest animals surrounded the elephant and said, "We want to be your ________. You are just the right size."',
        optionA: "Ruler",
        optionB: "Teacher",
        optionC: "Friend",
        correctAnswer: "Friend",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The elephant wanted to live alone in the forest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The monkey refused to be the elephant's friend because he was too big to swing on trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The rabbit could be the elephant's friend because the elephant was small enough to enter her hole.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The deer refused to be the elephant's friend because the elephant could run fast and jump high.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "All the forest animals accepted the elephant's friendship gladly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The forest animals were running in fright because the king was hunting for food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The elephant lifted the tiger in his trunk and threw him away to protect the other animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The tiger agreed to stop hunting animals for joy after the elephant warned him.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The forest animals wanted to be friends with the elephant after seeing him help them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The elephant was sad because all the animals thought he was too small to be a friend.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
