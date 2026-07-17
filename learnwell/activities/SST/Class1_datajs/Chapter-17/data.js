export const chapter = "Chapter - 17: The Early Men";
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
        question: "Where did early men sometimes live to stay safe?",
        optionA: "Caves",
        optionB: "Schools",
        optionC: "Markets",
        correctAnswer: "Caves",
      }),
      shuffleOptions({
        question: "What did early men gather from trees to eat?",
        optionA: "Toys",
        optionB: "Fruits and nuts",
        optionC: "Stones",
        correctAnswer: "Fruits and nuts",
      }),
      shuffleOptions({
        question: "What did early men wear to protect themselves from cold?",
        optionA: "Plastic sheets",
        optionB: "Cotton clothes",
        optionC: "Animal skins",
        correctAnswer: "Animal skins",
      }),
      shuffleOptions({
        question: "What helped early men stay safe from wild animals at night?",
        optionA: "Water",
        optionB: "Fire",
        optionC: "Stones",
        correctAnswer: "Fire",
      }),
      shuffleOptions({
        question: "What did early men look like thousands of years ago?",
        optionA: "A modern human",
        optionB: "An ape",
        optionC: "A bird",
        correctAnswer: "An ape",
      }),
      shuffleOptions({
        question: "What did early men use leaves for?",
        optionA: "Making toys",
        optionB: "Making clothes",
        optionC: "Making tools",
        correctAnswer: "Making clothes",
      }),
      shuffleOptions({
        question: "What did early men eat besides fruits?",
        optionA: "Raw meat",
        optionB: "Ice cream",
        optionC: "Bread",
        correctAnswer: "Raw meat",
      }),
      shuffleOptions({
        question: "What gave early men light during dark nights?",
        optionA: "Lamps",
        optionB: "Fire",
        optionC: "Torches",
        correctAnswer: "Fire",
      }),
      shuffleOptions({
        question: "What did early men use to cover their bodies in cold weather?",
        optionA: "Feathers",
        optionB: "Animal skins",
        optionC: "Paper",
        correctAnswer: "Animal skins",
      }),
      shuffleOptions({
        question: "How did early men learn that cooked meat tastes soft and tasty?",
        optionA: "They read it in a book",
        optionB: "Someone taught them",
        optionC: "Raw meat fell into fire by accident",
        correctAnswer: "Raw meat fell into fire by accident",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Early men learnt cooking when meat fell into the ______.",
        optionA: "water",
        optionB: "fire",
        optionC: "mud",
        correctAnswer: "fire",
      }),
      shuffleOptions({
        question: "Early men wore animal ______ during cold weather.",
        optionA: "feathers",
        optionB: "skins",
        optionC: "wool",
        correctAnswer: "skins",
      }),
      shuffleOptions({
        question: "Early men gathered fruits and ______ from trees.",
        optionA: "nuts",
        optionB: "stones",
        optionC: "toys",
        correctAnswer: "nuts",
      }),
      shuffleOptions({
        question: "Fire gave early men warmth and ______.",
        optionA: "darkness",
        optionB: "light",
        optionC: "shade",
        correctAnswer: "light",
      }),
      shuffleOptions({
        question: "Early men sometimes lived on the ______ of trees.",
        optionA: "roots",
        optionB: "branches",
        optionC: "leaves",
        correctAnswer: "branches",
      }),
      shuffleOptions({
        question: "Early men did not go to ______.",
        optionA: "schools",
        optionB: "caves",
        optionC: "forests",
        correctAnswer: "schools",
      }),
      shuffleOptions({
        question: "Fire helped early men stay away from ______ animals.",
        optionA: "pet",
        optionB: "wild",
        optionC: "small",
        correctAnswer: "wild",
      }),
      shuffleOptions({
        question: "Early men ate meat in ______ form at first.",
        optionA: "cooked",
        optionB: "boiled",
        optionC: "raw",
        correctAnswer: "raw",
      }),
      shuffleOptions({
        question: "Early men lived a very ______ life.",
        optionA: "modern",
        optionB: "simple",
        optionC: "busy",
        correctAnswer: "simple",
      }),
      shuffleOptions({
        question: "Early men made clothes from leaves and ______.",
        optionA: "paper",
        optionB: "skins",
        optionC: "plastics",
        correctAnswer: "skins",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Early men sometimes lived on tree branches.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Early men gathered fruits and nuts from trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Early men used plastic to make their clothes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fire helped early men stay warm and safe.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Early men ate cooked food from the beginning.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Early men lived in forests and sometimes in caves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Early men had schools and offices.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Early men hunted animals for meat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Early men looked like modern humans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Early men discovered fire long ago.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
