export const chapter = "Chapter - 1: The Lost Memory";
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
        question: "Where was Neel’s house located?",
        optionA: "At the end of a busy street",
        optionB: "In the middle of the market",
        optionC: "Near the railway station",
        correctAnswer: "At the end of a busy street",
      }),
      shuffleOptions({
        question: "Who looked after Sapna’s hair with great care?",
        optionA: "Her mother",
        optionB: "Ajji",
        optionC: "Heena",
        correctAnswer: "Ajji",
      }),
      shuffleOptions({
        question: "What did Ajji regularly do in the courtyard?",
        optionA: "Painted walls",
        optionB: "Cleaned and watered the plants",
        optionC: "Fed dogs",
        correctAnswer: "Cleaned and watered the plants",
      }),
      shuffleOptions({
        question: "What did Sapna call her haircut decision?",
        optionA: "A fashion statement",
        optionB: "Her own affair",
        optionC: "A family rule",
        correctAnswer: "Her own affair",
      }),
      shuffleOptions({
        question: "What did morning walkers proudly display?",
        optionA: "Cats",
        optionB: "Dogs",
        optionC: "Parrots",
        correctAnswer: "Dogs",
      }),
      shuffleOptions({
        question: "What fell on Ajji’s bun?",
        optionA: "A stone",
        optionB: "A coconut",
        optionC: "A fruit basket",
        correctAnswer: "A coconut",
      }),
      shuffleOptions({
        question: "Who rushed to call his mother when Ajji lay down?",
        optionA: "Neel",
        optionB: "Sapna",
        optionC: "Heena",
        correctAnswer: "Neel",
      }),
      shuffleOptions({
        question: "Who was the doctor called to examine Ajji?",
        optionA: "Dr. Vasu",
        optionB: "Dr. Saran",
        optionC: "Dr. Rao",
        correctAnswer: "Dr. Saran",
      }),
      shuffleOptions({
        question: "Who tried to take advantage of Ajji’s “memory loss”?",
        optionA: "Heena",
        optionB: "Sapna",
        optionC: "The milkman",
        correctAnswer: "The milkman",
      }),
      shuffleOptions({
        question: "In the end, what did the family decide to follow?",
        optionA: "Modern noisy life",
        optionB: "Old peaceful way of life",
        optionC: "Foreign lifestyle",
        correctAnswer: "Old peaceful way of life",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ajji’s house was the only one left with a ______.",
        optionA: "garden",
        optionB: "terrace",
        optionC: "garage",
        correctAnswer: "garden",
      }),
      shuffleOptions({
        question: "The builders offered Ajji’s sons ______ sums of money.",
        optionA: "small",
        optionB: "handsome",
        optionC: "fixed",
        correctAnswer: "handsome",
      }),
      shuffleOptions({
        question: "Sapna stomped away when Ajji refused her ______.",
        optionA: "haircut",
        optionB: "holiday",
        optionC: "new clothes",
        correctAnswer: "haircut",
      }),
      shuffleOptions({
        question: "Ajji told Sapna that rights are for those who can ______ right from wrong.",
        optionA: "distinguish",
        optionB: "copy",
        optionC: "avoid",
        correctAnswer: "distinguish",
      }),
      shuffleOptions({
        question: "During Ajji’s memory loss, children’s ______ remained half done.",
        optionA: "homework",
        optionB: "play",
        optionC: "exams",
        correctAnswer: "homework",
      }),
      shuffleOptions({
        question: "Pop music caused ______ to the grown-ups.",
        optionA: "joy",
        optionB: "headaches",
        optionC: "silence",
        correctAnswer: "headaches",
      }),
      shuffleOptions({
        question: "The television kept ______ soaps after soaps.",
        optionA: "blaring",
        optionB: "switched off",
        optionC: "broken",
        correctAnswer: "blaring",
      }),
      shuffleOptions({
        question: "Heena declared the family needed ______ again.",
        optionA: "peace",
        optionB: "wealth",
        optionC: "shopping",
        correctAnswer: "peace",
      }),
      shuffleOptions({
        question: "The milkman demanded fifty rupees ______.",
        optionA: "extra",
        optionB: "less",
        optionC: "advance",
        correctAnswer: "extra",
      }),
      shuffleOptions({
        question: "Ajji finally admitted she had never lost her ______.",
        optionA: "temper",
        optionB: "memory",
        optionC: "strength",
        correctAnswer: "memory",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Neel’s courtyard was full of birds and squirrels.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ajji happily agreed to sell her house to the builders.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sapna openly rebelled against Ajji.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ajji truly suffered permanent memory loss.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Heena supported modern noisy life till the end.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ajji enjoyed pop music during her “memory loss.”",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The family felt peaceful with modern lifestyle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The milkman’s name was Vasu.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ajji scolded the milkman for lying.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In the end, everyone agreed to live the traditional way.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
