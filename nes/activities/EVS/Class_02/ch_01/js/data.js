export const chapter = "Chapter - 1: Clean and Green India";
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
            "What is the date mentioned as World Environment Day in the text?",
          optionA: "5th June",
          optionB: "15th August",
          optionC: "1st January",
          correctAnswer: "5th June",
         }),
      shuffleOptions({
          question:
            "According to the text, what steps should be taken to make the country clean?",
          optionA: "Spit on the road",
          optionB: "Throw waste on the road",
          optionC: "Do not defecate in the open",
          correctAnswer: "Do not defecate in the open",
         }),
      shuffleOptions({
          question:
            "What activity is suggested in the community park on World Environment Day?",
          optionA: "Playing sports",
          optionB: "Planting more trees",
          optionC: "Cooking together",
          correctAnswer: "Planting more trees",
         }),
      shuffleOptions({
          question:
            "What is described as the best gift to the country in the text?",
          optionA: "Throwing waste on the road",
          optionB: "Defecating in the open",
          optionC: "Planting more trees",
          correctAnswer: "Planting more trees",
         }),
      shuffleOptions({
          question:
            "Which day is mentioned for the initiative to make India green by planting trees?",
          optionA: "Independence Day",
          optionB: "World Environment Day",
          optionC: "Republic Day",
          correctAnswer: "World Environment Day",
         }),
      shuffleOptions({
          question:
            "What is the importance of a clean and green India mentioned in the text?",
          optionA: "No importance mentioned",
          optionB: "Beneficial to coming generations and a healthy environment",
          optionC: "Harmful to the environment",
          correctAnswer:
            "Beneficial to coming generations and a healthy environment",
         }),
      shuffleOptions({
          question:
            "According to the text, what should not be done on the river bank?",
          optionA: "Wash clothes",
          optionB: "Throw waste",
          optionC: "Defecate in the open",
          correctAnswer: "Wash clothes",
         }),
      shuffleOptions({
          question:
            "What does the text encourage people to do in the community park?",
          optionA: "Play loud music",
          optionB: "Plant more trees",
          optionC: "Throw garbage",
          correctAnswer: "Plant more trees",
         }),
      shuffleOptions({
          question: "What is stated as the duty of the people in the text?",
          optionA: "Make the country dirty",
          optionB: "Make the country clean and green",
          optionC: "Ignore the environment",
          correctAnswer: "Make the country clean and green",
         }),
      shuffleOptions({
          question:
            "Which term is used to describe the kind of India the text envisions?",
          optionA: "Crowded",
          optionB: "Clean and green",
          optionC: "Industrial",
          correctAnswer: "Clean and green",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "It is our duty to make our country ________ and ________.",
          optionA: "Dirty and polluted",
          optionB: "Clean and green",
          optionC: "Crowded and noisy",
          correctAnswer: "Clean and green",
         }),
      shuffleOptions({
          question:
            "To make our country clean, we should not ________ on the road.",
          optionA: "Spit",
          optionB: "Play",
          optionC: "Walk",
          correctAnswer: "Spit",
         }),
      shuffleOptions({
          question: "Do not wash clothes on the ________ bank.",
          optionA: "Road",
          optionB: "River",
          optionC: "Park",
          correctAnswer: "River",
         }),
      shuffleOptions({
          question: "Today is ________ June, the World Environment Day.",
          optionA: "1st",
          optionB: "5th",
          optionC: "10th",
          correctAnswer: "5th",
         }),
      shuffleOptions({
          question:
            "To make India green, we are planting more and more ________ in our community park.",
          optionA: "Flowers",
          optionB: "Vegetables",
          optionC: "Trees",
          correctAnswer: "Trees",
         }),
      shuffleOptions({
          question:
            "Clean and green India will be beneficial to our ________ generations.",
          optionA: "Past",
          optionB: "Present",
          optionC: "Coming",
          correctAnswer: "Coming",
         }),
      shuffleOptions({
          question: "Hey Friends! Let's go to our ________ park.",
          optionA: "Shopping",
          optionB: "Community",
          optionC: "Theme",
          correctAnswer: "Community",
         }),
      shuffleOptions({
          question: "Do not throw ________ on the road.",
          optionA: "Gifts",
          optionB: "Waste",
          optionC: "Flowers",
          correctAnswer: "Waste",
         }),
      shuffleOptions({
          question: "Do not defecate in the ________.",
          optionA: "Open",
          optionB: "Closed",
          optionC: "Park",
          correctAnswer: "Open",
         }),
      shuffleOptions({
          question:
            "The best gift to our country is planting more and more ________.",
          optionA: "Buildings",
          optionB: "Cars",
          optionC: "Trees",
          correctAnswer: "Trees",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "India is a beautiful country.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Washing clothes on the river bank is a recommended practice.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "The World Environment Day is celebrated on 5th June.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Defecating in the open is encouraged for a cleaner environment.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Planting more trees is considered the best gift to the country.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "A clean and green India is not beneficial for future generations.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Throwing waste on the road is an acceptable practice.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Playing loud music is encouraged in the community park.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Making the country dirty is our duty.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Clean and green India is beneficial only for the present generation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
