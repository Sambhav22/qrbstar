export const chapter = "Chapter -12: Teeth and Tongue";
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
            "question": "What is the function of incisors?",
            "optionA": "Piercing and tearing the food",
            "optionB": "Biting and cutting the food",
            "optionC": "Chewing and grinding the food",
            "correctAnswer": "Biting and cutting the food"
        }),
      shuffleOptions({
            "question": "How many canines are there in each jaw?",
            "optionA": "Four",
            "optionB": "Two",
            "optionC": "Six",
            "correctAnswer": "Two"
        }),
      shuffleOptions({
            "question": "What are premolars mainly used for?",
            "optionA": "Piercing and tearing the food",
            "optionB": "Chewing and grinding the food",
            "optionC": "Biting and cutting the food",
            "correctAnswer": "Chewing and grinding the food"
        }),
      shuffleOptions({
            "question": "Which type of teeth are present just behind the premolars?",
            "optionA": "Incisors",
            "optionB": "Canines",
            "optionC": "Molars",
            "correctAnswer": "Molars"
        }),
      shuffleOptions({
            "question": "How many molars are there in each jaw?",
            "optionA": "Four",
            "optionB": "Six",
            "optionC": "Three",
            "correctAnswer": "Six"
        }),
      shuffleOptions({
            "question": "At what age do milk teeth begin to fall off?",
            "optionA": "8-12 years",
            "optionB": "6-8 years",
            "optionC": "12-14 years",
            "correctAnswer": "6-8 years"
        }),
      shuffleOptions({
            "question": "What are permanent teeth replaced by if they suffer from dental problems?",
            "optionA": "Temporary teeth",
            "optionB": "Milk teeth",
            "optionC": "Another set of permanent teeth",
            "correctAnswer": "Another set of permanent teeth"
        }),
      shuffleOptions({
            "question": "How many times a day should teeth be brushed according to the text?",
            "optionA": "Once a day",
            "optionB": "Three times a day",
            "optionC": "Twice a day",
            "correctAnswer": "Twice a day"
        }),
      shuffleOptions({
            "question": "What is the function of the tongue during chewing?",
            "optionA": "Mixing saliva with food",
            "optionB": "Piercing and tearing the food",
            "optionC": "Grinding the food",
            "correctAnswer": "Mixing saliva with food"
        }),
      shuffleOptions({
            "question": "Where are taste buds located?",
            "optionA": "Teeth",
            "optionB": "Salivary glands",
            "optionC": "Tongue",
            "correctAnswer": "Tongue"
        }
    ],
    
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
            "question": "The place where animals live is called their ________.",
            "optionA": "Shelter",
            "optionB": "Habitat",
            "optionC": "Home",
            "correctAnswer": "Habitat"
        }),
      shuffleOptions({
            "question": "Animals that live predominantly on land are known as ________ animals.",
            "optionA": "Aquatic",
            "optionB": "Terrestrial",
            "optionC": "Amphibious",
            "correctAnswer": "Terrestrial"
        }),
      shuffleOptions({
            "question": "Arboreal animals like monkeys and squirrels spend most of their time _________.",
            "optionA": "Underground",
            "optionB": "In water",
            "optionC": "On trees",
            "correctAnswer": "On trees"
        }),
      shuffleOptions({
            "question": "Animals such as fish, whales, and dolphins live in ________ habitats.",
            "optionA": "Desert",
            "optionB": "Aquatic",
            "optionC": "Forest",
            "correctAnswer": "Aquatic"
        }),
      shuffleOptions({
            "question": "Walruses spend their whole life inside the water in the ________ regions.",
            "optionA": "Desert",
            "optionB": "Polar",
            "optionC": "Tropical",
            "correctAnswer": "Polar"
        }),
      shuffleOptions({
            "question": "Animal sanctuaries serve as shelter places for ________ animals.",
            "optionA": "Farm",
            "optionB": "Aquatic",
            "optionC": "Homeless",
            "correctAnswer": "Homeless"
        }),
      shuffleOptions({
            "question": "Teeth start growing in babies at the age of ________ months.",
            "optionA": "6-8",
            "optionB": "8-12",
            "optionC": "12-14",
            "correctAnswer": "8-12"
        }),
      shuffleOptions({
            "question": "The temporary set of teeth in babies is called ________ teeth.",
            "optionA": "Permanent",
            "optionB": "Milk",
            "optionC": "Adult",
            "correctAnswer": "Milk"
        }),
      shuffleOptions({
            "question": "We should brush our teeth ________ a day according to the text.",
            "optionA": "Once",
            "optionB": "Thrice",
            "optionC": "Twice",
            "correctAnswer": "Twice"
        }),
      shuffleOptions({
            "question": "The tongue helps in sensing four types of taste: sweet, salty, sour, and ________.",
            "optionA": "Spicy",
            "optionB": "Bitter",
            "optionC": "Umami",
            "correctAnswer": "Bitter"
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
            "question": "Animals that live predominantly on land are called aquatic animals.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "All fish species make their homes in corals or among underwater plants.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Permanent teeth begin to fall off at the age of 6-8 years.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "We should rinse our mouth thoroughly with clean water after every meal.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Incisors are pointed teeth used for piercing and tearing food.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "The tongue is a flesh muscular organ present in the nose.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Tongue helps in mixing saliva with food during chewing.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Premolars are used for biting and cutting food.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Milk teeth start growing in babies at the age of 6-8 months.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Canines are located just behind the incisors.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }
    ]
    
    ],
  };
}

export var activityData;
