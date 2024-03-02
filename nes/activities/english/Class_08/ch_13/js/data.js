export const chapter = "Chapter - 13: The Tail,Boat and Ant ";
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
          "What did Swaminathan find meaningless at school when he wandered around?",
        optionA: "Playing games",
        optionB: "Shaping models with wet clay",
        optionC: "Learning geography",
        correctAnswer: "B",
     }),
      shuffleOptions({
        question:
          "Which class was Swaminathan interested in joining when he considered going upstairs?",
        optionA: "Infant Standards",
        optionB: "Second and third forms",
        optionC: "Senior classes",
        correctAnswer: "C",
     }),
      shuffleOptions({
        question:
          "What term did Somu use to refer to Swaminathan that upset him?",
        optionA: "Smarty-pants",
        optionB: "Rajam's Tail",
        optionC: "Teacher's Pet",
        correctAnswer: "B",
     }),
      shuffleOptions({
        question:
          "What did Swaminathan make out of a sheet of paper to play with?",
        optionA: "A kite",
        optionB: "A boat",
        optionC: "A plane",
        correctAnswer: "B",
     }),
      shuffleOptions({
        question: "What did Swaminathan place in the boat he made?",
        optionA: "A small fish",
        optionB: "A small ant",
        optionC: "A feather",
        correctAnswer: "B",
     }),
      shuffleOptions({
        question:
          "What did Swaminathan do when he thought his boat was approaching a dangerous area?",
        optionA: "Pulled the boat out of the water",
        optionB: "Pushed the boat with a stick",
        optionC: "Watched in rapture",
        correctAnswer: "C",
     }),
      shuffleOptions({
        question:
          "What saved the boat from being drawn to the bottom of the circling eddies?",
        optionA: "Swaminathan's quick thinking",
        optionB: "A strong gust of wind",
        optionC: "A fresh supply of water from the kitchen",
        correctAnswer: "C",
     }),
      shuffleOptions({
        question: "How did the boat ultimately meet its end?",
        optionA: "It got stuck under a thick dry leaf",
        optionB: "Swaminathan accidentally crushed it",
        optionC: "It was carried away by a strong current",
        correctAnswer: "A",
     }),
      shuffleOptions({
        question: "What did Swaminathan do when the boat and ant were wrecked?",
        optionA: "Ran to call for help",
        optionB: "Tried to save the boat",
        optionC: "Dropped a pinch of earth into the gutter",
        correctAnswer: "C",
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
          "Swaminathan felt vastly superior and old when he wandered among the children of the Infant Standards who seemed __________.",
        options: [
          "incredibly intelligent",
          "ridiculously tiny",
          "wonderfully creative",
        ],
        correctAnswer: "ridiculously tiny",
     }),
      shuffleOptions({
        question:
          "Swaminathan paused at the foot of the staircase leading to the __________ classes, which he eagerly looked forward to joining.",
        options: ["Infant Standards", "senior", "arithmetic"],
        correctAnswer: "senior",
     }),
      shuffleOptions({
        question:
          "Somu said, 'There are people who can be very efficient as tails,' to which the Pea added, 'A tail is a long thing that attaches itself to an ass or a dog.' Swaminathan was offended by the reference and blushed with embarrassment, as if he were being called an __________.",
        options: ["animal lover", "outsider", "intellect"],
        correctAnswer: "outsider",
     }),
      shuffleOptions({
        question:
          "Swaminathan, after a shock from Somu, found himself walking home alone with a troubled __________.",
        options: ["heart", "smile", "book"],
        correctAnswer: "heart",
     }),
      shuffleOptions({
        question:
          "Swaminathan's boat made a beautiful swerve to the right and avoided destruction in the dangerous area, thanks to a fresh supply of water from the __________.",
        options: ["kitchen", "playground", "library"],
        correctAnswer: "kitchen",
     }),
      shuffleOptions({
        question:
          "The boat rushed on at a fearful speed, and Swaminathan felt that it was going to __________.",
        options: ["turn left", "go faster", "turn turtle"],
        correctAnswer: "turn turtle",
     }),
      shuffleOptions({
        question:
          "The boat resumed a normal speed, but when it passed under a thick dry leaf, it was __________.",
        options: ["saved", "steered manually", "upset"],
        correctAnswer: "upset",
     }),
      shuffleOptions({
        question:
          "Swaminathan had an impulse to plunge his hand in and pick up a small piece of __________, but he let it go.",
        options: ["gold", "plastic", "tin"],
        correctAnswer: "tin",
     }),
      shuffleOptions({
        question:
          "Swaminathan's boat and the ant it carried were wrecked beyond __________.",
        options: ["recognition", "hope", "recovery"],
        correctAnswer: "recovery",
     }),
      shuffleOptions({
        question:
          "Swaminathan watched a dark volume of water rushing along in the gutter and observed odd pieces of paper, leaves, and sticks floating by. He said that a brick must either move along or stand aside without interfering with the __________.",
        options: ["boat's journey", "traffic", "ants"],
        correctAnswer: "traffic",
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
          "Swaminathan found himself alone when the geography master was absent.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Swaminathan felt vastly inferior when he saw the children of the Infant Standards.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Swaminathan wandered along the corridor of the Senior Standards.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Swaminathan wanted to inspect the senior classes but was afraid of the headmaster.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Swaminathan's friends welcomed him with excitement when he joined them.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Somu made a friendly remark about Swaminathan's interest in joining their game.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Swaminathan enjoyed his English class and actively participated in the discussion.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Swaminathan's boat was saved from destruction by a gust of wind.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Swaminathan dropped a pinch of earth into the gutter to save the ant.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The brick that obstructed the progress of the tin in the gutter was easily removed by Swaminathan.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
