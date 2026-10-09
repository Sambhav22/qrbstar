export const chapter = "Chapter - 7: Soft Skills: Way to Success";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What do soft skills mainly relate to?",
        "optionA": "Machines",
        "optionB": "Only academic subjects",
        "optionC": "Human interaction and behaviour",
        "correctAnswer": "Human interaction and behaviour"
      },
      {
        "question": "Why are soft skills important for teens?",
        "optionA": "They help in personal and professional success",
        "correctAnswer": "They help in personal and professional success",
        "optionB": "They are easy to measure",
        "optionC": "They replace hard skills"
      },
      {
        "question": "Which of the following is a soft skill mentioned in the chapter?",
        "optionA": "Technical coding",
        "optionB": "Teamwork",
        "correctAnswer": "Teamwork",
        "optionC": "Typing speed"
      },
      {
        "question": "What does effective communication help to build?",
        "optionA": "Competition",
        "optionB": "Isolation",
        "optionC": "Strong relationships",
        "correctAnswer": "Strong relationships"
      },
      {
        "question": "What does problem-solving involve?",
        "optionA": "Ignoring problems",
        "optionB": "Analysing and finding solutions",
        "correctAnswer": "Analysing and finding solutions",
        "optionC": "Complaining"
      },
      {
        "question": "What is empathy described as in the chapter?",
        "optionA": "Ignoring others",
        "optionB": "Giving orders",
        "optionC": "Understanding and sharing feelings",
        "correctAnswer": "Understanding and sharing feelings"
      },
      {
        "question": "Why is adaptability important?",
        "optionA": "Because the world keeps changing",
        "correctAnswer": "Because the world keeps changing",
        "optionB": "Because nothing changes",
        "optionC": "Because it avoids learning"
      },
      {
        "question": "What does leadership mainly include?",
        "optionA": "Inspiring and motivating others",
        "correctAnswer": "Inspiring and motivating others",
        "optionB": "Working alone",
        "optionC": "Avoiding responsibility"
      },
      {
        "question": "What is the benefit of time management?",
        "optionA": "Increases stress",
        "optionB": "Reduces productivity",
        "optionC": "Helps organise tasks efficiently",
        "correctAnswer": "Helps organise tasks efficiently"
      },
      {
        "question": "How can soft skills be improved?",
        "optionA": "Through practice and experience",
        "correctAnswer": "Through practice and experience",
        "optionB": "By avoiding practice",
        "optionC": "By memorising"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Soft skills are __________ abilities related to behaviour.",
        "optionA": "technical",
        "optionB": "non-technical",
        "correctAnswer": "non-technical",
        "optionC": "mechanical"
      },
      {
        "question": "Communication is the __________ of successful relationships.",
        "optionA": "problem",
        "optionB": "barrier",
        "optionC": "cornerstone",
        "correctAnswer": "cornerstone"
      },
      {
        "question": "Active listening requires full __________ to the speaker.",
        "optionA": "distraction",
        "optionB": "attention",
        "correctAnswer": "attention",
        "optionC": "silence"
      },
      {
        "question": "Teamwork involves working towards a __________ goal.",
        "optionA": "personal",
        "optionB": "common",
        "correctAnswer": "common",
        "optionC": "separate"
      },
      {
        "question": "Problem-solving helps teens become more __________.",
        "optionA": "resourceful",
        "correctAnswer": "resourceful",
        "optionB": "careless",
        "optionC": "dependent"
      },
      {
        "question": "Empathy helps in building __________ relationships.",
        "optionA": "weak",
        "optionB": "supportive",
        "correctAnswer": "supportive",
        "optionC": "harmful"
      },
      {
        "question": "Adaptability means adjusting to new __________.",
        "optionA": "problems",
        "optionB": "failures",
        "optionC": "conditions",
        "correctAnswer": "conditions"
      },
      {
        "question": "Leadership skills can be developed through __________ roles.",
        "optionA": "sleeping",
        "optionB": "leadership",
        "correctAnswer": "leadership",
        "optionC": "avoiding"
      },
      {
        "question": "Time management helps in reducing __________.",
        "optionA": "stress",
        "correctAnswer": "stress",
        "optionB": "happiness",
        "optionC": "success"
      },
      {
        "question": "Feedback should be __________ to help improvement.",
        "optionA": "useless",
        "optionB": "constructive",
        "correctAnswer": "constructive",
        "optionC": "harmful"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Soft skills help people interact effectively in different situations.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Active listening means interrupting the speaker.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Teamwork involves collaboration with others.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Problem-solving means avoiding challenges.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Empathy helps in building supportive relationships.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Adaptability is useful in a changing world.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Leadership is only about being in control.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Time management helps in completing tasks efficiently.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Emotional intelligence includes understanding emotions.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Parents and teachers have no role in developing soft skills.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
