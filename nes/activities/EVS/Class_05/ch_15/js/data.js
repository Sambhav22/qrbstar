export const chapter = "Chapter -15: Fuels";
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
          "question": "What is the primary purpose of fossil fuels?",
          "optionA": "To generate electricity",
          "optionB": "To power vehicles",
          "optionC": "To cook food",
          "correctAnswer": "To power vehicles"
        }),
      shuffleOptions({
          "question": "Which of the following is NOT considered a fossil fuel?",
          "optionA": "Petroleum",
          "optionB": "Biomass",
          "optionC": "Coal",
          "correctAnswer": "Biomass"
        }),
      shuffleOptions({
          "question": "What is another term for petroleum?",
          "optionA": "Black gold",
          "optionB": "Liquid coal",
          "optionC": "Natural gas",
          "correctAnswer": "Black gold"
        }),
      shuffleOptions({
          "question": "Where is coal primarily found in India?",
          "optionA": "Punjab",
          "optionB": "Jharkhand",
          "optionC": "Kerala",
          "correctAnswer": "Jharkhand"
        }),
      shuffleOptions({
          "question": "What percentage of the world's total energy does natural gas contribute?",
          "optionA": "10%",
          "optionB": "23%",
          "optionC": "40%",
          "correctAnswer": "23%"
        }),
      shuffleOptions({
          "question": "Which fuel is commonly used for cooking in households?",
          "optionA": "Natural gas",
          "optionB": "Compressed Natural Gas (CNG)",
          "optionC": "Liquified Petroleum Gas (LPG)",
          "correctAnswer": "Liquified Petroleum Gas (LPG)"
        }),
      shuffleOptions({
          "question": "What is the primary advantage of fossil fuels in electricity generation?",
          "optionA": "They are renewable resources",
          "optionB": "They are cost-effective",
          "optionC": "They release no harmful emissions",
          "correctAnswer": "They are cost-effective"
        }),
      shuffleOptions({
          "question": "What is a major disadvantage of burning fossil fuels?",
          "optionA": "They release oxygen into the atmosphere",
          "optionB": "They contribute to global warming",
          "optionC": "They are easily renewable",
          "correctAnswer": "They contribute to global warming"
        }),
      shuffleOptions({
          "question": "Which renewable resource generates electricity by converting the mechanical energy from flowing water?",
          "optionA": "Biomass energy",
          "optionB": "Geothermal energy",
          "optionC": "Hydropower",
          "correctAnswer": "Hydropower"
        }),
      shuffleOptions({
          "question": "What is one recommended step to save fuel?",
          "optionA": "Increase the use of private vehicles",
          "optionB": "Reduce carpooling",
          "optionC": "Turn off car engines at red lights",
          "correctAnswer": "Turn off car engines at red lights"
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
            "question": "Petroleum is also known as _______.",
            "optionA": "Liquid Gold",
            "optionB": "Black Gold",
            "optionC": "Golden Fuel",
            "correctAnswer": "B) Black Gold"
        }),
      shuffleOptions({
            "question": "Diesel is commonly used to fuel _______.",
            "optionA": "Two-wheelers",
            "optionB": "Heavy vehicles",
            "optionC": "Aeroplanes",
            "correctAnswer": "B) Heavy vehicles"
        }),
      shuffleOptions({
            "question": "Coal is primarily used for _______.",
            "optionA": "Cooking",
            "optionB": "Generating electricity",
            "optionC": "Running cars",
            "correctAnswer": "B) Generating electricity"
        }),
      shuffleOptions({
            "question": "Natural gas is found _______.",
            "optionA": "Below petroleum deposits",
            "optionB": "In coal beds",
            "optionC": "Above petroleum deposits",
            "correctAnswer": "C) Above petroleum deposits"
        }),
      shuffleOptions({
            "question": "Liquified Petroleum Gas (LPG) is commonly used for _______.",
            "optionA": "Running cars",
            "optionB": "Cooking",
            "optionC": "Generating electricity",
            "correctAnswer": "B) Cooking"
        }),
      shuffleOptions({
            "question": "Compressed Natural Gas (CNG) is preferred for running vehicles due to its _______.",
            "optionA": "High cost",
            "optionB": "Environmental friendliness",
            "optionC": "Low availability",
            "correctAnswer": "B) Environmental friendliness"
        }),
      shuffleOptions({
            "question": "Fossil fuels are considered non-renewable because _______.",
            "optionA": "They can be replaced easily",
            "optionB": "They deplete at faster rates",
            "optionC": "They are formed quickly",
            "correctAnswer": "B) They deplete at faster rates"
        }),
      shuffleOptions({
            "question": "Biomass energy is derived from _______.",
            "optionA": "Wind",
            "optionB": "Organic material",
            "optionC": "Geothermal sources",
            "correctAnswer": "B) Organic material"
        }),
      shuffleOptions({
            "question": "Hydropower generates electricity from _______.",
            "optionA": "Flowing water",
            "optionB": "Sunlight",
            "optionC": "Biomass",
            "correctAnswer": "A) Flowing water"
        }),
      shuffleOptions({
            "question": "To save fuel, one can _______ at red lights.",
            "optionA": "Turn on the engine",
            "optionB": "Put off the engine",
            "optionC": "Increase speed",
            "correctAnswer": "B) Put off the engine"
        }
    ]
    
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "Petroleum is known as black gold and is primarily used to run cars and two-wheelers.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Coal is primarily used for cooking and heating purposes.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Natural gas is lighter than oil and is commonly found below the layers of petroleum deposits.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Liquified Petroleum Gas (LPG) is primarily used for industrial purposes.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Compressed Natural Gas (CNG) is used to control air pollution and is more expensive than petrol or diesel.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Fossil fuels can be easily replaced once they are used up.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Biomass energy includes organic material from plants or animals and can release heat energy when burned.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Hydropower generates electricity by converting the mechanical energy from flowing water.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Wind energy is generated by converting solar energy into electricity.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "One of the steps to save fuel is to get the pollution level of your vehicle checked at regular intervals.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }
      ],
  };
}

export var activityData;
