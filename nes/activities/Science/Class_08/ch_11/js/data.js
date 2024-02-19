export const chapter = "Chapter - 11: Chemical Effects of electric Current ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is electric current?",
          optionA: "The resistance in a conductor",
          optionB: "The flow of electric charge through a conductor",
          optionC: "The voltage produced by electrical appliances",
          correctAnswer: "B",
        },
        {
          question:
            "What are materials that allow electric current to pass through them called?",
          optionA: "Insulators",
          optionB: "Conductors",
          optionC: "Semiconductors",
          correctAnswer: "B",
        },
        {
          question:
            "Which of the following is considered a good conductor of electricity?",
          optionA: "Rubber",
          optionB: "Plastic",
          optionC: "Copper",
          correctAnswer: "C",
        },
        {
          question:
            "What is used to determine whether a substance is a conductor or not?",
          optionA: "Magnet",
          optionB: "Compass",
          optionC: "Electric tester",
          correctAnswer: "C",
        },
        {
          question:
            "What term is used for the electrical conduction through liquids?",
          optionA: "Electrostatic conduction",
          optionB: "Magnetic conduction",
          optionC: "Electrolytic conduction",
          correctAnswer: "C",
        },
        {
          question:
            "How is the polarity of a battery important when using LEDs?",
          optionA: "Connect the longer lead to the negative terminal",
          optionB: "Connect the shorter lead to the positive terminal",
          optionC: "Connect the longer lead to the positive terminal",
          correctAnswer: "C",
        },
        {
          question:
            "What detects the magnetic field produced by current flowing through a wire?",
          optionA: "Electric tester",
          optionB: "Torch bulb",
          optionC: "Magnetic compass",
          correctAnswer: "C",
        },
        {
          question:
            "What is the process of depositing a layer of one metal over another by electric current called?",
          optionA: "Electrolysis",
          optionB: "Electroplating",
          optionC: "Magnetization",
          correctAnswer: "B",
        },
        {
          question:
            "Why is electroplating used on objects such as kitchen gas burners and bathroom fittings?",
          optionA: "To make them heavier",
          optionB: "To protect against corrosion",
          optionC: "To increase electrical conductivity",
          correctAnswer: "B",
        },
        {
          question:
            "What is a common environmental concern associated with electroplating industries?",
          optionA: "Increased energy consumption",
          optionB: "Noise pollution",
          optionC: "Pollution from toxic chemicals",
          correctAnswer: "C",
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
            "Electric current is the flow of electric charge through a __________.",
          optionA: "Vacuum",
          optionB: "Conductor",
          optionC: "Semiconductor",
          correctAnswer: "B",
        },
        {
          question:
            "Materials that allow electric current to pass through them are known as __________.",
          optionA: "Insulators",
          optionB: "Conductors",
          optionC: "Semiconductors",
          correctAnswer: "B",
        },
        {
          question:
            "The device used to find out whether a substance is a conductor or not is called an __________.",
          optionA: "Ammeter",
          optionB: "Voltmeter",
          optionC: "Electric tester",
          correctAnswer: "C",
        },
        {
          question:
            "Liquids that allow electric current to pass through them are called __________.",
          optionA: "Insulators",
          optionB: "Conducting liquids",
          optionC: "Non-electrolytes",
          correctAnswer: "B",
        },
        {
          question:
            "In electrolysis, the electrode connected to the positive terminal of the battery is called the __________.",
          optionA: "Cathode",
          optionB: "Anode",
          optionC: "Voltmeter",
          correctAnswer: "B",
        },
        {
          question:
            "Electroplating is the process by which a layer of one metal is deposited over another metal by the passage of __________.",
          optionA: "Heat",
          optionB: "Light",
          optionC: "Electric current",
          correctAnswer: "C",
        },
        {
          question:
            "The metal to be coated in electroplating is made the __________.",
          optionA: "Anode",
          optionB: "Cathode",
          optionC: "Voltmeter",
          correctAnswer: "B",
        },
        {
          question:
            "Electroplating is commonly used for coating metal objects to protect them against __________.",
          optionA: "Scratches",
          optionB: "Corrosion",
          optionC: "Rust",
          correctAnswer: "B",
        },
        {
          question:
            "Jewellers use electroplating to coat ornaments made of less expensive metals with __________.",
          optionA: "Aluminum",
          optionB: "Gold or silver",
          optionC: "Copper",
          correctAnswer: "B",
        },
        {
          question:
            "Electroplating causes pollution mainly because of the use of __________.",
          optionA: "Clean water",
          optionB: "Non-toxic chemicals",
          optionC: "Toxic chemicals",
          correctAnswer: "C",
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
          question: "Electric current flows through insulators.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Metals like gold, silver, and copper are poor conductors of electricity.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "An electric tester is used to determine if a substance is a conductor.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Non-electrolytes allow electric current to pass through them.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Light Emitting Diodes (LEDs) require a higher voltage for testing liquids.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "A magnetic compass is less sensitive than a torch bulb or an LED in detecting a magnetic field.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Electrolysis is the process of coating one metal over another using electric current.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Electroplating is used to protect metal objects from corrosion.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Jewellers use electroplating to make ornaments entirely of gold or silver.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Electroplating causes pollution due to the use of non-toxic chemicals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
