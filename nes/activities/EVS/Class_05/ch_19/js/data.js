export const chapter = "Chapter - 19: Times of Emergency";
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
}


if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What causes an earthquake?",
            options: [
              "Heavy rainfall",
              "Seismic waves through earth's rocks",
              "Failing monsoon",
            ],
            answer: "Seismic waves through earth's rocks",
          },
          {
            question:
              "How is the strength or magnitude of an earthquake measured?",
            options: ["Flood scale", "Tsunami scale", "Richter scale"],
            answer: "Richter scale",
          },
          {
            question: "What can earthquakes lead to?",
            options: ["Famine", "Soil liquefaction", "Cyclones"],
            answer: "Soil liquefaction",
          },
          {
            question:
              "Which natural disaster is caused by a multiday cloud burst and is considered the most devastating in India in 2013?",
            options: ["Drought", "Earthquake", "Flood"],
            answer: "Flood",
          },
          {
            question: "What causes a drought?",
            options: [
              "Heavy rainfall",
              "Failing monsoon",
              "Underwater earthquake",
            ],
            answer: "Failing monsoon",
          },
          {
            question: "What is a cyclone defined as?",
            options: [
              "Strong rotating windstorms",
              "Sudden shaking of the ground",
              "Break in the bone",
            ],
            answer: "Strong rotating windstorms",
          },
          {
            question: "How is a tsunami caused?",
            options: [
              "Failing monsoon",
              "Heavy rainfall",
              "Underwater earthquake",
            ],
            answer: "Underwater earthquake",
          },
          {
            question:
              "What is the purpose of first aid in the context of the text?",
            options: [
              "Cure diseases",
              "Prevent the victim's condition from worsening",
              "Provide long-term medical treatment",
            ],
            answer: "Prevent the victim's condition from worsening",
          },
          {
            question:
              "What should one do in the case of a burn according to the text?",
            options: [
              "Apply a burn cream without water",
              "Keep the burnt part dry",
              "Apply clean and cold water for 15 minutes",
            ],
            answer: "Apply clean and cold water for 15 minutes",
          },
          {
            question: "How should a fracture be handled according to the text?",
            options: [
              "Avoid moving the fractured area and use a splint",
              "Apply ice on the affected area",
              "Keep flowing cool water over it",
            ],
            answer: "Avoid moving the fractured area and use a splint",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        questions: [
          {
            question:
              "Earthquake is defined as sudden shaking of the ground caused by the passage of _______ through earth's rocks.",
            options: ["Heavy rainfall", "Seismic waves", "Volcanic eruptions"],
            answer: "Seismic waves",
          },
          {
            question:
              "The strength or magnitude of an earthquake is measured using ________ scale.",
            options: ["Flood", "Richter's", "Tsunami"],
            answer: "Richter's",
          },
          {
            question:
              "Effects of an earthquake are terrible and devastating, causing destruction to many buildings, towns, cities, etc. It also affects the ________ health of people.",
            options: ["Physical", "Mental and emotional", "Environmental"],
            answer: "Mental and emotional",
          },
          {
            question:
              "Flood is a natural disaster that causes damage to life and property, often resulting from heavy rainfall that increases the river water level. The 2013 devastating floods in Uttarakhand were caused by a multiday cloud burst centered on the North Indian state of ________.",
            options: ["Maharashtra", "Uttar Pradesh", "Uttarakhand"],
            answer: "Uttarakhand",
          },
          {
            question:
              "Drought is a natural calamity resulting from a failing ________. It leads to a shortage of water, making crops unable to grow and causing widespread famine.",
            options: ["Earthquake", "Cyclone", "Monsoon"],
            answer: "Monsoon",
          },
          {
            question:
              "A cyclone is defined as strong rotating windstorms associated with light rains, high tides, or floods. Coastal areas are more prone to cyclones, causing heavy loss to human life and ________.",
            options: ["Infrastructure", "Livestock", "Crops"],
            answer: "Livestock",
          },
          {
            question:
              "Tsunami is caused when huge waves in the ocean develop due to an ________ earthquake.",
            options: ["Underwater", "Onshore", "Aerial"],
            answer: "Underwater",
          },
          {
            question:
              "A volcanic eruption occurs through a fissure or vent in the earth, resulting in the flow of lava, rocks, steam, and gases. This eruption can cause large-scale ________.",
            options: ["Drought", "Flooding", "Destruction"],
            answer: "Destruction",
          },
          {
            question:
              "First aid is the help given to an injured or sick person until the doctor arrives. Timely first aid can prevent the victim's condition from becoming worse and can even ________.",
            options: [
              "Cure the illness",
              "Save the life",
              "Provide long-term relief",
            ],
            answer: "Save the life",
          },
          {
            question:
              "In the case of a burn, it is recommended to apply as much clean and cold water as possible to the burnt part of the skin and keep flowing cool water over it for ________ minutes.",
            options: ["5", "15", "30"],
            answer: "15",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        questions: [
          {
            question: "Earthquake magnitude is measured on the Richter scale.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Floods in Uttarakhand in 2013 were caused by a cyclone.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Drought is a natural disaster resulting from excessive rainfall.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Cyclones are more prone to occur in inland areas.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Tsunamis can be caused by underwater earthquakes.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Volcanic eruptions release steam, rocks, and gases.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "First aid is the final medical treatment given to an injured person.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Applying cold water is recommended for burns, regardless of the severity.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "A fracture should be supported with a splint to prevent movement.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "NGOs like CRY, Red Cross Society, and VIDE provide aid during disasters.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
