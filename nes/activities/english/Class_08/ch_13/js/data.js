export const chapter = "Chapter -13: The Tail, Boat and Ant";
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
            "What time did the boys of the First A have leisure on Wednesday?",
          optionA: "Between two and two forty-five",
          optionB: "Between three and three forty-five",
          optionC: "Between four and four forty-five",
          correctAnswer: "Between three and three forty-five",
        }),
      shuffleOptions({
          question:
            "What did Swaminathan find meaningless for the children of the Infant Standards to do at school?",
          optionA: "Play games under the tamarind tree",
          optionB: "Dabble in wet clay and shape models",
          optionC: "Engage in repeating the Tamil alphabet",
          correctAnswer: "Dabble in wet clay and shape models",
        }),
      shuffleOptions({
          question:
            "Where did Swaminathan want to go but changed his mind because the headmaster might be there?",
          optionA: "Corridor of the Infant Standards",
          optionB: "Senior classes-the second and third forms",
          optionC: "Foot of the staircase",
          correctAnswer: "Senior classes-the second and third forms",
        }),
      shuffleOptions({
          question:
            "Who was reading the story of the old man who planted trees during the English period?",
          optionA: "Rajam",
          optionB: "Mani",
          optionC: "Vedanayagam",
          correctAnswer: "Vedanayagam",
        }),
      shuffleOptions({
          question:
            "What was Swaminathan's first shock in life, according to the text?",
          optionA: "Losing a game under the tamarind tree",
          optionB: "Being scolded by Vedanayagam",
          optionC: "Earning a new name - 'The Tail'",
          correctAnswer: "Earning a new name - 'The Tail'",
        }),
      shuffleOptions({
          question: "What did Somu call Swaminathan after the incident?",
          optionA: "The Genius",
          optionB: "The Tail-Rajam's Tail",
          optionC: "The Lone Wanderer",
          correctAnswer: "The Tail-Rajam's Tail",
        }),
      shuffleOptions({
          question: "What did Swaminathan do after the English period?",
          optionA: "Played games under the tamarind tree",
          optionB: "Walked home alone, troubled",
          optionC: "Went to Rajam's house",
          correctAnswer: "Walked home alone, troubled",
        }),
      shuffleOptions({
          question:
            "What did Swaminathan do with a piece of tin in the gutter?",
          optionA: "Plunged his hand in and picked it up",
          optionB: "Ignored it and walked away",
          optionC: "Made a boat and sailed it",
          correctAnswer: "Plunged his hand in and picked it up",
        }),
      shuffleOptions({
          question: "What happened to the boat when it passed under a tree?",
          optionA: "A brick obstructed its progress",
          optionB: "A leaf fell down and upset it",
          optionC: "It turned turtle",
          correctAnswer: "A leaf fell down and upset it",
        }),
      shuffleOptions({
          question:
            "What did Swaminathan do after the boat and its cargo were wrecked beyond recovery?",
          optionA: "Uttered a prayer for the soul of the ant",
          optionB: "Left the spot without doing anything",
          optionC: "Tried to retrieve the boat from the gutter",
          correctAnswer: "Uttered a prayer for the soul of the ant",
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
            "The most important thing we've learned, So far as children are concerned, Is never, NEVER, NEVER let Them near your mobile set. Or better still, just don't buy The idiotic thing at all.",
          optionA: "Engaged",
          optionB: "Hypnotized",
          optionC: "Bored",
          correctAnswer: "b. Hypnotized",
        }),
      shuffleOptions({
          question:
            "Oh yes, we know it keeps them still, They don't climb out the window sill, They never fight or kick or punch, They leave you free to cook the lunch And wash the dishes in the sink-",
          optionA: "Cat",
          optionB: "Spot",
          optionC: "Tot",
          correctAnswer: "c. Tot",
        }),
      shuffleOptions({
          question:
            "IT ROTS THE SENSE IN THE HEAD! IT KILLS IMAGINATION DEAD! IT CLOGS AND CLUTTERS UP THE MIND!",
          optionA: "Hard",
          optionB: "Soft",
          optionC: "Sharp",
          correctAnswer: "b. Soft",
        }),
      shuffleOptions({
          question:
            "HE CANNOT THINK - HE ONLY SEES! 'All right!' you'll cry. 'All right!' you'll say, 'But if we take the set away, What shall we do to entertain Our darling children? Please explain!'",
          optionA: "Born",
          optionB: "Created",
          optionC: "Invented",
          correctAnswer: "c. Invented",
        }),
      shuffleOptions({
          question:
            "THEY ... USED ... TO ... READ! They'd READ and READ, AND READ and READ, and then proceed To READ some more. Great Scott! Gadzooks! One-half their lives was reading books!",
          optionA: "Aplenty",
          optionB: "Abundant",
          optionC: "Galore",
          correctAnswer: "c. Galore",
        }),
      shuffleOptions({
          question:
            "Such wondrous, fine, fantastic tales Of dragons, gypsies, queens, and whales And treasure isles, and distant shores Where smugglers rowed with ___________.",
          optionA: "Hats",
          optionB: "Coats",
          optionC: "Pants",
          correctAnswer: "c. Pants",
        }),
      shuffleOptions({
          question:
            "And in the bedroom, by the bed, More books were waiting to-be-read!­ The younger ones had Beatrix Potter With Mr. Tod, the dirty rotter, And Squirrel Nutkin, Pigling Bland, And Mrs. Tiggy-Winkle and ___________.",
          optionA: "Hump",
          optionB: "Jump",
          optionC: "Lump",
          correctAnswer: "a. Hump",
        }),
      shuffleOptions({
          question:
            "So please, oh please, we beg, we pray; Go throw your mobile set away, And in its place you can install A lovely ___________ on the wall.",
          optionA: "Television",
          optionB: "Bookshelf",
          optionC: "Computer",
          correctAnswer: "b. Bookshelf",
        }),
      shuffleOptions({
          question:
            "Of having nothing else to do, They'll now begin to feel the ___________ Of having something to read.",
          optionA: "Boredom",
          optionB: "Joy",
          optionC: "Anguish",
          correctAnswer: "b. Joy",
        }),
      shuffleOptions({
          question:
            "That, in about a week or two Of having nothing else to do, They'll now begin to feel the ___________ Of having something to read.",
          optionA: "Did",
          optionB: "Said",
          optionC: "Hid",
          correctAnswer: "a. Did",
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
            "The boys of the First A had leisure between three and three forty-five on Wednesday.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Swaminathan found the children of the Infant Standards to be impressively tall.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Swaminathan paused at the foot of the staircase leading to the senior classes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The headmaster was sitting with his back to Swaminathan in the senior classes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Swaminathan joined his friends under the tamarind tree with a low, ecstatic cry.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The Pea mentioned that a tail is a long thing that attaches itself to an ass or a dog.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Somu, the genial Somu, referred to Swaminathan as 'The Tail-Rajam's Tail.'",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Vedanayagam presided over the English period and read the story of the old man who planted trees.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Swaminathan made a boat and sailed it in the stream, where it faced various challenges.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Swaminathan felt joy when the boat and its cargo were wrecked beyond recovery.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
