export const chapter = "Chapter - 13: Our Earth";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What is the outermost layer of the Earth?",
        "optionA": "Core",
        "optionB": "Mantle",
        "optionC": "Crust",
        "correctAnswer": "Crust"
      },
      {
        "question": "Which type of rock is formed from cooled lava?",
        "optionA": "Sedimentary",
        "optionB": "Metamorphic",
        "optionC": "Igneous",
        "correctAnswer": "Igneous"
      },
      {
        "question": "What is the shape of the Earth?",
        "optionA": "Flat",
        "optionB": "Cube",
        "optionC": "Ball",
        "correctAnswer": "Ball"
      },
      {
        "question": "Which soil is best for plant growth?",
        "optionA": "Sandy",
        "optionB": "Clayey",
        "optionC": "Loamy",
        "correctAnswer": "Loamy"
      },
      {
        "question": "Which rock is used for kitchen tops?",
        "optionA": "Slate",
        "optionB": "Granite",
        "correctAnswer": "Granite",
        "optionC": "Shale"
      },
      {
        "question": "What is found in toothpaste that comes from minerals?",
        "optionA": "Sugar",
        "optionB": "Salt",
        "correctAnswer": "Salt",
        "optionC": "Oil"
      },
      {
        "question": "What is the deepest and hottest layer of the Earth?",
        "optionA": "Crust",
        "optionB": "Core",
        "correctAnswer": "Core",
        "optionC": "Mantle"
      },
      {
        "question": "Which rock often contains fossils?",
        "optionA": "Igneous",
        "optionB": "Sedimentary",
        "correctAnswer": "Sedimentary",
        "optionC": "Metamorphic"
      },
      {
        "question": "Which rock changes form due to heat and pressure?",
        "optionA": "Sedimentary",
        "optionB": "Metamorphic",
        "correctAnswer": "Metamorphic",
        "optionC": "Igneous"
      },
      {
        "question": "Which material is obtained through mining?",
        "optionA": "Wood",
        "optionB": "Plastic",
        "optionC": "Metal",
        "correctAnswer": "Metal"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The Earth has three layers: crust, mantle, and ______.",
        "optionA": "Metal",
        "optionB": "Core",
        "correctAnswer": "Core",
        "optionC": "Soil"
      },
      {
        "question": "______ rocks are formed from cooled lava.",
        "optionA": "Metamorphic",
        "optionB": "Sedimentary",
        "optionC": "Igneous",
        "correctAnswer": "Igneous"
      },
      {
        "question": "______ soil is rough and dry.",
        "optionA": "Loamy",
        "optionB": "Clayey",
        "optionC": "Sandy",
        "correctAnswer": "Sandy"
      },
      {
        "question": "______ is the layer we live on.",
        "optionA": "Mantle",
        "optionB": "Crust",
        "correctAnswer": "Crust",
        "optionC": "Core"
      },
      {
        "question": "Minerals are found deep under the ______.",
        "optionA": "Ocean",
        "optionB": "Ground",
        "correctAnswer": "Ground",
        "optionC": "Forest"
      },
      {
        "question": "______ is used to make buildings and roads.",
        "optionA": "Wood",
        "optionB": "Rock",
        "correctAnswer": "Rock",
        "optionC": "Glass"
      },
      {
        "question": "The Earth gives us air, water, and ______.",
        "optionA": "Clouds",
        "optionB": "Fire",
        "optionC": "Soil",
        "correctAnswer": "Soil"
      },
      {
        "question": "Soil contains nutrients, air, and ______.",
        "optionA": "Salt",
        "optionB": "Water",
        "correctAnswer": "Water",
        "optionC": "Light"
      },
      {
        "question": "Soil contains dead plants and  ______.",
        "optionA": "Toys",
        "optionB": "Wood",
        "optionC": "Animals",
        "correctAnswer": "Animals"
      },
      {
        "question": "______ is a natural substance found in the Earth and used in jewellery.",
        "optionA": "Mineral",
        "correctAnswer": "Mineral",
        "optionB": "Plastic",
        "optionC": "Wood"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The core is the coolest part of the Earth.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Sedimentary rocks are made by pressing bits of rocks together.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Sandy soil is sticky and holds water well.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Minerals are man-made substances.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The Earth is round like a ball.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Igneous rocks are formed from cooled lava.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Loamy soil is good for plants.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "We use rocks to make statues.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Soil has no air or water in it.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Fossils are the remains of old plants or animals.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
