export const chapter = "Chapter - 10: Unknown Danger";
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
        question: "Who lived with Bunny in the burrow?",
        optionA: "His uncle",
        optionB: "His mother",
        optionC: "His friend",
        correctAnswer: "His mother",
      }),
      shuffleOptions({
        question: "Who brought carrots for Bunny?",
        optionA: "Rumy",
        optionB: "Farmer",
        optionC: "Cobra",
        correctAnswer: "Rumy",
      }),
      shuffleOptions({
        question: "What tree did Bunny decide to touch and return?",
        optionA: "Mango",
        optionB: "Neem",
        optionC: "Banana",
        correctAnswer: "Mango",
      }),
      shuffleOptions({
        question: "Who wanted to eat Bunny?",
        optionA: "Cobra",
        optionB: "Mongoose",
        optionC: "Jackal",
        correctAnswer: "Cobra",
      }),
      shuffleOptions({
        question: "Who finally saved Bunny’s life?",
        optionA: "Cobra",
        optionB: "Mongoose",
        optionC: "Farmer",
        correctAnswer: "Mongoose",
      }),
      shuffleOptions({
        question: "Who wrote the Panchatantra stories?",
        optionA: "Vishnu Sharma",
        optionB: "Premchand",
        optionC: "Kalidas",
        correctAnswer: "Vishnu Sharma",
      }),
      shuffleOptions({
        question: "About how many years ago was Panchatantra written?",
        optionA: "1000 years",
        optionB: "2300 years",
        optionC: "500 years",
        correctAnswer: "2300 years",
      }),
      shuffleOptions({
        question: "Who called Bunny “soft and delicious”?",
        optionA: "Cobra",
        optionB: "Rumy",
        optionC: "Mongoose",
        correctAnswer: "Cobra",
      }),
      shuffleOptions({
        question: "Who advised Bunny not to go out alone?",
        optionA: "Rumy",
        optionB: "Mongoose",
        optionC: "Farmer",
        correctAnswer: "Mongoose",
      }),
      shuffleOptions({
        question: "Bunny thanked the mongoose by calling him ______.",
        optionA: "Uncle",
        optionB: "Brother",
        optionC: "Friend",
        correctAnswer: "Uncle",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Bunny lived in a deep ______.",
        optionA: "Burrow",
        optionB: "Nest",
        optionC: "Cave",
        correctAnswer: "Burrow",
      }),
      shuffleOptions({
        question: "Rumy told Bunny he was too ______ to go out.",
        optionA: "Young",
        optionB: "Old",
        optionC: "Naughty",
        correctAnswer: "Young",
      }),
      shuffleOptions({
        question: "Bunny thought he would only touch the ______ tree.",
        optionA: "Mango",
        optionB: "Apple",
        optionC: "Guava",
        correctAnswer: "Mango",
      }),
      shuffleOptions({
        question: "Bunny enjoyed the green ______ and trees full of fruits.",
        optionA: "Meadow",
        optionB: "River",
        optionC: "Desert",
        correctAnswer: "Meadow",
      }),
      shuffleOptions({
        question: "The cobra said Bunny would make a nice ______.",
        optionA: "Meal",
        optionB: "Friend",
        optionC: "Toy",
        correctAnswer: "Meal",
      }),
      shuffleOptions({
        question: "Bunny offered ______ and fruits to the cobra.",
        optionA: "Carrots",
        optionB: "Rice",
        optionC: "Bread",
        correctAnswer: "Carrots",
      }),
      shuffleOptions({
        question: "The cobra refused to eat ______.",
        optionA: "Carrots",
        optionB: "Mangoes",
        optionC: "Apples",
        correctAnswer: "Carrots",
      }),
      shuffleOptions({
        question: "The mongoose warned Bunny not to go out ______.",
        optionA: "Alone",
        optionB: "With friends",
        optionC: "At night",
        correctAnswer: "Alone",
      }),
      shuffleOptions({
        question: "The Panchatantra stories were written to teach ______.",
        optionA: "Morals",
        optionB: "Songs",
        optionC: "Games",
        correctAnswer: "Morals",
      }),
      shuffleOptions({
        question: "Bunny shouted “______ save me!” when in danger.",
        optionA: "Mummy",
        optionB: "Uncle",
        optionC: "Farmer",
        correctAnswer: "Mummy",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Bunny’s mother’s name was Rumy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bunny promised not to go beyond the mango tree.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The cobra wanted to eat fruits and carrots.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The mongoose saved Bunny from the cobra.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bunny thanked the cobra for saving his life.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The meadow outside was green and full of fruits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bunny called the mongoose his uncle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rumy told Bunny he could go out whenever he wanted.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bunny was frightened when he saw the cobra.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The story teaches children to obey their parents.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
