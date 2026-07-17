export const chapter = "Chapter - 12: Electricity and Circuits";
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
        question: "Who is known as the Father of Electricity?",
        optionA: "Thomas Edison",
        optionB: "Michael Faraday",
        optionC: "Benjamin Franklin",
        correctAnswer: "Michael Faraday",
      }),
      shuffleOptions({
        question: "Who invented the dry cell?",
        optionA: "Georges Leclanché",
        optionB: "Newton",
        optionC: "Edison",
        correctAnswer: "Georges Leclanché",
      }),
      shuffleOptions({
        question: "Which part of a dry cell acts as the positive terminal?",
        optionA: "Carbon rod",
        optionB: "Zinc case",
        optionC: "Paste",
        correctAnswer: "Carbon rod",
      }),
      shuffleOptions({
        question: "Which material inside a dry cell helps to produce electricity?",
        optionA: "Chemical paste",
        optionB: "Water",
        optionC: "Air",
        correctAnswer: "Chemical paste",
      }),
      shuffleOptions({
        question: "Which type of cells can be recharged and used again?",
        optionA: "Primary cells",
        optionB: "Secondary cells",
        optionC: "Solar cells",
        correctAnswer: "Secondary cells",
      }),
      shuffleOptions({
        question: "Which device is used to open or close a circuit?",
        optionA: "Battery",
        optionB: "Switch",
        optionC: "Fuse",
        correctAnswer: "Switch",
      }),
      shuffleOptions({
        question: "What happens when a switch is in the OFF position?",
        optionA: "The circuit is closed",
        optionB: "The circuit is open",
        optionC: "The bulb glows",
        correctAnswer: "The circuit is open",
      }),
      shuffleOptions({
        question: "Which part of a bulb glows when electricity passes through it?",
        optionA: "Filament",
        optionB: "Glass cover",
        optionC: "Wire base",
        correctAnswer: "Filament",
      }),
      shuffleOptions({
        question: "Which wire in domestic circuits is used for safety?",
        optionA: "Live wire",
        optionB: "Earthing wire",
        optionC: "Neutral wire",
        correctAnswer: "Earthing wire",
      }),
      shuffleOptions({
        question: "Which safety device stops current when overload occurs?",
        optionA: "Fuse",
        optionB: "Battery",
        optionC: "Switch",
        correctAnswer: "Fuse",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Electricity is produced in ______.",
        optionA: "power stations",
        optionB: "schools",
        optionC: "offices",
        correctAnswer: "power stations",
      }),
      shuffleOptions({
        question: "The flat end of a dry cell is its ______ terminal.",
        optionA: "positive",
        optionB: "negative",
        optionC: "neutral",
        correctAnswer: "negative",
      }),
      shuffleOptions({
        question: "The flow of charges in a circuit is called ______.",
        optionA: "electric current",
        optionB: "heat",
        optionC: "light",
        correctAnswer: "electric current",
      }),
      shuffleOptions({
        question: "The energy stored inside a cell is ______ energy.",
        optionA: "light",
        optionB: "mechanical",
        optionC: "chemical",
        correctAnswer: "chemical",
      }),
      shuffleOptions({
        question: "A bulb glows only when the circuit is ______.",
        optionA: "closed",
        optionB: "open",
        optionC: "broken",
        correctAnswer: "closed",
      }),
      shuffleOptions({
        question: "The paste inside a dry cell contains ______.",
        optionA: "zinc oxide",
        optionB: "common salt",
        optionC: "ammonium chloride",
        correctAnswer: "ammonium chloride",
      }),
      shuffleOptions({
        question: "The wire used for safety in homes is the ______ wire.",
        optionA: "earthing",
        optionB: "live",
        optionC: "neutral",
        correctAnswer: "earthing",
      }),
      shuffleOptions({
        question: "Rubber and plastic are examples of ______.",
        optionA: "insulators",
        optionB: "conductors",
        optionC: "circuits",
        correctAnswer: "insulators",
      }),
      shuffleOptions({
        question: "The device that controls current in a circuit is called a ______.",
        optionA: "battery",
        optionB: "switch",
        optionC: "bulb",
        correctAnswer: "switch",
      }),
      shuffleOptions({
        question: "The bulb glows because its filament gets ______.",
        optionA: "heated",
        optionB: "cooled",
        optionC: "bent",
        correctAnswer: "heated",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Electric current can pass through plastic.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The flat base of a dry cell is its positive terminal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A bulb glows only in a closed circuit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fuse is not used for safety in electric circuits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Copper wire is a good conductor of electricity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Earthing prevents electric shocks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The filament of a bulb is made of plastic.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A switch is used to open or close an electric circuit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A dry cell changes electrical energy into chemical energy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Water is a conductor of electricity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
