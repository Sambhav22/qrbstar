export const chapter = "Chapter - 16: Beautiful Clothes";
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
            "What is the primary purpose of clothes mentioned in the text?",
          optionA: "To enhance beauty",
          optionB: "To protect from various elements",
          optionC: "To showcase cultural identity",
          correctAnswer: "To protect from various elements",
 }),
      shuffleOptions({
          question: "What gives wonderful bright colors to clothes?",
          optionA: "Thread",
          optionB: "Dye",
          optionC: "Wax",
          correctAnswer: "Dye",
 }),
      shuffleOptions({
          question: "What is the process of tie and dye mentioned in the text?",
          optionA: "Engraving designs on wooden blocks",
          optionB: "Tying cloth into knots, dyeing, and opening knots",
          optionC: "Embroidering patterns on cloth",
          correctAnswer: "Tying cloth into knots, dyeing, and opening knots",
 }),
      shuffleOptions({
          question: "How are designs created in block printing?",
          optionA: "Using a special pen",
          optionB: "Engraving on wooden blocks",
          optionC: "Tying cloth into knots",
          correctAnswer: "Engraving on wooden blocks",
 }),
      shuffleOptions({
          question: "What is Kalamkari in the context of clothing?",
          optionA: "Engraving designs on wooden blocks",
          optionB: "Embroidering patterns on cloth",
          optionC: "Printing on cotton fabric with a special pen",
          correctAnswer: "Printing on cotton fabric with a special pen",
 }),
      shuffleOptions({
          question: "What is the purpose of embroidery in clothing?",
          optionA: "Enhancing durability",
          optionB: "Adding attractiveness with colored threads",
          optionC: "Protecting from heat and cold",
          correctAnswer: "Adding attractiveness with colored threads",
 }),
      shuffleOptions({
          question: "What is mentioned as part of modern clothes in the text?",
          optionA: "Tie and Dye",
          optionB: "T-shirt, shorts, midi",
          optionC: "Leaf motifs",
          correctAnswer: "T-shirt, shorts, midi",
 }),
      shuffleOptions({
          question: "What is cotton primarily used for according to the text?",
          optionA: "Making wooden blocks",
          optionB: "Creating synthetic dyes",
          optionC: "Making various types of clothes and other products",
          correctAnswer:
            "Making various types of clothes and other products",
 }),
      shuffleOptions({
          question: "What is the source of cotton?",
          optionA: "Synthetic fiber",
          optionB: "Cotton plant",
          optionC: "Animal hide",
          correctAnswer: "Cotton plant",
 }),
      shuffleOptions({
          question: "What material is NOT mentioned as being made from cotton?",
          optionA: "Shirt",
          optionB: "Rope",
          optionC: "Silk",
          correctAnswer: "Silk",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "We use clothes to _________ our body.",
          optionA: "decorate",
          optionB: "cover",
          optionC: "wash",
          correctAnswer: "cover",
 }),
      shuffleOptions({
          question: "Cloth market is flooded with many _________ clothes.",
          optionA: "plain",
          optionB: "colorful",
          optionC: "synthetic",
          correctAnswer: "colorful",
 }),
      shuffleOptions({
          question:
            "People use bright colored dyes and dip the clothes into it. There are two types of dyes-natural dyes and _________ dyes.",
          optionA: "artificial",
          optionB: "handmade",
          optionC: "synthetic",
          correctAnswer: "synthetic",
 }),
      shuffleOptions({
          question:
            "In tie and dye, the cloth is tied into knots with a thread that has been rubbed with _________.",
          optionA: "oil",
          optionB: "wax",
          optionC: "ink",
          correctAnswer: "wax",
 }),
      shuffleOptions({
          question:
            "Designs are engraved on wooden blocks in the process of _________.",
          optionA: "embroidery",
          optionB: "block printing",
          optionC: "leaf motifs",
          correctAnswer: "block printing",
 }),
      shuffleOptions({
          question:
            "Kalamkari is a form of printing done on cotton fabric with natural colors with the help of a special _________.",
          optionA: "brush",
          optionB: "pen",
          optionC: "needle",
          correctAnswer: "pen",
 }),
      shuffleOptions({
          question:
            "_________ is done with the help of different colors of threads.",
          optionA: "Embroidery",
          optionB: "Block printing",
          optionC: "Leaf motifs",
          correctAnswer: "Embroidery",
 }),
      shuffleOptions({
          question:
            "Flexible, convenient, easy to carry, and stylish are the clothes of modern India. It includes T-shirt, shorts, _________.",
          optionA: "saree",
          optionB: "jeans",
          optionC: "gloves",
          correctAnswer: "jeans",
 }),
      shuffleOptions({
          question:
            "Cotton is a natural fiber that comes from the cotton plant. It is used to make various types of clothes such as shirt, kurta, T-shirt, _________.",
          optionA: "tie",
          optionB: "hat",
          optionC: "bedsheet",
          correctAnswer: "bedsheet",
 }),
      shuffleOptions({
          question:
            "The versatility of cotton is numerous and thus makes it a boss of all _________.",
          optionA: "fabrics",
          optionB: "metals",
          optionC: "plastics",
          correctAnswer: "fabrics",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Clothes protect us from heat, cold, wind, sun, and rain.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "There are three types of dyes mentioned in the text: natural dyes, synthetic dyes, and artificial dyes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Block printing involves engraving designs on wooden blocks.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "Kalamkari is a form of printing done on silk fabric with natural colors.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Embroidery is the process of tying cloth into knots and then dyeing it.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Traditional clothes represent the culture and tradition of a community.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "Cotton is a synthetic fiber used to make various types of clothes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Flexible, convenient, easy to carry, and stylish are characteristics of traditional clothes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Cotton is primarily used to make food products.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "The versatility of cotton is mentioned as numerous in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
           }),
    ]),
  }
}

export var activityData;
