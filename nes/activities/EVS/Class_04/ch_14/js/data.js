export const chapter = "Chapter - 14: Travel - A Fun";
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
          question:
            "What are some examples of private transport mentioned in the text?",
          optionA: "Buses, trains, scooters",
          optionB: "Scooters, motorcycles, cars",
          optionC: "Aeroplanes, motorcycles, cars",
          correctAnswer: "b) Scooters, motorcycles, cars",
         }),
      shuffleOptions({
          question:
            "How do people pay for using public transport according to the text?",
          optionA: "No payment is required",
          optionB: "Payment is made through fuel",
          optionC: "Tickets are bought with money",
          correctAnswer: "c) Tickets are bought with money",
         }),
      shuffleOptions({
          question: "What is the Indian currency called?",
          optionA: "Dollar",
          optionB: "Peso",
          optionC: "Rupee",
          correctAnswer: "c) Rupee",
         }),
      shuffleOptions({
          question: "What is marked on one side of a coin?",
          optionA: "National Emblem",
          optionB: "Year of minting and value",
          optionC: "Watermark and security thread",
          correctAnswer: "b) Year of minting and value",
         }),
      shuffleOptions({
          question: "What does the watermark on a banknote depict?",
          optionA: "National Emblem",
          optionB: "Gandhiji's face",
          optionC: "Serial number",
          correctAnswer: "b) Gandhiji's face",
         }),
      shuffleOptions({
          question:
            "What animals are mentioned as being used for transportation in the text?",
          optionA: "Lions and tigers",
          optionB: "Oxen, horses, donkeys, camels, and elephants",
          optionC: "Dogs and cats",
          correctAnswer: "b) Oxen, horses, donkeys, camels, and elephants",
         }),
      shuffleOptions({
          question: "What feature discourages the making of fake banknotes?",
          optionA: "Watermark",
          optionB: "Serial number",
          optionC: "Security thread",
          correctAnswer: "c) Security thread",
         }),
      shuffleOptions({
          question:
            "In which areas are oxen, horses, donkeys, camels, and elephants still common modes of transport?",
          optionA: "Urban areas",
          optionB: "Suburban areas",
          optionC: "Rural areas",
          correctAnswer: "c) Rural areas",
         }),
      shuffleOptions({
          question: "Which note has a picture of Hampi on its backside?",
          optionA: "10 rupee note",
          optionB: "50 rupee note",
          optionC: "2000 rupee note",
          correctAnswer: "b) 50 rupee note",
         }),
      shuffleOptions({
          question: "When was the 2000 rupee note withdrawn from circulation?",
          optionA: "2022",
          optionB: "2023",
          optionC: "2024",
          correctAnswer: "b) 2023",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question:
            "The means of _______ used by us to travel are private or public.",
          options: ["communication", "transport", "navigation"],
          correctAnswer: "transport",
         }),
      shuffleOptions({
          question:
            "If we travel using private means of transport, we do not pay anything except for the _______.",
          options: ["tickets", "fuel", "maintenance"],
          correctAnswer: "fuel",
         }),
      shuffleOptions({
          question: "Indian currency is called the _______.",
          options: ["Euro", "Yen", "Rupee"],
          correctAnswer: "Rupee",
         }),
      shuffleOptions({
          question: "Money made of metal is called _______.",
          options: ["note", "credit", "coin"],
          correctAnswer: "coin",
         }),
      shuffleOptions({
          question:
            "Coins have a great historical importance. In ancient times, kings used coins made up of gold, silver, or bronze known as _______.",
          options: ["talents", "dinars", "mohars"],
          correctAnswer: "mohars",
         }),
      shuffleOptions({
          question: "Bank notes are made of special _______.",
          options: ["fabric", "paper", "plastic"],
          correctAnswer: "paper",
         }),
      shuffleOptions({
          question:
            "There is a watermark which shows the face of _______ on the front side of the notes.",
          options: ["Tagore", "Gandhiji", "Nehru"],
          correctAnswer: "Gandhiji",
         }),
      shuffleOptions({
          question:
            "If you hold a bank note of any value against light, you will see a straight line across the width of the note, a little away from the centre. This line is the _______.",
          options: ["barcode", "security thread", "magnetic strip"],
          correctAnswer: "security thread",
         }),
      shuffleOptions({
          question:
            "The signature of the Governor of Reserve Bank of India and the value of the note also appear on its _______ side.",
          options: ["back", "left", "right"],
          correctAnswer: "front",
         }),
      shuffleOptions({
          question:
            "When man started leading a settled life in villages and cities, he learnt to tame animals for his own use, including oxen, horses, donkeys, camels, and elephants used for _______.",
          options: ["farming", "transportation", "entertainment"],
          correctAnswer: "transportation",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Private means of transport require payment for tickets.",
          options: ["True", "False"],
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Bank notes are made of plastic.",
          options: ["True", "False"],
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Coins have only one side with the National Emblem.",
          options: ["True", "False"],
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "The Indian currency is known as the Yen.",
          options: ["True", "False"],
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "The 2000 rupee note has been withdrawn from circulation.",
          options: ["True", "False"],
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "The watermark on banknotes depicts the face of Nehru.",
          options: ["True", "False"],
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Animals like lions and tigers were used for transportation in ancient times.",
          options: ["True", "False"],
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "The value of a note is given in 10 Indian languages on the right side of the picture.",
          options: ["True", "False"],
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "The security thread on a banknote is imprinted to encourage the making of fake notes.",
          options: ["True", "False"],
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "In rural areas of India, oxen, horses, donkeys, camels, and elephants are still common modes of transport.",
          options: ["True", "False"],
          correctAnswer: "True",
           }),
    ]),
  }
}

export var activityData;
