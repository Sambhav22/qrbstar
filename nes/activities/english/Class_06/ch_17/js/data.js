export const chapter = "Chapter -17: Chittor Fort : A Cradle of History";
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
          question: "When was the Chittor Fort built?",
          optionA: "During the Mauryan period",
          optionB: "In the 14th century",
          optionC: "Its origin is unclear",
          correctAnswer: "c) Its origin is unclear",
        }),
      shuffleOptions({
          question:
            "Which ruler attacked Chittor in the early fourteenth century, leading to the first Jauhar?",
          optionA: "Akbar",
          optionB: "Alauddin Khalji",
          optionC: "Babur",
          correctAnswer: "b) Alauddin Khalji",
        }),
      shuffleOptions({
          question:
            "How did Queen Padmini deceive Alauddin Khalji during the siege of Chittor?",
          optionA: "She surrendered to him willingly",
          optionB: "She sent her mirror image to him",
          optionC: "She fled the fort with her army",
          correctAnswer: "b) She sent her mirror image to him",
        }),
      shuffleOptions({
          question:
            "Which ruler attacked Chittor around 200 years after the first Jauhar?",
          optionA: "Bahadur Shah",
          optionB: "Humayun",
          optionC: "Rana Sanga",
          correctAnswer: "a) Bahadur Shah",
        }),
      shuffleOptions({
          question: "Why did Queen Karnavati send a Rakhi to Humayun?",
          optionA: "To seek revenge",
          optionB: "To request help against an invasion",
          optionC: "As a gesture of goodwill",
          correctAnswer: "b) To request help against an invasion",
        }),
      shuffleOptions({
          question: "Who was the grandmother of Maharana Pratap?",
          optionA: "Rana Sanga",
          optionB: "Karnavati",
          optionC: "Parma Dhai",
          correctAnswer: "b) Karnavati",
        }),
      shuffleOptions({
          question:
            "What is the significance of the Vijay Stambh in Chittor Fort?",
          optionA: "It commemorates Mewar's victory over Malwa",
          optionB: "It is a Jain temple",
          optionC: "It was the site of a Jauhar",
          correctAnswer: "a) It commemorates Mewar's victory over Malwa",
        }),
      shuffleOptions({
          question: "How many acres of land does Chittor Fort cover?",
          optionA: "500 acres",
          optionB: "700 acres",
          optionC: "1000 acres",
          correctAnswer: "b) 700 acres",
        }),
      shuffleOptions({
          question: "Which festival is associated with Queen Karnavati?",
          optionA: "Diwali",
          optionB: "Holi",
          optionC: "Rakhi",
          correctAnswer: "c) Rakhi",
        }),
      shuffleOptions({
          question:
            "What is held annually at the Jauhar site in Chittor Fort to commemorate the brave warriors and women?",
          optionA: "A musical festival",
          optionB: "Jauhar Mela",
          optionC: "A religious procession",
          correctAnswer: "b) Jauhar Mela",
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
            "Chittor Fort is located in the ________ region in Rajasthan.",
          optionA: "Marwar",
          optionB: "Mewar",
          optionC: "Shekhawati",
          correctAnswer: "b) Mewar",
        }),
      shuffleOptions({
          question:
            "The historical stories at Chittor Fort carve their perennial place in ________ history.",
          optionA: "Regional",
          optionB: "National",
          optionC: "International",
          correctAnswer: "b) National",
        }),
      shuffleOptions({
          question:
            "Chittor Fort is recognized as a UNESCO World Heritage Site, and it covers about ________ acres of land area.",
          optionA: "500",
          optionB: "700",
          optionC: "1000",
          correctAnswer: "b) 700",
        }),
      shuffleOptions({
          question:
            "The first Jauhar at Chittor Fort occurred during the early ________ century when Alauddin Khalji attacked the capital of Mewar.",
          optionA: "12th",
          optionB: "14th",
          optionC: "16th",
          correctAnswer: "b) 14th",
        }),
      shuffleOptions({
          question:
            "Queen Padmini, to deceive Alauddin Khalji, showed her mirror image in the water in the ________.",
          optionA: "Jal Mahal",
          optionB: "Kirti Stambh",
          optionC: "Vijay Stambh",
          correctAnswer: "a) Jal Mahal",
        }),
      shuffleOptions({
          question:
            "The second Jauhar at Chittor Fort took place approximately ________ years later during the reign of Rana Sanga.",
          optionA: "100",
          optionB: "200",
          optionC: "300",
          correctAnswer: "b) 200",
        }),
      shuffleOptions({
          question:
            "Queen Karnavati, during the second Jauhar, sent a Rakhi to ________ for help against the invasion by Bahadur Shah.",
          optionA: "Alauddin Khalji",
          optionB: "Humayun",
          optionC: "Babur",
          correctAnswer: "b) Humayun",
        }),
      shuffleOptions({
          question:
            "The ruler of Gujarat who attacked Mewar during the second Jauhar was ________ Shah.",
          optionA: "Bahadur",
          optionB: "Akbar",
          optionC: "Babur",
          correctAnswer: "a) Bahadur",
        }),
      shuffleOptions({
          question:
            "The third Jauhar at Chittor Fort occurred when Akbar, the Mughal ruler, attacked the fort during the reign of King ________ Singh.",
          optionA: "Rana Sanga",
          optionB: "Ratan Singh",
          optionC: "Udai Singh",
          correctAnswer: "c) Udai Singh",
        }),
      shuffleOptions({
          question:
            "The annual event held at the Jauhar site in Chittor Fort to commemorate the brave warriors and women is called ________ Mela.",
          optionA: "Victory",
          optionB: "Heritage",
          optionC: "Jauhar",
          correctAnswer: "b) Jauhar Mela",
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
            "Chittor Fort is located in the Marwar region in Rajasthan.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Chittor Fort is recognized as a UNESCO World Heritage Site.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Chittor Fort covers about 500 acres of land area.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The first Jauhar at Chittor Fort occurred in the 16th century.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Queen Padmini showed her mirror image in the Jal Mahal to deceive Alauddin Khalji.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The second Jauhar at Chittor Fort took place approximately 300 years later.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Queen Karnavati sent a Rakhi to Babur for help against the invasion by Bahadur Shah.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The ruler of Gujarat who attacked Mewar during the second Jauhar was Akbar.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The third Jauhar at Chittor Fort occurred when Rana Sanga was the king.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The annual event held at the Jauhar site in Chittor Fort is called Heritage Mela.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
