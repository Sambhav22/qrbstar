export const chapter = "Chapter - 5: Coal and Petroleum";
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
        question: "Which fuel was formed from dead plants buried millions of years ago?",
        optionA: "Coal",
        optionB: "Petrol",
        optionC: "Natural gas",
        correctAnswer: "Coal",
      }),
      shuffleOptions({
        question: "Which process is used to extract coal from deep beneath the earth?",
        optionA: "Refining",
        optionB: "Mining",
        optionC: "Filtering",
        correctAnswer: "Mining",
      }),
      shuffleOptions({
        question: "Which type of coal has the highest carbon content?",
        optionA: "Lignite",
        optionB: "Bituminous",
        optionC: "Anthracite",
        correctAnswer: "Anthracite",
      }),
      shuffleOptions({
        question: "Which fossil fuel is popularly called “black gold”?",
        optionA: "Coal",
        optionB: "Petroleum",
        optionC: "LPG",
        correctAnswer: "Petroleum",
      }),
      shuffleOptions({
        question: "Which product obtained from coal is used for road construction?",
        optionA: "Coal gas",
        optionB: "Coal tar",
        optionC: "Coke",
        correctAnswer: "Coal tar",
      }),
      shuffleOptions({
        question: "Which gas is the major component of natural gas?",
        optionA: "Hydrogen",
        optionB: "Methane",
        optionC: "Oxygen",
        correctAnswer: "Methane",
      }),
      shuffleOptions({
        question: "Which petroleum fraction is used for running heavy vehicles like trucks and buses?",
        optionA: "Petrol",
        optionB: "Diesel",
        optionC: "CNG",
        correctAnswer: "Diesel",
      }),
      shuffleOptions({
        question: "Which fuel is supplied to homes through pipelines?",
        optionA: "CNG",
        optionB: "PNG",
        optionC: "Kerosene",
        correctAnswer: "PNG",
      }),
      shuffleOptions({
        question: "Which petroleum product is used for making candles and shoe polish?",
        optionA: "Paraffin wax",
        optionB: "Fuel oil",
        optionC: "Bitumen",
        correctAnswer: "Paraffin wax",
      }),
      shuffleOptions({
        question: "Which gas released from burning fossil fuels contributes to global warming?",
        optionA: "Nitrogen",
        optionB: "Carbon dioxide",
        optionC: "Helium",
        correctAnswer: "Carbon dioxide",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Fossil fuels are extracted from the earth by the process of ______.",
        optionA: "refining",
        optionB: "mining",
        optionC: "distillation",
        correctAnswer: "mining",
      }),
      shuffleOptions({
        question: "Coke is a pure form of ______.",
        optionA: "sulphur",
        optionB: "carbon",
        optionC: "nitrogen",
        correctAnswer: "carbon",
      }),
      shuffleOptions({
        question: "Petroleum is separated into different components by ______ distillation.",
        optionA: "simple",
        optionB: "fractional",
        optionC: "destructive",
        correctAnswer: "fractional",
      }),
      shuffleOptions({
        question: "Bitumen is mainly used for making ______.",
        optionA: "medicines",
        optionB: "roads",
        optionC: "plastics",
        correctAnswer: "roads",
      }),
      shuffleOptions({
        question: "______ is used as a household fuel in gas stoves.",
        optionA: "LPG",
        optionB: "Diesel",
        optionC: "Coke",
        correctAnswer: "LPG",
      }),
      shuffleOptions({
        question: "Heating coal in the absence of air produces a solid residue called ______.",
        optionA: "coke",
        optionB: "coal tar",
        optionC: "coal gas",
        correctAnswer: "coke",
      }),
      shuffleOptions({
        question: "Vehicles like scooters and cars run on ______.",
        optionA: "diesel",
        optionB: "petrol",
        optionC: "kerosene",
        correctAnswer: "petrol",
      }),
      shuffleOptions({
        question: "The major component of biogas is ______.",
        optionA: "oxygen",
        optionB: "nitrogen",
        optionC: "methane",
        correctAnswer: "methane",
      }),
      shuffleOptions({
        question: "Piped natural gas is also known as ______.",
        optionA: "CNG",
        optionB: "PNG",
        optionC: "LPG",
        correctAnswer: "PNG",
      }),
      shuffleOptions({
        question: "Petroleum was formed from the remains of ______ organisms.",
        optionA: "land",
        optionB: "sea",
        optionC: "desert",
        correctAnswer: "sea",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Coal, petroleum and natural gas are all fossil fuels.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Destructive distillation of coal takes place in the presence of air.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Petroleum is a mixture of different hydrocarbons.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "LPG is commonly used as a cooking fuel in homes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Anthracite is the softest form of coal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "CNG is a cleaner fuel compared to petrol or diesel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Diesel is used to run heavy vehicles like trucks and tractors.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Burning fossil fuels releases harmful gases into the atmosphere.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Natural gas burns without producing smoke.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bitumen is used for making candles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
