export const chapter = "Chapter - 12: Jimmy Scarecrow's Presents ";
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
          "What was Jimmy Scarecrow's greatest sorrow during the winter?",
        optionA: "Lack of food",
        optionB: "Lack of friends",
        optionC: "Lack of occupation",
        correctAnswer: "Lack of occupation",
     }),
      shuffleOptions({
        question:
          "What did Jimmy Scarecrow ask Santa Claus for on Christmas Eve?",
        optionA: "A new coat",
        optionB: "A doll-baby",
        optionC: "A warm fire",
        correctAnswer: "A doll-baby",
     }),
      shuffleOptions({
        question:
          "What did Betsey give to Jimmy Scarecrow as a Christmas present?",
        optionA: "A crazy quilt",
        optionB: "A new hat",
        optionC: "A pair of shoes",
        correctAnswer: "A crazy quilt",
     }),
      shuffleOptions({
        question:
          "What did Santa Claus ask Jimmy Scarecrow to do at the North Pole?",
        optionA: "Scare away crows",
        optionB: "Scare away Arctic Explorers",
        optionC: "Scare away polar bears",
        correctAnswer: "Scare away Arctic Explorers",
     }),
      shuffleOptions({
        question:
          "How long did Santa Claus offer to keep Jimmy Scarecrow at the North Pole?",
        optionA: "One day",
        optionB: "One week",
        optionC: "A thousand years",
        correctAnswer: "A thousand years",
     }),
      shuffleOptions({
        question:
          "What happened to the crazy quilt given to Aunt Hannah and Betsey?",
        optionA: "It was lost",
        optionB: "It was stolen",
        optionC: "It was remodeled and matched perfectly",
        correctAnswer: "It was remodeled and matched perfectly",
     }),
      shuffleOptions({
        question:
          "Why did crows stop coming to the cornfield the following summer?",
        optionA: "Because Jimmy Scarecrow scared them away",
        optionB: "Because Santa Claus left a notice to crows",
        optionC: "Because the cornfield was empty",
        correctAnswer: "Because Santa Claus left a notice to crows",
     }),
      shuffleOptions({
        question: "What did Santa Claus write on the notice to crows?",
        optionA: "A message to eat more corn",
        optionB: "A warning to stay away",
        optionC: "A love letter to the crows",
        correctAnswer: "A warning to stay away",
     }),
      shuffleOptions({
        question:
          "What change did Betsey notice in her doll-baby when she received it again the following Christmas?",
        optionA: "It had become smaller",
        optionB: "It had learned to talk",
        optionC: "It had grown an inch and could walk and talk",
        correctAnswer: "It had grown an inch and could walk and talk",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Jimmy Scarecrow led a ______________ life in the winter.",
        options: ["happy", "sad", "busy"],
        correctAnswer: "sad",
     }),
      shuffleOptions({
        question: "Jimmy's greatest grief was his lack of ______________.",
        options: ["food", "occupation", "friends"],
        correctAnswer: "occupation",
     }),
      shuffleOptions({
        question:
          "Every morning, when the wintry sun peered like a hard yellow eye across the dry ______________, Jimmy felt sad.",
        options: ["meadow", "forest", "corn-stubble"],
        correctAnswer: "corn-stubble",
     }),
      shuffleOptions({
        question:
          "On Christmas Eve, Santa Claus came in his sledge heaped high with presents, urging his team of reindeer across the field. He was on his way to the farmhouse where Betsey lived with her Aunt ______________.",
        options: ["Emily", "Susan", "Mary"],
        correctAnswer: "Susan",
     }),
      shuffleOptions({
        question:
          "Betsey was a very good little girl with very smooth yellow curls, and she had a great many ______________.",
        options: ["toys", "presents", "friends"],
        correctAnswer: "presents",
     }),
      shuffleOptions({
        question:
          'Santa Claus! Here I am!" he cried out, but Santa Claus did not ______________ him.',
        options: ["see", "hear", "recognize"],
        correctAnswer: "hear",
     }),
      shuffleOptions({
        question:
          '"Santa Claus, please give me a little ______________. I was good all summer and kept the crows out of the corn," pleaded the poor Scarecrow in his choking voice, but Santa Claus passed by with a merry halloo and a great clamor of ______________.',
        options: ["present, bells", "candy, laughter", "toy, music"],
        correctAnswer: "present, bells",
     }),
      shuffleOptions({
        question:
          "The next morning Betsey sat at the window holding her Christmas doll-baby, and she looked out at Jimmy Scarecrow standing alone in the field amidst the ______________.",
        options: ["flowers", "snow", "corn-stubble"],
        correctAnswer: "corn-stubble",
     }),
      shuffleOptions({
        question:
          '"I\'ve brought you a Christmas ______________," said she to Jimmy Scarecrow.',
        options: ["card", "present", "tree"],
        correctAnswer: "present",
     }),
      shuffleOptions({
        question:
          "The bright flash of colors under Jimmy's hat-brim dazzled his eyes, and he felt a little ______________.",
        options: ["happy", "surprised", "alarmed"],
        correctAnswer: "alarmed",
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
