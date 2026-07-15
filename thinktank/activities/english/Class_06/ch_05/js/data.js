export const chapter = "Chapter - 5: The Cobra Mystery";
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
        question: "Who is playing ludo on the lawn?",
        optionA: "Ravi and Astha",
        optionB: "Mohan and Astha",
        optionC: "Gautami and Ravi",
        correctAnswer: "Ravi and Astha",
     }),
      shuffleOptions({
        question: "Why is Gautami happy in the text?",
        optionA: "Because she is on vacation",
        optionB: "Because her children are with her",
        optionC: "Because she found a cobra",
        correctAnswer: "Because her children are with her",
     }),
      shuffleOptions({
        question: "What did the cyclist inform Astha about?",
        optionA: "A lost wallet",
        optionB: "A snake in the lawn",
        optionC: "A new neighbor",
        correctAnswer: "A snake in the lawn",
     }),
      shuffleOptions({
        question: "How does Astha react upon hearing about the snake?",
        optionA: "Calm and composed",
        optionB: "Alarmed and horrified",
        optionC: "Excited and happy",
        correctAnswer: "Alarmed and horrified",
     }),
      shuffleOptions({
        question: "What is Mohan's job in the house?",
        optionA: "Playing with the kids",
        optionB: "Taking care of the lawn",
        optionC: "Cooking dinner",
        correctAnswer: "Taking care of the lawn",
     }),
      shuffleOptions({
        question:
          "What do Ravi and Gautami think about the number of snakebite deaths mentioned in the newspaper?",
        optionA: "They believe it's a huge number",
        optionB: "They think it's a small number",
        optionC: "They don't have an opinion",
        correctAnswer: "They believe it's a huge number",
     }),
      shuffleOptions({
        question:
          "Why does Astha think the snake might have been sent by the Lord?",
        optionA: "As a reminder for her to visit Ujjain",
        optionB: "As a punishment for not working",
        optionC: "As a reward for their prayers",
        correctAnswer: "As a reminder for her to visit Ujjain",
     }),
      shuffleOptions({
        question: "What did the beggar woman offer to do to catch the snake?",
        optionA: "Pray to the Lord",
        optionB: "Call the police",
        optionC: "Send a snake-charmer",
        correctAnswer: "Send a snake-charmer",
     }),
      shuffleOptions({
        question: "How does the snake-charmer suggest catching the snake?",
        optionA: "With a net",
        optionB: "By playing a tune",
        optionC: "By using a stick",
        correctAnswer: "By playing a tune",
     }),
      shuffleOptions({
        question: "What happens at the end of the story regarding the snake?",
        optionA: "Mohan captures the snake",
        optionB: "The snake disappears through the gate",
        optionC: "The snake is found in a pitcher",
        correctAnswer: "The snake disappears through the gate",
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
          "Who is playing ludo on the lawn? Ravi and Astha are playing ludo on the lawn, while their mother Gautami is sitting on a chair nearby. At the far end of the lawn, Mohan is lying under the shade of a tree.",
        optionA: "Ravi and Astha",
        optionB: "Mohan and Astha",
        optionC: "Gautami and Ravi",
        correctAnswer: "Ravi and Astha",
     }),
      shuffleOptions({
        question:
          "Astha, go look what he wants. (walks to the gate) Yes, Uncle, what do you want? A big cobra has just got into your lawn. It crossed my wheel.",
        optionA: "Ravi",
        optionB: "Gautami",
        optionC: "Astha",
        correctAnswer: "Astha",
     }),
      shuffleOptions({
        question:
          "Astha (gasping in horror) That uncle said that he saw a cobra crawl into our lawn ... under the gate. (Everybody starts to look around in the grass and behind the hedges for the snake.)",
        optionA: "Ravi",
        optionB: "Mohan",
        optionC: "Astha",
        correctAnswer: "Astha",
     }),
      shuffleOptions({
        question:
          "Ravi Don't worry, we'll find it out. (runs to where Mohan is sleeping) Uncle, Uncle ... get up, quick! There is a cobra. Mohan (squeezing his eyes in sunlight) How can a cobra come under the gate? It doesn't live on the road.",
        optionA: "Ravi",
        optionB: "Mohan",
        optionC: "Astha",
        correctAnswer: "Ravi",
     }),
      shuffleOptions({
        question:
          "Astha That thing is somewhere here. If it is not found out before evening, you are sure to be fired. Ravi He is the laziest servant I've ever seen.",
        optionA: "Astha",
        optionB: "Ravi",
        optionC: "Mohan",
        correctAnswer: "Ravi",
     }),
      shuffleOptions({
        question:
          "Astha Uncle, you're always making new excuses but you don't want to work. Look how tall the grass has grown. (Mohan finds a stick and starts beating about the bushes.)",
        optionA: "Ravi",
        optionB: "Astha",
        optionC: "Mohan",
        correctAnswer: "Astha",
     }),
      shuffleOptions({
        question:
          "Ravi (carefully looking around) Having a cobra in the house is dangerous. I read in a newspaper recently nearly 30,000 people die of snakebite every year.",
        optionA: "Astha",
        optionB: "Gautami",
        optionC: "Ravi",
        correctAnswer: "Ravi",
     }),
      shuffleOptions({
        question:
          "Astha This cannot be true. 30,000 is a very large number. Newspapers don't publish anything what they want. They have data for each news story.",
        optionA: "Ravi",
        optionB: "Gautami",
        optionC: "Astha",
        correctAnswer: "Astha",
     }),
      shuffleOptions({
        question:
          "Gautami (spreading her hands heavenward) Forgive me, 0 Lord! I remember I promised to visit Mahakal at Ujjain, but couldn't go. This corona will not let me visit Ujjain. Lord must have sent that cobra as a reminder!",
        optionA: "Astha",
        optionB: "Ravi",
        optionC: "Gautami",
        correctAnswer: "Gautami",
     }),
      shuffleOptions({
        question:
          "Ravi We can't go until this lockdown is over and trains resume.",
        optionA: "Astha",
        optionB: "Ravi",
        optionC: "Mohan",
        correctAnswer: "Ravi",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The children are playing ludo on the lawn.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The cyclist informs Astha about a cobra entering the lawn.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Mohan was the one who found the cobra under the gate.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Astha believes that newspapers always publish accurate data.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Ravi thinks that having a cobra in the house is not dangerous.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Gautami regrets not being able to visit Mahakal at Ujjain due to the lockdown.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The beggar woman suggests that the snake should be left alone in the lawn.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The snake-charmer is confident about quickly finding and catching the snake.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The snake-charmer recommends using a net to catch the snake.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The snake is eventually found and captured by Mohan.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
