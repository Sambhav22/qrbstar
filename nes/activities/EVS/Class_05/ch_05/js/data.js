export const chapter = "Chapter - 5: Growing Plants";
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
            question: "What is germination?",
            options: [
              "A. The process of growing plants from seeds",
              "B. The reproduction of plants through roots",
              "C. The dispersal of seeds by wind",
            ],
            answer: "A",
          },
          {
            question: "What does a seed contain?",
            options: [
              "A. Only the outer testa",
              "B. The embryo, cotyledons, radicle, and plumule",
              "C. Only the inner tegmen",
            ],
            answer: "B",
          },
          {
            question: "What is vegetative reproduction?",
            options: [
              "A. Reproduction through seeds",
              "B. Reproduction without seeds through roots, stem, or leaf",
              "C. Dispersal of seeds by animals",
            ],
            answer: "B",
          },
          {
            question: "How are seeds dispersed by wind?",
            options: [
              "A. Heavy seeds with no wings",
              "B. Small and light seeds with wings",
              "C. Seeds carried in the beaks of birds",
            ],
            answer: "B",
          },
          {
            question: "How are seeds of lotus and water lily dispersed?",
            options: ["A. By wind", "B. By animals", "C. By water"],
            answer: "C",
          },
          {
            question:
              "What is the main agent for the dispersal of seeds in peas, beans, and poppy?",
            options: ["A. Water", "B. Wind", "C. Explosion"],
            answer: "C",
          },
          {
            question: "Who is credited with the discovery of tea?",
            options: [
              "A. The third emperor of China",
              "B. Shen Nung, the second emperor of China",
              "C. The first emperor of India",
            ],
            answer: "B",
          },
          {
            question: "Where is Assam, the birthplace of tea in India?",
            options: ["A. South India", "B. West India", "C. Northeast India"],
            answer: "C",
          },
          {
            question: "From where did coffee originate?",
            options: ["A. India", "B. Ethiopia", "C. China"],
            answer: "B",
          },
          {
            question: "Where did plum originate?",
            options: ["A. South Africa", "B. China", "C. Egypt"],
            answer: "B",
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
        fillInTheBlankQuestions: [
          {
            question:
              "Germination is the process of growing plants from ________.",
            options: ["A. Leaves", "B. Flowers", "C. Seeds"],
            answer: "C",
          },
          {
            question:
              "The seed contains the embryo, cotyledons, radicle, and ________.",
            options: ["A. Sepals", "B. Plumule", "C. Petals"],
            answer: "B",
          },
          {
            question:
              "Vegetative reproduction involves the reproduction of plants without the use of ________.",
            options: ["A. Soil", "B. Seeds", "C. Water"],
            answer: "B",
          },
          {
            question:
              "Seeds dispersed by wind often have wings, like those of the drumstick fruit, which are carried away to far-off places by ________.",
            options: ["A. Animals", "B. Water", "C. Wind"],
            answer: "C",
          },
          {
            question:
              "Plants such as lotus and water lily have seeds dispersed by ________.",
            options: ["A. Wind", "B. Animals", "C. Water"],
            answer: "C",
          },
          {
            question: "Coffee is native to ________.",
            options: ["A. India", "B. Ethiopia", "C. China"],
            answer: "B",
          },
          {
            question: "Assam is the birthplace of tea in ________.",
            options: ["A. West India", "B. South India", "C. Northeast India"],
            answer: "C",
          },
          {
            question: "Plum was first grown in ________.",
            options: ["A. China", "B. South Africa", "C. Egypt"],
            answer: "A",
          },
          {
            question:
              "Plants like sugarcane, rose, and money plant can grow from ________.",
            options: ["A. Flowers", "B. Seeds", "C. Stem cuttings"],
            answer: "C",
          },
          {
            question: "Eucalyptus originated in ________.",
            options: ["A. Australia", "B. South Africa", "C. China"],
            answer: "A",
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
        trueFalseQuestions: [
          {
            question:
              "Germination is the process of growing plants from seeds.",
            options: ["A. True", "B. False"],
            answer: "A",
          },
          {
            question:
              "Vegetative reproduction involves the reproduction of plants without the use of seeds.",
            options: ["A. True", "B. False"],
            answer: "A",
          },
          {
            question:
              "Seeds dispersed by wind often have wings, allowing them to be carried away by wind.",
            options: ["A. True", "B. False"],
            answer: "A",
          },
          {
            question: "Plum was first grown in South Africa.",
            options: ["A. True", "B. False"],
            answer: "B",
          },
          {
            question: "Assam is the birthplace of tea in West India.",
            options: ["A. True", "B. False"],
            answer: "B",
          },
          {
            question:
              "Plants like sugarcane, rose, and money plant can only grow from seeds.",
            options: ["A. True", "B. False"],
            answer: "B",
          },
          {
            question: "Coffee is native to Ethiopia.",
            options: ["A. True", "B. False"],
            answer: "A",
          },
          {
            question:
              "Plants such as lotus and water lily have seeds dispersed by water.",
            options: ["A. True", "B. False"],
            answer: "A",
          },
          {
            question: "Eucalyptus originated in Australia.",
            options: ["A. True", "B. False"],
            answer: "A",
          },
          {
            question:
              "The credit for the discovery of tea goes to the first emperor of China.",
            options: ["A. True", "B. False"],
            answer: "B",
          },
        ],
      },
    ],
  };
}

export var activityData;
