export const chapter = "Chapter - 21: Monuments and Buildings";
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
            question:
              "Who is credited with building the Sanchi Stupa at Sanchi?",
            options: ["Chandala kings", "Ashoka the Great", "Rajaraja"],
            answer: "Ashoka the Great",
          },
          {
            question:
              "Which metal pillar, built by early Gupta kings, is known for not rusting even after a long period?",
            options: [
              "Lingaraja Temple",
              "Iron Pillar at New Delhi",
              "Brihadiswara Temple",
            ],
            answer: "Iron Pillar at New Delhi",
          },
          {
            question:
              "The Lingaraja Temple at Bhubaneswar was built by which kings?",
            options: ["Chola kings", "Pallava kings", "Chandala kings"],
            answer: "Chandala kings",
          },
          {
            question: "What is the Brihadiswara Temple known for?",
            options: ["Annual Rath Yatra", "Exquisite art", "Fourteen storeys"],
            answer: "Exquisite art",
          },
          {
            question:
              "Which Mughal emperor built the Taj Mahal in memory of his wife, Mumtaz Mahal?",
            options: ["Akbar the Great", "Shah Jahan", "Sher Shah"],
            answer: "Shah Jahan",
          },
          {
            question:
              "Sher Shah's Mausoleum at Sasaram is a marvel of which architecture?",
            options: [
              "Indo-Muslim architecture",
              "Chola architecture",
              "Gupta architecture",
            ],
            answer: "Indo-Muslim architecture",
          },
          {
            question:
              "Jodha Bai's Palace at Fatehpur Sikri was built by which Mughal emperor?",
            options: ["Akbar the Great", "Shah Jahan", "Aurangzeb"],
            answer: "Akbar the Great",
          },
          {
            question:
              "Who initiated the construction of Qutub Minar, and who completed it?",
            options: [
              "Shah Jahan initiated, Akbar completed",
              "Qutub-ud-Din Aibak initiated, Iltutmish completed",
              "Akbar initiated, Sher Shah completed",
            ],
            answer: "Qutub-ud-Din Aibak initiated, Iltutmish completed",
          },
          {
            question:
              "Which astronomical observatory was built by Raja Jai Singh of Amber in five different places, including Delhi and Jaipur?",
            options: ["Jantar Mantar", "Qutub Minar", "Lotus Temple"],
            answer: "Jantar Mantar",
          },
          {
            question:
              "The Golden Temple, a holy pilgrimage for Sikhs, was built by which Guru?",
            options: ["Guru Ramdas", "Guru Nanak", "Guru Gobind Singh"],
            answer: "Guru Ramdas",
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
            question: "Sanchi Stupa is credited to ________.",
            options: ["Ashoka the Great", "Rajaraja", "Chandala kings"],
            answer: "Ashoka the Great",
          },
          {
            question:
              "The Iron Pillar at New Delhi was built by early ________ kings.",
            options: ["Chandala", "Gupta", "Pallava"],
            answer: "Gupta",
          },
          {
            question:
              "The Lingaraja Temple at Bhubaneswar was built by ________ kings.",
            options: ["Chola", "Pallava", "Chandala"],
            answer: "Chandala",
          },
          {
            question:
              "The Brihadiswara Temple was built by the ________ king, Rajaraja.",
            options: ["Chola", "Gupta", "Pallava"],
            answer: "Chola",
          },
          {
            question:
              "The Taj Mahal was built with white marbles by Mughal emperor ________ in memory of his wife, Mumtaz Mahal.",
            options: ["Akbar the Great", "Shah Jahan", "Sher Shah"],
            answer: "Shah Jahan",
          },
          {
            question:
              "Sher Shah's Mausoleum at Sasaram is a marvel of ________ architecture.",
            options: ["Indo-Muslim", "Chola", "Gupta"],
            answer: "Indo-Muslim",
          },
          {
            question:
              "Jodha Bai's Palace at Fatehpur Sikri was built by Mughal emperor ________.",
            options: ["Akbar the Great", "Shah Jahan", "Aurangzeb"],
            answer: "Akbar the Great",
          },
          {
            question:
              "The construction of Qutub Minar was started by Qutub-ud-Din Aibak in ________, near the famous Iron Pillar.",
            options: ["1200", "1210", "1220"],
            answer: "1210",
          },
          {
            question:
              "The Red Fort, also called Lal Quila, was built about ________ years ago by Mughal emperor Shah Jahan.",
            options: ["300", "330", "360"],
            answer: "360",
          },
          {
            question:
              "The Golden Temple, the holy pilgrimage of the Sikhs, was built by Guru ________.",
            options: ["Ramdas", "Nanak", "Gobind Singh"],
            answer: "Ramdas",
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
              "The Lingaraja Temple at Bhubaneswar was built by Chola kings.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The Iron Pillar at New Delhi was built by Pallava kings.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The Brihadiswara Temple consists of fourteen storeys and rises to a height of 190 feet.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Jodha Bai's Palace at Fatehpur Sikri was built by Shah Jahan.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The Qutub Minar was completed by Akbar after being initiated by Qutub-ud-Din Aibak.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The Red Fort in New Delhi was built by Sher Shah.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The Lotus Temple at New Delhi was built by the followers of the Bahai sect.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "The Gateway of India in Mumbai was built to welcome Queen Elizabeth II on her visit to India.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Rashtrapati Bhavan in New Delhi was built by Edwin Lutyens during the British rule.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "The Akshardham Temple in New Delhi was constructed by the BAPS foundation.",
            options: ["True", "False"],
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
