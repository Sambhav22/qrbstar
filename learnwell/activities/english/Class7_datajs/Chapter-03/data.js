export const chapter = "Chapter - 3: Act Before It Finishes";
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
        question: "Who sat near the bus gate?",
        optionA: "Ms. Kamini and Mrs. Savitri",
        optionB: "Shailesh and Malti",
        optionC: "Driver and Conductor",
        correctAnswer: "Ms. Kamini and Mrs. Savitri",
      }),
      shuffleOptions({
        question: "Who were sitting in the middle seat?",
        optionA: "Shailesh, Salma and Malti",
        optionB: "Malti, Kamini and Savitri",
        optionC: "Salma, Savitri and Shailesh",
        correctAnswer: "Shailesh, Salma and Malti",
      }),
      shuffleOptions({
        question: "What sound did the driver make before starting?",
        optionA: "A whistle",
        optionB: "A loud horn",
        optionC: "A bell",
        correctAnswer: "A loud horn",
      }),
      shuffleOptions({
        question: "What did Malti stop counting?",
        optionA: "Trucks",
        optionB: "Cars",
        optionC: "Bicycles",
        correctAnswer: "Bicycles",
      }),
      shuffleOptions({
        question: "What caused the bad odour?",
        optionA: "Garbage",
        optionB: "Petrol smoke",
        optionC: "Burning food",
        correctAnswer: "Petrol smoke",
      }),
      shuffleOptions({
        question: "Which source of energy is free and unlimited?",
        optionA: "Petrol",
        optionB: "Sunlight",
        optionC: "CNG",
        correctAnswer: "Sunlight",
      }),
      shuffleOptions({
        question: "Which fuel does the bus use?",
        optionA: "Petrol",
        optionB: "Diesel",
        optionC: "Gas",
        correctAnswer: "Diesel",
      }),
      shuffleOptions({
        question: "Where did the children see a poster?",
        optionA: "At the garden",
        optionB: "At the petrol pump",
        optionC: "At the fort",
        correctAnswer: "At the petrol pump",
      }),
      shuffleOptions({
        question: "What did Malti want to make when she grows up?",
        optionA: "Car on petrol",
        optionB: "Bus on electricity",
        optionC: "Truck on gas",
        correctAnswer: "Bus on electricity",
      }),
      shuffleOptions({
        question: "Who said that population must be checked?",
        optionA: "Shailesh",
        optionB: "Malti",
        optionC: "Salma",
        correctAnswer: "Salma",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The conductor asked for ______ before starting the bus.",
        optionA: "ticket",
        optionB: "permission",
        optionC: "money",
        correctAnswer: "permission",
      }),
      shuffleOptions({
        question: "Vehicles were lining on the roads like ______.",
        optionA: "ants",
        optionB: "snakes",
        optionC: "fish",
        correctAnswer: "ants",
      }),
      shuffleOptions({
        question: "The children decided to pass time by ______ vehicles.",
        optionA: "counting",
        optionB: "drawing",
        optionC: "naming",
        correctAnswer: "counting",
      }),
      shuffleOptions({
        question: "Petrol and CNG are both formed by ______.",
        optionA: "nature",
        optionB: "humans",
        optionC: "machines",
        correctAnswer: "nature",
      }),
      shuffleOptions({
        question: "Hydroelectricity is made from ______.",
        optionA: "wind",
        optionB: "water",
        optionC: "coal",
        correctAnswer: "water",
      }),
      shuffleOptions({
        question: "Increasing population means we need more and more ______.",
        optionA: "things",
        optionB: "space",
        optionC: "toys",
        correctAnswer: "things",
      }),
      shuffleOptions({
        question: "The bus stopped at a ______ pump.",
        optionA: "petrol",
        optionB: "water",
        optionC: "food",
        correctAnswer: "petrol",
      }),
      shuffleOptions({
        question: "People should share ______ to reduce pollution.",
        optionA: "vehicles",
        optionB: "food",
        optionC: "rooms",
        correctAnswer: "vehicles",
      }),
      shuffleOptions({
        question: "The teacher asked children to observe ______ in the garden.",
        optionA: "trees, leaves, fruits and flowers",
        optionB: "animals",
        optionC: "buses",
        correctAnswer: "trees, leaves, fruits and flowers",
      }),
      shuffleOptions({
        question: "The teacher said, “Mind you, you are going to write an ______.”",
        optionA: "story",
        optionB: "essay",
        optionC: "article",
        correctAnswer: "essay",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The excursion was to the old fort, lake and city palace garden.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The students answered the teacher in chorus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Most cars had many passengers inside.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Vehicular pollution is a cause of ill-health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Petrol is unlimited in supply.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Salma explained about hydroelectricity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The traffic jam lasted only 5 minutes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Malti thought of making an electric bus in future.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The poster at the petrol pump warned people to save fuel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The students enjoyed no learning from the excursion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
