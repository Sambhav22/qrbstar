export const chapter = "Chapter -18: Summer Sun";
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
          question: "What is the sun described as in the given text?",
          optionA: "Warm and glittering",
          optionB: "Elusive and shy",
          optionC: "Cold and distant",
          correctAnswer: "Warm and glittering",
        }),
      shuffleOptions({
          question:
            "In the text, where does the sun manage to slip its rays through?",
          optionA: "Closed windows",
          optionB: "Shady parlour",
          optionC: "Blinds with chinks",
          correctAnswer: "Blinds with chinks",
        }),
      shuffleOptions({
          question: "How does the sun make the dusty attic spider-clad glad?",
          optionA: "By creating warmth",
          optionB: "Through the keyhole",
          optionC: "By smiling through broken tiles",
          correctAnswer: "Through the keyhole",
        }),
      shuffleOptions({
          question: "What does the sun do to the garden ground in the text?",
          optionA: "Darkens it",
          optionB: "Illuminates it with a warm and glittering look",
          optionC: "Covers it with rain",
          correctAnswer: "Illuminates it with a warm and glittering look",
        }),
      shuffleOptions({
          question:
            "Where does the sun shed its warm and glittering look according to the text?",
          optionA: "In the attic",
          optionB: "Among the ivy's inmost nook",
          optionC: "Through the broken tiles",
          correctAnswer: "Among the ivy's inmost nook",
        }),
      shuffleOptions({
          question:
            "How does the sun move along the blue, according to the text?",
          optionA: "With a hesitant pace",
          optionB: "With footing true",
          optionC: "In a zigzag pattern",
          correctAnswer: "With footing true",
        }),
      shuffleOptions({
          question:
            "What is the sun's role in relation to the child in the text?",
          optionA: "To scold the child",
          optionB: "To please the child",
          optionC: "To hide from the child",
          correctAnswer: "To please the child",
        }),
      shuffleOptions({
          question:
            "Why do the blinds in the parlour need to be pulled, according to the text?",
          optionA: "To keep the sun out",
          optionB: "To create a dark atmosphere",
          optionC: "To keep the room cool",
          correctAnswer: "To keep the room cool",
        }),
      shuffleOptions({
          question: "Where does the sun go to paint the rose, as per the text?",
          optionA: "In the attic",
          optionB: "Among the ivy's inmost nook",
          optionC: "Round the bright air",
          correctAnswer: "Round the bright air",
        }),
      shuffleOptions({
          question:
            "How does the sun interact with the laddered hayloft in the text?",
          optionA: "Through closed doors",
          optionB: "Through the broken edge of tiles",
          optionC: "By creating a cool atmosphere",
          correctAnswer: "Through the broken edge of tiles",
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
            "Great is the sun, and wide he goes\nThrough empty heaven with ______;\nAnd in the blue and glowing days\nMore thick than rain he showers his ______.",
          optionA: "splendor, brilliance",
          optionB: "repose, rays",
          optionC: "warmth, radiance",
          correctAnswer: "repose, rays",
        }),
      shuffleOptions({
          question:
            "Though closer still the blinds we pull\nTo keep the shady parlour cool,\nYet he will find a chink or two\nTo slip his golden ______ through.",
          optionA: "fingers",
          optionB: "sunlight",
          optionC: "warmth",
          correctAnswer: "fingers",
        }),
      shuffleOptions({
          question:
            "The dusty attic spider-clad\nHe, through the keyhole, maketh ______;\nAnd through the broken edge of tiles\nInto the laddered hayloft ______.",
          optionA: "happiness, smiles",
          optionB: "sadness, frowns",
          optionC: "glad, peeks",
          correctAnswer: "glad, peeks",
        }),
      shuffleOptions({
          question:
            "Meantime his golden face around\nHe bares to all the ______ ground,\nAnd sheds a warm and glittering look\nAmong the ivy's ______ nook.",
          optionA: "garden, inmost",
          optionB: "dark, hidden",
          optionC: "bright, open",
          correctAnswer: "garden, inmost",
        }),
      shuffleOptions({
          question:
            "Above the hills, along the blue,\nRound the ______ air with footing true,\nTo please the child, to paint the ______,\nThe gardener of the World, he goes.",
          optionA: "bright, sky",
          optionB: "dark, moon",
          optionC: "open, rose",
          correctAnswer: "bright, sky",
        }),
      shuffleOptions({
          question: "What is described as 'thicker than rain' in the text?",
          optionA: "Blinds",
          optionB: "Sun",
          optionC: "Days",
          correctAnswer: "Days",
        }),
      shuffleOptions({
          question:
            "The sun finds a chink or two despite pulling the blinds to keep the shady parlour cool. What does the word 'chink' refer to in this context?",
          optionA: "Hole or crack",
          optionB: "Bright light",
          optionC: "Warmth",
          correctAnswer: "Hole or crack",
        }),
      shuffleOptions({
          question:
            "Through which opening does the sun make the dusty attic spider-clad glad?",
          optionA: "Closed window",
          optionB: "Keyhole",
          optionC: "Broken edge of tiles",
          correctAnswer: "Keyhole",
        }),
      shuffleOptions({
          question: "What does the sun shed among the ivy's inmost nook?",
          optionA: "Rain",
          optionB: "Glittering look",
          optionC: "Darkness",
          correctAnswer: "Glittering look",
        }),
      shuffleOptions({
          question:
            "What does the gardener of the World go to please the child and paint the rose?",
          optionA: "Dark air",
          optionB: "Bright air",
          optionC: "Shady parlour",
          correctAnswer: "Bright air",
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
          question: "The sun's rays shower more thickly than rain.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Closing the blinds completely prevents the sun from slipping its rays through.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The dusty attic spider-clad becomes sad when the sun shines through the keyhole.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The sun sheds a warm and glittering look among the ivy's inmost nook.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The gardener of the World goes to create darkness in the bright air.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The sun moves along the blue with hesitant footing.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The blinds in the shady parlour are pulled to keep the room warm.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Queen Padmini deceived Alauddin Khalji by showing her mirror image in the water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The first Jauhar at Chittor Fort occurred during the 16th century.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The gardener of the World goes to paint the moon in the bright air.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
