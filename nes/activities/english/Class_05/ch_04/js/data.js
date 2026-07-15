export const chapter = "Chapter -4: The Real Culprit";
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
            "What did the barber initially plan to do with the little hunchback?",
          optionA: "Give him a haircut",
          optionB: "Take him home to entertain his wife with music",
          optionC: "Invite him for dinner",
          correctAnswer: "Take him home to entertain his wife with music",
        }),
      shuffleOptions({
          question:
            "What did the hunchback accidentally swallow that led to his death?",
          optionA: "Bone",
          optionB: "Water",
          optionC: "Tambour",
          correctAnswer: "Bone",
        }),
      shuffleOptions({
          question:
            "How did the barber and his wife try to avoid being accused of murder?",
          optionA: "They hid the body in the doctor's clinic",
          optionB: "They threw the body into the river",
          optionC: "They buried the body in their backyard",
          correctAnswer: "They hid the body in the doctor's clinic",
        }),
      shuffleOptions({
          question: "Why did the doctor think he had killed the hunchback?",
          optionA: "He accidentally poisoned him",
          optionB: "He tripped over the body and thought he caused the death",
          optionC: "He intentionally hit the hunchback on the head",
          correctAnswer:
            "He tripped over the body and thought he caused the death",
        }),
      shuffleOptions({
          question: "What was the oil man's occupation?",
          optionA: "Doctor",
          optionB: "Barber",
          optionC: "Merchant",
          correctAnswer: "Oil man",
        }),
      shuffleOptions({
          question: "Why did the oil man believe he had killed the hunchback?",
          optionA: "He accidentally hit him while trying to defend himself",
          optionB: "He thought the hunchback was a thief",
          optionC: "He intentionally attacked the hunchback",
          correctAnswer:
            "He accidentally hit him while trying to defend himself",
        }),
      shuffleOptions({
          question:
            "How did the rich merchant react when he encountered the dead body?",
          optionA: "He tried to help the hunchback",
          optionB: "He thought he was being attacked and hit the body",
          optionC: "He ran away in fear",
          correctAnswer: "He thought he was being attacked and hit the body",
        }),
      shuffleOptions({
          question: "What was the reason for the merchant's arrest?",
          optionA: "Drinking wine",
          optionB: "Robbery",
          optionC: "Murdering the hunchback",
          correctAnswer: "Murdering the hunchback",
        }),
      shuffleOptions({
          question:
            "Who finally revealed the truth about the hunchback's death in the court?",
          optionA: "The oil man",
          optionB: "The merchant",
          optionC: "The barber",
          correctAnswer: "The barber",
        }),
      shuffleOptions({
          question: "What punishment did the king order for the barber?",
          optionA: "Death penalty",
          optionB: "Imprisonment",
          optionC: "Five lashes on his bare back",
          correctAnswer: "Five lashes on his bare back",
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
            "Once in ancient times, there lived a barber with his ____. One day, a little hunchback came for a ____.",
          optionA: "chef",
          optionB: "wife",
          optionC: "haircut",
          correctAnswer: "haircut",
        }),
      shuffleOptions({
          question:
            "The barber was very impressed with the hunchback's ____. He thought, 'I should take him home to entertain my ____.",
          optionA: "dancing",
          optionB: "singing",
          optionC: "cooking",
          correctAnswer: "singing",
        }),
      shuffleOptions({
          question:
            "The hunchback swallowed a ____. It stuck in his throat, and he started ____.",
          optionA: "coin",
          optionB: "fishbone",
          optionC: "feather",
          correctAnswer: "fishbone",
        }),
      shuffleOptions({
          question:
            "To avoid being accused of murder, the barber and his wife hid the body in the ____.",
          optionA: "river",
          optionB: "doctor's clinic",
          optionC: "graveyard",
          correctAnswer: "doctor's clinic",
        }),
      shuffleOptions({
          question:
            "The oil man, thinking he had killed the hunchback, picked up the dead body and carried it to the ____.",
          optionA: "market",
          optionB: "river",
          optionC: "king's palace",
          correctAnswer: "market",
        }),
      shuffleOptions({
          question: "The merchant was arrested for ____ the hunchback.",
          optionA: "drinking wine",
          optionB: "stealing",
          optionC: "murdering",
          correctAnswer: "murdering",
        }),
      shuffleOptions({
          question:
            "The rich merchant, in intoxication, swayed left and right and hit the dead body, thinking it was a(n) ____.",
          optionA: "animal",
          optionB: "attacker",
          optionC: "friend",
          correctAnswer: "attacker",
        }),
      shuffleOptions({
          question:
            "The doctor saved himself from falling when he tripped over the dead body in the dark ____.",
          optionA: "alley",
          optionB: "staircase",
          optionC: "room",
          correctAnswer: "staircase",
        }),
      shuffleOptions({
          question:
            "The king ordered a punishment of ____ lashes on the barber's bare back for causing confusion.",
          optionA: "ten",
          optionB: "five",
          optionC: "two",
          correctAnswer: "five",
        }),
      shuffleOptions({
          question:
            "The barber revealed the truth about the hunchback's death, explaining that he died from ____. ",
          optionA: "poisoning",
          optionB: "choking",
          optionC: "drowning",
          correctAnswer: "choking",
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
            "The barber's wife cooked fish for dinner, and the hunchback choked to death.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The doctor tripped over the dead body and thought he had killed the hunchback.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The oil man, upon returning home, found the thief standing by the wall.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The rich merchant thought he was being attacked when he encountered the dead body.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Einstein's father wanted him to study law and become a lawyer.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The hunchback's body was successfully pushed into the neighbor's house through the chimney.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The doctor's wife suggested confessing to the murder to save him from punishment.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The oil man returned home at noon and found the dead body in his store-room.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The king ordered the merchant to be hanged by the neck for the murder of the hunchback.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The barber received a reward from the king for revealing the truth about the hunchback's death.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
