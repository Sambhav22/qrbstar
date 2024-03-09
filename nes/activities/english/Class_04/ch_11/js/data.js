export const chapter = "Chapter - 11: Birbal's Wit";
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
        question: "What is Birbal known for in the text?",
        optionA: "His singing talent",
        optionB: "His presence of mind and wit",
        optionC: "His sword fighting skills",
        correctAnswer: "B) His presence of mind and wit",
     }),
      shuffleOptions({
        question:
          "How did Birbal help Emperor Akbar shorten the road on a hot and tiring day?",
        optionA: "He used a magical spell",
        optionB: "He told a long and intriguing story",
        optionC: "He found a hidden shortcut",
        correctAnswer: "B) He told a long and intriguing story",
     }),
      shuffleOptions({
        question:
          "Why was Emperor Akbar furious with Birbal during his visit to Persia?",
        optionA: "Birbal insulted the Persians",
        optionB: "Birbal belittled the king of Persia",
        optionC: "Birbal praised the king of Persia too much",
        correctAnswer: "B) Birbal belittled the king of Persia",
     }),
      shuffleOptions({
        question:
          "How did Birbal explain his comparison of the kings to Emperor Akbar?",
        optionA: "He apologized to Akbar",
        optionB: "He called the king of Persia weak",
        optionC: "He explained that Akbar's power was growing stronger",
        correctAnswer:
          "C) He explained that Akbar's power was growing stronger",
     }),
      shuffleOptions({
        question:
          "Why did a farmer and his neighbor go to Emperor Akbar's court?",
        optionA: "To complain about the noisy neighbors",
        optionB: "To seek advice on farming",
        optionC: "To resolve a dispute over a well",
        correctAnswer: "C) To resolve a dispute over a well",
     }),
      shuffleOptions({
        question: "What did the neighbor sell to the farmer?",
        optionA: "A bucket of water",
        optionB: "A well and its water",
        optionC: "Just the well, not the water",
        correctAnswer: "C) Just the well, not the water",
     }),
      shuffleOptions({
        question: "How did Birbal resolve the dispute over the well and water?",
        optionA: "He ordered the farmer to pay for the water.",
        optionB: "He ordered the neighbor to empty the well of water.",
        optionC: "He punished both the farmer and the neighbor.",
        correctAnswer: "B) He ordered the neighbor to empty the well of water.",
     }),
      shuffleOptions({
        question:
          "What did Birbal order the neighbor to do to resolve the dispute?",
        optionA: "Pay the farmer for the well and water",
        optionB: "Empty the well of all the water",
        optionC: "Buy the well back from the farmer",
        correctAnswer: "B) Empty the well of all the water",
     }),
      shuffleOptions({
        question: "Why did the neighbor apologize to the farmer in the end?",
        optionA: "Because he realized he had lost the well",
        optionB: "Because he wanted to be friends with the farmer",
        optionC: "Because he wanted to avoid paying rent",
        correctAnswer: "A) Because he realized he had lost the well",
     }),
      shuffleOptions({
        question:
          "What was the ultimate outcome of the dispute over the well and water?",
        optionA: "The neighbor had to pay rent to the farmer.",
        optionB: "Both the farmer and neighbor were punished.",
        optionC: "The neighbor apologized and lost the well.",
        correctAnswer: "C) The neighbor apologized and lost the well.",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Birbal was an advisor to __________.",
        optionA: "The Queen",
        optionB: "Emperor Akbar",
        optionC: "The Prime Minister",
        correctAnswer: "B) Emperor Akbar",
     }),
      shuffleOptions({
        question: "Birbal is known for his presence of mind and __________.",
        optionA: "Strength",
        optionB: "Courage",
        optionC: "Wit",
        correctAnswer: "C) Wit",
     }),
      shuffleOptions({
        question:
          "Once, when Akbar was traveling, he asked if anyone could shorten the __________.",
        optionA: "Day",
        optionB: "Road",
        optionC: "Journey",
        correctAnswer: "B) Road",
     }),
      shuffleOptions({
        question:
          "Birbal told Akbar a long and intriguing story to __________ the road.",
        optionA: "Extend",
        optionB: "Pave",
        optionC: "Shorten",
        correctAnswer: "C) Shorten",
     }),
      shuffleOptions({
        question:
          "In Persia, a nobleman asked Birbal to compare the king of Persia with __________.",
        optionA: "The Queen",
        optionB: "His own king",
        optionC: "The Prime Minister",
        correctAnswer: "B) His own king",
     }),
      shuffleOptions({
        question: "Birbal compared the king of Persia to a __________ moon.",
        optionA: "Full",
        optionB: "Half",
        optionC: "Crescent",
        correctAnswer: "A) Full",
     }),
      shuffleOptions({
        question:
          "Akbar was furious with Birbal for apparently belittling him and called him a __________.",
        optionA: "Hero",
        optionB: "Traitor",
        optionC: "Jester",
        correctAnswer: "B) Traitor",
     }),
      shuffleOptions({
        question:
          "Birbal explained that the full moon starts to wane and finally __________, while the waxing moon grows from strength to strength.",
        optionA: "Brighten",
        optionB: "Disappear",
        optionC: "Change color",
        correctAnswer: "B) Disappear",
     }),
      shuffleOptions({
        question:
          "A farmer complained to Emperor Akbar about his neighbor wanting him to pay for the well's __________.",
        optionA: "Water",
        optionB: "Land",
        optionC: "Air",
        correctAnswer: "A) Water",
     }),
      shuffleOptions({
        question:
          "To resolve the well dispute, Birbal ordered the neighbor to empty the well of all __________.",
        optionA: "Money",
        optionB: "Water",
        optionC: "Fish",
        correctAnswer: "B) Water",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Birbal was a wise advisor to Emperor Akbar.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Birbal's witty stories always made Emperor Akbar laugh.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Akbar once asked Birbal to find a shortcut through a hilly terrain.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Birbal found a hidden shortcut to shorten the road for Akbar.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "During his visit to Persia, Birbal compared the king of Persia to a new moon.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Akbar was pleased with Birbal's comparison of the kings and welcomed him warmly.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "A farmer and his neighbor went to Emperor Akbar's court to complain about a well.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The neighbor sold the well to the farmer but not the water.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Birbal ordered the neighbor to pay the farmer for the water.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "In the end, the neighbor apologized and kept the well and the water.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
