export const chapter = "Chapter -17:My Story";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What was John Clemens known for?",
          optionA: "Farmer, merchant, and postmaster",
          optionB: "Doctor and scholar",
          optionC: "Inventor and scientist",
          correctAnswer: "A) Farmer, merchant, and postmaster",
        },
        {
          question: "What was the personality of John Clemens like?",
          optionA: "Merry and jolly",
          optionB: "Serious and not merry",
          optionC: "Adventurous and carefree",
          correctAnswer: "B) Serious and not merry",
        },
        {
          question: "What did the Clemens children do during the day?",
          optionA: "Played video games",
          optionB: "Roamed through the country, picking nuts and berries",
          optionC: "Attended school and studied",
          correctAnswer:
            "B) Roamed through the country, picking nuts and berries",
        },
        {
          question:
            "Who was the famous storyteller among the Clemens' children?",
          optionA: "John Clemens",
          optionB: "Jane Clemens",
          optionC: "Uncle Ned",
          correctAnswer: "C) Uncle Ned",
        },
        {
          question:
            "What was the nickname given to Samuel Clemens when he was a child?",
          optionA: "Little Joe",
          optionB: "Little Sam",
          optionC: "Little Mark",
          correctAnswer: "B) Little Sam",
        },
        {
          question:
            "Where did Samuel Clemens spend his summers with his mother and siblings?",
          optionA: "Florida",
          optionB: "Hannibal",
          optionC: "Quarles farm",
          correctAnswer: "C) Quarles farm",
        },
        {
          question: "What did Samuel Clemens admire Uncle Ned for?",
          optionA: "Cooking skills",
          optionB: "Storytelling",
          optionC: "Singing",
          correctAnswer: "B) Storytelling",
        },
        {
          question: "At what age did Samuel Clemens start going to school?",
          optionA: "3",
          optionB: "5",
          optionC: "9",
          correctAnswer: "B) 5",
        },
        {
          question:
            "What profession did Samuel Clemens learn after his father's death?",
          optionA: "Farmer",
          optionB: "Pilot",
          optionC: "Doctor",
          correctAnswer: "B) Pilot",
        },
        {
          question:
            "What name did Samuel Clemens use when signing his writings?",
          optionA: "Samuel Clemens Jr.",
          optionB: "Mark Twain",
          optionC: "John Briggs",
          correctAnswer: "B) Mark Twain",
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
            "John Clemens, Samuel's ____________, was a farmer, merchant, and postmaster in a Missouri town, called Florida.",
          optionA: "Uncle",
          optionB: "Father",
          optionC: "Brother",
          correctAnswer: "B) Father",
        },
        {
          question:
            "Mrs. Clemens did not like to have any one around when she was bustling through the ____________, so the six children spent the days roaming through the country, picking nuts and berries.",
          optionA: "Library",
          optionB: "Housework",
          optionC: "Garden",
          correctAnswer: "B) Housework",
        },
        {
          question:
            "Uncle Ned was a famous ____________. When he described witches and goblins, the children would look over their shoulders as if they half expected to see the queer creatures in the room.",
          optionA: "Musician",
          optionB: "Storyteller",
          optionC: "Magician",
          correctAnswer: "B) Storyteller",
        },
        {
          question:
            "Sam was a delicate child. The neighbors used to shake their heads and declare he would never live to be a man, and every one always spoke of him as 'little ____________.'",
          optionA: "Joe",
          optionB: "Tom",
          optionC: "Sam",
          correctAnswer: "C) Sam",
        },
        {
          question:
            "When Mr. Clemens moved to another town some distance away, the mother said instantly: 'Well, Hannibal may be all right for your business, but Florida agrees so well with little Sam, that I shall spend every summer here with the children, on the ____________ farm.'",
          optionA: "Smith",
          optionB: "Quarles",
          optionC: "Thompson",
          correctAnswer: "B) Quarles",
        },
        {
          question:
            "Sam grew plump. A funny thing happened the first summer they went to nice Mr. Quarles's. Mrs. Clemens, with the older children, the new baby, and Jennie, went on ahead in a large ____________.",
          optionA: "Wagon",
          optionB: "Car",
          optionC: "Boat",
          correctAnswer: "A) Wagon",
        },
        {
          question:
            "At nine he had a head rather too large for his body, and it looked even bigger because he had such a lot of waving, ____________ hair.",
          optionA: "Brown",
          optionB: "Black",
          optionC: "Sandy",
          correctAnswer: "C) Sandy",
        },
        {
          question:
            "Sam learned the ____________ trade. He was very quick in setting type and accurate, so that he soon helped his older brother start a newspaper.",
          optionA: "Blacksmith",
          optionB: "Printer's",
          optionC: "Carpenter's",
          correctAnswer: "B) Printer's",
        },
        {
          question:
            "He meant to travel, and as he earned enough by newspaper work, he visited New York, Philadelphia, and was on his way to ____________ when he got a chance to be a pilot on the Mississippi River.",
          optionA: "Europe",
          optionB: "Asia",
          optionC: "South America",
          correctAnswer: "C) South America",
        },
        {
          question:
            "After his death, Sam learned the ____________ trade. He was very quick in setting type and accurate, so that he soon helped his older brother start a newspaper.",
          optionA: "Carpenter's",
          optionB: "Farmer's",
          optionC: "Printer's",
          correctAnswer: "C) Printer's",
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
            "John Clemens, Samuel's father, was a farmer, merchant, and postmaster in a Missouri town called Florida.",
          optionTrue: "True",
          optionFalse: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Mrs. Clemens liked to have people around when she was bustling through the housework.",
          optionTrue: "True",
          optionFalse: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Uncle Ned, a coloured farm-hand, was not a good storyteller according to the children.",
          optionTrue: "True",
          optionFalse: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Sam Clemens was often called 'Little Joe' by his neighbors.",
          optionTrue: "True",
          optionFalse: "False",
          correctAnswer: "False",
        },
        {
          question: "The Clemens family spent their summers on the Smith farm.",
          optionTrue: "True",
          optionFalse: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Sam's mother, Mrs. Clemens, went ahead to Quarles farm in a car with the older children, the new baby, and Jennie.",
          optionTrue: "True",
          optionFalse: "False",
          correctAnswer: "False",
        },
        {
          question: "Sam had brown hair and fine gray eyes when he was nine.",
          optionTrue: "True",
          optionFalse: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Sam learned the carpenter's trade after his father's death.",
          optionTrue: "True",
          optionFalse: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Sam visited Europe, Asia, and South America during his travels.",
          optionTrue: "True",
          optionFalse: "False",
          correctAnswer: "False",
        },
        {
          question: "Sam signed his writings with the name 'Little Sam.'",
          optionTrue: "True",
          optionFalse: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
