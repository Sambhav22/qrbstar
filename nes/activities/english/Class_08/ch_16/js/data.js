export const chapter = "Chapter -16:The Laughing Hippopotamus";
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
          question: "What is the name given to the hippopotamus in the story?",
          optionA: "Glinkomok",
          optionB: "Ippi",
          optionC: "Nep",
          correctAnswer: "B) Ippi",
        }),
      shuffleOptions({
          question: "Why did Gouie dig a pit in the ground?",
          optionA: "To trap the black people",
          optionB: "To catch Keo's mother",
          optionC: "To capture Keo",
          correctAnswer: "C) To capture Keo",
        }),
      shuffleOptions({
          question: "How did Gouie plan to use Keo after capturing him?",
          optionA: "Eat him",
          optionB: "Trade him for goods",
          optionC: "Keep him as a pet",
          correctAnswer: "B) Trade him for goods",
        }),
      shuffleOptions({
          question:
            "What did Glinkomok do to help Keo when he faced the black man's threat?",
          optionA: "Gave Keo magical powers",
          optionB: "Offered protection against the black man",
          optionC: "Provided a disguise for Keo",
          correctAnswer: "A) Gave Keo magical powers",
        }),
      shuffleOptions({
          question:
            "What was the condition for Keo's release according to Gouie?",
          optionA: "Keo had to promise to serve him forever",
          optionB: "Keo had to swear by the tusks of his grandfather",
          optionC: "Keo had to give away all his possessions",
          correctAnswer: "B) Keo had to swear by the tusks of his grandfather",
        }),
      shuffleOptions({
          question: "How did Keo escape from the black men riding on his back?",
          optionA: "Ran away through the jungle",
          optionB: "Dived into the river and left them stranded",
          optionC: "Used his magical powers to disappear",
          correctAnswer: "B) Dived into the river and left them stranded",
        }),
      shuffleOptions({
          question:
            "What did Gouie promise when he was in danger and sought Keo's help again?",
          optionA: "To become Keo's servant",
          optionB: "To release Keo from slavery",
          optionC: "To bring more treasures to trade",
          correctAnswer: "A) To become Keo's servant",
        }),
      shuffleOptions({
          question:
            "Why did Gouie not return to Keo in a year and a day as promised?",
          optionA: "He forgot about the promise",
          optionB: "He made a successful life elsewhere",
          optionC: "He was afraid of Keo",
          correctAnswer: "B) He made a successful life elsewhere",
        }),
      shuffleOptions({
          question: "What did Gouie swear by when making the promise to Keo?",
          optionA: "His own tusks",
          optionB: "The bones of his grandfather",
          optionC: "The river bank",
          correctAnswer: "B) The bones of his grandfather",
        }),
      shuffleOptions({
          question: "How did Keo react when Gouie didn't return as promised?",
          optionA: "Cried in disappointment",
          optionB: "Laughed at the situation",
          optionC: "Became angry and vengeful",
          correctAnswer: "B) Laughed at the situation",
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
            "On one of the upper branches of the Congo river lived an ancient and aristocratic family of ______________, which boasted a pedigree dating back beyond the existence of mankind.",
          optionA: "Elephants",
          optionB: "Lions",
          optionC: "Hippopotamuses",
          correctAnswer: "C) Hippopotamuses",
        }),
      shuffleOptions({
          question:
            "Keo, the jolly hippopotamus, had a pedigree dating back to the time when the world was _____________.",
          optionA: "Young",
          optionB: "New",
          optionC: "Old",
          correctAnswer: "B) New",
        }),
      shuffleOptions({
          question: "Keo's mother named him 'Ippi,' meaning _____________.",
          optionA: "Strong One",
          optionB: "Jolly One",
          optionC: "Brave One",
          correctAnswer: "B) Jolly One",
        }),
      shuffleOptions({
          question:
            "The black people in the region called Keo 'Ippi' because of his _____________.",
          optionA: "Fierce nature",
          optionB: "Fierce mother",
          optionC: "Jolly demeanor",
          correctAnswer: "C) Jolly demeanor",
        }),
      shuffleOptions({
          question:
            "Gouie dug a great pit in the ground to capture ___________.",
          optionA: "Elephants",
          optionB: "Keo's mother",
          optionC: "Keo",
          correctAnswer: "C) Keo",
        }),
      shuffleOptions({
          question:
            "Keo made a bargain with Gouie to be released, and he had to return in a ____________.",
          optionA: "Month and a day",
          optionB: "Year and a half",
          optionC: "Year and a day",
          correctAnswer: "C) Year and a day",
        }),
      shuffleOptions({
          question:
            "Glinkomok, a fearful creature, was part beast, part man, part fowl, and part _____________.",
          optionA: "Fish",
          optionB: "Elephant",
          optionC: "Lion",
          correctAnswer: "A) Fish",
        }),
      shuffleOptions({
          question:
            "Glinkomok granted Keo magical powers, making his skin tough, his strength greater than ____________, and his foot swift.",
          optionA: "Five elephants",
          optionB: "Ten elephants",
          optionC: "Fifteen elephants",
          correctAnswer: "B) Ten elephants",
        }),
      shuffleOptions({
          question:
            "Keo used his magical powers to escape the black men by diving into the river, leaving them ____________.",
          optionA: "Stranded",
          optionB: "Confused",
          optionC: "Terrified",
          correctAnswer: "A) Stranded",
        }),
      shuffleOptions({
          question:
            "Gouie, when seeking Keo's help again, promised to become Keo's servant and return in a ____________.",
          optionA: "Week and a day",
          optionB: "Month and a year",
          optionC: "Year and a day",
          correctAnswer: "C) Year and a day",
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
          question: "India gained her freedom on 15 August, 1947.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The revolutionaries rose in revolt due to the tolerable British atrocities.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Kingsford, the Chief Presidency Magistrate, was transferred to Samastipur as the District Judge.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Khudi Ram Bose and Prafull Kumar Chaki planned to blast a bomb at Kingsford's residence.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The bomb exploded with a massive boom, causing severe injuries to Khudi Ram Bose.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Bose and Chaki managed to escape by running 10 miles overnight.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Khudi Ram Bose was arrested on May 1, 1908, from the village where they had stayed.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Prafull Kumar Chaki committed suicide when surrounded by the police.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Khudi Ram Bose was sentenced to death by hanging at the age of twenty.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "In his last wish, Khudi Ram Bose wanted to be cremated outside the jail by Bhagat Singh.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
