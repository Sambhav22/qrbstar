export const chapter = "Chapter - 8: Great People Are Like Us ";
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
          "Who are known as the greatest revolutionaries of India in the text?",
        optionA: "Mahatma Gandhi and Vallabhbhai Patel",
        optionB: "Bhagat Singh and Sukhdev",
        optionC: "Rajaram and the old woman",
        correctAnswer: "Bhagat Singh and Sukhdev",
     }),
      shuffleOptions({
        question:
          "What did Bhagat Singh and Sukhdev do when they visited their friend Rajaram?",
        optionA: "They refused to sleep and kept talking all night.",
        optionB: "They slept on the floor while Rajaram slept on the cot.",
        optionC: "They took Rajaram's cot and made him sleep on the floor.",
        correctAnswer:
          "They slept on the floor while Rajaram slept on the cot.",
     }),
      shuffleOptions({
        question:
          "Why did Rajaram abandon his cot when Bhagat Singh and Sukhdev visited?",
        optionA: "He was afraid of Bhagat Singh and Sukhdev.",
        optionB: "He wanted to make fun of them.",
        optionC:
          "He wanted to be a good host and share the cot with his friends.",
        correctAnswer:
          "He wanted to be a good host and share the cot with his friends.",
     }),
      shuffleOptions({
        question: "What story did Mahatma Gandhi tell in Yervada Jail?",
        optionA: "A story about a woman and a kite.",
        optionB: "A story about a snake and a diamond necklace.",
        optionC: "A story about a thief and a farmer.",
        correctAnswer: "A story about a snake and a diamond necklace.",
     }),
      shuffleOptions({
        question: "What did the woman find on her roof in Gandhiji's story?",
        optionA: "A dead snake.",
        optionB: "A diamond necklace.",
        optionC: "A kite.",
        correctAnswer: "A diamond necklace.",
     }),
      shuffleOptions({
        question:
          "In Vallabhbhai Patel's story, what did the thief find under the tub?",
        optionA: "A precious necklace.",
        optionB: "A snake.",
        optionC: "A farmer.",
        correctAnswer: "A snake.",
     }),
      shuffleOptions({
        question: "Why did the thief run away in Vallabhbhai Patel's story?",
        optionA: "The farmer woke up and caught him.",
        optionB: "The snake hissed and raised its hood.",
        optionC: "He found nothing valuable under the tub.",
        correctAnswer: "The snake hissed and raised its hood.",
     }),
      shuffleOptions({
        question:
          "What do the stories about the snake in the hut and the thief breaking in have in common?",
        optionA: "They both involve a snake.",
        optionB: "They both lead to someone becoming rich.",
        optionC: "They both take place in Yervada Jail.",
        correctAnswer: "They both lead to someone becoming rich.",
     }),
      shuffleOptions({
        question:
          "Who are the two freedom fighters mentioned in the first part of the text?",
        optionA: "Mahatma Gandhi and Vallabhbhai Patel",
        optionB: "Bhagat Singh and Sukhdev",
        optionC: "Rajaram and the old woman",
        correctAnswer: "Bhagat Singh and Sukhdev",
     }),
      shuffleOptions({
        question:
          "What was the woman's reaction to the snake in Gandhiji's story?",
        optionA: "She killed it.",
        optionB: "She called for help.",
        optionC: "She ignored it.",
        correctAnswer: "She called for help.",
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
          "Bhagat Singh and Sukhdev are known as the greatest revolutionaries of India. They sacrificed their lives for our sake. They fought for our freedom from the British rule. They had to hide themselves from the police for the sake of their mission. One night, they approached their friend, Rajaram for shelter during the night. Rajaram opened the door and allowed them in. There was only one cot in the small room. He asked if they had taken the dinner. Sukhdev nodded in the affirmative. At this, Rajaram said, 'Well, then, friends, lie down wherever you find the ____________.' Saying this, Rajaram lay down on his cot.",
        optionA: "room",
        optionB: "place",
        optionC: "space",
        correctAnswer: "place",
     }),
      shuffleOptions({
        question:
          "Sukhdev was in a good mood. He looked to Bhagat Singh, and then they too lay down on the cot, one on each side of Rajaram. The cot was small; moreover, they ____________ Rajaram mischievously. At this, Rajaram left the cot and lay down on the floor.",
        optionA: "squeezed",
        optionB: "ignored",
        optionC: "pushed",
        correctAnswer: "squeezed",
     }),
      shuffleOptions({
        question:
          "Bhagat Singh chuckled, 'Sukhdev, can you see how great Rajaram is? He has abandoned his cot for his guests.' Sukhdev remarked, 'Yes, he is really great. Whenever he sees his friends, he abandons his cot ____________.'",
        optionA: "happily",
        optionB: "willingly",
        optionC: "forcefully",
        correctAnswer: "willingly",
     }),
      shuffleOptions({
        question:
          "How could they sleep on the cot when their friend was sleeping on the bare floor! Mahatma Gandhi and Vallabhbhai Patel were great leaders of India. They went to jail fighting for our freedom. Once, they were sitting together in Yervada Jail and telling stories. Gandhiji told this story: 'Once there entered a snake in the hut of an old woman. She was frightened to see it and cried for help. A neighbour came, killed the snake and went away. The woman flung the dead snake on to the roof. Some time later, there was flying a kite from above the hut. It had a diamond necklace in its beak. It spotted the dead snake. It came down, left the necklace and flew away with the dead snake. Next day in the morning, the woman spotted something shining on the roof. She brought it down with the help of a bamboo. She now had the possession of a very precious necklace. In no time, she had become very rich.'",
        optionA: "ground",
        optionB: "mattress",
        optionC: "bare floor",
        correctAnswer: "bare floor",
     }),
      shuffleOptions({
        question: "What did the woman find on her roof in Gandhiji's story?",
        optionA: "A dead snake.",
        optionB: "A diamond necklace.",
        optionC: "A kite.",
        correctAnswer: "A diamond necklace.",
     }),
      shuffleOptions({
        question:
          "In Vallabhbhai Patel's story, what did the thief find under the tub?",
        optionA: "A precious necklace.",
        optionB: "A snake.",
        optionC: "A farmer.",
        correctAnswer: "A snake.",
     }),
      shuffleOptions({
        question: "Why did the thief run away in Vallabhbhai Patel's story?",
        optionA: "The farmer woke up and caught him.",
        optionB: "The snake hissed and raised its hood.",
        optionC: "He found nothing valuable under the tub.",
        correctAnswer: "The snake hissed and raised its hood.",
     }),
      shuffleOptions({
        question:
          "What do the stories about the snake in the hut and the thief breaking in have in common?",
        optionA: "They both involve a snake.",
        optionB: "They both lead to someone becoming rich.",
        optionC: "They both take place in Yervada Jail.",
        correctAnswer: "They both lead to someone becoming rich.",
     }),
      shuffleOptions({
        question:
          "Who are the two freedom fighters mentioned in the first part of the text?",
        optionA: "Mahatma Gandhi and Vallabhbhai Patel.",
        optionB: "Bhagat Singh and Sukhdev.",
        optionC: "Rajaram and the old woman.",
        correctAnswer: "Bhagat Singh and Sukhdev.",
     }),
      shuffleOptions({
        question:
          "What was the woman's reaction to the snake in Gandhiji's story?",
        optionA: "She killed it.",
        optionB: "She called for help.",
        optionC: "She ignored it.",
        correctAnswer: "She called for help.",
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
          "Slippery surfaces are responsible for accidents in the text.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The speaker wishes they could continue slipping.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The speaker wears slippers to prevent slipping.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The speaker tumbled into space when slipping on a banana peel.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Slipping incidents occurred in only one location in the text.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The speaker slipped on a roller skate and hit their head.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The speaker wishes they could stop slipping anymore.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The speaker's solution to avoid slipping is to wear socks.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Slippers are the best footwear to prevent slipping.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The common theme in the poem is about conquering obstacles.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
