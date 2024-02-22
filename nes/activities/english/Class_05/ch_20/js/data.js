export const chapter = "Chapter - 20: A Country Cottage";
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
        question: "Who were the two young people mentioned in the text?",
        optionA: "Sasha and his uncle",
        optionB: "Varya and her cousin",
        optionC: "Sasha and Varya",
        correctAnswer: "Sasha and Varya",
     }),
      shuffleOptions({
        question:
          "What were Sasha and Varya doing at the beginning of the text?",
        optionA: "Arguing with each other",
        optionB: "Walking on a country road",
        optionC: "Walking on a platform at a train station",
        correctAnswer: "Walking on a platform at a train station",
     }),
      shuffleOptions({
        question: "What does the moon seem to envy in the text?",
        optionA: "The fragrance of lilac and wild cherry",
        optionB: "The corncrake's call in the distance",
        optionC: "The happiness of Sasha and Varya",
        correctAnswer: "The happiness of Sasha and Varya",
     }),
      shuffleOptions({
        question: "What was heavy in the still air mentioned in the text?",
        optionA: "The fragrance of lilac and wild cherry",
        optionB: "The sound of a rushing train",
        optionC: "The darkness of the night",
        correctAnswer: "The fragrance of lilac and wild cherry",
     }),
      shuffleOptions({
        question: "What was calling in the distance beyond the train line?",
        optionA: "A corncrake",
        optionB: "A telegraph post",
        optionC: "The moon",
        correctAnswer: "A corncrake",
     }),
      shuffleOptions({
        question:
          "What did Varya mention about the telegraph posts on the train line?",
        optionA: "They were too noisy",
        optionB: "They added a special note to the landscape",
        optionC: "They were obstructing the view",
        correctAnswer: "They added a special note to the landscape",
     }),
      shuffleOptions({
        question: "What did Varya and Sasha have for supper?",
        optionA: "Pudding with sweet salad",
        optionB: "Fried chicken and mashed potatoes",
        optionC: "Pizza and ice cream",
        correctAnswer: "Pudding with sweet salad",
     }),
      shuffleOptions({
        question: "Who came out on the platform as the train approached?",
        optionA: "The conductor",
        optionB: "The station master",
        optionC: "The ticket collector",
        correctAnswer: "The station master",
     }),
      shuffleOptions({
        question:
          "What was the reaction of Sasha and Varya upon seeing their uncle and his family?",
        optionA: "They were delighted",
        optionB: "They were horror-stricken",
        optionC: "They were indifferent",
        correctAnswer: "They were horror-stricken",
     }),
      shuffleOptions({
        question: "What was Sasha's initial reaction to his relatives' visit?",
        optionA: "He welcomed them with open arms",
        optionB: "He felt happy and excited",
        optionC: "He looked almost with hatred at his young wife",
        correctAnswer: "He looked almost with hatred at his young wife",
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
          "The two young people had been married not very long ago. They were walking up and down the platform of a little country station, holding each other's hands and feeling __________.",
        options: ["sad", "nervous", "very happy"],
        correctAnswer: "very happy",
     }),
      shuffleOptions({
        question:
          "The moon peeped up from the drifting cloudlets, seemingly envious of their __________.",
        options: ["calmness", "happiness", "laughter"],
        correctAnswer: "happiness",
     }),
      shuffleOptions({
        question:
          "The still air was heavy with the fragrance of __________ and wild cherry.",
        options: ["roses", "lilac", "daisies"],
        correctAnswer: "lilac",
     }),
      shuffleOptions({
        question:
          "Somewhere in the distance beyond the line, a __________ was calling.",
        options: ["bird", "corncrake", "dog"],
        correctAnswer: "corncrake",
     }),
      shuffleOptions({
        question:
          '"How beautiful it is, Sasha, how beautiful!" murmured the young wife. They were amazed by the beauty of the __________.',
        options: ["stars", "copse", "clouds"],
        correctAnswer: "copse",
     }),
      shuffleOptions({
        question:
          "Varya mentioned that the solid, silent telegraph posts added a special note to the landscape, suggesting __________ in the distance.",
        options: ["desolation", "loneliness", "humanity, civilization"],
        correctAnswer: "humanity, civilization",
     }),
      shuffleOptions({
        question:
          "Varya prepared pudding with sweet salad for their supper, which she mentioned was just enough for __________.",
        options: ["the entire family", "a large party", "two of them"],
        correctAnswer: "two of them",
     }),
      shuffleOptions({
        question:
          'When the train was approaching, Varya expressed her excitement and said, "The train is coming!" How jolly!" They saw three eyes of fire in the distance, which were __________.',
        options: ["car headlights", "signal lights", "lanterns"],
        correctAnswer: "signal lights",
     }),
      shuffleOptions({
        question:
          "At the sight of their uncle and his family, the young husband and wife were __________.",
        options: ["delighted", "horror-stricken", "indifferent"],
        correctAnswer: "horror-stricken",
     }),
      shuffleOptions({
        question:
          "While his uncle talked and kissed them, Sasha had a vision of their little cottage filled with noise and confusion. He looked almost with __________ at his young wife.",
        options: ["happiness", "love", "hatred"],
        correctAnswer: "hatred",
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
          "Parrots and lovebirds were commonly kept as pets in North India in the past.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The parrot in the story refused to talk despite Aunt Ruby's efforts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Aunt Ruby gave up her efforts to show love to the parrot after it knocked off her spectacles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The responsibility of feeding the parrot fell upon Aunt Ruby.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Aunt Ruby's tantrums were pleasant to watch.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The narrator was responsible for leaving the cage door open, allowing the parrot to escape.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The parrot enjoyed green chillies and ripe tomatoes as treats.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Aunt Ruby was upset when the parrot escaped but was easily distracted with the promise of a new parrot.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The parrot never learned to talk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The parrot became a regular visitor to the garden and verandah, singing praises to Aunt Ruby.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
