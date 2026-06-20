export const chapter = "Chapter -8: Smart Senses";
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
            "question": "Which of the following is not a sense organ?",
            "optionA": "Liver",
            "optionB": "Eye",
            "optionC": "Nose",
            "correctAnswer": "Liver"
        }),
      shuffleOptions({
            "question": "Which sense organ is responsible for detecting light and enabling vision?",
            "optionA": "Ear",
            "optionB": "Eye",
            "optionC": "Tongue",
            "correctAnswer": "Eye"
        }),
      shuffleOptions({
            "question": "Which sense organ is responsible for the sense of smell?",
            "optionA": "Tongue",
            "optionB": "Nose",
            "optionC": "Ear",
            "correctAnswer": "Nose"
        }),
      shuffleOptions({
            "question": "What is the function of the optic nerve?",
            "optionA": "Detect vibrations",
            "optionB": "Detect light and send signals to the brain",
            "optionC": "Detect taste",
            "correctAnswer": "Detect light and send signals to the brain"
        }),
      shuffleOptions({
            "question": "Which sense organ is responsible for the perception of taste?",
            "optionA": "Nose",
            "optionB": "Ear",
            "optionC": "Tongue",
            "correctAnswer": "Tongue"
        }),
      shuffleOptions({
            "question": "Which sense is known as the fastest sense?",
            "optionA": "Taste",
            "optionB": "Smell",
            "optionC": "Hearing",
            "correctAnswer": "Hearing"
        }),
      shuffleOptions({
            "question": "What is the function of the receptors in our skin?",
            "optionA": "Detect pressure",
            "optionB": "Detect taste",
            "optionC": "Detect light",
            "correctAnswer": "Detect pressure"
        }),
      shuffleOptions({
            "question": "What is an example of a good touch?",
            "optionA": "Pinching",
            "optionB": "Hugging",
            "optionC": "Hurting",
            "correctAnswer": "Hugging"
        }),
      shuffleOptions({
            "question": "Which sense organ helps us to sense what we are smelling?",
            "optionA": "Eye",
            "optionB": "Ear",
            "optionC": "Nose",
            "correctAnswer": "Nose"
        }),
      shuffleOptions({
            "question": "What method do blind individuals use to read and interpret the meaning of text?",
            "optionA": "Visual observation",
            "optionB": "Auditory perception",
            "optionC": "Braille",
            "correctAnswer": "Braille"
            }
          ],
        ],
      };
    }
    

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the Blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
            "question": "All animals and human beings have _________ organs.",
            "optionA": "smell",
            "optionB": "sense",
            "optionC": "taste",
            "correctAnswer": "sense"
        }),
      shuffleOptions({
            "question": "Our sense organs help us to _________ the world around us.",
            "optionA": "see",
            "optionB": "smell",
            "optionC": "know",
            "correctAnswer": "know"
        }),
      shuffleOptions({
            "question": "The sense organs contain thousands of _________.",
            "optionA": "muscles",
            "optionB": "nerves",
            "optionC": "bones",
            "correctAnswer": "nerves"
        }),
      shuffleOptions({
            "question": "The brain processes the signals received from the sense organs and sends a message back to _________.",
            "optionA": "the heart",
            "optionB": "the sense organs",
            "optionC": "the liver",
            "correctAnswer": "the sense organs"
        }),
      shuffleOptions({
            "question": "The organ of vision is the _________.",
            "optionA": "tongue",
            "optionB": "nose",
            "optionC": "eye",
            "correctAnswer": "eye"
        }),
      shuffleOptions({
            "question": "The organ responsible for the sense of smell is the _________.",
            "optionA": "tongue",
            "optionB": "nose",
            "optionC": "ear",
            "correctAnswer": "nose"
        }),
      shuffleOptions({
            "question": "Our skin helps us to sense _________.",
            "optionA": "temperature",
            "optionB": "colors",
            "optionC": "sounds",
            "correctAnswer": "temperature"
        }),
      shuffleOptions({
            "question": "Touches that hurt our feelings and cause us to sense pain are categorized as _________ touches.",
            "optionA": "good",
            "optionB": "bad",
            "optionC": "neutral",
            "correctAnswer": "bad"
        }),
      shuffleOptions({
            "question": "Receptors present in our nose help us to _________.",
            "optionA": "see",
            "optionB": "smell",
            "optionC": "hear",
            "correctAnswer": "smell"
        }),
      shuffleOptions({
            "question": "Differently-Abled People are those whose one or more body parts do not function properly, and they often compensate by using their _________.",
            "optionA": "remaining senses",
            "optionB": "gadgets",
            "optionC": "money",
            "correctAnswer": "remaining senses"
        }
    ]
    
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
            "question": "Animals and human beings do not possess sense organs.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Sense organs help us to perceive the world around us.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "The sense organs contain hundreds of nerves.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "The brain does not process signals received from the sense organs.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "The sense of smell is not related to receptors present in the nose.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "All animals have the same sense organs.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Differently-Abled People cannot compensate for their disabilities.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Blind individuals cannot learn concepts through touch using Braille.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Helen Keller was neither blind nor deaf.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Physical disabilities always prevent individuals from achieving their dreams.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }
    ]

  ],
  };
}
export var activityData;
