export const chapter = "Chapter -06: A Chameleon";
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
            "What is the police superintendent Yelov wearing while walking across the market square?",
          optionA: "Blue shirt",
          optionB: "New overcoat",
          optionC: "Black suit",
          correctAnswer: "New overcoat",
        }),
      shuffleOptions({
          question:
            "Who is walking behind Yelov with a sieve full of confiscated gooseberries?",
          optionA: "Red-haired beggar",
          optionB: "Unidentified person",
          optionC: "Red-haired policeman",
          correctAnswer: "Red-haired policeman",
        }),
      shuffleOptions({
          question:
            "What does Yelov suggest doing to the dog that bit Hukin's finger?",
          optionA: "Send it to a shelter",
          optionB: "Strangle it without delay",
          optionC: "Fine the owner",
          correctAnswer: "Strangle it without delay",
        }),
      shuffleOptions({
          question: "How does Hukin claim he got injured by the dog?",
          optionA: "Scratched by a nail",
          optionB: "Bit on the foot",
          optionC: "Burned by a cigarette",
          correctAnswer: "Scratched by a nail",
        }),
      shuffleOptions({
          question:
            "What does Yelov instruct the policeman Yeldrin to do regarding the dog?",
          optionA: "Adopt it",
          optionB: "Draw up a report",
          optionC: "Ignore it",
          correctAnswer: "Draw up a report",
        }),
      shuffleOptions({
          question: "Who does the crowd speculate the dog belongs to?",
          optionA: "General Zhigalov",
          optionB: "Yelov",
          optionC: "Hukin",
          correctAnswer: "General Zhigalov",
        }),
      shuffleOptions({
          question: "How does Yelov find out the true owner of the dog?",
          optionA: "Asking the crowd",
          optionB: "Checking the dog's tag",
          optionC: "Sending Yeldrin to inquire at the General's bungalow",
          correctAnswer:
            "Sending Yeldrin to inquire at the General's bungalow",
        }),
      shuffleOptions({
          question: "Who is revealed to be the actual owner of the dog?",
          optionA: "Yelov",
          optionB: "Hukin",
          optionC: "General Zhigalov's brother",
          correctAnswer: "General Zhigalov's brother",
        }),
      shuffleOptions({
          question:
            "What does Yelov decide to do with the dog once its ownership is confirmed?",
          optionA: "Keep it as a pet",
          optionB: "Release it in the street",
          optionC: "Destroy it",
          correctAnswer: "Destroy it",
        }),
      shuffleOptions({
          question:
            "How does the crowd react when Prohor denies the dog belonging to the General?",
          optionA: "Applauds",
          optionB: "Laughs at Hukin",
          optionC: "Condemns Prohor",
          correctAnswer: "Laughs at Hukin",
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
            "The police superintendent Yelov is walking across the market square wearing a new overcoat and carrying a parcel under his ___________.",
          optionA: "Arm",
          optionB: "Hat",
          optionC: "Leg",
          correctAnswer: "Arm",
        }),
      shuffleOptions({
          question:
            "A red-haired policeman strides after Yelov with a sieve full of confiscated ___________ in his hands.",
          optionA: "Apples",
          optionB: "Gooseberries",
          optionC: "Oranges",
          correctAnswer: "Gooseberries",
        }),
      shuffleOptions({
          question:
            "Yelov looks in the direction of the sound and sees a dog, hopping on three legs and looking about her, run out of a ___________.",
          optionA: "Grocery store",
          optionB: "Timber yard",
          optionC: "Clothing store",
          correctAnswer: "Timber yard",
        }),
      shuffleOptions({
          question:
            "A man in a starched cotton shirt, with his waistcoat unbuttoned, is chasing the dog and cries: 'So you bite, you damned brute? Lads, don't let her go! Biting is prohibited nowadays! Hold him! ___________!'",
          optionA: "Hurry up",
          optionB: "Ah",
          optionC: "Stop",
          correctAnswer: "Ah",
        }),
      shuffleOptions({
          question:
            "Yelov recognizes the goldsmith Hukin, who claims the dog bit his ___________.",
          optionA: "Hand",
          optionB: "Foot",
          optionC: "Nose",
          correctAnswer: "Hand",
        }),
      shuffleOptions({
          question:
            "Yelov instructs the policeman Yeldrin to find out whose ___________ this is and draw up a report.",
          optionA: "Cat",
          optionB: "Dog",
          optionC: "Bird",
          correctAnswer: "Dog",
        }),
      shuffleOptions({
          question:
            "Yelov decides that the dog must be ___________ without delay because it's sure to be mad.",
          optionA: "Adopted",
          optionB: "Released",
          optionC: "Strangled",
          correctAnswer: "Strangled",
        }),
      shuffleOptions({
          question:
            "A person in the crowd suggests that the dog might belong to ___________.",
          optionA: "General Zhigalov",
          optionB: "Yelov",
          optionC: "Hukin",
          correctAnswer: "General Zhigalov",
        }),
      shuffleOptions({
          question:
            "Yelov wraps himself in his great coat and goes on his way across the ___________.",
          optionA: "Desert",
          optionB: "Square",
          optionC: "Forest",
          correctAnswer: "Square",
        }),
      shuffleOptions({
          question:
            "Prohor, the General's cook, denies that the dog belongs to the General but mentions it belongs to the General's ___________.",
          optionA: "Cousin",
          optionB: "Brother",
          optionC: "Neighbor",
          correctAnswer: "Brother",
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
            "Uncertainty is part and parcel of life, which can either make or break a person.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "A person cannot predict the sea of future uncertainties in his life, be it personal or professional.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "It is the mark of a critical mind to show prudence in the event of an uncertain scenario and react wisely.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Uncertainty is like a teacher that tests your ability to get through a tough situation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The crow flew all over the fields looking for water, failed, still did not lose hope, put in more effort, found a pitcher of water but with a little amount of water in it, gave thought to finding a solution to this problem, and succeeded.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Courage, determination, self-faith, and fear of failure play their part in the event of uncertainty.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Man is inclined to think negatively.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            'Lord Krishna says in the Geeta, "You have control over action and not the result, which lies with the Divine."',
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Life has been filled with uncertainties, and it is through these uncertainties that the world has progressed to the present level.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The Murphy's law states that if anything can possibly go wrong, it will go wrong.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
