export const chapter = "Chapter - 13: Shivaji’s Adventure";
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
        question: "Who was the Mughal emperor who supported Bijapur against Shivaji?",
        optionA: "Akbar",
        optionB: "Aurangzeb",
        optionC: "Jahangir",
        correctAnswer: "Aurangzeb",
      }),
      shuffleOptions({
        question: "Where did Shivaji meet Afzal?",
        optionA: "In Delhi",
        optionB: "At the foothills of Pratapgarh fort",
        optionC: "In Bijapur",
        correctAnswer: "At the foothills of Pratapgarh fort",
      }),
      shuffleOptions({
        question: "What protected Shivaji from Afzal’s dagger attack?",
        optionA: "Armour under his clothes",
        optionB: "A shield",
        optionC: "His soldiers",
        correctAnswer: "Armour under his clothes",
      }),
      shuffleOptions({
        question: "What was Afzal carrying hidden in his clothes?",
        optionA: "A sword",
        optionB: "A dagger",
        optionC: "A revolver",
        correctAnswer: "A dagger",
      }),
      shuffleOptions({
        question: "What was erected for the meeting between Shivaji and Afzal?",
        optionA: "A palace",
        optionB: "A pavilion",
        optionC: "A temple",
        correctAnswer: "A pavilion",
      }),
      shuffleOptions({
        question: "Who hit Shivaji on the head with a sword?",
        optionA: "Afzal’s attendant",
        optionB: "Afzal himself",
        optionC: "A Mughal soldier",
        correctAnswer: "Afzal’s attendant",
      }),
      shuffleOptions({
        question: "How many elephants did Shivaji capture after the battle?",
        optionA: "25",
        optionB: "65",
        optionC: "125",
        correctAnswer: "65",
      }),
      shuffleOptions({
        question: "Afzal thought he could defeat Shivaji easily in the –",
        optionA: "plains",
        optionB: "fort",
        optionC: "hills",
        correctAnswer: "plains",
      }),
      shuffleOptions({
        question: "What did Afzal destroy on his way to Shivaji?",
        optionA: "Cities, crops and temples",
        optionB: "Palaces and wells",
        optionC: "Forts and rivers",
        correctAnswer: "Cities, crops and temples",
      }),
      shuffleOptions({
        question: "After the battle, the Marathas became more –",
        optionA: "weak",
        optionB: "powerful",
        optionC: "afraid",
        correctAnswer: "powerful",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Shivaji gathered a bunch of ______ to fight the enemies.",
        optionA: "men",
        optionB: "boys",
        optionC: "farmers",
        correctAnswer: "boys",
      }),
      shuffleOptions({
        question: "Afzal was a commander of ______.",
        optionA: "Mughals",
        optionB: "Bijapur",
        optionC: "Marathas",
        correctAnswer: "Bijapur",
      }),
      shuffleOptions({
        question: "Shivaji’s meeting with Afzal took place on ______ 1659.",
        optionA: "10 April",
        optionB: "10 November",
        optionC: "15 August",
        correctAnswer: "10 November",
      }),
      shuffleOptions({
        question: "Shivaji wore ______ under his turban for protection.",
        optionA: "an iron cap",
        optionB: "a crown",
        optionC: "a helmet",
        correctAnswer: "an iron cap",
      }),
      shuffleOptions({
        question: "Afzal grew overconfident when he saw Shivaji’s ______ body.",
        optionA: "short and lean",
        optionB: "strong",
        optionC: "muscular",
        correctAnswer: "short and lean",
      }),
      shuffleOptions({
        question: "Shivaji used a ______ to attack Afzal.",
        optionA: "Bichhva",
        optionB: "spear",
        optionC: "bow",
        correctAnswer: "Bichhva",
      }),
      shuffleOptions({
        question: "The sudden attack ______ the enemy soldiers.",
        optionA: "confused",
        optionB: "helped",
        optionC: "pleased",
        correctAnswer: "confused",
      }),
      shuffleOptions({
        question: "Shivaji hid his small army in the ______.",
        optionA: "fort",
        optionB: "hills",
        optionC: "forests",
        correctAnswer: "hills",
      }),
      shuffleOptions({
        question: "Afzal set out from Bijapur in ______ 1659.",
        optionA: "April",
        optionB: "November",
        optionC: "July",
        correctAnswer: "April",
      }),
      shuffleOptions({
        question: "Shivaji captured ______ camels.",
        optionA: "4,000",
        optionB: "12,000",
        optionC: "2,000",
        correctAnswer: "12,000",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The meeting between Shivaji and Afzal took place inside the fort.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Shivaji carried a revolver in the meeting.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Afzal embraced Shivaji to try and kill him.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shivaji escaped Afzal’s grip with a powerful jerk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shivaji was badly wounded in the fight.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Afzal was killed in the battle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shivaji captured 4,000 horses from the battle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shivaji was saved by his armour during Afzal’s attack.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The battle completely unnerved the Marathas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Bijapur army fled after Afzal was killed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
