export const chapter = "Chapter - 8: Force and Energy";
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
        question: "Which scientist first explained the force of gravity after observing a falling apple?",
        optionA: "Galileo",
        optionB: "Newton",
        optionC: "Archimedes",
        correctAnswer: "Newton",
      }),
      shuffleOptions({
        question: "Which type of force acts when two objects rub against each other?",
        optionA: "Frictional",
        optionB: "Magnetic",
        optionC: "Gravitational",
        correctAnswer: "Frictional",
      }),
      shuffleOptions({
        question: "Which force pulls every object towards the centre of the Earth?",
        optionA: "Gravitational",
        optionB: "Muscular",
        optionC: "Electrostatic",
        correctAnswer: "Gravitational",
      }),
      shuffleOptions({
        question: "Which force helps us to kick a football or open a door?",
        optionA: "Muscular",
        optionB: "Magnetic",
        optionC: "Elastic",
        correctAnswer: "Muscular",
      }),
      shuffleOptions({
        question: "Which form of energy is possessed by a moving car?",
        optionA: "Potential",
        optionB: "Kinetic",
        optionC: "Heat",
        correctAnswer: "Kinetic",
      }),
      shuffleOptions({
        question: "Which simple machine helps to draw water from a well?",
        optionA: "Pulley",
        optionB: "Lever",
        optionC: "Screw",
        correctAnswer: "Pulley",
      }),
      shuffleOptions({
        question: "Which form of energy do we get from the Sun?",
        optionA: "Light",
        optionB: "Sound",
        optionC: "Electrical",
        correctAnswer: "Light",
      }),
      shuffleOptions({
        question: "Which simple machine has a bar resting on a turning point?",
        optionA: "Lever",
        optionB: "Wedge",
        optionC: "Pulley",
        correctAnswer: "Lever",
      }),
      shuffleOptions({
        question: "Which simple machine is used for cutting wood or apples?",
        optionA: "Wedge",
        optionB: "Screw",
        optionC: "Wheel and axle",
        correctAnswer: "Wedge",
      }),
      shuffleOptions({
        question: "Which form of energy makes things visible to us?",
        optionA: "Light",
        optionB: "Heat",
        optionC: "Sound",
        correctAnswer: "Light",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A force is a ________ or ________ on an object.",
        optionA: "Push, Pull",
        optionB: "Throw, Catch",
        optionC: "Lift, Drop",
        correctAnswer: "Push, Pull",
      }),
      shuffleOptions({
        question: "Friction acts in the ________ direction of motion.",
        optionA: "Opposite",
        optionB: "Same",
        optionC: "Upward",
        correctAnswer: "Opposite",
      }),
      shuffleOptions({
        question: "Work is said to be done when a ________ moves an object.",
        optionA: "Force",
        optionB: "Sound",
        optionC: "Light",
        correctAnswer: "Force",
      }),
      shuffleOptions({
        question: "Energy is the ________ to do work.",
        optionA: "Ability",
        optionB: "Power",
        optionC: "Interest",
        correctAnswer: "Ability",
      }),
      shuffleOptions({
        question: "Energy possessed by an object due to motion is called ________ energy.",
        optionA: "Kinetic",
        optionB: "Potential",
        optionC: "Solar",
        correctAnswer: "Kinetic",
      }),
      shuffleOptions({
        question: "Energy possessed by an object due to its position is called ________ energy.",
        optionA: "Potential",
        optionB: "Heat",
        optionC: "Chemical",
        correctAnswer: "Potential",
      }),
      shuffleOptions({
        question: "The point on which a lever turns is called the ________.",
        optionA: "Fulcrum",
        optionB: "Effort",
        optionC: "Load",
        correctAnswer: "Fulcrum",
      }),
      shuffleOptions({
        question: "A ________ is an inclined plane wrapped around a rod.",
        optionA: "Screw",
        optionB: "Wedge",
        optionC: "Pulley",
        correctAnswer: "Screw",
      }),
      shuffleOptions({
        question: "The magnetic force acts on ________, nickel and cobalt.",
        optionA: "Iron",
        optionB: "Aluminium",
        optionC: "Copper",
        correctAnswer: "Iron",
      }),
      shuffleOptions({
        question: "Simple machines help to ________ our effort.",
        optionA: "Reduce",
        optionB: "Increase",
        optionC: "Stop",
        correctAnswer: "Reduce",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Force can change the speed or direction of a moving object.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gravity is a contact force.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Friction helps us to walk without slipping.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Work is done only when an object moves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Energy can neither be created nor destroyed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Muscular force acts without contact.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A nut-cracker is a second-class lever.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The head of an axe is a wedge.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A pulley is used to lift heavy loads.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Light travels in a straight line.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
