export const chapter = "Chapter - 4: Byomkesh Bakshi ";
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
        question: "Who is the author of the Byomkesh Bakshi stories?",
        optionA: "William Shakespeare",
        optionB: "Arthur Conan Doyle",
        optionC: "Sharadindu Bandyopadhyay",
        correctAnswer: "Sharadindu Bandyopadhyay",
     }),
      shuffleOptions({
        question: "Byomkesh Bakshi is often described as a:",
        optionA: "London detective",
        optionB: "Indian Sherlock Holmes",
        optionC: "Hercule Poirot-inspired character",
        correctAnswer: "Indian Sherlock Holmes",
     }),
      shuffleOptions({
        question: "What is Byomkesh Bakshi's preferred title for himself?",
        optionA: "Detective Extraordinaire",
        optionB: "Satyanveshi",
        optionC: "Sherlock of Kolkata",
        correctAnswer: "Satyanveshi",
     }),
      shuffleOptions({
        question:
          "Who played the role of Byomkesh Bakshi in the 1967 film 'Chiriyakhana'?",
        optionA: "Satyajit Ray",
        optionB: "Uttam Kumar",
        optionC: "Manju Dey",
        correctAnswer: "Uttam Kumar",
     }),
      shuffleOptions({
        question: "Which of the following is Byomkesh Bakshi's wife's name?",
        optionA: "Satyaboti",
        optionB: "Rajit Kapoor",
        optionC: "Sukanya Kulkarni",
        correctAnswer: "Satyaboti",
     }),
      shuffleOptions({
        question:
          "In which year did the first serial featuring Byomkesh Bakshi air on Doordarshan?",
        optionA: "1993",
        optionB: "1974",
        optionC: "2004",
        correctAnswer: "1993",
     }),
      shuffleOptions({
        question:
          "Which of Byomkesh Bakshi's methods is described as using logic or reason to arrive at a conclusion?",
        optionA: "Deductive reasoning",
        optionB: "Empathetic reasoning",
        optionC: "Inductive reasoning",
        correctAnswer: "Deductive reasoning",
     }),
      shuffleOptions({
        question:
          "How many novels of Byomkesh Bakshi were adapted for the Sunday Suspense series of 98.3 Radio Mirchi (Kolkata)?",
        optionA: "Five",
        optionB: "Seven",
        optionC: "Ten",
        correctAnswer: "Seven",
     }),
      shuffleOptions({
        question:
          "Which US TV series referenced Byomkesh Bakshi as the 'Indian Sherlock Holmes'?",
        optionA: "Friends",
        optionB: "The Big Bang Theory",
        optionC: "Breaking Bad",
        correctAnswer: "The Big Bang Theory",
     }),
      shuffleOptions({
        question:
          "What is the title of the 2015 film that starred Sushant Singh Rajput as Byomkesh Bakshi?",
        optionA: "Detective Byomkesh Bakshi",
        optionB: "Chiriyakhana",
        optionC: "Shajarur Kanta",
        correctAnswer: "Detective Byomkesh Bakshi",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question:
          "Byomkesh Bakshi is a popular fictional character created by ______________.",
        options: [
          "William Shakespeare",
          "Agatha Christie",
          "Sharadindu Bandyopadhyay",
        ],
        correctAnswer: "Sharadindu Bandyopadhyay",
     }),
      shuffleOptions({
        question:
          "The first Byomkesh Bakshi story was titled '__________' and was written in ____________.",
        options: [
          "Satyanveshi, 1932",
          "Sherlock Holmes, 1892",
          "Chiriyakhana, 1967",
        ],
        correctAnswer: "Satyanveshi, 1932",
     }),
      shuffleOptions({
        question:
          "Byomkesh Bakshi's preferred title for himself is '____________.'",
        options: ["Detective Extraordinaire", "Satyanveshi", "Hercule Poirot"],
        correctAnswer: "Satyanveshi",
     }),
      shuffleOptions({
        question:
          "The 1967 film 'Chiriyakhana' featured ____________ in the role of Byomkesh Bakshi.",
        options: ["Satyajit Ray", "Uttam Kumar", "Manju Dey"],
        correctAnswer: "Uttam Kumar",
     }),
      shuffleOptions({
        question: "Byomkesh Bakshi's wife is named ____________.",
        options: ["Satyaboti", "Rajit Kapoor", "Sukanya Kulkarni"],
        correctAnswer: "Satyaboti",
     }),
      shuffleOptions({
        question:
          "The first serial featuring Byomkesh Bakshi aired on Doordarshan in the year ____________.",
        options: ["1993", "1974", "2004"],
        correctAnswer: "1993",
     }),
      shuffleOptions({
        question:
          "Byomkesh Bakshi often uses ____________ to arrive at conclusions in his cases.",
        options: [
          "Inductive reasoning",
          "Deductive reasoning",
          "Empathetic reasoning",
        ],
        correctAnswer: "Deductive reasoning",
     }),
      shuffleOptions({
        question:
          "__________ of Byomkesh Bakshi's novels were adapted for the Sunday Suspense series on 98.3 Radio Mirchi (Kolkata).",
        options: ["Five", "Seven", "Ten"],
        correctAnswer: "Seven",
     }),
      shuffleOptions({
        question:
          "The US TV series 'The Big Bang Theory' referenced Byomkesh Bakshi as the 'Indian ____________.'",
        options: [
          "Sherlock Holmes",
          "Hercule Poirot",
          "Detective Extraordinaire",
        ],
        correctAnswer: "Sherlock Holmes",
     }),
      shuffleOptions({
        question:
          "In the 2015 film 'Detective Byomkesh Bakshi,' the character was portrayed by ____________.",
        options: ["Satyajit Ray", "Uttam Kumar", "Sushant Singh Rajput"],
        correctAnswer: "Sushant Singh Rajput",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question:
          "The little hunchback played a musical instrument and sang sweetly.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The barber's wife cooked fish for dinner when the hunchback came to their home.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The hunchback died because he swallowed a fishbone.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The doctor and his wife planned to leave the dead body at a dentist's clinic.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The oil man thought the body he found was a thief and hit it with a stout staff.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The merchant hit the dead body because he thought it was a wild animal.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The doctor and his wife successfully moved the dead body to their neighbor's roof.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The oil man placed the dead body near a police station.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The animals in the story wanted to keep the king from hunting them.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The king ordered the barber to be hanged for the hunchback's death.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
