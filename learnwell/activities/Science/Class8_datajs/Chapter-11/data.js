export const chapter = "Chapter - 11: Force and Pressure";
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
        question: "Which action is described as moving an object away from us?",
        optionA: "Pull",
        optionB: "Twist",
        optionC: "Push",
        correctAnswer: "Push",
      }),
      shuffleOptions({
        question: "Which force acts when two surfaces rub against one another?",
        optionA: "Electrostatic force",
        optionB: "Frictional force",
        optionC: "Magnetic force",
        correctAnswer: "Frictional force",
      }),
      shuffleOptions({
        question: "Which force is applied by the movement of our body muscles?",
        optionA: "Gravitational force",
        optionB: "Muscular force",
        optionC: "Magnetic force",
        correctAnswer: "Muscular force",
      }),
      shuffleOptions({
        question: "Which force pulls all objects towards the earth?",
        optionA: "Gravitational force",
        optionB: "Electrostatic force",
        optionC: "Frictional force",
        correctAnswer: "Gravitational force",
      }),
      shuffleOptions({
        question: "Which force can act without touching an object?",
        optionA: "Contact force",
        optionB: "Non-contact force",
        optionC: "Push force",
        correctAnswer: "Non-contact force",
      }),
      shuffleOptions({
        question: "Which force is responsible for stretching or compressing a spring?",
        optionA: "Elastic force",
        optionB: "Magnetic force",
        optionC: "Muscular force",
        correctAnswer: "Elastic force",
      }),
      shuffleOptions({
        question: "Which poles of two magnets repel each other?",
        optionA: "North–South",
        optionB: "North–North",
        optionC: "South–North",
        correctAnswer: "North–North",
      }),
      shuffleOptions({
        question: "Which force slows down a moving bicycle and finally brings it to rest?",
        optionA: "Elastic force",
        optionB: "Frictional force",
        optionC: "Magnetic force",
        correctAnswer: "Frictional force",
      }),
      shuffleOptions({
        question: "Force acting per unit area is known as:",
        optionA: "Mass",
        optionB: "Pressure",
        optionC: "Volume",
        correctAnswer: "Pressure",
      }),
      shuffleOptions({
        question: "Which instrument is used to measure atmospheric pressure?",
        optionA: "Thermometer",
        optionB: "Barometer",
        optionC: "Hydrometer",
        correctAnswer: "Barometer",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A force is a ______ or pull.",
        optionA: "twist",
        optionB: "push",
        optionC: "heat",
        correctAnswer: "push",
      }),
      shuffleOptions({
        question: "The force produced by the action of muscles is called ______ force.",
        optionA: "magnetic",
        optionB: "muscular",
        optionC: "elastic",
        correctAnswer: "muscular",
      }),
      shuffleOptions({
        question: "The force between charged bodies is called ______ force.",
        optionA: "magnetic",
        optionB: "frictional",
        optionC: "electrostatic",
        correctAnswer: "electrostatic",
      }),
      shuffleOptions({
        question: "Two forces acting in the same direction ______.",
        optionA: "subtract",
        optionB: "add up",
        optionC: "cancel",
        correctAnswer: "add up",
      }),
      shuffleOptions({
        question: "A force can change the ______ of a moving object.",
        optionA: "direction",
        optionB: "smell",
        optionC: "taste",
        correctAnswer: "direction",
      }),
      shuffleOptions({
        question: "The SI unit of force is ______.",
        optionA: "joule",
        optionB: "newton",
        optionC: "watt",
        correctAnswer: "newton",
      }),
      shuffleOptions({
        question: "______ force brings an elastic object back to its original shape.",
        optionA: "Elastic",
        optionB: "Gravitational",
        optionC: "Magnetic",
        correctAnswer: "Elastic",
      }),
      shuffleOptions({
        question: "When the area decreases, pressure ______.",
        optionA: "decreases",
        optionB: "increases",
        optionC: "disappears",
        correctAnswer: "increases",
      }),
      shuffleOptions({
        question: "The weight of the air above us produces ______ pressure.",
        optionA: "liquid",
        optionB: "atmospheric",
        optionC: "balanced",
        correctAnswer: "atmospheric",
      }),
      shuffleOptions({
        question: "Pressure in liquids ______ with depth.",
        optionA: "decreases",
        optionB: "increases",
        optionC: "remains constant",
        correctAnswer: "increases",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Force can change the shape of an object.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Magnetic force is a contact force.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Equal forces in opposite directions balance each other.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Friction acts in the direction of motion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Gravity is a non-contact force.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pressure is force per unit area.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Liquids exert pressure only downward.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Air exerts pressure in all directions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Forces have both magnitude and direction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The pressure of a liquid depends on its depth and density.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
