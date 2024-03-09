export const chapter = "Chapter -10: Jimmy Scarecrow's Presents";
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
          question: "What was Jimmy Scarecrow's greatest grief in the winter?",
          optionA: "Lack of friends",
          optionB: "Lack of presents",
          optionC: "Lack of occupation",
          correctAnswer: "C) Lack of occupation",
        }),
      shuffleOptions({
          question:
            "What did Jimmy Scarecrow ask Santa Claus for on Christmas Eve?",
          optionA: "A new coat",
          optionB: "A crazy quilt",
          optionC: "A little present",
          correctAnswer: "C) A little present",
        }),
      shuffleOptions({
          question:
            "What did Betsey give Jimmy Scarecrow as a Christmas present?",
          optionA: "A pair of mittens",
          optionB: "A doll-baby",
          optionC: "A crazy quilt",
          correctAnswer: "B) A doll-baby",
        }),
      shuffleOptions({
          question:
            "Why did Betsey bring Aunt Hannah's crazy quilt to Jimmy Scarecrow?",
          optionA: "To keep him warm",
          optionB: "To use as a sled",
          optionC: "As a Christmas prank",
          correctAnswer: "A) To keep him warm",
        }),
      shuffleOptions({
          question:
            "What did Santa Claus suggest Jimmy Scarecrow do at the North Pole?",
          optionA: "Scare away crows",
          optionB: "Scare away Arctic Explorers",
          optionC: "Help make toys",
          correctAnswer: "B) Scare away Arctic Explorers",
        }),
      shuffleOptions({
          question:
            "How did Santa Claus ensure the safety of the cornfield next summer?",
          optionA: "Installed a scarecrow",
          optionB: "Wrote a notice to crows",
          optionC: "Used a magic spell",
          correctAnswer: "B) Wrote a notice to crows",
        }),
      shuffleOptions({
          question:
            "What happened to the crazy quilt and the doll-baby when it started raining?",
          optionA: "They disappeared",
          optionB: "They turned into ice",
          optionC: "They got soaked through",
          correctAnswer: "C) They got soaked through",
        }),
      shuffleOptions({
          question:
            "Why did Aunt Hannah and Betsey think the quilt and doll were spoiled?",
          optionA: "They were too small",
          optionB: "They were not crazy enough",
          optionC: "They got wet in the rain",
          correctAnswer: "C) They got wet in the rain",
        }),
      shuffleOptions({
          question:
            "What did Aunt Hannah receive as a Christmas present the following year?",
          optionA: "A new crazy quilt",
          optionB: "A pair of spectacles",
          optionC: "Her old crazy quilt, remodelled",
          correctAnswer: "C) Her old crazy quilt, remodelled",
        }),
      shuffleOptions({
          question:
            "How did Jimmy Scarecrow ensure the safety of the cornfield in the absence of a scarecrow?",
          optionA: "Wrote a letter to crows",
          optionB: "Planted more corn",
          optionC: "Cast a protective spell",
          correctAnswer: "A) Wrote a letter to crows",
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
          question:
            "Jimmy Scarecrow's greatest grief in the winter was his lack of ____________.",
          optionA: "Friends",
          optionB: "Presents",
          optionC: "Occupation",
          correctAnswer: "C) Occupation",
        }),
      shuffleOptions({
          question:
            "On Christmas Eve, Santa Claus came in his sledge heaped high with presents, urging his team of reindeer across the field. Santa was on his way to the farmhouse where Betsey lived with her Aunt __________.",
          optionA: "Mary",
          optionB: "Susan",
          optionC: "Hannah",
          correctAnswer: "C) Hannah",
        }),
      shuffleOptions({
          question:
            "Betsey's Christmas doll-baby was tucked up against the fur collar of Santa Claus's ____________.",
          optionA: "Jacket",
          optionB: "Coat",
          optionC: "Vest",
          correctAnswer: "B) Coat",
        }),
      shuffleOptions({
          question:
            "The next morning, Betsey looked out at Jimmy Scarecrow standing alone in the field amidst the ____________.",
          optionA: "Flowers",
          optionB: "Snowdrifts",
          optionC: "Corn-stubble",
          correctAnswer: "C) Corn-stubble",
        }),
      shuffleOptions({
          question:
            "Betsey brought Jimmy Scarecrow a Christmas present, a ____________.",
          optionA: "Pair of mittens",
          optionB: "Doll-baby",
          optionC: "Crazy quilt",
          correctAnswer: "B) Doll-baby",
        }),
      shuffleOptions({
          question:
            "Jimmy Scarecrow felt happy with the doll-baby under his coat until the snow began to turn to ____________.",
          optionA: "Ice",
          optionB: "Rain",
          optionC: "Hail",
          correctAnswer: "B) Rain",
        }),
      shuffleOptions({
          question:
            "To keep the doll-baby from getting wet, Betsey suggested that Jimmy Scarecrow should keep her under his ____________.",
          optionA: "Hat",
          optionB: "Overcoat",
          optionC: "Scarf",
          correctAnswer: "B) Overcoat",
        }),
      shuffleOptions({
          question:
            "Aunt Hannah spread her crazy quilt over the sofa with an air of ____________ after working on it until the middle of the afternoon.",
          optionA: "Pride",
          optionB: "Regret",
          optionC: "Frustration",
          correctAnswer: "A) Pride",
        }),
      shuffleOptions({
          question:
            "Aunt Hannah set out through the snow to carry a slice of plum-pudding to her sister ____________, who lived down the road.",
          optionA: "Mary",
          optionB: "Susan",
          optionC: "Betsey",
          correctAnswer: "B) Susan",
        }),
      shuffleOptions({
          question:
            "When Christmas came round again, Aunt Hannah and Betsey found their presents in the sitting-room: Aunt Hannah's old crazy quilt, remodelled, and Betsey's doll-baby, a year ____________.",
          optionA: "Older",
          optionB: "Younger",
          optionC: "Smaller",
          correctAnswer: "A) Older",
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
          question:
            "Jimmy Scarecrow's greatest grief in the winter was his lack of occupation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "On Christmas Eve, Santa Claus came in his sledge heaped high with toys for the children in the farmhouse.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Betsey gave Jimmy Scarecrow a pair of mittens as a Christmas present.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "To keep the doll-baby dry, Betsey suggested that Jimmy Scarecrow should keep her under his hat.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Aunt Hannah spread her crazy quilt over the sofa with an air of regret.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Aunt Hannah went out through the snow to carry a slice of plum-pudding to her sister Mary.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Betsey's doll-baby grew an inch and could walk and talk after a year.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Santa Claus suggested that Jimmy Scarecrow should scare away crows at the North Pole.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Santa Claus wrote a notice to crows to keep the cornfield safe next summer.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Aunt Hannah and Betsey thought their presents were spoiled because they got wet in the rain.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
