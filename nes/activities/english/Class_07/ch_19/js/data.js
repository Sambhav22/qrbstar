export const chapter = "Chapter -19: If";
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
            "If you can trust yourself when all men doubt you, what should you also do?",
          optionA: "Ignore everyone's doubts",
          optionB: "Make allowance for their doubting too",
          optionC: "Confront those who doubt you",
          correctAnswer: "B. Make allowance for their doubting too",
        }),
      shuffleOptions({
          question:
            "According to the text, what should you not do when being lied about?",
          optionA: "Confront the liar",
          optionB: "Deal in lies",
          optionC: "Stay silent",
          correctAnswer: "B. Deal in lies",
        }),
      shuffleOptions({
          question:
            "What is emphasized in the line 'And yet don't look too good, nor talk too wise'?",
          optionA: "Humility",
          optionB: "Arrogance",
          optionC: "Indifference",
          correctAnswer: "A. Humility",
        }),
      shuffleOptions({
          question:
            "According to the text, what should you not let your dreams become?",
          optionA: "Unachievable",
          optionB: "Your master",
          optionC: "Ignored",
          correctAnswer: "B. Your master",
        }),
      shuffleOptions({
          question:
            "How should you treat Triumph and Disaster, according to the text?",
          optionA: "Ignore both",
          optionB: "Treat them as impostors",
          optionC: "Celebrate Triumph, lament Disaster",
          correctAnswer: "B. Treat them as impostors",
        }),
      shuffleOptions({
          question:
            "What does the text advise you to do when others twist the truth you've spoken?",
          optionA: "Confront them",
          optionB: "Retaliate with lies",
          optionC: "Bear to hear the twisted truth",
          correctAnswer: "C. Bear to hear the twisted truth",
        }),
      shuffleOptions({
          question:
            "What does the speaker suggest you do when facing setbacks, such as broken dreams?",
          optionA: "Surrender",
          optionB: "Stoop and build them up again",
          optionC: "Blame others",
          correctAnswer: "B. Stoop and build them up with worn-out tools",
        }),
      shuffleOptions({
          question:
            "What should you do if you lose everything and have to start again at your beginnings?",
          optionA: "Despair and give up",
          optionB: "Risk everything again",
          optionC: "Never breathe a word about your loss",
          correctAnswer: "C. Never breathe a word about your loss",
        }),
      shuffleOptions({
          question:
            "According to the text, what should you hold onto even when there is nothing in you?",
          optionA: "Desperation",
          optionB: "Courage",
          optionC: "Will",
          correctAnswer: "C. Will",
        }),
      shuffleOptions({
          question:
            "What does the text advise you to do when talking with crowds or walking with Kings?",
          optionA: "Flaunt your achievements",
          optionB: "Keep your virtue",
          optionC: "Lose the common touch",
          correctAnswer: "B. Keep your virtue",
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
            "If you can trust yourself when all men doubt you, what should you also do?\n- If you can wait and not be tired by _______,",
          optionA: "doubting",
          optionB: "waiting",
          optionC: "hoping",
          correctAnswer: "B. waiting",
        }),
      shuffleOptions({
          question:
            "If you can ________ and not make dreams your master,\nIf you can think-and not make thoughts your aim,",
          optionA: "dream",
          optionB: "sleep",
          optionC: "imagine",
          correctAnswer: "A. dream",
        }),
      shuffleOptions({
          question:
            "If you can meet with Triumph and Disaster\nAnd treat those two impostors just the ________,",
          optionA: "same",
          optionB: "differently",
          optionC: "wisely",
          correctAnswer: "A. same",
        }),
      shuffleOptions({
          question:
            "If you can bear to hear the truth you've spoken\nTwisted by knaves to make a trap for _______,",
          optionA: "fools",
          optionB: "geniuses",
          optionC: "poets",
          correctAnswer: "A. fools",
        }),
      shuffleOptions({
          question:
            "Or watch the things you gave your life to, broken,\nAnd stoop and build 'em up with ________ tools;",
          optionA: "new",
          optionB: "worn-out",
          optionC: "modern",
          correctAnswer: "B. worn-out",
        }),
      shuffleOptions({
          question:
            "If you can make one heap of all your winnings\nAnd risk it on one turn of pitch-and-_______,",
          optionA: "spin",
          optionB: "toss",
          optionC: "flip",
          correctAnswer: "B. toss",
        }),
      shuffleOptions({
          question: "And lose, and start again at your _______,",
          optionA: "achievements",
          optionB: "beginnings",
          optionC: "endings",
          correctAnswer: "B. beginnings",
        }),
      shuffleOptions({
          question:
            "If you can force your heart and nerve and sinew\nTo serve your turn long after they ________,",
          optionA: "vanish",
          optionB: "fade",
          optionC: "are gone",
          correctAnswer: "C. are gone",
        }),
      shuffleOptions({
          question: "If you can talk with crowds and keep your ________,",
          optionA: "secrets",
          optionB: "virtue",
          optionC: "ego",
          correctAnswer: "B. virtue",
        }),
      shuffleOptions({
          question: "If all men count with you, but none too ________,",
          optionA: "little",
          optionB: "much",
          optionC: "often",
          correctAnswer: "B. much",
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
          question: "Muni could sit under the belly of the horse for shade.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The horse was made of wood, baked, burnt, and brightly colored.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Muni watched the mountain road for a time signal, and when the green bus appeared, he could leave.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The foreigner, a red-faced man, asked if there was a gas station nearby or if he had to wait until another car comes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Muni felt he should get up and run away, but he cursed his age because he couldn't readily put his limbs into action.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The foreigner wore khaki clothes, appearing to be a chef or a gardener.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The red-faced man presented his card, revealing that he came from Paris.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Muni spoke the only English expressions he had learnt, 'Yes, no.' Having exhausted his English vocabulary, he continued in French.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The foreigner implored, 'Please, please, I will speak slowly, please try to understand me. Can't you understand even a simple word of Spanish?'",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Muni, understanding that the other man was not an inquisitor, remained wary but explained that their village had always had a clean record and any crime must definitely be happening in the other village.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
