export const chapter = "Chapter -10: The Short - sighted Brothers";
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
            "What was the primary reason the youngest brother suggested taking charge of the finances?",
          optionA: "To demonstrate his superior vision",
          optionB: "To prevent the eldest brother from being cheated",
          optionC:
            "To prove that he could handle finances better than the others",
          correctAnswer: "To prevent the eldest brother from being cheated",
        }),
      shuffleOptions({
          question: "Why did the second brother sneer at the youngest brother?",
          optionA: "He thought the youngest brother was being dishonest",
          optionB:
            "He disagreed with the youngest brother's financial decisions",
          optionC:
            "He believed the youngest brother's vision was no better than his own",
          correctAnswer:
            "He believed the youngest brother's vision was no better than his own",
        }),
      shuffleOptions({
          question:
            "How did the eldest brother trick his siblings before the vision test?",
          optionA: "He secretly consulted a vision specialist",
          optionB: "He bribed the monk to reveal the inscription",
          optionC:
            "He went to the monastery beforehand and learned about the inscription",
          correctAnswer:
            "He went to the monastery beforehand and learned about the inscription",
        }),
      shuffleOptions({
          question:
            "What was the inscription on the tablet above the monastery doorway?",
          optionA: "Be Honest At All Times",
          optionB: "Honesty is the Best Policy",
          optionC: "Always Speak the Truth",
          correctAnswer: "Be Honest At All Times",
        }),
      shuffleOptions({
          question:
            "What did the second brother find pleasing about the inscription?",
          optionA: "Its profound wisdom",
          optionB: "The flowery border around it",
          optionC: "The absence of any additional writing",
          correctAnswer: "The flowery border around it",
        }),
      shuffleOptions({
          question:
            "What did the youngest brother point out that the other two brothers missed on the tablet?",
          optionA: "A hidden message",
          optionB: "The name of the donor, Wang Lee",
          optionC: "A mistake in the inscription",
          correctAnswer: "The name of the donor, Wang Lee",
        }),
      shuffleOptions({
          question:
            "How did the youngest brother realize the deception of the other two brothers?",
          optionA: "He overheard them talking about it",
          optionB: "The monk revealed the truth to him",
          optionC:
            "He paid close attention to their descriptions of the tablet",
          correctAnswer:
            "He paid close attention to their descriptions of the tablet",
        }),
      shuffleOptions({
          question:
            "What did the eldest brother do when the monk revealed they hadn't put up the inscription yet?",
          optionA: "Admitted to his deception",
          optionB: "Laughed at the monk's mistake",
          optionC: "Accused the monk of lying",
          correctAnswer: "Admitted to his deception",
        }),
      shuffleOptions({
          question:
            "What did the three brothers decide to do after realizing their mistake?",
          optionA: "Continue with their plan to test their vision",
          optionB: "Apologize to the monk and leave",
          optionC: "Agree to continue handling finances as before",
          correctAnswer: "Agree to continue handling finances as before",
        }),
      shuffleOptions({
          question:
            "Why did the youngest brother applaud the second brother after he mentioned the floral decoration?",
          optionA: "He genuinely admired the second brother's vision",
          optionB: "He wanted to distract them from the deception",
          optionC: "He was being sarcastic and mocking the second brother",
          correctAnswer: "He wanted to distract them from the deception",
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
            "The youngest brother suggested taking charge of the finances because he believed the eldest brother's sight was so bad that he couldn't distinguish between _______ and _______.",
          optionA: "Small notes, large notes",
          optionB: "Genuine coins, counterfeit ones",
          optionC: "Silver coins, gold coins",
          correctAnswer: "Genuine coins, counterfeit ones",
        }),
      shuffleOptions({
          question:
            "The second brother sneered at the youngest brother, claiming that he paid _______ yuans when he should have paid only _______ yuans.",
          optionA: "Ten, five",
          optionB: "Twenty, two",
          optionC: "Fifteen, three",
          correctAnswer: "Twenty, two",
        }),
      shuffleOptions({
          question:
            "The youngest brother argued that the finances should be handled by the one with the _______ sight.",
          optionA: "Clearest",
          optionB: "Farsighted",
          optionC: "Best",
          correctAnswer: "Best",
        }),
      shuffleOptions({
          question:
            "The eldest brother, after hearing about the monastery's inscription, suggested testing their vision to determine who would get charge of their money. Whoever could read the inscription with the least _______ would win.",
          optionA: "Difficulty",
          optionB: "Strain",
          optionC: "Effort",
          correctAnswer: "Strain",
        }),
      shuffleOptions({
          question:
            'The inscription on the tablet above the monastery doorway reads: "_________."',
          optionA: "Be Truthful Always",
          optionB: "Speak Honestly At All Times",
          optionC: "Be Honest At All Times",
          correctAnswer: "Be Honest At All Times",
        }),
      shuffleOptions({
          question:
            "The second brother, pleased with himself, mentioned that the tablet had a _______ around the inscription.",
          optionA: "Flowery border",
          optionB: "Golden frame",
          optionC: "Silver lining",
          correctAnswer: "Flowery border",
        }),
      shuffleOptions({
          question:
            "The third brother, upon enquiring about the inscription, found out that there was additional writing on the tablet, specifically the donor's name, _______.",
          optionA: "Wang Lee",
          optionB: "Zhang Wei",
          optionC: "Li Chen",
          correctAnswer: "Wang Lee",
        }),
      shuffleOptions({
          question:
            "The youngest brother, pointing out a crucial detail, mentioned that besides the inscription, there was also the name of the donor, _______, on the tablet.",
          optionA: "Chen Wei",
          optionB: "Wang Lee",
          optionC: "Li Zhang",
          correctAnswer: "Wang Lee",
        }),
      shuffleOptions({
          question:
            'When the three brothers approached the monastery the next morning, the eldest brother claimed he could clearly make out the writing on the tablet, which read: "_________."',
          optionA: "Speak Truthfully Always",
          optionB: "Be Honest At All Times",
          optionC: "Honesty is the Best Policy",
          correctAnswer: "Be Honest At All Times",
        }),
      shuffleOptions({
          question:
            "The youngest brother, applauding the second brother, sarcastically commended him for noticing the _______ around the tablet.",
          optionA: "Engraved pattern",
          optionB: "Decorative frame",
          optionC: "Floral decoration",
          correctAnswer: "Floral decoration",
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
            "The youngest brother suggested taking charge of the finances due to the eldest brother's poor eyesight.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The second brother claimed the youngest brother paid twenty yuans when he should have paid only two yuans.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The youngest brother argued that finances should be handled by the one with the clearest sight.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The eldest brother suggested testing their vision by reading an inscription at the monastery.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The inscription above the monastery doorway reads: 'Speak Honestly At All Times.'",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The second brother mentioned a flowery border around the inscription on the tablet.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The third brother found out that the tablet had no additional writing besides the inscription.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The youngest brother pointed out the name of the donor, Chen Wei, on the tablet.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The eldest brother claimed he could clearly read the writing on the tablet the next morning.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The youngest brother sarcastically commended the second brother for noticing an engraved pattern around the tablet.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
