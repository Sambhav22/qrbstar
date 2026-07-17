export const chapter = "Chapter - 12: The Nightingale and the Rose";
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
        question: "Who is the author of The Nightingale and the Rose?",
        optionA: "Oscar Wilde",
        optionB: "Charles Dickens",
        optionC: "William Wordsworth",
        correctAnswer: "Oscar Wilde",
      }),
      shuffleOptions({
        question: "What colour were the roses of the first Rose-tree?",
        optionA: "White",
        optionB: "Yellow",
        optionC: "Red",
        correctAnswer: "White",
      }),
      shuffleOptions({
        question: "The Student’s face was compared to which object?",
        optionA: "Marble",
        optionB: "Pale ivory",
        optionC: "Snow",
        correctAnswer: "Pale ivory",
      }),
      shuffleOptions({
        question: "Who was giving the ball in the story?",
        optionA: "The Prince",
        optionB: "The Student",
        optionC: "The Oak-tree",
        correctAnswer: "The Prince",
      }),
      shuffleOptions({
        question: "Where were the musicians to sit during the ball?",
        optionA: "Balcony",
        optionB: "Gallery",
        optionC: "Courtyard",
        correctAnswer: "Gallery",
      }),
      shuffleOptions({
        question: "The courtiers would throng round the girl in what kind of dresses?",
        optionA: "Red robes",
        optionB: "Gay dresses",
        optionC: "White gowns",
        correctAnswer: "Gay dresses",
      }),
      shuffleOptions({
        question: "Who laughed outright at the Student’s sorrow?",
        optionA: "Butterfly",
        optionB: "Lizard",
        optionC: "Daisy",
        correctAnswer: "Lizard",
      }),
      shuffleOptions({
        question: "What symbolised true love in the story?",
        optionA: "A golden ring",
        optionB: "A red rose",
        optionC: "A pearl necklace",
        correctAnswer: "A red rose",
      }),
      shuffleOptions({
        question: "Where was the Rose-tree with yellow roses growing?",
        optionA: "Beneath the Student’s window",
        optionB: "Round the old sun-dial",
        optionC: "In the meadow",
        correctAnswer: "Round the old sun-dial",
      }),
      shuffleOptions({
        question: "What did the Student put on before running out with the rose?",
        optionA: "Shoes",
        optionB: "Coat",
        optionC: "Hat",
        correctAnswer: "Hat",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Nightingale was sitting in the ___ when she first heard the Student.",
        optionA: "Oak-tree",
        optionB: "Rose-tree",
        optionC: "Student’s window",
        correctAnswer: "Oak-tree",
      }),
      shuffleOptions({
        question: "The Student’s eyes were filled with __ when he cried about not finding a rose.",
        optionA: "Anger",
        optionB: "Tears",
        optionC: "Sleep",
        correctAnswer: "Tears",
      }),
      shuffleOptions({
        question: "According to the Nightingale, love is more precious than ___.",
        optionA: "Pearls",
        optionB: "Emeralds",
        optionC: "Diamonds",
        correctAnswer: "Emeralds",
      }),
      shuffleOptions({
        question: "The Butterfly was chasing a ___.",
        optionA: "Daisy",
        optionB: "Sunbeam",
        optionC: "Rose",
        correctAnswer: "Sunbeam",
      }),
      shuffleOptions({
        question: "The Rose-tree beneath the window said its branches were broken by the ___.",
        optionA: "Frost",
        optionB: "Storm",
        optionC: "Wind",
        correctAnswer: "Storm",
      }),
      shuffleOptions({
        question: "The Nightingale’s voice was compared to ___.",
        optionA: "A harp",
        optionB: "Water bubbling from a silver jar",
        optionC: "A violin",
        correctAnswer: "Water bubbling from a silver jar",
      }),
      shuffleOptions({
        question: "The Oak-tree requested the Nightingale to sing him ___.",
        optionA: "A happy song",
        optionB: "One last song",
        optionC: "A morning song",
        correctAnswer: "One last song",
      }),
      shuffleOptions({
        question: "The marvellous rose was at first as pale as ___.",
        optionA: "Mist over the river",
        optionB: "Coral",
        optionC: "Snow",
        correctAnswer: "Mist over the river",
      }),
      shuffleOptions({
        question: "When the thorn pierced the Nightingale’s heart, she ___.",
        optionA: "Flew away",
        optionB: "Sang wilder and wilder",
        optionC: "Slept",
        correctAnswer: "Sang wilder and wilder",
      }),
      shuffleOptions({
        question: "The ___ trembled with ecstasy when the Nightingale sang.",
        optionA: "Oak-tree",
        optionB: "Red rose",
        optionC: "Student",
        correctAnswer: "Red rose",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Nightingale had built her nest in the Oak-tree.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Student wanted a red rose so that his love would marry him.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Lizard thought weeping for a red rose was ridiculous.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Nightingale said, “Love is better than Life.”",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Rose-tree with white roses grew beneath the Student’s window.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Rose-tree beneath the window would give no roses that year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The red rose blossomed petal by petal as the Nightingale sang.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Nightingale died with the thorn in her heart.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Student understood the Nightingale’s sacrifice.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The rose opened its petals to the cold morning air.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
