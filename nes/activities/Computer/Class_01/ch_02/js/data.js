export const chapter = "Chapter - 2: Parts of a Computer";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "What is the main function of a monitor in a computer system?",
            options: [
              "Print documents",
              "Display work and visuals",
              "Record sound",
            ],
            answer: "Display work and visuals",
          },
          {
            question: "Which part of the computer resembles a television?",
            options: ["CPU", "Keyboard", "Monitor"],
            answer: "Monitor",
          },
          {
            question: "What is the purpose of a mouse in a computer system?",
            options: [
              "To print documents",
              "To select and point on the screen",
              "To control power supply",
            ],
            answer: "To select and point on the screen",
          },
          {
            question: "What does the keyboard primarily facilitate?",
            options: ["Listening to music", "Typing text", "Watching movies"],
            answer: "Typing text",
          },
          {
            question: "What does CPU stand for in a computer system?",
            options: [
              "Central Processing Unit",
              "Computer Power Unit",
              "Control Printing Utility",
            ],
            answer: "Central Processing Unit",
          },
          {
            question: "What is the function of a printer in a computer system?",
            options: [
              "Display visuals",
              "Record sounds",
              "Print computer output on paper",
            ],
            answer: "Print computer output on paper",
          },
          {
            question: "What purpose do speakers serve in a computer system?",
            options: [
              "To display visuals",
              "To listen to music or audio",
              "To type text",
            ],
            answer: "To listen to music or audio",
          },
          {
            question: "What is the role of a microphone in a computer system?",
            options: [
              "To control power supply",
              "To print documents",
              "To record sound into the computer",
            ],
            answer: "To record sound into the computer",
          },
          {
            question:
              "What does UPS stand for in the context of a computer system?",
            options: [
              "Uninterrupted Printing System",
              "Uninterrupted Power Supply",
              "Universal Processing System",
            ],
            answer: "Uninterrupted Power Supply",
          },
          {
            question:
              "What is the primary function of a CPU in a computer system?",
            options: [
              "Print documents",
              "Control and manage computer functions",
              "Display visuals",
            ],
            answer: "Control and manage computer functions",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        questions: [
          {
            question: "The monitor __________ like a television.",
            options: ["types", "looks", "prints"],
            answer: "looks",
          },
          {
            question:
              "A mouse is used to point or select something __________ a computer.",
            options: ["near", "on", "through"],
            answer: "on",
          },
          {
            question: "A keyboard has many buttons called __________.",
            options: ["dials", "keys", "switches"],
            answer: "keys",
          },
          {
            question: "CPU stands for Central __________ Unit.",
            options: ["Processing", "Power", "Printing"],
            answer: "Processing",
          },
          {
            question:
              "Printer helps us to print the output of computer __________ paper.",
            options: ["on", "through", "into"],
            answer: "on",
          },
          {
            question:
              "Speakers are used to listen to music that we play __________ the computer.",
            options: ["in", "with", "on"],
            answer: "in",
          },
          {
            question:
              "Microphone is used to record our voice and other sound __________ the computer.",
            options: ["under", "onto", "into"],
            answer: "into",
          },
          {
            question: "UPS stands for Uninterrupted __________ Supply.",
            options: ["Power", "Printing", "Processing"],
            answer: "Power",
          },
          {
            question:
              "A keyboard facilitates the process of writing text by pressing keys __________ the keyboard.",
            options: ["in", "onto", "on"],
            answer: "on",
          },
          {
            question:
              "CPU controls and manages the overall __________ of a computer.",
            options: ["looks", "working", "sounds"],
            answer: "working",
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
            question:
              "The monitor displays the work that we do on the computer.",
            options: ["Display work", "Do not display work"],
            answer: "Display work",
          },
          {
            question: "A mouse is primarily used for typing text.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "A keyboard consists of buttons called keys.",
            options: ["Consists of keys", "Does not consist of keys"],
            answer: "Consists of keys",
          },
          {
            question: "CPU is also known as the brain of a computer.",
            options: ["Brain of computer", "Not the brain of computer"],
            answer: "Brain of computer",
          },
          {
            question:
              "Printer helps to print the output of a computer on paper.",
            options: ["Helps in printing", "Does not help in printing"],
            answer: "Helps in printing",
          },
          {
            question:
              "Speakers are used to listen to music played on the computer.",
            options: ["Used for listening", "Not used for listening"],
            answer: "Used for listening",
          },
          {
            question: "A microphone is used to record sound into the computer.",
            options: ["Records sound", "Does not record sound"],
            answer: "Records sound",
          },
          {
            question: "UPS stands for Uninterrupted Power Supply.",
            options: ["Stands for UPS", "Does not stand for UPS"],
            answer: "Stands for UPS",
          },
          {
            question:
              "A keyboard facilitates the process of writing text by pressing keys.",
            options: ["Facilitates typing", "Does not facilitate typing"],
            answer: "Facilitates typing",
          },
          {
            question:
              "CPU controls and manages the overall working of a computer.",
            options: [
              "Controls overall working",
              "Does not control overall working",
            ],
            answer: "Controls overall working",
          },
        ],
      },
    ],
  };
}

export var activityData;
