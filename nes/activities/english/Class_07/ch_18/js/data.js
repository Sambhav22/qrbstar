export const chapter = "Chapter -18: A Horse and Two Goats";
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
          question: "What material was the statue of the horse made of?",
          optionA: "Wood",
          optionB: "Clay",
          optionC: "Marble",
          correctAnswer: "B. Clay",
        }),
      shuffleOptions({
          question: "Where did Muni sit while watching his goats graze?",
          optionA: "At a marketplace",
          optionB: "Under a tree",
          optionC: "At the foot of the statue",
          correctAnswer: "C. At the foot of the statue",
        }),
      shuffleOptions({
          question:
            "What did the red-faced foreigner find marvelous near the statue?",
          optionA: "A painting",
          optionB: "A gas station",
          optionC: "The clay horse",
          correctAnswer: "C. The clay horse",
        }),
      shuffleOptions({
          question:
            "How did Muni feel about the foreigner showing interest in the statue?",
          optionA: "Excited",
          optionB: "Nervous",
          optionC: "Indifferent",
          correctAnswer: "B. Nervous",
        }),
      shuffleOptions({
          question: "What did the foreigner offer to buy from Muni?",
          optionA: "His goats",
          optionB: "The clay horse",
          optionC: "His house",
          correctAnswer: "B. The clay horse",
        }),
      shuffleOptions({
          question:
            "What reason did Muni give for the horse being significant?",
          optionA: "It brings good luck",
          optionB: "It signifies the end of the world",
          optionC: "It's a symbol of prosperity",
          correctAnswer: "B. It signifies the end of the world",
        }),
      shuffleOptions({
          question:
            "How did Muni react to the foreigner's offer to buy the horse?",
          optionA: "Accepted the offer",
          optionB: "Rejected the offer",
          optionC: "Tried to explain its significance",
          correctAnswer: "C. Tried to explain its significance",
        }),
      shuffleOptions({
          question: "What was the foreigner's trade or business?",
          optionA: "Coffee trader",
          optionB: "Antique collector",
          optionC: "Real estate agent",
          correctAnswer: "A. Coffee trader",
        }),
      shuffleOptions({
          question:
            "How did Muni plan to use the money he earned from selling the goats?",
          optionA: "Open a shop",
          optionB: "Buy more goats",
          optionC: "Travel to a different town",
          correctAnswer: "A. Open a shop",
        }),
      shuffleOptions({
          question:
            "Why did Muni's wife accuse him of stealing when he showed her the money?",
          optionA: "The goats had returned",
          optionB: "She misunderstood him",
          optionC: "Fear of police involvement",
          correctAnswer: "A. The goats had returned",
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
            "Muni could ________ under the belly of the horse for shade.",
          optionA: "Sit",
          optionB: "Crouch",
          optionC: "Sleep",
          correctAnswer: "B) Crouch",
        }),
      shuffleOptions({
          question:
            "The horse was made of clay, baked, burnt, and brightly colored, and it reared its head proudly, prancing its forelegs in the air and flourishing its tail in a ________.",
          optionA: "Spiral",
          optionB: "Loop",
          optionC: "Knot",
          correctAnswer: "B) Loop",
        }),
      shuffleOptions({
          question:
            "Muni watched the mountain road for a time signal, and when the green bus appeared, he could ________.",
          optionA: "Stay",
          optionB: "Leave",
          optionC: "Sleep",
          correctAnswer: "B) Leave",
        }),
      shuffleOptions({
          question:
            "The foreigner, a red-faced man, approached Muni and asked if there was a gas station nearby or if he had to wait until ________.",
          optionA: "Another car comes",
          optionB: "The sun sets",
          optionC: "Tomorrow morning",
          correctAnswer: "A) Another car comes",
        }),
      shuffleOptions({
          question:
            "Muni felt he should get up and run away, but he cursed his age because he couldn't readily put his limbs into ________.",
          optionA: "Rest",
          optionB: "Action",
          optionC: "Sleep",
          correctAnswer: "B) Action",
        }),
      shuffleOptions({
          question:
            "The foreigner wore khaki clothes, appearing to be a ________ or a ________.",
          optionA: "Chef, gardener",
          optionB: "Policeman, soldier",
          optionC: "Pilot, engineer",
          correctAnswer: "B) Policeman, soldier",
        }),
      shuffleOptions({
          question:
            "The red-faced man presented his card, revealing that he came from ________.",
          optionA: "Paris",
          optionB: "New York",
          optionC: "London",
          correctAnswer: "B) New York",
        }),
      shuffleOptions({
          question:
            "Muni spoke the only English expressions he had learnt, 'Yes, no.' Having exhausted his English vocabulary, he continued in ________.",
          optionA: "French",
          optionB: "Tamil",
          optionC: "Spanish",
          correctAnswer: "B) Tamil",
        }),
      shuffleOptions({
          question:
            "The foreigner implored, 'Please, please, I will speak slowly, please try to understand me. Can't you understand even a simple word of ________?'",
          optionA: "French",
          optionB: "English",
          optionC: "Spanish",
          correctAnswer: "B) English",
        }),
      shuffleOptions({
          question:
            "Muni, understanding that the other man was not an inquisitor, remained wary but explained that their village had always had a clean record and any crime must definitely be happening in the ________ village.",
          optionA: "Nearby",
          optionB: "Other",
          optionC: "Distant",
          correctAnswer: "B) Other",
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
            "Muni could move around the pedestal of the statue as the sun traveled up and westward.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "The horse in the story was made of metal.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The foreigner who approached Muni was wearing blue clothes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Muni spoke fluent English to the foreigner.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The red-faced man presented a card revealing he came from Paris.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The foreigner understood Tamil and carried on a conversation with Muni in that language.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The red-faced man wanted to buy Muni's two goats.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Muni successfully sold his goats to the red-faced man.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The foreigner used a brush to create spots on the Leopard.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The story concludes with the Leopard and the Ethiopian regretting the change in their appearances.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
