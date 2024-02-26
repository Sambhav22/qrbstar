export const chapter = "Chapter - 17: Chittor Fort :A Cradle of Historv";
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
          "Which fort in India is known for its captivating history and is a UNESCO World Heritage Site?",
        optionA: "Jaipur Fort",
        optionB: "Chittor Fort",
        optionC: "Agra Fort",
        correctAnswer: "Chittor Fort",
     }),
      shuffleOptions({
        question: "Chittor Fort is located in which region of India?",
        optionA: "Kashmir",
        optionB: "Mewar (Rajasthan)",
        optionC: "Bengal",
        correctAnswer: "Mewar (Rajasthan)",
     }),
      shuffleOptions({
        question:
          "Who is believed to have initiated the construction of Chittor Fort?",
        optionA: "Akbar",
        optionB: "Mauryan kings",
        optionC: "Alauddin Khalji",
        correctAnswer: "Mauryan kings",
     }),
      shuffleOptions({
        question:
          "What is the significance of the Jal Mahal in Chittor Fort's history?",
        optionA: "It's a place where battles were fought.",
        optionB: "It's where Queen Padmini was imprisoned.",
        optionC: "It's where Khalji saw a mirror image of Queen Padmini.",
        correctAnswer: "It's where Khalji saw a mirror image of Queen Padmini.",
     }),
      shuffleOptions({
        question:
          "How did Queen Padmini and her companions deceive Alauddin Khalji?",
        optionA: "They pretended to surrender and then attacked.",
        optionB: "They offered him valuable treasures in exchange for safety.",
        optionC: "They sent a Rakhi as a token of friendship.",
        correctAnswer: "They pretended to surrender and then attacked.",
     }),
      shuffleOptions({
        question:
          "What tragic event did Queen Padmini and other women in Chittor Fort choose to avoid?",
        optionA: "Massacre",
        optionB: "Humiliation",
        optionC: "Starvation",
        correctAnswer: "Humiliation",
     }),
      shuffleOptions({
        question:
          "Which historical figure did Rani Karnavati send a Rakhi to for help?",
        optionA: "Rana Sanga",
        optionB: "Bahadur Shah",
        optionC: "Humayun",
        correctAnswer: "Humayun",
     }),
      shuffleOptions({
        question:
          "What is the association between Rani Karnavati and the festival of Rakhi?",
        optionA: "She used Rakhi as a military strategy.",
        optionB: "She tied Rakhi to Humayun, seeking help.",
        optionC: "She invented the festival of Rakhi.",
        correctAnswer: "She tied Rakhi to Humayun, seeking help.",
     }),
      shuffleOptions({
        question:
          "Which of the following is a notable monument within Chittor Fort?",
        optionA: "Eiffel Tower",
        optionB: "Vijay Stambh",
        optionC: "Leaning Tower of Pisa",
        correctAnswer: "Vijay Stambh",
     }),
      shuffleOptions({
        question:
          "How many gates are there in Chittor Fort for ensuring security?",
        optionA: "Four gates",
        optionB: "Six gates",
        optionC: "Seven gates",
        correctAnswer: "Seven gates",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Chittor Fort is located in the region of _______________.",
        options: ["Mewar (Rajasthan)", "Bengal", "Kashmir"],
        correctAnswer: "Mewar (Rajasthan)",
     }),
      shuffleOptions({
        question:
          "The first Jauhar at Chittor Fort occurred during the early _______________ century.",
        options: ["fourteenth", "fifteenth", "sixteenth"],
        correctAnswer: "fourteenth",
     }),
      shuffleOptions({
        question:
          "Queen Padmini, the wife of Ratan Singh, was held in the _______________ during Alauddin Khalji's siege.",
        options: ["palace", "Jal Mahal", "temple"],
        correctAnswer: "Jal Mahal",
     }),
      shuffleOptions({
        question:
          "To deceive Alauddin Khalji, Queen Padmini and her companions pretended to _______________.",
        options: [
          "offer valuable treasures",
          "surrender and then attacked",
          "send a Rakhi as a token of friendship",
        ],
        correctAnswer: "surrender and then attacked",
     }),
      shuffleOptions({
        question:
          "Rani Karnavati sent a Rakhi to _______________ for help when her army was weakened.",
        options: ["Rana Sanga", "Bahadur Shah", "Humayun"],
        correctAnswer: "Humayun",
     }),
      shuffleOptions({
        question:
          "The brave Rani Karnavati motivated her army to fight valiantly but resulted in a complete _______________ for it.",
        options: ["victory", "retreat", "rout"],
        correctAnswer: "rout",
     }),
      shuffleOptions({
        question:
          "The third Jauhar at Chittor Fort occurred when Akbar, the Mughal ruler, attacked Chittor, which was already weakened by the previous _______________.",
        options: ["Rakhi festival", "Jauhar", "victory"],
        correctAnswer: "Jauhar",
     }),
      shuffleOptions({
        question:
          "Parma Dhai, a nurse, made a great sacrifice by saving the _______________ during a plot to kill the young princes.",
        options: ["Rajput warriors", "elephants", "young princes"],
        correctAnswer: "young princes",
     }),
      shuffleOptions({
        question:
          "The _______________ is a marvelous 11-storey building built to celebrate Mewar's victory over Malwa within Chittor Fort.",
        options: ["Eiffel Tower", "Vijay Stambh", "Leaning Tower of Pisa"],
        correctAnswer: "Vijay Stambh",
     }),
      shuffleOptions({
        question:
          "Chittor Fort has _______________ gates built to ensure security.",
        options: ["four", "six", "seven"],
        correctAnswer: "seven",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Chittor Fort is a UNESCO World Heritage Site.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The first Jauhar at Chittor Fort occurred in the sixteenth century.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Queen Padmini and her companions surrendered to Alauddin Khalji.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Rani Karnavati sent a Rakhi to Rana Sanga for help.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The brave Rani Karnavati's army emerged victorious in the battle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Parma Dhai saved Rajput warriors during a plot to kill the young princes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The Vijay Stambh is a 7-storey building within Chittor Fort.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Chittor Fort has only four gates for ensuring security.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The third Jauhar at Chittor Fort took place during Akbar's rule.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Queen Padmini was held in a palace during the siege of Chittor Fort.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
