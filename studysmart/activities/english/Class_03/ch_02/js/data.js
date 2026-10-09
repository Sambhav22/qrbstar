export const chapter = "Chapter - 2: Not By Chance";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Why did the aeroplane land at another airport?",
        "optionA": "Due to a snag",
        "correctAnswer": "Due to a snag",
        "optionB": "Due to bad weather",
        "optionC": "Due to low fuel"
      },
      {
        "question": "What did Dr. Anthony use to find his way?",
        "optionA": "A map",
        "optionB": "A guide",
        "optionC": "GPS",
        "correctAnswer": "GPS"
      },
      {
        "question": "Why could Dr. Anthony not see the road clearly?",
        "optionA": "Because it was dark",
        "optionB": "Because of heavy rain and storm",
        "correctAnswer": "Because of heavy rain and storm",
        "optionC": "Because of fog"
      },
      {
        "question": "How long did Dr. Anthony drive without reaching anywhere?",
        "optionA": "Two hours",
        "optionB": "Four hours",
        "correctAnswer": "Four hours",
        "optionC": "One hour"
      },
      {
        "question": "What did Dr. Anthony do when he saw the house?",
        "optionA": "He knocked at the door",
        "correctAnswer": "He knocked at the door",
        "optionB": "He ignored it",
        "optionC": "He went back"
      },
      {
        "question": "What did the woman ask Dr. Anthony to do?",
        "optionA": "Leave immediately",
        "optionB": "Wait till the weather gets better",
        "correctAnswer": "Wait till the weather gets better",
        "optionC": "Call someone"
      },
      {
        "question": "What surprised Dr. Anthony about the woman?",
        "optionA": "Her house",
        "optionB": "Her food",
        "optionC": "Her continuous prayers",
        "correctAnswer": "Her continuous prayers"
      },
      {
        "question": "What did Dr. Anthony do after seeing the child?",
        "optionA": "He left",
        "optionB": "He examined the child and wrote medicine",
        "correctAnswer": "He examined the child and wrote medicine",
        "optionC": "He called another doctor"
      },
      {
        "question": "Why could the woman not visit Dr. Anthony earlier?",
        "optionA": "She was busy",
        "optionB": "She had no money",
        "correctAnswer": "She had no money",
        "optionC": "She did not know him"
      },
      {
        "question": "What did Dr. Anthony say at the end of the story?",
        "optionA": "God is magnificent",
        "correctAnswer": "God is magnificent",
        "optionB": "God is great",
        "optionC": "God is kind"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The aeroplane had to stop at the nearest ______.",
        "optionA": "station",
        "optionB": "airport",
        "correctAnswer": "airport",
        "optionC": "road"
      },
      {
        "question": "Dr. Anthony decided to travel by ______.",
        "optionA": "train",
        "optionB": "car",
        "correctAnswer": "car",
        "optionC": "bus"
      },
      {
        "question": "The GPS stopped working due to bad ______.",
        "optionA": "traffic",
        "optionB": "road",
        "optionC": "weather",
        "correctAnswer": "weather"
      },
      {
        "question": "Dr. Anthony missed the correct ______.",
        "optionA": "path",
        "optionB": "turn",
        "correctAnswer": "turn",
        "optionC": "signal"
      },
      {
        "question": "He found a small ______ ahead.",
        "optionA": "house",
        "correctAnswer": "house",
        "optionB": "shop",
        "optionC": "hotel"
      },
      {
        "question": "The woman served him ______ and tea.",
        "optionA": "rice",
        "optionB": "bread",
        "correctAnswer": "bread",
        "optionC": "fruits"
      },
      {
        "question": "The woman kept ______ again and again.",
        "optionA": "talking",
        "optionB": "praying",
        "correctAnswer": "praying",
        "optionC": "sleeping"
      },
      {
        "question": "The baby was lying in a ______.",
        "optionA": "cradle",
        "correctAnswer": "cradle",
        "optionB": "chair",
        "optionC": "bed"
      },
      {
        "question": "The doctor wrote a ______ for the child.",
        "optionA": "letter",
        "optionB": "prescription",
        "correctAnswer": "prescription",
        "optionC": "message"
      },
      {
        "question": "The woman said it was not by ______ that he came there.",
        "optionA": "luck",
        "optionB": "mistake",
        "optionC": "chance",
        "correctAnswer": "chance"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Dr. Anthony was travelling for a conference.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The storm made it difficult to drive.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The GPS worked properly during the storm.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The woman refused to help Dr. Anthony.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The woman was praying for her son.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The child was suffering from cancer.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Dr. Anthony did not help the child.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The woman was rich and could travel easily.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The doctor felt emotional at the end.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The story shows that God helps people with faith.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
