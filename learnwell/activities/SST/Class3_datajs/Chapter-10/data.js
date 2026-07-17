export const chapter = "Chapter - 10: Different Occupations";
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
        question: "Which occupation involves catching fish from seas, rivers or lakes?",
        optionA: "Mining",
        optionB: "Fishing",
        optionC: "Architecture",
        correctAnswer: "Fishing",
      }),
      shuffleOptions({
        question: "Who designs buildings using creativity and imagination?",
        optionA: "Architect",
        optionB: "Farmer",
        optionC: "Mason",
        correctAnswer: "Architect",
      }),
      shuffleOptions({
        question: "Which profession includes doctors, nurses and dentists?",
        optionA: "Teaching",
        optionB: "Medical profession",
        optionC: "Tourism",
        correctAnswer: "Medical profession",
      }),
      shuffleOptions({
        question: "Who grows crops like cotton, oilseeds and sugar cane?",
        optionA: "Miner",
        optionB: "Farmer",
        optionC: "Plumber",
        correctAnswer: "Farmer",
      }),
      shuffleOptions({
        question: "Which occupation provides more than 25.4 million jobs in India?",
        optionA: "Tourism",
        optionB: "Mining",
        optionC: "Dairy farming",
        correctAnswer: "Tourism",
      }),
      shuffleOptions({
        question: "Who prepares milk products like ghee, butter and cheese?",
        optionA: "Dairy farmer",
        optionB: "Architect",
        optionC: "Government employee",
        correctAnswer: "Dairy farmer",
      }),
      shuffleOptions({
        question: "Which occupation extracts minerals like iron and coal from deep inside the earth?",
        optionA: "Teaching",
        optionB: "Mining",
        optionC: "Farming",
        correctAnswer: "Mining",
      }),
      shuffleOptions({
        question: "Who helps students get education and guides their development?",
        optionA: "Teacher",
        optionB: "Fisherman",
        optionC: "Electrician",
        correctAnswer: "Teacher",
      }),
      shuffleOptions({
        question: "Which industry uses cotton, wool, jute and silk to make clothes?",
        optionA: "Textile industry",
        optionB: "Construction",
        optionC: "Oil industry",
        correctAnswer: "Textile industry",
      }),
      shuffleOptions({
        question: "Who works in sectors like banking, railways, education and law?",
        optionA: "Government employee",
        optionB: "Farmer",
        optionC: "Tourist guide",
        correctAnswer: "Government employee",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Milk is used for making butter, ghee and ______.",
        optionA: "cheese",
        optionB: "stones",
        optionC: "metals",
        correctAnswer: "cheese",
      }),
      shuffleOptions({
        question: "Sugar mills use ______ to make sugar.",
        optionA: "wheat",
        optionB: "sugar cane",
        optionC: "cotton",
        correctAnswer: "sugar cane",
      }),
      shuffleOptions({
        question: "Tourism grows because people visit India for its cultural and ______ beauty.",
        optionA: "natural",
        optionB: "chemical",
        optionC: "mechanical",
        correctAnswer: "natural",
      }),
      shuffleOptions({
        question: "Cattle kept on farms help farmers by giving ______.",
        optionA: "fuel",
        optionB: "milk",
        optionC: "coal",
        correctAnswer: "milk",
      }),
      shuffleOptions({
        question: "Cotton and jute are used in the ______ industry.",
        optionA: "textile",
        optionB: "mining",
        optionC: "transport",
        correctAnswer: "textile",
      }),
      shuffleOptions({
        question: "Fishing provides us food, oils and other ______ products.",
        optionA: "useless",
        optionB: "harmful",
        optionC: "useful",
        correctAnswer: "useful",
      }),
      shuffleOptions({
        question: "A person who teaches in a school is called a ______.",
        optionA: "miner",
        optionB: "teacher",
        optionC: "mason",
        correctAnswer: "teacher",
      }),
      shuffleOptions({
        question: "Minerals like iron and gold are found deep inside the ______.",
        optionA: "earth",
        optionB: "clouds",
        optionC: "rivers",
        correctAnswer: "earth",
      }),
      shuffleOptions({
        question: "A government employee works in a government ______.",
        optionA: "office",
        optionB: "kitchen",
        optionC: "factory",
        correctAnswer: "office",
      }),
      shuffleOptions({
        question: "Architects need a lot of creativity and ______.",
        optionA: "imagination",
        optionB: "punishment",
        optionC: "fear",
        correctAnswer: "imagination",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Dairy farmers sell milk and milk products to earn money.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mining is the process of growing crops.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fishing can also be done in ponds and lakes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tourism provides jobs to many people in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sugar cane is used for making clothes in the textile industry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "An architect only digs out minerals from the earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Teaching is a prestigious and honourable job.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Government provides jobs in sports and railways.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cattle are kept only for pulling carts, not for milk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fish provides food, oils and other useful products.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
