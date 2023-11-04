export const chapter = "Chapter - 14: Ragged Wisdom ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What was the purpose of audience day at the king's court?",
        optionA: "To celebrate the king's regal splendor",
        optionB: "To present the king with gifts",
        optionC: "To seek the king's help and redress grievances",
        correctAnswer: "To seek the king's help and redress grievances",
      },
      {
        question: "Who sat beside the king on his throne during audience day?",
        optionA: "The queen",
        optionB: "The prime minister",
        optionC: "The royal guard",
        correctAnswer: "The prime minister",
      },
      {
        question: "What stood out about the ragged man in the court?",
        optionA: "He was the richest person in the court.",
        optionB: "He had a loud voice and demanded attention.",
        optionC: "He hadn't asked for anything from the king.",
        correctAnswer: "He hadn't asked for anything from the king.",
      },
      {
        question:
          "According to the ragged man, who takes the best care of a person's body in the world?",
        optionA: "The king",
        optionB: "The scholar",
        optionC: "The wife (if she is chaste)",
        correctAnswer: "The wife (if she is chaste)",
      },
      {
        question:
          "What did the ragged man believe was of the most service in the world?",
        optionA: "Love",
        optionB: "Money",
        optionC: "Wisdom",
        correctAnswer: "Money",
      },
      {
        question: "Why did the ragged man come to the king for aid?",
        optionA: "To seek charity for himself",
        optionB: "To ask for a high position at the court",
        optionC: "To provide for his ailing wife",
        correctAnswer: "To provide for his ailing wife",
      },
      {
        question: "What did the king decide to do for the ragged scholar?",
        optionA: "Appoint him as the royal magician",
        optionB: "Provide him with a luxurious mansion",
        optionC: "Make him one of the learned men of the court",
        correctAnswer: "Make him one of the learned men of the court",
      },
      {
        question:
          "What role did the ragged scholar eventually attain at the king's court?",
        optionA: "Royal magician",
        optionB: "Court jester",
        optionC: "Minister of the court",
        correctAnswer: "Minister of the court",
      },
      {
        question:
          "What caused jealousy and rumors about the ragged scholar at court?",
        optionA: "His apparent lack of loyalty to the king",
        optionB: "His association with evil spirits",
        optionC: "His rapid rise to prominence despite his humble origins",
        correctAnswer:
          "His rapid rise to prominence despite his humble origins",
      },
      {
        question:
          "How did the ragged minister dispel the rumors about him using magic?",
        optionA: "By revealing his secret silver chest",
        optionB: "By casting a spell in front of the king",
        optionC: "By confessing to practicing magic",
        correctAnswer: "By revealing his secret silver chest",
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
          "It was audience day at the king's court. It was the day when the rich and poor, the mighty and lowly, and anybody else might come to the king in person to present to him their woes and wrongs and appeal to him for _______ and _______.",
        options: ["food, shelter", "succour, aid", "entertainment, rewards"],
        correctAnswer: "succour, aid",
      },
      {
        question:
          "The king sat on his throne in regal splendour, with his prime minister at his side. He heard all supplicants and promised _______ to each, giving light and cheer to many hearts that erstwhile had been overshadowed.",
        options: ["comfort", "succour", "disappointment"],
        correctAnswer: "succour",
      },
      {
        question:
          "There also stood a little way from the king a very ragged man, gazing past the throne, as if into an undiscovered country beyond. He had evidently forgotten his own surroundings or even the errand upon which he had come, and wrapped in thought he alone of all the supplicants had failed to ask of the king a _______.",
        options: ["gift", "boon", "favor"],
        correctAnswer: "boon",
      },
      {
        question:
          "The prime minister answered without hesitation, 'Why, the ______, of course, your majesty.'",
        options: ["king", "scholar", "wife"],
        correctAnswer: "wife",
      },
      {
        question:
          "'Money, your majesty, for with it all things pertaining to the world can be had, if it be in the ______,' said the ragged one in the same thoughtful manner.",
        options: ["hand", "chest", "heart"],
        correctAnswer: "hand",
      },
      {
        question:
          "The king, noting the apparent wisdom of both replies, beckoned him to come nearer, and said, 'Who are you, and what do you want here? Already all supplicants have told me of their needs and you alone remain here and still have asked nothing of me. What can I do for you?'",
        options: ["supplicants", "strangers", "courtiers"],
        correctAnswer: "supplicants",
      },
      {
        question:
          "The man answered, 'Your majesty, I had not thought ever to come to you for aid, nor would I, were it not for the sake of one who is dear beyond all the world to me, my ______.'",
        options: ["friend", "brother", "wife"],
        correctAnswer: "wife",
      },
      {
        question:
          "'I make him one of the _______ of my court; see that his needs are fully supplied and add to them such luxuries as befit one of that position,' said the king.",
        options: ["scholars", "nobles", "learned men"],
        correctAnswer: "learned men",
      },
      {
        question:
          "The king's love for him was great because of the rare counsels which he gave and the beauty of his daily living. But at court there were those who grew jealous, that he, a ragged beggar, should have reached such heights at court, and many rumors went out with intent to poison the mind and heart of the king toward the minister.",
        options: ["friends", "courtiers", "supplicants"],
        correctAnswer: "courtiers",
      },
      {
        question:
          "'Out of the magic chamber I have come, 0 my friends; upon the magic casket and its charm I have looked, and now I shall pass sentence of punishment upon the magician himself, and proclaim him here the Prime Minister of all my ______.'",
        options: ["realm", "kingdom", "subjects"],
        correctAnswer: "realm",
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
          "The king's court held audience day where anyone could present their woes and seek help.",
        options: ["True", "False"],
        answer: "True",
      },
      {
        question:
          "The ragged man who stood near the king's throne failed to ask the king for a boon.",
        options: ["True", "False"],
        answer: "True",
      },
      {
        question:
          "The prime minister stated that the wife takes the best care of a man's body in the world.",
        options: ["True", "False"],
        answer: "True",
      },
      {
        question:
          "The king believed that money is the most valuable thing in the world.",
        options: ["True", "False"],
        answer: "False",
      },
      {
        question:
          "The ragged scholar came to the king to ask for charity to buy food for himself.",
        options: ["True", "False"],
        answer: "False",
      },
      {
        question:
          "The ragged scholar became known as the most learned man in the court.",
        options: ["True", "False"],
        answer: "True",
      },
      {
        question:
          "The king's love for the ragged scholar grew stronger because of the rumors spread by the courtiers.",
        options: ["True", "False"],
        answer: "False",
      },
      {
        question:
          "The king followed the ragged scholar into an inner chamber and discovered a magical charm.",
        options: ["True", "False"],
        answer: "False",
      },
      {
        question:
          "The ragged scholar's choice of riches brought him lasting happiness and contentment.",
        options: ["True", "False"],
        answer: "False",
      },
      {
        question:
          "The fairy gave health to a little child, which was the most precious gift.",
        options: ["True", "False"],
        answer: "True",
      },
    ],
  };
}

export var activityData;
