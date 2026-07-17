export const chapter = "Chapter - 9: My Neighbourhood";
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
        question: "Which place treats sick and injured people?",
        optionA: "Park",
        optionB: "Hospital",
        optionC: "Post office",
        correctAnswer: "Hospital",
      }),
      shuffleOptions({
        question: "Where do children go to study and learn new things?",
        optionA: "School",
        optionB: "Bank",
        optionC: "Fire station",
        correctAnswer: "School",
      }),
      shuffleOptions({
        question: "Which place has many shops for buying daily-need items?",
        optionA: "Market",
        optionB: "Park",
        optionC: "Hospital",
        correctAnswer: "Market",
      }),
      shuffleOptions({
        question: "In which place do people walk, play and relax?",
        optionA: "Railway station",
        optionB: "Park",
        optionC: "Police station",
        correctAnswer: "Park",
      }),
      shuffleOptions({
        question: "Where do police work day and night to maintain law and order?",
        optionA: "Market",
        optionB: "Hospital",
        optionC: "Police station",
        correctAnswer: "Police station",
      }),
      shuffleOptions({
        question: "Which place helps keep the air fresh with trees and flowers?",
        optionA: "Park",
        optionB: "School",
        optionC: "Cinema hall",
        correctAnswer: "Park",
      }),
      shuffleOptions({
        question: "Which place has doctors and nurses?",
        optionA: "Fire station",
        optionB: "Hospital",
        optionC: "Gurukul",
        correctAnswer: "Hospital",
      }),
      shuffleOptions({
        question: "Where can we buy things needed every day?",
        optionA: "Market",
        optionB: "Bank",
        optionC: "Post office",
        correctAnswer: "Market",
      }),
      shuffleOptions({
        question: "Which place protects people from thefts and robberies?",
        optionA: "Police station",
        optionB: "School",
        optionC: "Park",
        correctAnswer: "Police station",
      }),
      shuffleOptions({
        question: "Which place in old India was known as a Gurukul?",
        optionA: "Ancient school",
        optionB: "Modern market",
        optionC: "Post office",
        correctAnswer: "Ancient school",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "People living near our house are called ______.",
        optionA: "neighbours",
        optionB: "students",
        optionC: "officers",
        correctAnswer: "neighbours",
      }),
      shuffleOptions({
        question: "A place with many shops is called a ______.",
        optionA: "park",
        optionB: "market",
        optionC: "hospital",
        correctAnswer: "market",
      }),
      shuffleOptions({
        question: "A hospital treats ______ people.",
        optionA: "sleepy",
        optionB: "busy",
        optionC: "sick",
        correctAnswer: "sick",
      }),
      shuffleOptions({
        question: "A park has trees, plants and colourful ______.",
        optionA: "flowers",
        optionB: "clothes",
        optionC: "roads",
        correctAnswer: "flowers",
      }),
      shuffleOptions({
        question: "A police station maintains law and ______.",
        optionA: "food",
        optionB: "money",
        optionC: "order",
        correctAnswer: "order",
      }),
      shuffleOptions({
        question: "A school is a place where children ______ many things.",
        optionA: "forget",
        optionB: "learn",
        optionC: "hide",
        correctAnswer: "learn",
      }),
      shuffleOptions({
        question: "A place where people go to walk and relax is a ______.",
        optionA: "cinema",
        optionB: "park",
        optionC: "bank",
        correctAnswer: "park",
      }),
      shuffleOptions({
        question: "A neighbourhood is an area ______ our house.",
        optionA: "near",
        optionB: "behind",
        optionC: "above",
        correctAnswer: "near",
      }),
      shuffleOptions({
        question: "A market provides things of our ______ needs.",
        optionA: "yearly",
        optionB: "daily",
        optionC: "monthly",
        correctAnswer: "daily",
      }),
      shuffleOptions({
        question: "A hospital has doctors and ______.",
        optionA: "nurses",
        optionB: "farmers",
        optionC: "singers",
        correctAnswer: "nurses",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A neighbourhood has many useful places.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A police station helps protect people from robberies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A market has only one shop.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "People go to the park to walk and play.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A hospital is used for playing games.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A school helps children learn new things.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A neighbourhood can include post offices and banks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A park keeps the air dirty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A market sells items of daily needs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Police work both day and night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
