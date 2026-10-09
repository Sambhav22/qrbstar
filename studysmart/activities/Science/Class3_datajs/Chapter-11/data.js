export const chapter = "Chapter - 11: Measurement";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which unit is used to measure weight?",
        "optionA": "Centimetres",
        "optionB": "Grams",
        "correctAnswer": "Grams",
        "optionC": "Litres"
      },
      {
        "question": "Which tool is used to measure temperature?",
        "optionA": "Clock",
        "optionB": "Thermometer",
        "correctAnswer": "Thermometer",
        "optionC": "Ruler"
      },
      {
        "question": "A bottle of juice is measured in:",
        "optionA": "Kilograms",
        "optionB": "Litres",
        "correctAnswer": "Litres",
        "optionC": "Metres"
      },
      {
        "question": "What do we use to measure length?",
        "optionA": "Ruler",
        "correctAnswer": "Ruler",
        "optionB": "Thermometer",
        "optionC": "Clock"
      },
      {
        "question": "How is rainfall measured?",
        "optionA": "In grams",
        "optionB": "In litres",
        "optionC": "In millimetres",
        "correctAnswer": "In millimetres"
      },
      {
        "question": "Who uses a weighing machine?",
        "optionA": "Shopkeeper",
        "correctAnswer": "Shopkeeper",
        "optionB": "Doctor",
        "optionC": "Tailor"
      },
      {
        "question": "A pencil is best weighed in:",
        "optionA": "Kilograms",
        "optionB": "Litres",
        "optionC": "Grams",
        "correctAnswer": "Grams"
      },
      {
        "question": "Which of these shows how hot or cold something is?",
        "optionA": "Capacity",
        "optionB": "Time",
        "optionC": "Temperature",
        "correctAnswer": "Temperature"
      },
      {
        "question": "What helps us plan our day?",
        "optionA": "Weight",
        "optionB": "Time",
        "correctAnswer": "Time",
        "optionC": "Length"
      },
      {
        "question": "How do we measure time?",
        "optionA": "Using a tape",
        "optionB": "Using a clock",
        "correctAnswer": "Using a clock",
        "optionC": "Using a balance"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The __________ tells us how hot or cold something is.",
        "optionA": "Thermometer",
        "correctAnswer": "Thermometer",
        "optionB": "Ruler",
        "optionC": "Clock"
      },
      {
        "question": "Milk is measured in __________.",
        "optionA": "Metres",
        "optionB": "Litres",
        "correctAnswer": "Litres",
        "optionC": "Kilograms"
      },
      {
        "question": "A __________ is used to measure rainfall.",
        "optionA": "Thermometer",
        "optionB": "Clock",
        "optionC": "Rain gauge",
        "correctAnswer": "Rain gauge"
      },
      {
        "question": "Fruits and vegetables are measured using a __________.",
        "optionA": "Thermometer",
        "optionB": "Weighing machine",
        "correctAnswer": "Weighing machine",
        "optionC": "Measuring tape"
      },
      {
        "question": "__________ helps us measure how long or tall something is.",
        "optionA": "Length",
        "correctAnswer": "Length",
        "optionB": "Weight",
        "optionC": "Capacity"
      },
      {
        "question": "We use a __________ to check if we have a fever.",
        "optionA": "Watch",
        "optionB": "Thermometer",
        "correctAnswer": "Thermometer",
        "optionC": "Ruler"
      },
      {
        "question": "We use __________ to measure the volume of liquids.",
        "optionA": "Capacity",
        "correctAnswer": "Capacity",
        "optionB": "Weight",
        "optionC": "Temperature"
      },
      {
        "question": "Light things are measured in __________.",
        "optionA": "Kilograms",
        "optionB": "Grams",
        "correctAnswer": "Grams",
        "optionC": "Millilitres"
      },
      {
        "question": "The unit for measuring temperature is __________.",
        "optionA": "Millimetres",
        "optionB": "Degrees Celsius",
        "correctAnswer": "Degrees Celsius",
        "optionC": "Grams"
      },
      {
        "question": "A measuring tape or ruler is used by a __________.",
        "optionA": "Doctor",
        "optionB": "Tailor",
        "correctAnswer": "Tailor",
        "optionC": "Shopkeeper"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Weight tells us how long something is.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Rain is measured using a rain gauge.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A thermometer helps to measure weight.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Time is measured in litres and millilitres.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Kilometres and centimetres are units of length.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Measuring things helps avoid confusion.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "We use clocks and watches to know the weight of objects.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Shopkeepers use weighing machines to measure rice and vegetables.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Tailors use clocks to measure the size of cloth.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Rainfall is measured in degrees Celsius.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
