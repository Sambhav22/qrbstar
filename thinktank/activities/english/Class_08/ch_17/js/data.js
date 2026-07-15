export const chapter = "Chapter -17:My Story";
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
          question: "What was John Clemens known for?",
          optionA: "Farmer, merchant, and postmaster",
          optionB: "Doctor and scholar",
          optionC: "Inventor and scientist",
          correctAnswer: "Farmer, merchant, and postmaster",
        }),
      shuffleOptions({
          question: "What was the personality of John Clemens like?",
          optionA: "Merry and jolly",
          optionB: "Serious and not merry",
          optionC: "Adventurous and carefree",
          correctAnswer: "Serious and not merry",
        }),
      shuffleOptions({
          question: "What did the Clemens children do during the day?",
          optionA: "Played video games",
          optionB: "Roamed through the country, picking nuts and berries",
          optionC: "Attended school and studied",
          correctAnswer:
            "Roamed through the country, picking nuts and berries",
        }),
      shuffleOptions({
          question:
            "Who was the famous storyteller among the Clemens' children?",
          optionA: "John Clemens",
          optionB: "Jane Clemens",
          optionC: "Uncle Ned",
          correctAnswer: "Uncle Ned",
        }),
      shuffleOptions({
          question:
            "What was the nickname given to Samuel Clemens when he was a child?",
          optionA: "Little Joe",
          optionB: "Little Sam",
          optionC: "Little Mark",
          correctAnswer: "Little Sam",
        }),
      shuffleOptions({
          question:
            "Where did Samuel Clemens spend his summers with his mother and siblings?",
          optionA: "Florida",
          optionB: "Hannibal",
          optionC: "Quarles farm",
          correctAnswer: "Quarles farm",
        }),
      shuffleOptions({
          question: "What did Samuel Clemens admire Uncle Ned for?",
          optionA: "Cooking skills",
          optionB: "Storytelling",
          optionC: "Singing",
          correctAnswer: "Storytelling",
        }),
      shuffleOptions({
          question: "At what age did Samuel Clemens start going to school?",
          optionA: "3",
          optionB: "5",
          optionC: "9",
          correctAnswer: "5",
        }),
      shuffleOptions({
          question:
            "What profession did Samuel Clemens learn after his father's death?",
          optionA: "Farmer",
          optionB: "Pilot",
          optionC: "Doctor",
          correctAnswer: "Pilot",
        }),
      shuffleOptions({
          question:
            "What name did Samuel Clemens use when signing his writings?",
          optionA: "Samuel Clemens Jr.",
          optionB: "Mark Twain",
          optionC: "John Briggs",
          correctAnswer: "Mark Twain",
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
            "John Clemens, Samuel's ____________, was a farmer, merchant, and postmaster in a Missouri town, called Florida.",
          optionA: "Uncle",
          optionB: "Father",
          optionC: "Brother",
          correctAnswer: "Father",
        }),
      shuffleOptions({
          question:
            "Mrs. Clemens did not like to have any one around when she was bustling through the ____________, so the six children spent the days roaming through the country, picking nuts and berries.",
          optionA: "Library",
          optionB: "Housework",
          optionC: "Garden",
          correctAnswer: "Housework",
        }),
      shuffleOptions({
          question:
            "Uncle Ned was a famous ____________. When he described witches and goblins, the children would look over their shoulders as if they half expected to see the queer creatures in the room.",
          optionA: "Musician",
          optionB: "Storyteller",
          optionC: "Magician",
          correctAnswer: "Storyteller",
        }),
      shuffleOptions({
          question:
            "Sam was a delicate child. The neighbors used to shake their heads and declare he would never live to be a man, and every one always spoke of him as 'little ____________.'",
          optionA: "Joe",
          optionB: "Tom",
          optionC: "Sam",
          correctAnswer: "Sam",
        }),
      shuffleOptions({
          question:
            "When Mr. Clemens moved to another town some distance away, the mother said instantly: 'Well, Hannibal may be all right for your business, but Florida agrees so well with little Sam, that I shall spend every summer here with the children, on the ____________ farm.'",
          optionA: "Smith",
          optionB: "Quarles",
          optionC: "Thompson",
          correctAnswer: "Quarles",
        }),
      shuffleOptions({
          question:
            "Sam grew plump. A funny thing happened the first summer they went to nice Mr. Quarles's. Mrs. Clemens, with the older children, the new baby, and Jennie, went on ahead in a large ____________.",
          optionA: "Wagon",
          optionB: "Car",
          optionC: "Boat",
          correctAnswer: "Wagon",
        }),
      shuffleOptions({
          question:
            "At nine he had a head rather too large for his body, and it looked even bigger because he had such a lot of waving, ____________ hair.",
          optionA: "Brown",
          optionB: "Black",
          optionC: "Sandy",
          correctAnswer: "Sandy",
        }),
      shuffleOptions({
          question:
            "Sam learned the ____________ trade. He was very quick in setting type and accurate, so that he soon helped his older brother start a newspaper.",
          optionA: "Blacksmith",
          optionB: "Printer's",
          optionC: "Carpenter's",
          correctAnswer: "Printer's",
        }),
      shuffleOptions({
          question:
            "He meant to travel, and as he earned enough by newspaper work, he visited New York, Philadelphia, and was on his way to ____________ when he got a chance to be a pilot on the Mississippi River.",
          optionA: "Europe",
          optionB: "Asia",
          optionC: "South America",
          correctAnswer: "South America",
        }),
      shuffleOptions({
          question:
            "After his death, Sam learned the ____________ trade. He was very quick in setting type and accurate, so that he soon helped his older brother start a newspaper.",
          optionA: "Carpenter's",
          optionB: "Farmer's",
          optionC: "Printer's",
          correctAnswer: "Printer's",
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
          question:
            "John Clemens, Samuel's father, was a farmer, merchant, and postmaster in a Missouri town called Florida.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Mrs. Clemens liked to have people around when she was bustling through the housework.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Uncle Ned, a coloured farm-hand, was not a good storyteller according to the children.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Sam Clemens was often called 'Little Joe' by his neighbors.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The Clemens family spent their summers on the Smith farm.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Sam's mother, Mrs. Clemens, went ahead to Quarles farm in a car with the older children, the new baby, and Jennie.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Sam had brown hair and fine gray eyes when he was nine.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Sam learned the carpenter's trade after his father's death.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Sam visited Europe, Asia, and South America during his travels.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Sam signed his writings with the name 'Little Sam.'",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
