export const chapter = "Chapter - 8: States of Matter";
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
        question: "What is anything that has mass and occupies space called?",
        optionA: "Air",
        optionB: "Matter",
        optionC: "Water",
        correctAnswer: "Matter",
      }),
      shuffleOptions({
        question: "Which of these is an example of a solid?",
        optionA: "Table",
        optionB: "Juice",
        optionC: "Oxygen",
        correctAnswer: "Table",
      }),
      shuffleOptions({
        question: "Which of these substances can flow easily?",
        optionA: "Stone",
        optionB: "Water",
        optionC: "Chair",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "What fills all available space in a container?",
        optionA: "Gas",
        optionB: "Liquid",
        optionC: "Solid",
        correctAnswer: "Gas",
      }),
      shuffleOptions({
        question: "What is the gaseous form of water called?",
        optionA: "Vapour",
        optionB: "Steam",
        optionC: "Cloud",
        correctAnswer: "Vapour",
      }),
      shuffleOptions({
        question: "What happens when we heat water?",
        optionA: "It freezes",
        optionB: "It changes into vapour",
        optionC: "It becomes ice",
        correctAnswer: "It changes into vapour",
      }),
      shuffleOptions({
        question: "Which gas do we breathe in?",
        optionA: "Hydrogen",
        optionB: "Oxygen",
        optionC: "Carbon dioxide",
        correctAnswer: "Oxygen",
      }),
      shuffleOptions({
        question: "Which state of matter has a fixed shape and size?",
        optionA: "Gas",
        optionB: "Solid",
        optionC: "Liquid",
        correctAnswer: "Solid",
      }),
      shuffleOptions({
        question: "Which gas is the lightest and most explosive?",
        optionA: "Oxygen",
        optionB: "Hydrogen",
        optionC: "Carbon dioxide",
        correctAnswer: "Hydrogen",
      }),
      shuffleOptions({
        question: "What happens when vapour is cooled?",
        optionA: "It changes into liquid",
        optionB: "It disappears",
        optionC: "It turns into smoke",
        correctAnswer: "It changes into liquid",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Solids have ______ shape and size.",
        optionA: "Fixed",
        optionB: "Changing",
        optionC: "Irregular",
        correctAnswer: "Fixed",
      }),
      shuffleOptions({
        question: "Liquids take the ______ of the container in which they are kept.",
        optionA: "Shape",
        optionB: "Colour",
        optionC: "Size",
        correctAnswer: "Shape",
      }),
      shuffleOptions({
        question: "Most of the ______ are invisible.",
        optionA: "Liquids",
        optionB: "Gases",
        optionC: "Solids",
        correctAnswer: "Gases",
      }),
      shuffleOptions({
        question: "Matter exists in ______ forms.",
        optionA: "Two",
        optionB: "Three",
        optionC: "Four",
        correctAnswer: "Three",
      }),
      shuffleOptions({
        question: "Water changes into vapour when it is ______.",
        optionA: "Heated",
        optionB: "Cooled",
        optionC: "Frozen",
        correctAnswer: "Heated",
      }),
      shuffleOptions({
        question: "A liquid changes into solid when it is ______.",
        optionA: "Heated",
        optionB: "Cooled",
        optionC: "Melted",
        correctAnswer: "Cooled",
      }),
      shuffleOptions({
        question: "The process of changing vapour into liquid is called ______.",
        optionA: "Freezing",
        optionB: "Condensation",
        optionC: "Melting",
        correctAnswer: "Condensation",
      }),
      shuffleOptions({
        question: "The amount of matter in an object is called its ______.",
        optionA: "Shape",
        optionB: "Mass",
        optionC: "Size",
        correctAnswer: "Mass",
      }),
      shuffleOptions({
        question: "Liquids can easily ______ from one place to another.",
        optionA: "Flow",
        optionB: "Stand",
        optionC: "Stick",
        correctAnswer: "Flow",
      }),
      shuffleOptions({
        question: "Ice changes into water on ______.",
        optionA: "Cooling",
        optionB: "Heating",
        optionC: "Boiling",
        correctAnswer: "Heating",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Solids do not have a fixed shape and size.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Liquids can flow easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gases can be seen easily with eyes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Matter can be changed from one state to another.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Vapour is the gaseous form of water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Air is made up of gases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Heating water changes it into ice.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cooling vapour changes it into liquid.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hydrogen is the heaviest gas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Liquids do not have fixed shape.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
