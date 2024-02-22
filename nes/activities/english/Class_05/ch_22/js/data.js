export const chapter = "Chapter - 22: Fair Play  ";
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
          "What caused the initial tension between Jumman and his aunt?",
        optionA: "Jumman's indifference to his aunt",
        optionB: "His aunt's refusal to live with Jumman's family",
        optionC: "Jumman's frequent trips out of the village",
        correctAnswer: "Jumman's indifference to his aunt",
     }),
      shuffleOptions({
        question:
          "How did Jumman respond to his aunt's request for a monthly allowance?",
        optionA: "He agreed to provide her with a monthly allowance.",
        optionB: "He asked his wife to be more considerate to his aunt.",
        optionC: "He refused to provide her with a monthly allowance.",
        correctAnswer: "He refused to provide her with a monthly allowance.",
     }),
      shuffleOptions({
        question: "What is the significance of the Panchayat in the story?",
        optionA: "It is a village festival.",
        optionB: "It is a gathering of friends.",
        optionC: "It is a council of village elders that resolves disputes.",
        correctAnswer:
          "It is a council of village elders that resolves disputes.",
     }),
      shuffleOptions({
        question:
          "What is the outcome of the Panchayat's decision regarding Jumman and his aunt?",
        optionA: "Jumman is ordered to pay a monthly allowance.",
        optionB: "Jumman's aunt is asked to return the property to him.",
        optionC: "The Panchayat declares their friendship as null and void.",
        correctAnswer: "Jumman is ordered to pay a monthly allowance.",
     }),
      shuffleOptions({
        question:
          "Why does Algu Choudhary seek the help of the Panchayat later in the story?",
        optionA: "He wants a loan from the Panchayat.",
        optionB: "He is involved in a dispute over a bullock.",
        optionC:
          "He is looking for advice on how to mend his friendship with Jumman.",
        correctAnswer: "He is involved in a dispute over a bullock.",
     }),
      shuffleOptions({
        question: "What does Sahu propose during the second Panchayat?",
        optionA: "He suggests Jumman as the head Panch.",
        optionB: "He insists on Algu as the head Panch.",
        optionC: "He offers to pay Algu for the dead bullock.",
        correctAnswer: "He suggests Jumman as the head Panch.",
     }),
      shuffleOptions({
        question:
          "How does Jumman handle the situation when he becomes the head Panch?",
        optionA: "He uses his position for personal revenge.",
        optionB: "He ensures justice is served impartially.",
        optionC: "He refuses to make a decision.",
        correctAnswer: "He ensures justice is served impartially.",
     }),
      shuffleOptions({
        question:
          "What does Algu realize about the role of a Panch after the second Panchayat?",
        optionA: "A Panch should favor friends over justice.",
        optionB: "A Panch must uphold justice without bias.",
        optionC: "A Panch's decisions should prioritize personal feelings.",
        correctAnswer: "A Panch must uphold justice without bias.",
     }),
      shuffleOptions({
        question:
          "How do Jumman and Algu reconcile their friendship in the end?",
        optionA: "They agree to forget the past and move on.",
        optionB: "They never reconcile, and their friendship remains broken.",
        optionC:
          "They embrace each other and weep, resolving their misunderstandings.",
        correctAnswer:
          "They embrace each other and weep, resolving their misunderstandings.",
     }),
      shuffleOptions({
        question: "What is the central message of the story?",
        optionA: "Friendship is more important than justice.",
        optionB: "Personal feelings should always influence decisions.",
        optionC:
          "Justice and truth should not be compromised for the sake of friendship or enmity.",
        correctAnswer:
          "Justice and truth should not be compromised for the sake of friendship or enmity.",
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
          "The strong bond of ____________ existed between Jumman Sheikh and Algu Choudhary.",
        options: ["love", "friendship", "enmity"],
        correctAnswer: "friendship",
     }),
      shuffleOptions({
        question:
          "Jumman's old aunt transferred her property to him with the understanding that he would look after her, but after a while, his family became _________ towards her.",
        options: ["affectionate", "indifferent", "respectful"],
        correctAnswer: "indifferent",
     }),
      shuffleOptions({
        question:
          "The old lady wanted a monthly allowance to set up a separate kitchen because she felt __________ in Jumman's house.",
        options: ["respected", "loved", "unwanted"],
        correctAnswer: "unwanted",
     }),
      shuffleOptions({
        question:
          "The old lady sought the support of the villagers and eventually approached Algu Choudhary, who was known for his _________.",
        options: ["laughter", "sympathy", "indifference"],
        correctAnswer: "sympathy",
     }),
      shuffleOptions({
        question:
          "Jumman and Algu decided to resolve the dispute through the village __________.",
        options: ["festival", "Panchayat", "council"],
        correctAnswer: "Panchayat",
     }),
      shuffleOptions({
        question:
          "When Algu became the head Panch, Jumman accepted the Panchayat's decision and realized the ________ of his office.",
        options: ["insignificance", "dignity", "personal bias"],
        correctAnswer: "dignity",
     }),
      shuffleOptions({
        question:
          "In the second dispute, Algu was involved in a conflict over a _________.",
        options: ["horse", "bicycle", "bullock"],
        correctAnswer: "bullock",
     }),
      shuffleOptions({
        question:
          "When Sahu proposed Jumman as the head Panch during the second Panchayat, Algu had no _________.",
        options: ["choice", "objection", "sympathy"],
        correctAnswer: "objection",
     }),
      shuffleOptions({
        question:
          "Jumman's decision as the head Panch was to ensure that justice was served _________.",
        options: ["impartially", "favoring his friends", "with personal bias"],
        correctAnswer: "impartially",
     }),
      shuffleOptions({
        question:
          "The story's central message is that justice and truth should not be compromised for the sake of ________ or enmity.",
        options: ["rivalry", "friendship", "indifference"],
        correctAnswer: "friendship",
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
          "The white people in South Africa ruled the country during the mentioned period.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Black laborers in South Africa were not allowed to enter whites-only areas for work without a permit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The black man with the permit chose to hide instead of running when they saw the approaching policeman.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The policeman caught the second man without a permit and let him go after seeing his permit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The first black man with a permit ran to trick the policeman into believing he didn't have one.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Both of the black men were running for their health, as advised by their doctors.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The second man didn't stop running when he saw the policeman because he thought the policeman had been ordered to run by his doctor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The text suggests that the white people in South Africa treated black people equally in all areas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The black man with the permit initially refused to run when the policeman approached them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The second man without a permit was eventually caught by the policeman.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
