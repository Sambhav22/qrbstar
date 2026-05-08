export const chapter = "Chapter -19: Two Wheels";
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
            "What did the author use to ride on that never used to wobble like their bike?",
          optionA: "Stabilisers",
          optionB: "Three Wheels",
          optionC: "Four Wheels",
          correctAnswer: "Three Wheels",
        }),
      shuffleOptions({
          question: "How did stabilisers make the bike easier to ride?",
          optionA: "By making it wobble",
          optionB: "By preventing it from falling over",
          optionC: "By adding an extra wheel",
          correctAnswer: "By preventing it from falling over",
        }),
      shuffleOptions({
          question:
            "What did the author enjoy doing on their trike with three wheels?",
          optionA: "Tinkling on the bell",
          optionB: "Riding on two wheels",
          optionC: "Looking at photographs",
          correctAnswer: "Looking at photographs",
        }),
      shuffleOptions({
          question:
            "What is mentioned as not quite a bike, not quite a trike, with four wheels?",
          optionA: "Stabilisers",
          optionB: "The author's bike",
          optionC: "Something else",
          correctAnswer: "Something else",
        }),
      shuffleOptions({
          question: "What happened on the day the stabilisers were taken off?",
          optionA: "The bike fell over",
          optionB: "The author came off the bike",
          optionC: "The bike started wobbling",
          correctAnswer: "The author came off the bike",
        }),
      shuffleOptions({
          question:
            "What does the author enjoy doing now on the bike with two wheels?",
          optionA: "Riding on three wheels",
          optionB: "Tinkling on the bell",
          optionC: "Looking at old photographs",
          correctAnswer: "Tinkling on the bell",
        }),
      shuffleOptions({
          question:
            "What made the bike with two wheels different from the trike?",
          optionA: "It had stabilisers",
          optionB: "It had fewer wheels",
          optionC: "It wobbled less",
          correctAnswer: "It had fewer wheels",
        }),
      shuffleOptions({
          question: "What is the author's current preference for riding?",
          optionA: "On three wheels",
          optionB: "On four wheels",
          optionC: "On two wheels",
          correctAnswer: "On two wheels",
        }),
      shuffleOptions({
          question: "What used to make the bike wobble less?",
          optionA: "Three wheels",
          optionB: "Four wheels",
          optionC: "Stabilisers",
          correctAnswer: "Stabilisers",
        }),
      shuffleOptions({
          question:
            "What did the author experience when the stabilisers were taken off?",
          optionA: "The bike became stable",
          optionB: "The bike started wobbling",
          optionC: "The author came off the bike",
          correctAnswer: "The author came off the bike",
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
          question: "I used to like riding my __________ with three wheels.",
          optionA: "Bike",
          optionB: "Scooter",
          optionC: "Trike",
          correctAnswer: "Trike",
        }),
      shuffleOptions({
          question: "Stabilisers made my bike easier to __________.",
          optionA: "Drive",
          optionB: "Ride",
          optionC: "Walk",
          correctAnswer: "Ride",
        }),
      shuffleOptions({
          question:
            "Not quite a bike, not quite a trike, with __________ wheels.",
          optionA: "Two",
          optionB: "Three",
          optionC: "Four",
          correctAnswer: "Four",
        }),
      shuffleOptions({
          question: "On the day we took them off, I __________ as well.",
          optionA: "Came off",
          optionB: "Fell off",
          optionC: "Stayed on",
          correctAnswer: "Came off",
        }),
      shuffleOptions({
          question:
            "But now it's great to ride around and __________ on my bell.",
          optionA: "Ring",
          optionB: "Sing",
          optionC: "Dance",
          correctAnswer: "Ring",
        }),
      shuffleOptions({
          question: "That's what I like riding my bike with __________ wheels.",
          optionA: "One",
          optionB: "Two",
          optionC: "Three",
          correctAnswer: "Two",
        }),
      shuffleOptions({
          question:
            "Stabilisers made my bike easier to ride by preventing it from __________ over.",
          optionA: "Tipping",
          optionB: "Rolling",
          optionC: "Sliding",
          correctAnswer: "Tipping",
        }),
      shuffleOptions({
          question: "Riding on __________ wheels!",
          optionA: "Three",
          optionB: "Four",
          optionC: "Five",
          correctAnswer: "Three",
        }),
      shuffleOptions({
          question: "I like to look at photographs of me on my old __________.",
          optionA: "Car",
          optionB: "Trike",
          optionC: "Skateboard",
          correctAnswer: "Trike",
        }),
      shuffleOptions({
          question: "That's what I like riding my bike with __________.",
          optionA: "One",
          optionB: "Two",
          optionC: "Three",
          correctAnswer: "Two",
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
          question: "The author's old trike had four wheels.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Stabilisers made the author's bike wobble less.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Riding on three wheels was the author's preference.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "The bike, with four wheels, was exactly like a trike.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "On the day the stabilisers were removed, the author stayed on the bike.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The author enjoys tinkling on a horn while riding a bike with two wheels.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Stabilisers made the bike wobble less by preventing it from tipping over.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "The author currently prefers riding on three wheels.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The stabilisers were removed on the day the author came off the bike.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "The author used to ride a scooter with three wheels.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
