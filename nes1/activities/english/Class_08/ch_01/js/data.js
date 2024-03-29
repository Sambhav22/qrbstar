export const chapter = "Chapter -1: The Invisible Man";
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
          question:
            "What disadvantage does the Invisible Man mention about his condition?",
          optionA: "Lack of food",
          optionB: "Invisibility in snow",
          optionC: "No shelter",
          correctAnswer: "No shelter",
        }),
      shuffleOptions({
          question: "Why does the Invisible Man avoid going out in the snow?",
          optionA: "It's too cold",
          optionB: "Snow settles on him and exposes him",
          optionC: "He doesn't like snow",
          correctAnswer: "Snow settles on him and exposes him",
        }),
      shuffleOptions({
          question: "What danger does the Invisible Man associate with rain?",
          optionA: "It makes him cold",
          optionB: "It reveals his glistening surface",
          optionC: "He might catch a cold",
          correctAnswer: "It reveals his glistening surface",
        }),
      shuffleOptions({
          question: "Where does the Invisible Man go to find clothing?",
          optionA: "Great Portland Street",
          optionB: "Slums",
          optionC: "Theatrical costumiers",
          correctAnswer: "Theatrical costumiers",
        }),
      shuffleOptions({
          question:
            "Why does the Invisible Man enter a little shop with newspapers, sweets, toys, etc.?",
          optionA: "To find a hiding place",
          optionB: "To buy food",
          optionC: "To get a mask and disguise himself",
          correctAnswer: "To get a mask and disguise himself",
        }),
      shuffleOptions({
          question:
            "What prompts the Invisible Man to knock the man in the shop on the head?",
          optionA: "The man recognized him",
          optionB: "The man locked him in",
          optionC: "The man was a threat to his plan",
          correctAnswer: "The man was a threat to his plan",
        }),
      shuffleOptions({
          question:
            "What does the Invisible Man use to knock the man on the head?",
          optionA: "Stool",
          optionB: "Revolver",
          optionC: "Mask",
          correctAnswer: "Stool",
        }),
      shuffleOptions({
          question:
            "What does the Invisible Man use to gag and tie up the man?",
          optionA: "Sheet",
          optionB: "Mask",
          optionC: "Rope",
          correctAnswer: "Sheet",
        }),
      shuffleOptions({
          question:
            "Why does the Invisible Man choose specific items for disguise, like a mask, dark glasses, and a wig?",
          optionA: "To become a thief",
          optionB: "To make himself visible",
          optionC: "To scare people",
          correctAnswer: "To make himself visible",
        }),
      shuffleOptions({
          question:
            "What does the Invisible Man find in the locked cupboard in the inner room?",
          optionA: "Clothes",
          optionB: "Money",
          optionC: "Food",
          correctAnswer: "Money",
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
          question: "The Invisible Man had no ____________ to provide shelter.",
          optionA: "Clothing",
          optionB: "Food",
          optionC: "Shelter",
          correctAnswer: "Shelter",
        }),
      shuffleOptions({
          question:
            "The Invisible Man couldn't go out in the snow because it would settle on him and ____________ him.",
          optionA: "Warm",
          optionB: "Conceal",
          optionC: "Expose",
          correctAnswer: "Expose",
        }),
      shuffleOptions({
          question:
            "Rain would make the Invisible Man a watery outline, a glistening surface of a man, a ____________.",
          optionA: "Mirage",
          optionB: "Bubble",
          optionC: "Reflection",
          correctAnswer: "Bubble",
        }),
      shuffleOptions({
          question:
            "In the slums towards Great Portland Street, the Invisible Man planned to get ____________.",
          optionA: "Food",
          optionB: "Clothing",
          optionC: "Money",
          correctAnswer: "Clothing",
        }),
      shuffleOptions({
          question:
            "The Invisible Man realized his most immediate problem was to get ____________.",
          optionA: "Food",
          optionB: "Money",
          optionC: "Clothing",
          correctAnswer: "Clothing",
        }),
      shuffleOptions({
          question:
            "The Invisible Man knocked the man in the shop on the head with a ____________.",
          optionA: "Mask",
          optionB: "Revolver",
          optionC: "Stool",
          correctAnswer: "Stool",
        }),
      shuffleOptions({
          question:
            "The Invisible Man used a ____________ to gag and tie up the man in the shop.",
          optionA: "Sheet",
          optionB: "Rope",
          optionC: "Mask",
          correctAnswer: "Sheet",
        }),
      shuffleOptions({
          question:
            "The Invisible Man chose a mask, dark glasses, and a wig to make himself ____________.",
          optionA: "Invisible",
          optionB: "Visible",
          optionC: "Recognizable",
          correctAnswer: "Visible",
        }),
      shuffleOptions({
          question:
            "The Invisible Man found three sovereigns and about thirty shillings' worth of ____________ in a desk.",
          optionA: "Gold",
          optionB: "Silver",
          optionC: "Copper",
          correctAnswer: "Silver",
        }),
      shuffleOptions({
          question:
            "The Invisible Man decided to explore the house and spent some time doing so ____________.",
          optionA: "Quietly",
          optionB: "Noisily",
          optionC: "Angrily",
          correctAnswer: "Quietly",
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
          question: "The Invisible Man had a shelter to provide cover.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The Invisible Man could go out in the snow without being exposed.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Rain would make the Invisible Man a visible bubble.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The Invisible Man went to Great Portland Street to find food.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The Invisible Man entered a little shop to get a mask and disguise himself.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The Invisible Man knocked the man in the shop on the head with a revolver.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The Invisible Man used a rope to gag and tie up the man in the shop.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The Invisible Man chose a mask, dark glasses, and a wig to make himself invisible.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The Invisible Man found only gold in a locked cupboard in the inner room.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The Invisible Man decided to explore the house quietly.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
