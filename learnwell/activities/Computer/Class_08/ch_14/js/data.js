export const chapter = "Chapter - 14: Electric Current";
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
        question: "Which material allows electric current to pass through it easily?",
        optionA: "Rubber",
        optionB: "Copper",
        optionC: "Plastic",
        correctAnswer: "Copper",
      }),
      shuffleOptions({
        question: "Which device helps us check whether a material is a conductor or an insulator?",
        optionA: "Magnet",
        optionB: "Electric tester",
        optionC: "Thermometer",
        correctAnswer: "Electric tester",
      }),
      shuffleOptions({
        question: "Which lead of an LED must be connected to the positive terminal of a battery?",
        optionA: "Shorter lead",
        optionB: "Longer lead",
        optionC: "Either lead",
        correctAnswer: "Longer lead",
      }),
      shuffleOptions({
        question: "Which liquid will make the bulb glow when tested with a circuit?",
        optionA: "Petrol",
        optionB: "Lemon juice",
        optionC: "Kerosene",
        correctAnswer: "Lemon juice",
      }),
      shuffleOptions({
        question: "What do we call liquids that allow electric current to pass through them?",
        optionA: "Non-electrolytes",
        optionB: "Electrolytes",
        optionC: "Insulators",
        correctAnswer: "Electrolytes",
      }),
      shuffleOptions({
        question: "Which electrode receives the deposited metal during electroplating?",
        optionA: "Anode",
        optionB: "Cathode",
        optionC: "Both electrodes",
        correctAnswer: "Cathode",
      }),
      shuffleOptions({
        question: "During the electrolysis of water, which gas is released at the positive electrode?",
        optionA: "Hydrogen",
        optionB: "Oxygen",
        optionC: "Carbon dioxide",
        correctAnswer: "Oxygen",
      }),
      shuffleOptions({
        question: "Which of the following is a poor conductor of electricity?",
        optionA: "Silver",
        optionB: "Distilled water",
        optionC: "Aluminium",
        correctAnswer: "Distilled water",
      }),
      shuffleOptions({
        question: "Which solution is used to electroplate an iron object with copper?",
        optionA: "Salt solution",
        optionB: "Copper sulphate solution",
        optionC: "Sugar solution",
        correctAnswer: "Copper sulphate solution",
      }),
      shuffleOptions({
        question: "Which process deposits a thin layer of one metal onto another using electricity?",
        optionA: "Evaporation",
        optionB: "Electroplating",
        optionC: "Heating",
        correctAnswer: "Electroplating",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Materials that do not allow electric current to pass are called ______.",
        optionA: "conductors",
        optionB: "insulators",
        optionC: "solutes",
        correctAnswer: "insulators",
      }),
      shuffleOptions({
        question: "The flow of electric charge is known as ______.",
        optionA: "electric current",
        optionB: "voltage",
        optionC: "resistance",
        correctAnswer: "electric current",
      }),
      shuffleOptions({
        question: "Liquids that conduct electricity are known as ______.",
        optionA: "electrolytes",
        optionB: "vapours",
        optionC: "non-electrolytes",
        correctAnswer: "electrolytes",
      }),
      shuffleOptions({
        question: "A weak current in liquids can be detected using a ______.",
        optionA: "CFL",
        optionB: "LED",
        optionC: "magnet",
        correctAnswer: "LED",
      }),
      shuffleOptions({
        question: "During electrolysis of water, ______ gas collects at the negative electrode.",
        optionA: "hydrogen",
        optionB: "oxygen",
        optionC: "nitrogen",
        correctAnswer: "hydrogen",
      }),
      shuffleOptions({
        question: "The rod connected to the positive terminal of a battery is the ______.",
        optionA: "cathode",
        optionB: "anode",
        optionC: "electrode",
        correctAnswer: "anode",
      }),
      shuffleOptions({
        question: "Copper sulphate solution acts as an ______ during electroplating.",
        optionA: "insulator",
        optionB: "electrolyte",
        optionC: "indicator",
        correctAnswer: "electrolyte",
      }),
      shuffleOptions({
        question: "Silver plating on an object requires a ______ solution.",
        optionA: "zinc",
        optionB: "silver salt",
        optionC: "iron salt",
        correctAnswer: "silver salt",
      }),
      shuffleOptions({
        question: "Distilled water conducts electricity only when ______ is added.",
        optionA: "oil",
        optionB: "salt",
        optionC: "sugar",
        correctAnswer: "salt",
      }),
      shuffleOptions({
        question: "The arrangement containing electrolyte and electrodes is called an ______.",
        optionA: "electric bell",
        optionB: "electrolytic cell",
        optionC: "ammeter",
        correctAnswer: "electrolytic cell",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Copper is a good conductor of electricity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Distilled water is a strong conductor of electricity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The longer lead of an LED must be connected to the positive terminal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kerosene is a non-electrolyte.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Electrolysis produces chemical changes in the electrolyte.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Electroplating protects metals from rusting.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lemon juice and vinegar conduct electricity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "During electrolysis of copper sulphate, copper is deposited on the anode.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Touching an electrical appliance with wet hands increases the risk of electric shock.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Electroplating is rarely used in industries.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
