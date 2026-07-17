export const chapter = "Chapter - 7: Places in the Neighbourhood";
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
        question: "Where can you find swings, trees and flowers?",
        optionA: "Hospital",
        optionB: "Park",
        optionC: "Bank",
        correctAnswer: "Park",
      }),
      shuffleOptions({
        question: "Which place has a red letter box for dropping letters?",
        optionA: "Post office",
        optionB: "Bakery",
        optionC: "Petrol pump",
        correctAnswer: "Post office",
      }),
      shuffleOptions({
        question: "Who controls the movement of vehicles on the road?",
        optionA: "Traffic police",
        optionB: "Teacher",
        optionC: "Shopkeeper",
        correctAnswer: "Traffic police",
      }),
      shuffleOptions({
        question: "Which place has many different shops like bakery, chemist and grocery?",
        optionA: "Market",
        optionB: "Railway station",
        optionC: "School",
        correctAnswer: "Market",
      }),
      shuffleOptions({
        question: "Who takes care of people when they are ill or injured?",
        optionA: "Police",
        optionB: "Doctors and nurses",
        optionC: "Bakers",
        correctAnswer: "Doctors and nurses",
      }),
      shuffleOptions({
        question: "Where do children learn reading, writing and good manners?",
        optionA: "School",
        optionB: "Park",
        optionC: "Post office",
        correctAnswer: "School",
      }),
      shuffleOptions({
        question: "Which place helps us send letters and buy stamps?",
        optionA: "Hospital",
        optionB: "Post office",
        optionC: "Police station",
        correctAnswer: "Post office",
      }),
      shuffleOptions({
        question: "Who helps to keep our neighbourhood safe?",
        optionA: "Bakers",
        optionB: "Police officers",
        optionC: "Gardeners",
        correctAnswer: "Police officers",
      }),
      shuffleOptions({
        question: "Where do people go to walk or exercise in the morning or evening?",
        optionA: "Park",
        optionB: "Market",
        optionC: "Cinema hall",
        correctAnswer: "Park",
      }),
      shuffleOptions({
        question: "Which shop sells bread and cakes?",
        optionA: "Chemist",
        optionB: "Bakery",
        optionC: "Stationery",
        correctAnswer: "Bakery",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "People drop their letters in the ______ outside the post office.",
        optionA: "dustbin",
        optionB: "letter box",
        optionC: "cupboard",
        correctAnswer: "letter box",
      }),
      shuffleOptions({
        question: "A chemist shop provides ______ to the people.",
        optionA: "toys",
        optionB: "medicines",
        optionC: "clothes",
        correctAnswer: "medicines",
      }),
      shuffleOptions({
        question: "Children go to the ______ to learn many things.",
        optionA: "bakery",
        optionB: "garage",
        optionC: "school",
        correctAnswer: "school",
      }),
      shuffleOptions({
        question: "The ______ police help to manage vehicles on the road.",
        optionA: "garden",
        optionB: "traffic",
        optionC: "market",
        correctAnswer: "traffic",
      }),
      shuffleOptions({
        question: "A ______ is known for selling cakes and bread.",
        optionA: "bakery",
        optionB: "hospital",
        optionC: "petrol pump",
        correctAnswer: "bakery",
      }),
      shuffleOptions({
        question: "A neighbourhood ______ has many different shops.",
        optionA: "park",
        optionB: "market",
        optionC: "post office",
        correctAnswer: "market",
      }),
      shuffleOptions({
        question: "A ______ works inside a hospital.",
        optionA: "doctor",
        optionB: "grocer",
        optionC: "driver",
        correctAnswer: "doctor",
      }),
      shuffleOptions({
        question: "A ______ is kept at the post office for posting letters.",
        optionA: "red box",
        optionB: "letter box",
        optionC: "lunch box",
        correctAnswer: "letter box",
      }),
      shuffleOptions({
        question: "A ______ helps people when they get hurt.",
        optionA: "tailor",
        optionB: "nurse",
        optionC: "baker",
        correctAnswer: "nurse",
      }),
      shuffleOptions({
        question: "People go to the ______ to walk, play and relax.",
        optionA: "park",
        optionB: "chemist",
        optionC: "bank",
        correctAnswer: "park",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A park is a place where people go to play and enjoy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A bakery sells bread and cakes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A hospital is a place where we go to buy stamps.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The post office has a letter box for dropping letters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Police help to keep the neighbourhood safe.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A school teaches children reading, writing and good manners.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A chemist shop sells vegetables and fruits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Traffic police control the movement of vehicles on the roads.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A market has many different types of shops.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Parks should be kept clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
