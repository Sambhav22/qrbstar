export const chapter = "Chapter - 6: March to Delhi";
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
        question: "Who guided the sepoys with a lantern?",
        optionA: "Colonel Ripley",
        optionB: "A saint",
        optionC: "Bahadur Shah Zafar",
        correctAnswer: "A saint",
      }),
      shuffleOptions({
        question: "At which village were pattals (leaf plates) made for the sepoys?",
        optionA: "Baleni",
        optionB: "Jani Bujurg",
        optionC: "Bijraul",
        correctAnswer: "Baleni",
      }),
      shuffleOptions({
        question: "Who sent a youth on horseback to inform the next village to cook food?",
        optionA: "The saint",
        optionB: "Village headman",
        optionC: "Colonel",
        correctAnswer: "Village headman",
      }),
      shuffleOptions({
        question: "The sepoys marched with the sound—",
        optionA: "Tap…Tap",
        optionB: "Thak…Thak",
        optionC: "Tok…Tok",
        correctAnswer: "Thak…Thak",
      }),
      shuffleOptions({
        question: "The chapattis were stored in—",
        optionA: "Pots",
        optionB: "Baskets",
        optionC: "Cauldrons",
        correctAnswer: "Baskets",
      }),
      shuffleOptions({
        question: "The bridge on the Hindan River was—",
        optionA: "Permanent",
        optionB: "Boat bridge",
        optionC: "Wooden",
        correctAnswer: "Boat bridge",
      }),
      shuffleOptions({
        question: "Who ordered “Fire! Fire!” at the Red Fort?",
        optionA: "Colonel Ripley",
        optionB: "Bahadur Shah Zafar",
        optionC: "A sepoy",
        correctAnswer: "Colonel Ripley",
      }),
      shuffleOptions({
        question: "What did villagers shout while serving food?",
        optionA: "Victory to Britain",
        optionB: "Soldiers, march on, we are with you",
        optionC: "Stop and eat",
        correctAnswer: "Soldiers, march on, we are with you",
      }),
      shuffleOptions({
        question: "Who did the sepoys want as the Emperor of Hindustan?",
        optionA: "Mangal Pande",
        optionB: "Bahadur Shah Zafar",
        optionC: "Lal Bahadur Shastri",
        correctAnswer: "Bahadur Shah Zafar",
      }),
      shuffleOptions({
        question: "At what time did the sepoys reach Loni?",
        optionA: "10 p.m.",
        optionB: "3 a.m.",
        optionC: "7 a.m.",
        correctAnswer: "3 a.m.",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The revolt spread from Meerut to ______.",
        optionA: "Agra",
        optionB: "Delhi",
        optionC: "Lucknow",
        correctAnswer: "Delhi",
      }),
      shuffleOptions({
        question: "The sepoys were led by a mysterious ______.",
        optionA: "Saint",
        optionB: "Farmer",
        optionC: "Soldier",
        correctAnswer: "Saint",
      }),
      shuffleOptions({
        question: "The villagers cooked chapattis on several ______.",
        optionA: "Stones",
        optionB: "Hearths",
        optionC: "Stoves",
        correctAnswer: "Hearths",
      }),
      shuffleOptions({
        question: "The youth at Baleni climbed a tree to pluck ______.",
        optionA: "Fruits",
        optionB: "Leaves",
        optionC: "Flowers",
        correctAnswer: "Leaves",
      }),
      shuffleOptions({
        question: "The bridge at Hindan was repaired with ______.",
        optionA: "Logs",
        optionB: "Ropes",
        optionC: "Chains",
        correctAnswer: "Ropes",
      }),
      shuffleOptions({
        question: "The sepoys crawled across the ______ bridge at Yamuna.",
        optionA: "Wooden",
        optionB: "Boat",
        optionC: "Stone",
        correctAnswer: "Boat",
      }),
      shuffleOptions({
        question: "The villagers raised slogans saying, “We are ______ you.”",
        optionA: "Without",
        optionB: "With",
        optionC: "Beyond",
        correctAnswer: "With",
      }),
      shuffleOptions({
        question: "The sepoys reached Loni after marching all ______.",
        optionA: "Day",
        optionB: "Night",
        optionC: "Evening",
        correctAnswer: "Night",
      }),
      shuffleOptions({
        question: "Colonel Ripley’s eyes remained open in ______.",
        optionA: "Sleep",
        optionB: "Surprise",
        optionC: "Anger",
        correctAnswer: "Surprise",
      }),
      shuffleOptions({
        question: "The sepoys hailed Bahadur Shah Zafar as their ______.",
        optionA: "King",
        optionB: "Emperor",
        optionC: "Leader",
        correctAnswer: "Emperor",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sepoys had plenty of food and rest before the march.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The saint was confident of the route even in darkness.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The villagers refused to help the sepoys.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Chapattis with vegetables were served while walking.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sepoys crossed only one river.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Red Fort was visible from across the Yamuna.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ripley’s regiment saluted the revolting sepoys.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Colonel Ripley survived the firing at Red Fort.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The sepoys’ enthusiasm removed all signs of fatigue.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "“Dilli Chalo” means “On to Delhi.”",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
