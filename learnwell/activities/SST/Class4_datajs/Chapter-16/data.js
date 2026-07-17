export const chapter = "Chapter - 16: Industries";
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
        question: "Which industry uses minerals like iron ore and coal?",
        optionA: "Textile",
        optionB: "Iron and steel",
        optionC: "Food processing",
        correctAnswer: "Iron and steel",
      }),
      shuffleOptions({
        question: "Which place is known for ship-building?",
        optionA: "Kochi",
        optionB: "Jaipur",
        optionC: "Bhopal",
        correctAnswer: "Kochi",
      }),
      shuffleOptions({
        question: "Which industry mainly produces goods such as soap and plastic items?",
        optionA: "Cottage industry",
        optionB: "Small-scale industry",
        optionC: "Woollen industry",
        correctAnswer: "Small-scale industry",
      }),
      shuffleOptions({
        question: "Where are aeroplanes manufactured in India?",
        optionA: "Hyderabad",
        optionB: "Panipat",
        optionC: "Digboi",
        correctAnswer: "Hyderabad",
      }),
      shuffleOptions({
        question: "Which of the following is an agro-based industry?",
        optionA: "Sugar industry",
        optionB: "Iron industry",
        optionC: "Oil refinery",
        correctAnswer: "Sugar industry",
      }),
      shuffleOptions({
        question: "Jamshedpur is famous for which industry?",
        optionA: "Automobile",
        optionB: "Iron and steel",
        optionC: "Carpet weaving",
        correctAnswer: "Iron and steel",
      }),
      shuffleOptions({
        question: "Which material is processed to make steel?",
        optionA: "Limestone",
        optionB: "Iron ore",
        optionC: "Jute",
        correctAnswer: "Iron ore",
      }),
      shuffleOptions({
        question: "Where are cotton textile mills commonly found?",
        optionA: "Kolkata",
        optionB: "Ahmedabad",
        optionC: "Both a and b",
        correctAnswer: "Both a and b",
      }),
      shuffleOptions({
        question: "Which industry makes cars and buses?",
        optionA: "Heavy electrical",
        optionB: "Automobile industry",
        optionC: "Silk industry",
        correctAnswer: "Automobile industry",
      }),
      shuffleOptions({
        question: "Which place has a well-known oil refinery?",
        optionA: "Digboi",
        optionB: "Ludhiana",
        optionC: "Kanpur",
        correctAnswer: "Digboi",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Industries need skilled and unskilled ________ to function.",
        optionA: "labour",
        optionB: "timber",
        optionC: "farmers",
        correctAnswer: "labour",
      }),
      shuffleOptions({
        question: "A good ________ system helps industries send goods to different places.",
        optionA: "rainfall",
        optionB: "transport network",
        optionC: "temperature",
        correctAnswer: "transport network",
      }),
      shuffleOptions({
        question: "Sugar mills are located close to ________ fields.",
        optionA: "sugar cane",
        optionB: "tea",
        optionC: "cotton",
        correctAnswer: "sugar cane",
      }),
      shuffleOptions({
        question: "________ industries use agricultural products.",
        optionA: "Mineral-based",
        optionB: "Agro-based",
        optionC: "Ship-building",
        correctAnswer: "Agro-based",
      }),
      shuffleOptions({
        question: "Coimbatore is known for its ________ industry.",
        optionA: "jute",
        optionB: "cotton textile",
        optionC: "electronic",
        correctAnswer: "cotton textile",
      }),
      shuffleOptions({
        question: "Power supply must be ________ for industries to run smoothly.",
        optionA: "interrupted",
        optionB: "unpredictable",
        optionC: "continuous",
        correctAnswer: "continuous",
      }),
      shuffleOptions({
        question: "Thousands of workers are employed in ________ industries.",
        optionA: "cottage",
        optionB: "large-scale",
        optionC: "toy-making",
        correctAnswer: "large-scale",
      }),
      shuffleOptions({
        question: "Woollen textile mills are found in ________.",
        optionA: "Panipat",
        optionB: "Mumbai",
        optionC: "Visakhapatnam",
        correctAnswer: "Panipat",
      }),
      shuffleOptions({
        question: "Vehicles for daily use are made in the ________ industry.",
        optionA: "sugar",
        optionB: "automobile",
        optionC: "silk",
        correctAnswer: "automobile",
      }),
      shuffleOptions({
        question: "Coal is required for extracting iron from its ________.",
        optionA: "ore",
        optionB: "stem",
        optionC: "field",
        correctAnswer: "ore",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Cottage industries are usually run with small capital.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Iron and steel plants are always located in deserts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Industries help improve the standard of living.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Small-scale industries use very large machines.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ship-building is done in coastal cities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Textile mills produce silk, cotton, woollen and synthetic fabrics.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Finance is not required for buying raw materials.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Oil refineries are found in places like Digboi and Mumbai.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sugar industry is based on mineral resources.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Industries require both machines and human labour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
