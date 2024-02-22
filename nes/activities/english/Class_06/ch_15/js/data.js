export const chapter = "Chapter - 15: The Cattle ";
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
          "What is the primary source of animal protein in the diet of many people in the country mentioned in the text?",
        optionA: "Chicken",
        optionB: "Fish",
        optionC: "Milk",
        correctAnswer: "Milk",
     }),
      shuffleOptions({
        question:
          "In Hinduism, why are cows and bullocks considered important?",
        optionA: "They are considered sacred animals.",
        optionB: "They are excellent sources of meat.",
        optionC: "They are known for their racing abilities.",
        correctAnswer: "They are considered sacred animals.",
     }),
      shuffleOptions({
        question:
          "What is Nandi, an image of the bullock, associated with in Hindu temples?",
        optionA: "Lord Krishna",
        optionB: "Lord Shiva",
        optionC: "Goddess Durga",
        correctAnswer: "Lord Shiva",
     }),
      shuffleOptions({
        question:
          "Which of the following is NOT one of the five products associated with the cow that holds religious value for purification?",
        optionA: "Milk",
        optionB: "Dung",
        optionC: "Honey",
        correctAnswer: "Honey",
     }),
      shuffleOptions({
        question: "In several states, the slaughter of cows is:",
        optionA: "Encouraged",
        optionB: "Regulated",
        optionC: "Prohibited",
        correctAnswer: "Prohibited",
     }),
      shuffleOptions({
        question:
          "How are domesticated cattle different from wild ones, as mentioned in the text?",
        optionA: "They are smaller in size.",
        optionB: "They have larger horns.",
        optionC: "They produce more meat.",
        correctAnswer: "They are smaller in size.",
     }),
      shuffleOptions({
        question:
          "In India, what is the significance of cattle in a farmer's life?",
        optionA: "They are a source of entertainment.",
        optionB: "They are used primarily for transportation.",
        optionC:
          "They serve various purposes, including farming and replenishing fields with manure.",
        correctAnswer:
          "They serve various purposes, including farming and replenishing fields with manure.",
     }),
      shuffleOptions({
        question:
          "What is the primary reason for opposing entertainment activities like rodeos and bull-fighting involving cattle, according to the text?",
        optionA: "These activities are boring.",
        optionB: "They promote animal welfare and health.",
        optionC: "They are considered torture and cruelty to the animals.",
        correctAnswer:
          "They are considered torture and cruelty to the animals.",
     }),
      shuffleOptions({
        question:
          "How many distinct breeds of cattle are there in India, as mentioned in the text?",
        optionA: "10",
        optionB: "20",
        optionC: "26",
        correctAnswer: "26",
     }),
      shuffleOptions({
        question:
          "What is the primary diet of cattle, as mentioned in the text?",
        optionA: "Insects and small animals",
        optionB: "Plants and vegetable feeds",
        optionC: "Fruits and nuts",
        correctAnswer: "Plants and vegetable feeds",
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
          "Milk is the major source of animal protein in the diet of a large number of people in our country. The cattle are not only a source of milk but also other products, including meat, leather, and horns for making different products, and dung as fuel and manure for farming. Besides, the cattle, especially cow and bullocks, have a religious value too, especially in Hinduism. They have been attached importance right since the Vedic Age, and the cow is regarded as _______.",
        options: [
          "A sacred animal",
          "A source of entertainment",
          "A symbol of prosperity",
        ],
        correctAnswer: "A sacred animal",
     }),
      shuffleOptions({
        question:
          "Lord Krishna is believed to have been born in the family of cow-herders, and his early life passed among cows, so he is also called Govind, which means the protector of cows. You can find Nandi, an image of the bullock, in every Shiva temple. Nandi is believed to be the mount of Lord Shiva. Also, a cow's five products (milk, urine, dung, curd, and ghee) are called Panchagavya and _______ are attached religious value for purification.",
        options: ["They", "These", "Those"],
        correctAnswer: "They",
     }),
      shuffleOptions({
        question:
          "The cattle were domesticated at a very early stage of human civilization, and we have seen them depicted in mythology and animal tales. The drawings and carvings in the prehistoric cave have revealed depiction of the cattle, especially as beasts of burden. Evidence has also been found of their use in the Harappan civilization, which existed about _______ years ago.",
        options: ["1,000", "3,000", "5,000"],
        correctAnswer: "5,000",
     }),
      shuffleOptions({
        question:
          "The cattle found in India are unique to the Indian subcontinent and are not found in European countries. If we compared cow with buffalo, we would find that buffalo yields more milk than the cow, and its milk is also richer than that of cow by 50 percent more fat. Despite this fact, cow milk in India is considered healthier because it is _______ and is also used in several religious ceremonies.",
        options: ["Heavier", "Light", "Costly"],
        correctAnswer: "Light",
     }),
      shuffleOptions({
        question:
          "The bullock and buffalo-bullock are important draught animals, they may be slow, but are very powerful, and play a vital role in the Indian economy. They are used in transportation of goods as well as in several agricultural operations, like ploughing, threshing, churning, harvesting, lifting water, and so on. Of late, machines and transports are replacing them fast. However, they remain important when it comes to _______.",
        options: [
          "Large landholdings",
          "Small landholdings",
          "Industrial activities",
        ],
        correctAnswer: "Small landholdings",
     }),
      shuffleOptions({
        question:
          "In our country, the cattle are a farmer's second most precious possession after land because they are useful to him in several ways, including farming, transportation, and food. They also replenish the fields by supplying _______.",
        options: ["Water", "Electricity", "Manure"],
        correctAnswer: "Manure",
     }),
      shuffleOptions({
        question:
          "The cattle are also used for entertainment purposes, like rodeos, bullock-races, bull-fighting, etc. Of course, these types of entertainment are opposed by animal rights activists who consider these as _______.",
        options: [
          "Fun and harmless",
          "Torture and cruelty to the animals",
          "Essential for cultural preservation",
        ],
        correctAnswer: "Torture and cruelty to the animals",
     }),
      shuffleOptions({
        question:
          "The number of breeds of cattle in the world is surprisingly large. In Europe, there are as many as 40 to 50 distinct breeds, 11 alone in Great Britain. In India, there are 26 well-defined breeds of cattle and 6 breeds of buffaloes. Some of the important breeds in our country include Amritmahal, Bachuar, Bargur, Dangi, Deoni, Gir, Hariana, Khillari, etc. Different breeds have different body characteristics, and are useful for different purposes; for example, some breeds are good as milch animals while others are good as _______.",
        options: ["Racing animals", "Draught animals", "Pet animals"],
        correctAnswer: "Draught animals",
     }),
      shuffleOptions({
        question:
          "The cattle are herbivorous animals which convert plants and vegetable feeds into milk, meat, and working energy for the benefit of man. They require sufficient, well-balanced feed, which should be satisfying to them, both qualitatively as well as quantitatively. Interestingly, the cattle have one stomach, which is divided into four sections, so it is also said that they have _______.",
        options: ["Three stomachs", "Four stomachs", "Five stomachs"],
        correctAnswer: "Four stomachs",
     }),
      shuffleOptions({
        question:
          "Often, an incorrect method of milking can spoil milch animals. Milking should be carried out after cleaning or washing the animal and teats so that clean milk is obtained. If milk is not clean, it may cause several diseases as it can carry bacteria. The diseases caused by unclean milk can include typhoid fever, dysentery, diphtheria, septic sore-throat, scarlet fever, and tuberculosis. _______ helps to preserve milk over a longer period of time.",
        options: ["Pasteurization", "Boiling", "Freezing"],
        correctAnswer: "Pasteurization",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The poor farmer and his mother were wealthy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The governor's proclamation demanded the execution of the elderly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The farmer marked the path using stones.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The farmer made the 'rope of ashes' using straw.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The governor was displeased with the farmer's wit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The governor mentioned a saying about the crown of snow and wisdom.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The farmer used the stars to guide him down the mountain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The governor demanded a sack of gold from his subjects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The elderly in the province could lead a life full of fear after the governor's proclamation was abolished.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The farmer's mother helped create the 'rope of ashes.'",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
