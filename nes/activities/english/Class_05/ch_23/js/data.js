export const chapter = "Chapter - 22: The Tsunami  ";
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
        question: "Where did Muthu love to visit his grandfather?",
        optionA: "In a city",
        optionB: "In Puthur, Tamil Nadu",
        optionC: "In a different country",
        correctAnswer: "In Puthur, Tamil Nadu",
     }),
      shuffleOptions({
        question:
          "What surrounded the beach near Muthu's grandfather's cottage?",
        optionA: "Thick and tall pine trees",
        optionB: "Thick and tall palm trees",
        optionC: "Thick and tall oak trees",
        correctAnswer: "Thick and tall palm trees",
     }),
      shuffleOptions({
        question:
          "What did the children do when coconuts fell from the palm trees?",
        optionA: "Ignored them",
        optionB: "Used them as footballs",
        optionC: "Broke them open and drank the coconut water",
        correctAnswer: "Broke them open and drank the coconut water",
     }),
      shuffleOptions({
        question: "What did Muthu like to play with in the trees and bushes?",
        optionA: "Lions and tigers",
        optionB: "Rabbits and squirrels",
        optionC: "Elephants and giraffes",
        correctAnswer: "Rabbits and squirrels",
     }),
      shuffleOptions({
        question:
          "What was Muthu surprised to see during his winter vacation at his grandfather's village?",
        optionA: "A new playground",
        optionB: "The beach covered in shells",
        optionC: "The absence of trees and new houses near the sea",
        correctAnswer: "The absence of trees and new houses near the sea",
     }),
      shuffleOptions({
        question: "Why did people cut down the palm trees?",
        optionA: "To make space for a shopping mall",
        optionB: "To use the wood for fuel and furniture",
        optionC: "To build treehouses for children",
        correctAnswer: "To use the wood for fuel and furniture",
     }),
      shuffleOptions({
        question:
          "What were the names of the two big trees near Grandpa's front door?",
        optionA: "Tim and Tom",
        optionB: "Petu and Betu",
        optionC: "Ladoo and Coconut",
        correctAnswer: "Petu and Betu",
     }),
      shuffleOptions({
        question:
          "What natural disaster occurred during Muthu's visit to his grandfather's village?",
        optionA: "Tornado",
        optionB: "Earthquake",
        optionC: "Hurricane",
        correctAnswer: "Earthquake",
     }),
      shuffleOptions({
        question: "Where did Muthu find refuge during the tsunami?",
        optionA: "He climbed a mountain.",
        optionB: "He held onto the coconut tree.",
        optionC: "He swam to a nearby island.",
        correctAnswer: "He held onto the coconut tree.",
     }),
      shuffleOptions({
        question: "What does the coconut tree symbolize in the story?",
        optionA: "The power of the sea",
        optionB: "The destruction of nature",
        optionC: "Courage and patience",
        correctAnswer: "Courage and patience",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question:
          "Muthu loved to visit his ________________ who lived in Puthur in Tamil Nadu.",
        options: ["Uncle", "Grandfather", "Cousin"],
        correctAnswer: "Grandfather",
     }),
      shuffleOptions({
        question:
          "The beach was lined with thick and tall ________________ with green coconuts hanging from them.",
        options: ["Oak trees", "Pine trees", "Palm trees"],
        correctAnswer: "Palm trees",
     }),
      shuffleOptions({
        question:
          "When the coconuts fell down, the children would break them open and drink the ________________.",
        options: ["Orange juice", "Coconut water", "Lemonade"],
        correctAnswer: "Coconut water",
     }),
      shuffleOptions({
        question:
          "Muthu liked to play with the rabbits and squirrels ________________ in the trees and bushes.",
        options: ["Laughing", "Scampering", "Chirping"],
        correctAnswer: "Scampering",
     }),
      shuffleOptions({
        question:
          "In this winter vacation, Muthu was surprised to see several houses built near the sea, as people had cut down many ________________.",
        options: ["Pine trees", "Oak trees", "Palm trees"],
        correctAnswer: "Palm trees",
     }),
      shuffleOptions({
        question:
          "Grandpa's house was different, and he never allowed his trees to be ________________.",
        options: ["Watered", "Cut", "Trimmed"],
        correctAnswer: "Cut",
     }),
      shuffleOptions({
        question:
          "Grandpa had planted two big trees near the front door, and he called one of them ________________.",
        options: ["Sweetie", "Petu", "Coconut"],
        correctAnswer: "Petu",
     }),
      shuffleOptions({
        question:
          "When an earthquake struck, Grandpa and Muthu ran outside the house, thinking it would be ________________.",
        options: ["A picnic", "Safe", "A tsunami"],
        correctAnswer: "Safe",
     }),
      shuffleOptions({
        question:
          "Muthu was caught in a tsunami, and he clung to a big ________________.",
        options: ["Banyan tree", "Coconut tree", "Oak tree"],
        correctAnswer: "Coconut tree",
     }),
      shuffleOptions({
        question:
          "The coconut tree in the story symbolizes ________________ and ________________.",
        options: [
          "Fear and danger",
          "Courage and patience",
          "Love and friendship",
        ],
        correctAnswer: "Courage and patience",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question:
          "The white people in South Africa ruled the country during the mentioned period.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Black laborers in South Africa were not allowed to enter whites-only areas for work without a permit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The black man with the permit chose to hide instead of running when they saw the approaching policeman.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The policeman caught the second man without a permit and let him go after seeing his permit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The first black man with a permit ran to trick the policeman into believing he didn't have one.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Both of the black men were running for their health, as advised by their doctors.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The second man didn't stop running when he saw the policeman because he thought the policeman had been ordered to run by his doctor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The text suggests that the white people in South Africa treated black people equally in all areas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The black man with the permit initially refused to run when the policeman approached them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The second man without a permit was eventually caught by the policeman.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
