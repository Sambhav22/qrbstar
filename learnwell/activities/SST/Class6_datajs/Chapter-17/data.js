export const chapter = "Chapter - 17: Life in Villages and Towns";
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
        question: "Which type of pottery was shiny, glossy and used mainly by wealthy people?",
        optionA: "Painted Grey Ware",
        optionB: "Northern Black Polished Ware",
        optionC: "Red Ware",
        correctAnswer: "Northern Black Polished Ware",
      }),
      shuffleOptions({
        question: "Who was the village headman responsible for collecting taxes?",
        optionA: "Adimai",
        optionB: "Grama bhojaka",
        optionC: "Kadaisiyar",
        correctAnswer: "Grama bhojaka",
      }),
      shuffleOptions({
        question: "Which town became important because it lay at the crossroads of major trade routes?",
        optionA: "Mathura",
        optionB: "Ujjaini",
        optionC: "Kapilvastu",
        correctAnswer: "Mathura",
      }),
      shuffleOptions({
        question: "Which port town showed evidence of Roman lamps and glassware?",
        optionA: "Madurai",
        optionB: "Arikamedu",
        optionC: "Kaveripattinam",
        correctAnswer: "Arikamedu",
      }),
      shuffleOptions({
        question: "Which group formed associations known as shrenis?",
        optionA: "Farmers",
        optionB: "Craftsmen and merchants",
        optionC: "Warriors",
        correctAnswer: "Craftsmen and merchants",
      }),
      shuffleOptions({
        question: "Which ruler built a 160 km embankment on the Kaveri River?",
        optionA: "Elara",
        optionB: "Karikala Chola",
        optionC: "Senguttuvan",
        correctAnswer: "Karikala Chola",
      }),
      shuffleOptions({
        question: "Which kingdom was famous for its pearl trade?",
        optionA: "Chola",
        optionB: "Pandya",
        optionC: "Chera",
        correctAnswer: "Pandya",
      }),
      shuffleOptions({
        question: "Who travelled on foot and traded goods across long distances?",
        optionA: "Guild masters",
        optionB: "Sailors",
        optionC: "Peddlers",
        correctAnswer: "Peddlers",
      }),
      shuffleOptions({
        question: "Which southern kingdom was ruled by Senguttuvan?",
        optionA: "Pandya",
        optionB: "Chera",
        optionC: "Chola",
        correctAnswer: "Chera",
      }),
      shuffleOptions({
        question: "What did Bharuch (Barygaza) export during ancient times?",
        optionA: "Cotton, silk and perfumes",
        optionB: "Coal and iron",
        optionC: "Spices",
        correctAnswer: "Cotton, silk and perfumes",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The small farmers mentioned in Tamil texts were called ________.",
        optionA: "Uzhavar",
        optionB: "Adimai",
        optionC: "Vellalar",
        correctAnswer: "Uzhavar",
      }),
      shuffleOptions({
        question: "The landless labourers or slaves were known as ________.",
        optionA: "Kadaisiyar",
        optionB: "Adimai",
        optionC: "Gahapatis",
        correctAnswer: "Adimai",
      }),
      shuffleOptions({
        question: "The Chola kingdom’s early capital was ________.",
        optionA: "Tanjavur",
        optionB: "Uraiyur",
        optionC: "North Mantoor",
        correctAnswer: "North Mantoor",
      }),
      shuffleOptions({
        question: "The Chera ruler Senguttuvan was also known as the ________ Chera.",
        optionA: "Black",
        optionB: "Red",
        optionC: "White",
        correctAnswer: "Red",
      }),
      shuffleOptions({
        question: "The shiny black pottery produced in the north was called ________.",
        optionA: "Red Ware",
        optionB: "NBPW (Northern Black Polished Ware)",
        optionC: "Megalith Ware",
        correctAnswer: "NBPW (Northern Black Polished Ware)",
      }),
      shuffleOptions({
        question: "Traders sailing to distant lands carried ________ with them.",
        optionA: "Weapons",
        optionB: "Merchandise goods",
        optionC: "Plants",
        correctAnswer: "Merchandise goods",
      }),
      shuffleOptions({
        question: "The post of grama bhojaka was usually ________.",
        optionA: "Elected",
        optionB: "Hereditary",
        optionC: "Rotational",
        correctAnswer: "Hereditary",
      }),
      shuffleOptions({
        question: "Arikamedu revealed pottery called ________.",
        optionA: "Arretine Ware",
        optionB: "Painted Grey Ware",
        optionC: "Red Polished Ware",
        correctAnswer: "Arretine Ware",
      }),
      shuffleOptions({
        question: "Iron tools such as axes and ploughshares helped increase ________.",
        optionA: "Jewellery",
        optionB: "Agricultural production",
        optionC: "Storage capacity",
        correctAnswer: "Agricultural production",
      }),
      shuffleOptions({
        question: "The people of South India during this period belonged to the ________ age.",
        optionA: "Bronze",
        optionB: "Megalithic",
        optionC: "Stone",
        correctAnswer: "Megalithic",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Grama bhojaka was the largest landowner in a village.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shrenis provided loans to craftsmen and merchants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mathura had no religious importance in ancient India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ring wells were used mainly for drainage and waste disposal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Farmers did not have to pay taxes to the king.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Roman coins and pottery were found at Arikamedu.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Pandya kingdom was well-known for its cotton textiles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Traders of Magadha and Koshala travelled to Mathura and Taxila.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Chera kingdom was chiefly located in present-day Kerala.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Karikala Chola ruled Sri Lanka for fifty years.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
