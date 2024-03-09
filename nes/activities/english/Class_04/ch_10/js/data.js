export const chapter = "Chapter -10: The Burning Tail";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "Who abducted Sita?",
          optionA: "Vibhishana",
          optionB: "Rama",
          optionC: "Ravana",
          correctAnswer: "Ravana",
        },
        {
          question: "Who searched for Sita after she was abducted?",
          optionA: "Rama and Lakshmana",
          optionB: "Hanumana and Vibhishana",
          optionC: "Sugreeva and his army",
          correctAnswer: "Rama and Lakshmana",
        },
        {
          question: "Who took permission from Rama to fly across the sea?",
          optionA: "Vibhishana",
          optionB: "Ravana",
          optionC: "Hanumana",
          correctAnswer: "Hanumana",
        },
        {
          question: "Where was Sita imprisoned?",
          optionA: "Ravana's palace",
          optionB: "Ashok Vatika",
          optionC: "Vibhishana's palace",
          correctAnswer: "Ashok Vatika",
        },
        {
          question: "Who welcomed Hanumana open-heartedly?",
          optionA: "Ravana",
          optionB: "Vibhishana",
          optionC: "Sita",
          correctAnswer: "Vibhishana",
        },
        {
          question: "What did Ravana offer to Sita?",
          optionA: "To make her the Queen Consort of his kingdom",
          optionB: "To make her his chief advisor",
          optionC: "To make her his personal servant",
          correctAnswer: "To make her the Queen Consort of his kingdom",
        },
        {
          question: "Who did Hanumana claim to be the messenger of?",
          optionA: "Vibhishana",
          optionB: "Sugreeva",
          optionC: "Rama",
          correctAnswer: "Rama",
        },
        {
          question: "How did Hanumana put out the fire on his tail?",
          optionA: "He plunged into the sea",
          optionB: "He blew it out",
          optionC: "He asked Vibhishana to help",
          correctAnswer: "He plunged into the sea",
        },
        {
          question: "What did Sita give Hanumana to show to Rama?",
          optionA: "A diadem",
          optionB: "A ring",
          optionC: "A necklace",
          correctAnswer: "A diadem",
        },
        {
          question: "What did Sita ask Hanumana to tell Rama?",
          optionA: "To come immediately to rescue her",
          optionB: "To take revenge on Ravana",
          optionC: "To rescue her within a month or she might not be alive",
          correctAnswer:
            "To rescue her within a month or she might not be alive",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      [
        {
          question:
            "Rama was in exile for _________ years with his brother Lakshamana and wife Sita.",
          optionA: "twelve",
          optionB: "fourteen",
          optionC: "sixteen",
          correctAnswer: "B) fourteen",
        },
        {
          question: "Ravana abducted _________.",
          optionA: "Sugreeva",
          optionB: "Hanumana",
          optionC: "Seeta",
          correctAnswer: "C) Seeta",
        },
        {
          question: "Hanumana could _________ to search for Sita.",
          optionA: "fly",
          optionB: "swim",
          optionC: "run",
          correctAnswer: "A) fly",
        },
        {
          question: "Lanka was located across the _________.",
          optionA: "river",
          optionB: "desert",
          optionC: "sea",
          correctAnswer: "C) sea",
        },
        {
          question: "Sita was imprisoned in _________.",
          optionA: "Ravana's palace",
          optionB: "Vibhishana's palace",
          optionC: "Ashok Vatika",
          correctAnswer: "C) Ashok Vatika",
        },
        {
          question:
            "Ravana wanted to make Sita the Queen Consort of his _________.",
          optionA: "silver kingdom",
          optionB: "golden kingdom",
          optionC: "mighty kingdom",
          correctAnswer: "B) golden kingdom",
        },
        {
          question: "Who welcomed Hanumana open-heartedly?",
          optionA: "Ravana",
          optionB: "Vibhishana",
          optionC: "Sita",
          correctAnswer: "B) Vibhishana",
        },
        {
          question: "Hanumana claimed to be the messenger of _________.",
          optionA: "Vibhishana",
          optionB: "Sugreeva",
          optionC: "Rama",
          correctAnswer: "C) Rama",
        },
        {
          question:
            "Hanumana put out the fire on his tail by plunging into the _________.",
          optionA: "forest",
          optionB: "mountain",
          optionC: "sea",
          correctAnswer: "C) sea",
        },
        {
          question: "Sita gave Hanumana her _________ to show to Rama.",
          optionA: "ring",
          optionB: "diadem",
          optionC: "necklace",
          correctAnswer: "B) diadem",
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
            "Rama was in exile for fourteen years with his brother Lakshamana and wife Sita.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Hanumana could swim across the sea to search for Sita.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Sita was imprisoned in Vibhishana's palace.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Ravana wanted to make Sita the Queen Consort of his silver kingdom.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Hanumana claimed to be the messenger of Sugreeva.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Hanumana put out the fire on his tail by plunging into the sea.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Sita gave Hanumana her necklace to show to Rama.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Ravana was pleased to see Hanumana in his royal court.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Hanumana's tail was set on fire by demons.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Hanumana destroyed the whole of Lanka by setting it on fire.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
