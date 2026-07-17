export const chapter = "Chapter - 5: The Necklace";
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
        question: "What was Loisel’s occupation?",
        optionA: "Teacher",
        optionB: "Clerk",
        optionC: "Doctor",
        correctAnswer: "Clerk",
      }),
      shuffleOptions({
        question: "Mathilde felt she was born for –",
        optionA: "Simplicity",
        optionB: "Luxury",
        optionC: "Hardship",
        correctAnswer: "Luxury",
      }),
      shuffleOptions({
        question: "How much was the replacement necklace worth?",
        optionA: "40,000 francs",
        optionB: "36,000 francs",
        optionC: "500 francs",
        correctAnswer: "36,000 francs",
      }),
      shuffleOptions({
        question: "Who specially noticed Mathilde at the ball?",
        optionA: "The minister",
        optionB: "A servant",
        optionC: "No one",
        correctAnswer: "The minister",
      }),
      shuffleOptions({
        question: "What did Mathilde do when she first wore the necklace?",
        optionA: "Kept it in a box",
        optionB: "Admired herself in the mirror",
        optionC: "Hid it from her husband",
        correctAnswer: "Admired herself in the mirror",
      }),
      shuffleOptions({
        question: "Who suggested Mathilde should borrow jewellery?",
        optionA: "Her husband",
        optionB: "Her sister",
        optionC: "Her neighbour",
        correctAnswer: "Her husband",
      }),
      shuffleOptions({
        question: "For how much could the jeweller buy the necklace back later?",
        optionA: "34,000 francs",
        optionB: "36,000 francs",
        optionC: "18,000 francs",
        correctAnswer: "34,000 francs",
      }),
      shuffleOptions({
        question: "Where did Mathilde and her husband shift after their loss?",
        optionA: "To a garret",
        optionB: "To a mansion",
        optionC: "To the countryside",
        correctAnswer: "To a garret",
      }),
      shuffleOptions({
        question: "After ten years of hardship, Mathilde looked –",
        optionA: "Old and rough",
        optionB: "Young and graceful",
        optionC: "Still charming",
        correctAnswer: "Old and rough",
      }),
      shuffleOptions({
        question: "What was the shocking truth revealed by Madame Forestier?",
        optionA: "The necklace was imitation",
        optionB: "It was gold",
        optionC: "It was stolen",
        correctAnswer: "The necklace was imitation",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mathilde dreamed of fine ________.",
        optionA: "Clothes",
        optionB: "Horses",
        optionC: "Cars",
        correctAnswer: "Clothes",
      }),
      shuffleOptions({
        question: "The invitation was from the Minister of ________.",
        optionA: "Defence",
        optionB: "Public Instruction",
        optionC: "Health",
        correctAnswer: "Public Instruction",
      }),
      shuffleOptions({
        question: "Loisel gave Mathilde ________ francs for her gown.",
        optionA: "200",
        optionB: "400",
        optionC: "500",
        correctAnswer: "400",
      }),
      shuffleOptions({
        question: "At the ball, Mathilde felt filled with ________.",
        optionA: "Anger",
        optionB: "Fear",
        optionC: "Ecstasy",
        correctAnswer: "Ecstasy",
      }),
      shuffleOptions({
        question: "Loisel searched the entire ________ for the lost necklace.",
        optionA: "Route",
        optionB: "Garden",
        optionC: "Shop",
        correctAnswer: "Route",
      }),
      shuffleOptions({
        question: "They finally found a necklace worth ________ francs.",
        optionA: "36,000",
        optionB: "34,000",
        optionC: "500",
        correctAnswer: "36,000",
      }),
      shuffleOptions({
        question: "Mathilde and her husband rented a ________ under the roof.",
        optionA: "Cottage",
        optionB: "Garret",
        optionC: "Hall",
        correctAnswer: "Garret",
      }),
      shuffleOptions({
        question: "After years of hardship, Mathilde’s hands became ________.",
        optionA: "Red",
        optionB: "Soft",
        optionC: "White",
        correctAnswer: "Red",
      }),
      shuffleOptions({
        question: "Mathilde met Madame Forestier again after ________ years.",
        optionA: "5",
        optionB: "10",
        optionC: "15",
        correctAnswer: "10",
      }),
      shuffleOptions({
        question: "The real necklace was worth only ________ francs.",
        optionA: "500",
        optionB: "400",
        optionC: "36,000",
        correctAnswer: "500",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mathilde’s husband was very rich.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mathilde always felt satisfied with her life.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The invitation was for a ministerial ball.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mathilde cried because she had no gown to wear.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Loisel suggested borrowing jewellery from Forestier.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The necklace was later found in the cab.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Loisel used his inheritance to buy part of the necklace.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mathilde did not dismiss her servant after the loss.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Madame Forestier recognised Mathilde immediately.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The story ends with irony.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
