export const chapter = "Chapter - 4: The Naughty Nikie";
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
        question: "What did Nikie do after eating his fill?",
        optionA: "He went to sleep.",
        optionB: "He went out to play.",
        optionC: "He stayed in his hole.",
        correctAnswer: "He went out to play.",
     }),
      shuffleOptions({
        question:
          "What did Nikie's mother warn him about before he went out to play?",
        optionA: "The weather conditions.",
        optionB: "Dangerous animals.",
        optionC: "His homework.",
        correctAnswer: "Dangerous animals.",
     }),
      shuffleOptions({
        question:
          "What did Nikie do when he found the lion sleeping under the tree?",
        optionA: "He ran away in fear.",
        optionB: "He started to jump on the lion.",
        optionC: "He called for his mother.",
        correctAnswer: "He started to jump on the lion.",
     }),
      shuffleOptions({
        question: "How did Nikie feel when he was jumping on the lion?",
        optionA: "Annoyed.",
        optionB: "Afraid.",
        optionC: "Joyful.",
        correctAnswer: "Joyful.",
     }),
      shuffleOptions({
        question: "What made Nikie think the lion might be dead?",
        optionA: "The lion's snoring.",
        optionB: "The lion's cold body.",
        optionC: "The lion's lack of reaction to his jumping.",
        correctAnswer: "The lion's lack of reaction to his jumping.",
     }),
      shuffleOptions({
        question: "Why did the lion catch Nikie in his paw?",
        optionA: "Nikie was trying to steal from the lion.",
        optionB: "Nikie was disturbing his sleep.",
        optionC: "Nikie was trying to befriend the lion.",
        correctAnswer: "Nikie was disturbing his sleep.",
     }),
      shuffleOptions({
        question: "How did Nikie persuade the lion to release him?",
        optionA: "He promised to bring him food.",
        optionB: "He bit the lion on the nose.",
        optionC: "He apologized and offered future help.",
        correctAnswer: "He apologized and offered future help.",
     }),
      shuffleOptions({
        question:
          "How did the lion react to Nikie's offer of help in the future?",
        optionA: "He accepted it with gratitude.",
        optionB: "He refused and walked away.",
        optionC: "He laughed and let Nikie go.",
        correctAnswer: "He laughed and let Nikie go.",
     }),
      shuffleOptions({
        question: "What happened to the lion a few days later?",
        optionA: "He became the king of the jungle.",
        optionB: "He got caught in a net.",
        optionC: "He found a new friend.",
        correctAnswer: "He got caught in a net.",
     }),
      shuffleOptions({
        question: "How did Nikie help the lion when he was trapped in the net?",
        optionA: "He called for other animals to help.",
        optionB: "He gnawed at the net to set the lion free.",
        optionC: "He laughed at the lion's misfortune.",
        correctAnswer: "He gnawed at the net to set the lion free.",
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
          "Nikie, the little naughty mouse, told his mother that he was going out to play after he ____________.",
        optionA: "finished his homework",
        optionB: "ate his fill",
        optionC: "woke up from a nap",
        correctAnswer: "ate his fill",
     }),
      shuffleOptions({
        question:
          "Nikie's mother warned him about the presence of ____________ when he wanted to go out and play.",
        optionA: "tasty snacks",
        optionB: "dangerous animals",
        optionC: "his friends",
        correctAnswer: "dangerous animals",
     }),
      shuffleOptions({
        question:
          "Nikie found a large lion sleeping under a tree just ____________.",
        optionA: "outside his friend's house",
        optionB: "outside the grocery store",
        optionC: "outside his hole",
        correctAnswer: "outside his hole",
     }),
      shuffleOptions({
        question:
          "Nikie thought it would be fun to jump on the lion, as he believed the lion wouldn't even ____________.",
        optionA: "notice him",
        optionB: "wake up",
        optionC: "like it",
        correctAnswer: "notice him",
     }),
      shuffleOptions({
        question:
          "Nikie bit the lion's nose to check if the lion was ____________.",
        optionA: "a good friend",
        optionB: "dead or alive",
        optionC: "asleep",
        correctAnswer: "dead or alive",
     }),
      shuffleOptions({
        question:
          "The lion grew angry and caught Nikie in his paw after Nikie ____________.",
        optionA: "apologized",
        optionB: "told a joke",
        optionC: "bit the lion's nose",
        correctAnswer: "bit the lion's nose",
     }),
      shuffleOptions({
        question:
          "Nikie begged the lion to let him go, promising that he would ____________.",
        optionA: "steal some food",
        optionB: "help him someday",
        optionC: "tell his mother",
        correctAnswer: "help him someday",
     }),
      shuffleOptions({
        question:
          "The lion laughed and allowed Nikie to go, even though he doubted Nikie's ability to ____________.",
        optionA: "play with other animals",
        optionB: "help him",
        optionC: "run fast",
        correctAnswer: "help him",
     }),
      shuffleOptions({
        question:
          "A few days later, Nikie found the lion trapped in a ____________.",
        optionA: "cave",
        optionB: "net",
        optionC: "tree",
        correctAnswer: "net",
     }),
      shuffleOptions({
        question: "Nikie helped the lion by ____________ to set him free.",
        optionA: "singing a song",
        optionB: "gnawing at the net",
        optionC: "calling for help",
        correctAnswer: "gnawing at the net",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Nikie found a large lion sleeping under a tree.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Nikie bit the lion's nose to check if the lion was alive.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The lion caught Nikie in his paw after Nikie apologized.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Nikie promised to help the lion someday, and the lion accepted the offer.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Nikie heard a voice and found the lion trapped in a net.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Nikie helped the lion by singing a song.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The lion was disturbed from his sleep when Nikie bit his nose.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Nikie was not frightened when the lion caught him in his paw.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Nikie decided to run away and never return to the lion.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The lion and Nikie laughed together at the end of the story.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
