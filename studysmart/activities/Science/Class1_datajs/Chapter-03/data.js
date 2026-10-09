export const chapter = "Chapter - 3: Animals around us";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which animal is a pet?",
        "optionA": "lion",
        "optionB": "dog",
        "optionC": "tiger",
        "correctAnswer": "dog"
      },
      {
        "question": "Where do wild animals live?",
        "optionA": "In our homes",
        "optionB": "On the road",
        "optionC": "In forests",
        "correctAnswer": "In forests"
      },
      {
        "question": "Which animal gives us eggs?",
        "optionA": "cow",
        "optionB": "hen",
        "optionC": "dog",
        "correctAnswer": "hen"
      },
      {
        "question": "What do herbivores eat?",
        "optionA": "Meat",
        "optionB": "Grass",
        "optionC": "Fish",
        "correctAnswer": "Grass"
      },
      {
        "question": "Which of these animals lives in water?",
        "optionA": "Fish",
        "optionB": "Dog",
        "optionC": "Goat",
        "correctAnswer": "Fish"
      },
      {
        "question": "Which animal makes the sound ‘moo’?",
        "optionA": "Cat",
        "optionB": "Cow",
        "optionC": "Dog",
        "correctAnswer": "Cow"
      },
      {
        "question": "Which animal is a domestic animal?",
        "optionA": "Sheep",
        "optionB": "Lion",
        "optionC": "Fox",
        "correctAnswer": "Sheep"
      },
      {
        "question": "What should we do when animals are sick?",
        "optionA": "Leave them",
        "optionB": "Take them to vet",
        "optionC": "Scold them",
        "correctAnswer": "Take them to vet"
      },
      {
        "question": "Which of the following is a wild animal?",
        "optionA": "Elephant",
        "optionB": "Dog",
        "optionC": "Cow",
        "correctAnswer": "Elephant"
      },
      {
        "question": "Omnivores eat",
        "optionA": "Only meat",
        "optionB": "Only plants",
        "optionC": "Both plants and animals",
        "correctAnswer": "Both plants and animals"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "___ live in forests.",
        "optionA": "Pet animals",
        "optionB": "Wild animals",
        "optionC": "Domestic animals",
        "correctAnswer": "Wild animals"
      },
      {
        "question": "Dogs and cats are ___ animals.",
        "optionA": "Wild",
        "optionB": "Pet",
        "optionC": "Domestic",
        "correctAnswer": "Pet"
      },
      {
        "question": "Fish live in ___.",
        "optionA": "Water",
        "optionB": "Trees",
        "optionC": "Caves",
        "correctAnswer": "Water"
      },
      {
        "question": "Hens give us ___.",
        "optionA": "Milk",
        "optionB": "Eggs",
        "optionC": "Wool",
        "correctAnswer": "Eggs"
      },
      {
        "question": "___ eat both plants and animals.",
        "optionA": "Herbivores",
        "optionB": "Carnivores",
        "optionC": "Omnivores",
        "correctAnswer": "Omnivores"
      },
      {
        "question": "We should be ____ to animals.",
        "optionA": "Kind",
        "optionB": "Rude",
        "optionC": "Scared",
        "correctAnswer": "Kind"
      },
      {
        "question": "___ have sharp teeth to eat meat.",
        "optionA": "Herbivores",
        "optionB": "Carnivores",
        "optionC": "Pet animals",
        "correctAnswer": "Carnivores"
      },
      {
        "question": "___ live in our homes and are our friends.",
        "optionA": "Wild animals",
        "optionB": "Pet animals",
        "optionC": "Domestic animals",
        "correctAnswer": "Pet animals"
      },
      {
        "question": "Cows, goats and rbbits eat ___.",
        "optionA": "Meat",
        "optionB": "Grass",
        "optionC": "Fish",
        "correctAnswer": "Grass"
      },
      {
        "question": "Tigers and lions are ____ animals.",
        "optionA": "Domestic",
        "optionB": "Wild",
        "optionC": "Pet",
        "correctAnswer": "Wild"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Sheep give us wool.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Birds live in water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Lions and tigers are pet animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We should hurt animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Goats eat grass.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Fish live in nests.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Cows are wild animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We can see animals in parks and forests.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We should play gently with animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Animals choose their homes based on their needs.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
