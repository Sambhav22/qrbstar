export const chapter = "Chapter -06:Christmas Every day";
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
            "What did the little girl usually ask for on Saturday mornings before breakfast?",
          optionA: "Candy",
          optionB: "Little pig stories",
          optionC: "Christmas stories",
          correctAnswer: "Christmas stories",
        }),
      shuffleOptions({
          question:
            "Why did the little girl stop her papa when he began telling a story about a little pig?",
          optionA: "She preferred stories about Christmas.",
          optionB: "She didn't like little pig stories.",
          optionC: "She wanted a different type of story.",
          correctAnswer: "She didn't like little pig stories.",
        }),
      shuffleOptions({
          question:
            "What was the little girl's request for a story about on that Saturday morning?",
          optionA: "Little pigs",
          optionB: "Christmas",
          optionC: "Thanksgiving",
          correctAnswer: "Christmas",
        }),
      shuffleOptions({
          question:
            "How did the little girl react when the Christmas Fairy granted her wish for Christmas every day?",
          optionA: "She cried",
          optionB: "She was excited",
          optionC: "She was disappointed",
          correctAnswer: "She was excited",
        }),
      shuffleOptions({
          question: "What happened to the stockings on Christmas morning?",
          optionA: "They were empty",
          optionB: "They were filled with coal",
          optionC: "They were lumpy with presents",
          correctAnswer: "They were lumpy with presents",
        }),
      shuffleOptions({
          question:
            "What happened to the Christmas celebrations as the days went by?",
          optionA: "They became more joyful",
          optionB: "They became exhausting",
          optionC: "They were canceled",
          correctAnswer: "They became exhausting",
        }),
      shuffleOptions({
          question:
            "What did the little girl start doing to dolls as Christmas continued every day?",
          optionA: "Decorating them",
          optionB: "Sitting on them",
          optionC: "Giving them away",
          correctAnswer: "Sitting on them",
        }),
      shuffleOptions({
          question: "Why did people start going to the poor-house initially?",
          optionA: "They were poor",
          optionB: "They lost their voices",
          optionC: "They were rich and proud",
          correctAnswer: "They were poor",
        }),
      shuffleOptions({
          question:
            "How did people express their frustration with Christmas presents towards the end?",
          optionA: "They wrote polite notes",
          optionB: "They threw presents over fences",
          optionC: "They returned the presents",
          correctAnswer: "They threw presents over fences",
        }),
      shuffleOptions({
          question:
            "What did the little girl's family want to do on Thanksgiving, and why did they resist?",
          optionA: "Go to the poor-house; they were poor",
          optionB: "Celebrate Christmas; they were exhausted",
          optionC: "Show gratitude; cakes were eaten for Christmas",
          correctAnswer: "Show gratitude; cakes were eaten for Christmas",
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
            "The little girl asked her papa for a story, and he began telling one about a little ___________.",
          optionA: "Dog",
          optionB: "Pig",
          optionC: "Cat",
          correctAnswer: "Pig",
        }),
      shuffleOptions({
          question:
            "The little girl wanted Christmas every day, and the Christmas Fairy granted her wish for a year. She received lumpy stockings filled with presents, including candy, oranges, and ___________.",
          optionA: "Potatoes",
          optionB: "Coal",
          optionC: "Books",
          correctAnswer: "Coal",
        }),
      shuffleOptions({
          question:
            "As Christmas continued every day, the little girl became ___________ with the constant celebrations.",
          optionA: "Excited",
          optionB: "Exhausted",
          optionC: "Grateful",
          correctAnswer: "Exhausted",
        }),
      shuffleOptions({
          question:
            "People started going to the poor-house because of the excessive celebration of Christmas. The poor-houses got so full that they had to send people back to their own ___________.",
          optionA: "Apartments",
          optionB: "Houses",
          optionC: "Mansions",
          correctAnswer: "Houses",
        }),
      shuffleOptions({
          question:
            "By Thanksgiving, the little girl wanted her family to go to church, have squash-pie, and show their ___________. However, people resisted because cakes were eaten up for Christmas, and they felt ___________.",
          optionA: "Gratitude; exhausted",
          optionB: "Joy; excited",
          optionC: "Resentment; wealthy",
          correctAnswer: "Gratitude; exhausted",
        }),
      shuffleOptions({
          question:
            "The little girl, suffering from the constant Christmas celebrations, took to sitting down on ___________ wherever she found them because she hated the sight of them.",
          optionA: "Chairs",
          optionB: "Dolls",
          optionC: "Tables",
          correctAnswer: "Dolls",
        }),
      shuffleOptions({
          question:
            "The little girl's family received presents, including books, portfolios, and ___________, on the once-a-year Christmas. The big Christmas-tree was lit and standing in a ___________.",
          optionA: "Candy; waste-basket",
          optionB: "Skates; playground",
          optionC: "Waterproofs; forest",
          correctAnswer: "Candy; waste-basket",
        }),
      shuffleOptions({
          question:
            "The little girl's family, initially excited about the daily Christmas, eventually expressed their frustration by throwing presents over ___________.",
          optionA: "Fences",
          optionB: "Roofs",
          optionC: "Windows",
          correctAnswer: "Fences",
        }),
      shuffleOptions({
          question:
            "The little girl tried to stop the constant Christmas celebrations by sending letters and telegrams to the Christmas Fairy, but it didn't do any ___________.",
          optionA: "Good",
          optionB: "Harm",
          optionC: "Change",
          correctAnswer: "Good",
        }),
      shuffleOptions({
          question:
            "The little girl's family wanted to go to the poor-house initially, but they had to return home because the poor-houses got so full. People had lost their ___________ from saying 'Merry Christmas' so much.",
          optionA: "Voices",
          optionB: "Patience",
          optionC: "Money",
          correctAnswer: "Voices",
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
            "The little girl wanted Christmas every day, and the Christmas Fairy granted her wish for a year.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The little girl's family initially went to the poor-house due to their extravagant Christmas celebrations.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "As Christmas continued every day, the little girl became excited and joyful with the constant celebrations.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "People started going to the poor-house because they had lost their voices from saying 'Merry Christmas' so much.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The little girl's family, by Thanksgiving, resisted going to church and showing gratitude because cakes were eaten up for Christmas.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The little girl expressed her frustration with the constant Christmas celebrations by throwing presents over fences.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The little girl tried to stop the constant Christmas celebrations by sending letters and telegrams to the Easter Bunny.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The little girl's family wanted to go to the poor-house initially but had to return home because the poor-houses got so full.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The little girl, suffering from constant Christmas celebrations, took to sitting down on chairs wherever she found them.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The little girl's family, initially excited about daily Christmas, eventually expressed their frustration by throwing presents over roofs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
