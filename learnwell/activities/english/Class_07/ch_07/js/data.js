export const chapter = "Chapter - 7: Mother and Daughter";
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
        question: "Who wore butterfly-shaped glasses?",
        optionA: "Yollie",
        optionB: "Mrs. Moreno",
        optionC: "Shivani",
        correctAnswer: "Mrs. Moreno",
      }),
      shuffleOptions({
        question: "Where did Yollie’s mother tiptoe after the movie?",
        optionA: "Kitchen",
        optionB: "Bed",
        optionC: "Balcony",
        correctAnswer: "Bed",
      }),
      shuffleOptions({
        question: "Who thought Mrs. Moreno could go into show business?",
        optionA: "The nuns",
        optionB: "Raul",
        optionC: "The neighbours",
        correctAnswer: "Raul",
      }),
      shuffleOptions({
        question: "What colour dye was used for Yollie’s dress?",
        optionA: "Blue",
        optionB: "Red",
        optionC: "Black",
        correctAnswer: "Black",
      }),
      shuffleOptions({
        question: "What food did Mrs. Moreno prepare to break the ice?",
        optionA: "Tortillas and chile verde",
        optionB: "Rice and beans",
        optionC: "Burgers",
        correctAnswer: "Tortillas and chile verde",
      }),
      shuffleOptions({
        question: "Where did Mrs. Moreno keep her secret money?",
        optionA: "Drawer",
        optionB: "Tin box",
        optionC: "Purse",
        correctAnswer: "Tin box",
      }),
      shuffleOptions({
        question: "What was Yollie captain of?",
        optionA: "Football",
        optionB: "Basketball",
        optionC: "Tennis",
        correctAnswer: "Basketball",
      }),
      shuffleOptions({
        question: "What did Yollie spray on her neck before the dance?",
        optionA: "Water",
        optionB: "Perfume",
        optionC: "Soap",
        correctAnswer: "Perfume",
      }),
      shuffleOptions({
        question: "Who hires people at the county fair?",
        optionA: "Teachers",
        optionB: "The fair authorities",
        optionC: "Neighbours",
        correctAnswer: "The fair authorities",
      }),
      shuffleOptions({
        question: "Where did Mrs. Moreno finally buy clothes for Yollie?",
        optionA: "Charity shop",
        optionB: "Macy’s",
        optionC: "Local market",
        correctAnswer: "Macy’s",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Yollie fell asleep on the ______.",
        optionA: "Bed",
        optionB: "Couch",
        optionC: "Floor",
        correctAnswer: "Couch",
      }),
      shuffleOptions({
        question: "Mrs. Moreno encouraged Yollie to study to become a ______.",
        optionA: "Teacher",
        optionB: "Doctor",
        optionC: "Singer",
        correctAnswer: "Doctor",
      }),
      shuffleOptions({
        question: "Mrs. Moreno’s family came from ______.",
        optionA: "Mexico",
        optionB: "Spain",
        optionC: "Cuba",
        correctAnswer: "Mexico",
      }),
      shuffleOptions({
        question: "The fall dance was in the month of ______.",
        optionA: "October",
        optionB: "December",
        optionC: "January",
        correctAnswer: "October",
      }),
      shuffleOptions({
        question: "A puddle of ______ formed at Yollie’s feet.",
        optionA: "Ink",
        optionB: "Dye",
        optionC: "Water",
        correctAnswer: "Dye",
      }),
      shuffleOptions({
        question: "Yollie stomped off to her ______ after the dance.",
        optionA: "Mother’s room",
        optionB: "Bedroom",
        optionC: "Kitchen",
        correctAnswer: "Bedroom",
      }),
      shuffleOptions({
        question: "The rain mixed with Yollie’s ______ as she ran home.",
        optionA: "Tears",
        optionB: "Sweat",
        optionC: "Perfume",
        correctAnswer: "Tears",
      }),
      shuffleOptions({
        question: "The county fair was to be held the next ______.",
        optionA: "Month",
        optionB: "Week",
        optionC: "Day",
        correctAnswer: "Week",
      }),
      shuffleOptions({
        question: "Mrs. Moreno called plants her ______.",
        optionA: "Children",
        optionB: "Friends",
        optionC: "Students",
        correctAnswer: "Children",
      }),
      shuffleOptions({
        question: "Mrs. Moreno’s brother Raul was a ______ owner.",
        optionA: "Shop",
        optionB: "Nightclub",
        optionC: "Garage",
        correctAnswer: "Nightclub",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Yollie was one of the dullest students in school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The dance was held in December.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Yollie’s dress dye washed away in the rain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Yollie bought her new dress with her pocket money.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mrs. Moreno saved money secretly for Yollie.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Raul owned a nightclub.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The nuns never laughed at Mrs. Moreno.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mrs. Moreno once left Yollie asleep on the couch.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The old car was in perfect condition.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mrs. Moreno cooked tortillas and chile verde.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
