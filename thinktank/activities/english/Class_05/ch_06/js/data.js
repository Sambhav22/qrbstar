export const chapter = "Chapter -06: Rain, Wind and Snow";
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
          question: "What is the purpose of the rain in the poem?",
          optionA: "To bring snow",
          optionB: "To bring flowers back",
          optionC: "To thin the leafy trees",
          correctAnswer: "To bring flowers back",
        }),
      shuffleOptions({
          question: "Which flowers are mentioned in the poem?",
          optionA: "Roses and tulips",
          optionB: "Yellow and cowslip",
          optionC: "Orchids and lilies",
          correctAnswer: "Yellow and cowslip",
        }),
      shuffleOptions({
          question: "What season is associated with the wind in the poem?",
          optionA: "Spring",
          optionB: "Summer",
          optionC: "Autumn",
          correctAnswer: "Autumn",
        }),
      shuffleOptions({
          question: "What is the wind doing to the leafy trees in the poem?",
          optionA: "Planting seeds",
          optionB: "Thinning the trees",
          optionC: "Providing shade",
          correctAnswer: "Thinning the trees",
        }),
      shuffleOptions({
          question:
            "What action does the poem suggest when the wind is roaring and shouting?",
          optionA: "Dance",
          optionB: "Bar the door and keep him out",
          optionC: "Embrace the wind",
          correctAnswer: "Bar the door and keep him out",
        }),
      shuffleOptions({
          question: "What does the snow cover in the poem?",
          optionA: "Flowers",
          optionB: "Fields",
          optionC: "Trees",
          correctAnswer: "Fields",
        }),
      shuffleOptions({
          question:
            "What is the purpose of covering up the seed with snow in the poem?",
          optionA: "Preventing growth",
          optionB: "Keeping warm through winter",
          optionC: "Attracting birds",
          correctAnswer: "Keeping warm through winter",
        }),
      shuffleOptions({
          question: "What are the three elements mentioned in the last stanza?",
          optionA: "Rain, hail, thunder",
          optionB: "Rain, wind, snow",
          optionC: "Sun, breeze, fog",
          correctAnswer: "Rain, wind, snow",
        }),
      shuffleOptions({
          question:
            "According to the poem, what is the intent of the rain, wind, and snow?",
          optionA: "Destruction",
          optionB: "Mischief",
          optionC: "Good intent",
          correctAnswer: "Good intent",
        }),
      shuffleOptions({
          question: "In what season do the flowers make a return in the poem?",
          optionA: "Summer",
          optionB: "Autumn",
          optionC: "Spring",
          correctAnswer: "Spring",
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
            "Rain, rain, April rain! Bring the flowers back again, Yellow, cowslip, violet, blue, Butter-cups and daisies too.",
          optionA: "May",
          optionB: "April",
          optionC: "June",
          correctAnswer: "April",
        }),
      shuffleOptions({
          question:
            "Wind, wind, Autumn wind! He the leafy trees has thinned, Loudly hear him roar and shout; Bar the door and keep him ____________.",
          optionA: "In",
          optionB: "Out",
          optionC: "Open",
          correctAnswer: "Out",
        }),
      shuffleOptions({
          question:
            "Snow, snow, pure white snow! O'er the fields thy covering throw. Cover up the ____________ so warm Through the winter safe from harm.",
          optionA: "Leaves",
          optionB: "Seed",
          optionC: "Flowers",
          correctAnswer: "Seed",
        }),
      shuffleOptions({
          question:
            "Rain, wind, snow, all three, Each in turn shall welcome be, Each and all in turn are ____________ On the earth with good intent.",
          optionA: "Enjoyed",
          optionB: "Sent",
          optionC: "Avoided",
          correctAnswer: "Sent",
        }),
      shuffleOptions({
          question:
            "Bring the flowers back again, Yellow, cowslip, violet, ____________, Butter-cups and daisies too.",
          optionA: "Pink",
          optionB: "Blue",
          optionC: "Red",
          correctAnswer: "Blue",
        }),
      shuffleOptions({
          question:
            "Wind, wind, Autumn wind! He the leafy trees has ____________, Loudly hear him roar and shout; Bar the door and keep him out.",
          optionA: "Watered",
          optionB: "Thinned",
          optionC: "Strengthened",
          correctAnswer: "Thinned",
        }),
      shuffleOptions({
          question:
            "Snow, snow, pure white snow! O'er the fields thy covering ____________. Cover up the seed so warm Through the winter safe from harm.",
          optionA: "Hide",
          optionB: "Throw",
          optionC: "Melt",
          correctAnswer: "Throw",
        }),
      shuffleOptions({
          question:
            "Rain, wind, snow, all three, Each in turn shall welcome be, Each and all in turn are ____________ On the earth with good intent.",
          optionA: "Sky",
          optionB: "Earth",
          optionC: "Ocean",
          correctAnswer: "Earth",
        }),
      shuffleOptions({
          question:
            "Bring the flowers back again, Yellow, ____________, violet, blue, Butter-cups and daisies too.",
          optionA: "Sunflower",
          optionB: "Cowslip",
          optionC: "Tulip",
          correctAnswer: "Cowslip",
        }),
      shuffleOptions({
          question:
            "Wind, wind, Autumn wind! He the ____________ trees has thinned, Loudly hear him roar and shout; Bar the door and keep him out.",
          optionA: "Fruitful",
          optionB: "Leafy",
          optionC: "Evergreen",
          correctAnswer: "Leafy",
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
          question: "Heavy rain in April brings flowers back.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "The wind in autumn thins the leafy trees.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Snow covers the seeds to keep them warm through winter.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Rain, wind, and snow are all sent with destructive intent.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Flowers such as cowslip and violet are mentioned in the poem.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Wind in autumn is gentle and soothing.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Snow covers the fields with a colorful blanket.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The poem suggests welcoming rain, wind, and snow.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "The wind shouts and roars loudly in autumn.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Rain brings harm to the seeds during winter.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
