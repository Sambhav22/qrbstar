export const chapter = "Chapter - 14: The First War of Independence";
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
        question: "Which European group first discovered a sea route to India?",
        optionA: "Portuguese",
        optionB: "French",
        optionC: "Dutch",
        correctAnswer: "Portuguese",
      }),
      shuffleOptions({
        question: "Who landed at Calicut in 1498?",
        optionA: "Columbus",
        optionB: "Vasco da Gama",
        optionC: "Magellan",
        correctAnswer: "Vasco da Gama",
      }),
      shuffleOptions({
        question: "Why did the British build forts around their factories?",
        optionA: "To store food",
        optionB: "To decorate the area",
        optionC: "To protect their trade centres",
        correctAnswer: "To protect their trade centres",
      }),
      shuffleOptions({
        question: "Which province was the first large territory occupied by the British?",
        optionA: "Punjab",
        optionB: "Bengal",
        optionC: "Awadh",
        correctAnswer: "Bengal",
      }),
      shuffleOptions({
        question: "Why were Indian weavers unable to compete with British goods?",
        optionA: "They refused to weave",
        optionB: "They produced low-quality cloth",
        optionC: "British mill-made cloth was cheaper",
        correctAnswer: "British mill-made cloth was cheaper",
      }),
      shuffleOptions({
        question: "What did the British force farmers in Bengal and Bihar to grow?",
        optionA: "Wheat",
        optionB: "Indigo",
        optionC: "Rice",
        correctAnswer: "Indigo",
      }),
      shuffleOptions({
        question: "Why did the British recruit Indians into their army?",
        optionA: "Indian soldiers were free",
        optionB: "Indians insisted on joining",
        optionC: "It was costly to bring soldiers from Britain",
        correctAnswer: "It was costly to bring soldiers from Britain",
      }),
      shuffleOptions({
        question: "Which rumour offended both Hindu and Muslim Indian soldiers?",
        optionA: "British banning festivals",
        optionB: "Use of greased cartridges made from cow and pig fat",
        optionC: "New food rules",
        correctAnswer: "Use of greased cartridges made from cow and pig fat",
      }),
      shuffleOptions({
        question: "Who refused to use the Enfield rifle cartridges?",
        optionA: "Begum Hazrat Mahal",
        optionB: "Tantia Tope",
        optionC: "Mangal Pandey",
        correctAnswer: "Mangal Pandey",
      }),
      shuffleOptions({
        question: "Who was declared the leader of the revolt by the rebels?",
        optionA: "Siraj-ud-Daulah",
        optionB: "Bahadur Shah Zafar",
        optionC: "Mir Zafar",
        correctAnswer: "Bahadur Shah Zafar",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "India was famous worldwide for its ______.",
        optionA: "deserts",
        optionB: "wealth",
        optionC: "snow",
        correctAnswer: "wealth",
      }),
      shuffleOptions({
        question: "The British East India Company set up its first factory at ______.",
        optionA: "Surat",
        optionB: "Madras",
        optionC: "Bombay",
        correctAnswer: "Surat",
      }),
      shuffleOptions({
        question: "The British bought raw cotton from India at very ______ prices.",
        optionA: "high",
        optionB: "low",
        optionC: "fixed",
        correctAnswer: "low",
      }),
      shuffleOptions({
        question: "Indigo was used to make ______.",
        optionA: "medicine",
        optionB: "blue dye",
        optionC: "jewellery",
        correctAnswer: "blue dye",
      }),
      shuffleOptions({
        question: "Indian soldiers were treated with ______ by their British officers.",
        optionA: "praise",
        optionB: "equality",
        optionC: "hatred",
        correctAnswer: "hatred",
      }),
      shuffleOptions({
        question: "The revolt of 1857 began in ______.",
        optionA: "Calcutta",
        optionB: "Meerut",
        optionC: "Delhi",
        correctAnswer: "Meerut",
      }),
      shuffleOptions({
        question: "Many Indian rulers failed to unite because they were often at ______ with one another.",
        optionA: "peace",
        optionB: "war",
        optionC: "celebrations",
        correctAnswer: "war",
      }),
      shuffleOptions({
        question: "After suppressing the revolt, the British burnt many ______.",
        optionA: "villages",
        optionB: "ports",
        optionC: "schools",
        correctAnswer: "villages",
      }),
      shuffleOptions({
        question: "The East India Company misused its right to do ______ trade in Bengal.",
        optionA: "salt",
        optionB: "tax-free",
        optionC: "foreign",
        correctAnswer: "tax-free",
      }),
      shuffleOptions({
        question: "The revolt spread across ______ and Central India.",
        optionA: "South India",
        optionB: "North India",
        optionC: "Western India",
        correctAnswer: "North India",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Portuguese were the first Europeans to enter India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The British encouraged Indian craftsmen to open new weaving mills.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "British-made cloth was cheaper than Indian handwoven cloth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Doctrine of Lapse allowed British to capture kingdoms where the ruler had no child.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Indian soldiers in the British army received the same salary as British soldiers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The revolt of 1857 began when soldiers in Meerut refused to use greased cartridges.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rani Laxmi Bai and Nana Saheb did not participate in the revolt.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The British used extremely harsh methods to crush the revolt.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The East India Company continued ruling India even after the revolt.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The revolt inspired Indians to organise themselves better for future struggles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
