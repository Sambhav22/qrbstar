export const chapter = "Chapter -9: Food for Plants and Animals";
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
            "question": "What is the process by which plants make their own food?",
            "optionA": "Respiration",
            "optionB": "Photosynthesis",
            "optionC": "Digestion",
            "correctAnswer": "Photosynthesis"
        }),
      shuffleOptions({
            "question": "What are the primary components required for photosynthesis in plants?",
            "optionA": "Oxygen, water, and sunlight",
            "optionB": "Carbon dioxide, water, and sunlight",
            "optionC": "Nitrogen, water, and sunlight",
            "correctAnswer": "Carbon dioxide, water, and sunlight"
        }),
      shuffleOptions({
            "question": "Which of the following is NOT a product of photosynthesis?",
            "optionA": "Sugar",
            "optionB": "Oxygen",
            "optionC": "Carbon dioxide",
            "correctAnswer": "Carbon dioxide"
        }),
      shuffleOptions({
            "question": "What is starch converted into, after it is released during photosynthesis?",
            "optionA": "Glucose",
            "optionB": "Oxygen",
            "optionC": "Minerals",
            "correctAnswer": "Glucose"
        }),
      shuffleOptions({
            "question": "Which of the following are examples of food stored by plants?",
            "optionA": "Oxygen and nitrogen",
            "optionB": "Potato, beetroot, carrot",
            "optionC": "Minerals and vitamins",
            "correctAnswer": "Potato, beetroot, carrot"
        }),
      shuffleOptions({
            "question": "Carnivorous plants primarily trap insects to obtain:",
            "optionA": "Energy",
            "optionB": "Oxygen",
            "optionC": "Nutrients",
            "correctAnswer": "Nutrients"
        }),
      shuffleOptions({
            "question": "Herbivores are also known as:",
            "optionA": "Primary consumers",
            "optionB": "Secondary consumers",
            "optionC": "Tertiary consumers",
            "correctAnswer": "Primary consumers"
        }),
      shuffleOptions({
            "question": "Carnivores primarily consume:",
            "optionA": "Plants",
            "optionB": "Flesh of other animals",
            "optionC": "Both plants and flesh of other animals",
            "correctAnswer": "Flesh of other animals"
        }),
      shuffleOptions({
            "question": "Omnivores consume:",
            "optionA": "Only plants",
            "optionB": "Only flesh of other animals",
            "optionC": "Both plants and flesh of other animals",
            "correctAnswer": "Both plants and flesh of other animals"
        }),
      shuffleOptions({
            "question": "Food webs differ from food chains in that they:",
            "optionA": "Follow a single path",
            "optionB": "Show multiple interconnected paths",
            "optionC": "Start with decomposer species",
            "correctAnswer": "Show multiple interconnected paths"
        }
    ]
    
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
            "question": "__________, water, and carbon dioxide are the primary components required for photosynthesis in plants.",
            "optionA": "Oxygen",
            "optionB": "Sunlight",
            "optionC": "Minerals",
            "correctAnswer": "Sunlight"
        }),
      shuffleOptions({
            "question": "The process by which plants make their own food is called __________.",
            "optionA": "Respiration",
            "optionB": "Photosynthesis",
            "optionC": "Digestion",
            "correctAnswer": "Photosynthesis"
        }),
      shuffleOptions({
            "question": "The products of photosynthesis are __________, oxygen, and water vapor.",
            "optionA": "Starch",
            "optionB": "Sugar",
            "optionC": "Protein",
            "correctAnswer": "Sugar"
        }),
      shuffleOptions({
            "question": "The sugar released during photosynthesis is converted into __________.",
            "optionA": "Glucose",
            "optionB": "Minerals",
            "optionC": "Vitamins",
            "correctAnswer": "Glucose"
        }),
      shuffleOptions({
            "question": "Plants store their food in different parts such as __________, beetroot, carrot, etc.",
            "optionA": "Oxygen",
            "optionB": "Nitrogen",
            "optionC": "Potato",
            "correctAnswer": "Potato"
        }),
      shuffleOptions({
            "question": "Carnivorous plants primarily trap insects to obtain __________.",
            "optionA": "Energy",
            "optionB": "Oxygen",
            "optionC": "Nutrients",
            "correctAnswer": "Nutrients"
        }),
      shuffleOptions({
            "question": "Herbivores are also known as __________.",
            "optionA": "Primary consumers",
            "optionB": "Secondary consumers",
            "optionC": "Tertiary consumers",
            "correctAnswer": "Primary consumers"
        }),
      shuffleOptions({
            "question": "Carnivores primarily consume the __________ of other animals.",
            "optionA": "Plants",
            "optionB": "Flesh",
            "optionC": "Bones",
            "correctAnswer": "Flesh"
        }),
      shuffleOptions({
            "question": "Omnivores consume both __________ and flesh of other animals.",
            "optionA": "Only plants",
            "optionB": "Only minerals",
            "optionC": "Plants",
            "correctAnswer": "Plants"
        }),
      shuffleOptions({
            "question": "Food webs differ from food chains in that they show __________ paths.",
            "optionA": "Single",
            "optionB": "Multiple interconnected",
            "optionC": "Circular",
            "correctAnswer": "Multiple interconnected"
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
            "question": "Photosynthesis is the process by which plants convert sunlight into water.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "The products of photosynthesis include sugar, oxygen, and water vapor.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Carnivorous plants primarily trap insects to obtain energy.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Herbivores are also known as secondary consumers.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Carnivores primarily consume plants.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Omnivores consume only flesh of other animals.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Food webs show single paths of energy flow in ecosystems.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Decomposers are organisms such as fungi, bacteria, and worms that feed on living plants and animals.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "The sun is the primary source of energy for nearly all living things on Earth.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Food chains follow multiple interconnected paths of energy flow.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }
    ]
    
    ],
  };
}

export var activityData;
