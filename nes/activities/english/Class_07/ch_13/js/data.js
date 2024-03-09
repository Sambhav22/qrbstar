export const chapter = "Chapter -13: The Mobile Phone";
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
            "What is the author's main concern about mobile screens in the text?",
          optionA: "They are too expensive",
          optionB: "They can be addictive for children",
          optionC: "They are not useful for adults",
          correctAnswer: "b. They can be addictive for children",
        }),
      shuffleOptions({
          question:
            "According to the author, what negative impact can mobile screens have on children?",
          optionA: "They improve imagination",
          optionB: "They make children dull and blind",
          optionC: "They encourage outdoor activities",
          correctAnswer: "b. They make children dull and blind",
        }),
      shuffleOptions({
          question:
            "How does the author suggest replacing mobile screens in the text?",
          optionA: "With outdoor games",
          optionB: "With a bookshelf and books",
          optionC: "With educational apps",
          correctAnswer: "b. With a bookshelf and books",
        }),
      shuffleOptions({
          question:
            "What did children use to do for entertainment before the invention of mobile screens, according to the text?",
          optionA: "Play video games",
          optionB: "Watch television",
          optionC: "Read books",
          correctAnswer: "c. Read books",
        }),
      shuffleOptions({
          question:
            "What is the author's tone towards mobile screens in the text?",
          optionA: "Neutral",
          optionB: "Positive",
          optionC: "Negative",
          correctAnswer: "c. Negative",
        }),
      shuffleOptions({
          question:
            "According to the text, what did the younger ones have by Beatrix Potter?",
          optionA: "Purple pants",
          optionB: "Fairyland",
          optionC: "Dirty rotter",
          correctAnswer: "b. Fairyland",
        }),
      shuffleOptions({
          question:
            "What does the author suggest about the impact of books on children in the text?",
          optionA: "Books have no impact on children",
          optionB: "Books enhance creativity and joy",
          optionC: "Books make children dull",
          correctAnswer: "b. Books enhance creativity and joy",
        }),
      shuffleOptions({
          question:
            "What activity does the author recommend to replace mobile screen usage?",
          optionA: "Outdoor sports",
          optionB: "Reading books",
          optionC: "Playing with toys",
          correctAnswer: "b. Reading books",
        }),
      shuffleOptions({
          question:
            "What does the author promise will happen if mobile screens are replaced with books?",
          optionA: "Children will become more addicted",
          optionB: "Children will lose interest in reading",
          optionC: "Children will grow keen and love the change",
          correctAnswer: "c. Children will grow keen and love the change",
        }),
      shuffleOptions({
          question:
            "How does the author describe the mobile screen in the text?",
          optionA: "Lovely and clean",
          optionB: "Repulsive and foul",
          optionC: "Educational and useful",
          correctAnswer: "b. Repulsive and foul",
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
            "Cattle are often referred to as a farmer's second most precious possession after gold.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b. False",
        }),
      shuffleOptions({
          question:
            "In Hinduism, Lord Krishna is known as Govind, which means the consumer of cows.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "a. True",
        }),
      shuffleOptions({
          question:
            "The five products of a cow, including milk, urine, dung, curd, and ghee, are collectively known as Pentalogy.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b. False",
        }),
      shuffleOptions({
          question:
            "Buffalo milk in India is considered healthier than cow milk due to its higher content of protein.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b. False",
        }),
      shuffleOptions({
          question:
            "The cattle found in India are unique to the Indian subcontinent and are not found in African countries.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b. False",
        }),
      shuffleOptions({
          question:
            "The domesticated cattle differ from wild ones in their smaller size, horns, and the development of milk characteristics.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "a. True",
        }),
      shuffleOptions({
          question:
            "The cattle's stomach is divided into three sections, which play different roles in digestion.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b. False",
        }),
      shuffleOptions({
          question:
            "Some courtiers grow jealous of the ragged minister in the story due to his magical powers at the court.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b. False",
        }),
      shuffleOptions({
          question:
            "The minister's daily routine is falsely rumored to include practicing conspiracy before meeting the king.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "a. True",
        }),
      shuffleOptions({
          question:
            "To preserve milk and eliminate bacteria, it is recommended to carry out proper feeding.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b. False",
   }),
    ]),
  }
}

export var activityData;
