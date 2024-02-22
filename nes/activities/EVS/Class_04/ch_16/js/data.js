export const chapter = "Chapter - 16: Tale of a River";
export const noOfActivities = 3

const shuffleQues = (ques) => {
  let arr = ques.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object
  const optionsArray = [optionA, optionB, optionC]

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  object.optionC = optionsArray[2]

  return object
}


if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
          question:
            "What river is mentioned as the most sacred river of India in the text?",
          optionA: "Yamuna",
          optionB: "Ganga",
          optionC: "Brahmaputra",
          correctAnswer: "b) Ganga",
 }),
      shuffleOptions({
          question:
            "How do perennial rivers like Ganga, Yamuna, and Brahmaputra get their water?",
          optionA: "From rainwater",
          optionB: "From melting glaciers",
          optionC: "From underground springs",
          correctAnswer: "b) From melting glaciers",
 }),
      shuffleOptions({
          question:
            "What is the main source of freshwater mentioned in the text?",
          optionA: "Rainwater",
          optionB: "Rivers",
          optionC: "Dams",
          correctAnswer: "b) Rivers",
 }),
      shuffleOptions({
          question: "What causes rain according to the text?",
          optionA: "Evaporation and condensation",
          optionB: "Melting glaciers",
          optionC: "Dam construction",
          correctAnswer: "a) Evaporation and condensation",
 }),
      shuffleOptions({
          question:
            "What are some man-made sources of water mentioned in the text?",
          optionA: "Aquatic plants",
          optionB: "Reservoirs and canals",
          optionC: "Rain fed rivers",
          correctAnswer: "b) Reservoirs and canals",
 }),
      shuffleOptions({
          question:
            "What is the harmful effect of using polluted water for irrigation mentioned in the text?",
          optionA: "Increased fertility of fields",
          optionB: "Infertility in some years",
          optionC: "Improved crop yield",
          correctAnswer: "b) Infertility in some years",
 }),
      shuffleOptions({
          question:
            "What man-made sources are helpful in producing electricity, according to the text?",
          optionA: "Canals",
          optionB: "Reservoirs",
          optionC: "Dams",
          correctAnswer: "c) Dams",
 }),
      shuffleOptions({
          question:
            "What is the primary cause of river water pollution mentioned in the text?",
          optionA: "Melting glaciers",
          optionB: "Dam construction",
          optionC: "Dumping normal to toxic wastes",
          correctAnswer: "c) Dumping normal to toxic wastes",
 }),
      shuffleOptions({
          question:
            "What is the consequence of water pollution on aquatic life, as per the text?",
          optionA: "Increased biodiversity",
          optionB: "Endangerment of fishes and plants",
          optionC: "Improved habitat",
          correctAnswer: "b) Endangerment of fishes and plants",
 }),
      shuffleOptions({
          question:
            "Which process involves river water turning into vapor and rising in the atmosphere?",
          optionA: "Condensation",
          optionB: "Evaporation",
          optionC: "Filtration",
          correctAnswer: "b) Evaporation",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question:
            "__________ is the most sacred river of India mentioned in the text.",
          optionA: "Yamuna",
          optionB: "Ganga",
          optionC: "Brahmaputra",
          correctAnswer: "b) Ganga",
 }),
      shuffleOptions({
          question:
            "Rivers like Ganga, Yamuna, and Brahmaputra get their water from the melting of ____________.",
          optionA: "glaciers",
          optionB: "rainwater",
          optionC: "underground springs",
          correctAnswer: "a) glaciers",
 }),
      shuffleOptions({
          question:
            "The main source of freshwater mentioned in the text is ____________.",
          optionA: "rainwater",
          optionB: "rivers",
          optionC: "dams",
          correctAnswer: "b) rivers",
 }),
      shuffleOptions({
          question:
            "Rain is caused by the process of ____________ and ____________.",
          optionA: "evaporation, condensation",
          optionB: "melting, freezing",
          optionC: "filtration, precipitation",
          correctAnswer: "a) evaporation, condensation",
 }),
      shuffleOptions({
          question:
            "Man-made sources of water mentioned in the text include ____________ and ____________.",
          optionA: "aquatic plants, reservoirs",
          optionB: "reservoirs, canals",
          optionC: "rain-fed rivers, dams",
          correctAnswer: "b) reservoirs, canals",
 }),
      shuffleOptions({
          question:
            "The harmful effect of using polluted water for irrigation is ____________ in some years.",
          optionA: "increased fertility",
          optionB: "infertility",
          optionC: "improved crop yield",
          correctAnswer: "b) infertility",
 }),
      shuffleOptions({
          question:
            "Dams are helpful in producing ____________ according to the text.",
          optionA: "freshwater",
          optionB: "electricity",
          optionC: "rainwater",
          correctAnswer: "b) electricity",
 }),
      shuffleOptions({
          question:
            "The primary cause of river water pollution mentioned in the text is dumping ____________.",
          optionA: "rainwater",
          optionB: "toxic wastes",
          optionC: "underground springs",
          correctAnswer: "b) toxic wastes",
 }),
      shuffleOptions({
          question:
            "Water pollution results in endangerment of ____________ and ____________.",
          optionA: "aquatic life, crops",
          optionB: "fishes, plants",
          optionC: "rivers, mountains",
          correctAnswer: "b) fishes, plants",
 }),
      shuffleOptions({
          question:
            "The process involving river water turning into vapor and rising in the atmosphere is called ____________.",
          optionA: "condensation",
          optionB: "evaporation",
          optionC: "precipitation",
          correctAnswer: "b) evaporation",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "The Ganga is the most sacred river of India.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "Perennial rivers like Ganga have water throughout the year.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question: "Rain fed rivers carry water only during the rainy season.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question: "Dams are not helpful in producing electricity.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Polluted water is full of germs and pollutants.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "Using polluted water for irrigation can result in increased fertility of fields.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Rainwater is the primary cause of river water pollution.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Water pollution endangers aquatic life and plants.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question: "Melting glaciers are the source of rainwater.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Evaporation is the process of water turning into vapor and rising in the atmosphere.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
           }),
    ]),
  }
}

export var activityData;
