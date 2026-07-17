export const chapter = "Chapter - 10: Rural Life Under British Rule";
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
        question: "Which group collected revenue rigidly even during crop failure?",
        optionA: "British officials",
        optionB: "Farmers",
        optionC: "Moneylenders",
        correctAnswer: "British officials",
      }),
      shuffleOptions({
        question: "Who forced the ryots to cultivate indigo through contracts?",
        optionA: "Zamindars",
        optionB: "Indigo planters",
        optionC: "Ryots themselves",
        correctAnswer: "Indigo planters",
      }),
      shuffleOptions({
        question: "Who worked as agents of the planters during indigo cultivation?",
        optionA: "Hawkers",
        optionB: "Gomashtas",
        optionC: "Cultivators",
        correctAnswer: "Gomashtas",
      }),
      shuffleOptions({
        question: "Who stated that the village was an important unit that should be preserved?",
        optionA: "Holt Mackenzie",
        optionB: "Warren Hastings",
        optionC: "Lord Cornwallis",
        correctAnswer: "Holt Mackenzie",
      }),
      shuffleOptions({
        question: "Which class became powerful after land became a saleable commodity?",
        optionA: "Teachers",
        optionB: "Moneylenders",
        optionC: "Soldiers",
        correctAnswer: "Moneylenders",
      }),
      shuffleOptions({
        question: "Who shifted to cities instead of improving agricultural land?",
        optionA: "Ryots",
        optionB: "Zamindars",
        optionC: "Indigo labourers",
        correctAnswer: "Zamindars",
      }),
      shuffleOptions({
        question: "Who controlled nij cultivation of indigo?",
        optionA: "Moneylenders",
        optionB: "Planters themselves",
        optionC: "Village headmen",
        correctAnswer: "Planters themselves",
      }),
      shuffleOptions({
        question: "Who led the revolt by refusing to grow indigo in 1859?",
        optionA: "Zamindars",
        optionB: "British officers",
        optionC: "Ryots of Bengal",
        correctAnswer: "Ryots of Bengal",
      }),
      shuffleOptions({
        question: "Who benefited from commercialization of agriculture?",
        optionA: "British industries in Europe",
        optionB: "Indian peasants",
        optionC: "Local artisans",
        correctAnswer: "British industries in Europe",
      }),
      shuffleOptions({
        question: "Who measured fields and recorded rights under the Mahalwari system?",
        optionA: "Zamindars",
        optionB: "Village headmen (as instructed)",
        optionC: "Indigo planters",
        correctAnswer: "Village headmen (as instructed)",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Many peasants became landless due to very high ______.",
        optionA: "rent",
        optionB: "land revenue",
        optionC: "irrigation charges",
        correctAnswer: "land revenue",
      }),
      shuffleOptions({
        question: "Indigo was in great demand because it produced a deep ______ colour.",
        optionA: "red",
        optionB: "blue",
        optionC: "green",
        correctAnswer: "blue",
      }),
      shuffleOptions({
        question: "The contracts signed for indigo cultivation were called ______.",
        optionA: "patta",
        optionB: "satta",
        optionC: "challan",
        correctAnswer: "satta",
      }),
      shuffleOptions({
        question: "Under the ryoti system, the contract required peasants to use about ______ of their land for indigo.",
        optionA: "one-fourth",
        optionB: "one-half",
        optionC: "one-third",
        correctAnswer: "one-fourth",
      }),
      shuffleOptions({
        question: "Under nij cultivation, planters hired ______.",
        optionA: "soldiers",
        optionB: "labourers",
        optionC: "weavers",
        correctAnswer: "labourers",
      }),
      shuffleOptions({
        question: "The Indigo Revolt spread from Govindpur in Nadia to other ______ districts.",
        optionA: "wheat",
        optionB: "cotton",
        optionC: "indigo",
        correctAnswer: "indigo",
      }),
      shuffleOptions({
        question: "Indigo production ruined the ______ of the soil.",
        optionA: "colour",
        optionB: "fertility",
        optionC: "shape",
        correctAnswer: "fertility",
      }),
      shuffleOptions({
        question: "Ryots got very ______ price for indigo from the planters.",
        optionA: "high",
        optionB: "low",
        optionC: "fixed",
        correctAnswer: "low",
      }),
      shuffleOptions({
        question: "The famine of 1770 killed nearly ______ people in Bengal.",
        optionA: "2 million",
        optionB: "10 million",
        optionC: "15 million",
        correctAnswer: "10 million",
      }),
      shuffleOptions({
        question: "Indigo cultivation later shifted from Bengal to ______.",
        optionA: "Kerala",
        optionB: "Gujarat",
        optionC: "Bihar",
        correctAnswer: "Bihar",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Indigo planters paid ryots a fair and profitable price.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Indigo exhausted the most fertile land of peasants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Zamindars always supported peasants against the British.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The ryots attacked indigo factories during the revolt.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In Permanent Settlement, zamindars could lose their land for failing to pay the fixed revenue.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Moneylenders often took over land when peasants could not repay loans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Under Mahalwari, revenue of each mahal was fixed permanently.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Indigo planters often forced ryots to sign contracts through village headmen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Indigo Commission declared that indigo was profitable for ryots.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Many peasants fled their villages because revenue was too high.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
