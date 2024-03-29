export const chapter = "Chapter -10: Habitat of Animal";
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
            "question": "Where do terrestrial animals primarily live?",
            "optionA": "In water",
            "optionB": "In caves",
            "optionC": "In the sky",
            "correctAnswer": "In caves"
        }),
      shuffleOptions({
            "question": "Which type of animals spend most of their time on trees?",
            "optionA": "Lions and tigers",
            "optionB": "Monkeys and squirrels",
            "optionC": "Elephants and giraffes",
            "correctAnswer": "Monkeys and squirrels"
        }),
      shuffleOptions({
            "question": "What do rabbits and snakes make to live in?",
            "optionA": "Nests",
            "optionB": "Dens",
            "optionC": "Holes in the ground",
            "correctAnswer": "Holes in the ground"
        }),
      shuffleOptions({
            "question": "Where does an eagle typically make its nest?",
            "optionA": "Underwater",
            "optionB": "Inside caves",
            "optionC": "On topmost branches of tall trees",
            "correctAnswer": "On topmost branches of tall trees"
        }),
      shuffleOptions({
            "question": "Which animals primarily live in water?",
            "optionA": "Lions and tigers",
            "optionB": "Fish and dolphins",
            "optionC": "Monkeys and squirrels",
            "correctAnswer": "Fish and dolphins"
        }),
      shuffleOptions({
            "question": "Where do walruses spend most of their lives?",
            "optionA": "On land",
            "optionB": "In caves",
            "optionC": "In water",
            "correctAnswer": "In water"
        }),
      shuffleOptions({
            "question": "What type of shelter does the seashore provide for some animals?",
            "optionA": "Caves",
            "optionB": "Trees",
            "optionC": "Under rocks or in sand",
            "correctAnswer": "Under rocks or in sand"
        }),
      shuffleOptions({
            "question": "What do animal sanctuaries serve as?",
            "optionA": "Shelter places for homeless animals",
            "optionB": "Shopping centers",
            "optionC": "Tourist attractions",
            "correctAnswer": "Shelter places for homeless animals"
        }),
      shuffleOptions({
            "question": "What do people promote through adoption campaigns in animal sanctuaries?",
            "optionA": "Adopting wild animals",
            "optionB": "Adopting farm animals",
            "optionC": "Adopting pets",
            "correctAnswer": "Adopting pets"
        }),
      shuffleOptions({
            "question": "What do animal sanctuaries take care of?",
            "optionA": "Only wild animals",
            "optionB": "Only farm animals",
            "optionC": "Both farm and wild animals",
            "correctAnswer": "Both farm and wild animals"
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
            "question": "Animals, like lions and tigers, live in __________.",
            "optionA": "Caves",
            "optionB": "Forests",
            "optionC": "Deserts",
            "correctAnswer": "Caves"
        }),
      shuffleOptions({
            "question": "Arboreal animals, like monkeys and squirrels, spend most of their time on __________.",
            "optionA": "Land",
            "optionB": "Trees",
            "optionC": "Mountains",
            "correctAnswer": "Trees"
        }),
      shuffleOptions({
            "question": "Rabbits and snakes make a hole deep inside the ground to live, while flying animals, like birds, make their nests with __________.",
            "optionA": "Twigs and grass",
            "optionB": "Dried sticks",
            "optionC": "Leaves and feathers",
            "correctAnswer": "Twigs and grass"
        }),
      shuffleOptions({
            "question": "Walruses spend their whole life inside the __________ regions.",
            "optionA": "Mountainous",
            "optionB": "Polar",
            "optionC": "Tropical",
            "correctAnswer": "Polar"
        }),
      shuffleOptions({
            "question": "The seashore provides shelter to animals such as crabs, turtles, and sea worms, which live under rocks or make holes in the __________.",
            "optionA": "Trees",
            "optionB": "Water",
            "optionC": "Sand",
            "correctAnswer": "Sand"
        }),
      shuffleOptions({
            "question": "Animal sanctuaries serve as shelter places for __________ animals.",
            "optionA": "Humans",
            "optionB": "Homeless",
            "optionC": "Domesticated",
            "correctAnswer": "Homeless"
        }),
      shuffleOptions({
            "question": "Large teams of people work at animal sanctuaries to take care of both farm and __________ animals.",
            "optionA": "Wild",
            "optionB": "Domesticated",
            "optionC": "Aquatic",
            "correctAnswer": "Wild"
        }),
      shuffleOptions({
            "question": "Through adoption campaigns in animal sanctuaries, people can adopt __________.",
            "optionA": "Endangered species",
            "optionB": "Exotic animals",
            "optionC": "Pets",
            "correctAnswer": "Pets"
        }),
      shuffleOptions({
            "question": "Animals that grow in forests or jungles without much care are called __________ plants.",
            "optionA": "Domesticated",
            "optionB": "Cultivated",
            "optionC": "Wild",
            "correctAnswer": "Wild"
        }),
      shuffleOptions({
            "question": "When we walk in our garden, we feel relaxed and close to __________.",
            "optionA": "Civilization",
            "optionB": "Nature",
            "optionC": "Technology",
            "correctAnswer": "Nature"
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
            "question": "Arboreal animals like monkeys and squirrels spend most of their time on the ground.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Rabbits and snakes make their homes in the trees.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Walruses spend their entire lives in tropical regions.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Animal sanctuaries provide shelter only to domesticated animals.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "People cannot adopt pets from animal sanctuaries.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Wild animals living in forests or jungles require regular care and attention.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Animal sanctuaries are run by small teams of people.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "The seashore provides shelter to animals like crabs, turtles, and sea worms.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Terrestrial animals primarily live in water.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Animal sanctuaries are primarily meant for promoting the hunting of animals.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }
    ]
    
    ],
  };
}

export var activityData;
