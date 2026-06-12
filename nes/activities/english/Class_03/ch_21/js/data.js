export const chapter = "Chapter -21: Major Somnath Sharma";
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
            "Who had their eyes on Kashmir after India became free in 1947?",
          optionA: "India",
          optionB: "Pakistan",
          optionC: "China",
          correctAnswer: "Pakistan",
        }),
      shuffleOptions({
          question: "How did Pakistan send its soldiers to occupy Kashmir?",
          optionA: "Dressed as civilians",
          optionB: "Disguised as tribal people",
          optionC: "Dressed as Indian soldiers",
          correctAnswer: "Disguised as tribal people",
        }),
      shuffleOptions({
          question:
            "Which officer led the soldiers in the first batch to check the advance of Pakistani soldiers?",
          optionA: "Major Somnath Sharma",
          optionB: "Major Ram Singh",
          optionC: "Major Ravi Kumar",
          correctAnswer: "Major Somnath Sharma",
        }),
      shuffleOptions({
          question:
            "What was Major Somnath Sharma's condition when he led his soldiers into battle?",
          optionA: "He was injured with a broken leg",
          optionB: "His hand was bound in a heavy plaster",
          optionC: "He was perfectly healthy",
          correctAnswer: "His hand was bound in a heavy plaster",
        }),
      shuffleOptions({
          question:
            "How did the Pakistani soldiers disguise themselves during the attack on the Indian post?",
          optionA: "Wearing Indian Army uniforms",
          optionB: "Wearing long loose coats called firans",
          optionC: "Wearing civilian clothes",
          correctAnswer: "Wearing long loose coats called firans",
        }),
      shuffleOptions({
          question:
            "How many attackers were there compared to Indian soldiers during the attack on the Indian post?",
          optionA: "Equal number",
          optionB: "More attackers than Indian soldiers",
          optionC: "More Indian soldiers than attackers",
          correctAnswer: "More attackers than Indian soldiers",
        }),
      shuffleOptions({
          question: "How many of our soldiers were killed during the battle?",
          optionA: "23",
          optionB: "100",
          optionC: "300",
          correctAnswer: "23",
        }),
      shuffleOptions({
          question: "What happened to Major Somnath Sharma during the battle?",
          optionA: "He was injured and continued to fight",
          optionB: "He was killed by a bomb",
          optionC: "He escaped unharmed",
          correctAnswer: "He was killed by a bomb",
        }),
      shuffleOptions({
          question: "How did the battle of Badgam conclude?",
          optionA: "The enemy surrendered",
          optionB: "The Indian soldiers retreated",
          optionC: "The Indian soldiers won",
          correctAnswer: "The Indian soldiers won",
        }),
      shuffleOptions({
          question:
            "What award was Major Somnath Sharma honored with for his bravery?",
          optionA: "Ashoka Chakra",
          optionB: "Param Vir Chakra",
          optionC: "Bharat Ratna",
          correctAnswer: "Param Vir Chakra",
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
            "When India became free in 1947, Kashmir became _______ our part.",
          optionA: "their",
          optionB: "our",
          optionC: "the",
          correctAnswer: "our",
        }),
      shuffleOptions({
          question:
            "Pakistan sent its soldiers to occupy Kashmir disguised as ________ people.",
          optionA: "tribal",
          optionB: "local",
          optionC: "foreign",
          correctAnswer: "tribal",
        }),
      shuffleOptions({
          question:
            "The Indian Army was not in Kashmir at that time, so many Indian soldiers were sent by _______ to check the enemy's advance.",
          optionA: "land",
          optionB: "air",
          optionC: "sea",
          correctAnswer: "air",
        }),
      shuffleOptions({
          question:
            "Major Somnath Sharma broke his hand and his hand was bound in a heavy plaster, yet he insisted on being with his _______ when they fought the enemy.",
          optionA: "officers",
          optionB: "comrades",
          optionC: "soldiers",
          correctAnswer: "soldiers",
        }),
      shuffleOptions({
          question:
            "Major Somnath Sharma and his soldiers were positioned on a small hill in ________.",
          optionA: "Kashmir",
          optionB: "Badgam",
          optionC: "Delhi",
          correctAnswer: "Badgam",
        }),
      shuffleOptions({
          question:
            "The Pakistani soldiers attacked the Indian post while disguised as ______ villagers.",
          optionA: "innocent",
          optionB: "local",
          optionC: "hostile",
          correctAnswer: "villagers",
        }),
      shuffleOptions({
          question:
            "Major Somnath Sharma and his soldiers fought bravely despite being outnumbered by ________ attackers.",
          optionA: "more than a thousand",
          optionB: "less than one hundred",
          optionC: "more than seven hundred",
          correctAnswer: "more than seven hundred",
        }),
      shuffleOptions({
          question:
            "Major Somnath Sharma was awarded the Param Vir Chakra for his bravery, which is the highest Indian award for _______.",
          optionA: "loyalty",
          optionB: "courage",
          optionC: "intelligence",
          correctAnswer: "bravery",
        }),
      shuffleOptions({
          question:
            "In the end, more than ________ dead bodies were left behind by the fleeing enemy.",
          optionA: "100",
          optionB: "200",
          optionC: "300",
          correctAnswer: "300",
        }),
      shuffleOptions({
          question:
            "The battle for Badgam resulted in the victory of the Indian soldiers and the saving of the area from the ________.",
          optionA: "flood",
          optionB: "enemy",
          optionC: "drought",
          correctAnswer: "enemy",
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
          question: "India became free in 1947.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Pakistan sent its soldiers to occupy Kashmir dressed as tribal people.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Major Somnath Sharma's hand was not injured during the battle.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Major Somnath Sharma was awarded the Param Vir Chakra for his bravery.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The Indian Army was present in Kashmir when the Pakistani soldiers attacked.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Major Somnath Sharma and his soldiers were outnumbered by the attackers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The Pakistani soldiers attacked the Indian post while disguised as friendly villagers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The battle for Badgam resulted in the victory of the Pakistani soldiers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "More than 100 dead bodies were left behind by the fleeing enemy.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Major Somnath Sharma's actions did not contribute to the saving of Badgam from the enemy.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
