export const chapter = "Chapter - 7: Interlinking of Rivers ";
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
          "What is the primary source of water for India's agriculture during the monsoon season?",
        optionA: "Groundwater",
        optionB: "Perennial rivers from the northern mountains",
        optionC: "Lakes and reservoirs",
        correctAnswer: "optionB. Perennial rivers from the northern mountains",
     }),
      shuffleOptions({
        question:
          "What is the major problem associated with India's water resources mentioned in the text?",
        optionA: "Excess of water causing floods",
        optionB: "Decreased amount of water sipping underground",
        optionC: "Abundance of water throughout the year",
        correctAnswer: "optionB. Decreased amount of water sipping underground",
     }),
      shuffleOptions({
        question:
          "What is the concept of interlinking of rivers aimed at achieving in India?",
        optionA: "Reducing the overall water supply",
        optionB:
          "Increasing irrigation intensity and tackling droughts and floods",
        optionC: "Storing surplus water in large dams",
        correctAnswer:
          "optionB. Increasing irrigation intensity and tackling droughts and floods",
     }),
      shuffleOptions({
        question:
          "Which of the following is NOT mentioned as an issue related to interlinking of rivers?",
        optionA: "Environmental concerns",
        optionB: "Cultural and religious impacts",
        optionC: "Positive effects on agricultural production",
        correctAnswer: "optionC. Positive effects on agricultural production",
     }),
      shuffleOptions({
        question:
          "How has India's population changed from 1951 to the present, according to the text?",
        optionA: "Decreased significantly",
        optionB: "Remained roughly the same",
        optionC: "Increased dramatically",
        correctAnswer: "optionC. Increased dramatically",
     }),
      shuffleOptions({
        question:
          "What is the expected per capita availability of water in India by 2025, as mentioned in the text?",
        optionA: "5.20 thousand cubic meters per annum",
        optionB: "1.80 thousand cubic meters per annum",
        optionC: "1.34 thousand cubic meters per annum",
        correctAnswer: "optionC. 1.34 thousand cubic meters per annum",
     }),
      shuffleOptions({
        question:
          "Which region of India is primarily rain-fed and water-deficient, according to the text?",
        optionA: "Northern plains",
        optionB: "Plateau region",
        optionC: "South India",
        correctAnswer: "optionB. Plateau region",
     }),
      shuffleOptions({
        question:
          "What is one potential benefit of interlinking rivers, as mentioned in the text?",
        optionA: "Decreasing the need for large dams",
        optionB: "Reducing state objections and conflicts",
        optionC: "Raising the income levels of people in adjoining areas",
        correctAnswer:
          "optionC. Raising the income levels of people in adjoining areas",
     }),
      shuffleOptions({
        question:
          "Which of the following South Indian river projects is mentioned as an example of interlinking of rivers in the text?",
        optionA: "Ganges-Yamuna Link",
        optionB: "Telugu-Ganga projects",
        optionC: "Brahmaputra-Sutlej Canal",
        correctAnswer: "optionB. Telugu-Ganga projects",
     }),
      shuffleOptions({
        question:
          "What major issue is raised about the interlinking of rivers in the text?",
        optionA: "The lack of government support for the idea",
        optionB:
          "The potential for adverse impacts on social, cultural, and religious traditions",
        optionC: "The high cost of implementing the project",
        correctAnswer:
          "optionB. The potential for adverse impacts on social, cultural, and religious traditions",
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
          "What is the primary source of water for India's agriculture during the monsoon season? Options: a) Groundwater b) Perennial rivers from the northern mountains c) Lakes and reservoirs",
        correctAnswer: "b) Perennial rivers from the northern mountains",
     }),
      shuffleOptions({
        question:
          "The major part of rainfall occurs in the __________ season in India. Options: a) Winter b) Monsoon c) Spring",
        correctAnswer: "b) Monsoon",
     }),
      shuffleOptions({
        question:
          "The idea of interlinking of rivers aims to transfer excess water from water-surplus regions to water-deficient regions, especially in the ________ region. Options: a) Coastal b) Plateau c) Desert",
        correctAnswer: "b) Plateau",
     }),
      shuffleOptions({
        question:
          "The lack of government support for the idea, the potential for adverse impacts on social, cultural, and religious traditions, and the high cost of implementing the project are major __________ to the interlinking of rivers. Options: a) Benefits b) Objections c) Achievements",
        correctAnswer: "b) Objections",
     }),
      shuffleOptions({
        question:
          "The per capita availability of water in India is expected to slip further to ________ thousand cubic meters per annum by 2025. Options: a) 1.80 b) 2.50 c) 1.34",
        correctAnswer: "c) 1.34",
     }),
      shuffleOptions({
        question:
          "The Periyar Project, the Parambikulam Aliyar Project, the Kurnool-Cudappah Canal, and the Telugu-Ganga projects are examples of interlinking of rivers in ________ India. Options: a) South b) North c) Western",
        correctAnswer: "a) South",
     }),
      shuffleOptions({
        question:
          "Our rapidly-growing population, leading to increasing urbanization and industrialization, are resulting in a ________ of fresh water. Options: a) Surplus b) Shortage c) Stagnation",
        correctAnswer: "b) Shortage",
     }),
      shuffleOptions({
        question:
          "A detailed study about its possible effects is needed before massive work can be started for the interlinking of rivers, especially because many of India's rivers flow through ________. Options: a) Lakes b) Neighboring countries c) Dams",
        correctAnswer: "b) Neighboring countries",
     }),
      shuffleOptions({
        question:
          "India's economy is primarily driven by the ________ monsoon, which supplies water to a large part of the country in the months of June to September. Options: a) Winter b) Southwest c) Spring",
        correctAnswer: "b) Southwest",
     }),
      shuffleOptions({
        question:
          "India's population has increased dramatically from about 36.1 crore in 1951 to well over ________ crore at present. Options: a) 70 b) 90 c) 135",
        correctAnswer: "c) 135",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Indian Museum, Kolkata, is the oldest museum in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The Calico Museum of Textiles focuses mainly on paintings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The National Rail Museum is primarily devoted to maritime history.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The gardener in the text is always clean while working.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The hawker cries out 'Bangles, crystal bangles!' in the morning.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The watchman carries a broom while doing his job.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The Air Force Museum, Palam, New Delhi, is focused on the Indian Army.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The Napier Museum, Thiruvananthapuram, was originally established in 1857.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The museum collection at the Indian Museum, Kolkata, does not include statues and sculpture.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The narrator wishes they were a watchman to walk the streets all day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
