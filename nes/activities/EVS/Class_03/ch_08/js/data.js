export const chapter = "Chapter - 8: Birds Flying High";
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
          question: "What do down feathers do for birds?",
          optionA: "Help in flying",
          optionB: "Keep the body warm",
          optionC: "Aid in building nests",
          correctAnswer: "b) Keep the body warm",
         }),
      shuffleOptions({
          question: "Which type of beak do eagles and vultures have?",
          optionA: "Curved Beaks",
          optionB: "Horny Beaks",
          optionC: "Hooked Beaks",
          correctAnswer: "c) Hooked Beaks",
         }),
      shuffleOptions({
          question: "What is the purpose of a bird's beak?",
          optionA: "Collecting food",
          optionB: "Building nests",
          optionC: "Flying high",
          correctAnswer: "a) Collecting food",
         }),
      shuffleOptions({
          question:
            "Which birds have long and pointed beaks for catching fish?",
          optionA: "Parrots",
          optionB: "Cranes and pelicans",
          optionC: "Sparrows and pigeons",
          correctAnswer: "b) Cranes and pelicans",
         }),
      shuffleOptions({
          question: "What kind of sounds do Nightingale and Cuckoo produce?",
          optionA: "Harsh sounds",
          optionB: "No sounds at all",
          optionC: "Musical sounds",
          correctAnswer: "c) Musical sounds",
         }),
      shuffleOptions({
          question: "What is the purpose of migration for some birds?",
          optionA: "Building nests",
          optionB: "Finding mates",
          optionC: "Escaping cold weather",
          correctAnswer: "c) Escaping cold weather",
         }),
      shuffleOptions({
          question: "What do flight feathers help birds do?",
          optionA: "Build nests",
          optionB: "Fly high in the sky",
          optionC: "Collect food",
          correctAnswer: "b) Fly high in the sky",
         }),
      shuffleOptions({
          question: "Which birds have curved beaks for cracking nuts?",
          optionA: "Eagles and vultures",
          optionB: "Parrots and hornbills",
          optionC: "Sparrows and pigeons",
          correctAnswer: "b) Parrots and hornbills",
         }),
      shuffleOptions({
          question: "How do birds with horny beaks feed?",
          optionA: "Catching fish",
          optionB: "Cracking nuts",
          optionC: "Picking up food from the ground",
          correctAnswer: "c) Picking up food from the ground",
         }),
      shuffleOptions({
          question: "What is the purpose of a bird's boat-shaped body?",
          optionA: "Flying high",
          optionB: "Keeping warm",
          optionC: "Building nests",
          correctAnswer: "a) Flying high",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Birds are found almost ____________.",
          options: ["everywhere", "nowhere", "somewhere"],
          correctAnswer: "everywhere",
         }),
      shuffleOptions({
          question: "Birds have ____________ shaped body.",
          options: ["car", "boat", "plane"],
          correctAnswer: "boat",
         }),
      shuffleOptions({
          question: "__________ feathers keep the body of birds warm.",
          options: ["Down", "Flight", "Soft"],
          correctAnswer: "Down",
         }),
      shuffleOptions({
          question: "Birds like parrots and hornbills have ____________ beaks.",
          options: ["curved", "pointed", "hooked"],
          correctAnswer: "curved",
         }),
      shuffleOptions({
          question:
            "Birds make sounds to call or sing. Nightingale and cuckoo produce ____________ sounds.",
          options: ["harsh", "musical", "silent"],
          correctAnswer: "musical",
         }),
      shuffleOptions({
          question: "Some birds have very ____________ voice such as crow.",
          options: ["harsh", "melodious", "whispering"],
          correctAnswer: "harsh",
         }),
      shuffleOptions({
          question:
            "Birds that live in cold regions migrate to some ____________ places.",
          options: ["warmer", "colder", "cooler"],
          correctAnswer: "warmer",
         }),
      shuffleOptions({
          question: "Birds with ____________ beaks are good at catching fish.",
          options: ["curved", "pointed", "hooked"],
          correctAnswer: "pointed",
         }),
      shuffleOptions({
          question:
            "Horny beaks are found in birds like ____________ and pigeons.",
          options: ["sparrows", "peacocks", "eagles"],
          correctAnswer: "sparrows",
         }),
      shuffleOptions({
          question:
            "Some birds have ____________ beaks to pick up food lying on the ground.",
          options: ["curved", "horny", "hooked"],
          correctAnswer: "horny",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Birds have boat-shaped bodies.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "All birds can fly.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Night birds are generally quiet and do not make sounds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Birds with curved beaks are good at cracking nuts.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Migratory birds move to colder places during winters.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "All birds build nests for their eggs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Parrots can imitate human voices.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Horny beaks are found in birds like eagles and vultures.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Birds with pointed beaks are good at catching fish.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "All birds migrate to warmer places during winter.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
