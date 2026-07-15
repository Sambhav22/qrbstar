export const chapter = "Chapter -13: Life : It's Fun";
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
          question: "What is described as a joy in the given text?",
          optionA: "Life",
          optionB: "Birth",
          optionC: "Pleasure",
          correctAnswer: "Birth",
        }),
      shuffleOptions({
          question:
            "What is encouraged to be treated like a treasure in the text?",
          optionA: "Sun's warmth",
          optionB: "Life",
          optionC: "Nature's marvels",
          correctAnswer: "Life",
        }),
      shuffleOptions({
          question: "What is suggested to be feasted upon in the text?",
          optionA: "Earth's aroma",
          optionB: "Nature's marvels",
          optionC: "Sun's warmth",
          correctAnswer: "Nature's marvels",
        }),
      shuffleOptions({
          question:
            "What is described as colorful and intricate, resembling poetry?",
          optionA: "Flight of birds",
          optionB: "Stars",
          optionC: "Nature's marvels",
          correctAnswer: "Nature's marvels",
        }),
      shuffleOptions({
          question:
            "What dispels the gloom of the darkness of the night in the text?",
          optionA: "Flight of birds",
          optionB: "Twinkling stars",
          optionC: "Radiant moon",
          correctAnswer: "Radiant moon",
        }),
      shuffleOptions({
          question: "What is emphasized as not to be squandered in the text?",
          optionA: "Sun's warmth",
          optionB: "Time",
          optionC: "Earth's aroma",
          correctAnswer: "Time",
        }),
      shuffleOptions({
          question: "What is discouraged in the text regarding people's worth?",
          optionA: "Judging",
          optionB: "Relating",
          optionC: "Squandering",
          correctAnswer: "Judging",
        }),
      shuffleOptions({
          question:
            "What is suggested to be related to as friends, not foes, in the text?",
          optionA: "Beasts",
          optionB: "Birds",
          optionC: "Men",
          correctAnswer: "Men, beasts, and birds",
        }),
      shuffleOptions({
          question: "According to the text, what are all considered as?",
          optionA: "Treasures",
          optionB: "Friends",
          optionC: "Creatures",
          correctAnswer: "Creatures",
        }),
      shuffleOptions({
          question: "What is described as lustrous in the given text?",
          optionA: "Flight of birds",
          optionB: "Twinkling stars",
          optionC: "Sun's warmth",
          correctAnswer: "Twinkling stars",
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
          question: "Birth is a _______.",
          optionA: "Challenge",
          optionB: "Joy",
          optionC: "Mystery",
          correctAnswer: "Joy",
        }),
      shuffleOptions({
          question: "Life is described as a _______.",
          optionA: "Duty",
          optionB: "Pleasure",
          optionC: "Burden",
          correctAnswer: "Pleasure",
        }),
      shuffleOptions({
          question: '"Live it to the full, Treat it like a _______."',
          optionA: "Task",
          optionB: "Treasure",
          optionC: "Trial",
          correctAnswer: "Treasure",
        }),
      shuffleOptions({
          question: "Inhale the aroma of _______.",
          optionA: "Sky",
          optionB: "Earth",
          optionC: "Water",
          correctAnswer: "Earth",
        }),
      shuffleOptions({
          question: "Feast your eyes on Nature's _______.",
          optionA: "Mysteries",
          optionB: "Marvels",
          optionC: "Miracles",
          correctAnswer: "Marvels",
        }),
      shuffleOptions({
          question: "The flight of the _______ in the sky.",
          optionA: "Fish",
          optionB: "Birds",
          optionC: "Butterflies",
          correctAnswer: "Birds",
        }),
      shuffleOptions({
          question: "The twinkling stars so _______.",
          optionA: "Mysterious",
          optionB: "Lustrous",
          optionC: "Dull",
          correctAnswer: "Lustrous",
        }),
      shuffleOptions({
          question: "The radiant moon dispelling the _______.",
          optionA: "Light",
          optionB: "Gloom",
          optionC: "Stars",
          correctAnswer: "Gloom",
        }),
      shuffleOptions({
          question: "Squander not time, it is _______.",
          optionA: "Inexhaustible",
          optionB: "Precious",
          optionC: "Irrelevant",
          correctAnswer: "Precious",
        }),
      shuffleOptions({
          question: "Relate with everyone around, Men, _______ and Birds.",
          optionA: "Machines",
          optionB: "Beasts",
          optionC: "Monsters",
          correctAnswer: "Beasts",
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
          question: "The flight of birds in the sky is described as dull.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "In the text, life is portrayed as a burden.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Squandering time is encouraged in the given text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The twinkling stars are described as lustrous in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "The aroma of the Earth is not mentioned in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The text suggests that all creatures, including men, beasts, and birds, should be treated as foes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The radiant moon contributes to the darkness of the night in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Feasting your eyes on Nature's marvels is not recommended in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Judging other people's worth is advised in the given text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Treating life as a treasure is suggested in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
