export const chapter = "Chapter - 18:The Grand Chapatti Contest";
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
        question: "What was the one thing that made the king angry?",
        options: [
          "A. When the queen used his silver hairbrush on the royal dog.",
          "B. When the servants forgot to line his shoes with feathers.",
          "C. When he wasn't served perfectly round chapattis.",
        ],
        answer: "C",
     }),
      shuffleOptions({
        question: "Why did the queen decide to hold a Grand Chapatti Contest?",
        options: [
          "A. To find a new king.",
          "B. To find a new queen.",
          "C. To find a new chief chapatti cook.",
        ],
        answer: "C",
     }),
      shuffleOptions({
        question: "What did the king love to eat for every meal?",
        options: [
          "A. Buttered chapattis.",
          "B. Chapattis with raisins.",
          "C. Perfectly round, soft, fluffy-puffy chapattis.",
        ],
        answer: "C",
     }),
      shuffleOptions({
        question: "What was Meena's family's main food?",
        options: [
          "A. Buttered chapattis.",
          "B. Plain chapattis with boiled peanuts.",
          "C. Spinach-flavored chapattis.",
        ],
        answer: "B",
     }),
      shuffleOptions({
        question:
          "What type of chapattis were the other cooks making for the contest?",
        options: [
          "A. Round chapattis.",
          "B. Square chapattis.",
          "C. A variety of unique and exotic chapattis.",
        ],
        answer: "C",
     }),
      shuffleOptions({
        question:
          "Why did the king refuse to taste some of the chapattis brought to him?",
        options: [
          "A. They were too spicy.",
          "B. They were not perfectly round.",
          "C. They were too cold and hard.",
        ],
        answer: "B",
     }),
      shuffleOptions({
        question:
          "What happened to the chapatti filled with nuts when the king tasted it?",
        options: [
          "A. It floated away.",
          "B. It turned into a butterfly.",
          "C. It remained perfectly intact.",
        ],
        answer: "C",
     }),
      shuffleOptions({
        question:
          "How did Meena's mother ensure that her chapattis stayed hot and soft for the king?",
        options: [
          "A. She used a special pump.",
          "B. She made them on a little clay stove.",
          "C. She served them on a silver plate.",
        ],
        answer: "B",
     }),
      shuffleOptions({
        question:
          "How many chapattis did the king eat, made by Meena's mother?",
        options: ["A. Five", "B. Ten", "C. Fifteen"],
        answer: "C",
     }),
      shuffleOptions({
        question: "What was the reward for winning the Grand Chapatti Contest?",
        options: [
          "A. A bag of gold coins and a job as the chief chapatti cook.",
          "B. A bag of peanuts and a royal title.",
          "C. A bag of silver coins and a holiday in the Himalayas.",
        ],
        answer: "A",
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
          "There once ruled a king who hardly ever got angry. He did not get angry when the queen polished his golden crown with black polish or when she used his silver hairbrush to brush the royal ____________.",
        options: ["dog", "cat", "parrot"],
        correctAnswer: "dog",
     }),
      shuffleOptions({
        question:
          "There was only one thing that made the king angry. And that was when he was not served perfectly round, soft, ____________ chapattis for his meals.",
        options: ["crispy", "fluffy-puffy", "hard"],
        correctAnswer: "fluffy-puffy",
     }),
      shuffleOptions({
        question:
          "When the royal kitchen's chief chapatti cook left his job and went away to become a holy man, the queen decided to hold a Grand Chapatti Contest. She invited everyone in the kingdom to take part and announced that the winner would be given a bag of ____________ as a prize.",
        options: ["peanuts", "gold coins", "diamonds"],
        correctAnswer: "gold coins",
     }),
      shuffleOptions({
        question:
          "The king refused to taste the ____________ chapatti when it was brought to him, saying, 'I like only round chapattis!'",
        options: ["square", "butterfly-shaped", "colorful"],
        correctAnswer: "butterfly-shaped",
     }),
      shuffleOptions({
        question:
          "The cook who had made a chapatti so soft and fine that one could actually look through it carried it carefully to the king. As it neared the table, a petal from one of the flowers in the garden fell on the soft, fine chapatti and it ____________ into half.",
        options: ["floated", "tore", "expanded"],
        correctAnswer: "tore",
     }),
      shuffleOptions({
        question: "'I can't eat torn ____________,' said the king.",
        options: ["cake", "chapattis", "cookies"],
        correctAnswer: "chapattis",
     }),
      shuffleOptions({
        question:
          "How many chapattis did the king eat, made by Meena's mother?",
        options: ["Five", "Ten", "Fifteen"],
        correctAnswer: "Fifteen",
     }),
      shuffleOptions({
        question: "What was the reward for winning the Grand Chapatti Contest?",
        options: [
          "A bag of gold coins and a job as the chief chapatti cook.",
          "A bag of peanuts and a royal title.",
          "A bag of silver coins and a holiday in the Himalayas.",
        ],
        correctAnswer:
          "A bag of gold coins and a job as the chief chapatti cook.",
     }),
      shuffleOptions({
        question:
          "Meena's family could only afford to eat plain chapattis with ____________ or plain chapattis with peanut chutney, or sometimes just plain chapattis with a slice of raw onion.",
        options: ["raisins", "butter", "ketchup"],
        correctAnswer: "butter",
     }),
      shuffleOptions({
        question:
          "How did Meena's mother ensure that her chapattis stayed hot and soft for the king? She made them on a little clay stove kept on a ____________.",
        options: ["silver plate", "moonstone rolling board", "pushcart"],
        correctAnswer: "pushcart",
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
          "The king got angry when the queen polished his golden crown with black polish.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The king wanted perfectly round, soft, fluffy-puffy chapattis for every meal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Meena's family was able to afford a variety of luxurious foods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The king ate chapattis made by Meena's mother even when they were not perfectly round.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The Grand Chapatti Contest involved preparing a variety of unique and exotic chapattis.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The king enjoyed eating butterfly-shaped chapattis.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The king ate fifteen chapattis made by Meena's mother.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The reward for winning the Grand Chapatti Contest was a holiday in the Himalayas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Meena's family usually ate chapattis with peanut chutney.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Meena's mother made chapattis on a silver plate.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
