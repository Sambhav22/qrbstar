export const chapter = "Chapter - 12: The Brat";
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
        question: "Who was called “the Brat”?",
        optionA: "Roshan",
        optionB: "Ankur",
        optionC: "Bhushan",
        correctAnswer: "Ankur",
      }),
      shuffleOptions({
        question: "Who noticed Ankur’s misbehaviour?",
        optionA: "Teacher",
        optionB: "Mother",
        optionC: "Father",
        correctAnswer: "Mother",
      }),
      shuffleOptions({
        question: "Which month was Ankur admitted to Class I?",
        optionA: "March",
        optionB: "April",
        optionC: "May",
        correctAnswer: "April",
      }),
      shuffleOptions({
        question: "Who became Ankur’s first friend in school?",
        optionA: "Rohit",
        optionB: "Bhushan",
        optionC: "Roshan",
        correctAnswer: "Bhushan",
      }),
      shuffleOptions({
        question: "Who asked the class to clap for Ankur?",
        optionA: "His mother",
        optionB: "Teacher",
        optionC: "Bhushan",
        correctAnswer: "Teacher",
      }),
      shuffleOptions({
        question: "What did Ankur love the most?",
        optionA: "Cartoons",
        optionB: "Cricket",
        optionC: "Sweets",
        correctAnswer: "Cartoons",
      }),
      shuffleOptions({
        question: "What did Ankur call Bhushan after the test?",
        optionA: "Dumb",
        optionB: "Clever",
        optionC: "Brilliant",
        correctAnswer: "Dumb",
      }),
      shuffleOptions({
        question: "Who told Ankur the bee–dove story?",
        optionA: "Teacher",
        optionB: "Nalini",
        optionC: "Bhushan",
        correctAnswer: "Nalini",
      }),
      shuffleOptions({
        question: "What punishment did Ankur get?",
        optionA: "Stand in corner",
        optionB: "Pick papers",
        optionC: "Miss games",
        correctAnswer: "Pick papers",
      }),
      shuffleOptions({
        question: "Who helped Ankur during his punishment?",
        optionA: "Teacher",
        optionB: "Bhushan",
        optionC: "Other students",
        correctAnswer: "Bhushan",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ankur was not yet ______ years old.",
        optionA: "five",
        optionB: "six",
        optionC: "seven",
        correctAnswer: "five",
      }),
      shuffleOptions({
        question: "His parents gave him all ______ he asked for.",
        optionA: "punishments",
        optionB: "facilities",
        optionC: "sweets",
        correctAnswer: "facilities",
      }),
      shuffleOptions({
        question: "Bhushan’s father had been ______ to the city.",
        optionA: "shifted",
        optionB: "transferred",
        optionC: "moved",
        correctAnswer: "transferred",
      }),
      shuffleOptions({
        question: "Ankur scored extremely ______ in the unit test.",
        optionA: "poorly",
        optionB: "well",
        optionC: "badly",
        correctAnswer: "well",
      }),
      shuffleOptions({
        question: "Bhushan did not ______ Ankur’s bossy behaviour.",
        optionA: "ignore",
        optionB: "mind",
        optionC: "like",
        correctAnswer: "mind",
      }),
      shuffleOptions({
        question: "A dove threw a ______ into the water.",
        optionA: "stick",
        optionB: "leaf",
        optionC: "stone",
        correctAnswer: "leaf",
      }),
      shuffleOptions({
        question: "The bee stung the hunter on his ______.",
        optionA: "arm",
        optionB: "leg",
        optionC: "hand",
        correctAnswer: "arm",
      }),
      shuffleOptions({
        question: "The teacher asked Ankur to pick up ______ after school.",
        optionA: "toys",
        optionB: "waste papers",
        optionC: "books",
        correctAnswer: "waste papers",
      }),
      shuffleOptions({
        question: "Students ______ at Ankur when he was punished.",
        optionA: "clapped",
        optionB: "jeered",
        optionC: "smiled",
        correctAnswer: "jeered",
      }),
      shuffleOptions({
        question: "In the end, Ankur became a ______ boy.",
        optionA: "selfish",
        optionB: "well-behaved",
        optionC: "brat",
        correctAnswer: "well-behaved",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ankur’s parents never refused him anything.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bhushan minded Ankur’s bossy behaviour a lot.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Nalini told a story of the crow and the pitcher.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ankur first refused to help Bhushan.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bhushan improved in the next test.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The punishment was to clean the blackboard.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ankur felt embarrassed when others jeered at him.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bhushan left Ankur alone during his punishment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ankur later explained the meaning of the story to Bhushan.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Finally, Ankur made many friends.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
