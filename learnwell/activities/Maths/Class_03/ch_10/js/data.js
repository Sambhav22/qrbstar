export const chapter = "Chapter - 10: Animals’ Movements";
export const noOfActivities = 3;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object;
  const optionsArray = [optionA, optionB, optionC].filter(Boolean);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];
  if (optionsArray.length > 2) {
    object.optionC = optionsArray[2];
  } else {
    delete object.optionC;
  }

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Who wriggles on the ground?",
        optionA: "Owl",
        optionB: "Spider",
        optionC: "Snake",
        correctAnswer: "Snake",
      }),
      shuffleOptions({
        question: "Who peeps at night?",
        optionA: "Owl",
        optionB: "Tiger",
        optionC: "Bird",
        correctAnswer: "Owl",
      }),
      shuffleOptions({
        question: "Which animal scuttles lightly?",
        optionA: "Rabbit",
        optionB: "Spider",
        optionC: "Frog",
        correctAnswer: "Spider",
      }),
      shuffleOptions({
        question: "Which bird spreads its wings and flies?",
        optionA: "Ostrich",
        optionB: "Crow",
        optionC: "Hedgehog",
        correctAnswer: "Crow",
      }),
      shuffleOptions({
        question: "Who rolls into a ball?",
        optionA: "Cat",
        optionB: "Dog",
        optionC: "Hedgehog",
        correctAnswer: "Hedgehog",
      }),
      shuffleOptions({
        question: "Which animal nods its head?",
        optionA: "Snake",
        optionB: "Ostrich",
        optionC: "Owl",
        correctAnswer: "Ostrich",
      }),
      shuffleOptions({
        question: "Who treads softly on the ground?",
        optionA: "Spider",
        optionB: "Horse",
        optionC: "Camel",
        correctAnswer: "Spider",
      }),
      shuffleOptions({
        question: "Who is tall in the poem?",
        optionA: "Monkey",
        optionB: "Ostrich",
        optionC: "Duck",
        correctAnswer: "Ostrich",
      }),
      shuffleOptions({
        question: "Who is awake when others are asleep?",
        optionA: "Owl",
        optionB: "Rabbit",
        optionC: "Deer",
        correctAnswer: "Owl",
      }),
      shuffleOptions({
        question: "Who are fast asleep at night in the poem?",
        optionA: "Birds",
        optionB: "Children",
        optionC: "Hedgehog",
        correctAnswer: "Children",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The snake ______ on the ground.",
        optionA: "flies",
        optionB: "wriggles",
        optionC: "peeps",
        correctAnswer: "wriggles",
      }),
      shuffleOptions({
        question: "The hedgehog is ______ and small.",
        optionA: "tall",
        optionB: "prickly",
        optionC: "sleepy",
        correctAnswer: "prickly",
      }),
      shuffleOptions({
        question: "The spider ______ around.",
        optionA: "swims",
        optionB: "scuttles",
        optionC: "nods",
        correctAnswer: "scuttles",
      }),
      shuffleOptions({
        question: "The owl ______ at night.",
        optionA: "dances",
        optionB: "peeps",
        optionC: "barks",
        correctAnswer: "peeps",
      }),
      shuffleOptions({
        question: "The ostrich stands tall and ______ his head.",
        optionA: "nods",
        optionB: "rolls",
        optionC: "wriggles",
        correctAnswer: "nods",
      }),
      shuffleOptions({
        question: "The birds spread their wings and ______.",
        optionA: "walk",
        optionB: "fly",
        optionC: "run",
        correctAnswer: "fly",
      }),
      shuffleOptions({
        question: "Children are ______ in the poem.",
        optionA: "jumping",
        optionB: "dancing",
        optionC: "asleep",
        correctAnswer: "asleep",
      }),
      shuffleOptions({
        question: "The owl is a ______ animal.",
        optionA: "sleepy",
        optionB: "nocturnal",
        optionC: "flying",
        correctAnswer: "nocturnal",
      }),
      shuffleOptions({
        question: "The hedgehog ______ itself into a ball.",
        optionA: "spreads",
        optionB: "rolls",
        optionC: "peeps",
        correctAnswer: "rolls",
      }),
      shuffleOptions({
        question: "The spider treads on the ______.",
        optionA: "sky",
        optionB: "branch",
        optionC: "ground",
        correctAnswer: "ground",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The owl peeps during the day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The snake wriggles on the ground.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The ostrich flies in the sky.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The hedgehog is tall and colourful.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The spider walks lightly on the ground.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Children are wide awake in the poem.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Birds fly high across the sky.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The owl sleeps during the night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The spider is described as prickly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The hedgehog scuttles in the sky.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;
