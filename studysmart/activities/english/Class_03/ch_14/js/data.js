export const chapter = "Chapter - 14: The Idle Dream";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Where did Molly live?",
        "optionA": "In a city",
        "optionB": "In a village",
        "correctAnswer": "In a village",
        "optionC": "In a town"
      },
      {
        "question": "When did Molly milk the cow?",
        "optionA": "In the morning",
        "optionB": "In the evening",
        "correctAnswer": "In the evening",
        "optionC": "At night"
      },
      {
        "question": "What did Molly carry to the market?",
        "optionA": "A can of milk",
        "correctAnswer": "A can of milk",
        "optionB": "A basket",
        "optionC": "A bag"
      },
      {
        "question": "What did Molly think she would buy first with the money?",
        "optionA": "A goat",
        "optionB": "A hen",
        "correctAnswer": "A hen",
        "optionC": "A horse"
      },
      {
        "question": "What would the hen give Molly?",
        "optionA": "Milk",
        "optionB": "Wool",
        "optionC": "Eggs",
        "correctAnswer": "Eggs"
      },
      {
        "question": "How many sources of income did Molly plan to have?",
        "optionA": "One",
        "optionB": "Two",
        "correctAnswer": "Two",
        "optionC": "Three"
      },
      {
        "question": "What did Molly dream of buying in the future?",
        "optionA": "A big house",
        "correctAnswer": "A big house",
        "optionB": "A school",
        "optionC": "A shop"
      },
      {
        "question": "What did Molly start doing on the road?",
        "optionA": "Singing",
        "optionB": "Running",
        "optionC": "Dancing",
        "correctAnswer": "Dancing"
      },
      {
        "question": "What happened when Molly was dancing?",
        "optionA": "She fell asleep",
        "optionB": "She tripped over the milk can",
        "correctAnswer": "She tripped over the milk can",
        "optionC": "She dropped money"
      },
      {
        "question": "What did the old aunt say about Molly’s dream?",
        "optionA": "It was idle",
        "correctAnswer": "It was idle",
        "optionB": "It was wise",
        "optionC": "It was real"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Molly bought a ______.",
        "optionA": "cow",
        "correctAnswer": "cow",
        "optionB": "goat",
        "optionC": "hen"
      },
      {
        "question": "Molly had ______ litres of milk.",
        "optionA": "five",
        "correctAnswer": "five",
        "optionB": "two",
        "optionC": "ten"
      },
      {
        "question": "Molly wanted to sell milk in the ______.",
        "optionA": "school",
        "optionB": "market",
        "correctAnswer": "market",
        "optionC": "house"
      },
      {
        "question": "Molly thought her milk would sell for Rs. ______.",
        "optionA": "100",
        "optionB": "1000",
        "optionC": "500",
        "correctAnswer": "500"
      },
      {
        "question": "Molly planned to buy a ______ with the money.",
        "optionA": "dog",
        "optionB": "cat",
        "optionC": "hen",
        "correctAnswer": "hen"
      },
      {
        "question": "The hen would give ______.",
        "optionA": "eggs",
        "correctAnswer": "eggs",
        "optionB": "milk",
        "optionC": "fruits"
      },
      {
        "question": "Molly wanted to buy more ______.",
        "optionA": "cows and hens",
        "correctAnswer": "cows and hens",
        "optionB": "books",
        "optionC": "toys"
      },
      {
        "question": "Molly thought her neighbours would be ______ of her.",
        "optionA": "proud",
        "optionB": "jealous",
        "correctAnswer": "jealous",
        "optionC": "kind"
      },
      {
        "question": "Molly started ______ on the road.",
        "optionA": "crying",
        "optionB": "sleeping",
        "optionC": "dancing",
        "correctAnswer": "dancing"
      },
      {
        "question": "All the milk ______ on the road.",
        "optionA": "dried",
        "optionB": "spilled",
        "correctAnswer": "spilled",
        "optionC": "disappeared"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Molly bought a cow to sell its milk.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Molly already had a hen at home.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Molly planned everything carefully with real preparation.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Molly dreamed of becoming rich.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Molly sat quietly while going to the market.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Molly became very happy while thinking about her future.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Molly fell because she tripped over the milk can.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Molly returned home with a full can.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The old aunt advised Molly.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Molly’s dreams came true in the end.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
