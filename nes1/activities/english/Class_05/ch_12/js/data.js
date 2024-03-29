export const chapter = "Chapter -12: At the Top of the World";
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
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question:
            "What is the primary reason people are attracted to mountains, as mentioned in the passage?",
          optionA: "Because they are covered with snow",
          optionB: "Due to their infinite beauty",
          optionC: "Because they are the highest points in the world",
          correctAnswer: "Due to their infinite beauty",
        }),
      shuffleOptions({
          question:
            "Among the Himalayas, which mountain is mentioned as the highest peak in the world?",
          optionA: "K2",
          optionB: "Mount Everest",
          optionC: "Annapurna",
          correctAnswer: "Mount Everest",
        }),
      shuffleOptions({
          question:
            "What qualities are mentioned as essential for mountaineering success?",
          optionA: "Teamwork and personal qualities like fortitude and courage",
          optionB: "Physical strength and technical skills",
          optionC: "Planning and preparation",
          correctAnswer:
            "Teamwork and personal qualities like fortitude and courage",
        }),
      shuffleOptions({
          question:
            "What happened during the ascent on 15-16 May, according to the passage?",
          optionA: "They reached the Summit Camp",
          optionB: "They faced severe cold",
          optionC: "An avalanche occurred, and Bachendri Pal was injured",
          correctAnswer: "An avalanche occurred, and Bachendri Pal was injured",
        }),
      shuffleOptions({
          question: "What did Bachendri Pal do after the avalanche incident?",
          optionA: "She decided to abandon the climb",
          optionB: "She continued to climb up further",
          optionC: "She called for immediate evacuation",
          correctAnswer: "She continued to climb up further",
        }),
      shuffleOptions({
          question:
            "On which date did Bachendri Pal and her teammate start the ascent towards the summit?",
          optionA: "15 May, 1984",
          optionB: "22 May, 1984",
          optionC: "23 May, 1984",
          correctAnswer: "23 May, 1984",
        }),
      shuffleOptions({
          question:
            "What did Bachendri Pal and her teammate use to avoid skidding on the steep frozen slopes?",
          optionA: "Ice-axes",
          optionB: "Ropes",
          optionC: "Crampons",
          correctAnswer: "Ice-axes",
        }),
      shuffleOptions({
          question: "What time did Bachendri Pal reach the summit?",
          optionA: "4:00 a.m.",
          optionB: "6:20 a.m.",
          optionC: "1:07 p.m.",
          correctAnswer: "1:07 p.m.",
        }),
      shuffleOptions({
          question: "What did Bachendri Pal do when she reached the summit?",
          optionA: "She immediately began descending",
          optionB: "She kissed the peak and said a short prayer",
          optionC: "She celebrated for an hour",
          correctAnswer: "She kissed the peak and said a short prayer",
        }),
      shuffleOptions({
          question: "What was Bachendri Pal's achievement on Everest?",
          optionA: "First woman to attempt the climb",
          optionB:
            "Fifth woman in the world and the first Indian to reach the summit",
          optionC: "Leader of the climbing team",
          correctAnswer:
            "Fifth woman in the world and the first Indian to reach the summit",
   }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question: "When covered with snow, mountains shine like __________.",
          optionA: "Gold",
          optionB: "Silver",
          optionC: "Crystal",
          correctAnswer: "Silver",
        }),
      shuffleOptions({
          question:
            "Bachendri Pal was born in 1954 in the village of Nakuri in __________.",
          optionA: "Garhwal",
          optionB: "Annapurna",
          optionC: "K2",
          correctAnswer: "Garhwal",
        }),
      shuffleOptions({
          question: "Mount Everest is the __________ peak in the world.",
          optionA: "Tallest",
          optionB: "Shortest",
          optionC: "Steepest",
          correctAnswer: "Tallest",
        }),
      shuffleOptions({
          question:
            "Mountaineering is a challenging adventure that requires planning, preparation, training, and __________ of resources.",
          optionA: "Utilization",
          optionB: "Conservation",
          optionC: "Management",
          correctAnswer: "Management",
        }),
      shuffleOptions({
          question:
            "Bachendri Pal's first climb on Everest started on __________, 1984.",
          optionA: "1 May",
          optionB: "8 May",
          optionC: "15 May",
          correctAnswer: "8 May",
        }),
      shuffleOptions({
          question: "Bachendri Pal reached the Summit Camp on __________ May.",
          optionA: "9",
          optionB: "15",
          optionC: "22",
          correctAnswer: "9",
        }),
      shuffleOptions({
          question:
            "The avalanche incident occurred when Bachendri Pal was at __________.",
          optionA: "Camp II",
          optionB: "Camp III",
          optionC: "South Col camp",
          correctAnswer: "Camp III",
        }),
      shuffleOptions({
          question:
            "Bachendri Pal and her teammate Ang Dorjee started the ascent to the summit on __________ May, 1984.",
          optionA: "15",
          optionB: "22",
          optionC: "23",
          correctAnswer: "23",
        }),
      shuffleOptions({
          question:
            "The temperature during the ascent was as low as __________ degrees.",
          optionA: "Minus 20",
          optionB: "Minus 30 or 40",
          optionC: "Minus 50",
          correctAnswer: "Minus 30 or 40",
        }),
      shuffleOptions({
          question:
            "Bachendri Pal reached the summit at __________ on 23 May, 1984.",
          optionA: "4:00 a.m.",
          optionB: "6:20 a.m.",
          optionC: "1:07 p.m.",
          correctAnswer: "1:07 p.m.",
   }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question: "Mount Everest is the highest peak among the Himalayas.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Mountaineering requires only physical strength and technical skills.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Bachendri Pal started her first climb on Mount Everest on 1 May, 1984.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "An avalanche blew over the camp where Bachendri Pal was sleeping during her climb.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Bachendri Pal reached the Summit Camp on 15-16 May.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Bachendri Pal and her teammate Ang Dorjee started the ascent on 22 May, 1984.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The temperature during the ascent was as low as minus 50 degrees.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Bachendri Pal reached the summit at 4:00 a.m. on 23 May, 1984.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Mountaineering is essentially an individual effort, and teamwork is not crucial.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Bachendri Pal was the first woman in the world to reach the summit of Mount Everest.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
