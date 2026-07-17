export const chapter = "Chapter - 6: Changes Around Us";
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
        question: "Which of the following changes is a natural change?",
        optionA: "Construction of roads",
        optionB: "Burning of fuel",
        optionC: "Flowering of plants",
        correctAnswer: "Flowering of plants",
      }),
      shuffleOptions({
        question: "Which changes repeat themselves after a regular interval of time?",
        optionA: "Fast changes",
        optionB: "Periodic changes",
        optionC: "Irreversible changes",
        correctAnswer: "Periodic changes",
      }),
      shuffleOptions({
        question: "What type of change is rusting of iron?",
        optionA: "Non-periodic",
        optionB: "Periodic",
        optionC: "Reversible",
        correctAnswer: "Non-periodic",
      }),
      shuffleOptions({
        question: "Which of the following is a desirable change?",
        optionA: "Spoiling of food",
        optionB: "Cooking of food",
        optionC: "Rusting of iron",
        correctAnswer: "Cooking of food",
      }),
      shuffleOptions({
        question: "What kind of change is burning of paper?",
        optionA: "Reversible",
        optionB: "Irreversible",
        optionC: "Periodic",
        correctAnswer: "Irreversible",
      }),
      shuffleOptions({
        question: "Which change takes place very slowly over a long period of time?",
        optionA: "Bursting of balloon",
        optionB: "Ripening of fruits",
        optionC: "Growing of a child",
        correctAnswer: "Growing of a child",
      }),
      shuffleOptions({
        question: "What is the name of changes in which we can get the substance back in its original form?",
        optionA: "Irreversible changes",
        optionB: "Reversible changes",
        optionC: "Periodic changes",
        correctAnswer: "Reversible changes",
      }),
      shuffleOptions({
        question: "Which of these is an example of a chemical change?",
        optionA: "Melting of wax",
        optionB: "Burning of candle",
        optionC: "Freezing of water",
        correctAnswer: "Burning of candle",
      }),
      shuffleOptions({
        question: "Which process allows iron rims to fit tightly on wooden wheels after cooling?",
        optionA: "Expansion and contraction",
        optionB: "Rusting",
        optionC: "Condensation",
        correctAnswer: "Expansion and contraction",
      }),
      shuffleOptions({
        question: "What is the process of shaping metals by heating and hammering called?",
        optionA: "Casting",
        optionB: "Forging",
        optionC: "Smelting",
        correctAnswer: "Forging",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The changes which take place on their own are called ________.",
        optionA: "Natural changes",
        optionB: "Man-made changes",
        optionC: "Physical changes",
        correctAnswer: "Natural changes",
      }),
      shuffleOptions({
        question: "The changes which do not repeat after regular intervals are called ________.",
        optionA: "Periodic changes",
        optionB: "Non-periodic changes",
        optionC: "Desirable changes",
        correctAnswer: "Non-periodic changes",
      }),
      shuffleOptions({
        question: "The changes which we want to happen are known as ________.",
        optionA: "Undesirable changes",
        optionB: "Desirable changes",
        optionC: "Physical changes",
        correctAnswer: "Desirable changes",
      }),
      shuffleOptions({
        question: "The changes which occur quickly are called ________.",
        optionA: "Slow changes",
        optionB: "Fast changes",
        optionC: "Reversible changes",
        correctAnswer: "Fast changes",
      }),
      shuffleOptions({
        question: "The changes in which a new substance is formed are called ________.",
        optionA: "Physical changes",
        optionB: "Chemical changes",
        optionC: "Reversible changes",
        correctAnswer: "Chemical changes",
      }),
      shuffleOptions({
        question: "The melting of butter on heating and freezing again on cooling is a ________ change.",
        optionA: "Reversible",
        optionB: "Irreversible",
        optionC: "Chemical",
        correctAnswer: "Reversible",
      }),
      shuffleOptions({
        question: "The process of heating and pouring molten metal into moulds is called ________.",
        optionA: "Forging",
        optionB: "Casting",
        optionC: "Welding",
        correctAnswer: "Casting",
      }),
      shuffleOptions({
        question: "A change in which no new substance is formed is known as a ________ change.",
        optionA: "Physical",
        optionB: "Chemical",
        optionC: "Periodic",
        correctAnswer: "Physical",
      }),
      shuffleOptions({
        question: "The increase in the size of an object on heating is called ________.",
        optionA: "Contraction",
        optionB: "Expansion",
        optionC: "Cooling",
        correctAnswer: "Expansion",
      }),
      shuffleOptions({
        question: "Most metals ________ on heating and ________ on cooling.",
        optionA: "Contract, expand",
        optionB: "Expand, contract",
        optionC: "Melt, freeze",
        correctAnswer: "Expand, contract",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Natural changes are those brought about by human activities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Periodic changes occur at irregular intervals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Spoiling of food is a desirable change.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Melting of ice into water is a reversible change.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Burning of a matchstick is an irreversible change.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Expansion of metals occurs on cooling.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Heating and hammering metals to shape them is called forging.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Physical changes form new substances.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rusting of iron is a chemical change.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Contraction is the decrease in size of a substance when cooled.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
