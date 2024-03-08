export const chapter = "Chapter - 11: Free Gannu";
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
          "What did Beni Ram find when he first encountered Gannu near her mother's body?",
        optionA: "Gannu playing with other baby elephants",
        optionB: "Gannu crying and sitting close to her mother's body",
        optionC: "Gannu peacefully sleeping",
        correctAnswer: "B) Gannu crying and sitting close to her mother's body",
     }),
      shuffleOptions({
        question: "How did Gannu react when Beni Ram first offered her food?",
        optionA: "She happily accepted the food",
        optionB: "She ignored the food and turned away",
        optionC: "She became aggressive",
        correctAnswer: "B) She ignored the food and turned away",
     }),
      shuffleOptions({
        question: "What helped Deo and Gannu develop a bond of trust?",
        optionA: "Deo played with Gannu and fed her bananas",
        optionB: "Deo slept near Gannu in the grain shed",
        optionC: "Deo gave Gannu a pot of water to carry",
        correctAnswer: "B) Deo slept near Gannu in the grain shed",
     }),
      shuffleOptions({
        question:
          "What special task did Gannu take on as she grew older in Beni Ram's household?",
        optionA: "Tending to the fruit trees in the orchard",
        optionB: "Guarding the house at night",
        optionC: "Fetching firewood from the forest",
        correctAnswer: "C) Fetching firewood from the forest",
     }),
      shuffleOptions({
        question: "What was the annual village fair known for?",
        optionA: "Selling fruits and vegetables",
        optionB: "Puppet shows and tightrope walking",
        optionC: "Agricultural competitions",
        correctAnswer: "B) Puppet shows and tightrope walking",
     }),
      shuffleOptions({
        question:
          "How did Gannu react when the wild elephants entered the orchard during the fair?",
        optionA: "She ran away in fear",
        optionB: "She joined the wild elephants",
        optionC: "She defended the orchard and charged at the wild elephants",
        correctAnswer:
          "C) She defended the orchard and charged at the wild elephants",
     }),
      shuffleOptions({
        question:
          "What led Gannu to disappear from Beni Ram's household one day?",
        optionA: "She got lost while collecting firewood",
        optionB: "She followed a group of wild elephants into the forest",
        optionC: "She was taken by hunters",
        correctAnswer:
          "B) She followed a group of wild elephants into the forest",
     }),
      shuffleOptions({
        question:
          "What did Beni Ram see when he encountered Gannu in the forest after she had disappeared?",
        optionA: "Gannu with a group of other elephants",
        optionB: "Gannu alone and in distress",
        optionC: "Gannu with a baby elephant",
        correctAnswer: "C) Gannu with a baby elephant",
     }),
      shuffleOptions({
        question:
          "Why did Beni Ram decide not to bring Gannu back to the village after finding her in the forest?",
        optionA: "Gannu had become aggressive",
        optionB: "Gannu had forgotten him",
        optionC: "Gannu was happy and free in the forest",
        correctAnswer: "C) Gannu was happy and free in the forest",
     }),
      shuffleOptions({
        question: "How did the story end for Gannu and Beni Ram?",
        optionA: "Gannu returned to the village and lived with Beni Ram",
        optionB: "Gannu and her baby lived happily in the forest",
        optionC: "Beni Ram continued to search for Gannu in the forest",
        correctAnswer: "B) Gannu and her baby lived happily in the forest",
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
          "When Beni Ram first encountered Gannu near her mother's body, her leathery face was wet with ___________ tears.",
        correctAnswer: "B) tears",
     }),
      shuffleOptions({
        question: "Gannu ignored Beni Ram when he offered her ___________.",
        correctAnswer: "B) bananas",
     }),
      shuffleOptions({
        question:
          "After Gannu finally accepted Beni Ram's food offering, she raised her head and sniffed his hand with her ___________ trunk.",
        correctAnswer: "B) trunk",
     }),
      shuffleOptions({
        question:
          "Gannu helped carry a pot of water from Kamala by lifting it onto her own back, showing her ___________ strength.",
        correctAnswer: "B) strength",
     }),
      shuffleOptions({
        question:
          "When wild elephants entered the orchard during the village fair, Gannu defended the orchard and charged at the wild elephants, demonstrating her ___________ bravery.",
        correctAnswer: "A) bravery",
     }),
      shuffleOptions({
        question:
          "Deo tried to scare the wild elephants away during the village fair by banging a ___________ against a vessel.",
        correctAnswer: "B) spoon",
     }),
      shuffleOptions({
        question:
          "When Gannu disappeared for many hours, she returned with a bundle of ___________ on her back.",
        correctAnswer: "B) hay",
     }),
      shuffleOptions({
        question:
          "The forest officer informed Beni Ram that hunters had come looking for ___________ tuskers.",
        correctAnswer: "C) tuskers",
     }),
      shuffleOptions({
        question:
          "When Beni Ram saw Gannu and her baby in the forest, he decided not to bring her back to the village because he believed elephants should be ___________ free.",
        correctAnswer: "A) free",
     }),
      shuffleOptions({
        question:
          "The text ends with Beni Ram silently walking away, leaving Gannu and her baby in the forest, as if to say ___________ goodbye.",
        correctAnswer: "B) goodbye",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Beni Ram found Gannu sitting close to her mother's body.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Gannu accepted Beni Ram's food offering on the first day.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Gannu used to help carry firewood from the forest.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Gannu's action of defending the orchard during the village fair demonstrated her shyness.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Deo successfully scared the wild elephants away during the village fair.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Gannu's return to Beni Ram's household was a surprise for the family.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Beni Ram believed that elephants should be domesticated.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Gannu and her baby lived happily in the forest at the end of the story.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The forest officer informed Beni Ram that hunters came to look for fish.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Beni Ram decided to bring Gannu back to the village after finding her in the forest.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
