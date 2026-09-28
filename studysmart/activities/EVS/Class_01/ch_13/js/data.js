export const chapter = "Chapter - 13: In the Sky";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What helps us know if it is day or night?",
        "options": {
          "A": "Rivers",
          "B": "Trees",
          "C": "The sky"
        },
        "answer": "C"
      },
      {
        "question": "What is the Sun described as in the chapter?",
        "options": {
          "A": "A ball of fire",
          "B": "A bright lamp",
          "C": "A glowing star near Earth"
        },
        "answer": "A"
      },
      {
        "question": "What moves across the sky and changes shapes?",
        "options": {
          "A": "Birds",
          "B": "Clouds",
          "C": "Planes"
        },
        "answer": "B"
      },
      {
        "question": "What do we see twinkling far away in the night sky?",
        "options": {
          "A": "Stars",
          "B": "Clouds",
          "C": "Moonlight"
        },
        "answer": "A"
      },
      {
        "question": "What does the Sun help plants do?",
        "options": {
          "A": "Sleep",
          "B": "Grow",
          "C": "Fly"
        },
        "answer": "B"
      },
      {
        "question": "What colour is the Moon described as in the chapter?",
        "options": {
          "A": "Blue",
          "B": "White",
          "C": "Red"
        },
        "answer": "B"
      },
      {
        "question": "What do grey clouds sometimes bring?",
        "options": {
          "A": "Wind",
          "B": "Snow",
          "C": "Rain"
        },
        "answer": "C"
      },
      {
        "question": "What happens to the sky when the Sun goes down?",
        "options": {
          "A": "It becomes dark",
          "B": "It becomes green",
          "C": "It becomes yellow"
        },
        "answer": "A"
      },
      {
        "question": "What do some stars form when they make shapes in the sky?",
        "options": {
          "A": "Shadows",
          "B": "Clouds",
          "C": "Constellations"
        },
        "answer": "C"
      },
      {
        "question": "What can we learn by watching the sky?",
        "options": {
          "A": "Nature",
          "B": "Driving",
          "C": "Cooking"
        },
        "answer": "A"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The Sun rises in the ______.",
        "options": {
          "A": "morning",
          "B": "night",
          "C": "evening"
        },
        "answer": "A"
      },
      {
        "question": "The Sun sets in the ______.",
        "options": {
          "A": "evening",
          "B": "morning",
          "C": "noon"
        },
        "answer": "A"
      },
      {
        "question": "The sky looks ______ during the day.",
        "options": {
          "A": "red",
          "B": "blue",
          "C": "brown"
        },
        "answer": "B"
      },
      {
        "question": "Clouds are made of tiny drops of ______.",
        "options": {
          "A": "sand",
          "B": "water",
          "C": "soil"
        },
        "answer": "B"
      },
      {
        "question": "Stars are very ______ from us.",
        "options": {
          "A": "large",
          "B": "near",
          "C": "far away"
        },
        "answer": "C"
      },
      {
        "question": "The Moon reflects the light of the ______.",
        "options": {
          "A": "clouds",
          "B": "stars",
          "C": "Sun"
        },
        "answer": "C"
      },
      {
        "question": "The Moon changes its ______ every night.",
        "options": {
          "A": "colour",
          "B": "shape",
          "C": "size"
        },
        "answer": "B"
      },
      {
        "question": "The sky becomes ______ when the Sun goes down.",
        "options": {
          "A": "dark",
          "B": "bright",
          "C": "white"
        },
        "answer": "A"
      },
      {
        "question": "The Sun gives us light and ______.",
        "options": {
          "A": "wind",
          "B": "rain",
          "C": "warmth"
        },
        "answer": "C"
      },
      {
        "question": "Some clouds turn ______ and bring rain.",
        "options": {
          "A": "green",
          "B": "grey",
          "C": "blue"
        },
        "answer": "B"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The sky can change colours during the day and night.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "The Sun keeps us warm.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Clouds stay in one shape all the time.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "B"
      },
      {
        "question": "The Moon reflects the light of the Sun.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Stars are tiny twinkling lights far away.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "The sky always looks the same.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "B"
      },
      {
        "question": "The Sun helps plants grow.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Some stars make shapes called constellations.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "The night sky becomes dark after the Sun sets.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Clouds are made of drops of water.",
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
