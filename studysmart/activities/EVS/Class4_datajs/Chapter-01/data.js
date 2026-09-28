export const chapter = "Chapter - 1: Living Together";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Where do children in Asha’s village often play in the evening?",
        "optionA": "At the bus stop",
        "optionB": "In the market",
        "optionC": "Near the big tree",
        "correctAnswer": "Near the big tree"
      },
      {
        "question": "What do families do together during village festivals?",
        "optionA": "Share food and tell stories",
        "optionB": "Close their houses",
        "optionC": "Travel to cities",
        "correctAnswer": "Share food and tell stories"
      },
      {
        "question": "What do children join to spread the message of saving trees?",
        "optionA": "Exams",
        "optionB": "Sports matches",
        "optionC": "Rallies",
        "correctAnswer": "Rallies"
      },
      {
        "question": "What do people plant in parks, schools, and along roads during Van Mahotsav?",
        "optionA": "Stones",
        "optionB": "Saplings",
        "optionC": "Sand",
        "correctAnswer": "Saplings"
      },
      {
        "question": "What do people water after planting so they grow into big trees?",
        "optionA": "Saplings",
        "optionB": "Flowers",
        "optionC": "Leaves",
        "correctAnswer": "Saplings"
      },
      {
        "question": "What place becomes busy where villagers buy and sell things?",
        "optionA": "Local market",
        "optionB": "Temple",
        "optionC": "Playground",
        "correctAnswer": "Local market"
      },
      {
        "question": "What do neighbours share with each other during celebrations?",
        "optionA": "Stones",
        "optionB": "Tools",
        "optionC": "Sweets",
        "correctAnswer": "Sweets"
      },
      {
        "question": "What do trees give us that helps us breathe?",
        "optionA": "Smoke",
        "optionB": "Fresh air",
        "optionC": "Dust",
        "correctAnswer": "Fresh air"
      },
      {
        "question": "What do people decorate during festivals in the village?",
        "optionA": "Homes and temples",
        "optionB": "Rivers",
        "optionC": "Mountains",
        "correctAnswer": "Homes and temples"
      },
      {
        "question": "What do people feel when they belong to a community?",
        "optionA": "Angry",
        "optionB": "Secure",
        "optionC": "Lonely",
        "correctAnswer": "Secure"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Living together means caring for each other and working as a ______.",
        "optionA": "group",
        "optionB": "team",
        "optionC": "class",
        "correctAnswer": "team"
      },
      {
        "question": "Village life is simple and close to ______.",
        "optionA": "airports",
        "optionB": "factories",
        "optionC": "nature",
        "correctAnswer": "nature"
      },
      {
        "question": "Children make colourful ______ about saving trees.",
        "optionA": "bags",
        "optionB": "posters",
        "optionC": "shoes",
        "correctAnswer": "posters"
      },
      {
        "question": "Trees give us fresh ______.",
        "optionA": "air",
        "optionB": "smoke",
        "optionC": "dust",
        "correctAnswer": "air"
      },
      {
        "question": "People celebrate festivals with music, dance, and ______.",
        "optionA": "exams",
        "optionB": "homework",
        "optionC": "food",
        "correctAnswer": "food"
      },
      {
        "question": "Trees help keep the Earth ______.",
        "optionA": "cool",
        "optionB": "hot",
        "optionC": "dry",
        "correctAnswer": "cool"
      },
      {
        "question": "Village children often play ______ games outside.",
        "optionA": "computer",
        "optionB": "indoor",
        "optionC": "traditional",
        "correctAnswer": "traditional"
      },
      {
        "question": "During Van Mahotsav people plant ______.",
        "optionA": "stones",
        "optionB": "saplings",
        "optionC": "sand",
        "correctAnswer": "saplings"
      },
      {
        "question": "Planting trees makes the community ______.",
        "optionA": "dark and dirty",
        "optionB": "green and clean",
        "optionC": "empty",
        "correctAnswer": "green and clean"
      },
      {
        "question": "Communities make daily life easier and more ______.",
        "optionA": "joyful",
        "optionB": "boring",
        "optionC": "silent",
        "correctAnswer": "joyful"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "People in a community help each other in many ways.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Village children often play traditional games outside.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "During Van Mahotsav people plant trees and take care of them.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Trees give us fresh air and shade.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Festivals in villages are celebrated together by many people.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Living together makes people feel lonely and unsafe.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Children sing songs and make posters about saving trees.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "People water saplings after planting them.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Communities help people feel secure and happy.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Celebrating together brings sadness to the village.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
