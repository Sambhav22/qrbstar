export const chapter = "Chapter - 12: Loving Papa";
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
        question: "Who called Reena for breakfast?",
        optionA: "Father",
        optionB: "Mother",
        optionC: "Deven",
        correctAnswer: "Mother",
      }),
      shuffleOptions({
        question: "What did Reena pick from the dining table?",
        optionA: "Toast",
        optionB: "Biscuit",
        optionC: "Fruit",
        correctAnswer: "Toast",
      }),
      shuffleOptions({
        question: "Who was already sitting at the table?",
        optionA: "Deven",
        optionB: "Ivy",
        optionC: "Papa",
        correctAnswer: "Deven",
      }),
      shuffleOptions({
        question: "What sound made the house lively?",
        optionA: "Music",
        optionB: "Anklets",
        optionC: "Bell",
        correctAnswer: "Anklets",
      }),
      shuffleOptions({
        question: "What did Reena carry while rushing out of her room?",
        optionA: "Doll",
        optionB: "Ball",
        optionC: "Book",
        correctAnswer: "Doll",
      }),
      shuffleOptions({
        question: "Who was talking to Father in the reading room?",
        optionA: "Mr. Verma",
        optionB: "Deven",
        optionC: "Ivy",
        correctAnswer: "Mr. Verma",
      }),
      shuffleOptions({
        question: "Who was Ivy?",
        optionA: "Cat",
        optionB: "Dog",
        optionC: "Bird",
        correctAnswer: "Dog",
      }),
      shuffleOptions({
        question: "What did Reena drag calling it a train?",
        optionA: "Chair",
        optionB: "Table",
        optionC: "Bench",
        correctAnswer: "Chair",
      }),
      shuffleOptions({
        question: "What happened when Reena pressed the switch?",
        optionA: "The bulb glowed",
        optionB: "The fan turned",
        optionC: "The bell rang",
        correctAnswer: "The bulb glowed",
      }),
      shuffleOptions({
        question: "What did Father lovingly call Reena?",
        optionA: "My little angel",
        optionB: "My little lovely doll",
        optionC: "My fairy",
        correctAnswer: "My little lovely doll",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Reena was a ______-year-old girl.",
        optionA: "three",
        optionB: "four",
        optionC: "five",
        correctAnswer: "four",
      }),
      shuffleOptions({
        question: "Reena quickly put on her ______ before running.",
        optionA: "shoes",
        optionB: "slippers",
        optionC: "sandals",
        correctAnswer: "slippers",
      }),
      shuffleOptions({
        question: "Father usually left home ______ in the morning.",
        optionA: "late",
        optionB: "early",
        optionC: "never",
        correctAnswer: "early",
      }),
      shuffleOptions({
        question: "Deven showed tricks with the family ______.",
        optionA: "cat",
        optionB: "dog",
        optionC: "bird",
        correctAnswer: "dog",
      }),
      shuffleOptions({
        question: "Ivy stood on its ______ legs to dance.",
        optionA: "hind",
        optionB: "front",
        optionC: "two",
        correctAnswer: "hind",
      }),
      shuffleOptions({
        question: "Father had many ______ before him while working.",
        optionA: "books and files",
        optionB: "toys",
        optionC: "plates",
        correctAnswer: "books and files",
      }),
      shuffleOptions({
        question: "Reena thought the switch sound was ______.",
        optionA: "boring",
        optionB: "fascinating",
        optionC: "useless",
        correctAnswer: "fascinating",
      }),
      shuffleOptions({
        question: "When Father shouted, Reena became ______.",
        optionA: "happy",
        optionB: "heartbroken",
        optionC: "excited",
        correctAnswer: "heartbroken",
      }),
      shuffleOptions({
        question: "Tears rolled down Reena’s ______ cheeks.",
        optionA: "rosy",
        optionB: "pale",
        optionC: "dark",
        correctAnswer: "rosy",
      }),
      shuffleOptions({
        question: "Reena thumped away to her ______.",
        optionA: "room",
        optionB: "kitchen",
        optionC: "balcony",
        correctAnswer: "room",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Reena’s mother called her for breakfast.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Reena drank her entire glass of milk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Father was an advocate by profession.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Deven asked Reena to sit comfortably and eat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Reena thought Father was enjoying the sound of her anklets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The black switch was a forbidden article for Reena.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Father smiled when Reena pressed the switch again and again.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Reena muttered that Father was unthoughtful.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Father hugged and kissed Reena in the end.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Reena remained angry with Father till the end of the story.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;
