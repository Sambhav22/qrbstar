export const chapter = "Chapter - 2: Things from Plants";
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
          question: "What is the main focus of the text?",
          optionA: "Autumn season",
          optionB: "Importance of leaves",
          optionC: "Indian culture and leaf motifs",
          correctAnswer: "Importance of leaves",
         }),
      shuffleOptions({
          question:
            "Where do most of our furniture, such as chairs and tables, come from?",
          optionA: "Cotton plants",
          optionB: "Timber and firewood from trees",
          optionC: "Jute plants",
          correctAnswer: "Timber and firewood from trees",
         }),
      shuffleOptions({
          question:
            "Which of the following is NOT mentioned as a spice obtained from plants?",
          optionA: "Clove",
          optionB: "Black pepper",
          optionC: "Cotton",
          correctAnswer: "Cotton",
         }),
      shuffleOptions({
          question:
            "What is the purpose of using banana leaves in South India?",
          optionA: "Decoration in festivals",
          optionB: "Making perfumes",
          optionC: "Serving food",
          correctAnswer: "Serving food",
         }),
      shuffleOptions({
          question:
            "What is the process by which plants produce food with the help of chlorophyll, sunlight, air, and water?",
          optionA: "Photosynthesis",
          optionB: "Composting",
          optionC: "Percolation",
          correctAnswer: "Photosynthesis",
         }),
      shuffleOptions({
          question:
            "Which plants provide fiber to make rope, jute bags, and jute clothes?",
          optionA: "Cotton plants",
          optionB: "Jute plants",
          optionC: "Timber trees",
          correctAnswer: "Jute plants",
         }),
      shuffleOptions({
          question:
            "What do dry leaves collected in a pit covered with moist mud transform into?",
          optionA: "Firewood",
          optionB: "Compost",
          optionC: "Spices",
          correctAnswer: "Compost",
         }),
      shuffleOptions({
          question:
            "What do Indian designers use leaf motifs for in their designs?",
          optionA: "Making perfumes",
          optionB: "Designing furniture",
          optionC: "Decorating various items",
          correctAnswer: "Decorating various items",
         }),
      shuffleOptions({
          question:
            "Which leaves are referred to as the 'food factory' of a plant and play a crucial role in photosynthesis?",
          optionA: "Banana leaves",
          optionB: "Tea leaves",
          optionC: "Green leaves",
          correctAnswer: "Green leaves",
         }),
      shuffleOptions({
          question:
            "What is the main idea behind the use of leaves in Indian culture as leaf motifs?",
          optionA: "Making medicines",
          optionB: "Designing walls",
          optionC: "Serving food",
          correctAnswer: "Designing walls",
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
            "Leaves have a green-colored substance called ________, which gives them their green color.",
          optionA: "Melatonin",
          optionB: "Chlorophyll",
          optionC: "Hemoglobin",
          correctAnswer: "Chlorophyll",
         }),
      shuffleOptions({
          question:
            "Spices like turmeric, red chilli, black pepper, and cardamom are obtained from ________.",
          optionA: "Animals",
          optionB: "Plants",
          optionC: "Minerals",
          correctAnswer: "Plants",
         }),
      shuffleOptions({
          question: "Timber and firewood are obtained from ________.",
          optionA: "Rocks",
          optionB: "Trees",
          optionC: "Shrubs",
          correctAnswer: "Trees",
         }),
      shuffleOptions({
          question:
            "Cotton, used to make clothes like shirts and bedsheets, comes from the ________ plant.",
          optionA: "Cottonwood",
          optionB: "Cottonseed",
          optionC: "Cotton",
          correctAnswer: "Cotton",
         }),
      shuffleOptions({
          question:
            "Fibrous plants like hemp or jute provide us with fiber for making ________.",
          optionA: "Plastic",
          optionB: "Rope and bags",
          optionC: "Metal tools",
          correctAnswer: "Rope and bags",
         }),
      shuffleOptions({
          question:
            "Flowers of certain plants, such as rose and jasmine, are used to make ________.",
          optionA: "Cleaning products",
          optionB: "Perfumes",
          optionC: "Medicines",
          correctAnswer: "Perfumes",
         }),
      shuffleOptions({
          question:
            "Medicinal plants like giloy, tulsi, and neem are used to make ________.",
          optionA: "Food supplements",
          optionB: "Medicines",
          optionC: "Cleaning products",
          correctAnswer: "Medicines",
         }),
      shuffleOptions({
          question:
            "Mango, grapes, and orange are examples of ________ obtained from plants.",
          optionA: "Vegetables",
          optionB: "Fruits",
          optionC: "Spices",
          correctAnswer: "Fruits",
         }),
      shuffleOptions({
          question:
            'Leaves are often referred to as the "food factory" of a plant due to the process of ________.',
          optionA: "Fermentation",
          optionB: "Respiration",
          optionC: "Photosynthesis",
          correctAnswer: "Photosynthesis",
         }),
      shuffleOptions({
          question: "In South India, people use ________ for serving food.",
          optionA: "Banana leaves",
          optionB: "Oak leaves",
          optionC: "Maple leaves",
          correctAnswer: "Banana leaves",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Leaves are not an essential part of a plant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Autumn leaves are typically red, orange, and blue.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Spices like turmeric and red chili are not obtained from plants.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "Cotton, used for making clothes, is derived from the cotton plant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question: "Timber and firewood cannot be obtained from trees.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Flowers of certain plants, like rose and jasmine, are used to make perfumes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "Medicines cannot be derived from plants like giloy and tulsi.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Mango, grapes, and apples are examples of fruits obtained from plants.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "Leaves play a crucial role in the process of photosynthesis.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "In Indian culture, banana leaves are not used for serving food.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
