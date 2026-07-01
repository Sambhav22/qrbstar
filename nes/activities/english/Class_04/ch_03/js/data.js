export const chapter = "Chapter - 3: The King and His Hawk ";
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
        question: "What was Genghis Khan known for?",
        optionA: "Being a skilled diplomat",
        optionB: "Leading his army into China and Persia",
        optionC: "His contributions to art and culture",
        correctAnswer: "Leading his army into China and Persia",
     }),
      shuffleOptions({
        question: "Why did Genghis Khan and his friends ride into the woods?",
        optionA: "To find treasure",
        optionB: "For a day's sport and hunting",
        optionC: "To conquer more lands",
        correctAnswer: "For a day's sport and hunting",
     }),
      shuffleOptions({
        question:
          "What kind of animal sat on Genghis Khan's wrist during the hunting party?",
        optionA: "A snake",
        optionB: "A hawk",
        optionC: "A rabbit",
        correctAnswer: "A hawk",
     }),
      shuffleOptions({
        question: "What were the hawks trained to do in those days?",
        optionA: "Sing songs",
        optionB: "Fly high and look for prey",
        optionC: "Perform tricks",
        correctAnswer: "Fly high and look for prey",
     }),
      shuffleOptions({
        question:
          "Why did Genghis Khan take a longer road through a valley between two mountains?",
        optionA: "To enjoy the scenic view",
        optionB: "To avoid the hot sun",
        optionC: "To find a spring with clear water",
        correctAnswer: "To find a spring with clear water",
     }),
      shuffleOptions({
        question:
          "What prevented Genghis Khan from drinking from the spring initially?",
        optionA: "The cup was knocked from his hands by the wind",
        optionB: "The cup was too heavy",
        optionC: "He couldn't find the spring",
        correctAnswer: "The cup was knocked from his hands by the wind",
     }),
      shuffleOptions({
        question:
          "Who knocked the cup from Genghis Khan's hands as he tried to drink from the spring?",
        optionA: "His friend",
        optionB: "His horse",
        optionC: "His pet hawk",
        correctAnswer: "His pet hawk",
     }),
      shuffleOptions({
        question: "What did Genghis Khan do when he grew angry with the hawk?",
        optionA: "Threatened to throw the hawk into the pool",
        optionB: "Tried to catch the hawk",
        optionC: "Drew his sword",
        correctAnswer: "Drew his sword",
     }),
      shuffleOptions({
        question:
          "What did Genghis Khan discover in the pool of water at the top of the bank?",
        optionA: "Treasure",
        optionB: "A dead bird",
        optionC: "A huge, dead snake",
        correctAnswer: "A huge, dead snake",
     }),
      shuffleOptions({
        question:
          "How did Genghis Khan feel after realizing the hawk had saved his life?",
        optionA: "Angry",
        optionB: "Grateful",
        optionC: "Indifferent",
        correctAnswer: "Grateful",
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
          "Genghis Khan led his army into _______ and conquered many lands.",
        optionA: "Europe",
        optionB: "China",
        optionC: "Africa",
        correctAnswer: "China",
     }),
      shuffleOptions({
        question:
          "In every country, people said that since Alexander the Great there had been no king like _______.",
        optionA: "Napoleon",
        optionB: "Julius Caesar",
        optionC: "Genghis Khan",
        correctAnswer: "Genghis Khan",
     }),
      shuffleOptions({
        question:
          "Genghis Khan and his friends rode into the woods for a day of _______.",
        optionA: "fishing",
        optionB: "hunting",
        optionC: "exploring",
        correctAnswer: "hunting",
     }),
      shuffleOptions({
        question:
          "Genghis Khan had a _______ on his wrist during the hunting party.",
        optionA: "snake",
        optionB: "hawk",
        optionC: "rabbit",
        correctAnswer: "hawk",
     }),
      shuffleOptions({
        question: "Hawks in those days were trained to _______.",
        optionA: "sing songs",
        optionB: "perform tricks",
        optionC: "fly high and look for prey",
        correctAnswer: "fly high and look for prey",
     }),
      shuffleOptions({
        question:
          "Genghis Khan went by a longer road through a valley to find a _______ with clear water.",
        optionA: "river",
        optionB: "spring",
        optionC: "lake",
        correctAnswer: "spring",
     }),
      shuffleOptions({
        question:
          "The hawk prevented Genghis Khan from drinking from the spring by _______ the cup from his hands.",
        optionA: "knocking",
        optionB: "grabbing",
        optionC: "pushing",
        correctAnswer: "knocking",
     }),
      shuffleOptions({
        question:
          "Genghis Khan grew angry and drew his _______ when the hawk prevented him from drinking.",
        optionA: "sword",
        optionB: "bow",
        optionC: "spear",
        correctAnswer: "sword",
     }),
      shuffleOptions({
        question:
          "What did Genghis Khan find in the pool of water at the top of the bank?",
        optionA: "Treasure",
        optionB: "A dead bird",
        optionC: "A huge, dead _______.",
        correctAnswer: "snake",
     }),
      shuffleOptions({
        question:
          "Genghis Khan felt _______ after realizing the hawk had saved his life.",
        optionA: "angry",
        optionB: "grateful",
        optionC: "indifferent",
        correctAnswer: "grateful",
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
          "Is Genghis Khan known for leading his army into China and Persia?",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Did Genghis Khan's friends ride into the woods with him for a day's sport and hunting?",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Were hawks in those days trained to perform tricks?",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Did Genghis Khan go by a longer road through a valley to find a spring with clear water?",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Did the hawk prevent Genghis Khan from drinking from the spring by pushing the cup from his hands?",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Did Genghis Khan feel indifferent after realizing the hawk had saved his life?",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Did Genghis Khan find treasure in the pool of water at the top of the bank?",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Was Genghis Khan happy with the hawk for preventing him from drinking from the spring?",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Did Genghis Khan threaten to reward the hawk after drawing his sword?",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Did Genghis Khan learn a lesson about not doing things in anger after the incident with the hawk?",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
