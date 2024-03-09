export const chapter = "Chapter -08: Stopping by Woods on a snowy Evening";
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
          question: "Whose woods are being described in the poem?",
          optionA: "The narrator's",
          optionB: "A stranger's",
          optionC: "The horse's",
          correctAnswer: "A. The narrator's",
        }),
      shuffleOptions({
          question: "Where is the owner's house located?",
          optionA: "By the woods",
          optionB: "In the village",
          optionC: "Near the frozen lake",
          correctAnswer: "B. In the village",
        }),
      shuffleOptions({
          question: "Why does the narrator stop in the woods?",
          optionA: "To enjoy the snowfall",
          optionB: "To watch the woods fill up with snow",
          optionC: "To meet the owner",
          correctAnswer: "B. To watch the woods fill up with snow",
        }),
      shuffleOptions({
          question: "What does the horse think about stopping in the woods?",
          optionA: "It's normal",
          optionB: "It's queer",
          optionC: "It's exciting",
          correctAnswer: "B. It's queer",
        }),
      shuffleOptions({
          question: "What is the setting on the darkest evening of the year?",
          optionA: "By the frozen lake",
          optionB: "Between the woods and the lake",
          optionC: "In the village",
          correctAnswer: "B. Between the woods and frozen lake",
        }),
      shuffleOptions({
          question:
            "What does the horse do in response to the stop in the woods?",
          optionA: "Whinnies loudly",
          optionB: "Gives its harness bells a shake",
          optionC: "Refuses to move",
          correctAnswer: "B. Gives its harness bells a shake",
        }),
      shuffleOptions({
          question: "What is the only other sound mentioned in the poem?",
          optionA: "Laughter",
          optionB: "The sweep of easy wind and downy flake",
          optionC: "Footsteps",
          correctAnswer: "B. The sweep of easy wind and downy flake",
        }),
      shuffleOptions({
          question: "How are the woods described in the poem?",
          optionA: "Bright and lively",
          optionB: "Lovely, dark, and deep",
          optionC: "Haunted and scary",
          correctAnswer: "B. Lovely, dark, and deep",
        }),
      shuffleOptions({
          question: "What does the narrator say about the promises?",
          optionA: "They are forgotten",
          optionB: "They are irrelevant",
          optionC: "They have promises to keep, and miles to go before I sleep",
          correctAnswer:
            "C. They have promises to keep, and miles to go before I sleep",
        }),
      shuffleOptions({
          question: "How is the repetition used in the last line?",
          optionA: "To emphasize the fatigue of the narrator",
          optionB: "To convey a sense of urgency",
          optionC: "To express the beauty of the woods",
          correctAnswer: "A. To emphasize the fatigue of the narrator",
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
          question: "Whose woods ____ are I think I know.",
          optionA: "these",
          optionB: "those",
          optionC: "their",
          correctAnswer: "A. these",
        }),
      shuffleOptions({
          question: "My little horse must think it ____.",
          optionA: "normal",
          optionB: "queer",
          optionC: "exciting",
          correctAnswer: "B. queer",
        }),
      shuffleOptions({
          question: "To watch his woods fill up ____ snow.",
          optionA: "by",
          optionB: "with",
          optionC: "from",
          correctAnswer: "B. with",
        }),
      shuffleOptions({
          question: "Between the woods and frozen ____.",
          optionA: "river",
          optionB: "ocean",
          optionC: "lake",
          correctAnswer: "C. lake",
        }),
      shuffleOptions({
          question: "He gives his harness bells a ____.",
          optionA: "jingle",
          optionB: "shake",
          optionC: "ring",
          correctAnswer: "B. shake",
        }),
      shuffleOptions({
          question:
            "The only other sound's the sweep of ____ wind and downy flake.",
          optionA: "gentle",
          optionB: "harsh",
          optionC: "easy",
          correctAnswer: "C. easy",
        }),
      shuffleOptions({
          question: "The woods are lovely, dark, ____ deep.",
          optionA: "and",
          optionB: "but",
          optionC: "yet",
          correctAnswer: "B. but",
        }),
      shuffleOptions({
          question: "I have promises to ____, and miles to go before I sleep.",
          optionA: "break",
          optionB: "make",
          optionC: "keep",
          correctAnswer: "C. keep",
        }),
      shuffleOptions({
          question:
            "The horse thinks it's ____ to stop without a farmhouse near.",
          optionA: "normal",
          optionB: "strange",
          optionC: "common",
          correctAnswer: "B. strange",
        }),
      shuffleOptions({
          question: "The darkest evening of ____ year.",
          optionA: "the",
          optionB: "this",
          optionC: "that",
          correctAnswer: "A. the",
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
