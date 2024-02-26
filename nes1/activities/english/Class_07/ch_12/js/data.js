export const chapter = "Chapter - 12: The Great Weep ";
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
        question:
          "Who was the monarch of England in the second decade of the twentieth century?",
        optionA: "King George V",
        optionB: "King Edward VII",
        optionC: "King William III",
        correctAnswer: "King George V",
     }),
      shuffleOptions({
        question: "What was King Hermann's nickname?",
        optionA: "The Generous",
        optionB: "The Irascible",
        optionC: "The Silent",
        correctAnswer: "The Irascible",
     }),
      shuffleOptions({
        question:
          "What legislative suggestion did King Hermann make regarding women's voting rights?",
        optionA: "Optional voting for women",
        optionB: "Compulsory voting for women",
        optionC: "Abolishing women's voting rights",
        correctAnswer: "Compulsory voting for women",
     }),
      shuffleOptions({
        question:
          "What penalty did female electors face for failing to vote in elections?",
        optionA: "5 pounds",
        optionB: "10 pounds",
        optionC: "No penalty",
        correctAnswer: "10 pounds",
     }),
      shuffleOptions({
        question:
          "What impact did the Compulsory Female Franchise have on society women's arrangements?",
        optionA: "No impact",
        optionB: "Impeded and upset arrangements",
        optionC: "Improved arrangements",
        correctAnswer: "Impeded and upset arrangements",
     }),
      shuffleOptions({
        question:
          "What movement emerged in opposition to female disenfranchisement?",
        optionA: "The Pro-Votes-for-Women League",
        optionB: "The We-Don't-Want-to-Vote League",
        optionC: "The No-Votes-for-Women League",
        correctAnswer: "The No-Votes-for-Women League",
     }),
      shuffleOptions({
        question: "What method did some women use as a last resort to protest?",
        optionA: "Violent protests",
        optionB: "Organizing elections",
        optionC: "The Great Weep",
        correctAnswer: "The Great Weep",
     }),
      shuffleOptions({
        question: "What was the government's response to the Great Weep?",
        optionA: "They granted women the right to vote.",
        optionB: "They continued to support women's voting rights.",
        optionC:
          "They yielded and passed a measure depriving women of the right to vote.",
        correctAnswer:
          "They yielded and passed a measure depriving women of the right to vote.",
     }),
      shuffleOptions({
        question:
          "What does King Hermann say about 'killing a cat' at the end of the text?",
        optionA: "He prefers choking it with cream.",
        optionB: "He prefers other methods.",
        optionC: "He is unsure about the best method.",
        correctAnswer: "He prefers other methods.",
     }),
      shuffleOptions({
        question:
          "What is King Hermann's second nickname mentioned in the text?",
        optionA: "The Wise",
        optionB: "The Generous",
        optionC: "The Compassionate",
        correctAnswer: "The Wise",
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
          "In the second decade of the twentieth century, Hermann the Irascible, nicknamed also the Wise, sat on the British throne as the ruler of the British dominions within and beyond the seas. He was considered the most ______________ monarch.",
        options: ["Progressive", "Conservative", "Controversial"],
        correctAnswer: "Progressive",
     }),
      shuffleOptions({
        question:
          "The Prime Minister admitted that they were hampered by the 'votes-for-women' people, who disturbed their meetings throughout the country and tried to turn the capital into a sort of political picnic ground. The Prime Minister asked King Hermann how they should be ______________.",
        options: ["Supported", "Ignored", "Dealt with"],
        correctAnswer: "Dealt with",
     }),
      shuffleOptions({
        question:
          "King Hermann proposed drafting a Bill that would make it ______________ for women to vote at all future elections.",
        options: ["Optional", "Compulsory", "Conditional"],
        correctAnswer: "Compulsory",
     }),
      shuffleOptions({
        question:
          "Failure to vote at any election falling within her area of residence would involve the female elector in a penalty of ______________ pounds.",
        options: ["5", "10", "20"],
        correctAnswer: "10",
     }),
      shuffleOptions({
        question:
          "The Compulsory Female Franchise did not produce much elation, even among those who had been the loudest in demanding the vote. The most fanatical Suffragettes began to wonder what they had found so attractive in the prospect of putting ______________ into a box.",
        options: ["Ballot-papers", "Money", "Flowers"],
        correctAnswer: "Ballot-papers",
     }),
      shuffleOptions({
        question:
          "In the country districts, the task of carrying out the provisions of the new Act was ______________ enough, while in the towns and cities, it became an incubus.",
        options: ["Enjoyable", "Irksome", "Exciting"],
        correctAnswer: "Irksome",
     }),
      shuffleOptions({
        question:
          "Society women found their arrangements impeded and upset by the continual necessity for attending the polling stations, and weekend parties and summer holidays became gradually a masculine ______________.",
        options: ["Necessity", "Luxury", "Inconvenience"],
        correctAnswer: "Luxury",
     }),
      shuffleOptions({
        question:
          "The No-Votes-for-Women League, with its flags flaunted everywhere, became a formidable movement, and its battle hymn, 'We Don't Want to Vote,' became a popular ______________.",
        options: ["Refrain", "Jingle", "Anthem"],
        correctAnswer: "Refrain",
     }),
      shuffleOptions({
        question:
          "As a last resort, some woman hit upon an expedient, and the Great Weep was organized, with relays of women, ten thousand at a time, weeping continuously in the public places of the ______________.",
        options: ["Countryside", "Metropolis", "Seaside"],
        correctAnswer: "Metropolis",
     }),
      shuffleOptions({
        question:
          "King Hermann quoted, 'There are more ways of killing a cat than by choking it with cream.' This statement implies that there are various approaches to solving a problem, and sometimes the most unexpected one might be the ______________.",
        options: ["Most obvious", "Most effective", "Best way"],
        correctAnswer: "Best way",
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
          "England was ruled by King Hermann the Irascible in the second decade of the twentieth century.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "King Hermann's nickname was 'The Generous.'",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The Prime Minister was pleased with the votes-for-women movement.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "King Hermann proposed a Bill to make voting for women optional.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Failure to vote in elections could result in a 5-pound penalty for women.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The Compulsory Female Franchise had a positive impact on society women's arrangements.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The No-Votes-for-Women League supported the idea of women's suffrage.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The government was easily persuaded by peaceful protests.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The Great Weep was organized as a violent protest by women.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "King Hermann preferred choking a cat with cream to other methods.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
