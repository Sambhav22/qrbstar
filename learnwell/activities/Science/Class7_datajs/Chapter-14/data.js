export const chapter = "Chapter - 14: Electric Current and Its Effect";
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
        question: "Who invented the electric bulb after many experiments with filaments?",
        optionA: "Thomas Alva Edison",
        optionB: "Isaac Newton",
        optionC: "Benjamin Franklin",
        correctAnswer: "Thomas Alva Edison",
      }),
      shuffleOptions({
        question: "Which part of an electric bulb is made of tungsten?",
        optionA: "Filament",
        optionB: "Base",
        optionC: "Glass cover",
        correctAnswer: "Filament",
      }),
      shuffleOptions({
        question: "What is the function of a switch in an electric circuit?",
        optionA: "To open or close the circuit",
        optionB: "To produce heat",
        optionC: "To supply electricity",
        correctAnswer: "To open or close the circuit",
      }),
      shuffleOptions({
        question: "What is the unit of electric current?",
        optionA: "Ampere",
        optionB: "Volt",
        optionC: "Ohm",
        correctAnswer: "Ampere",
      }),
      shuffleOptions({
        question: "Which device protects appliances from damage when current exceeds the safe limit?",
        optionA: "Fuse",
        optionB: "Battery",
        optionC: "Cell",
        correctAnswer: "Fuse",
      }),
      shuffleOptions({
        question: "Who discovered the magnetic effect of electric current?",
        optionA: "Hans Christian Oersted",
        optionB: "Michael Faraday",
        optionC: "Charles Coulomb",
        correctAnswer: "Hans Christian Oersted",
      }),
      shuffleOptions({
        question: "Which magnet loses its magnetism when the current is switched off?",
        optionA: "Electromagnet",
        optionB: "Permanent magnet",
        optionC: "Bar magnet",
        correctAnswer: "Electromagnet",
      }),
      shuffleOptions({
        question: "Which appliance works on the heating effect of electric current?",
        optionA: "Electric iron",
        optionB: "Fan",
        optionC: "Refrigerator",
        correctAnswer: "Electric iron",
      }),
      shuffleOptions({
        question: "What does MCB stand for?",
        optionA: "Miniature Circuit Breaker",
        optionB: "Mechanical Control Box",
        optionC: "Magnetic Circuit Board",
        correctAnswer: "Miniature Circuit Breaker",
      }),
      shuffleOptions({
        question: "Which material is a bad conductor of electricity but a good conductor of heat?",
        optionA: "Mica",
        optionB: "Copper",
        optionC: "Silver",
        correctAnswer: "Mica",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The path through which electric current flows is called a ______.",
        optionA: "circuit",
        optionB: "magnet",
        optionC: "solenoid",
        correctAnswer: "circuit",
      }),
      shuffleOptions({
        question: "A battery is formed by combining more than one ______.",
        optionA: "cell",
        optionB: "bulb",
        optionC: "wire",
        correctAnswer: "cell",
      }),
      shuffleOptions({
        question: "The filament of an electric bulb is made up of ______.",
        optionA: "tungsten",
        optionB: "nichrome",
        optionC: "copper",
        correctAnswer: "tungsten",
      }),
      shuffleOptions({
        question: "An electric iron contains a coil of wire called an ______.",
        optionA: "element",
        optionB: "armature",
        optionC: "switch",
        correctAnswer: "element",
      }),
      shuffleOptions({
        question: "A ______ is used to protect electrical appliances from overloading.",
        optionA: "fuse",
        optionB: "bulb",
        optionC: "battery",
        correctAnswer: "fuse",
      }),
      shuffleOptions({
        question: "The process of current producing magnetism is called the ______ of electric current.",
        optionA: "magnetic effect",
        optionB: "heating effect",
        optionC: "chemical effect",
        correctAnswer: "magnetic effect",
      }),
      shuffleOptions({
        question: "An electromagnet loses its magnetism when the current is ______.",
        optionA: "switched off",
        optionB: "increased",
        optionC: "reversed",
        correctAnswer: "switched off",
      }),
      shuffleOptions({
        question: "The deflection of a magnetic needle occurs due to the ______ of electric current.",
        optionA: "magnetic effect",
        optionB: "heating effect",
        optionC: "flow of air",
        correctAnswer: "magnetic effect",
      }),
      shuffleOptions({
        question: "______ lamps consume less electricity and produce less heat than filament bulbs.",
        optionA: "CFL",
        optionB: "Halogen",
        optionC: "Neon",
        correctAnswer: "CFL",
      }),
      shuffleOptions({
        question: "A ______ diagram shows the circuit with symbols of its components.",
        optionA: "circuit",
        optionB: "energy",
        optionC: "flow",
        correctAnswer: "circuit",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The direction of current in a circuit is taken from positive to negative terminal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Copper wires are used as connecting wires because they are good conductors.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The heating effect of current is used in bulbs and electric heaters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A fuse wire melts when excessive current flows through it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "MCBs cannot be reused once they trip.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "When the switch is open, the circuit is incomplete.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Soft iron is used for making electromagnets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Electricity can be converted into heat, light and magnetic energy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Touching electrical appliances with wet hands is safe.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The working of an electric bell is based on electromagnetism.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
