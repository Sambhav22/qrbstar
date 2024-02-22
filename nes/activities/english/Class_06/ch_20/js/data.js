export const chapter = "Chapter - 20: How the Leopard Got His Spots";
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
        question: "Where did the Leopard live in the beginning?",
        optionA: "In the forest",
        optionB: "On the High Veldt",
        optionC: "Near the river",
        correctAnswer: "On the High Veldt",
     }),
      shuffleOptions({
        question: "Which animals shared the High Veldt with the Leopard?",
        optionA: "Lions and Tigers",
        optionB: "Giraffe, Zebra, Eland, Koodoo, and Hartebeest",
        optionC: "Elephants and Rhinoceroses",
        correctAnswer: "Giraffe, Zebra, Eland, Koodoo, and Hartebeest",
     }),
      shuffleOptions({
        question: "How did the Leopard's appearance match the High Veldt?",
        optionA: "He was gray and fuzzy.",
        optionB: "He was exclusively sandy-yellowish-brown.",
        optionC: "He was covered in spots.",
        correctAnswer: "He was exclusively sandy-yellowish-brown.",
     }),
      shuffleOptions({
        question: "Who hunted with the Leopard on the High Veldt?",
        optionA: "A lion",
        optionB: "A hyena",
        optionC: "An Ethiopian with bows and arrows",
        correctAnswer: "An Ethiopian with bows and arrows",
     }),
      shuffleOptions({
        question: "Why did the Giraffe and Zebra start avoiding the Leopard?",
        optionA: "They were scared of the Ethiopian.",
        optionB: "The Leopard had sharp teeth and claws.",
        optionC: "The Leopard's appearance made him hard to spot.",
        correctAnswer: "The Leopard's appearance made him hard to spot.",
     }),
      shuffleOptions({
        question:
          "Where did the animals hide from the Leopard and the Ethiopian?",
        optionA: "In the mountains",
        optionB: "In a great forest",
        optionC: "In caves",
        correctAnswer: "In a great forest",
     }),
      shuffleOptions({
        question: "Who is described as the wisest animal in all South Africa?",
        optionA: "The Giraffe",
        optionB: "The Leopard",
        optionC: "Baviaan, the dog-headed Baboon",
        correctAnswer: "Baviaan, the dog-headed Baboon",
     }),
      shuffleOptions({
        question: "What did the Ethiopian change to hide better in the forest?",
        optionA: "His name",
        optionB: "His skin color",
        optionC: "His location",
        correctAnswer: "His skin color",
     }),
      shuffleOptions({
        question: "What did the Leopard choose to change to hide better?",
        optionA: "Stripes like Zebra",
        optionB: "Bright yellow spots",
        optionC: "Black spots on his yellow coat",
        correctAnswer: "Black spots on his yellow coat",
     }),
      shuffleOptions({
        question:
          "How do you know a Leopard's spots were made by the Ethiopian's fingers?",
        optionA: "They are perfectly round.",
        optionB: "They are larger than a human hand.",
        optionC: "There are always five marks left by five finger-tips.",
        correctAnswer: "There are always five marks left by five finger-tips.",
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
          "In the beginning, the Leopard lived in a place called the High Veldt, which was exclusively covered in ____________-coloured sand and rock.",
        options: ["Green", "Yellow", "Red"],
        correctAnswer: "Yellow",
     }),
      shuffleOptions({
        question:
          "The Leopard's appearance matched the Veldt to ____________ hair.",
        options: ["One", "Two", "Three"],
        correctAnswer: "One",
     }),
      shuffleOptions({
        question:
          "The Ethiopian hunted alongside the Leopard on the High Veldt, using ____________ and arrows.",
        options: ["Spears", "Bows", "Clubs"],
        correctAnswer: "Bows",
     }),
      shuffleOptions({
        question:
          "The Giraffe and the Zebra started avoiding the Leopard because he was difficult to ____________.",
        options: ["Catch", "Spot", "Identify"],
        correctAnswer: "Spot",
     }),
      shuffleOptions({
        question:
          "The animals hid in a great forest, which was exclusively full of ____________ and speckly shadows.",
        options: ["Water", "Trees", "Rocks"],
        correctAnswer: "Trees",
     }),
      shuffleOptions({
        question:
          "Baviaan, the wise Baboon, suggested to the Leopard to go into ____________.",
        options: ["Hiding", "Spots", "Other spots"],
        correctAnswer: "Other spots",
     }),
      shuffleOptions({
        question:
          "The Ethiopian decided to change his skin color to a nice working ____________.",
        options: ["Red", "Blue", "Blackish-brownish"],
        correctAnswer: "Blackish-brownish",
     }),
      shuffleOptions({
        question:
          "The Leopard chose to change his skin with ____________ on his yellow coat.",
        options: ["Dots", "Stripes", "Whiskers"],
        correctAnswer: "Dots",
     }),
      shuffleOptions({
        question:
          "The Leopard's spots were made by the Ethiopian's ____________.",
        options: ["Claws", "Teeth", "Fingers"],
        correctAnswer: "Fingers",
     }),
      shuffleOptions({
        question:
          "In the end, the Leopard and the Ethiopian lived happily ever after, content with their ____________.",
        options: ["Stripes and spots", "Yellow skin", "Changed appearances"],
        correctAnswer: "Stripes and spots",
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
          "Parrots and lovebirds were commonly kept as pets in North India in the past.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The parrot in the story refused to talk despite Aunt Ruby's efforts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Aunt Ruby gave up her efforts to show love to the parrot after it knocked off her spectacles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The responsibility of feeding the parrot fell upon Aunt Ruby.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Aunt Ruby's tantrums were pleasant to watch.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The narrator was responsible for leaving the cage door open, allowing the parrot to escape.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The parrot enjoyed green chillies and ripe tomatoes as treats.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Aunt Ruby was upset when the parrot escaped but was easily distracted with the promise of a new parrot.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The parrot never learned to talk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The parrot became a regular visitor to the garden and verandah, singing praises to Aunt Ruby.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
