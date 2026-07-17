export const chapter = "Chapter - 15: The Wild Friend";
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
        question: "What did Malu prepare while Shakti cleaned his rifle?",
        optionA: "Breakfast",
        optionB: "Tea",
        optionC: "Lunch",
        correctAnswer: "Tea",
      }),
      shuffleOptions({
        question: "Where did Shakti and Malu pitch their tent?",
        optionA: "Beside a river",
        optionB: "On a mound",
        optionC: "Near the village",
        correctAnswer: "On a mound",
      }),
      shuffleOptions({
        question: "Which vehicle was parked on the jungle track?",
        optionA: "Truck",
        optionB: "Jeep",
        optionC: "Cart",
        correctAnswer: "Jeep",
      }),
      shuffleOptions({
        question: "Who addressed Shakti as “Baba”?",
        optionA: "His father",
        optionB: "Malu",
        optionC: "Leopard",
        correctAnswer: "Malu",
      }),
      shuffleOptions({
        question: "What sound indicated monkeys fighting?",
        optionA: "Loud roars",
        optionB: "Chattering",
        optionC: "Screaming birds",
        correctAnswer: "Chattering",
      }),
      shuffleOptions({
        question: "What did Shakti first sense before seeing the leopard?",
        optionA: "Strange smell",
        optionB: "Footprints",
        optionC: "A shadow",
        correctAnswer: "Strange smell",
      }),
      shuffleOptions({
        question: "What bruised Shakti’s back during the leopard’s attack?",
        optionA: "Leopard’s paws",
        optionB: "Rifle",
        optionC: "Knife",
        correctAnswer: "Leopard’s paws",
      }),
      shuffleOptions({
        question: "What did Malu bring from the tent when called?",
        optionA: "Knife",
        optionB: "Box of cartridges",
        optionC: "Rope",
        correctAnswer: "Box of cartridges",
      }),
      shuffleOptions({
        question: "What was Shakti’s immediate action when he perceived danger?",
        optionA: "Ran into the tent",
        optionB: "Reached for his rifle",
        optionC: "Called for villagers",
        correctAnswer: "Reached for his rifle",
      }),
      shuffleOptions({
        question: "Who actually killed the leopard?",
        optionA: "Malu",
        optionB: "Bear (Bholu)",
        optionC: "Shakti",
        correctAnswer: "Bear (Bholu)",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Shakti’s father brought a bear cub from the forest near its ______.",
        optionA: "Dead mother",
        optionB: "Cave",
        optionC: "Den",
        correctAnswer: "Dead mother",
      }),
      shuffleOptions({
        question: "The cub’s name was ______.",
        optionA: "Golu",
        optionB: "Bholu",
        optionC: "Molu",
        correctAnswer: "Bholu",
      }),
      shuffleOptions({
        question: "Malu had served Shakti’s family for more than ______ decades.",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        correctAnswer: "Two",
      }),
      shuffleOptions({
        question: "The leopard’s breath was ______.",
        optionA: "Fragrant",
        optionB: "Hot and stinking",
        optionC: "Cold",
        correctAnswer: "Hot and stinking",
      }),
      shuffleOptions({
        question: "Shakti shouted for Malu to bring ______.",
        optionA: "Food",
        optionB: "Cartridges",
        optionC: "Rope",
        correctAnswer: "Cartridges",
      }),
      shuffleOptions({
        question: "The rifle was placed ______ the small table.",
        optionA: "Against",
        optionB: "Under",
        optionC: "Over",
        correctAnswer: "Against",
      }),
      shuffleOptions({
        question: "The leopard sprang in the ______ to attack.",
        optionA: "Air",
        optionB: "Ground",
        optionC: "Tree",
        correctAnswer: "Air",
      }),
      shuffleOptions({
        question: "Shakti fell face down, ______ loudly.",
        optionA: "Shrieking",
        optionB: "Singing",
        optionC: "Laughing",
        correctAnswer: "Shrieking",
      }),
      shuffleOptions({
        question: "When unconscious, Shakti thought it was ______ who saved him.",
        optionA: "Malu",
        optionB: "Bear",
        optionC: "Soldiers",
        correctAnswer: "Malu",
      }),
      shuffleOptions({
        question: "The bear licked Shakti’s ______ before leaving.",
        optionA: "Face",
        optionB: "Hands",
        optionC: "Legs",
        correctAnswer: "Face",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Shakti’s father was a village landlord.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Malu had no knowledge of forests.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Shakti’s rifle was fully loaded when the leopard appeared.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Shakti managed to grab the leopard’s tongue.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shakti remained conscious throughout the fight.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A bear leapt on the leopard and killed it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shakti believed the bear was his childhood friend, Bholu.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Malu attacked the leopard with a jungle knife.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Shakti carried his rifle to meet Bholu after the fight.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Shakti said a friend like Bholu would never be found again.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
