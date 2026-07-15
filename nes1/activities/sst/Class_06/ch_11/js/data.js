export const chapter = "Chapter - 11: Living Longer and Healthier Lives ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the normal body temperature in degrees Fahrenheit?",
        optionA: "37°C",
        optionB: "98.4°F",
        optionC: "100°F",
        correctAnswer: "B) 98.4°F",
      },
      {
        question: "Who invented the clinical thermometer?",
        optionA: "Gabriel Daniel Fahrenheit",
        optionB: "Wilhelm Roentgen",
        optionC: "Rene Laennec",
        correctAnswer: "A) Gabriel Daniel Fahrenheit",
      },
      {
        question:
          "What instrument helps doctors listen to the sound of a patient's heart and breathing?",
        optionA: "Clinical thermometer",
        optionB: "Stethoscope",
        optionC: "Microscope",
        correctAnswer: "B) Stethoscope",
      },
      {
        question: "How did the invention of the stethoscope come about?",
        optionA: "By experimenting with electricity",
        optionB: "By observing children playing with a hollow log",
        optionC: "By mixing chemicals in a laboratory",
        correctAnswer: "B) By observing children playing with a hollow log",
      },
      {
        question:
          "What device magnifies tiny objects and makes them appear larger?",
        optionA: "Stethoscope",
        optionB: "Clinical thermometer",
        optionC: "Microscope",
        correctAnswer: "C) Microscope",
      },
      {
        question:
          "What did Wilhelm Roentgen discover that led to the invention of the X-ray machine?",
        optionA: "The behavior of chemicals in glass tubes",
        optionB: "The principles of magnification",
        optionC: "The importance of anesthesia",
        correctAnswer: "A) The behavior of chemicals in glass tubes",
      },
      {
        question:
          "Which medical imaging technique shows more details than an X-ray report?",
        optionA: "Ultrasound",
        optionB: "Clinical thermometer",
        optionC: "Stethoscope",
        correctAnswer: "A) Ultrasound",
      },
      {
        question: "What is used to make a patient unconscious before surgery?",
        optionA: "Antibiotics",
        optionB: "Anesthesia",
        optionC: "Vaccines",
        correctAnswer: "B) Anesthesia",
      },
      {
        question: "Who discovered the vaccine for smallpox?",
        optionA: "Alexander Fleming",
        optionB: "Louis Pasteur",
        optionC: "Edward Jenner",
        correctAnswer: "C) Edward Jenner",
      },
      {
        question:
          "What technique preserves milk by killing germs through heat?",
        optionA: "Sterilization",
        optionB: "Pastoralization",
        optionC: "Antiseptics",
        correctAnswer: "B) Pastoralization",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question:
          "The clinical thermometer was invented by Gabriel Daniel Fahrenheit in ______.",
        options: ["1714", "1816", "1895"],
        correctAnswer: "1714",
      },
      {
        question:
          "The stethoscope was invented by a French scientist named ______ in 1816.",
        options: [
          "Gabriel Daniel Fahrenheit",
          "Wilhelm Roentgen",
          "Rene Laennec",
        ],
        correctAnswer: "Rene Laennec",
      },
      {
        question:
          "A microscope magnifies tiny objects and makes them look much larger, helping scientists see things that are too small to see with the naked eye. This invention contributed to the development of ______.",
        options: ["Antibiotics", "Surgery", "Medicine"],
        correctAnswer: "Surgery",
      },
      {
        question: "X-ray machines were invented by Wilhelm Roentgen in ______.",
        options: ["1714", "1816", "1895"],
        correctAnswer: "1895",
      },
      {
        question:
          "Different types of scanners, including ultrasound, CT scan, and MRI, allow doctors to see images of bones and internal organs to find out the ______ the patient is suffering from.",
        options: ["Disease", "Temperature", "Intensity"],
        correctAnswer: "Disease",
      },
      {
        question:
          "Surgery was made less painful by administering ______ to make the patient unconscious before an operation.",
        options: ["Antibiotics", "Anesthesia", "Vaccines"],
        correctAnswer: "Anesthesia",
      },
      {
        question:
          "The first vaccine discovered was against the disease ______.",
        options: ["Tuberculosis", "Smallpox", "Polio"],
        correctAnswer: "Smallpox",
      },
      {
        question:
          "Louis Pasteur showed that heat kills germs, a process called ______, which is used to preserve packaged milk.",
        options: ["Sterilization", "Pastoralization", "Antiseptics"],
        correctAnswer: "Pastoralization",
      },
      {
        question:
          "Antiseptics, such as carbolic acid (phenol), were introduced by Joseph Lister to prevent infections in wounds and promote ______.",
        options: [
          "Clean and sterile surgery",
          "Infection-free blood",
          "Germ resistance",
        ],
        correctAnswer: "Clean and sterile surgery",
      },
      {
        question:
          "To maintain good health, it is essential to eat good nutritious food that provides the body with all the necessary nutrients, keep the surroundings clean, exercise regularly, and seek medical attention when feeling unwell. These are simple rules for ______.",
        options: [
          "Improved hygiene",
          "Maintaining temperature",
          "Keeping healthy",
        ],
        correctAnswer: "Keeping healthy",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question:
          "Minerals are naturally occurring substances in the earth's crust.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Metals are typically soft materials.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Iron is mainly used to make aircraft bodies.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Coal is a major source of energy and is also known as 'black gold.'",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Petroleum is a liquid extracted from deep wells in the earth.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Mica is primarily found in Rajasthan.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Mineral resources take a short time to form.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Renewable sources of energy are environment-friendly and do not cause pollution.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "In coastal areas, people typically wear thick woolen clothes.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Gold is found in abundance in India.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
