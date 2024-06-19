export const chapter = "Chapter - 11: Fabrics and Festivals ";
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
            "What fabric is derived from animals like sheep, goat, and yak?",
          optionA: "Cotton",
          optionB: "Wool",
          optionC: "Silk",
          correctAnswer: "Wool",
         }),
      shuffleOptions({
          question:
            "Where does cotton come from, and how is it processed into fabric?",
          optionA: "Cotton plant; picking and weaving on a loom",
          optionB: "Mulberry plants; silkworm feeding and thread extraction",
          optionC: "Chemical reactions; synthetic fiber production",
          correctAnswer: "Cotton plant; picking and weaving on a loom",
         }),
      shuffleOptions({
          question: "Why is silk considered an ideal fabric for summers?",
          optionA: "It is heavy and warm",
          optionB: "It is a cool fabric and prevents sweating",
          optionC: "It is made from synthetic fibers",
          correctAnswer: "It is a cool fabric and prevents sweating",
         }),
      shuffleOptions({
          question:
            "What is the primary material used to make raincoats for the rainy season?",
          optionA: "Wool",
          optionB: "Cotton",
          optionC: "Nylon",
          correctAnswer: "Nylon",
         }),
      shuffleOptions({
          question:
            "Which festival is mentioned as the main festival of Hindus in the text?",
          optionA: "Holi",
          optionB: "Christmas",
          optionC: "Diwali",
          correctAnswer: "Diwali",
         }),
      shuffleOptions({
          question:
            "What are the occasions mentioned for wearing fancy clothes in the text?",
          optionA: "Festivals and occasions",
          optionB: "Only festivals",
          optionC: "Only occasions",
          correctAnswer: "Festivals and occasions",
         }),
      shuffleOptions({
          question:
            "What is the significance of festivals mentioned in the text?",
          optionA: "Solemn ceremonies",
          optionB: "Eating delicious food",
          optionC: "Joyful celebrations with family and friends",
          correctAnswer: "Joyful celebrations with family and friends",
         }),
      shuffleOptions({
          question:
            "Which of the following festivals is not mentioned as a religious festival in the text?",
          optionA: "Holi",
          optionB: "Eid",
          optionC: "Independence Day",
          correctAnswer: "Independence Day",
         }),
      shuffleOptions({
          question:
            "What fabric is commonly used to make sweaters, caps, and mufflers for winter?",
          optionA: "Silk",
          optionB: "Nylon",
          optionC: "Wool",
          correctAnswer: "Wool",
         }),
      shuffleOptions({
          question:
            "Which fabric is explicitly mentioned for making sarees, kurtas, and is ideal for summers?",
          optionA: "Wool",
          optionB: "Silk",
          optionC: "Nylon",
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
          question:
            "Cotton fabric is made from the pods of the ________ plant.",
          optionA: "Mulberry",
          optionB: "Sheep",
          optionC: "Cotton",
          correctAnswer: "Cotton",
         }),
      shuffleOptions({
          question:
            "Wool is collected from animals like sheep, goat, and ________ to make woollen fabric.",
          optionA: "Elephant",
          optionB: "Yak",
          optionC: "Lion",
          correctAnswer: "Yak",
         }),
      shuffleOptions({
          question:
            "Silk fabric is made from the long, sticky thread squirted by the ________.",
          optionA: "Cotton plant",
          optionB: "Silkworm",
          optionC: "Sheep",
          correctAnswer: "Silkworm",
         }),
      shuffleOptions({
          question:
            "Nylon, a synthetic fiber, is made through chemical reactions and is commonly used in making ________.",
          optionA: "Sweaters",
          optionB: "Fishing nets",
          optionC: "Caps",
          correctAnswer: "Fishing nets",
         }),
      shuffleOptions({
          question:
            "Raincoats made of ________ are worn during the rainy season.",
          optionA: "Silk",
          optionB: "Wool",
          optionC: "Nylon",
          correctAnswer: "Nylon",
         }),
      shuffleOptions({
          question:
            "Diwali is the main festival of the Hindus, and during this festival, people dress up in fancy clothes for a ________.",
          optionA: "Wedding",
          optionB: "Party",
          optionC: "Funeral",
          correctAnswer: "Party",
         }),
      shuffleOptions({
          question:
            "Festivals are joyful celebrations where people spend time with family and friends, wear new dresses, and enjoy ________ food.",
          optionA: "Bland",
          optionB: "Spicy",
          optionC: "Delicious",
          correctAnswer: "Delicious",
         }),
      shuffleOptions({
          question:
            "Besides religious festivals, three national festivals celebrated by Indians are Independence Day (15 August), Republic Day (26 January), and ________.",
          optionA: "Christmas",
          optionB: "Diwali",
          optionC: "Gandhi Jayanti (2 October)",
          correctAnswer: "Gandhi Jayanti (2 October)",
         }),
      shuffleOptions({
          question:
            "Indians celebrate national festivals with great ________ and show.",
          optionA: "Joy",
          optionB: "Pomp",
          optionC: "Silence",
          correctAnswer: "Pomp",
         }),
      shuffleOptions({
          question:
            "People wear clothes not only according to weather but also according to ________ and occasions.",
          optionA: "Time",
          optionB: "Mood",
          optionC: "Festivals",
          correctAnswer: "Festivals",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Cotton fabric is heavy and suitable for winters.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Wool is collected from animals like sheep, goat, and yak to make woollen fabric.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Silk is considered an ideal fabric for summers because it is heavy and warm.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Nylon is a synthetic fiber made through chemical reactions and is commonly used in making fishing nets.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Raincoats made of wool are commonly worn during the rainy season.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Diwali is the main festival of the Hindus, and people dress up in fancy clothes for a wedding during this festival.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Festivals are occasions where people spend time with family and friends, wear new dresses, and enjoy delicious food.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Independence Day, Republic Day, and Gandhi Jayanti are religious festivals celebrated in India.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "National festivals celebrated by Indians are marked with solemn ceremonies and silence.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "People wear clothes according to weather but not according to festivals and occasions.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
