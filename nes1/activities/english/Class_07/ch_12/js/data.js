export const chapter = "Chapter -12: The Great Weep";
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
            "Who was the monarch ruling England in the second decade of the twentieth century in the given text?",
          optionA: "Hermann the Wise",
          optionB: "Hermann the Irascible",
          optionC: "The Prime Minister",
          correctAnswer: "Hermann the Irascible",
        }),
      shuffleOptions({
          question:
            "What legislative suggestion did Hermann the Irascible make regarding women's voting rights?",
          optionA: "Women must have the option to vote",
          optionB: "Women must not be allowed to vote",
          optionC: "Women must be obliged to vote",
          correctAnswer: "Women must be obliged to vote",
        }),
      shuffleOptions({
          question:
            "What penalty did the female elector face for failing to vote at any election according to Hermann's proposal?",
          optionA: "5 pounds",
          optionB: "10 pounds",
          optionC: "No penalty",
          correctAnswer: "10 pounds",
        }),
      shuffleOptions({
          question:
            "How did the female disenfranchisement agitation express its dissent?",
          optionA: "Peaceful protests",
          optionB: "Violent methods",
          optionC: "Petitions to the government",
          correctAnswer: "Violent methods",
        }),
      shuffleOptions({
          question:
            "What was the impact of the Compulsory Female Franchise on women's daily lives?",
          optionA: "Increased leisure time",
          optionB: "More opportunities for women",
          optionC: "Disruption of daily routines",
          correctAnswer: "Disruption of daily routines",
        }),
      shuffleOptions({
          question:
            "What expedient did women adopt as a last resort to protest against the government's stance on voting?",
          optionA: "Peaceful demonstrations",
          optionB: "The Great Weep",
          optionC: "Political lobbying",
          correctAnswer: "The Great Weep",
        }),
      shuffleOptions({
          question: "How did the government respond to the Great Weep?",
          optionA: "Agreed to women's demands",
          optionB: "Ignored the protest",
          optionC: "Passed a measure to deprive women of the right to vote",
          correctAnswer:
            "Passed a measure to deprive women of the right to vote",
        }),
      shuffleOptions({
          question:
            "What was the impact of the Great Weep on public places and events?",
          optionA: "Increased attendance",
          optionB: "Decreased attendance",
          optionC: "Became centers of weeping",
          correctAnswer: "Became centers of weeping",
        }),
      shuffleOptions({
          question:
            "Why did the Prime Minister decide to yield to women's demands?",
          optionA: "The government sympathized with the protesters",
          optionB: "Women had gained widespread support",
          optionC: "The Great Weep disrupted daily life significantly",
          correctAnswer: "The Great Weep disrupted daily life significantly",
        }),
      shuffleOptions({
          question:
            "What nickname is given to Hermann in the text, indicating both his temperament and wisdom?",
          optionA: "The Wise",
          optionB: "The Irascible",
          optionC: "The Progressive",
          correctAnswer: "The Irascible",
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
            "Hermann the Irascible, also known as ________, sat on the British throne in the second decade of the twentieth century.",
          optionA: "The Progressive",
          optionB: "The Wise",
          optionC: "The Irresistible",
          correctAnswer: "The Wise",
        }),
      shuffleOptions({
          question:
            "Hermann suggested a Bill that mandated women to vote at all future elections, with a penalty of ________ for failure to vote.",
          optionA: "5 pounds",
          optionB: "10 pounds",
          optionC: "15 pounds",
          correctAnswer: "10 pounds",
        }),
      shuffleOptions({
          question:
            "The Compulsory Female Franchise made elections an ________ task in country districts and an incubus in towns and cities.",
          optionA: "Enjoyable",
          optionB: "Irksome",
          optionC: "Effortless",
          correctAnswer: "Irksome",
        }),
      shuffleOptions({
          question:
            "The No-Votes-for-Women League's battle hymn was \"We Don't Want to Vote,\" and it became a popular ________.",
          optionA: "Slogan",
          optionB: "Refrain",
          optionC: "Anthem",
          correctAnswer: "Refrain",
        }),
      shuffleOptions({
          question:
            "Women organized the Great Weep as a ________ to protest, with relays of ten thousand women weeping continuously in public places.",
          optionA: "Celebration",
          optionB: "Festival",
          optionC: "Expedient",
          correctAnswer: "Expedient",
        }),
      shuffleOptions({
          question:
            "The King suggested passing a measure through the two Houses depriving women of the right to vote as a ________ to the Great Weep.",
          optionA: "Solution",
          optionB: "Countermeasure",
          optionC: "Response",
          correctAnswer: "Countermeasure",
        }),
      shuffleOptions({
          question:
            "The Minister withdrew as Hermann the Irascible gave a profound ________.",
          optionA: "Smile",
          optionB: "Laughter",
          optionC: "Chuckle",
          correctAnswer: "Chuckle",
        }),
      shuffleOptions({
          question:
            'Hermann the Irascible quoted, "There are more ways of killing a cat than by choking it with cream," indicating his ________.',
          optionA: "Humor",
          optionB: "Wisdom",
          optionC: "Mischief",
          correctAnswer: "Wisdom",
        }),
      shuffleOptions({
          question:
            'The Prime Minister asked, "What are we to do?" as his cook had wept into all the ________ dishes.',
          optionA: "Lunch",
          optionB: "Dinner",
          optionC: "Breakfast",
          correctAnswer: "Breakfast",
        }),
      shuffleOptions({
          question:
            "Hermann suggested passing a measure to deprive women of the right to vote as a ________ to the continuous protests.",
          optionA: "Concession",
          optionB: "Compromise",
          optionC: "Resolution",
          correctAnswer: "Concession",
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
            "The monarch in England during the twentieth century in the provided text was Hermann the Wise.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Hermann the Irascible proposed a Bill making voting optional for both male and female electors.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The Compulsory Female Franchise resulted in elation among circles that had demanded the vote.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The penalty for failing to vote under the new Act was 5 pounds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Laundresses and seamstresses in country districts had to vote for candidates they hadn't heard of before.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The Great Weep involved women weeping continuously in public places as a form of protest.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The government yielded to the No-Votes-for-Women League's demands after the Great Weep.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The King suggested passing a measure to grant women even more voting rights.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The female disenfranchisement agitation led to a decline in weekend parties and summer holidays.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            'Hermann the Irascible quoted, "There are more ways of killing a cat than by choking it with cream," as a serious suggestion.',
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
