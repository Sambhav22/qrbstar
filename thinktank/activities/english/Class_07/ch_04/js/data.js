export const chapter = "Chapter -4: The Endless Wait";
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
            "What was Riley's occupation in Washington during the winter of '67?",
          optionA: "Teacher",
          optionB: "Newspaper Correspondent",
          optionC: "Postmaster",
          correctAnswer: "Newspaper Correspondent",
        }),
      shuffleOptions({
          question:
            "How did Mr. Lykins recognize Riley when they met on Pennsylvania Avenue?",
          optionA: "By his distinctive attire",
          optionB: "By his name tag",
          optionC: "By asking around",
          correctAnswer: "By his distinctive attire",
        }),
      shuffleOptions({
          question:
            "What did Mr. Lykins bring with him to support his application for the San Francisco postmastership?",
          optionA: "A resume",
          optionB: "A petition signed by various people",
          optionC: "A letter of recommendation from the President",
          correctAnswer: "A petition signed by various people",
        }),
      shuffleOptions({
          question:
            "When did Mr. Lykins plan to leave Washington for San Francisco?",
          optionA: "Tomorrow morning",
          optionB: "Tomorrow evening",
          optionC: "In two days",
          correctAnswer: "Tomorrow evening",
        }),
      shuffleOptions({
          question: "What event did Mr. Lykins mention happening at 2 P.M.?",
          optionA: "Appointment confirmation",
          optionB: "Executive session of the Senate",
          optionC: "Presidential meeting",
          correctAnswer: "Executive session of the Senate",
        }),
      shuffleOptions({
          question:
            "What did Riley ask Mr. Lykins about staying a day or two longer?",
          optionA: "To join him for dinner",
          optionB: "To accompany him on a sightseeing tour",
          optionC: "To delay his departure",
          correctAnswer: "To delay his departure",
        }),
      shuffleOptions({
          question:
            "What was the old man's reason for selling his carriage, horses, and other belongings?",
          optionA: "Lack of interest",
          optionB: "Financial difficulties",
          optionC: "Preference for a simpler lifestyle",
          correctAnswer: "Preference for a simpler lifestyle",
        }),
      shuffleOptions({
          question:
            "Where did the old man plan to go after selling all his possessions?",
          optionA: "New York",
          optionB: "Tennessee",
          optionC: "San Francisco",
          correctAnswer: "Tennessee",
        }),
      shuffleOptions({
          question: "Why did the old man sell his dog?",
          optionA: "The dog was aggressive",
          optionB: "He needed money",
          optionC: "The dog was a nuisance",
          correctAnswer: "The dog was a nuisance",
        }),
      shuffleOptions({
          question:
            "Why did Riley tell Mr. Lykins the story about the old man?",
          optionA: "To waste time",
          optionB: "To entertain him",
          optionC: "To convince him to stay longer",
          correctAnswer: "To convince him to stay longer",
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
            "One evening in the winter of '67, Riley and I, newspaper correspondents in Washington, were coming down ________________ Avenue.",
          optionA: "New York",
          optionB: "San Francisco",
          optionC: "Pennsylvania",
          correctAnswer: "Pennsylvania",
        }),
      shuffleOptions({
          question:
            "Mr. Lykins, a teacher from the high school in San Francisco, was eagerly tearing along in the opposite direction, looking for ________________.",
          optionA: "A newspaper",
          optionB: "A postmaster",
          optionC: "Riley",
          correctAnswer: "Riley",
        }),
      shuffleOptions({
          question:
            "Riley asked Mr. Lykins if he had ________________ for the San Francisco postmastership.",
          optionA: "A resume",
          optionB: "A petition",
          optionC: "A recommendation letter",
          correctAnswer: "A petition",
        }),
      shuffleOptions({
          question:
            "Mr. Lykins planned to leave Washington for San Francisco the ________________ evening.",
          optionA: "Tomorrow",
          optionB: "Tonight",
          optionC: "Two days later",
          correctAnswer: "Tomorrow",
        }),
      shuffleOptions({
          question:
            "Riley suggested that Mr. Lykins visit the Pacific delegation ________________ to rush the petition through.",
          optionA: "Today",
          optionB: "Tonight",
          optionC: "Tomorrow",
          correctAnswer: "Tonight",
        }),
      shuffleOptions({
          question:
            "The executive session of the Senate, where Mr. Lykins needed the appointment confirmed, was scheduled for ________________.",
          optionA: "12 P.M.",
          optionB: "2 P.M.",
          optionC: "4 P.M.",
          correctAnswer: "2 P.M.",
        }),
      shuffleOptions({
          question:
            "Riley asked Mr. Lykins if he could stay ________________ longer before leaving for San Francisco.",
          optionA: "A day",
          optionB: "Two days",
          optionC: "A week",
          correctAnswer: "Two days",
        }),
      shuffleOptions({
          question:
            "The old man in Riley's story sold his carriage and bought a cheap second-hand ________________.",
          optionA: "Horse",
          optionB: "Buggy",
          optionC: "Bicycle",
          correctAnswer: "Buggy",
        }),
      shuffleOptions({
          question:
            "The old man decided to ride bareback because he believed it was ________________ for a trip through the spring woods.",
          optionA: "Safer",
          optionB: "Faster",
          optionC: "Cheaper",
          correctAnswer: "Safer",
        }),
      shuffleOptions({
          question:
            "Riley told Mr. Lykins the story about the old man to convince him to ________________ at Gadsby's and take it easy.",
          optionA: "Rush",
          optionB: "Delay",
          optionC: "Leave",
          correctAnswer: "Delay",
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
            "One evening in the winter of '67, Riley and I were heading down Pennsylvania Avenue.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Mr. Lykins recognized Riley and was looking for the San Francisco postmastership.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Riley suggested Mr. Lykins delay his departure by two days.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The executive session of the Senate for appointment confirmation was scheduled for 4 P.M.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The old man in Riley's story sold his carriage and bought a horse.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Mr. Lykins planned to leave for San Francisco the morning after meeting Riley.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The old man sold his dog because it was a perfect companion for his journey.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Riley told Mr. Lykins the story to entertain him during their meeting.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The last complete story of Byomkesh Bakshi, Lahar Biscuit, was published in 1969.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Byomkesh Bakshi prefers to be called 'Sherlock' instead of 'detective'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
