export const chapter = "Chapter -13: Shelter for All";
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
          "question": "What are houses for humans primarily designed to protect against?",
          "optionA": "A) Harsh weather",
          "optionB": "B) Theft",
          "optionC": "C) Wild animals",
          "correctAnswer": "A) Harsh weather"
        }),
      shuffleOptions({
          "question": "Which of the following insects build colonies consisting of chambers to store food and for other purposes?",
          "optionA": "A) Bees",
          "optionB": "B) Ants",
          "optionC": "C) Butterflies",
          "correctAnswer": "B) Ants"
        }),
      shuffleOptions({
          "question": "What is the primary material used for houses in hilly and cold regions?",
          "optionA": "A) Bamboo",
          "optionB": "B) Wood",
          "optionC": "C) Ice blocks",
          "correctAnswer": "B) Wood"
        }),
      shuffleOptions({
          "question": "What type of houses are common in flood-prone areas?",
          "optionA": "A) Igloos",
          "optionB": "B) Tents",
          "optionC": "C) Houses on stilts",
          "correctAnswer": "C) Houses on stilts"
        }),
      shuffleOptions({
          "question": "What material is commonly used for houses in earthquake-prone regions to prevent injury in case of collapse?",
          "optionA": "A) Bamboo",
          "optionB": "B) Wood",
          "optionC": "C) Mud",
          "correctAnswer": "B) Wood"
        }),
      shuffleOptions({
          "question": "What material are houses in hot regions primarily made of to prevent overheating?",
          "optionA": "A) Bamboo",
          "optionB": "B) Stone",
          "optionC": "C) Mud",
          "correctAnswer": "C) Mud"
        }),
      shuffleOptions({
          "question": "Which type of settlement is smaller than a village and is clustered together close to the road?",
          "optionA": "A) Town",
          "optionB": "B) Hamlet",
          "optionC": "C) City",
          "correctAnswer": "B) Hamlet"
        }),
      shuffleOptions({
          "question": "What term is used for a large human settlement with extensive housing, transportation, and communication systems?",
          "optionA": "A) Village",
          "optionB": "B) City",
          "optionC": "C) Town",
          "correctAnswer": "B) City"
        }),
      shuffleOptions({
          "question": "What are terrestrial animals?",
          "optionA": "A) Animals that live in water",
          "optionB": "B) Animals that fly in the air",
          "optionC": "C) Animals that live on land",
          "correctAnswer": "C) Animals that live on land"
        }),
      shuffleOptions({
          "question": "Which group of animals includes those that fly in the air and rest on trees?",
          "optionA": "A) Terrestrial animals",
          "optionB": "B) Aerial animals",
          "optionC": "C) Aquatic animals",
          "correctAnswer": "B) Aerial animals"
        }
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "In hilly and cold regions, houses are primarily made up of _______.",
          "optionA": "A) Bamboo",
          "optionB": "B) Wood",
          "optionC": "C) Ice blocks",
          "correctAnswer": "B) Wood"
        }),
      shuffleOptions({
          "question": "Houses built on raised platforms or poles in flood-prone areas are called _______.",
          "optionA": "A) Cottages",
          "optionB": "B) Igloos",
          "optionC": "C) Houses on stilts",
          "correctAnswer": "C) Houses on stilts"
        }),
      shuffleOptions({
          "question": "In earthquake-prone regions, houses are constructed using _______ to prevent injury.",
          "optionA": "A) Bamboo",
          "optionB": "B) Wood",
          "optionC": "C) Mud",
          "correctAnswer": "B) Wood"
        }),
      shuffleOptions({
          "question": "Houses in hot regions are primarily made of _______ to prevent overheating.",
          "optionA": "A) Bamboo",
          "optionB": "B) Stone",
          "optionC": "C) Mud",
          "correctAnswer": "C) Mud"
        }),
      shuffleOptions({
          "question": "The settlement smaller than a village, clustered together close to the road, is called a _______.",
          "optionA": "A) Hamlet",
          "optionB": "B) Town",
          "optionC": "C) City",
          "correctAnswer": "A) Hamlet"
        }),
      shuffleOptions({
          "question": "A large human settlement with extensive housing, transportation, and communication systems is called a _______.",
          "optionA": "A) Village",
          "optionB": "B) City",
          "optionC": "C) Town",
          "correctAnswer": "B) City"
        }),
      shuffleOptions({
          "question": "Animals who live on land are called _______ animals.",
          "optionA": "A) Terrestrial",
          "optionB": "B) Aquatic",
          "optionC": "C) Aerial",
          "correctAnswer": "A) Terrestrial"
        }),
      shuffleOptions({
          "question": "Animals that fly in the air and rest on trees are known as _______ animals.",
          "optionA": "A) Terrestrial",
          "optionB": "B) Aquatic",
          "optionC": "C) Aerial",
          "correctAnswer": "C) Aerial"
        }),
      shuffleOptions({
          "question": "Animals who live both in water and on land are called _______.",
          "optionA": "A) Amphibians",
          "optionB": "B) Reptiles",
          "optionC": "C) Mammals",
          "correctAnswer": "A) Amphibians"
        }),
      shuffleOptions({
          "question": "The movement of birds from cold regions to warmer places during winters is called _______.",
          "optionA": "A) Immigration",
          "optionB": "B) Hibernation",
          "optionC": "C) Migration",
          "correctAnswer": "C) Migration"
        }
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "Ants live in colonies and build anthills to establish their homes.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Bees do not live together in organized family groups.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "In polar regions, houses are commonly built using bricks and stones.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Houses built on stilts are common in flood-prone areas.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Earthquake-prone regions typically use bamboo and wood to construct houses.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Houses in hot regions often have thin walls and flat roofs.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Nomads live in permanent houses called tents.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Houseboats are stationary houses found in the lakes of Kashmir and Kerala.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "The settlement called a town is generally smaller than a village.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Terrestrial animals include those that live in water.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }
      ],
  };
}

export var activityData;
