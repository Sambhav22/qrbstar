export const chapter = "Chapter - 5: Good habits";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What keeps us clean, healthy, and happy?",
        "optionA": "Bad habits",
        "optionB": "Playing all day",
        "optionC": "Good habits",
        "correctAnswer": "Good habits"
      },
      {
        "question": "Which is a personal hygiene habit?",
        "optionA": "Watching Tv",
        "optionB": "Brushing teeth",
        "optionC": "Sleeping all day",
        "correctAnswer": "Brushing teeth"
      },
      {
        "question": "What should we wear every day?",
        "optionA": "Dirty clothes",
        "optionB": "Clean clothes",
        "optionC": "Wet clothes",
        "correctAnswer": "Clean clothes"
      },
      {
        "question": "Which of these is a healthy food?",
        "optionA": "Ice cream",
        "optionB": "Chips",
        "optionC": "Fruits",
        "correctAnswer": "Fruits"
      },
      {
        "question": "Why should we drink water?",
        "optionA": "To feel sleepy",
        "optionB": "To stay hydrated",
        "optionC": "To eat more",
        "correctAnswer": "To stay hydrated"
      },
      {
        "question": "What helps our eyes stay healthy?",
        "optionA": "Sweets",
        "optionB": "Cakes",
        "optionC": "Carrots",
        "correctAnswer": "Carrots"
      },
      {
        "question": "What shows good manners?",
        "optionA": "Shouting loudly",
        "optionB": "Saying “thank you”",
        "optionC": "Fighting with friends",
        "correctAnswer": "Saying “thank you”"
      },
      {
        "question": "Where should we throw waste?",
        "optionA": "On the road",
        "optionB": "On the floor",
        "optionC": "In the dustbin",
        "correctAnswer": "In the dustbin"
      },
      {
        "question": "What makes us strong and happy?",
        "optionA": "Watching TV all day",
        "optionB": "Sleeping too much",
        "optionC": "Playing outside",
        "correctAnswer": "Playing outside"
      },
      {
        "question": "What keeps us fresh and protects us from germs?",
        "optionA": "Wearing shoes",
        "optionB": "Good hygiene",
        "optionC": "Writing",
        "correctAnswer": "Good hygiene"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "We should brush our teeth ___ a day.",
        "optionA": "Once",
        "optionB": "Twice",
        "optionC": "Five times",
        "correctAnswer": "Twice"
      },
      {
        "question": "Eating ___ and vegetables makes us strong.",
        "optionA": "Fruits",
        "optionB": "Ice cream",
        "optionC": "Chocolates",
        "correctAnswer": "Fruits"
      },
      {
        "question": "We should throw waste in the ___.",
        "optionA": "Bag",
        "optionB": "Cupboard",
        "optionC": "Dustbin",
        "correctAnswer": "Dustbin"
      },
      {
        "question": "Carrots are good for our ___.",
        "optionA": "Hair",
        "optionB": "Eyes",
        "optionC": "Ears",
        "correctAnswer": "Eyes"
      },
      {
        "question": "We should wash our ___ before eating.",
        "optionA": "Legs",
        "optionB": "Face",
        "optionC": "Hands",
        "correctAnswer": "Hands"
      },
      {
        "question": "We should take a ___ every day.",
        "optionA": "Rest",
        "optionB": "Walk",
        "optionC": "Bath",
        "correctAnswer": "Bath"
      },
      {
        "question": "We should wear ___ clothes.",
        "optionA": "Dirty",
        "optionB": "Clean",
        "optionC": "Old",
        "correctAnswer": "Clean"
      },
      {
        "question": "Saying ___makes others feel happy.",
        "optionA": "Bye",
        "optionB": "Thank you",
        "optionC": "Go away",
        "correctAnswer": "Thank you"
      },
      {
        "question": "Drinking ___ keeps you hydrated.",
        "optionA": "Juice",
        "optionB": "Milk",
        "optionC": "Water",
        "correctAnswer": "Water"
      },
      {
        "question": "We should not ___ on walls.",
        "optionA": "Play",
        "optionB": "Scribble",
        "optionC": "Clean",
        "correctAnswer": "Scribble"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Brushing our teeth is a good habit.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We should eat too many sweets to stay healthy.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Throwing waste on the floor keeps our classroom clean.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Saying “thank you” and “sorry” shows good manners.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Playing outside and getting fresh air is good for our body.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Good habits make us dirty and sad.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Cutting our nails is a good habit.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Watching too much TV is a good way to stay strong.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Good manners help us make friends.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Clean surroundings keep us safe and healthy.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
