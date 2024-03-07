export const chapter = "Chapter - 12: At the Top of the World ";
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
        question: "Why do people want to look at mountains for a long time?",
        optionA: "Because they are challenging to climb",
        optionB: "Because they look beautiful and mysterious",
        optionC: "Because they are covered with snow",
        correctAnswer: "Because they look beautiful and mysterious",
     }),
      shuffleOptions({
        question:
          "What makes mountains covered with snow appear more charming?",
        optionA: "The shiny silver appearance",
        optionB: "The challenging climb",
        optionC: "The dangerous nature of mountaineering",
        correctAnswer: "The shiny silver appearance",
     }),
      shuffleOptions({
        question: "What is the highest peak in the world among the Himalayas?",
        optionA: "Mount Kilimanjaro",
        optionB: "Mount K2",
        optionC: "Mount Everest",
        correctAnswer: "Mount Everest",
     }),
      shuffleOptions({
        question:
          "What personal qualities are essential for successful mountaineering?",
        optionA: "Patience and creativity",
        optionB: "Fortitude and courage",
        optionC: "Kindness and humility",
        correctAnswer: "Fortitude and courage",
     }),
      shuffleOptions({
        question: "When did Bachendri Pal's first climb start?",
        optionA: "8 May",
        optionB: "15-16 May",
        optionC: "1 May",
        correctAnswer: "8 May",
     }),
      shuffleOptions({
        question: "What caused an avalanche at Camp III?",
        optionA: "A loud explosion",
        optionB: "A heavy object falling on the camp",
        optionC: "A strong wind blowing",
        correctAnswer: "A loud explosion",
     }),
      shuffleOptions({
        question:
          "What was the temperature at the South Col camp on 23 May, 1984?",
        optionA: "Minus 30 or 40 degrees",
        optionB: "Minus 10 degrees",
        optionC: "Zero degrees",
        correctAnswer: "Minus 30 or 40 degrees",
     }),
      shuffleOptions({
        question: "How many teammates joined Bachendri Pal at the Summit Camp?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        correctAnswer: "Two",
     }),
      shuffleOptions({
        question:
          "What did Bachendri Pal do when she reached the summit of Mount Everest?",
        optionA: "She started climbing down immediately.",
        optionB: "She kissed the peak and said a short prayer.",
        optionC: "She took a long rest.",
        correctAnswer: "She kissed the peak and said a short prayer.",
     }),
      shuffleOptions({
        question:
          "What made Bachendri Pal the first Indian woman to reach the summit of Mount Everest?",
        optionA: "She was the first woman in the world to do so.",
        optionB: "She reached the summit before her teammates.",
        optionC: "She was the fifth woman in the world to reach the summit.",
        correctAnswer:
          "She was the fifth woman in the world to reach the summit.",
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
          "Mountaineering is essentially ________ - - - a team work, but without personal qualities like fortitude and courage, it is hard to succeed.",
        options: ["about", "primarily", "mainly"],
        correctAnswer: "primarily",
     }),
      shuffleOptions({
        question:
          "Bachendri Pal's first climb started on ________ May. She stayed at the Camp II on 9 May. She reached the Camp III on 15-16 May.",
        options: ["7", "8", "10"],
        correctAnswer: "8",
     }),
      shuffleOptions({
        question:
          "Bachendri Pal woke up early morning at 4 a.m. on 23 May, 1984. The temperature was as low as minus 30 or 40 degrees. She and her teammate Ang Dorjee started the ascent. The two were determined to face any challenge. Step by step they moved ahead on the steep frozen slopes. Severe cold had virtually turned the ice into hard and brittle glass. To avoid skidding, they were using their ________.",
        options: ["backpacks", "ice-axes", "ropes"],
        correctAnswer: "ice-axes",
     }),
      shuffleOptions({
        question:
          "In less than two hours, they were at the ________ Camp. They took a brief rest, made themselves tea and were preparing to move ahead when another teammate, Lhatoo joined them.",
        options: ["Base", "Summit", "South Col"],
        correctAnswer: "Summit",
     }),
      shuffleOptions({
        question:
          "As they gained height, the speed of breeze increased. The strong winds whipped up the powder snow, reducing the visibility to almost ________.",
        options: ["clear", "normal", "nil"],
        correctAnswer: "nil",
     }),
      shuffleOptions({
        question:
          "It was dangerous to walk on the ________ ridge with sheer drop on either side.",
        options: ["flat", "broad", "knife-edge"],
        correctAnswer: "knife-edge",
     }),
      shuffleOptions({
        question:
          "Bachendri Pal took step after step, digging her ice-axe into the ice at every step. After a long hard work, when she raised her head, she found that her goal was within her reach. The peak was just a few steps away. The sun was shining bright, and soon she found that she was standing atop the ________.",
        options: ["valley", "hill", "world"],
        correctAnswer: "world",
     }),
      shuffleOptions({
        question:
          "It was 1:07 p.m. when she reached the summit; she was the fifth woman in the world and the first Indian to do so. Bachendri Pal knelt down in gratitude and kissed the peak. She buried the image of ________ and her Hanuman Chalisa wrapping it in a piece of red cloth.",
        options: ["Buddha", "Goddess Durga", "Jesus"],
        correctAnswer: "Goddess Durga",
     }),
      shuffleOptions({
        question:
          "After every few steps, she would look back at the highest peak with ________ and delight.",
        options: ["satisfaction", "reverence", "despair"],
        correctAnswer: "reverence",
     }),
      shuffleOptions({
        question:
          "Bachendri Pal achieved the incredible feat of reaching the ________ point in the world.",
        options: ["highest", "lowest", "deepest"],
        correctAnswer: "highest",
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
          "Mountains look beautiful and mysterious, especially when covered with snow.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The Himalayas are the highest mountain range in the world.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Bachendri Pal's first climb started on 8 May, 1984.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Bachendri Pal and her team encountered an avalanche at Camp III.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Bachendri Pal and her teammate Ang Dorjee reached the Summit Camp in less than two hours.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The temperature at the South Col camp on 23 May, 1984, was about 10 degrees.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Bachendri Pal and her team used backpacks to prevent skidding on the steep frozen slopes.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Bachendri Pal was the first woman in the world to reach the summit of Mount Everest.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Bachendri Pal buried an image of Lord Buddha at the summit of Mount Everest.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Bachendri Pal's ascent to the summit of Mount Everest took less than an hour.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
