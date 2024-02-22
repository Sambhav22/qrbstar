export const chapter = "Chapter - 10: The Burning Tail  ";
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
        question: "Who accompanied Rama during his fourteen-year exile?",
        optionA: "Sita",
        optionB: "Lakshamana",
        optionC: "Both A and B",
        correctAnswer: "Both A and B",
     }),
      shuffleOptions({
        question: "How did Ravana abduct Sita?",
        optionA: "He lured her away",
        optionB: "He kidnapped her during Rama's absence",
        optionC: "She went with him willingly",
        correctAnswer: "He kidnapped her during Rama's absence",
     }),
      shuffleOptions({
        question: "Who took it upon themselves to find and rescue Sita?",
        optionA: "Rama and Lakshamana",
        optionB: "Hanumana",
        optionC: "Vibhishana",
        correctAnswer: "Hanumana",
     }),
      shuffleOptions({
        question: "How did Hanumana reach Lanka?",
        optionA: "He swam across the sea",
        optionB: "He flew like an arrow",
        optionC: "He traveled by boat",
        correctAnswer: "He flew like an arrow",
     }),
      shuffleOptions({
        question: "Where was Sita held captive in Lanka?",
        optionA: "Ravana's palace",
        optionB: "Ashok Vatika",
        optionC: "Vibhishana's palace",
        correctAnswer: "Ashok Vatika",
     }),
      shuffleOptions({
        question: "How did Hanumana reveal his identity to Sita?",
        optionA: "He spoke her name",
        optionB: "He showed her a message from Rama",
        optionC: "He dropped a ring given by Rama",
        correctAnswer: "He dropped a ring given by Rama",
     }),
      shuffleOptions({
        question: "What was Ravana's offer to Sita?",
        optionA: "To make her the Queen Consort of Lanka",
        optionB: "To set her free",
        optionC: "To marry her secretly",
        correctAnswer: "To make her the Queen Consort of Lanka",
     }),
      shuffleOptions({
        question: "How did Hanumana create chaos in Ashok Vatika?",
        optionA: "He set fire to the garden",
        optionB: "He fought with the demonesses",
        optionC: "He destroyed Ravana's palace",
        correctAnswer: "He set fire to the garden",
     }),
      shuffleOptions({
        question:
          "Who ultimately defeated Hanumana and took him to Ravana's court?",
        optionA: "Meghanada",
        optionB: "Vibhishana",
        optionC: "Ravana's guards",
        correctAnswer: "Meghanada",
     }),
      shuffleOptions({
        question:
          "How did Hanumana escape Ravana's punishment involving his tail?",
        optionA: "He endured the punishment",
        optionB: "He used his powers to extinguish the fire",
        optionC: "Vibhishana intervened to save him",
        correctAnswer: "He used his powers to extinguish the fire",
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
          "After Rama and Lakshamana ____________ for her, they came to know that Ravana had taken her to Lanka.",
        options: ["searched", "hoped", "waited"],
        correctAnswer: "searched",
     }),
      shuffleOptions({
        question:
          "Hanumana took permission from Rama and, assuming a ____________ form, flew into the sky like an arrow.",
        options: ["gigantic", "invisible", "human"],
        correctAnswer: "gigantic",
     }),
      shuffleOptions({
        question: "Ravana's kingdom was made of ____________.",
        options: ["wood", "gold", "stones"],
        correctAnswer: "gold",
     }),
      shuffleOptions({
        question:
          "Hanumana waited until ____________ and then he flew into the city with the name of Rama on his lips.",
        options: ["sunrise", "nightfall", "noon"],
        correctAnswer: "nightfall",
     }),
      shuffleOptions({
        question:
          "Hanumana flew from house to house to see where Sita could be. He visited Ravana's palace too and saw him fast asleep ____________.",
        options: ["singing", "dancing", "snoring loudly"],
        correctAnswer: "snoring loudly",
     }),
      shuffleOptions({
        question:
          "Seeing Ravana, Sita turned her face away and took a ____________ in her hand.",
        options: ["flower", "strand of straw", "piece of cloth"],
        correctAnswer: "strand of straw",
     }),
      shuffleOptions({
        question:
          "Ravana wanted to marry Sita and make her the Queen Consort of Lanka, but she referred to him as a '____________ demon.'",
        options: ["benevolent", "ten-headed", "misunderstood"],
        correctAnswer: "ten-headed",
     }),
      shuffleOptions({
        question:
          "Hanumana plucked and ate fruits in Ashok Vatika. He also uprooted a few trees and ____________ the garden.",
        options: ["nurtured", "beautified", "destroyed"],
        correctAnswer: "destroyed",
     }),
      shuffleOptions({
        question:
          "Who ultimately defeated Hanumana and took him to Ravana's court?",
        options: ["Meghanada", "Vibhishana", "Ravana's guards"],
        correctAnswer: "Meghanada",
     }),
      shuffleOptions({
        question:
          "Hanumana set fire to the entire city of Lanka except for Vibhishana's palace and then plunged into the sea to put out the fire on his ____________.",
        options: ["tail", "wings", "body"],
        correctAnswer: "tail",
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
          "Rama was in exile for fourteen years with his brother Lakshamana and wife Sita.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Ravana abducted Seeta, and Rama and Lakshamana searched for her in Lanka.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Hanumana had the power to fly and decided to search for Sita in Lanka.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Ravana's kingdom in Lanka was made of wood.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Hanumana found Sita in Ravana's palace during the day.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Sita willingly agreed to marry Ravana and become the Queen Consort of Lanka.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Hanumana destroyed the garden in Ashok Vatika and upset the demons guarding it.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Meghanada defeated Hanumana and took him to Vibhishana's palace.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Ravana was pleased with Hanumana and wanted to reward him.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The money collected from the sale of the Nizam's shoe was used to build a library in the university.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
