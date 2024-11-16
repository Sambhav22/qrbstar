export const chapter = "Chapter -19: Times of Emergency";
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
          "question": "What is an earthquake?",
          "optionA": "A sudden shaking of the ground caused by seismic waves",
          "optionB": "A sudden burst of light in the sky",
          "optionC": "A slow movement of the earth's crust",
          "correctAnswer": "A sudden shaking of the ground caused by seismic waves"
        }),
      shuffleOptions({
          "question": "How are earthquakes measured?",
          "optionA": "On the Fujita scale",
          "optionB": "On the Richter scale",
          "optionC": "On the Beaufort scale",
          "correctAnswer": "On the Richter scale"
        }),
      shuffleOptions({
          "question": "What causes soil liquefaction during earthquakes?",
          "optionA": "Heavy rainfall",
          "optionB": "Underwater earthquakes",
          "optionC": "Vibrations from seismic waves",
          "correctAnswer": "Vibrations from seismic waves"
        }),
      shuffleOptions({
          "question": "Which natural disaster results from a failing monsoon?",
          "optionA": "Earthquake",
          "optionB": "Cyclone",
          "optionC": "Drought",
          "correctAnswer": "Drought"
        }),
      shuffleOptions({
          "question": "What is a tsunami?",
          "optionA": "A volcanic eruption",
          "optionB": "A sudden burst of light in the sky",
          "optionC": "A powerful ocean wave caused by underwater earthquakes",
          "correctAnswer": "A powerful ocean wave caused by underwater earthquakes"
        }),
      shuffleOptions({
          "question": "What type of windstorms are associated with cyclones?",
          "optionA": "Strong rotating windstorms",
          "optionB": "Gentle breezes",
          "optionC": "Straight-line winds",
          "correctAnswer": "Strong rotating windstorms"
        }),
      shuffleOptions({
          "question": "Which organization provides aid during disasters?",
          "optionA": "Police",
          "optionB": "Firefighters",
          "optionC": "Red Cross Society",
          "correctAnswer": "Red Cross Society"
        }),
      shuffleOptions({
          "question": "What is the purpose of providing first aid?",
          "optionA": "To cure the victim completely",
          "optionB": "To prevent the victim's condition from becoming worse until advanced help arrives",
          "optionC": "To ensure the victim doesn't feel pain",
          "correctAnswer": "To prevent the victim's condition from becoming worse until advanced help arrives"
        }),
      shuffleOptions({
          "question": "What should be done in case of burns?",
          "optionA": "Apply warm water",
          "optionB": "Apply cold water",
          "optionC": "Apply hot oil",
          "correctAnswer": "Apply cold water"
        }),
      shuffleOptions({
          "question": "How should a fracture be treated initially?",
          "optionA": "Apply ice",
          "optionB": "Avoid moving the fractured area and support the broken bone with a splint",
          "optionC": "Start exercising the fractured area immediately",
          "correctAnswer": "Avoid moving the fractured area and support the broken bone with a splint"
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
          "question": "Earthquake is defined as sudden shaking of the ground caused by the passage of ________ waves through earth's rocks.",
          "optionA": "Seismic",
          "optionB": "Tsunami",
          "optionC": "Volcanic",
          "correctAnswer": "Seismic"
        }),
      shuffleOptions({
          "question": "An earthquake is measured on ________ scale.",
          "optionA": "Fujita's",
          "optionB": "Richter's",
          "optionC": "Beaufort's",
          "correctAnswer": "Richter's"
        }),
      shuffleOptions({
          "question": "_______ is a natural calamity that results from failing monsoon.",
          "optionA": "Cyclone",
          "optionB": "Flood",
          "optionC": "Drought",
          "correctAnswer": "Drought"
        }),
      shuffleOptions({
          "question": "Tsunami is caused when huge waves in the ocean develop due to underwater ________.",
          "optionA": "Floods",
          "optionB": "Earthquake",
          "optionC": "Volcanic eruption",
          "correctAnswer": "Earthquake"
        }),
      shuffleOptions({
          "question": "_______ organizations provide aid and support to the affected people during disasters.",
          "optionA": "Government",
          "optionB": "Non-government",
          "optionC": "Military",
          "correctAnswer": "Non-government"
        }),
      shuffleOptions({
          "question": "First aid is the help given to an injured or sick person until the ________ arrives.",
          "optionA": "Teacher",
          "optionB": "Doctor",
          "optionC": "Ambulance",
          "correctAnswer": "Doctor"
        }),
      shuffleOptions({
          "question": "Apply as much clean and cold water as possible to the burnt part of the skin in case of ________.",
          "optionA": "Cuts",
          "optionB": "Burns",
          "optionC": "Sprain",
          "correctAnswer": "Burns"
        }),
      shuffleOptions({
          "question": "A break in the bone is called ________.",
          "optionA": "Burn",
          "optionB": "Sprain",
          "optionC": "Fracture",
          "correctAnswer": "Fracture"
        }),
      shuffleOptions({
          "question": "Avoid moving the fractured area and support the broken bone with a ________.",
          "optionA": "Bandage",
          "optionB": "Splint",
          "optionC": "Cold compress",
          "correctAnswer": "Splint"
        }),
      shuffleOptions({
          "question": "First aid should be provided to an injured person until ________ arrives.",
          "optionA": "Family",
          "optionB": "Teacher",
          "optionC": "Doctor",
          "correctAnswer": "Doctor"
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
          "question": "Manual work involves physical effort such as toil a land, carry a load with our hands.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Intellectual work relies solely on emotional skills.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "All kinds of work are equally respectable and dignified, regardless of whether they are manual or intellectual.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Down feathers help birds to keep their body cold.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Eagles and vultures have curved beaks that help them tear the flesh of small animals.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Gandhiji emphasized that no work is small or big.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "White-collar jobs typically involve manual labor.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "The dignity of work means only manual work deserves appreciation.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "First aid is the help given to an injured or sick person until the doctor arrives.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Applying hot oil is recommended for treating burns.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }
      ],
  };
}

export var activityData;
