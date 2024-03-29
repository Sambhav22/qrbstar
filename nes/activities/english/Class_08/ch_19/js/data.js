export const chapter = "Chapter -19: Buddha's Death";
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
            "What did they say happened along the pathway as the saintly Master went?",
          optionA: "Fruit trees blossomed out of season",
          optionB: "It rained heavily",
          optionC: "The path became treacherous",
          correctAnswer: "Fruit trees blossomed out of season",
        }),
      shuffleOptions({
          question:
            "According to the saintly Master, how is the soul's true worship rendered?",
          optionA: "By flowers and sandal-powder",
          optionB: "By music's heavenly strain",
          optionC: "By a devout man and a holy woman",
          correctAnswer: "By a devout man and a holy woman",
        }),
      shuffleOptions({
          question:
            "What did Buddha tell his friend Ananda about the external offerings like flowers and sandal-powder?",
          optionA: "They are essential for worship",
          optionB: "They are useless and vain",
          optionC: "They are optional but appreciated",
          correctAnswer: "They are useless and vain",
        }),
      shuffleOptions({
          question:
            "What did the Brahman, seeking wisdom, find when he came to see the saintly Buddha?",
          optionA: "Buddha was enjoying good health",
          optionB: "Buddha was sleeping peacefully",
          optionC: "Buddha was suffering, sick, and wan",
          correctAnswer: "Buddha was suffering, sick, and wan",
        }),
      shuffleOptions({
          question:
            "Who did Buddha say would not come to him in vain when seeking wisdom?",
          optionA: "A merchant",
          optionB: "A pious stranger",
          optionC: "A warrior",
          correctAnswer: "A pious stranger",
        }),
      shuffleOptions({
          question:
            "What did the saintly Master do when a Brahman seeking wisdom came to see him?",
          optionA: "Ignored him",
          optionB: "Anxiously stopped him",
          optionC: "Welcomed him with joy",
          correctAnswer: "Anxiously stopped him",
        }),
      shuffleOptions({
          question:
            "According to the text, what did NOT happen along the pathway as the saintly Master went?",
          optionA: "Fruit trees blossomed out of season",
          optionB: "Lovely fragrance lent",
          optionC: "Rocks and thorns appeared",
          correctAnswer: "Rocks and thorns appeared",
        }),
      shuffleOptions({
          question:
            "How did the saintly Master teach the law to the pious stranger?",
          optionA: "With written scriptures",
          optionB: "With dying accents",
          optionC: "Through a disciple",
          correctAnswer: "With dying accents",
        }),
      shuffleOptions({
          question:
            "According to the text, what should you not let your dreams become?",
          optionA: "Unachievable",
          optionB: "Your master",
          optionC: "Ignored",
          correctAnswer: "Your master",
        }),
      shuffleOptions({
          question:
            "Who, according to the text, truly performs the soul's worship?",
          optionA: "A wealthy person",
          optionB: "A devout man and a holy woman",
          optionC: "A scholar",
          correctAnswer: "A devout man and a holy woman",
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
            "Thus in many lands they wandered, Buddha and his faithful friend, teaching truth to many nations, till his life approached its __________.",
          optionA: "zenith",
          optionB: "pinnacle",
          optionC: "terminus",
          correctAnswer: "terminus",
        }),
      shuffleOptions({
          question:
            "And they say, along the pathway, as the saintly Master went, fruit trees blossomed out of __________.",
          optionA: "sequence",
          optionB: "season",
          optionC: "order",
          correctAnswer: "season",
        }),
      shuffleOptions({
          question:
            "But the saintly Master whispered to his friend beloved and blest, 'Tis not thus, O friend Ananda! That the Buddha's honored __________.",
          optionA: "glory",
          optionB: "esteem",
          optionC: "best",
          correctAnswer: "best",
        }),
      shuffleOptions({
          question:
            "Not by flowers or sandal-powder, not by music's heavenly strain, is the soul's true worship __________.",
          optionA: "validated",
          optionB: "rendered",
          optionC: "concluded",
          correctAnswer: "rendered",
        }),
      shuffleOptions({
          question:
            "But the brother and the sister, man devout and woman holy, pure in life, in duty faithful, they perform the worship __________.",
          optionA: "absolutely",
          optionB: "genuinely",
          optionC: "necessarily",
          correctAnswer: "genuinely",
        }),
      shuffleOptions({
          question:
            "Night came on, and saintly Buddha slept in suffering, sick and __________.",
          optionA: "weak",
          optionB: "wan",
          optionC: "frail",
          correctAnswer: "wan",
        }),
      shuffleOptions({
          question:
            "When a Brahman, seeking wisdom, came to see the holy man, anxiously Ananda __________ him.",
          optionA: "questioned",
          optionB: "stopped",
          optionC: "welcomed",
          correctAnswer: "stopped",
        }),
      shuffleOptions({
          question:
            "But spoke Buddha, though in pain, 'He who comes to seek for wisdom shall not come to me in __________!'",
          optionA: "despair",
          optionB: "futility",
          optionC: "vain",
          correctAnswer: "vain",
        }),
      shuffleOptions({
          question:
            "And he to the pious stranger told the truth in language __________.",
          optionA: "intricate",
          optionB: "plain",
          optionC: "elaborate",
          correctAnswer: "plain",
        }),
      shuffleOptions({
          question:
            "Taught the law with dying accents, stopped, and never spoke __________.",
          optionA: "later",
          optionB: "again",
          optionC: "moreover",
          correctAnswer: "again",
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
            "Buddha and his faithful friend wandered in many lands teaching truth to many nations.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Fruit trees blossomed out of season along the pathway as the saintly Master went.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The saintly Master whispered that the soul's true worship is rendered by flowers and sandal-powder.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "According to the text, the brother and the sister perform the soul's worship truly.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Saintly Buddha slept peacefully when night came on, and he was healthy and strong.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Ananda stopped a Brahman seeking wisdom from seeing the saintly man.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Buddha spoke with joy, welcoming the pious stranger who sought wisdom.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The saintly Master emphasized that external offerings like flowers are essential for worship.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The Brahman seeking wisdom left without gaining any insights from the saintly Buddha.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The text advises that one should confront those who doubt them when seeking wisdom.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
