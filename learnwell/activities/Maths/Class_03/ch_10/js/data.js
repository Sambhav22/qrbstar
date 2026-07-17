export const chapter = "Chapter - 10: Measurement of Capacity";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object;
  const optionsArray = [optionA, optionB, optionC].filter(
    (option) => option !== undefined
  );

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length === 3) {
    object.optionC = optionsArray[2];
  } else {
    delete object.optionC;
  }

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "What is the standard unit used to measure capacity?",
        optionA: "Kilogram",
        optionB: "Litre",
        optionC: "Metre",
        correctAnswer: "Litre",
      }),
      shuffleOptions({
        question: "Which unit is used to measure very small quantities of liquid like medicine?",
        optionA: "ml",
        optionB: "l",
        optionC: "kl",
        correctAnswer: "ml",
      }),
      shuffleOptions({
        question: "Which vessel would you use to measure a large quantity like tank water?",
        optionA: "100 ml",
        optionB: "1 l",
        optionC: "1 kl",
        correctAnswer: "1 kl",
      }),
      shuffleOptions({
        question: "Which among the following is measured using litres?",
        optionA: "Perfume",
        optionB: "Milk",
        optionC: "Eye drops",
        correctAnswer: "Milk",
      }),
      shuffleOptions({
        question: "How many millilitres are there in 1 litre?",
        optionA: "100",
        optionB: "1000",
        optionC: "10",
        correctAnswer: "1000",
      }),
      shuffleOptions({
        question: "Which of these liquids is commonly sold in millilitre bottles?",
        optionA: "Shampoo sachet",
        optionB: "Nail polish",
        optionC: "Perfume bottle (small)",
        correctAnswer: "Perfume bottle (small)",
      }),
      shuffleOptions({
        question: "Which unit is suitable to measure the capacity of a bathtub?",
        optionA: "ml",
        optionB: "l",
        optionC: "kl",
        correctAnswer: "l",
      }),
      shuffleOptions({
        question: "What do we call the amount of liquid a container can hold?",
        optionA: "Mass",
        optionB: "Weight",
        optionC: "Capacity",
        correctAnswer: "Capacity",
      }),
      shuffleOptions({
        question: "Which unit is used to measure a very large tank of water?",
        optionA: "ml",
        optionB: "kl",
        optionC: "l",
        correctAnswer: "kl",
      }),
      shuffleOptions({
        question: "What is the correct way to convert litres into millilitres?",
        optionA: "Multiply by 10",
        optionB: "Multiply by 1000",
        optionC: "Divide by 1000",
        correctAnswer: "Multiply by 1000",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A small cold drink bottle usually contains ______.",
        optionA: "2 l",
        optionB: "200 ml",
        optionC: "20 l",
        correctAnswer: "200 ml",
      }),
      shuffleOptions({
        question: "To convert 4 litres into millilitres, we ______ by 1000.",
        optionA: "divide",
        optionB: "subtract",
        optionC: "multiply",
        correctAnswer: "multiply",
      }),
      shuffleOptions({
        question: "A very tiny liquid amount like in a syringe is measured in ______.",
        optionA: "kl",
        optionB: "l",
        optionC: "ml",
        correctAnswer: "ml",
      }),
      shuffleOptions({
        question: "A bucket of water generally has capacity in ______.",
        optionA: "litres",
        optionB: "millilitres",
        optionC: "kilolitres",
        correctAnswer: "litres",
      }),
      shuffleOptions({
        question: "A nail polish bottle usually holds ______.",
        optionA: "5 ml",
        optionB: "5 l",
        optionC: "500 ml",
        correctAnswer: "5 ml",
      }),
      shuffleOptions({
        question: "The capacity of a container tells us how much liquid it can ______.",
        optionA: "eat",
        optionB: "hold",
        optionC: "weigh",
        correctAnswer: "hold",
      }),
      shuffleOptions({
        question: "3000 ml is equal to ______.",
        optionA: "3 l 0 ml",
        optionB: "30 l",
        optionC: "300 l",
        correctAnswer: "3 l 0 ml",
      }),
      shuffleOptions({
        question: "To convert millilitres into litres, we ______ by 1000.",
        optionA: "multiply",
        optionB: "divide",
        optionC: "add",
        correctAnswer: "divide",
      }),
      shuffleOptions({
        question: "A water tank on the roof has its capacity measured in ______.",
        optionA: "kl",
        optionB: "ml",
        optionC: "cm",
        correctAnswer: "kl",
      }),
      shuffleOptions({
        question: "A shampoo sachet usually contains ______.",
        optionA: "10 ml",
        optionB: "10 l",
        optionC: "1000 ml",
        correctAnswer: "10 ml",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "500 ml is half a litre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1 kilolitre is equal to 100 litres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A perfume bottle is usually measured in litres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "7000 ml is equal to 7 litres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A bathtub’s capacity is measured in millilitres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "To convert litres into millilitres, we multiply by 1000.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Milk is commonly measured in litres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A 1 l vessel can hold more liquid than a 500 ml vessel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "100 ml is more than 1 litre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A water tank’s capacity can be expressed in kilolitres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
