export const chapter = "Chapter -8: Birds Flying High";
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
          question: "What are the two main types of feathers found on birds?",
          optionA: "Soft and Hard",
          optionB: "Down and Flight",
          optionC: "Long and Short",
          correctAnswer: "Down and Flight",
        }),
      shuffleOptions({
          question: "What purpose do down feathers serve for birds?",
          optionA: "To help them fly",
          optionB: "To keep their body warm",
          optionC: "To attract mates",
          correctAnswer: "To keep their body warm",
        }),
      shuffleOptions({
          question:
            "What part of the bird's body is covered with flight feathers?",
          optionA: "Beak",
          optionB: "Wings and tails",
          optionC: "Legs",
          correctAnswer: "Wings and tails",
        }),
      shuffleOptions({
          question:
            "Which birds have curved beaks that help them crack nuts and eat hard fruits?",
          optionA: "Sparrows",
          optionB: "Parrots",
          optionC: "Eagles",
          correctAnswer: "Parrots",
        }),
      shuffleOptions({
          question:
            "What type of beaks do sparrows, peacocks, and pigeons have?",
          optionA: "Curved Beaks",
          optionB: "Horny Beaks",
          optionC: "Hooked Beaks",
          correctAnswer: "Horny Beaks",
        }),
      shuffleOptions({
          question:
            "Birds like eagles and vultures have which type of beaks that help them tear the flesh of small animals?",
          optionA: "Pointed Beaks",
          optionB: "Hooked Beaks",
          optionC: "Curved Beaks",
          correctAnswer: "Hooked Beaks",
        }),
      shuffleOptions({
          question:
            "Which birds have long and pointed beaks that are useful for catching fish from the water?",
          optionA: "Parrots",
          optionB: "Cranes and Pelicans",
          optionC: "Sparrows",
          correctAnswer: "Cranes and Pelicans",
        }),
      shuffleOptions({
          question: "What do birds use their beaks for?",
          optionA: "To fly",
          optionB: "To build nests",
          optionC: "To eat and collect food",
          correctAnswer: "To eat and collect food",
        }),
      shuffleOptions({
          question:
            "What do some birds like nightingales and cuckoos use sounds for?",
          optionA: "To attract mates",
          optionB: "To communicate with other birds",
          optionC: "To scare away predators",
          correctAnswer: "To attract mates",
        }),
      shuffleOptions({
          question:
            "What is the term for the movement of birds from cold regions to warmer places during winters?",
          optionA: "Immigration",
          optionB: "Hibernation",
          optionC: "Migration",
          correctAnswer: "Migration",
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
            "Birds have two main types of feathers - down feathers keep the body warm, and __________ feathers are present on the wings and tails for flying.",
          optionA: "Soft",
          optionB: "Flight",
          optionC: "Hard",
          correctAnswer: "Flight",
        }),
      shuffleOptions({
          question:
            "Beaks of birds serve various purposes. Curved beaks, found in parrots, help them crack nuts, while sparrows and pigeons have __________ beaks to pick up food from the ground.",
          optionA: "Pointed",
          optionB: "Horny",
          optionC: "Hooked",
          correctAnswer: "Horny",
        }),
      shuffleOptions({
          question:
            "Birds like eagles and vultures have __________ beaks that aid in tearing the flesh of small animals and birds.",
          optionA: "Pointed",
          optionB: "Hooked",
          optionC: "Curved",
          correctAnswer: "Hooked",
        }),
      shuffleOptions({
          question:
            "Cranes and pelicans have long and __________ beaks, which are useful for catching fish from the water.",
          optionA: "Pointed",
          optionB: "Hooked",
          optionC: "Curved",
          correctAnswer: "Pointed",
        }),
      shuffleOptions({
          question:
            "Birds make sounds for various reasons. Nightingale and cuckoo produce musical sounds, while some birds like pelicans and storks make __________.",
          optionA: "No sound at all",
          optionB: "Harsh sounds",
          optionC: "Mimicking sounds",
          correctAnswer: "No sound at all",
        }),
      shuffleOptions({
          question:
            "During winters, birds from cold regions migrate to warmer places in search of living. This movement is known as the __________ of birds.",
          optionA: "Immigration",
          optionB: "Hibernation",
          optionC: "Migration",
          correctAnswer: "Migration",
        }),
      shuffleOptions({
          question:
            "Birds with curved beaks, such as parrots, use them to crack nuts and eat hard fruits or food items, showcasing their __________ features.",
          optionA: "Special",
          optionB: "Wondrous",
          optionC: "Unique",
          correctAnswer: "Wondrous",
        }),
      shuffleOptions({
          question:
            "Beaks of birds, like those of sparrows, peacocks, and pigeons, are specialized for picking up food lying on the ground, such as __________ or grains.",
          optionA: "Nuts",
          optionB: "Seeds",
          optionC: "Insects",
          correctAnswer: "Seeds",
        }),
      shuffleOptions({
          question:
            "Birds use their beaks not only for eating but also for __________ their food.",
          optionA: "Collecting",
          optionB: "Storing",
          optionC: "Digesting",
          correctAnswer: "Collecting",
        }),
      shuffleOptions({
          question:
            "Some birds, like eagles and vultures, have __________ beaks, which help them in tearing the flesh of small animals and birds.",
          optionA: "Sharp",
          optionB: "Hooked",
          optionC: "Pointed",
          correctAnswer: "Hooked",
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
            "Feathers on a bird's body are categorized into two types: down feathers for warmth and flight feathers for flying.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "All birds use the same type of beaks for eating, regardless of their species.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Birds like eagles and vultures have pointed beaks that help them in tearing the flesh of small animals and birds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Birds with curved beaks, such as parrots, use them to crack nuts and eat hard fruits.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Cranes and pelicans have long and pointed beaks that are useful for catching fish from the water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Birds make sounds only to communicate with each other, and their sounds are never used for singing.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "In a Joint Family, at least two generations live together.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Twins born in a family are always identical, having the same features.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Birds migrate to warmer places during winters in search of living, a phenomenon known as immigration.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Birds with horny beaks, like sparrows and pigeons, use them to pick up food from the ground.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
    ]),
  }
}

export var activityData;
