export const chapter = "Chapter - 5: Its Food Time!";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which insects make honey?",
        "options": {
          "A": "Ants",
          "B": "Bees",
          "C": "Butterflies"
        },
        "answer": "B"
      },
      {
        "question": "Which meal do we usually eat in the morning?",
        "options": {
          "A": "Breakfast",
          "B": "Lunch",
          "C": "Dinner"
        },
        "answer": "A"
      },
      {
        "question": "Which food helps us stay strong and healthy?",
        "options": {
          "A": "Healthy food",
          "B": "Junk food",
          "C": "Dirty food"
        },
        "answer": "A"
      },
      {
        "question": "From where do fruits and vegetables come?",
        "options": {
          "A": "Stones",
          "B": "Animals",
          "C": "Plants"
        },
        "answer": "C"
      },
      {
        "question": "Which meal is eaten in the afternoon?",
        "options": {
          "A": "Breakfast",
          "B": "Lunch",
          "C": "Dinner"
        },
        "answer": "B"
      },
      {
        "question": "What do we get from animals like hens?",
        "options": {
          "A": "Rice",
          "B": "Eggs",
          "C": "Wheat"
        },
        "answer": "B"
      },
      {
        "question": "What do bees work together to make?",
        "options": {
          "A": "Milk",
          "B": "Juice",
          "C": "Honey"
        },
        "answer": "C"
      },
      {
        "question": "Where does rice grow?",
        "options": {
          "A": "Wet fields called paddies",
          "B": "Deserts",
          "C": "Mountains"
        },
        "answer": "A"
      },
      {
        "question": "Which meal do we eat at night?",
        "options": {
          "A": "Lunch",
          "B": "Dinner",
          "C": "Breakfast"
        },
        "answer": "B"
      },
      {
        "question": "What should we do with extra food instead of throwing it?",
        "options": {
          "A": "Waste it",
          "B": "Share it or give it to animals",
          "C": "Hide it"
        },
        "answer": "B"
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
        "options": {
          "A": "energy",
          "B": "colour",
          "C": "noise"
        },
        "answer": "A"
      },
      {
        "question": "Fruits and vegetables grow on ______.",
        "options": {
          "A": "plants",
          "B": "clouds",
          "C": "rocks"
        },
        "answer": "A"
      },
      {
        "question": "We should eat ______ food to stay healthy.",
        "options": {
          "A": "dirty",
          "B": "healthy",
          "C": "stale"
        },
        "answer": "B"
      },
      {
        "question": "Honey is made by ______.",
        "options": {
          "A": "birds",
          "B": "ants",
          "C": "bees"
        },
        "answer": "C"
      },
      {
        "question": "Rice grows in wet ______ called paddies.",
        "options": {
          "A": "fields",
          "B": "roads",
          "C": "houses"
        },
        "answer": "A"
      },
      {
        "question": "Dinner is the ______ meal of the day.",
        "options": {
          "A": "first",
          "B": "last",
          "C": "middle"
        },
        "answer": "B"
      },
      {
        "question": "Lunch is usually eaten in the ______.",
        "options": {
          "A": "morning",
          "B": "afternoon",
          "C": "midnight"
        },
        "answer": "B"
      },
      {
        "question": "Food helps our body ______ strong.",
        "options": {
          "A": "grow",
          "B": "break",
          "C": "shrink"
        },
        "answer": "A"
      },
      {
        "question": "Eggs come from ______.",
        "options": {
          "A": "soil",
          "B": "rivers",
          "C": "animals"
        },
        "answer": "C"
      },
      {
        "question": "We should not ______ food.",
        "options": {
          "A": "waste",
          "B": "cook",
          "C": "eat"
        },
        "answer": "A"
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
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Bees work together to make honey.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Rice grows in wet fields called paddies.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Healthy food keeps us strong.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Junk food should be eaten too much every day.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "B"
      },
      {
        "question": "Fruits and vegetables come from plants.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Dinner is eaten at night.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Food is precious and should not be wasted.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Honey is made by birds.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "B"
      },
      {
        "question": "Extra food can be shared with animals.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      }
    ]
  };
}

export var activityData;
