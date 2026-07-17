export const chapter = "Chapter - 11: The Age of Machines";
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
        question: "Which age came after human beings discovered how to make machines?",
        optionA: "Stone Age",
        optionB: "Machine Age",
        optionC: "Metal Age",
        correctAnswer: "Machine Age",
      }),
      shuffleOptions({
        question: "Who invented the steam engine that began a new era?",
        optionA: "Rudolf Diesel",
        optionB: "James Watt",
        optionC: "Daimler",
        correctAnswer: "James Watt",
      }),
      shuffleOptions({
        question: "Who invented the locomotive engine used to run trains?",
        optionA: "George Stephenson",
        optionB: "Benjamin Franklin",
        optionC: "Volta",
        correctAnswer: "George Stephenson",
      }),
      shuffleOptions({
        question: "Who used a kite to study lightning and prove it was a form of electricity?",
        optionA: "Alessandro Volta",
        optionB: "Gottlieb Daimler",
        optionC: "Benjamin Franklin",
        correctAnswer: "Benjamin Franklin",
      }),
      shuffleOptions({
        question: "Which invention helped drain water from coal mines?",
        optionA: "Petrol engine",
        optionB: "Steam engine",
        optionC: "Diesel engine",
        correctAnswer: "Steam engine",
      }),
      shuffleOptions({
        question: "Who invented the first battery that showed electricity could flow continuously?",
        optionA: "Volta",
        optionB: "Edison",
        optionC: "Newton",
        correctAnswer: "Volta",
      }),
      shuffleOptions({
        question: "Which scientist invented the petrol-run engine in 1885?",
        optionA: "Rudolf Diesel",
        optionB: "Gottlieb Daimler",
        optionC: "James Watt",
        correctAnswer: "Gottlieb Daimler",
      }),
      shuffleOptions({
        question: "Which fuel is drilled from deep under the earth and then refined?",
        optionA: "Coal",
        optionB: "Petroleum",
        optionC: "Biogas",
        correctAnswer: "Petroleum",
      }),
      shuffleOptions({
        question: "Which form of electricity is produced by the force of falling water?",
        optionA: "Thermal power",
        optionB: "Solar power",
        optionC: "Hydel power",
        correctAnswer: "Hydel power",
      }),
      shuffleOptions({
        question: "Which fuel is produced from cattle waste?",
        optionA: "CNG",
        optionB: "Biogas / Gobar Gas",
        optionC: "Petrol",
        correctAnswer: "Biogas / Gobar Gas",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Before metals were discovered, early man used tools made of ______.",
        optionA: "wood and bones",
        optionB: "bones, stones, and wood",
        optionC: "iron",
        correctAnswer: "bones, stones, and wood",
      }),
      shuffleOptions({
        question: "The change from handmade goods to machine-made goods is called the ______.",
        optionA: "Industrial Revolution",
        optionB: "Stone Revolution",
        optionC: "Coal Revolution",
        correctAnswer: "Industrial Revolution",
      }),
      shuffleOptions({
        question: "People began to settle near factories, giving rise to ______.",
        optionA: "farming villages",
        optionB: "industrial towns and cities",
        optionC: "ports",
        correctAnswer: "industrial towns and cities",
      }),
      shuffleOptions({
        question: "Coal became harder to mine because mines became ______.",
        optionA: "dry",
        optionB: "deeper and filled with water",
        optionC: "closed",
        correctAnswer: "deeper and filled with water",
      }),
      shuffleOptions({
        question: "Petrol is a by-product of ______.",
        optionA: "coal",
        optionB: "electricity",
        optionC: "petroleum",
        correctAnswer: "petroleum",
      }),
      shuffleOptions({
        question: "Electricity produced by burning coal or oil is called ______ electricity.",
        optionA: "solar",
        optionB: "thermal",
        optionC: "wind",
        correctAnswer: "thermal",
      }),
      shuffleOptions({
        question: "Electricity produced by the force of falling water is called ______ power.",
        optionA: "hydel",
        optionB: "diesel",
        optionC: "thermal",
        correctAnswer: "hydel",
      }),
      shuffleOptions({
        question: "A toy that produced shocks using static electricity was called the ______.",
        optionA: "Frankfurt Box",
        optionB: "Watt Jar",
        optionC: "Leyden Jar",
        correctAnswer: "Leyden Jar",
      }),
      shuffleOptions({
        question: "Diesel is used mainly for running ______ vehicles.",
        optionA: "heavy",
        optionB: "light",
        optionC: "battery-operated",
        correctAnswer: "heavy",
      }),
      shuffleOptions({
        question: "A clean fuel used in some cities is ______.",
        optionA: "LPG",
        optionB: "CNG",
        optionC: "crude oil",
        correctAnswer: "CNG",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Stone Age lasted only a few years.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Metals helped humans make better and sharper tools.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Wind power was used in sailing boats long before machines existed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Industrial Revolution reduced production and increased cost of goods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Petroleum is found on the earth’s surface like rocks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rudolf Diesel invented the petrol engine.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Electricity can be produced by burning coal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Benjamin Franklin discovered electricity using a kite experiment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hydel power is generated from falling water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Solar and wind energy cause pollution and are exhaustible.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
