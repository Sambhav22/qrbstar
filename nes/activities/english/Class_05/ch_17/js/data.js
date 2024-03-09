export const chapter = "Chapter -17: The Naming Game";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What did the king of Nippon present to the emperor of China?",
          optionA: "Dragon",
          optionB: "Cat",
          optionC: "Tiger",
          correctAnswer: "Cat",
        },
        {
          question: "Why did the emperor decide to give the cat a grand name?",
          optionA: "The cat was magical.",
          optionB: "It was a tradition for royal pets.",
          optionC: "The emperor wanted to impress his ministers.",
          correctAnswer: "It was a tradition for royal pets.",
        },
        {
          question:
            "What was the suggestion of the youngest minister for the cat's name?",
          optionA: "Wind",
          optionB: "Tiger",
          optionC: "Dragon",
          correctAnswer: "Tiger",
        },
        {
          question:
            "Why did the second minister propose the name 'Dragon' for the cat?",
          optionA: "Dragons are noble.",
          optionB: "Tigers cannot soar into the sky.",
          optionC: "Dragons can fly into the sky.",
          correctAnswer: "Dragons can fly into the sky.",
        },
        {
          question:
            "According to the third minister, what is more powerful than a dragon?",
          optionA: "Cloud",
          optionB: "Wind",
          optionC: "Tiger",
          correctAnswer: "Cloud",
        },
        {
          question:
            "Why did the fourth minister suggest the name 'Wind' for the cat?",
          optionA: "Winds can push clouds.",
          optionB: "Clouds can fly higher than dragons.",
          optionC: "Winds are more powerful than clouds.",
          correctAnswer: "Winds are more powerful than clouds.",
        },
        {
          question:
            "What was the fifth minister's suggestion for the cat's name?",
          optionA: "Dragon",
          optionB: "Wind",
          optionC: "Brick Wall",
          correctAnswer: "Brick Wall",
        },
        {
          question:
            "Why did the fifth minister think 'Brick Wall' was an appropriate name?",
          optionA: "It can stop a wind.",
          optionB: "It is longer than other suggestions.",
          optionC: "It is majestic like a dragon.",
          correctAnswer: "It can stop a wind.",
        },
        {
          question:
            "What was the sixth minister's suggestion for the cat's name?",
          optionA: "Wind",
          optionB: "Rat",
          optionC: "Dragon",
          correctAnswer: "Rat",
        },
        {
          question:
            "Why did the seventh minister insist on calling the cat simply 'CAT'?",
          optionA: "A cat is mightier than a dragon.",
          optionB: "It is a tradition.",
          optionC: "The emperor didn't like the other suggestions.",
          correctAnswer: "A cat is mightier than a dragon.",
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
            "The king of Nippon presented a beautiful ____ to the emperor of China.",
          optionA: "Tiger",
          optionB: "Dragon",
          optionC: "Cat",
          correctAnswer: "Cat",
        },
        {
          question:
            "The emperor decided to give the cat a grand name as it was a tradition for royal ____.",
          optionA: "Pets",
          optionB: "Animals",
          optionC: "Creatures",
          correctAnswer: "Pets",
        },
        {
          question:
            "The youngest minister suggested naming the cat ____, which the emperor approved.",
          optionA: "Wind",
          optionB: "Tiger",
          optionC: "Dragon",
          correctAnswer: "Tiger",
        },
        {
          question:
            "According to the second minister, dragons can ____ into the sky.",
          optionA: "Run",
          optionB: "Fly",
          optionC: "Swim",
          correctAnswer: "Fly",
        },
        {
          question:
            "The third minister believed that a ____ is more powerful than a dragon.",
          optionA: "Cloud",
          optionB: "Wind",
          optionC: "Tiger",
          correctAnswer: "Cloud",
        },
        {
          question:
            "The fourth wise man proposed naming the cat ____, considering it more powerful than clouds.",
          optionA: "Wind",
          optionB: "Cloud",
          optionC: "Brick Wall",
          correctAnswer: "Wind",
        },
        {
          question:
            'The fifth wise man suggested the name "____," explaining its power to stop the wind.',
          optionA: "Dragon",
          optionB: "Wind",
          optionC: "Brick Wall",
          correctAnswer: "Brick Wall",
        },
        {
          question:
            "The sixth minister proposed a short name for the cat: ____.",
          optionA: "Dragon",
          optionB: "Rat",
          optionC: "Wind",
          correctAnswer: "Rat",
        },
        {
          question:
            "The seventh wise man emphasized that a cat is ____ than a dragon.",
          optionA: "Weaker",
          optionB: "Mightier",
          optionC: "Smaller",
          correctAnswer: "Mightier",
        },
        {
          question:
            "Ultimately, the cat was simply called ____ as the Naming Game came to an end.",
          optionA: "Tiger",
          optionB: "Dragon",
          optionC: "Cat",
          correctAnswer: "Cat",
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
            "The king of Nippon presented a beautiful cat to the emperor of China.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The emperor decided to give the cat a grand name as it was a tradition for royal pets.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The youngest minister suggested naming the cat Dragon, which the emperor approved.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "According to the second minister, dragons can fly into the sky.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The third minister believed that a cloud is more powerful than a dragon.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The fourth wise man proposed naming the cat Wind, considering it more powerful than clouds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The fifth wise man suggested the name 'Brick Wall,' explaining its power to stop the wind.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The sixth minister proposed a short name for the cat: Rat.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The seventh wise man emphasized that a cat is weaker than a dragon.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Ultimately, the cat was simply called Cat as the Naming Game came to an end.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
   ],
  };
}

export var activityData;
