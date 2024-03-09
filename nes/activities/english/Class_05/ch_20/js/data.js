export const chapter = "Chapter -20: A Country Cottage";
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
          question:
            "What were the young couple doing at the beginning of the text?",
          optionA: "Cooking dinner",
          optionB: "Walking up and down a platform",
          optionC: "Sleeping",
          correctAnswer: "Walking up and down a platform",
        }),
      shuffleOptions({
          question:
            "What added a special note to the landscape, suggesting humanity and civilization?",
          optionA: "Lilac fragrance",
          optionB: "Silent telegraph posts",
          optionC: "Drifting cloudlets",
          correctAnswer: "Silent telegraph posts",
        }),
      shuffleOptions({
          question: "What was the young wife's name?",
          optionA: "Varya",
          optionB: "Sasha",
          optionC: "Nina",
          correctAnswer: "Varya",
        }),
      shuffleOptions({
          question: "What did Varya cook for supper?",
          optionA: "Pudding with sweet salad",
          optionB: "Fried chicken",
          optionC: "Pizza",
          correctAnswer: "Pudding with sweet salad",
        }),
      shuffleOptions({
          question:
            "What did Sasha and Varya hear from one of the train carriages?",
          optionA: "The sound of a corncrake",
          optionB: "Shouting and arguing",
          optionC: "Someone recognizing and calling them",
          correctAnswer: "Someone recognizing and calling them",
        }),
      shuffleOptions({
          question:
            "Who were the two little girls that skipped out of the train?",
          optionA: "Varya and Sasha",
          optionB: "Nina and Fifa",
          optionC: "Kolya and Kostya",
          correctAnswer: "Nina and Fifa",
        }),
      shuffleOptions({
          question:
            "What did Sasha have a vision of while his uncle was talking?",
          optionA: "A dream",
          optionB: "Their little cottage filled with noise and confusion",
          optionC: "A happy family gathering",
          correctAnswer: "Their little cottage filled with noise and confusion",
        }),
      shuffleOptions({
          question: "How did Sasha feel about his uncle and family visiting?",
          optionA: "Happy and excited",
          optionB: "Horror-stricken and angry",
          optionC: "Indifferent",
          correctAnswer: "Horror-stricken and angry",
        }),
      shuffleOptions({
          question:
            "What did Sasha think about his young wife when his relatives arrived?",
          optionA: "He felt proud of her",
          optionB: "He admired her hospitality",
          optionC: "He looked almost with hatred at her",
          correctAnswer: "He looked almost with hatred at her",
        }),
      shuffleOptions({
          question:
            "How did Varya respond to Sasha's feelings about the visitors?",
          optionA: "She felt proud",
          optionB: "She agreed with him",
          optionC: "She smiled and welcomed the visitors",
          correctAnswer: "She smiled and welcomed the visitors",
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
            "The two young people were married not very long ago. They were walking up and down the platform of a little __________ station.",
          optionA: "City",
          optionB: "Country",
          optionC: "International",
          correctAnswer: "Country",
        }),
      shuffleOptions({
          question:
            "The moon peeped up from the drifting __________. It seemed to envy their happiness.",
          optionA: "Rain",
          optionB: "Cloudlets",
          optionC: "Fog",
          correctAnswer: "Cloudlets",
        }),
      shuffleOptions({
          question:
            '"How beautiful it is, Sasha, how beautiful!" murmured the young wife. "It all seems like a __________."',
          optionA: "Nightmare",
          optionB: "Reality",
          optionC: "Dream",
          correctAnswer: "Dream",
        }),
      shuffleOptions({
          question:
            '"I have cooked pudding with sweet salad. It\'s just enough for two of us," said Varya. "What have you got for our __________ tonight?"',
          optionA: "Breakfast",
          optionB: "Lunch",
          optionC: "Supper",
          correctAnswer: "Supper",
        }),
      shuffleOptions({
          question:
            "The station master came out on the platform. Signal lights flashed here and there on the __________.",
          optionA: "Road",
          optionB: "Line",
          optionC: "Sky",
          correctAnswer: "Line",
        }),
      shuffleOptions({
          question:
            "The dark monster crept noiselessly alongside the platform and came to a __________.",
          optionA: "Standstill",
          optionB: "Halt",
          optionC: "Speed",
          correctAnswer: "Standstill",
        }),
      shuffleOptions({
          question:
            '"Here we are, dear boy!" began the whiskered gentleman, squeezing Sasha\'s __________.',
          optionA: "Hand",
          optionB: "Shoulder",
          optionC: "Head",
          correctAnswer: "Hand",
        }),
      shuffleOptions({
          question:
            'Sasha, turning his head away to hide his angry despairing face, struggled to give a note of cordial welcome to his voice as he said: "It is jolly of you! Welcome to the __________!"',
          optionA: "Mansion",
          optionB: "Castle",
          optionC: "Cottage",
          correctAnswer: "Cottage",
        }),
      shuffleOptions({
          question:
            "The moon came out again. She seemed to smile, as though she was glad she had no __________.",
          optionA: "Friends",
          optionB: "Relations",
          optionC: "Visitors",
          correctAnswer: "Relations",
        }),
      shuffleOptions({
          question:
            'Sasha looked almost with hatred at his young wife and whispered: "It\'s you they have come to __________! ..... Damn them!"',
          optionA: "Visit",
          optionB: "See",
          optionC: "Ignore",
          correctAnswer: "See",
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
          question: "The young couple was married a long time ago.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The moon envied the happiness of the young couple.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The station master did not come out on the platform.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Sasha and Varya cooked pizza for supper.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The dark monster came to a speed on the platform.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The whiskered gentleman squeezed Sasha's head.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Sasha and Varya welcomed their relatives to a mansion.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The moon seemed to be glad that it had no visitors.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Sasha looked with love at his young wife when his relatives arrived.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Varya responded angrily to Sasha's feelings about the visitors.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
