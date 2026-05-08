export const chapter = "Chapter -14: Drop of Water";
export const noOfActivities = 3

const shuffleQues = (ques) => {
  let arr = ques.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object
  const optionsArray = [optionA, optionB, optionC]

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  object.optionC = optionsArray[2]

  return object
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "What were farmers in olden times primarily dependent on as a source of water for crop production?",
          "optionA": "Rain",
          "optionB": "Rivers",
          "optionC": "Tube wells",
          "correctAnswer": "Rain"
        }),
      shuffleOptions({
          "question": "What is another name for the Denkli Persian wheel?",
          "optionA": "Paecottah",
          "optionB": "Shaduf",
          "optionC": "Tube well",
          "correctAnswer": "Paecottah"
        }),
      shuffleOptions({
          "question": "What is the primary purpose of a Persian wheel in agriculture?",
          "optionA": "To lift water from the ground",
          "optionB": "To draw water into the fields",
          "optionC": "To irrigate land using a large network of irrigation",
          "correctAnswer": "To draw water into the fields"
        }),
      shuffleOptions({
          "question": "What is the main function of tube wells in agriculture today?",
          "optionA": "To irrigate land using a large network of irrigation",
          "optionB": "To pull groundwater to ground level for field watering",
          "optionC": "To lift water from rivers for crop production",
          "correctAnswer": "To pull groundwater to ground level for field watering"
        }),
      shuffleOptions({
          "question": "What is the leading hydropower generating country among the listed options?",
          "optionA": "China",
          "optionB": "India",
          "optionC": "Russia",
          "correctAnswer": "China"
        }),
      shuffleOptions({
          "question": "What percentage of total water consumption does the industry account for worldwide?",
          "optionA": "19%",
          "optionB": "50%",
          "optionC": "75%",
          "correctAnswer": "19%"
        }),
      shuffleOptions({
          "question": "Which of the following is NOT a common use of water in domestic life?",
          "optionA": "Drinking",
          "optionB": "Washing dishes",
          "optionC": "Fuel for vehicles",
          "correctAnswer": "Fuel for vehicles"
        }),
      shuffleOptions({
          "question": "What term is used for electricity produced through water?",
          "optionA": "Hydropower",
          "optionB": "Thermal power",
          "optionC": "Solar power",
          "correctAnswer": "Hydropower"
        }),
      shuffleOptions({
          "question": "What is the major source of water in many parts of the world?",
          "optionA": "Rivers",
          "optionB": "Groundwater",
          "optionC": "Rainwater harvesting",
          "correctAnswer": "Groundwater"
        }),
      shuffleOptions({
          "question": "Which insect breeds in stagnant water and spreads diseases like malaria and dengue?",
          "optionA": "Butterfly",
          "optionB": "Mosquito",
          "optionC": "Fly",
          "correctAnswer": "Mosquito"
        }
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "Farmers in olden times were heavily dependent on _______ as a source of water for crop production.",
          "optionA": "Rain",
          "optionB": "Rivers",
          "optionC": "Tube wells",
          "correctAnswer": "Rain"
        }),
      shuffleOptions({
          "question": "Another name for the Denkli Persian wheel is _______.",
          "optionA": "Paecottah",
          "optionB": "Shaduf",
          "optionC": "Tube well",
          "correctAnswer": "Paecottah"
        }),
      shuffleOptions({
          "question": "The primary function of a Persian wheel in agriculture is to draw water _______.",
          "optionA": "From rivers",
          "optionB": "Into the fields",
          "optionC": "For drinking",
          "correctAnswer": "Into the fields"
        }),
      shuffleOptions({
          "question": "Tube wells are primarily used today to pull groundwater to ground level for _______.",
          "optionA": "Drinking",
          "optionB": "Field watering",
          "optionC": "Industrial use",
          "correctAnswer": "Field watering"
        }),
      shuffleOptions({
          "question": "Among the listed options, which country is the leading hydropower generating nation?",
          "optionA": "China",
          "optionB": "India",
          "optionC": "Russia",
          "correctAnswer": "China"
        }),
      shuffleOptions({
          "question": "What percentage of total water consumption does the industry account for worldwide?",
          "optionA": "19%",
          "optionB": "50%",
          "optionC": "75%",
          "correctAnswer": "19%"
        }),
      shuffleOptions({
          "question": "Which of the following is NOT a common use of water in domestic life?",
          "optionA": "Drinking",
          "optionB": "Washing dishes",
          "optionC": "Fuel for vehicles",
          "correctAnswer": "Fuel for vehicles"
        }),
      shuffleOptions({
          "question": "Electricity produced through water is known as _______.",
          "optionA": "Hydropower",
          "optionB": "Thermal power",
          "optionC": "Solar power",
          "correctAnswer": "Hydropower"
        }),
      shuffleOptions({
          "question": "What is the major source of water in many parts of the world?",
          "optionA": "Rivers",
          "optionB": "Groundwater",
          "optionC": "Rainwater harvesting",
          "correctAnswer": "Groundwater"
        }),
      shuffleOptions({
          "question": "Which insect breeds in stagnant water and spreads diseases like malaria and dengue?",
          "optionA": "Butterfly",
          "optionB": "Mosquito",
          "optionC": "Fly",
          "correctAnswer": "Mosquito"
        }
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "Farmers in olden times were solely dependent on rain as a source of water for crop production.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "The Denkli Persian wheel is a modern device used for lifting water.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Tube wells are primarily used today to push groundwater down for field watering.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Hydropower is electricity generated through wind energy.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "The industry accounts for approximately 50% of total water consumption worldwide.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Domestic uses of water include fueling vehicles.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Groundwater is not a major source of water in many parts of the world.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Mosquitoes breed in stagnant water and are carriers of diseases like malaria and dengue.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Water is used in industry as a raw material, coolant, solvent, and source of energy.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "In olden times, animals or humans had to draw water from the ground when modern pumps were unavailable.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }
      ],
  };
}

export var activityData;
