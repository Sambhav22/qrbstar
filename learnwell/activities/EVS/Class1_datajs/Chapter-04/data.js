export const chapter = "Chapter - 4: My Residence";
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
        question: "What is another name for a residence?",
        optionA: "Shop",
        optionB: "Home",
        optionC: "Playground",
        correctAnswer: "Home",
      }),
      shuffleOptions({
        question: "Which house is made of strong materials like bricks and cement?",
        optionA: "Hut",
        optionB: "Pucca house",
        optionC: "Tent",
        correctAnswer: "Pucca house",
      }),
      shuffleOptions({
        question: "What does our house protect us from?",
        optionA: "Heat, cold and rain",
        optionB: "Fruits",
        optionC: "Toys",
        correctAnswer: "Heat, cold and rain",
      }),
      shuffleOptions({
        question: "Which house is made of mud, straw and bamboo?",
        optionA: "Pucca house",
        optionB: "Kutcha house",
        optionC: "Bungalow",
        correctAnswer: "Kutcha house",
      }),
      shuffleOptions({
        question: "Where do we find pucca houses?",
        optionA: "Villages",
        optionB: "Cities",
        optionC: "Forests",
        correctAnswer: "Cities",
      }),
      shuffleOptions({
        question: "What should we do to keep our home neat?",
        optionA: "Sweep and mop",
        optionB: "Sleep",
        optionC: "Paint",
        correctAnswer: "Sweep and mop",
      }),
      shuffleOptions({
        question: "Which word means “related to a city or town”?",
        optionA: "Rural",
        optionB: "Urban",
        optionC: "Local",
        correctAnswer: "Urban",
      }),
      shuffleOptions({
        question: "Which word means “related to a village”?",
        optionA: "Rural",
        optionB: "Urban",
        optionC: "None",
        correctAnswer: "Rural",
      }),
      shuffleOptions({
        question: "Where do children without parents live?",
        optionA: "Orphanage",
        optionB: "School",
        optionC: "Library",
        correctAnswer: "Orphanage",
      }),
      shuffleOptions({
        question: "Who likes a clean and tidy house?",
        optionA: "Everyone",
        optionB: "No one",
        optionC: "Only guests",
        correctAnswer: "Everyone",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We live in a ______.",
        optionA: "Park",
        optionB: "House",
        optionC: "Shop",
        correctAnswer: "House",
      }),
      shuffleOptions({
        question: "A neat and ______ house is liked by everyone.",
        optionA: "Dirty",
        optionB: "Clean",
        optionC: "Broken",
        correctAnswer: "Clean",
      }),
      shuffleOptions({
        question: "______ houses are found in villages.",
        optionA: "Pucca",
        optionB: "Kutcha",
        optionC: "Big",
        correctAnswer: "Kutcha",
      }),
      shuffleOptions({
        question: "______ houses are found in cities.",
        optionA: "Kutcha",
        optionB: "Pucca",
        optionC: "Mud",
        correctAnswer: "Pucca",
      }),
      shuffleOptions({
        question: "Every house has an ______.",
        optionA: "Address",
        optionB: "Garden",
        optionC: "Animal",
        correctAnswer: "Address",
      }),
      shuffleOptions({
        question: "A clean house keeps us away from ______.",
        optionA: "Illness",
        optionB: "Toys",
        optionC: "Friends",
        correctAnswer: "Illness",
      }),
      shuffleOptions({
        question: "The floor can be cleaned by ______.",
        optionA: "Mopping",
        optionB: "Painting",
        optionC: "Reading",
        correctAnswer: "Mopping",
      }),
      shuffleOptions({
        question: "______ means related to city or town.",
        optionA: "Rural",
        optionB: "Urban",
        optionC: "Village",
        correctAnswer: "Urban",
      }),
      shuffleOptions({
        question: "______ means related to a village.",
        optionA: "Rural",
        optionB: "Urban",
        optionC: "Market",
        correctAnswer: "Rural",
      }),
      shuffleOptions({
        question: "Children without homes live in an ______.",
        optionA: "Orphanage",
        optionB: "Museum",
        optionC: "Temple",
        correctAnswer: "Orphanage",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A residence is a place where we live.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pucca houses are found in cities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kutcha houses are made of bricks and cement.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A clean house keeps us away from illness.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should always keep our house dirty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A house protects us from rain and storms.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Urban means related to a village.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rural means related to a city or town.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Every house has an address.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Children without parents live in an orphanage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
