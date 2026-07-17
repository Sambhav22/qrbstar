export const chapter = "Chapter - 12: Force, Work and Energy";
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
        question: "What is a push or a pull acting on an object called?",
        optionA: "Energy",
        optionB: "Force",
        optionC: "Work",
        correctAnswer: "Force",
      }),
      shuffleOptions({
        question: "Which force pulls everything towards the centre of the Earth?",
        optionA: "Magnetic",
        optionB: "Gravitational",
        optionC: "Frictional",
        correctAnswer: "Gravitational",
      }),
      shuffleOptions({
        question: "Who discovered the law of gravity?",
        optionA: "Galileo",
        optionB: "Isaac Newton",
        optionC: "Archimedes",
        correctAnswer: "Isaac Newton",
      }),
      shuffleOptions({
        question: "Which force helps us to walk without slipping?",
        optionA: "Frictional",
        optionB: "Gravitational",
        optionC: "Magnetic",
        correctAnswer: "Frictional",
      }),
      shuffleOptions({
        question: "Which simple machine is used to draw water from a well?",
        optionA: "Pulley",
        optionB: "Lever",
        optionC: "Wedge",
        correctAnswer: "Pulley",
      }),
      shuffleOptions({
        question: "Which simple machine is used to cut or split objects?",
        optionA: "Screw",
        optionB: "Wedge",
        optionC: "Inclined plane",
        correctAnswer: "Wedge",
      }),
      shuffleOptions({
        question: "What happens when you push a wall and it does not move?",
        optionA: "Work is done",
        optionB: "No work is done",
        optionC: "Force increases",
        correctAnswer: "No work is done",
      }),
      shuffleOptions({
        question: "Which form of energy is stored in a stretched rubber band?",
        optionA: "Kinetic",
        optionB: "Potential",
        optionC: "Heat",
        correctAnswer: "Potential",
      }),
      shuffleOptions({
        question: "Which form of energy helps us to move and do physical work?",
        optionA: "Muscular",
        optionB: "Solar",
        optionC: "Chemical",
        correctAnswer: "Muscular",
      }),
      shuffleOptions({
        question: "Which energy do we get from the Sun?",
        optionA: "Solar",
        optionB: "Heat",
        optionC: "Electrical",
        correctAnswer: "Solar",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A push or a pull acting on an object is called ______.",
        optionA: "Work",
        optionB: "Energy",
        optionC: "Force",
        correctAnswer: "Force",
      }),
      shuffleOptions({
        question: "The force that pulls objects towards the Earth is called ______.",
        optionA: "Gravity",
        optionB: "Friction",
        optionC: "Pressure",
        correctAnswer: "Gravity",
      }),
      shuffleOptions({
        question: "The rubbing force between two surfaces is called ______.",
        optionA: "Friction",
        optionB: "Pull",
        optionC: "Gravity",
        correctAnswer: "Friction",
      }),
      shuffleOptions({
        question: "Work is done when an object moves through a ______.",
        optionA: "Distance",
        optionB: "Height",
        optionC: "Shape",
        correctAnswer: "Distance",
      }),
      shuffleOptions({
        question: "A ______ is used to lift or open things.",
        optionA: "Lever",
        optionB: "Pulley",
        optionC: "Wedge",
        correctAnswer: "Lever",
      }),
      shuffleOptions({
        question: "A ______ is used to hold things together.",
        optionA: "Screw",
        optionB: "Lever",
        optionC: "Pulley",
        correctAnswer: "Screw",
      }),
      shuffleOptions({
        question: "A ______ has a sharp edge on one side and a blunt on the other.",
        optionA: "Wedge",
        optionB: "Pulley",
        optionC: "Screw",
        correctAnswer: "Wedge",
      }),
      shuffleOptions({
        question: "Energy is the ability to do ______.",
        optionA: "Work",
        optionB: "Push",
        optionC: "Movement",
        correctAnswer: "Work",
      }),
      shuffleOptions({
        question: "The energy due to motion of an object is called ______ energy.",
        optionA: "Kinetic",
        optionB: "Potential",
        optionC: "Heat",
        correctAnswer: "Kinetic",
      }),
      shuffleOptions({
        question: "The energy stored because of height or position is called ______ energy.",
        optionA: "Potential",
        optionB: "Chemical",
        optionC: "Electrical",
        correctAnswer: "Potential",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Force can move, stop, or change the direction of an object.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Friction helps us in walking.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gravitational force pushes objects away from Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Work is done even when an object does not move.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A machine is a tool that makes our work easier.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pulley and lever are examples of simple machines.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kinetic energy is the energy of motion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Sun gives us heat and light energy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Friction always helps objects move faster.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Sun is the ultimate source of energy on Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
