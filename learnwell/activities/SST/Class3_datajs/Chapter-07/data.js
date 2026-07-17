export const chapter = "Chapter - 7: Food and Clothes";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const optionKeys = ["optionA", "optionB", "optionC", "optionD"];
  const optionsArray = optionKeys
    .map((key) => object[key])
    .filter((option) => option !== undefined);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  optionKeys.forEach((key, index) => {
    if (index < optionsArray.length) {
      object[key] = optionsArray[index];
    } else {
      delete object[key];
    }
  });

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Which region of India is known for its spicy food?",
        optionA: "Gujarat",
        optionB: "Rajasthan",
        optionC: "Punjab",
        correctAnswer: "Rajasthan",
      }),
      shuffleOptions({
        question: "Which state’s dishes often use coconut and spices?",
        optionA: "Maharashtra",
        optionB: "Tamil Nadu",
        optionC: "South India",
        correctAnswer: "South India",
      }),
      shuffleOptions({
        question: "Which region mainly eats rice and fish?",
        optionA: "North India",
        optionB: "East India (Bengal & Assam)",
        optionC: "West India",
        correctAnswer: "East India (Bengal & Assam)",
      }),
      shuffleOptions({
        question: "Which sweet is famous in eastern India?",
        optionA: "Gajar-ka-halwa",
        optionB: "Rasogulla",
        optionC: "Dosa",
        correctAnswer: "Rasogulla",
      }),
      shuffleOptions({
        question: "Which long woollen coat is worn in Jammu and Kashmir?",
        optionA: "Saree",
        optionB: "Phiran",
        optionC: "Angostra",
        correctAnswer: "Phiran",
      }),
      shuffleOptions({
        question: "Which food item is popularly eaten during winters in North India?",
        optionA: "Sandesh",
        optionB: "Gajar-ka-halwa",
        optionC: "Dosa",
        correctAnswer: "Gajar-ka-halwa",
      }),
      shuffleOptions({
        question: "Which region of India uses tamarind to add sourness to food?",
        optionA: "Andhra Pradesh",
        optionB: "Tamil Nadu",
        optionC: "West Bengal",
        correctAnswer: "Tamil Nadu",
      }),
      shuffleOptions({
        question: "Which material is commonly used for cooking in South India?",
        optionA: "Coconut oil / Groundnut oil",
        optionB: "Mustard oil",
        optionC: "Coconut oil & spices",
        correctAnswer: "Coconut oil & spices",
      }),
      shuffleOptions({
        question: "Which state’s women usually wear lehanga-choli?",
        optionA: "Punjab",
        optionB: "Gujarat",
        optionC: "Haryana",
        correctAnswer: "Gujarat",
      }),
      shuffleOptions({
        question: "Which region uses ghee and mustard oil for cooking?",
        optionA: "South India",
        optionB: "East India",
        optionC: "North India",
        correctAnswer: "North India",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "South Indian meals often include ______ chutney.",
        optionA: "tomato",
        optionB: "coconut",
        optionC: "onion",
        correctAnswer: "coconut",
      }),
      shuffleOptions({
        question: "People in hilly areas wear ______ clothes.",
        optionA: "cotton",
        optionB: "woollen",
        optionC: "silk",
        correctAnswer: "woollen",
      }),
      shuffleOptions({
        question: "The women of West Bengal tie a bunch of ______ to their saree pallu.",
        optionA: "keys",
        optionB: "flowers",
        optionC: "ribbons",
        correctAnswer: "keys",
      }),
      shuffleOptions({
        question: "The climate and soil of a place decide which ______ are grown.",
        optionA: "toys",
        optionB: "crops",
        optionC: "buildings",
        correctAnswer: "crops",
      }),
      shuffleOptions({
        question: "Rajasthani food is mostly ______.",
        optionA: "spicy",
        optionB: "sweet",
        optionC: "sour",
        correctAnswer: "spicy",
      }),
      shuffleOptions({
        question: "In Gujarat, the food has a slight ______ touch.",
        optionA: "bitter",
        optionB: "sweet",
        optionC: "salty",
        correctAnswer: "sweet",
      }),
      shuffleOptions({
        question: "Maharashtra has a food style that mixes both ______ and southern cooking.",
        optionA: "northern",
        optionB: "eastern",
        optionC: "western",
        correctAnswer: "northern",
      }),
      shuffleOptions({
        question: "People in coastal areas often eat ______.",
        optionA: "fish",
        optionB: "chapati",
        optionC: "maize",
        correctAnswer: "fish",
      }),
      shuffleOptions({
        question: "Rice is the main food in ______ India.",
        optionA: "North",
        optionB: "South",
        optionC: "West",
        correctAnswer: "South",
      }),
      shuffleOptions({
        question: "The people of Punjab use a ______ on their head.",
        optionA: "cap",
        optionB: "turban (pagdi)",
        optionC: "muffler",
        correctAnswer: "turban (pagdi)",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "People in different parts of India eat different foods because crops grow differently in each region.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gujarati women wear ghagra-kanchli.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Spices and coconuts are used widely in South Indian food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People of Bengal and Assam eat a lot of fish.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "North Indian food mostly uses coconut oil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Phiran is a long woollen coat worn in Jammu and Kashmir.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In Tamil Nadu, tamarind is used to make dishes sour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The food of Maharashtra is influenced by both northern and southern styles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cotton clothes are suitable for cold hilly areas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Saree is worn in different styles in different parts of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
