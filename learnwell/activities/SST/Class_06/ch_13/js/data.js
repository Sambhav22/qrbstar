export const chapter = "Chapter - 13: The Vedic Culture and Chalcolithic";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const optionKeys = ["optionA", "optionB", "optionC", "optionD"];
  const optionsArray = optionKeys
    .map((key) => object[key])
    .filter((option) => option !== undefined);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  optionKeys.forEach((key, index) => {
    if (index < optionsArray.length) {
      object[key] = optionsArray[index];
    } else {
      delete object[key];
    }
  });

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Which sacred drink was offered to gods during the Vedic rituals?",
        optionA: "Sura",
        optionB: "Soma",
        optionC: "Honey",
        correctAnswer: "Soma",
      }),
      shuffleOptions({
        question: "Who was chosen for his wisdom and courage to lead the tribe?",
        optionA: "Senani",
        optionB: "Rajan",
        optionC: "Gramini",
        correctAnswer: "Rajan",
      }),
      shuffleOptions({
        question: "Which animal was considered aghnya or sacred by the Aryans?",
        optionA: "Horse",
        optionB: "Cow",
        optionC: "Dog",
        correctAnswer: "Cow",
      }),
      shuffleOptions({
        question: "Which material was used by Aryans to build their houses?",
        optionA: "Baked bricks",
        optionB: "Mud and straw",
        optionC: "Cement",
        correctAnswer: "Mud and straw",
      }),
      shuffleOptions({
        question: "Which indoor pastime of Aryans involved chance and was discouraged?",
        optionA: "Music",
        optionB: "Dance",
        optionC: "Gambling (chaupar)",
        correctAnswer: "Gambling (chaupar)",
      }),
      shuffleOptions({
        question: "What was the main occupation of the Chalcolithic people?",
        optionA: "Navigation",
        optionB: "Agriculture",
        optionC: "Teaching",
        correctAnswer: "Agriculture",
      }),
      shuffleOptions({
        question: "Which natural force was worshipped by Aryans as the god of fire?",
        optionA: "Vayu",
        optionB: "Surya",
        optionC: "Agni",
        correctAnswer: "Agni",
      }),
      shuffleOptions({
        question: "Which type of pottery was widely used by the Jorwe people?",
        optionA: "Black and red ware with linear designs",
        optionB: "Yellow glazed ware",
        optionC: "White painted pottery",
        correctAnswer: "Black and red ware with linear designs",
      }),
      shuffleOptions({
        question: "What did the Aryans use to plough their fields?",
        optionA: "Camels",
        optionB: "Bulls and horses",
        optionC: "Elephants",
        correctAnswer: "Bulls and horses",
      }),
      shuffleOptions({
        question: "Which item found in megalithic burials indicates belief in life after death?",
        optionA: "Paper scrolls",
        optionB: "Ornaments and tools buried with the dead",
        optionC: "Cotton bags",
        correctAnswer: "Ornaments and tools buried with the dead",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Aryans first settled in the region of ________.",
        optionA: "Gangetic plain",
        optionB: "Sapta-Sindhu",
        optionC: "Vindhyas",
        correctAnswer: "Sapta-Sindhu",
      }),
      shuffleOptions({
        question: "Women in the Vedic Age could attend ________.",
        optionA: "Political assemblies",
        optionB: "Military training",
        optionC: "Court trials only",
        correctAnswer: "Political assemblies",
      }),
      shuffleOptions({
        question: "The drink ________ was condemned for being overly intoxicating.",
        optionA: "Soma",
        optionB: "Sura",
        optionC: "Milk",
        correctAnswer: "Sura",
      }),
      shuffleOptions({
        question: "The highest authority within the Aryan joint family was the ________.",
        optionA: "Senani",
        optionB: "Grihpati",
        optionC: "Mantri",
        correctAnswer: "Grihpati",
      }),
      shuffleOptions({
        question: "The Later Vedic people mainly settled in present-day ________.",
        optionA: "Uttar Pradesh",
        optionB: "Gujarat",
        optionC: "Assam",
        correctAnswer: "Uttar Pradesh",
      }),
      shuffleOptions({
        question: "The Chalcolithic settlements were usually ________.",
        optionA: "Urban",
        optionB: "Rural in nature",
        optionC: "Maritime",
        correctAnswer: "Rural in nature",
      }),
      shuffleOptions({
        question: "In megalithic burials, the pit with a heap of stones was called a ________.",
        optionA: "Cist",
        optionB: "Cairn",
        optionC: "Port-hole",
        correctAnswer: "Cairn",
      }),
      shuffleOptions({
        question: "Aryans considered ________ as their primary wealth.",
        optionA: "Silver",
        optionB: "Horses",
        optionC: "Cattle",
        correctAnswer: "Cattle",
      }),
      shuffleOptions({
        question: "The black and red pottery of Jorwe culture often had ________ designs.",
        optionA: "Circular",
        optionB: "Linear",
        optionC: "Floral",
        correctAnswer: "Linear",
      }),
      shuffleOptions({
        question: "The teachers in the gurukul charged no fees and took only ________.",
        optionA: "Coins",
        optionB: "Gems",
        optionC: "Gurudakshina",
        correctAnswer: "Gurudakshina",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Aryans offered prayers mainly through yajnas performed in open fields.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Varna system during early Vedic Age was based on birth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Jorwe people were skilled in weaving cotton, silk and flax.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sabha was a general assembly of all people of the janapada.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Chalcolithic people built both circular and rectangular houses.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Aryan society followed a patriarchal system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Saraswati was considered the most sacred river by the Vedic people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Megaliths were used only for marking trade routes and not for burials.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Gambling was considered a noble activity in the Vedic society.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Rajan could be removed from his position if he was cruel or inefficient.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
