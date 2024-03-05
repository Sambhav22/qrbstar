export const chapter = "Chapter - 10: Let's Learn Cooking";
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
    questions: shuffleQues([
      shuffleOptions({
          question:
            "What traditional Rajasthani dish is mentioned in the text?",
          optionA: "Biryani",
          optionB: "Daal and Bati",
          optionC: "Samosa",
          correctAnswer: "B) Daal and Bati",
 }),
      shuffleOptions({
          question:
            "Why does cooking make food easier to digest, according to the text?",
          optionA: "It adds flavor to the food",
          optionB: "It kills germs in the food",
          optionC: "It makes the food look appetizing",
          correctAnswer: "B) It kills germs in the food",
 }),
      shuffleOptions({
          question:
            "Which cooking method involves placing food directly on fire?",
          optionA: "Boiling",
          optionB: "Frying",
          optionC: "Roasting",
          correctAnswer: "C) Roasting",
 }),
      shuffleOptions({
          question:
            "What is the purpose of using a steamer in the steaming method of cooking?",
          optionA: "To add flavor to the food",
          optionB: "To kill germs in the food",
          optionC: "To cook the food with steam",
          correctAnswer: "C) To cook the food with steam",
 }),
      shuffleOptions({
          question:
            "What type of foods are mentioned to be more nutritive but not easily digestible in their raw form?",
          optionA: "Cooked fruits",
          optionB: "Boiled vegetables",
          optionC: "Raw fruits and vegetables",
          correctAnswer: "C) Raw fruits and vegetables",
 }),
      shuffleOptions({
          question: "In villages, what is commonly used as fuel for cooking?",
          optionA: "LPG gas",
          optionB: "Biomass such as firewood and dung",
          optionC: "Coal and electricity",
          correctAnswer: "B) Biomass such as firewood and dung",
 }),
      shuffleOptions({
          question: "Which cooking method involves placing food in hot oil?",
          optionA: "Baking",
          optionB: "Boiling",
          optionC: "Frying",
          correctAnswer: "C) Frying",
 }),
      shuffleOptions({
          question:
            "What is used as fuel for LPG gas stove burners and inductions in cities?",
          optionA: "Firewood",
          optionB: "Kerosene oil",
          optionC: "Electricity",
          correctAnswer: "C) Electricity",
 }),
      shuffleOptions({
          question:
            "Which government scheme is mentioned in relation to the use of LPG connections in rural India?",
          optionA: "Swachh Bharat Abhiyan",
          optionB: "Ujjwala Yojana",
          optionC: "Pradhan Mantri Awas Yojana",
          correctAnswer: "B) Ujjwala Yojana",
 }),
      shuffleOptions({
          question:
            "What type of food items are mentioned to be cooked using the steaming method?",
          optionA: "Chapati and meat",
          optionB: "Pakoras and puris",
          optionC: "Idli, dhokla, and momos",
          correctAnswer: "C) Idli, dhokla, and momos",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question:
            "In lunch, Mumma is making _________ and bati, which is a traditional dish of Rajasthan.",
          optionA: "Pasta",
          optionB: "Daal",
          optionC: "Sandwich",
          correctAnswer: "B) Daal",
 }),
      shuffleOptions({
          question:
            "Cooking makes food easier to digest because it kills ___________ present in the food.",
          optionA: "Flavors",
          optionB: "Germs",
          optionC: "Colors",
          correctAnswer: "B) Germs",
 }),
      shuffleOptions({
          question:
            "___________ is a method of cooking where food is placed directly on fire.",
          optionA: "Baking",
          optionB: "Boiling",
          optionC: "Roasting",
          correctAnswer: "C) Roasting",
 }),
      shuffleOptions({
          question:
            "In the steaming method, food is placed in a container called a ___________, which is filled with water.",
          optionA: "Baker",
          optionB: "Steamer",
          optionC: "Fryer",
          correctAnswer: "B) Steamer",
 }),
      shuffleOptions({
          question:
            "Raw and nutritive foods like apple, banana, and grapes are not easily ___________.",
          optionA: "Digested",
          optionB: "Tasted",
          optionC: "Seen",
          correctAnswer: "A) Digested",
 }),
      shuffleOptions({
          question:
            "Chulhas and tandoors are commonly used in ___________ to cook food.",
          optionA: "Cities",
          optionB: "Villages",
          optionC: "Restaurants",
          correctAnswer: "B) Villages",
 }),
      shuffleOptions({
          question: "In the frying method, food is placed in ___________.",
          optionA: "Hot water",
          optionB: "Hot oil",
          optionC: "Hot air",
          correctAnswer: "B) Hot oil",
 }),
      shuffleOptions({
          question:
            "In cities, LPG gas stove burners and inductions use ___________ as fuel.",
          optionA: "Firewood",
          optionB: "Kerosene oil",
          optionC: "Electricity",
          correctAnswer: "C) Electricity",
 }),
      shuffleOptions({
          question:
            "The introduction of ___________ has provided LPG connections to many households in rural India.",
          optionA: "Ujjwala Yojana",
          optionB: "Swachh Bharat Abhiyan",
          optionC: "Pradhan Mantri Awas Yojana",
          correctAnswer: "A) Ujjwala Yojana",
 }),
      shuffleOptions({
          question:
            "Steaming is a method where food is placed on a sieve in a steamer and cooked using ___________.",
          optionA: "Hot oil",
          optionB: "Steam",
          optionC: "Boiling water",
          correctAnswer: "B) Steam",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Cooking kills the germs present in the food.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "Boiling is a method of cooking where food is placed directly on fire.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Raw fruits and vegetables are easily digestible.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Chulhas and tandoors are commonly used in cities to cook food.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Frying is a method where food is placed in hot oil.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "LPG gas stove burners and inductions use firewood as fuel.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "The Ujjwala Yojana provides LPG connections to rural households in India.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "Steaming is a method where food is placed directly on fire.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Baking is a method where food is placed in an oven.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question: "Cooking makes food less nutritive.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
