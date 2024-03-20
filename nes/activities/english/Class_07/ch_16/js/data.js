export const chapter = "Chapter -16:Bose and Chaki";
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
            "Who was the Chief Presidency Magistrate of Calcutta during the early phase of revolutionaries in India?",
          optionA: "Savarkar",
          optionB: "Kingsford",
          optionC: "Bhagat Singh",
          correctAnswer: "Kingsford",
        }),
      shuffleOptions({
          question:
            "What event triggered the revolutionaries' revolt against Kingsford?",
          optionA: "Unjust imprisonment of Bhagat Singh",
          optionB: "Atrocities on Savarkar",
          optionC: "Death sentences for writing articles and pamphlets",
          correctAnswer:
            "Death sentences for writing articles and pamphlets",
        }),
      shuffleOptions({
          question:
            "Who were deputed by the revolutionaries for the mission to take revenge on Kingsford in Muzaffarpur?",
          optionA: "Savarkar and Bhagat Singh",
          optionB: "Khudi Ram Bose and Prafull Kumar Chaki",
          optionC: "Bose and Chaki",
          correctAnswer: "Khudi Ram Bose and Prafull Kumar Chaki",
        }),
      shuffleOptions({
          question:
            "When did the bomb blast targeting Kingsford's carriage take place?",
          optionA: "May 2, 1908",
          optionB: "April 30, 1908",
          optionC: "May 1, 1908",
          correctAnswer: "April 30, 1908",
        }),
      shuffleOptions({
          question:
            "What unfortunate event occurred as a result of the bomb blast?",
          optionA: "Kennedy's wife and daughter sustained injuries",
          optionB: "Kingsford was killed",
          optionC: "The revolutionaries were caught",
          correctAnswer: "Kennedy's wife and daughter sustained injuries",
        }),
      shuffleOptions({
          question:
            "Where did Khudi Ram Bose and Prafull Kumar Chaki escape to after the bomb blast?",
          optionA: "Calcutta",
          optionB: "Samastipur",
          optionC: "Muzaffarpur",
          correctAnswer: "Samastipur",
        }),
      shuffleOptions({
          question: "How did Prafull Kumar Chaki meet his end?",
          optionA: "Executed by hanging",
          optionB: "Shot by police",
          optionC: "Committed suicide",
          correctAnswer: "Committed suicide",
        }),
      shuffleOptions({
          question: "What happened to Khudi Ram Bose after his arrest?",
          optionA: "Released",
          optionB: "Sentenced to death",
          optionC: "Served a long term in prison",
          correctAnswer: "Sentenced to death",
        }),
      shuffleOptions({
          question: "How old was Khudi Ram Bose when he was hanged?",
          optionA: "Seventeen",
          optionB: "Twenty",
          optionC: "Twenty-five",
          correctAnswer: "Seventeen",
        }),
      shuffleOptions({
          question: "What was Khudi Ram Bose's last wish before his execution?",
          optionA: "To be buried in a graveyard",
          optionB: "To be cremated in the jail itself",
          optionC: "To have a state funeral",
          correctAnswer: "To be cremated in the jail itself",
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
          question: "In 1947, India gained her freedom on ________ August.",
          optionA: "14th",
          optionB: "15th",
          optionC: "16th",
          correctAnswer: "15th",
        }),
      shuffleOptions({
          question:
            "The revolutionaries rose in revolt when the British atrocities reached __________ limits.",
          optionA: "Tolerable",
          optionB: "Unbearable",
          optionC: "Reasonable",
          correctAnswer: "Unbearable",
        }),
      shuffleOptions({
          question:
            "Kingsford, the Chief Presidency Magistrate, was transferred to __________ as the District Judge.",
          optionA: "Calcutta",
          optionB: "Muzaffarpur",
          optionC: "Samastipur",
          correctAnswer: "Muzaffarpur",
        }),
      shuffleOptions({
          question:
            "Khudi Ram Bose and Prafull Kumar Chaki planned to blast a bomb to kill Kingsford at his __________.",
          optionA: "Residence",
          optionB: "Club",
          optionC: "Office",
          correctAnswer: "Club",
        }),
      shuffleOptions({
          question:
            "The bomb exploded with a massive boom when hurled towards Kennedy's carriage on April 30, 1908, resulting in severe injuries to __________.",
          optionA: "Khudi Ram Bose",
          optionB: "Kingsford",
          optionC: "Kennedy's daughter",
          correctAnswer: "Kennedy's daughter",
        }),
      shuffleOptions({
          question:
            "After the bomb blast, Bose and Chaki managed to escape by running __________ miles overnight.",
          optionA: "10",
          optionB: "15",
          optionC: "25",
          correctAnswer: "25",
        }),
      shuffleOptions({
          question:
            "Unfortunately, Khudi Ram Bose was arrested on __________, 1908, from the village where they had stayed.",
          optionA: "April 30",
          optionB: "May 1",
          optionC: "May 2",
          correctAnswer: "May 1",
        }),
      shuffleOptions({
          question:
            "Prafull Kumar Chaki, in an attempt to evade arrest, pulled his trigger on himself, making the __________ sacrifice.",
          optionA: "Insignificant",
          optionB: "Supreme",
          optionC: "Unplanned",
          correctAnswer: "Supreme",
        }),
      shuffleOptions({
          question:
            "Khudi Ram Bose was sentenced to death by hanging, and he was only __________ years old at that time.",
          optionA: "Fifteen",
          optionB: "Seventeen",
          optionC: "Twenty",
          correctAnswer: "Seventeen",
        }),
      shuffleOptions({
          question:
            "In his last wish, Khudi Ram Bose wanted to be cremated in the jail itself by his advocate __________.",
          optionA: "Bhagat Singh",
          optionB: "Kalidas Bose",
          optionC: "Savarkar",
          correctAnswer: "Kalidas Bose",
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
          question: "India gained her freedom on 15 August, 1947.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The revolutionaries rose in revolt due to the tolerable British atrocities.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Kingsford, the Chief Presidency Magistrate, was transferred to Samastipur as the District Judge.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Khudi Ram Bose and Prafull Kumar Chaki planned to blast a bomb at Kingsford's residence.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The bomb exploded with a massive boom, causing severe injuries to Khudi Ram Bose.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Bose and Chaki managed to escape by running 10 miles overnight.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Khudi Ram Bose was arrested on May 1, 1908, from the village where they had stayed.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Prafull Kumar Chaki committed suicide when surrounded by the police.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Khudi Ram Bose was sentenced to death by hanging at the age of twenty.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "In his last wish, Khudi Ram Bose wanted to be cremated outside the jail by Bhagat Singh.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
