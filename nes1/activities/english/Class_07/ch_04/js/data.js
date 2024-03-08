export const chapter = "Chapter - 4: fhe Endless Wait";
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
          "In which city were the two friends, Riley and the narrator, working as newspaper correspondents?",
        optionA: "New York",
        optionB: "San Francisco",
        optionC: "Washington",
        correctAnswer: "Washington",
     }),
      shuffleOptions({
        question:
          "What was the stranger's name who stopped Riley and the narrator on Pennsylvania Avenue?",
        optionA: "Mr. Riley",
        optionB: "Mr. Lykins",
        optionC: "Mr. Gadsby",
        correctAnswer: "Mr. Lykins",
     }),
      shuffleOptions({
        question:
          "What was Mr. Lykins' purpose in stopping Riley and the narrator?",
        optionA: "To offer them a job",
        optionB: "To ask for directions",
        optionC: "To seek their help with a petition",
        correctAnswer: "To seek their help with a petition",
     }),
      shuffleOptions({
        question: "What position was Mr. Lykins trying to obtain?",
        optionA: "Postmaster of San Francisco",
        optionB: "Superintendent of Public Instruction",
        optionC: "Schoolteacher at the high school",
        correctAnswer: "Postmaster of San Francisco",
     }),
      shuffleOptions({
        question:
          "What did Mr. Lykins bring with him to present to the Pacific delegation?",
        optionA: "A newspaper article",
        optionB: "A petition with signatures",
        optionC: "A letter of recommendation",
        correctAnswer: "A petition with signatures",
     }),
      shuffleOptions({
        question: "What did Mr. Lykins want from the Pacific delegation?",
        optionA: "A plane ticket to San Francisco",
        optionB: "A promise of support for his appointment",
        optionC: "A guided tour of Washington, D.C.",
        correctAnswer: "A promise of support for his appointment",
     }),
      shuffleOptions({
        question: "When did Mr. Lykins plan to leave for San Francisco?",
        optionA: "Tomorrow evening",
        optionB: "Next week",
        optionC: "In a month",
        correctAnswer: "Tomorrow evening",
     }),
      shuffleOptions({
        question:
          "What story did Riley tell Mr. Lykins about a man who stayed at Hotel Gadsby?",
        optionA: "A story about a wealthy traveler",
        optionB: "A story about a never-ending journey",
        optionC: "A story about a famous president",
        correctAnswer: "A story about a never-ending journey",
     }),
      shuffleOptions({
        question:
          "How did the man in Riley's story change his mode of transportation over time?",
        optionA: "He kept upgrading to more luxurious options",
        optionB: "He consistently used a four-horse carriage",
        optionC: "He preferred walking and traveling on foot",
        correctAnswer: "He kept upgrading to more luxurious options",
     }),
      shuffleOptions({
        question: "What did Mr. Lykins do after hearing Riley's story?",
        optionA: "He asked for more stories",
        optionB: "He decided to stay at Gadsby's hotel",
        optionC: "He rushed off to San Francisco",
        correctAnswer: "He rushed off to San Francisco",
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
          "One evening, when my friend Riley and I were newspaper correspondents in Washington, in the winter of '67, we were coming down Pennsylvania Avenue. The flash of a street-lamp fell upon a man who was eagerly tearing along in the opposite direction. This man instantly stopped and exclaimed: 'This is lucky! You are Mr. ________, aren't you?'",
        options: ["Peter", "Lykins", "Riley"],
        correctAnswer: "Lykins",
     }),
      shuffleOptions({
        question: "'Yes, I am Mr. Riley. Did you happen to be looking for me?'",
        options: ["Lykins", "Washington", "Pennsylvania"],
        correctAnswer: "Lykins",
     }),
      shuffleOptions({
        question:
          "That's just what I was doing,' said the man, joyously, 'and it's the biggest luck in the world that I've found you. My name is ________. I'm one of the teachers of the high school in San Francisco.'",
        options: ["Peter", "Lykins", "Riley"],
        correctAnswer: "Lykins",
     }),
      shuffleOptions({
        question:
          "'As soon as I heard the San Francisco postmastership vacant, I made up my mind to get it and here I am.'",
        options: ["President", "Teacher", "Postmastership"],
        correctAnswer: "Postmastership",
     }),
      shuffleOptions({
        question:
          "'If the matter is so pressing, you will prefer that we visit the delegation tonight,' said Riley, in a voice which had nothing mocking in it to an unaccustomed ear.",
        options: ["Pressing", "Delegation", "Riley"],
        correctAnswer: "Delegation",
     }),
      shuffleOptions({
        question:
          "'Oh, tonight, by all means! I haven't got any time to fool around. I want their promise before I go to bed. I am not the talking kind, I'm the ________ kind!'",
        options: ["Doing", "Riley", "Washington"],
        correctAnswer: "Doing",
     }),
      shuffleOptions({
        question: "'When did you arrive?'",
        options: ["Leave", "Arrive", "Bed"],
        correctAnswer: "Arrive",
     }),
      shuffleOptions({
        question: "'Just an hour ago.'",
        options: ["Evening", "Hour", "San Francisco"],
        correctAnswer: "Hour",
     }),
      shuffleOptions({
        question:
          "What did the man plan to do after getting the appointment from the President?",
        options: [
          "Visit the Senate",
          "Leave for New York",
          "Take a vacation in Washington, D.C.",
        ],
        correctAnswer: "Leave for New York",
     }),
      shuffleOptions({
        question:
          "How many novels of Byomkesh Bakshi were adapted for the Sunday Suspense series of 98.3 Radio Mirchi (Kolkata)?",
        options: ["Five", "Seven", "Ten"],
        correctAnswer: "Seven",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mr. Lykins approached Mr. Riley on Pennsylvania Avenue.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Mr. Lykins was looking for someone other than Mr. Riley.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Mr. Lykins wanted to secure a teaching position in Washington.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Mr. Lykins planned to visit the President to secure the San Francisco postmastership.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Mr. Lykins was willing to stay in Washington for an extended period.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Mr. Riley narrated a story about a man from Tennessee.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The man from Tennessee bought a second-hand carriage on February 5th.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The man from Tennessee gradually upgraded his mode of transportation.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The man from Tennessee eventually decided to travel on foot to Tennessee.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The storyteller, Mr. Riley, continued to share stories about the man from Tennessee.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
