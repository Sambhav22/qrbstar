export const chapter = "Chapter - 13: The Delhi Sultanate (1206-1526)";
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
        question: "Who conquered Devagiri, Warangal and Dvarasamudra for Ala-ud-din Khalji?",
        optionA: "Altunia",
        optionB: "Malik Kafur",
        optionC: "Yaldoz",
        correctAnswer: "Malik Kafur",
      }),
      shuffleOptions({
        question: "Who shifted the Delhi Sultanate’s capital from Delhi to Daulatabad?",
        optionA: "Balban",
        optionB: "Firoz Shah",
        optionC: "Muhammad-bin-Tughlaq",
        correctAnswer: "Muhammad-bin-Tughlaq",
      }),
      shuffleOptions({
        question: "Who completed the construction of the Qutub Minar after Aibak’s death?",
        optionA: "Iltutmish",
        optionB: "Razia",
        optionC: "Ghiyas-ud-din Tughlaq",
        correctAnswer: "Iltutmish",
      }),
      shuffleOptions({
        question: "Which ruler followed the harsh policy known as “blood and iron”?",
        optionA: "Balban",
        optionB: "Ala-ud-din",
        optionC: "Ibrahim Lodhi",
        correctAnswer: "Balban",
      }),
      shuffleOptions({
        question: "Who plundered Delhi in 1398 AD?",
        optionA: "Babur",
        optionB: "Timur",
        optionC: "Sikandar Lodhi",
        correctAnswer: "Timur",
      }),
      shuffleOptions({
        question: "Who imposed Jaziya on all non-Muslims not providing military service?",
        optionA: "Balban",
        optionB: "Firoz Shah Tughlaq",
        optionC: "Bahlol Lodhi",
        correctAnswer: "Firoz Shah Tughlaq",
      }),
      shuffleOptions({
        question: "Who declared himself the successor of Muhammad Ghori and founded the Slave dynasty?",
        optionA: "Qutb-ud-din Aibak",
        optionB: "Iltutmish",
        optionC: "Razia",
        correctAnswer: "Qutb-ud-din Aibak",
      }),
      shuffleOptions({
        question: "Who founded the Sayyid dynasty after Timur’s departure?",
        optionA: "Khizr Khan",
        optionB: "Bahlol Lodhi",
        optionC: "Kafur",
        correctAnswer: "Khizr Khan",
      }),
      shuffleOptions({
        question: "Which ruler introduced the branding of horses (dagh)?",
        optionA: "Ala-ud-din Khalji",
        optionB: "Iltutmish",
        optionC: "Razia",
        correctAnswer: "Ala-ud-din Khalji",
      }),
      shuffleOptions({
        question: "Which Delhi Sultan is described as a generous scholar but “a mixture of opposites”?",
        optionA: "Iltutmish",
        optionB: "Muhammad-bin-Tughlaq",
        optionC: "Balban",
        correctAnswer: "Muhammad-bin-Tughlaq",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Razia Sultan was killed outside Delhi along with her ______.",
        optionA: "brother",
        optionB: "husband Altunia",
        optionC: "advisor",
        correctAnswer: "husband Altunia",
      }),
      shuffleOptions({
        question: "The copper coin introduced by Iltutmish was called ______.",
        optionA: "tanka",
        optionB: "jital",
        optionC: "rupya",
        correctAnswer: "jital",
      }),
      shuffleOptions({
        question: "Ala-ud-din Khalji built a large water reservoir known as ______.",
        optionA: "Hauz Khas",
        optionB: "Tughlaqabad",
        optionC: "Siri Talab",
        correctAnswer: "Hauz Khas",
      }),
      shuffleOptions({
        question: "Malik Kafur reached as far as ______ during the southern campaigns.",
        optionA: "Goa",
        optionB: "Rameshwaram",
        optionC: "Madurai only",
        correctAnswer: "Rameshwaram",
      }),
      shuffleOptions({
        question: "Muhammad-bin-Tughlaq’s token currency led to widespread ______.",
        optionA: "profit",
        optionB: "forgery",
        optionC: "famine",
        correctAnswer: "forgery",
      }),
      shuffleOptions({
        question: "Balban introduced the court ceremony of kissing the feet of the sultan, known as ______.",
        optionA: "sijdah",
        optionB: "paibos",
        optionC: "khutba",
        correctAnswer: "paibos",
      }),
      shuffleOptions({
        question: "The group of forty Turkish nobles organised by Iltutmish was called ______.",
        optionA: "iqta",
        optionB: "chalisa",
        optionC: "dagh",
        correctAnswer: "chalisa",
      }),
      shuffleOptions({
        question: "The rulers who accepted the supremacy of Ala-ud-din Khalji in the south were known as ______.",
        optionA: "governors",
        optionB: "deputies",
        optionC: "vassals",
        correctAnswer: "vassals",
      }),
      shuffleOptions({
        question: "Firoz Shah Tughlaq translated several Hindu books into ______.",
        optionA: "Urdu",
        optionB: "Persian",
        optionC: "Arabic",
        correctAnswer: "Persian",
      }),
      shuffleOptions({
        question: "Ibrahim Lodhi died in the first battle of ______.",
        optionA: "Tarain",
        optionB: "Panipat",
        optionC: "Kannauj",
        correctAnswer: "Panipat",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Razia Sultan ruled successfully because the nobles fully supported her.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Muhammad-bin-Tughlaq’s capital shift from Delhi to Daulatabad caused hardship to the people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ala-ud-din Khalji fixed prices of commodities to keep soldiers satisfied.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Timur appointed Khizr Khan as his deputy before leaving Delhi.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Iltutmish refused shelter to Jalal-ud-din Khwarizmi to avoid Mongol conflict.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Firoz Shah Tughlaq built madrasas, hospitals, canals and new towns.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Balban encouraged nobles to live in luxury.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ala-ud-din Khalji attacked Chittor after hearing of Queen Padmini’s beauty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bahlol Lodhi founded the Lodhi dynasty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Token currency introduced by Muhammad-bin-Tughlaq strengthened the economy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
