export const chapter = "Chapter -23: The Tsunami";
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
          question: "Why did people cut down the palm trees near the beach?",
          optionA: "For building sandcastles",
          optionB: "For wood, fuel, and furniture",
          optionC: "To create more space for playing",
          correctAnswer: "For wood, fuel, and furniture",
        }),
      shuffleOptions({
          question:
            "What were the names of the two big trees near Grandpa's front door?",
          optionA: "Puthur and Tamil Nadu",
          optionB: "Petu and Betu",
          optionC: "Coconut and Ladoo",
          correctAnswer: "Petu and Betu",
        }),
      shuffleOptions({
          question:
            "What did Muthu do when the coconuts fell from the palm trees?",
          optionA: "Built sandcastles",
          optionB: "Drank coconut water",
          optionC: "Climbed the coconut trees",
          correctAnswer: "Drank coconut water",
        }),
      shuffleOptions({
          question: "What did Muthu do during the day on his winter vacation?",
          optionA: "Played with rabbits and squirrels",
          optionB: "Went fishing in little ponds",
          optionC: "All of the above",
          correctAnswer: "All of the above",
        }),
      shuffleOptions({
          question:
            "Why did Muthu and Grandpa run outside the house during the earthquake?",
          optionA: "To play on the beach",
          optionB: "They thought it would be safe",
          optionC: "To escape from the tsunami",
          correctAnswer: "They thought it would be safe",
        }),
      shuffleOptions({
          question: "What happened during the night that woke up Muthu?",
          optionA: "Earthquake",
          optionB: "Tsunami",
          optionC: "Hurricane",
          correctAnswer: "Earthquake",
        }),
      shuffleOptions({
          question:
            "How did Muthu get separated from Grandpa during the tsunami?",
          optionA: "Earthquake",
          optionB: "Waves carried him away",
          optionC: "Grandpa pushed him",
          correctAnswer: "Waves carried him away",
        }),
      shuffleOptions({
          question: "What did Muthu cling to during the tsunami?",
          optionA: "Another person",
          optionB: "A coconut tree",
          optionC: "Grandpa",
          correctAnswer: "A coconut tree",
        }),
      shuffleOptions({
          question:
            "What did Muthu realize about cutting down coconut palms during the tsunami?",
          optionA: "It helped prevent floods",
          optionB: "It caused more destruction",
          optionC: "It made the beach cleaner",
          correctAnswer: "It caused more destruction",
        }),
      shuffleOptions({
          question:
            "What does the coconut tree symbolize according to Grandpa?",
          optionA: "Destruction",
          optionB: "Courage and patience",
          optionC: "Loneliness",
          correctAnswer: "Courage and patience",
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
          question: "Muthu's grandfather lived in ________ in Tamil Nadu.",
          optionA: "Puthur",
          optionB: "Kerala",
          optionC: "Mumbai",
          correctAnswer: "Puthur",
        }),
      shuffleOptions({
          question: "The beach was lined with thick and tall ________ trees.",
          optionA: "Mango",
          optionB: "Palm",
          optionC: "Oak",
          correctAnswer: "Palm",
        }),
      shuffleOptions({
          question:
            "When coconuts fell down, the children would break them open and drink the coconut ________.",
          optionA: "Milk",
          optionB: "Water",
          optionC: "Juice",
          correctAnswer: "Water",
        }),
      shuffleOptions({
          question:
            "Muthu liked to play with ________ and squirrels scampering about in the trees and bushes.",
          optionA: "Dogs",
          optionB: "Rabbits",
          optionC: "Cats",
          correctAnswer: "Rabbits",
        }),
      shuffleOptions({
          question:
            "During the winter vacation, Muthu was surprised to find that there were hardly any ________ left.",
          optionA: "Mountains",
          optionB: "Rivers",
          optionC: "Trees",
          correctAnswer: "Trees",
        }),
      shuffleOptions({
          question:
            "Grandpa never allowed his trees to be cut; he hugged each palm tree in his ________.",
          optionA: "Garden",
          optionB: "Courtyard",
          optionC: "Orchard",
          correctAnswer: "Courtyard",
        }),
      shuffleOptions({
          question:
            "The two big trees near the front door were named ________ and Betu.",
          optionA: "Puthur",
          optionB: "Petu",
          optionC: "Puthu",
          correctAnswer: "Petu",
        }),
      shuffleOptions({
          question:
            "During the earthquake, people ran outside because they thought it would be ________.",
          optionA: "Safer",
          optionB: "More comfortable",
          optionC: "Darker",
          correctAnswer: "Safer",
        }),
      shuffleOptions({
          question: "Muthu got separated from Grandpa during the ________.",
          optionA: "Hurricane",
          optionB: "Earthquake",
          optionC: "Tsunami",
          correctAnswer: "Tsunami",
        }),
      shuffleOptions({
          question:
            "The coconut tree symbolizes courage and ________ according to Grandpa.",
          optionA: "Happiness",
          optionB: "Patience",
          optionC: "Sadness",
          correctAnswer: "Patience",
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
          question: "Muthu's grandfather lived in Puthur in Tamil Nadu.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "The beach was lined with thick and tall mango trees.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "When coconuts fell down, the children would break them open and drink the coconut juice.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Muthu liked to play with dogs and squirrels scampering about in the trees and bushes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "During the winter vacation, Muthu was surprised to find that there were plenty of trees left.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Grandpa never allowed his trees to be cut; he hugged each palm tree in his courtyard.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The two big trees near the front door were named Puthur and Betu.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "During the earthquake, people ran outside because they thought it would be darker.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Muthu got separated from Grandpa during the hurricane.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The coconut tree symbolizes courage and happiness according to Grandpa.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
