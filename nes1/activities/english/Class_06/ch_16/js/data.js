export const chapter = "Chapter -16: Nala and Damyanti";
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
            "Who was the ruler of Berar during the ancient period in the story?",
          optionA: "Nala",
          optionB: "Bhima",
          optionC: "Damyanti",
          correctAnswer: "Bhima",
        }),
      shuffleOptions({
          question: "What made Damyanti stand out among her handmaids?",
          optionA: "Intelligence",
          optionB: "Beauty",
          optionC: "Leadership skills",
          correctAnswer: "Beauty",
        }),
      shuffleOptions({
          question:
            "What was Nala planning before he got a chance to send a message to Damyanti?",
          optionA: "War",
          optionB: "Expedition to Berar",
          optionC: "Building a palace",
          correctAnswer: "Expedition to Berar",
        }),
      shuffleOptions({
          question: "How did Nala come across the swan in the royal gardens?",
          optionA: "During a royal feast",
          optionB: "While strolling in the gardens",
          optionC: "In the temple",
          correctAnswer: "While strolling in the gardens",
        }),
      shuffleOptions({
          question: "What request did the swan make to Nala to set it free?",
          optionA: "To join the royal court",
          optionB: "To deliver a message",
          optionC: "To become Nala's companion",
          correctAnswer: "To deliver a message",
        }),
      shuffleOptions({
          question: "What was the swan's message to Damyanti from Nala?",
          optionA: "Nala wanted to challenge her to a duel",
          optionB: "Nala loved her ardently and wanted to marry her",
          optionC: "Nala invited her to a royal feast",
          correctAnswer: "Nala loved her ardently and wanted to marry her",
        }),
      shuffleOptions({
          question: "What was the Swayamvara and how did it work?",
          optionA: "A royal feast",
          optionB: "A marriage ceremony",
          optionC: "A battle competition",
          correctAnswer: "A marriage ceremony",
        }),
      shuffleOptions({
          question:
            "Why did the gods assume Nala's form during the Swayamvara?",
          optionA: "To challenge Nala",
          optionB: "To deceive Damyanti",
          optionC: "To attend the ceremony",
          correctAnswer: "To deceive Damyanti",
        }),
      shuffleOptions({
          question:
            "How did Damyanti identify the real Nala among the five Nalas in the assembly?",
          optionA: "By their attire",
          optionB: "By their hairstyles",
          optionC: "By observing their behavior",
          correctAnswer: "By observing their behavior",
        }),
      shuffleOptions({
          question:
            "Why did Damyanti choose Nala over the gods at the Swayamvara?",
          optionA: "She preferred mortal love over heavenly beings",
          optionB: "She found the gods unattractive",
          optionC: "Nala promised her great wealth",
          correctAnswer: "She preferred mortal love over heavenly beings",
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
            "Damyanti's father, the powerful king named __________, ruled in Berar during the ancient period.",
          optionA: "Nala",
          optionB: "Bhima",
          optionC: "Damyanti",
          correctAnswer: "Bhima",
        }),
      shuffleOptions({
          question:
            "Damyanti was known for her exceptional __________, and people lined along the road to catch a glimpse of her beauty.",
          optionA: "Intelligence",
          optionB: "Elegance",
          optionC: "Leadership skills",
          correctAnswer: "Elegance",
        }),
      shuffleOptions({
          question:
            "Nala, the king of __________, was described as a brave and handsome king in the story.",
          optionA: "Berar",
          optionB: "Nishada",
          optionC: "Damyanti",
          correctAnswer: "Nishada",
        }),
      shuffleOptions({
          question:
            "Damyanti sent a message to Nala through a __________ that descended near the pool in the royal gardens.",
          optionA: "Dove",
          optionB: "Swan",
          optionC: "Peacock",
          correctAnswer: "Swan",
        }),
      shuffleOptions({
          question:
            "Nala planned an expedition to __________ before getting a chance to send a message to Damyanti.",
          optionA: "Berar",
          optionB: "Nishada",
          optionC: "Heaven",
          correctAnswer: "Berar",
        }),
      shuffleOptions({
          question:
            "The __________ was an assembly where suitors were invited to win the hand of the princess by putting a garland around their neck.",
          optionA: "Royal Feast",
          optionB: "Swayamvara",
          optionC: "Battle Competition",
          correctAnswer: "Swayamvara",
        }),
      shuffleOptions({
          question:
            "Damyanti identified the real Nala among the impersonating gods by observing their __________.",
          optionA: "Attire",
          optionB: "Hairstyles",
          optionC: "Behavior",
          correctAnswer: "Behavior",
        }),
      shuffleOptions({
          question:
            "The gods assumed Nala's form during the Swayamvara to __________ Damyanti.",
          optionA: "Challenge",
          optionB: "Deceive",
          optionC: "Impress",
          correctAnswer: "Deceive",
        }),
      shuffleOptions({
          question:
            "The Swayamvara was an ancient custom where the princess walked in front of the suitors with a __________ in her hands.",
          optionA: "Sword",
          optionB: "Shield",
          optionC: "Garland",
          correctAnswer: "Garland",
        }),
      shuffleOptions({
          question:
            "Damyanti chose Nala over the gods at the Swayamvara because she preferred __________ love over heavenly beings.",
          optionA: "Mortal",
          optionB: "Eternal",
          optionC: "Divine",
          correctAnswer: "Mortal",
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
            "Damyanti's father, Bhima, ruled in Berar during the ancient period.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Damyanti's beauty outshone all her handmaids.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Nala planned an expedition to Nishada before sending a message to Damyanti.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The swan that delivered Nala's message had shining wings in the splash of gold.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Damyanti identified the real Nala among the impersonating gods by their hairstyles.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The Swayamvara was a battle competition where suitors fought for Damyanti's hand.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Damyanti chose Nala over the gods because she found the gods unattractive.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The gods assumed Nala's form during the Swayamvara to impress Damyanti.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Damyanti preferred eternal love over mortal love.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The gods blessed Nala and Damyanti, stating they had come only to examine Damyanti's true love for Nala.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
