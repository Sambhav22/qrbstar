export const chapter = "Chapter - 16: The Tale of Peter Rabbit";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What colour was Peter’s jacket?",
        "optionA": "Red",
        "optionB": "Blue",
        "correctAnswer": "Blue",
        "optionC": "Green"
      },
      {
        "question": "What did Peter run into when he tried to escape?",
        "optionA": "Fence",
        "optionB": "Bush",
        "optionC": "Gooseberry net",
        "correctAnswer": "Gooseberry net"
      },
      {
        "question": "Who encouraged Peter to try harder when he was crying?",
        "optionA": "Mouse",
        "optionB": "Sparrows",
        "correctAnswer": "Sparrows",
        "optionC": "Cat"
      },
      {
        "question": "What was Mr. McGregor doing when Peter first saw him?",
        "optionA": "Planting cabbages",
        "correctAnswer": "Planting cabbages",
        "optionB": "Watering plants",
        "optionC": "Sleeping"
      },
      {
        "question": "Where did Peter jump to hide inside the tool-shed?",
        "optionA": "Basket",
        "optionB": "Can",
        "correctAnswer": "Can",
        "optionC": "Sack"
      },
      {
        "question": "Why did Peter feel uncomfortable after hiding?",
        "optionA": "It had water in it",
        "correctAnswer": "It had water in it",
        "optionB": "It was dark",
        "optionC": "It was too small"
      },
      {
        "question": "What sound did Peter make that revealed his hiding place?",
        "optionA": "Cough",
        "optionB": "Sneeze",
        "correctAnswer": "Sneeze",
        "optionC": "Cry"
      },
      {
        "question": "What did Peter climb to look around the garden?",
        "optionA": "Fence",
        "optionB": "Wheelbarrow",
        "correctAnswer": "Wheelbarrow",
        "optionC": "Tree"
      },
      {
        "question": "What did Mr. McGregor hang to scare birds?",
        "optionA": "Hat",
        "optionB": "Stick",
        "optionC": "Jacket and shoes",
        "correctAnswer": "Jacket and shoes"
      },
      {
        "question": "How did Peter finally escape from the garden?",
        "optionA": "Climbed wall",
        "optionB": "Slipped under the gate",
        "correctAnswer": "Slipped under the gate",
        "optionC": "Hid in bushes"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Peter squeezed under the ______ to enter the garden.",
        "optionA": "gate",
        "correctAnswer": "gate",
        "optionB": "fence",
        "optionC": "wall"
      },
      {
        "question": "Peter lost one shoe among the ______.",
        "optionA": "beans",
        "optionB": "cabbages",
        "correctAnswer": "cabbages",
        "optionC": "onions"
      },
      {
        "question": "His jacket had ______ buttons.",
        "optionA": "golden",
        "optionB": "silver",
        "optionC": "brass",
        "correctAnswer": "brass"
      },
      {
        "question": "Mr. McGregor tried to catch Peter using a ______.",
        "optionA": "stick",
        "optionB": "sieve",
        "correctAnswer": "sieve",
        "optionC": "net"
      },
      {
        "question": "Peter hid in a ______ in the tool-shed.",
        "optionA": "pot",
        "optionB": "box",
        "optionC": "can",
        "correctAnswer": "can"
      },
      {
        "question": "Peter became ______ after sitting in water.",
        "optionA": "damp",
        "correctAnswer": "damp",
        "optionB": "dry",
        "optionC": "warm"
      },
      {
        "question": "The old mouse was carrying peas and ______.",
        "optionA": "grains",
        "optionB": "beans",
        "correctAnswer": "beans",
        "optionC": "seeds"
      },
      {
        "question": "The white cat was watching ______ in the pond.",
        "optionA": "fish",
        "correctAnswer": "fish",
        "optionB": "birds",
        "optionC": "rabbits"
      },
      {
        "question": "Peter ran along behind ______ bushes.",
        "optionA": "berry",
        "optionB": "blackcurrant",
        "correctAnswer": "blackcurrant",
        "optionC": "rose"
      },
      {
        "question": "His mother gave him ______ at bedtime.",
        "optionA": "milk",
        "optionB": "camomile tea",
        "correctAnswer": "camomile tea",
        "optionC": "juice"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Peter obeyed his mother’s instructions.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Peter was caught and put into a pie.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Peter lost both his shoes while running.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Peter escaped by wriggling out of his jacket.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Mr. McGregor found Peter hiding in the can.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The mouse showed Peter the way out.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Peter avoided talking to the cat.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Peter calmly walked back home.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Peter was not well in the evening.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "His mother gave him bread and milk at night.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
