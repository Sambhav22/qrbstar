export const chapter = "Chapter - 20: The Snakes at School";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Where did the boys go instead of attending school?",
        "optionA": "Park",
        "optionB": "Creek",
        "correctAnswer": "Creek",
        "optionC": "Market"
      },
      {
        "question": "What did the boys build near the creek?",
        "optionA": "Bridge",
        "optionB": "Tower",
        "optionC": "Fortress",
        "correctAnswer": "Fortress"
      },
      {
        "question": "What did the boys discover at the creek?",
        "optionA": "A bird",
        "optionB": "A ball of baby snakes",
        "correctAnswer": "A ball of baby snakes",
        "optionC": "A rabbit"
      },
      {
        "question": "How did the boys carry the snakes to school?",
        "optionA": "In boxes",
        "optionB": "In bottles",
        "optionC": "In bags",
        "correctAnswer": "In bags"
      },
      {
        "question": "What did the boys expect after releasing the snakes?",
        "optionA": "A small amount of fun",
        "correctAnswer": "A small amount of fun",
        "optionB": "Complete silence",
        "optionC": "No reaction"
      },
      {
        "question": "What actually happened in the school?",
        "optionA": "Everyone laughed",
        "optionB": "Nothing happened",
        "optionC": "Panic spread everywhere",
        "correctAnswer": "Panic spread everywhere"
      },
      {
        "question": "What happened to the chairs and lockers?",
        "optionA": "They were cleaned",
        "optionB": "They tumbled down",
        "correctAnswer": "They tumbled down",
        "optionC": "They disappeared"
      },
      {
        "question": "How is the hallway described in the poem?",
        "optionA": "Playground",
        "optionB": "War zone",
        "correctAnswer": "War zone",
        "optionC": "Library"
      },
      {
        "question": "Why were the boys in trouble?",
        "optionA": "They brought snakes to school",
        "correctAnswer": "They brought snakes to school",
        "optionB": "They broke furniture",
        "optionC": "They fought"
      },
      {
        "question": "What lesson did the boys learn?",
        "optionA": "To repeat the prank",
        "optionB": "To ignore rules",
        "optionC": "That such pranks can be serious",
        "correctAnswer": "That such pranks can be serious"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The creek ______ the boys more than school.",
        "optionA": "enticed",
        "correctAnswer": "enticed",
        "optionB": "frightened",
        "optionC": "ignored"
      },
      {
        "question": "The boys chased frogs and caught ______.",
        "optionA": "birds",
        "optionB": "insects",
        "optionC": "fish",
        "correctAnswer": "fish"
      },
      {
        "question": "They saw a ______ sight at the creek.",
        "optionA": "dull",
        "optionB": "boring",
        "optionC": "wondrous",
        "correctAnswer": "wondrous"
      },
      {
        "question": "They should have ______ longer before acting.",
        "optionA": "jumped",
        "optionB": "pondered",
        "correctAnswer": "pondered",
        "optionC": "laughed"
      },
      {
        "question": "The school bell ______ loudly.",
        "optionA": "jangled",
        "correctAnswer": "jangled",
        "optionB": "rang",
        "optionC": "buzzed"
      },
      {
        "question": "The screams were loud and ______.",
        "optionA": "soft",
        "optionB": "deep",
        "optionC": "shrill",
        "correctAnswer": "shrill"
      },
      {
        "question": "The boys ______ the snakes into their bags.",
        "optionA": "dropped",
        "optionB": "stuffed",
        "correctAnswer": "stuffed",
        "optionC": "threw"
      },
      {
        "question": "The baby snakes were ______.",
        "optionA": "harmless",
        "correctAnswer": "harmless",
        "optionB": "dangerous",
        "optionC": "harmful"
      },
      {
        "question": "The boys were given a week’s ______.",
        "optionA": "reward",
        "optionB": "holiday",
        "optionC": "exclusion",
        "correctAnswer": "exclusion"
      },
      {
        "question": "The boys felt ______ after the incident.",
        "optionA": "proud",
        "optionB": "angry",
        "optionC": "repentant",
        "correctAnswer": "repentant"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The boys went to the creek during school time.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The boys carefully thought before taking the snakes.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The prank caused a lot of panic in the school.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The snakes harmed the students.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The boys were punished for their actions.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The punishment given to them was very light compared to others.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The boys felt sorry after the incident.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Other students always followed the rules.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Teachers praised the boys for their prank.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The boys learned an important lesson.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
