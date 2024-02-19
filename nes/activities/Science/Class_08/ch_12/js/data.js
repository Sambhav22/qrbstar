export const chapter = "Chapter - 12: Some Natural Phenomena ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the central part of an atom called?",
          optionA: "Nucleus",
          optionB: "Electrons",
          optionC: "Protons",
          correctAnswer: "A",
        },
        {
          question:
            "Which subatomic particles are present inside the nucleus of an atom?",
          optionA: "Electrons and protons",
          optionB: "Neutrons and electrons",
          optionC: "Protons and neutrons",
          correctAnswer: "C",
        },
        {
          question: "What charge do electrons carry?",
          optionA: "Positive",
          optionB: "Negative",
          optionC: "No charge",
          correctAnswer: "B",
        },
        {
          question:
            "What is the process of transferring electrons between two materials called?",
          optionA: "Conduction",
          optionB: "Induction",
          optionC: "Friction",
          correctAnswer: "C",
        },
        {
          question:
            "According to the properties of charge, what happens when like charges are brought close?",
          optionA: "They attract each other",
          optionB: "They repel each other",
          optionC: "No effect",
          correctAnswer: "B",
        },
        {
          question: "What is the purpose of an electroscope?",
          optionA: "To generate electricity",
          optionB: "To detect electric charge",
          optionC: "To store charge",
          correctAnswer: "B",
        },
        {
          question:
            "How is charging by conduction different from charging by induction?",
          optionA: "Charging by conduction involves rubbing objects",
          optionB: "Charging by induction occurs without direct contact",
          optionC: "Both involve rubbing objects",
          correctAnswer: "B",
        },
        {
          question: "What causes lightning to occur?",
          optionA: "Movement of electrons",
          optionB: "Rubbing of materials",
          optionC: "Accumulation of charges in thunder clouds",
          correctAnswer: "C",
        },
        {
          question: "What does a lightning conductor do to protect buildings?",
          optionA: "Attracts lightning",
          optionB: "Absorbs lightning",
          optionC: "Provides a path for charge transfer to the ground",
          correctAnswer: "C",
        },
        {
          question:
            "What is the instrument used to measure seismic waves during an earthquake?",
          optionA: "Electroscope",
          optionB: "Seismograph",
          optionC: "Lightning rod",
          correctAnswer: "B",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      [
        {
          question:
            "All substances are made up of atoms which have a central part called __________.",
          optionA: "Neutrons",
          optionB: "Electrons",
          optionC: "Nucleus",
          correctAnswer: "Nucleus",
        },
        {
          question:
            "In an atom, when electrons lose some charge, the atom becomes __________ charged.",
          optionA: "Negatively",
          optionB: "Positively",
          optionC: "Neutrally",
          correctAnswer: "Positively",
        },
        {
          question:
            "Charging by friction involves the transfer of electrons when two materials are __________ together.",
          optionA: "Heated",
          optionB: "Rubbed",
          optionC: "Compressed",
          correctAnswer: "Rubbed",
        },
        {
          question:
            "A device used to check whether a body is charged or not is called an __________.",
          optionA: "Electromagnet",
          optionB: "Electroscope",
          optionC: "Electromotor",
          correctAnswer: "Electroscope",
        },
        {
          question:
            "The process of transferring charge from a charged object to the earth is known as __________.",
          optionA: "Charging",
          optionB: "Discharging",
          optionC: "Earthing",
          correctAnswer: "Earthing",
        },
        {
          question:
            "Lightning is a giant electrical spark that occurs between clouds or between a cloud and the __________.",
          optionA: "Ocean",
          optionB: "Ground",
          optionC: "Mountain",
          correctAnswer: "Ground",
        },
        {
          question:
            "Benjamin Franklin invented the __________ to protect buildings from lightning.",
          optionA: "Lightning Rod",
          optionB: "Electroscope",
          optionC: "Lightning Conductor",
          correctAnswer: "Lightning Rod",
        },
        {
          question:
            "During an earthquake, the point where the earthquake originates is called the __________.",
          optionA: "Epicentre",
          optionB: "Focus",
          optionC: "Crust",
          correctAnswer: "Focus",
        },
        {
          question:
            "Seismic waves produced during an earthquake are measured with the help of an instrument called a __________.",
          optionA: "Thermometer",
          optionB: "Seismograph",
          optionC: "Barometer",
          correctAnswer: "Seismograph",
        },
        {
          question:
            "The magnitude or intensity of an earthquake is measured by the __________ scale.",
          optionA: "Newton",
          optionB: "Richter",
          optionC: "Celsius",
          correctAnswer: "Richter",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "Atoms are composed of a central part called nucleus, which contains electrons, protons, and neutrons.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "When an electrically neutral atom gains electrons, it becomes positively charged.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Charging by friction involves the transfer of electrons when two materials are rubbed together.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "An electroscope is a device that generates electricity.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Lightning occurs between clouds or between a cloud and the ocean.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The purpose of a lightning rod is to attract lightning.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "During an earthquake, the point on the surface above the focus is called the epicentre.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Seismic waves produced during an earthquake are measured using an instrument called a barometer.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The magnitude of an earthquake is measured on the Celsius scale.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Benjamin Franklin invented the lightning rod to attract lightning and protect buildings.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
