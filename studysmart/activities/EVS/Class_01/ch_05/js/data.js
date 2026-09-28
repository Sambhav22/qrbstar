export const chapter = "Chapter - 5: Its Food Time!";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which insects make honey?",
        "optionA": "Ants",
        "optionB": "Bees",
        "optionC": "Butterflies",
        "correctAnswer": "Bees"
      },
      {
        "question": "Which meal do we usually eat in the morning?",
        "optionA": "Breakfast",
        "optionB": "Lunch",
        "optionC": "Dinner",
        "correctAnswer": "Breakfast"
      },
      {
        "question": "Which food helps us stay strong and healthy?",
        "optionA": "Healthy food",
        "optionB": "Junk food",
        "optionC": "Dirty food",
        "correctAnswer": "Healthy food"
      },
      {
        "question": "From where do fruits and vegetables come?",
        "optionA": "Stones",
        "optionB": "Animals",
        "optionC": "Plants",
        "correctAnswer": "Plants"
      },
      {
        "question": "Which meal is eaten in the afternoon?",
        "optionA": "Breakfast",
        "optionB": "Lunch",
        "optionC": "Dinner",
        "correctAnswer": "Lunch"
      },
      {
        "question": "What do we get from animals like hens?",
        "optionA": "Rice",
        "optionB": "Eggs",
        "optionC": "Wheat",
        "correctAnswer": "Eggs"
      },
      {
        "question": "What do bees work together to make?",
        "optionA": "Milk",
        "optionB": "Juice",
        "optionC": "Honey",
        "correctAnswer": "Honey"
      },
      {
        "question": "Where does rice grow?",
        "optionA": "Wet fields called paddies",
        "optionB": "Deserts",
        "optionC": "Mountains",
        "correctAnswer": "Wet fields called paddies"
      },
      {
        "question": "Which meal do we eat at night?",
        "optionA": "Lunch",
        "optionB": "Dinner",
        "optionC": "Breakfast",
        "correctAnswer": "Dinner"
      },
      {
        "question": "What should we do with extra food instead of throwing it?",
        "optionA": "Waste it",
        "optionB": "Share it or give it to animals",
        "optionC": "Hide it",
        "correctAnswer": "Share it or give it to animals"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Food gives us ______ to run and play.",
        "optionA": "energy",
        "optionB": "colour",
        "optionC": "noise",
        "correctAnswer": "energy"
      },
      {
        "question": "Fruits and vegetables grow on ______.",
        "optionA": "plants",
        "optionB": "clouds",
        "optionC": "rocks",
        "correctAnswer": "plants"
      },
      {
        "question": "We should eat ______ food to stay healthy.",
        "optionA": "dirty",
        "optionB": "healthy",
        "optionC": "stale",
        "correctAnswer": "healthy"
      },
      {
        "question": "Honey is made by ______.",
        "optionA": "birds",
        "optionB": "ants",
        "optionC": "bees",
        "correctAnswer": "bees"
      },
      {
        "question": "Rice grows in wet ______ called paddies.",
        "optionA": "fields",
        "optionB": "roads",
        "optionC": "houses",
        "correctAnswer": "fields"
      },
      {
        "question": "Dinner is the ______ meal of the day.",
        "optionA": "first",
        "optionB": "last",
        "optionC": "middle",
        "correctAnswer": "last"
      },
      {
        "question": "Lunch is usually eaten in the ______.",
        "optionA": "morning",
        "optionB": "afternoon",
        "optionC": "midnight",
        "correctAnswer": "afternoon"
      },
      {
        "question": "Food helps our body ______ strong.",
        "optionA": "grow",
        "optionB": "break",
        "optionC": "shrink",
        "correctAnswer": "grow"
      },
      {
        "question": "Eggs come from ______.",
        "optionA": "soil",
        "optionB": "rivers",
        "optionC": "animals",
        "correctAnswer": "animals"
      },
      {
        "question": "We should not ______ food.",
        "optionA": "waste",
        "optionB": "cook",
        "optionC": "eat",
        "correctAnswer": "waste"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Food gives us energy to play and think.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Bees work together to make honey.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Rice grows in wet fields called paddies.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Healthy food keeps us strong.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Junk food should be eaten too much every day.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Fruits and vegetables come from plants.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Dinner is eaten at night.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Food is precious and should not be wasted.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Honey is made by birds.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Extra food can be shared with animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
