export const chapter = "Chapter - 16: Colonialism and Urban Change";
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
        question: "Which city was built around Fort William during British rule?",
        optionA: "Calcutta",
        optionB: "Bombay",
        optionC: "Madras",
        correctAnswer: "Calcutta",
      }),
      shuffleOptions({
        question: "Who is regarded as the founder of the city of Calcutta?",
        optionA: "Lord Ripon",
        optionB: "Job Charnock",
        optionC: "Herbert Baker",
        correctAnswer: "Job Charnock",
      }),
      shuffleOptions({
        question: "Which city consisted of seven islands that were later merged?",
        optionA: "Delhi",
        optionB: "Bombay",
        optionC: "Surat",
        correctAnswer: "Bombay",
      }),
      shuffleOptions({
        question: "Which British act first introduced municipal government in major towns?",
        optionA: "Police Act",
        optionB: "Municipal Improvement Act",
        optionC: "Act XXVI of 1850",
        correctAnswer: "Act XXVI of 1850",
      }),
      shuffleOptions({
        question: "Who established the first public works department in India?",
        optionA: "Lord Dalhousie",
        optionB: "Lord Canning",
        optionC: "Lord Mayo",
        correctAnswer: "Lord Dalhousie",
      }),
      shuffleOptions({
        question: "Which ruler rebuilt Delhi and named it Shahjahanabad?",
        optionA: "Aurangzeb",
        optionB: "Shah Jahan",
        optionC: "Akbar",
        correctAnswer: "Shah Jahan",
      }),
      shuffleOptions({
        question: "Which city grew as an important centre for opium trade during the 18th–19th centuries?",
        optionA: "Madras",
        optionB: "Calcutta",
        optionC: "Lucknow",
        correctAnswer: "Calcutta",
      }),
      shuffleOptions({
        question: "Which European power first reached the coast where Madras later developed?",
        optionA: "Dutch",
        optionB: "Portuguese",
        optionC: "French",
        correctAnswer: "Portuguese",
      }),
      shuffleOptions({
        question: "Which body in Delhi manages water supply and wastewater treatment?",
        optionA: "NDMC",
        optionB: "Delhi Vidyut Board",
        optionC: "Delhi Jal Board (DJB)",
        correctAnswer: "Delhi Jal Board (DJB)",
      }),
      shuffleOptions({
        question: "Which transport system expanded rapidly after its introduction and connects Delhi with nearby towns?",
        optionA: "Air Shuttle",
        optionB: "Metro Rail",
        optionC: "Monorail",
        correctAnswer: "Metro Rail",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The British introduced the first railway line in India between Bombay and ______.",
        optionA: "Thane",
        optionB: "Pune",
        optionC: "Surat",
        correctAnswer: "Thane",
      }),
      shuffleOptions({
        question: "The non-white population of Madras lived in ______ Town.",
        optionA: "White",
        optionB: "Black",
        optionC: "Colonial",
        correctAnswer: "Black",
      }),
      shuffleOptions({
        question: "Delhi lies at the western banks of the ______ River.",
        optionA: "Ganga",
        optionB: "Godavari",
        optionC: "Yamuna",
        correctAnswer: "Yamuna",
      }),
      shuffleOptions({
        question: "The British shifted their capital from Calcutta to Delhi in ______.",
        optionA: "1857",
        optionB: "1911",
        optionC: "1905",
        correctAnswer: "1911",
      }),
      shuffleOptions({
        question: "The headquarters of the East India Company shifted from Surat to Bombay in ______.",
        optionA: "1687",
        optionB: "1787",
        optionC: "1857",
        correctAnswer: "1687",
      }),
      shuffleOptions({
        question: "The police stations during British rule were known as ______.",
        optionA: "Kotwalis",
        optionB: "Mandis",
        optionC: "Chowks",
        correctAnswer: "Kotwalis",
      }),
      shuffleOptions({
        question: "The British built their first factory in India at ______.",
        optionA: "Calcutta",
        optionB: "Surat",
        optionC: "Patna",
        correctAnswer: "Surat",
      }),
      shuffleOptions({
        question: "The public works department also constructed the ______ Road from Calcutta to Peshawar.",
        optionA: "Marine",
        optionB: "Grand Trunk",
        optionC: "Victoria",
        correctAnswer: "Grand Trunk",
      }),
      shuffleOptions({
        question: "Delhi expanded later on the ______ bank of the Yamuna as well.",
        optionA: "Northern",
        optionB: "Eastern",
        optionC: "Western",
        correctAnswer: "Eastern",
      }),
      shuffleOptions({
        question: "The administrative area planned by the British in Delhi was known as ______ Delhi.",
        optionA: "Old",
        optionB: "New",
        optionC: "South",
        correctAnswer: "New",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Bombay became a major port after the British received it as dowry in 1661.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Portuguese built a port at Madras in 1522.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Delhi has three municipal bodies: MCD, NDMC and Delhi Cantonment Board.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The police organisation was restructured again in 1902.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Railways had no impact on internal migration in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "British-built cities often had broad streets lined with trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shahjahanabad was designed by Edwin Lutyens.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The public works department also constructed canals and bridges.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Delhi was considered a strategic location because it lay near the Aravalli Hills.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Delhi Metro was the first railway line started by the British.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
