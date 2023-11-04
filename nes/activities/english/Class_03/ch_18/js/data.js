export const chapter = "Chapter - 18: Agreeable Behaviour";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Why did the trader have a lapdog?",
        optionA: "To carry his loads.",
        optionB: "To guard his house.",
        optionC: "Because it was his favorite.",
        correctAnswer: "Because it was his favorite.",
      },
      {
        question: "What did the dog do that the master liked very much?",
        optionA: "Carrying loads.",
        optionB: "Funny little acts.",
        optionC: "Guarding the house.",
        correctAnswer: "Funny little acts.",
      },
      {
        question: "What made the ass discontent?",
        optionA: "Lack of food.",
        optionB: "The master's affection for the dog.",
        optionC: "Hard work.",
        correctAnswer: "The master's affection for the dog.",
      },
      {
        question: "What did the ass decide to do to win the master's favor?",
        optionA: "Carry more loads.",
        optionB: "Work harder.",
        optionC: "Act like the dog.",
        correctAnswer: "Act like the dog.",
      },
      {
        question:
          "What happened when the ass tried to imitate the dog at the dinner table?",
        optionA: "The master praised him.",
        optionB: "The master laughed.",
        optionC: "The dining table was unsettled, and dishes crashed.",
        correctAnswer: "The dining table was unsettled, and dishes crashed.",
      },
      {
        question:
          "What was the master's reaction to the ass's strange behavior?",
        optionA: "He praised the ass.",
        optionB: "He was alarmed.",
        optionC: "He joined the ass in frolic.",
        correctAnswer: "He was alarmed.",
      },
      {
        question: "How did the master feed the dog at the dinner table?",
        optionA: "He gave the dog his own plate.",
        optionB: "He fed the dog with a fork.",
        optionC: "He did not feed the dog.",
        correctAnswer: "He gave the dog his own plate.",
      },
      {
        question: "What did the ass do when he saw the master feeding the dog?",
        optionA: "He ate his own food quietly.",
        optionB: "He kicked up his front feet and tried to imitate the dog.",
        optionC: "He left the house in disappointment.",
        correctAnswer:
          "He kicked up his front feet and tried to imitate the dog.",
      },
      {
        question:
          "What did the servant do when he heard the distress call from the master?",
        optionA: "He beat the dog.",
        optionB: "He beat the ass soundly.",
        optionC: "He comforted the master.",
        correctAnswer: "He beat the ass soundly.",
      },
      {
        question: "What lesson can be learned from the story?",
        optionA: "Everyone should imitate the behavior of others.",
        optionB: "Different people need to behave differently.",
        optionC: "Animals should not be kept as pets.",
        correctAnswer: "Different people need to behave differently.",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "There lived a trader in a ____________.",
        options: ["village", "city", "forest"],
        correctAnswer: "village",
      },
      {
        question: "The trader had an ________ to carry his loads.",
        options: ["elephant", "ass", "ox"],
        correctAnswer: "ass",
      },
      {
        question: "The trader also had a ________.",
        options: ["parrot", "cat", "lapdog"],
        correctAnswer: "lapdog",
      },
      {
        question: "The dog often took a seat on the master's ________.",
        options: ["bed", "chair", "lap"],
        correctAnswer: "lap",
      },
      {
        question:
          "The dog did funny little acts which the master liked ________.",
        options: ["a lot", "a little", "not at all"],
        correctAnswer: "a lot",
      },
      {
        question:
          "The ass worked hard from morning to evening and often carried ________.",
        options: ["books", "loads", "water"],
        correctAnswer: "loads",
      },
      {
        question:
          "The ass decided to act like the dog to win the master's ________.",
        options: ["jealousy", "fear", "affection"],
        correctAnswer: "affection",
      },
      {
        question:
          "In his bid to imitate the dog, the ass unsettled the ________.",
        options: ["bed", "garden", "dining table"],
        correctAnswer: "dining table",
      },
      {
        question:
          "The servant came running and beat the ass soundly while leading him back to the ________.",
        options: ["village", "stable", "forest"],
        correctAnswer: "stable",
      },
      {
        question: "Different people need to behave ________.",
        options: ["similarly", "differently", "respectfully"],
        correctAnswer: "differently",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The trader had an ass to carry his loads.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The dog often took a seat on the master's lap.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The dog's funny acts were disliked by the master.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The ass worked hard from evening to morning.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The ass decided to act like the dog to win the master's favor.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The ass tried to imitate the dog at the dinner table.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The ass's behavior at the dinner table pleased the master.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The servant beat the dog soundly when he heard the distress call from the master.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The story teaches that everyone should imitate the behavior of others.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The ass's actions showed that different people need to behave differently.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
