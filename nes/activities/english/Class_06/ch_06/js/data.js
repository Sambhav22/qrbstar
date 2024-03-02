export const chapter = "Chapter - 6: Uncertainty and Depravit' ";
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
        question: "What is the role of uncertainty in a person's life?",
        optionA: "It always has a negative impact.",
        optionB: "It tests one's ability to overcome challenges.",
        optionC: "It can be completely avoided.",
        correctAnswer: "It tests one's ability to overcome challenges.",
     }),
      shuffleOptions({
        question:
          "According to the text, what story from childhood serves as an inspiring example of dealing with uncertainty?",
        optionA: "The story of a lost treasure.",
        optionB: "The story of the hungry wolf.",
        optionC: "The story of the thirsty crow.",
        correctAnswer: "The story of the thirsty crow.",
     }),
      shuffleOptions({
        question:
          "What is the key feature of people who succeed in life while overcoming uncertainties?",
        optionA: "Fear of failure",
        optionB: "Determination to achieve a goal",
        optionC: "Self-doubt",
        correctAnswer: "Determination to achieve a goal.",
     }),
      shuffleOptions({
        question:
          "According to the text, what does faith provide in the face of uncertainties?",
        optionA: "Fear",
        optionB: "Courage",
        optionC: "Self-faith",
        correctAnswer: "Courage",
     }),
      shuffleOptions({
        question:
          "What keeps a person inactive during a period of uncertainty?",
        optionA: "Fear of failure",
        optionB: "Lack of self-faith",
        optionC: "Overconfidence",
        correctAnswer: "Fear of failure",
     }),
      shuffleOptions({
        question:
          "What is the lesson in tackling uncertain situations mentioned in the text?",
        optionA: "It guarantees success.",
        optionB: "It is always a negative experience.",
        optionC: "It provides a learning opportunity.",
        correctAnswer: "It provides a learning opportunity.",
     }),
      shuffleOptions({
        question:
          "According to Ratan Tata, what is his approach to decision-making?",
        optionA: "He always makes the right decision from the start.",
        optionB: "He takes decisions and then makes them right.",
        optionC: "He avoids making decisions.",
        correctAnswer: "He takes decisions and then makes them right.",
     }),
      shuffleOptions({
        question: "What is depravity in the context of facing uncertainties?",
        optionA: "A positive way to deal with challenges.",
        optionB: "A negative way to avoid challenges.",
        optionC: "A state of perfect mental balance.",
        correctAnswer: "A negative way to avoid challenges.",
     }),
      shuffleOptions({
        question:
          "How does the text describe the role of uncertainties in the progress of the world and human creativity?",
        optionA: "Uncertainties hinder progress and creativity.",
        optionB: "Uncertainties are irrelevant in shaping creativity.",
        optionC: "Uncertainties shape creativity, imagination, and thinking.",
        correctAnswer:
          "Uncertainties shape creativity, imagination, and thinking.",
     }),
      shuffleOptions({
        question:
          "According to Lord Krishna, what aspect of actions does an individual have control over?",
        optionA: "The result",
        optionB: "The action itself",
        optionC: "Both the action and the result",
        correctAnswer: "The action itself",
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
          "Fill in the blank: Uncertainty is a part and parcel of life which can either make or break a person. It tests a person's ability to ____________.",
        options: [
          "predict the future",
          "develop critical thinking and skills",
          "avoid uncertainties",
        ],
        correctAnswer: "develop critical thinking and skills",
     }),
      shuffleOptions({
        question:
          "In the story of the 'thirsty' crow, the crow succeeded by putting in more effort and finding a pitcher of water with a ____________ amount of water in it.",
        options: ["abundant", "meager", "excessive"],
        correctAnswer: "meager",
     }),
      shuffleOptions({
        question:
          "The four factors that play their part in the event of uncertainty are courage, determination, self-faith, and fear of ____________.",
        options: ["triumph", "failure", "success"],
        correctAnswer: "failure",
     }),
      shuffleOptions({
        question:
          "According to the text, a person needs to overcome the fear of failure and learn to take ____________.",
        options: ["no action", "unnecessary risks", "action"],
        correctAnswer: "action",
     }),
      shuffleOptions({
        question:
          "Uncertainty implies the suspense that the future holds, making it difficult to speculate whether everything will occur as planned or calculated; sometimes, things go ____________.",
        options: ["right", "left", "wrong"],
        correctAnswer: "wrong",
     }),
      shuffleOptions({
        question:
          "Ratan Tata believes in taking decisions and then making them ____________.",
        options: ["perfect", "right", "logical"],
        correctAnswer: "right",
     }),
      shuffleOptions({
        question:
          "Overcoming the fear of failure guides a person to allow everything to fall in its correct place and at the appropriate time, leading to ____________.",
        options: ["chaos", "stagnation", "success"],
        correctAnswer: "success",
     }),
      shuffleOptions({
        question:
          "A weak mind is overwhelmed by uncertainties and chooses not to face them squarely; this situation is called ____________.",
        options: ["resilience", "avoidance", "depravity"],
        correctAnswer: "depravity",
     }),
      shuffleOptions({
        question:
          "Starting from the earliest times, life has been filled with uncertainties, and it is through these uncertainties that the world has progressed to the present level. The cell, the first life form, overcame uncertainty to bloom the world into the most diverse creatures. This demonstrates that uncertainties can lead to ____________.",
        options: ["stagnation", "diversity", "predictability"],
        correctAnswer: "diversity",
     }),
      shuffleOptions({
        question:
          "According to Lord Krishna, individuals have control over ____________, while the result lies with the Divine.",
        options: [
          "both the action and the result",
          "the action itself",
          "neither the action nor the result",
        ],
        correctAnswer: "the action itself",
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
          "The text suggests that uncertainty can either make or break a person.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "In the story of the 'thirsty' crow, the crow gave up after failing to find water.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Fear of failure is an attribute that helps individuals succeed during uncertainties.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The text emphasizes that it's essential to overcome the fear of failure to achieve success.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Uncertainty implies a guaranteed outcome, making life predictable.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "According to Ratan Tata, taking decisions without analyzing the situation is the best approach.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "A weak mind, overwhelmed by uncertainties, always confronts them head-on.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Uncertainties have played a significant role in shaping the diversity of the world.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The text suggests that all generations have faced challenges of a similar kind.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "According to Lord Krishna, individuals have control over both actions and results.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
