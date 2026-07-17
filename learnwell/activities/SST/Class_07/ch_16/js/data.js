export const chapter = "Chapter - 16: Towns, Traders and Craftsmen";
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
        question: "Which town was known as the “city of wealthy merchants” due to its rich trading community?",
        optionA: "Agra",
        optionB: "Cambay",
        optionC: "Patna",
        correctAnswer: "Cambay",
      }),
      shuffleOptions({
        question: "Which town developed around the dargah of Khwaja Muin-ud-Din Chishti?",
        optionA: "Mathura",
        optionB: "Somnath",
        optionC: "Ajmer",
        correctAnswer: "Ajmer",
      }),
      shuffleOptions({
        question: "Which river protected Hampi on one side, making it a secure capital?",
        optionA: "Ganga",
        optionB: "Tungabhadra",
        optionC: "Kaveri",
        correctAnswer: "Tungabhadra",
      }),
      shuffleOptions({
        question: "Which port city became a major centre for exporting patola silk with zari borders?",
        optionA: "Surat",
        optionB: "Goa",
        optionC: "Cochin",
        correctAnswer: "Surat",
      }),
      shuffleOptions({
        question: "Which foreign group was attracted to painted Kalamkari textiles from Masulipatnam?",
        optionA: "Safavid Persians",
        optionB: "Chinese",
        optionC: "Romans",
        correctAnswer: "Safavid Persians",
      }),
      shuffleOptions({
        question: "Which imported item reached India through medieval sea routes?",
        optionA: "Opium",
        optionB: "Raw silk",
        optionC: "Indigo",
        correctAnswer: "Raw silk",
      }),
      shuffleOptions({
        question: "Which town later became famous for diamond cutting and polishing?",
        optionA: "Masulipatnam",
        optionB: "Surat",
        optionC: "Fatehpur Sikri",
        correctAnswer: "Surat",
      }),
      shuffleOptions({
        question: "Which region produced world-famous cloth in the medieval period?",
        optionA: "Deccan",
        optionB: "Punjab",
        optionC: "Bengal",
        correctAnswer: "Deccan",
      }),
      shuffleOptions({
        question: "Which European traveller recorded descriptions of Indian leather goods?",
        optionA: "Duarte Barbosa",
        optionB: "Marco Polo",
        optionC: "Alberuni",
        correctAnswer: "Marco Polo",
      }),
      shuffleOptions({
        question: "Which city served as a gateway for many pilgrims travelling to Mecca?",
        optionA: "Ajmer",
        optionB: "Surat",
        optionC: "Kashi",
        correctAnswer: "Surat",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Hampi was founded in the year ______.",
        optionA: "1336",
        optionB: "1500",
        optionC: "1205",
        correctAnswer: "1336",
      }),
      shuffleOptions({
        question: "Masulipatnam is located on the ______ coast.",
        optionA: "Malabar",
        optionB: "Coromandel",
        optionC: "Konkan",
        correctAnswer: "Coromandel",
      }),
      shuffleOptions({
        question: "Kalamkari used natural dyes applied with a ______.",
        optionA: "bamboo pen",
        optionB: "wooden brush",
        optionC: "cloth pad",
        correctAnswer: "bamboo pen",
      }),
      shuffleOptions({
        question: "Foreign traders admired the ______ work of Delhi and Banaras.",
        optionA: "glass",
        optionB: "brass",
        optionC: "marble",
        correctAnswer: "brass",
      }),
      shuffleOptions({
        question: "People of many ______ and cultures lived together in Surat.",
        optionA: "kingdoms",
        optionB: "castes",
        optionC: "tribes",
        correctAnswer: "castes",
      }),
      shuffleOptions({
        question: "The houses of wealthy merchants in Cambay were surrounded by ______.",
        optionA: "fountains",
        optionB: "orchards",
        optionC: "courtyards",
        correctAnswer: "orchards",
      }),
      shuffleOptions({
        question: "Silk sold in Hampi markets mostly came from ______.",
        optionA: "China",
        optionB: "Sri Lanka",
        optionC: "Africa",
        correctAnswer: "China",
      }),
      shuffleOptions({
        question: "Agra was widely known for ______ weaving.",
        optionA: "jute",
        optionB: "carpet",
        optionC: "linen",
        correctAnswer: "carpet",
      }),
      shuffleOptions({
        question: "The Battle of Talikota resulted in the destruction of ______.",
        optionA: "Surat",
        optionB: "Kanchi",
        optionC: "Hampi",
        correctAnswer: "Hampi",
      }),
      shuffleOptions({
        question: "Travellers’ accounts and archaeological remains provide information about medieval ______.",
        optionA: "crops",
        optionB: "cities",
        optionC: "kingdoms",
        correctAnswer: "cities",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Surat became an important centre for pearl trading during the medieval period.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The palaces of Hampi were surrounded by orchards.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kalamkari textiles were dyed using chemical colours.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Some pilgrimage towns slowly turned into centres of learning and culture.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Wooden work of Kashmir and Karnataka was well-known.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Masulipatnam was established by European traders in the 17th century.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Many noble families settled in administrative towns to serve the rulers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "India exported indigo and textiles to West Asia and Europe.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Merchant houses in Cambay were made of mud and straw.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Hampi had a 20-km long water channel for protection from invaders.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
