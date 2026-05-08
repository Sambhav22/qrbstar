export const chapter = "Chapter -20: The Mischievous Donkey  ";
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
        question: "What made Baljeet happy at the beginning of the story?",
        optionA: "A large order for cotton",
        optionB: "A large order for salt",
        optionC: "A large order for water",
        correctAnswer: "A large order for salt",
     }),
      shuffleOptions({
        question:
          "How many donkeys was Baljeet leading when he got the large order for salt?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        correctAnswer: "Three",
     }),
      shuffleOptions({
        question:
          "What obstacle did Baljeet and his donkeys face just outside the village?",
        optionA: "A dusty path",
        optionB: "A water stream without a bridge",
        optionC: "A heavy load of salt",
        correctAnswer: "A water stream without a bridge",
     }),
      shuffleOptions({
        question:
          "Why did one of Baljeet's donkeys become happy when it fell into the water?",
        optionA: "It enjoyed swimming",
        optionB: "The salt in its load dissolved, making it lighter",
        optionC: "Baljeet rewarded it for falling",
        correctAnswer: "The salt in its load dissolved, making it lighter",
     }),
      shuffleOptions({
        question:
          "What did Baljeet load the donkey with after it intentionally tripped for the second time?",
        optionA: "More salt",
        optionB: "Cotton",
        optionC: "Water",
        correctAnswer: "Cotton",
     }),
      shuffleOptions({
        question:
          "Why did the donkey intentionally trip into the water for the third time?",
        optionA: "It wanted to swim",
        optionB: "It thought the load would become lighter",
        optionC: "Baljeet forced it to do so",
        correctAnswer: "It thought the load would become lighter",
     }),
      shuffleOptions({
        question:
          "What happened when the donkey tripped into the water for the third time with a load of cotton?",
        optionA: "The load became lighter",
        optionB: "The load became heavier",
        optionC: "The load remained the same",
        correctAnswer: "The load became heavier",
     }),
      shuffleOptions({
        question:
          "How did Baljeet react when the donkey fell into the water for the third time?",
        optionA: "He laughed",
        optionB: "He helped the donkey immediately",
        optionC: "He waited before helping and then struck the donkey",
        correctAnswer: "He waited before helping and then struck the donkey",
     }),
      shuffleOptions({
        question:
          "What did the donkey realize after the third fall into the water?",
        optionA: "Cotton is lighter than salt",
        optionB: "People can be fooled repeatedly",
        optionC: "The same trick doesn't work again and again",
        correctAnswer: "The same trick doesn't work again and again",
     }),
      shuffleOptions({
        question:
          "How did Baljeet teach the donkey a lesson after the third fall?",
        optionA: "He gave the donkey a reward",
        optionB: "He loaded the donkey with more salt",
        optionC: "He struck the donkey with a cane",
        correctAnswer: "He struck the donkey with a cane",
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
          "Baljeet was happy because he had received a large order for ________ from the nearby village.",
        optionA: "Water",
        optionB: "Cotton",
        optionC: "Salt",
        correctAnswer: "Salt",
     }),
      shuffleOptions({
        question: "Baljeet was leading a group of ________ donkeys.",
        optionA: "Two",
        optionB: "Four",
        optionC: "Three",
        correctAnswer: "Three",
     }),
      shuffleOptions({
        question:
          "There was no bridge over the water stream, so Baljeet guided his donkeys through knee-deep ________.",
        optionA: "Mud",
        optionB: "Water",
        optionC: "Sand",
        correctAnswer: "Water",
     }),
      shuffleOptions({
        question:
          "When one of the donkeys tripped and fell, a lot of ________ dissolved in the water.",
        optionA: "Cotton",
        optionB: "Salt",
        optionC: "Mud",
        correctAnswer: "Salt",
     }),
      shuffleOptions({
        question:
          "Baljeet loaded the donkey with ________ after it intentionally tripped for the second time.",
        optionA: "Water",
        optionB: "Cotton",
        optionC: "Mud",
        correctAnswer: "Cotton",
     }),
      shuffleOptions({
        question:
          "The donkey knowingly tripped into the water to make its load ________.",
        optionA: "Heavier",
        optionB: "Lighter",
        optionC: "Same",
        correctAnswer: "Lighter",
     }),
      shuffleOptions({
        question:
          "Baljeet saw through the donkey's trick and decided to teach it a lesson by loading it with ________.",
        optionA: "Mud",
        optionB: "Water",
        optionC: "Cotton",
        correctAnswer: "Cotton",
     }),
      shuffleOptions({
        question:
          "When the donkey pretended to trip into the water for the third time, the cotton soaked a lot of ________.",
        optionA: "Mud",
        optionB: "Water",
        optionC: "Sand",
        correctAnswer: "Water",
     }),
      shuffleOptions({
        question:
          "The donkey found it hard to walk when Baljeet helped it to its feet because the load of ________ was unbearable.",
        optionA: "Cotton",
        optionB: "Water",
        optionC: "Mud",
        correctAnswer: "Cotton",
     }),
      shuffleOptions({
        question:
          "The donkey realized that you could not fool people with the same trick again and again, as Baljeet was striking it with a ________.",
        optionA: "Stick",
        optionB: "Cane",
        optionC: "Rope",
        correctAnswer: "Cane",
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
          "Baljeet received a large order for cotton from the nearby village.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Baljeet was leading a group of four donkeys.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "There was a bridge over the water stream outside the village.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "When one of the donkeys tripped and fell, a lot of cotton dissolved in the water.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Baljeet loaded the donkey with water after it intentionally tripped for the second time.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The donkey knowingly tripped into the water to make its load heavier.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Baljeet saw through the donkey's trick and decided to teach it a lesson by loading it with mud.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "When the donkey pretended to trip into the water for the third time, the load became lighter.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The donkey found it easy to walk when Baljeet helped it to its feet after loading it with water.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The donkey realized that you could fool people with the same trick again and again.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
