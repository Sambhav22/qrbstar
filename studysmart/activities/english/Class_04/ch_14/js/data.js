export const chapter = "Chapter - 14: Blood Donation";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Where is Anjali’s house located?",
        "optionA": "Near a school",
        "optionB": "Near a hospital",
        "correctAnswer": "Near a hospital",
        "optionC": "Near a park"
      },
      {
        "question": "What does the ambulance carry?",
        "optionA": "Goods",
        "optionB": "Patient",
        "correctAnswer": "Patient",
        "optionC": "Furniture"
      },
      {
        "question": "Who advised saying a silent prayer for patients?",
        "optionA": "Father",
        "correctAnswer": "Father",
        "optionB": "Mother",
        "optionC": "Anjali"
      },
      {
        "question": "What did Anjali’s friend tell her in school?",
        "optionA": "About a picnic",
        "optionB": "About an accident and no blood available",
        "correctAnswer": "About an accident and no blood available",
        "optionC": "About a game"
      },
      {
        "question": "Where was the blood donation camp held?",
        "optionA": "In hospital",
        "optionB": "In school",
        "optionC": "In colony",
        "correctAnswer": "In colony"
      },
      {
        "question": "Why was Anjali afraid to donate blood?",
        "optionA": "She felt tired",
        "optionB": "She was busy",
        "optionC": "She thought it would hurt",
        "correctAnswer": "She thought it would hurt"
      },
      {
        "question": "Who is going to donate blood in the story?",
        "optionA": "Anjali",
        "optionB": "Father",
        "correctAnswer": "Father",
        "optionC": "Mother"
      },
      {
        "question": "What does blood donation help to do?",
        "optionA": "Save lives",
        "correctAnswer": "Save lives",
        "optionB": "Build houses",
        "optionC": "Cook food"
      },
      {
        "question": "What did Anjali promise to do when she grows up?",
        "optionA": "Donate blood",
        "correctAnswer": "Donate blood",
        "optionB": "Become doctor",
        "optionC": "Travel abroad"
      },
      {
        "question": "How did the family react at the end of the story?",
        "optionA": "They cried",
        "optionB": "They smiled mildly",
        "correctAnswer": "They smiled mildly",
        "optionC": "They argued"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Anjali heard the sound of ______ all day and night.",
        "optionA": "music",
        "optionB": "bell",
        "optionC": "siren",
        "correctAnswer": "siren"
      },
      {
        "question": "A patient is given blood according to his ______.",
        "optionA": "height",
        "optionB": "group",
        "correctAnswer": "group",
        "optionC": "age"
      },
      {
        "question": "Blood donation day is celebrated on ______ October.",
        "optionA": "first",
        "correctAnswer": "first",
        "optionB": "tenth",
        "optionC": "fifteenth"
      },
      {
        "question": "A person must be at least ______ years old to donate blood.",
        "optionA": "sixteen",
        "optionB": "twenty",
        "optionC": "eighteen",
        "correctAnswer": "eighteen"
      },
      {
        "question": "Blood is stored in a ______ bank.",
        "optionA": "money",
        "optionB": "blood",
        "correctAnswer": "blood",
        "optionC": "food"
      },
      {
        "question": "Blood is divided into red cells, platelets and ______.",
        "optionA": "plasma",
        "correctAnswer": "plasma",
        "optionB": "water",
        "optionC": "sugar"
      },
      {
        "question": "The body makes up the loss of blood within ______ hours.",
        "optionA": "12",
        "optionB": "24",
        "correctAnswer": "24",
        "optionC": "48"
      },
      {
        "question": "A healthy man can donate blood once in ______ months.",
        "optionA": "two",
        "optionB": "three",
        "correctAnswer": "three",
        "optionC": "five"
      },
      {
        "question": "People above ______ years cannot donate blood.",
        "optionA": "50",
        "optionB": "70",
        "optionC": "65",
        "correctAnswer": "65"
      },
      {
        "question": "Anjali’s mother could not donate blood because she had ______.",
        "optionA": "fever",
        "optionB": "diabetes",
        "correctAnswer": "diabetes",
        "optionC": "cold"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The ambulance siren indicates that a patient is being taken to hospital.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Anjali was happy to hear the ambulance siren.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Blood donation is described as a national duty.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Children below eighteen can donate blood.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The body cannot replace lost blood.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "One unit of blood can help more than one patient.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "People with certain illnesses can donate blood.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Blood is stored only in one form.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Anjali’s father refused to donate blood.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The family understood the importance of blood donation.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
