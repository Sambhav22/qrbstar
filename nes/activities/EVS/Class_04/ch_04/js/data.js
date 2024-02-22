export const chapter = "Chapter - 4: Smart Senses";
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
            question: "What is the primary function of the eye?",
            options: ["Smelling", "Seeing", "Hearing"],
            answer: "Seeing",
          },
          {
            question: "Which organ is responsible for the sense of smell?",
            options: ["Eye", "Nose", "Tongue"],
            answer: "Nose",
          },
          {
            question: "Which sense organ is known as the fastest sense?",
            options: ["Tongue", "Ear", "Skin"],
            answer: "Ear",
          },
          {
            question:
              "What is the role of taste buds in the perception of taste?",
            options: [
              "Detecting light",
              "Detecting vibrations",
              "Reacting chemically with substances in the mouth",
            ],
            answer: "Reacting chemically with substances in the mouth",
          },
          {
            question: "How does the sense of touch work?",
            options: [
              "Receptors in the skin pick up signals from the environment",
              "Ears detect vibrations and sounds",
              "Eyes detect light and send signals to the brain",
            ],
            answer:
              "Receptors in the skin pick up signals from the environment",
          },
          {
            question:
              "What are the four basic sensations felt through the sense of touch?",
            options: [
              "Sweet, bitter, sour, salty",
              "Cold, hot, pressure, pain",
              "Vision, hearing, taste, smell",
            ],
            answer: "Cold, hot, pressure, pain",
          },
          {
            question: "Which layer of the skin acts as a protective barrier?",
            options: ["Dermis", "Epidermis", "Subcutis"],
            answer: "Epidermis",
          },
          {
            question: "What distinguishes good touches from bad touches?",
            options: [
              "Location on the body",
              "Feelings of pain or pleasure",
              "Frequency of occurrence",
            ],
            answer: "Feelings of pain or pleasure",
          },
          {
            question:
              "What helps differently-abled people who are unable to see to understand and learn concepts?",
            options: ["Hearing", "Touch", "Smell"],
            answer: "Touch",
          },
          {
            question:
              "According to the text, what is a fact about an ant's sense of smell?",
            options: [
              "It is better than humans.",
              "It is as good as a dog's.",
              "It is not well-developed.",
            ],
            answer: "It is as good as a dog's.",
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
        fill_in_the_blank_questions: [
          {
            question:
              "Our ____________ help us to know the world around us. These work smartly.",
            options: ["Muscles", "Sense organs", "Bones"],
            answer: "Sense organs",
          },
          {
            question:
              "The organ responsible for the sense of ____________ is the nose.",
            options: ["Sight", "Taste", "Smell"],
            answer: "Smell",
          },
          {
            question:
              "Through auditory perception, our ears detect ____________ and sounds.",
            options: ["Vibrations", "Light", "Pressure"],
            answer: "Vibrations",
          },
          {
            question:
              "Taste is the perception produced when a substance reacts chemically with taste receptor cells located on ____________.",
            options: ["Skin", "Tongue", "Ear"],
            answer: "Tongue",
          },
          {
            question:
              "The sense of touch includes four basic sensations: cold, hot, pressure, and ____________.",
            options: ["Light", "Pain", "Sound"],
            answer: "Pain",
          },
          {
            question:
              "The ____________ layer of the skin acts as a protective barrier.",
            options: ["Dermis", "Epidermis", "Subcutis"],
            answer: "Epidermis",
          },
          {
            question:
              "Good touches are those that make us feel ____________, loved, and cared.",
            options: ["Sad", "Angry", "Good"],
            answer: "Good",
          },
          {
            question:
              "Receptors present in our nose help us to sense ____________.",
            options: ["Light", "Sound", "Smell"],
            answer: "Smell",
          },
          {
            question:
              "Differently-abled people, if they lose one sense, may develop extra talent, such as reading through ____________.",
            options: ["Vision", "Braille", "Touch"],
            answer: "Braille",
          },
          {
            question:
              "According to the text, an ant's sense of smell is as good as a ____________.",
            options: ["Human's", "Cat's", "Dog's"],
            answer: "Dog's",
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
        true_or_false_questions: [
          {
            question:
              "Humans have six sense organs - taste, smell, feel, vision, hear, and touch.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The organ of vision is the ear.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The sense of touch includes sensations such as cold, hot, pressure, and pain.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "The primary function of the skin is to detect light.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Good touches are those that hurt our feelings and cause pain.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Receptors in the nose help us sense smell.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Differently-abled people may develop extra talents if they lose one sense.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "An ant's sense of smell is better than a human's.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The sense of taste is primarily detected by the ears.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The epidermis is the outermost layer of the skin.",
            options: ["True", "False"],
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
