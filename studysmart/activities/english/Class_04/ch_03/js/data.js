export const chapter = "Chapter - 3: The Little Kitten";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Where was the tiny kitten found?",
        "optionA": "In a garden",
        "optionB": "At an animal shelter",
        "correctAnswer": "At an animal shelter",
        "optionC": "On the road"
      },
      {
        "question": "Why did the kitten shiver at the shelter?",
        "optionA": "It was hungry",
        "optionB": "It was sick",
        "optionC": "It was very cold",
        "correctAnswer": "It was very cold"
      },
      {
        "question": "Who took the kitten home?",
        "optionA": "Mahadevi",
        "optionB": "Ratna",
        "correctAnswer": "Ratna",
        "optionC": "The vet"
      },
      {
        "question": "What did Ratna fear during the car journey?",
        "optionA": "The kitten might fall out",
        "correctAnswer": "The kitten might fall out",
        "optionB": "The kitten might sleep",
        "optionC": "The kitten might eat"
      },
      {
        "question": "What did the kitten try to do in the car?",
        "optionA": "Jump outside",
        "optionB": "Climb Ratna’s shoulder",
        "correctAnswer": "Climb Ratna’s shoulder",
        "optionC": "Hide under the seat"
      },
      {
        "question": "Why did Ratna close the car window?",
        "optionA": "To keep the kitten safe",
        "correctAnswer": "To keep the kitten safe",
        "optionB": "To stop noise",
        "optionC": "To save fuel"
      },
      {
        "question": "How did Daisy react when she saw the kitten?",
        "optionA": "She attacked it",
        "optionB": "She ignored it",
        "optionC": "She sniffed it",
        "correctAnswer": "She sniffed it"
      },
      {
        "question": "What did Daisy do after sniffing the kitten?",
        "optionA": "Ran away",
        "optionB": "Licked it like her puppy",
        "correctAnswer": "Licked it like her puppy",
        "optionC": "Barked loudly"
      },
      {
        "question": "Where did Ratna place the kitten at home?",
        "optionA": "In a cardboard box",
        "correctAnswer": "In a cardboard box",
        "optionB": "In a basket",
        "optionC": "On the bed"
      },
      {
        "question": "What helped the kitten learn to drink milk?",
        "optionA": "A bowl",
        "optionB": "A spoon",
        "optionC": "A dropper",
        "correctAnswer": "A dropper"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The kitten’s mother died in an ______.",
        "optionA": "illness",
        "optionB": "accident",
        "correctAnswer": "accident",
        "optionC": "storm"
      },
      {
        "question": "Ratna visited the shelter during her ______.",
        "optionA": "exams",
        "optionB": "holidays",
        "correctAnswer": "holidays",
        "optionC": "journey"
      },
      {
        "question": "The kitten wanted to ______ the surroundings.",
        "optionA": "explore",
        "correctAnswer": "explore",
        "optionB": "leave",
        "optionC": "ignore"
      },
      {
        "question": "Ratna tried to ______ the kitten by talking.",
        "optionA": "soothe",
        "correctAnswer": "soothe",
        "optionB": "scare",
        "optionC": "stop"
      },
      {
        "question": "The kitten kept ______ continuously.",
        "optionA": "sleeping",
        "optionB": "jumping",
        "optionC": "mewing",
        "correctAnswer": "mewing"
      },
      {
        "question": "Daisy sat near the kitten like a ______.",
        "optionA": "guard",
        "correctAnswer": "guard",
        "optionB": "stranger",
        "optionC": "enemy"
      },
      {
        "question": "Ratna soaked cotton in ______ milk.",
        "optionA": "cold",
        "optionB": "warm",
        "correctAnswer": "warm",
        "optionC": "hot"
      },
      {
        "question": "The kitten closed its ______ when given the dropper.",
        "optionA": "eyes",
        "optionB": "paws",
        "optionC": "mouth",
        "correctAnswer": "mouth"
      },
      {
        "question": "The kitten felt ______ when Daisy stood near it.",
        "optionA": "afraid",
        "optionB": "reassured",
        "correctAnswer": "reassured",
        "optionC": "angry"
      },
      {
        "question": "After many attempts, the kitten learned to ______ milk.",
        "optionA": "drink",
        "optionB": "take",
        "correctAnswer": "take",
        "optionC": "spill"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The kitten was only a few days old.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "All five kittens survived at the shelter.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Ratna worked at the shelter as a voluntary worker.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Ratna’s dog Daisy attacked the kitten.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Daisy treated the kitten like her own puppy.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The kitten could drink milk easily at first.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Ratna used cotton to feed milk initially.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The kitten liked the dropper from the beginning.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The kitten felt safe when Daisy was near it.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The kitten finally learned to take milk from the dropper.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
