export const chapter = "Chapter - 9: Be Safe";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Why is safety important in our daily lives?",
        "optionA": "To get hurt",
        "optionB": "To protect from harm",
        "correctAnswer": "To protect from harm",
        "optionC": "To play more"
      },
      {
        "question": "What should you not touch with wet hands?",
        "optionA": "Pillow",
        "optionB": "Blanket",
        "optionC": "Electric cords",
        "correctAnswer": "Electric cords"
      },
      {
        "question": "Where should we walk while crossing the road?",
        "optionA": "On the grass",
        "optionB": "On zebra crossing",
        "correctAnswer": "On zebra crossing",
        "optionC": "On the divider"
      },
      {
        "question": "What keeps us safe while cycling?",
        "optionA": "Cap",
        "optionB": "Helmet",
        "correctAnswer": "Helmet",
        "optionC": "Bag"
      },
      {
        "question": "What should you do on staircases?",
        "optionA": "Jump",
        "optionB": "Sit",
        "optionC": "Hold the railing",
        "correctAnswer": "Hold the railing"
      },
      {
        "question": "Where should you play for safety?",
        "optionA": "Kitchen",
        "optionB": "Park",
        "correctAnswer": "Park",
        "optionC": "Road"
      },
      {
        "question": "What should you do if your clothes catch fire?",
        "optionA": "Run",
        "optionB": "Jump",
        "optionC": "Stop, drop and roll",
        "correctAnswer": "Stop, drop and roll"
      },
      {
        "question": "Who should supervise water activities?",
        "optionA": "Strangers",
        "optionB": "Adults",
        "correctAnswer": "Adults",
        "optionC": "Friends"
      },
      {
        "question": "What should we not do near the pool?",
        "optionA": "Walk slowly",
        "optionB": "Sit quietly",
        "optionC": "Run",
        "correctAnswer": "Run"
      },
      {
        "question": "What is used to treat small injuries?",
        "optionA": "Bandage",
        "correctAnswer": "Bandage",
        "optionB": "Soap",
        "optionC": "Shampoo"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "______ helps protect us from harm and accidents.",
        "optionA": "Fun",
        "optionB": "Safety",
        "correctAnswer": "Safety",
        "optionC": "Games"
      },
      {
        "question": "Bathrooms get slippery when they are ______.",
        "optionA": "Cold",
        "optionB": "Small",
        "optionC": "Wet",
        "correctAnswer": "Wet"
      },
      {
        "question": "Sidewalks keep ______ safe from vehicles.",
        "optionA": "Drivers",
        "optionB": "Birds",
        "optionC": "Pedestrians",
        "correctAnswer": "Pedestrians"
      },
      {
        "question": "We must ______ calmly in school corridors.",
        "optionA": "Run",
        "optionB": "Walk",
        "correctAnswer": "Walk",
        "optionC": "Dance"
      },
      {
        "question": "Do not stand in front of the ______ when someone is using it.",
        "optionA": "Bench",
        "optionB": "Swing",
        "correctAnswer": "Swing",
        "optionC": "Slide"
      },
      {
        "question": "Water activities need ______ jackets for protection.",
        "optionA": "Wool",
        "optionB": "Life",
        "correctAnswer": "Life",
        "optionC": "Cotton"
      },
      {
        "question": "During fire, we should crawl ______ the smoke.",
        "optionA": "Over",
        "optionB": "Near",
        "optionC": "Under",
        "correctAnswer": "Under"
      },
      {
        "question": "A ______ box is useful in emergencies.",
        "optionA": "Toy",
        "optionB": "Medicine",
        "optionC": "First-aid",
        "correctAnswer": "First-aid"
      },
      {
        "question": "Cleaning cuts with water stops ______ from spreading.",
        "optionA": "Colour",
        "optionB": "Germs",
        "optionC": "Infections",
        "correctAnswer": "Infections"
      },
      {
        "question": "Playing in safe areas prevents ______.",
        "optionA": "Joy",
        "optionB": "Harm",
        "correctAnswer": "Harm",
        "optionC": "Learning"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Zebra crossings are used to cross roads safely.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "You should play near the road to watch vehicles.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Bandages help wounds heal.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "It is okay to run in school corridors.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Life jackets are used during swimming for safety.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "You should hide in dark places while playing.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Helmets protect your head while cycling.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "First aid is only given by a doctor.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "It is safe to keep your school bag on the corridor floor.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Touching electric cords with wet hands is dangerous.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
