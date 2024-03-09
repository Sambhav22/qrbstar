export const chapter = "Chapter -20:How the Leopard Got His Spots";
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
          question: "What was the Leopard's appearance in the High Veldt?",
          optionA: "Exclusively sandy-yellowish-brownish",
          optionB: "Grayish-yellowish catty-shaped",
          optionC: "Exclusively sandy-coloured",
          correctAnswer: "B. Grayish-yellowish catty-shaped",
        }),
      shuffleOptions({
          question:
            "Which animals lived exclusively in the High Veldt with the Leopard?",
          optionA: "Giraffe, Zebra, Eland, Koodoo, Hartebeest",
          optionB: "Giraffe, Elephant, Zebra, Lion, Buffalo",
          optionC: "Cheetah, Antelope, Rhino, Hyena, Wildebeest",
          correctAnswer: "A. Giraffe, Zebra, Eland, Koodoo, Hartebeest",
        }),
      shuffleOptions({
          question:
            "Why did the Giraffe, Zebra, and other animals leave the High Veldt?",
          optionA: "They were tired of the Leopard and Ethiopian.",
          optionB: "The Leopard surprised them during hunting.",
          optionC: "They wanted a change and found a forest.",
          correctAnswer: "C. They wanted a change and found a forest.",
        }),
      shuffleOptions({
          question: "How did the Giraffe and Zebra hide in the forest?",
          optionA: "By changing their colors",
          optionB: "By growing blotchy and stripy patterns",
          optionC: "By climbing tall trees",
          correctAnswer: "B. By growing blotchy and stripy patterns",
        }),
      shuffleOptions({
          question: "What advice did Baviaan give to the Leopard?",
          optionA: "Change your spots like the Ethiopian.",
          optionB: "Go into other spots as soon as possible.",
          optionC: "Keep hunting in the High Veldt.",
          correctAnswer: "B. Go into other spots as soon as possible.",
        }),
      shuffleOptions({
          question: "What did the Ethiopian change about himself in the end?",
          optionA: "His hair color",
          optionB: "His skin color",
          optionC: "His clothing",
          correctAnswer: "B. His skin color",
        }),
      shuffleOptions({
          question:
            "How did the Leopard react to the Ethiopian's suggestion of changing spots?",
          optionA: "He preferred stripes like Zebra.",
          optionB: "He insisted on spots but not too vulgar-big.",
          optionC: "He rejected the idea of changing spots.",
          correctAnswer: "B. He insisted on spots but not too vulgar-big.",
        }),
      shuffleOptions({
          question:
            "What did the Ethiopian use to create spots on the Leopard?",
          optionA: "A brush",
          optionB: "His five fingers",
          optionC: "A spray can",
          correctAnswer: "B. His five fingers",
        }),
      shuffleOptions({
          question:
            "What did the Leopard become after the Ethiopian created spots on him?",
          optionA: "A beauty with purple stripes",
          optionB: "A perfect sifter of sunshine",
          optionC: "A heap of pebbles",
          correctAnswer: "C. A heap of pebbles",
        }),
      shuffleOptions({
          question: "How did the story end for the Leopard and the Ethiopian?",
          optionA: "They continued hunting in the High Veldt.",
          optionB: "They changed their spots and lived happily ever afterward.",
          optionC: "They regretted changing their appearances.",
          correctAnswer:
            "B. They changed their spots and lived happily ever afterward.",
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
            "In the High Veldt, the Leopard's appearance was exclusively ________.",
          optionA: "sandy-yellowish",
          optionB: "grayish-yellowish catty-shaped",
          optionC: "exclusively sandy-coloured",
          correctAnswer: "grayish-yellowish catty-shaped",
        }),
      shuffleOptions({
          question:
            "The Giraffe and the Zebra, along with other animals, lived exclusively in the High Veldt, and they were all ________.",
          optionA: "exclusively sandy-yellowish",
          optionB: "exclusively sandy-yellow-brownish",
          optionC: "exclusively grayish-yellowish",
          correctAnswer: "exclusively sandy-yellow-brownish",
        }),
      shuffleOptions({
          question:
            "The Giraffe and the Zebra scuttled away from the High Veldt and hid in a forest full of trees, bushes, and ________ shadows.",
          optionA: "stripy, speckly, patchy-blatchy",
          optionB: "exclusively sandy-coloured",
          optionC: "sandy-yellowish",
          correctAnswer: "stripy, speckly, patchy-blatchy",
        }),
      shuffleOptions({
          question:
            "The Giraffe grew blotchy, the Zebra grew stripy, and the Eland and Koodoo grew darker with little wavy gray lines on their backs like ________.",
          optionA: "sand dunes",
          optionB: "tree bark",
          optionC: "grass blades",
          correctAnswer: "tree bark",
        }),
      shuffleOptions({
          question:
            "Baviaan, the dog-headed, barking Baboon, advised the Leopard to go into ________.",
          optionA: "other spots as soon as possible",
          optionB: "hiding in the forest",
          optionC: "exclusively yellowish-grayish-brownish areas",
          correctAnswer: "other spots as soon as possible",
        }),
      shuffleOptions({
          question:
            "The aboriginal Fauna joined the aboriginal Flora, and the Ethiopian decided to change by altering his ________.",
          optionA: "hair color",
          optionB: "skin color",
          optionC: "clothing style",
          correctAnswer: "skin color",
        }),
      shuffleOptions({
          question:
            "The Ethiopian advised the Leopard to go into spots, meaning spots on ________.",
          optionA: "the High Veldt",
          optionB: "South Africa",
          optionC: "their skin",
          correctAnswer: "their skin",
        }),
      shuffleOptions({
          question:
            "The Ethiopian created spots on the Leopard using ________.",
          optionA: "a brush",
          optionB: "his five fingers",
          optionC: "a spray can",
          correctAnswer: "his five fingers",
        }),
      shuffleOptions({
          question:
            "The Leopard, after the change, looked like a heap of ________.",
          optionA: "stones",
          optionB: "pebbles",
          optionC: "rocks",
          correctAnswer: "pebbles",
        }),
      shuffleOptions({
          question:
            "The story concludes with the Leopard and the Ethiopian living ________.",
          optionA: "regretting the change",
          optionB: "happily ever afterward",
          optionC: "in the High Veldt",
          correctAnswer: "happily ever afterward",
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
          question: "The Leopard lived in a place called the High Veldt.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The Giraffe and the Zebra scuttled away from the High Veldt and hid in a forest.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The Leopard and the Ethiopian used bows and arrows to hunt together.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The aboriginal Fauna joined the aboriginal Flora.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "The Leopard changed its spots by using a brush.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The spots on the Leopard were created with the tips of the Ethiopian's fingers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The Giraffe's appearance was exclusively sandy-yellowish in the High Veldt.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Baviaan, the Baboon, advised the Leopard to go into hiding in the forest.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The Leopard and the Ethiopian lived happily ever afterward.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The Ethiopian changed his skin color to exclusively sandy-yellowish.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
