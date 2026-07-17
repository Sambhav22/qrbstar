export const chapter = "Chapter - 1: The King Who Stunk";
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
        question: "Who inherited a huge fortune?",
        optionA: "Naren",
        optionB: "Commander",
        optionC: "King",
        correctAnswer: "Naren",
      }),
      shuffleOptions({
        question: "What did Naren never like to do?",
        optionA: "Work",
        optionB: "Bathe",
        optionC: "Eat",
        correctAnswer: "Bathe",
      }),
      shuffleOptions({
        question: "Who surrounded Naren like flies around honey?",
        optionA: "Servants",
        optionB: "People",
        optionC: "Soldiers",
        correctAnswer: "People",
      }),
      shuffleOptions({
        question: "Who made Naren’s crown?",
        optionA: "Goldsmiths",
        optionB: "Carpenters",
        optionC: "Priests",
        correctAnswer: "Goldsmiths",
      }),
      shuffleOptions({
        question: "Who sang hymns at the coronation?",
        optionA: "Priests",
        optionB: "Jesters",
        optionC: "Soldiers",
        correctAnswer: "Priests",
      }),
      shuffleOptions({
        question: "Who ordered the crown to be removed?",
        optionA: "Great king",
        optionB: "Naren",
        optionC: "Boy",
        correctAnswer: "Great king",
      }),
      shuffleOptions({
        question: "Who quietly watched the drama in a corner?",
        optionA: "Boy",
        optionB: "Commander",
        optionC: "Priest",
        correctAnswer: "Boy",
      }),
      shuffleOptions({
        question: "What type of water did the boy ask for?",
        optionA: "Warm",
        optionB: "Cold",
        optionC: "Icy",
        correctAnswer: "Warm",
      }),
      shuffleOptions({
        question: "What happened after Naren took a bath?",
        optionA: "Crown came off",
        optionB: "He lost fortune",
        optionC: "King praised him",
        correctAnswer: "Crown came off",
      }),
      shuffleOptions({
        question: "Why did people never complain about the smell?",
        optionA: "Wanted favours",
        optionB: "Loved him truly",
        optionC: "Afraid of him",
        correctAnswer: "Wanted favours",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Naren lived in a ______.",
        optionA: "Mansion",
        optionB: "Hut",
        optionC: "Cottage",
        correctAnswer: "Mansion",
      }),
      shuffleOptions({
        question: "Nobody remembered when Naren last ______.",
        optionA: "Bathed",
        optionB: "Slept",
        optionC: "Worked",
        correctAnswer: "Bathed",
      }),
      shuffleOptions({
        question: "The crown covered his head and his ______.",
        optionA: "Ears",
        optionB: "Eyes",
        optionC: "Nose",
        correctAnswer: "Ears",
      }),
      shuffleOptions({
        question: "The great king entered when the crown was ______.",
        optionA: "Placed",
        optionB: "Broken",
        optionC: "Lost",
        correctAnswer: "Placed",
      }),
      shuffleOptions({
        question: "Words stuck in Naren’s ______.",
        optionA: "Throat",
        optionB: "Mouth",
        optionC: "Nose",
        correctAnswer: "Throat",
      }),
      shuffleOptions({
        question: "People pressed their noses in their ______.",
        optionA: "Sleeves",
        optionB: "Books",
        optionC: "Hands",
        correctAnswer: "Sleeves",
      }),
      shuffleOptions({
        question: "Naren cried on seeing the commander’s ______.",
        optionA: "Sword",
        optionB: "Shield",
        optionC: "Horse",
        correctAnswer: "Sword",
      }),
      shuffleOptions({
        question: "Naren removed his splendid ______ before bathing.",
        optionA: "Clothes",
        optionB: "Crown",
        optionC: "Shoes",
        correctAnswer: "Clothes",
      }),
      shuffleOptions({
        question: "The filth on Naren’s body ______ after bathing.",
        optionA: "Softened",
        optionB: "Hardened",
        optionC: "Changed colour",
        correctAnswer: "Softened",
      }),
      shuffleOptions({
        question: "After the bath, people no longer needed their ______.",
        optionA: "Handkerchiefs",
        optionB: "Shoes",
        optionC: "Bags",
        correctAnswer: "Handkerchiefs",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Naren lived in a mansion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People liked Naren for his cleanliness.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Naren believed he was like a great king.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Naren ordered his own coronation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The great king praised Naren for bathing daily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The crown slipped off easily by itself.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A little boy found the solution to the crown problem.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The crown came off after soap and water were used.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The commander promised reward to the boy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Naren sighed with relief after his bath.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
