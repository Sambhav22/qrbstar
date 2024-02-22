export const chapter = "Chapter - 17: My Story";
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
        question: "What was John Clemens' occupation?",
        optionA: "Farmer",
        optionB: "Inventor",
        optionC: "Merchant",
        correctAnswer: "Merchant",
     }),
      shuffleOptions({
        question: "What was Mrs. Clemens' attitude towards work?",
        optionA: "She avoided work as much as possible.",
        optionB: "She enjoyed working and having a real frolic.",
        optionC: "She left all the work to her husband.",
        correctAnswer: "She enjoyed working and having a real frolic.",
     }),
      shuffleOptions({
        question:
          "What did John Clemens spend a good deal of time thinking about?",
        optionA: "Inventing new machines",
        optionB: "His large land tract in Tennessee",
        optionC: "Making his children laugh",
        correctAnswer: "His large land tract in Tennessee",
     }),
      shuffleOptions({
        question:
          "What did the children do during the day when Mrs. Clemens was busy?",
        optionA: "Played board games",
        optionB: "Roamed the countryside and picked nuts and berries",
        optionC: "Helped with housework",
        correctAnswer: "Roamed the countryside and picked nuts and berries",
     }),
      shuffleOptions({
        question: "Who was a famous storyteller among the children?",
        optionA: "John Clemens",
        optionB: "Jennie",
        optionC: "Uncle Ned",
        correctAnswer: "Uncle Ned",
     }),
      shuffleOptions({
        question: "What nickname was given to Sam Clemens when he was a child?",
        optionA: "Little John",
        optionB: "Little Sam",
        optionC: "Little Ned",
        correctAnswer: "Little Sam",
     }),
      shuffleOptions({
        question: "Where did Sam Clemens spend his summers as a child?",
        optionA: "In Hannibal",
        optionB: "On the Quarles farm in Florida",
        optionC: "In Tennessee",
        correctAnswer: "On the Quarles farm in Florida",
     }),
      shuffleOptions({
        question: "What did Sam Clemens excel in at school?",
        optionA: "Mathematics",
        optionB: "Spelling",
        optionC: "History",
        correctAnswer: "Spelling",
     }),
      shuffleOptions({
        question: "What did Sam Clemens long to be when he was a boy?",
        optionA: "A writer",
        optionB: "A pilot on the Mississippi River",
        optionC: "A teacher",
        correctAnswer: "A pilot on the Mississippi River",
     }),
      shuffleOptions({
        question: "What pen name did Sam Clemens use for his writings?",
        optionA: "John Clemens",
        optionB: "Mark Twain",
        optionC: "Will Bowen",
        correctAnswer: "Mark Twain",
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
          "John Clemens was a farmer, merchant, and postmaster in the Missouri town of ____________.",
        options: ["Hannibal", "Florida", "Mississippi"],
        correctAnswer: "Florida",
     }),
      shuffleOptions({
        question:
          "Mrs. Clemens liked to get her work done and then have a real ____________.",
        options: ["vacation", "frolic", "rest"],
        correctAnswer: "frolic",
     }),
      shuffleOptions({
        question:
          "John Clemens spent a good deal of time thinking about selling a great tract of land in ____________.",
        options: ["Florida", "Tennessee", "Missouri"],
        correctAnswer: "Tennessee",
     }),
      shuffleOptions({
        question:
          "The children would often listen to stories from Uncle Ned, who was known for describing ____________ and goblins.",
        options: ["witches", "pirates", "fairies"],
        correctAnswer: "witches",
     }),
      shuffleOptions({
        question:
          "Sam Clemens was often referred to as '____________' by the neighbors.",
        options: ["John", "Mark Twain", "little Sam"],
        correctAnswer: "little Sam",
     }),
      shuffleOptions({
        question:
          "Sam ran away and hid on board a ____________ until it was well down the river.",
        options: ["train", "ship", "carriage"],
        correctAnswer: "ship",
     }),
      shuffleOptions({
        question:
          "At the age of nine, Sam was known for being a good ____________.",
        options: ["speller", "writer", "swimmer"],
        correctAnswer: "swimmer",
     }),
      shuffleOptions({
        question: "Sam's two best chums were Will Bowen and John ____________.",
        options: ["Clemens", "Briggs", "Quarles"],
        correctAnswer: "Briggs",
     }),
      shuffleOptions({
        question:
          "Sam's teachers thought he should train himself for a ____________.",
        options: ["doctor", "writer", "pilot"],
        correctAnswer: "writer",
     }),
      shuffleOptions({
        question:
          "Sam Clemens signed his writings with the pen name ____________.",
        options: ["John Clemens", "Mark Twain", "Will Bowen"],
        correctAnswer: "Mark Twain",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Is John Clemens known for being a merry man?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Did Mrs. Clemens enjoy having people around when doing housework?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Did John Clemens buy seventy-five thousand acres of land in Tennessee for a few cents an acre?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Did Uncle Ned tell stories that always began with 'Once 'pon a time'?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Was Sam Clemens often called 'Little John' by the neighbors?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Did Sam run away and hide on a train at the age of nine?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Did Sam have fine gray eyes and a fast, energetic voice?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Were Sam's two best friends, Will Bowen and John Briggs, excellent swimmers?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Did Sam's teachers believe he should pursue a career as a writer?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Did Sam Clemens sign his writings with the pen name 'John Clemens'?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
