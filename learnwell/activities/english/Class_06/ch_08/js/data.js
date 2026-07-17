export const chapter = "Chapter - 8: Jack and the Beanstalk";
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
        question: "What was the name of Jack’s cow?",
        optionA: "Daisy",
        optionB: "Old Bessy",
        optionC: "Molly",
        correctAnswer: "Old Bessy",
      }),
      shuffleOptions({
        question: "Where did Jack live?",
        optionA: "Town",
        optionB: "Village",
        optionC: "Small farm",
        correctAnswer: "Small farm",
      }),
      shuffleOptions({
        question: "Who offered Jack the magical beans?",
        optionA: "A funny-looking old man",
        optionB: "A farmer",
        optionC: "A neighbour",
        correctAnswer: "A funny-looking old man",
      }),
      shuffleOptions({
        question: "Where did Jack throw the beans?",
        optionA: "In the river",
        optionB: "Out of the window",
        optionC: "In the attic",
        correctAnswer: "Out of the window",
      }),
      shuffleOptions({
        question: "What did the beanstalk look like?",
        optionA: "Ropes",
        optionB: "Ladders",
        optionC: "Walls",
        correctAnswer: "Ladders",
      }),
      shuffleOptions({
        question: "Who opened the door of the castle?",
        optionA: "Giant woman",
        optionB: "The harp",
        optionC: "Jack’s mother",
        correctAnswer: "Giant woman",
      }),
      shuffleOptions({
        question: "What food did the giant’s wife give to Jack?",
        optionA: "Bread and water",
        optionB: "Cheese and milk",
        optionC: "Eggs and meat",
        correctAnswer: "Cheese and milk",
      }),
      shuffleOptions({
        question: "Where did Jack hide when the giant entered?",
        optionA: "Under the bed",
        optionB: "In a copper pot",
        optionC: "Behind the door",
        correctAnswer: "In a copper pot",
      }),
      shuffleOptions({
        question: "What did the giant carry along with the golden eggs?",
        optionA: "Golden harp",
        optionB: "Silver coins",
        optionC: "Golden crown",
        correctAnswer: "Golden harp",
      }),
      shuffleOptions({
        question: "What did Jack use to cut down the beanstalk?",
        optionA: "Sword",
        optionB: "Axe",
        optionC: "Knife",
        correctAnswer: "Axe",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The magical beans grew into a _______.",
        optionA: "Bush",
        optionB: "Beanstalk",
        optionC: "Tree",
        correctAnswer: "Beanstalk",
      }),
      shuffleOptions({
        question: "The beanstalk reached up to the _______.",
        optionA: "Clouds",
        optionB: "Mountains",
        optionC: "Sun",
        correctAnswer: "Clouds",
      }),
      shuffleOptions({
        question: "The harp had the face of a _______.",
        optionA: "Young girl",
        optionB: "Boy",
        optionC: "Old woman",
        correctAnswer: "Young girl",
      }),
      shuffleOptions({
        question: "The giant wanted to eat boys _______ on toast.",
        optionA: "Broiled",
        optionB: "Fried",
        optionC: "Baked",
        correctAnswer: "Broiled",
      }),
      shuffleOptions({
        question: "The hen was described as _______.",
        optionA: "White and sickly",
        optionB: "Black and strong",
        optionC: "Brown and tall",
        correctAnswer: "White and sickly",
      }),
      shuffleOptions({
        question: "The harp sang a gentle _______.",
        optionA: "Poem",
        optionB: "Lullaby",
        optionC: "Hymn",
        correctAnswer: "Lullaby",
      }),
      shuffleOptions({
        question: "Jack asked his mother to bring an _______.",
        optionA: "Axe",
        optionB: "Arrow",
        optionC: "Hammer",
        correctAnswer: "Axe",
      }),
      shuffleOptions({
        question: "The giant fell down and broke his _______.",
        optionA: "Crown",
        optionB: "Leg",
        optionC: "Hand",
        correctAnswer: "Crown",
      }),
      shuffleOptions({
        question: "Jack invited all his _______ for a feast.",
        optionA: "Teachers",
        optionB: "Neighbours",
        optionC: "Friends only",
        correctAnswer: "Neighbours",
      }),
      shuffleOptions({
        question: "The harp wanted to sing in the _______ window.",
        optionA: "Castle",
        optionB: "Farmhouse",
        optionC: "Market",
        correctAnswer: "Farmhouse",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Jack sold Bessy for three coins.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The old man promised the beans would grow overnight.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Jack’s mother was very pleased to see the beans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Jack climbed up the beanstalk using vines and leaves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The giant’s wife hated Jack and wanted to harm him.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The giant smelled an Englishman when he came in.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The harp was locked in a cupboard by the giant.",
        optionA: "True",
        optionB: "False  (correct word: closet)",
        correctAnswer: "False  (correct word: closet)",
      }),
      shuffleOptions({
        question: "The hen laid golden eggs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Jack chopped the beanstalk quickly because he had experience in wood cutting.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "At the end, Jack, his mother, the hen, harp and Bessy lived happily ever after.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
