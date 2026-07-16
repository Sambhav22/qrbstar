export const chapter = "Chapter - 6: Rani Lakshmi Bai";
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
  const optionsArray = [optionA, optionB, optionC].filter(Boolean)

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  if (optionsArray.length > 2) object.optionC = optionsArray[2]

  return object
}

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Rani Lakshmi Bai was the queen of",
        optionA: "Delhi",
        optionB: "Jhansi",
        optionC: "Agra",
        correctAnswer: "Jhansi",
      }),
      shuffleOptions({
        question: "She tied her ______ behind her back.",
        optionA: "Son",
        optionB: "Sword",
        optionC: "Flag",
        correctAnswer: "Son",
      }),
      shuffleOptions({
        question: "Manu learnt to?",
        optionA: "Draw",
        optionB: "Ride",
        optionC: "Cook",
        correctAnswer: "Ride",
      }),
      shuffleOptions({
        question: "The British were",
        optionA: "Powerful",
        optionB: "Weak",
        optionC: "Friendly",
        correctAnswer: "Powerful",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai fought",
        optionA: "On foot",
        optionB: "On horseback",
        optionC: "In a car",
        correctAnswer: "On horseback",
      }),
      shuffleOptions({
        question: "The British wanted",
        optionA: "Freedom",
        optionB: "Jhansi",
        optionC: "Peace",
        correctAnswer: "Jhansi",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai led",
        optionA: "School",
        optionB: "Army",
        optionC: "Shop",
        correctAnswer: "Army",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai died",
        optionA: "Sleeping",
        optionB: "Fighting",
        optionC: "Running",
        correctAnswer: "Fighting",
      }),
      shuffleOptions({
        question: "We remember Rani Lakshmi Bai for",
        optionA: "Singing",
        optionB: "Dancing",
        optionC: "Bravery",
        correctAnswer: "Bravery",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai's army was",
        optionA: "Strong",
        optionB: "Weak",
        optionC: "Huge",
        correctAnswer: "Weak",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We got freedom in ______.",
        optionA: "1847",
        optionB: "1947",
        optionC: "1950",
        correctAnswer: "1947",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai was also called ______.",
        optionA: "Meena",
        optionB: "Manu",
        optionC: "Mira",
        correctAnswer: "Manu",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai rode on ______.",
        optionA: "Elephant",
        optionB: "Camel",
        optionC: "Horseback",
        correctAnswer: "Horseback",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai fought ______.",
        optionA: "Calmly",
        optionB: "Valiantly",
        optionC: "Silently",
        correctAnswer: "Valiantly",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai was a brave ______.",
        optionA: "Queen",
        optionB: "Dancer",
        optionC: "Farmer",
        correctAnswer: "Queen",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai led her ______.",
        optionA: "Class",
        optionB: "Army",
        optionC: "Kitchen",
        correctAnswer: "Army",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai had a small ______.",
        optionA: "Doll",
        optionB: "Bag",
        optionC: "Son",
        correctAnswer: "Son",
      }),
      shuffleOptions({
        question: "British ______ us.",
        optionA: "Helped",
        optionB: "Tortured",
        optionC: "Taught",
        correctAnswer: "Tortured",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai lives in our ______.",
        optionA: "Dream",
        optionB: "House",
        optionC: "Memory",
        correctAnswer: "Memory",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai loved her ______.",
        optionA: "Country",
        optionB: "Toys",
        optionC: "Books",
        correctAnswer: "Country",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Manu was afraid to ride.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai was not brave.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai fought for her country.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "British gave Jhansi to Rani Lakshmi Bai.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai had no son.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai rode into battle on a horse.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai led her army herself.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai died sleeping in the palace.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai is remembered for bravery.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai fought with love for her country.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;