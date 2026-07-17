export const chapter = "Chapter - 9: Establishment of Company Power";
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
        question: "Which European country first established political power on the west coast of India?",
        optionA: "Dutch",
        optionB: "French",
        optionC: "Portuguese",
        correctAnswer: "Portuguese",
      }),
      shuffleOptions({
        question: "Who led the British forces in the Battle of Plassey in 1757?",
        optionA: "Warren Hastings",
        optionB: "Robert Clive",
        optionC: "Lord Wellesley",
        correctAnswer: "Robert Clive",
      }),
      shuffleOptions({
        question: "Who was the French governor whose policies intensified the Anglo-French rivalry?",
        optionA: "Lally",
        optionB: "Dupleix",
        optionC: "Bussy",
        correctAnswer: "Dupleix",
      }),
      shuffleOptions({
        question: "Who became the Nawab of Bengal after the death of Alivardi Khan?",
        optionA: "Mir Qasim",
        optionB: "Siraj-ud-Daulah",
        optionC: "Shuja-ud-Daulah",
        correctAnswer: "Siraj-ud-Daulah",
      }),
      shuffleOptions({
        question: "Which ruler was known as the “Lion of Punjab”?",
        optionA: "Dalip Singh",
        optionB: "Ranjeet Singh",
        optionC: "Jaswant Rao Holkar",
        correctAnswer: "Ranjeet Singh",
      }),
      shuffleOptions({
        question: "Who introduced the Dual System of Government in Bengal?",
        optionA: "Robert Clive",
        optionB: "Lord Cornwallis",
        optionC: "Lord Dalhousie",
        correctAnswer: "Robert Clive",
      }),
      shuffleOptions({
        question: "Who demanded that the British stop fortifying Calcutta?",
        optionA: "Hyder Ali",
        optionB: "Mir Jafar",
        optionC: "Siraj-ud-Daulah",
        correctAnswer: "Siraj-ud-Daulah",
      }),
      shuffleOptions({
        question: "Who was killed during the Fourth Anglo-Mysore War in 1799?",
        optionA: "Hyder Ali",
        optionB: "Tipu Sultan",
        optionC: "Peshwa Baji Rao",
        correctAnswer: "Tipu Sultan",
      }),
      shuffleOptions({
        question: "Who signed the Treaty of Seringapatam with the British?",
        optionA: "Tipu Sultan",
        optionB: "Ranjeet Singh",
        optionC: "Shuja-ud-Daulah",
        correctAnswer: "Tipu Sultan",
      }),
      shuffleOptions({
        question: "Who introduced the Subsidiary Alliance system?",
        optionA: "Lord Canning",
        optionB: "Lord Dalhousie",
        optionC: "Lord Wellesley",
        correctAnswer: "Lord Wellesley",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Dutch set up their first Indian factory at ________.",
        optionA: "Masulipatnam",
        optionB: "Chinsura",
        optionC: "Surat",
        correctAnswer: "Masulipatnam",
      }),
      shuffleOptions({
        question: "The English established their first factory in India at ________.",
        optionA: "Madras",
        optionB: "Surat",
        optionC: "Bombay",
        correctAnswer: "Surat",
      }),
      shuffleOptions({
        question: "Siraj-ud-Daulah occupied ________ before the Battle of Plassey.",
        optionA: "Fort William",
        optionB: "Fort St. George",
        optionC: "Seringapatam",
        correctAnswer: "Fort William",
      }),
      shuffleOptions({
        question: "The Battle of Buxar was fought in ________.",
        optionA: "1750",
        optionB: "1782",
        optionC: "1764",
        correctAnswer: "1764",
      }),
      shuffleOptions({
        question: "Mir Qasim abolished ________ to allow equal trading rights.",
        optionA: "taxes",
        optionB: "custom duties",
        optionC: "fortifications",
        correctAnswer: "custom duties",
      }),
      shuffleOptions({
        question: "Tipu Sultan surrendered his two sons after the Treaty of ________.",
        optionA: "Bassein",
        optionB: "Seringapatam",
        optionC: "Allahabad",
        correctAnswer: "Seringapatam",
      }),
      shuffleOptions({
        question: "The doctrine that allowed annexation of states without natural heirs was called ________.",
        optionA: "Doctrine of Lapse",
        optionB: "Subsidiary Alliance",
        optionC: "Mandate Law",
        correctAnswer: "Doctrine of Lapse",
      }),
      shuffleOptions({
        question: "The French lost control in India after the ________.",
        optionA: "First Maratha War",
        optionB: "Third Carnatic War",
        optionC: "Afghan War",
        correctAnswer: "Third Carnatic War",
      }),
      shuffleOptions({
        question: "The British annexed Punjab in ________.",
        optionA: "1799",
        optionB: "1849",
        optionC: "1717",
        correctAnswer: "1849",
      }),
      shuffleOptions({
        question: "The trading centres of Europeans in India were known as ________.",
        optionA: "Bazaars",
        optionB: "Factories",
        optionC: "Cantonments",
        correctAnswer: "Factories",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Dutch focused mainly on building a political empire in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mir Jafar became Nawab of Bengal after the Battle of Plassey.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tipu Sultan fought against the British in the First Anglo-Mysore War.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Treaty of Allahabad granted diwani rights to the British.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lord Dalhousie introduced the Subsidiary Alliance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Second Anglo-Mysore War ended with the Treaty of Manglore.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The British captured Pondicherry during the Third Carnatic War.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ranjeet Singh founded a unified Sikh Empire before his death in 1839.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Dual Government system made the Nawab powerful and independent.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Battle of Buxar involved Shuja-ud-Daulah and Shah Alam II fighting against the British.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
