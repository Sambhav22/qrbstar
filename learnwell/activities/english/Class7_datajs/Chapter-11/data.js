export const chapter = "Chapter - 11: The Best Diwali";
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
        question: "Who gave Alok one hundred rupees for crackers?",
        optionA: "His uncle",
        optionB: "His father",
        optionC: "His mother",
        correctAnswer: "His father",
      }),
      shuffleOptions({
        question: "How many children died in the fire accident at the cracker factory?",
        optionA: "Two",
        optionB: "Three",
        optionC: "Four",
        correctAnswer: "Three",
      }),
      shuffleOptions({
        question: "Who was injured in the accident at the factory?",
        optionA: "Alok",
        optionB: "Lata",
        optionC: "Jyoti",
        correctAnswer: "Lata",
      }),
      shuffleOptions({
        question: "Who was working in the kitchen when Alok asked for water?",
        optionA: "Mother",
        optionB: "Amma (Bala)",
        optionC: "Jyoti",
        correctAnswer: "Amma (Bala)",
      }),
      shuffleOptions({
        question: "Who first suggested giving cracker money for Lata’s treatment?",
        optionA: "Roshan",
        optionB: "Alok",
        optionC: "Bhanu",
        correctAnswer: "Alok",
      }),
      shuffleOptions({
        question: "Who refused to donate money at first?",
        optionA: "Chirag",
        optionB: "Deepak",
        optionC: "Jyoti",
        correctAnswer: "Deepak",
      }),
      shuffleOptions({
        question: "How much money did Jyoti contribute?",
        optionA: "₹125",
        optionB: "₹150",
        optionC: "₹200",
        correctAnswer: "₹125",
      }),
      shuffleOptions({
        question: "Who arranged the magic show for children?",
        optionA: "Alok’s mother",
        optionB: "Alok’s father",
        optionC: "The magician",
        correctAnswer: "Alok’s father",
      }),
      shuffleOptions({
        question: "What was the name of the magician?",
        optionA: "Kanti Sarkar",
        optionB: "Roshan Lal",
        optionC: "Bhanu Prasad",
        correctAnswer: "Kanti Sarkar",
      }),
      shuffleOptions({
        question: "Who finally brought a doll for Lata?",
        optionA: "Alok",
        optionB: "Deepak",
        optionC: "Chirag",
        correctAnswer: "Deepak",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Bala was also called ______.",
        optionA: "Amma",
        optionB: "Didi",
        optionC: "Mummy",
        correctAnswer: "Amma",
      }),
      shuffleOptions({
        question: "Lata’s hands were ______.",
        optionA: "Burnt",
        optionB: "Fractured",
        optionC: "Cut",
        correctAnswer: "Burnt",
      }),
      shuffleOptions({
        question: "Amma worked in ______ houses.",
        optionA: "One",
        optionB: "Several",
        optionC: "Two",
        correctAnswer: "Several",
      }),
      shuffleOptions({
        question: "Crackers cause ______ pollution.",
        optionA: "Water",
        optionB: "Air and Noise",
        optionC: "Soil",
        correctAnswer: "Air and Noise",
      }),
      shuffleOptions({
        question: "Alok’s mother gave Amma ______ rupees.",
        optionA: "₹200",
        optionB: "₹500",
        optionC: "₹1000",
        correctAnswer: "₹500",
      }),
      shuffleOptions({
        question: "The children collected a total of ______ rupees.",
        optionA: "₹1050",
        optionB: "₹2050",
        optionC: "₹2500",
        correctAnswer: "₹2050",
      }),
      shuffleOptions({
        question: "The magic show started at ______.",
        optionA: "5 pm",
        optionB: "6 pm",
        optionC: "7 pm",
        correctAnswer: "5 pm",
      }),
      shuffleOptions({
        question: "Amma’s daughter’s name was ______.",
        optionA: "Jyoti",
        optionB: "Lata",
        optionC: "Seema",
        correctAnswer: "Lata",
      }),
      shuffleOptions({
        question: "The children celebrated Diwali without ______.",
        optionA: "Crackers",
        optionB: "Food",
        optionC: "Lights",
        correctAnswer: "Crackers",
      }),
      shuffleOptions({
        question: "The story is titled “The Best ______.”",
        optionA: "Diwali",
        optionB: "Holi",
        optionC: "Christmas",
        correctAnswer: "Diwali",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Alok was very happy with his Diwali holidays.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Lata was treated at home because there was no money for hospital.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Alok’s friends all agreed to help immediately.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Jyoti contributed ₹125 for Amma.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Deepak supported the idea of no crackers from the beginning.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The magician extended his show because of the children’s good deed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The colony was praised for being illuminated and vibrant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Children felt bored without crackers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Amma was upset only because of her salary.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The story highlights kindness and sacrifice as true celebration.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
