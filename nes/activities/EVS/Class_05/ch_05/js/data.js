export const chapter = "Chapter -5: Growing Plants";
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
        [
            {
                "question": "Germination is the process of growing plants from _______.",
                "optionA": "Soil",
                "optionB": "Seeds",
                "optionC": "Stems",
                "correctAnswer": "Seeds"
            },
            {
                "question": "A seed contains the embryo, which consists of tiny seed leaves called _______.",
                "optionA": "Cotyledons",
                "optionB": "Radicle",
                "optionC": "Plumule",
                "correctAnswer": "Cotyledons"
            },
            {
                "question": "For germination, seeds require three important things: water, air, and _______.",
                "optionA": "Sunlight",
                "optionB": "Soil",
                "optionC": "Fertilizer",
                "correctAnswer": "Sunlight"
            },
            {
                "question": "Plants like sugarcane and rose can grow from stem cuttings, which is an example of _______ reproduction.",
                "optionA": "Vegetative",
                "optionB": "Sexual",
                "optionC": "Asexual",
                "correctAnswer": "Vegetative"
            },
            {
                "question": "Seeds are dispersed by various agents, including wind, water, and _______.",
                "optionA": "Fire",
                "optionB": "Insects",
                "optionC": "Animals",
                "correctAnswer": "Animals"
            },
            {
                "question": "Plants like peas and beans disperse their seeds by _______.",
                "optionA": "Wind",
                "optionB": "Water",
                "optionC": "Explosion",
                "correctAnswer": "Explosion"
            },
            {
                "question": "The discovery of tea is credited to _______ who discovered its taste and aroma accidentally.",
                "optionA": "Shen Nung",
                "optionB": "Marco Polo",
                "optionC": "Christopher Columbus",
                "correctAnswer": "Shen Nung"
            },
            {
                "question": "Assam is the birthplace of tea in _______.",
                "optionA": "China",
                "optionB": "India",
                "optionC": "Sri Lanka",
                "correctAnswer": "India"
            },
            {
                "question": "Plum, watermelon, and onion are plants that originated from _______.",
                "optionA": "India",
                "optionB": "China",
                "optionC": "Africa",
                "correctAnswer": "China"
            },
            {
                "question": "Coffee, native to Ethiopia, is commonly grown in _______.",
                "optionA": "India",
                "optionB": "Brazil",
                "optionC": "Kenya",
                "correctAnswer": "Brazil"
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
        [
            {
                "question": "Germination is the process of growing plants from _______.",
                "optionA": "Seeds",
                "optionB": "Roots",
                "optionC": "Stems",
                "correctAnswer": "Seeds"
            },
            {
                "question": "A seed contains the embryo or the baby plant, covered by a _______ for protection.",
                "optionA": "Stem",
                "optionB": "Leaf",
                "optionC": "Seed coat",
                "correctAnswer": "Seed coat"
            },
            {
                "question": "The radicle grows into a _______ that absorbs water and minerals.",
                "optionA": "Stem",
                "optionB": "Leaf",
                "optionC": "Root",
                "correctAnswer": "Root"
            },
            {
                "question": "For germination, seeds need _______ to soften the seed coat.",
                "optionA": "Sunlight",
                "optionB": "Water",
                "optionC": "Air",
                "correctAnswer": "Water"
            },
            {
                "question": "Plants like sugarcane, rose, and money plant can be grown from _______.",
                "optionA": "Roots",
                "optionB": "Seeds",
                "optionC": "Stem cuttings",
                "correctAnswer": "Stem cuttings"
            },
            {
                "question": "Seeds dispersed by wind may have wings on them, helping them to be carried away to far off places by _______.",
                "optionA": "Animals",
                "optionB": "Water",
                "optionC": "Wind",
                "correctAnswer": "Wind"
            },
            {
                "question": "Seeds dispersed by animals are often buried by them, helping in the _______ of new plants.",
                "optionA": "Pruning",
                "optionB": "Dispersal",
                "optionC": "Germination",
                "correctAnswer": "Germination"
            },
            {
                "question": "Tea originated from the leaves of the _______ plant.",
                "optionA": "Coffee",
                "optionB": "Banana",
                "optionC": "Tea",
                "correctAnswer": "Tea"
            },
            {
                "question": "India is one of the world's largest producers of _______.",
                "optionA": "Coffee",
                "optionB": "Tea",
                "optionC": "Banana",
                "correctAnswer": "Tea"
            },
            {
                "question": "Many plants commonly grown in India have originated from foreign countries, such as _______.",
                "optionA": "Watermelon",
                "optionB": "Onion",
                "optionC": "Plum",
                "correctAnswer": "Plum"
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
        [
            {
                "question": "Germination is the process of growing plants from seeds.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "True"
            },
            {
                "question": "A seed coat protects the embryo or baby plant within the seed.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "True"
            },
            {
                "question": "The radicle grows into a leaf that absorbs water and minerals.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            },
            {
                "question": "For germination, seeds need sunlight to soften the seed coat.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            },
            {
                "question": "Plants like sugarcane, rose, and money plant can be grown from roots.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            },
            {
                "question": "Seeds dispersed by wind may have wings on them, helping them to be carried away to far-off places by animals.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            },
            {
                "question": "Seeds dispersed by animals are often buried by them, helping in the pruning of new plants.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            },
            {
                "question": "Tea originated from the leaves of the coffee plant.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            },
            {
                "question": "India is one of the world's largest producers of coffee.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            },
            {
                "question": "Many plants commonly grown in India have originated from foreign countries, such as onion.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "True"
            }
        ]
        
    
    ],
  };
}

export var activityData;
