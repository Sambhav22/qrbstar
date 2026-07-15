export const chapter = "Chapter - 15: Bell the Cat";
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
      shuffleOptions(
        {
          question: "What did the mice do in the house?",
          optionA: "They invited a cat to live with them.",
          optionB: "They roamed freely and stole food.",
          optionC: "They built a wall to protect themselves.",
          correctAnswer: "They roamed freely and stole food.",
        }),
      shuffleOptions({
          question: "Why did the old lady of the house bring a mousetrap?",
          optionA: "To offer the mice some cheese.",
          optionB: "To catch the cat.",
          optionC: "To catch the mice.",
          correctAnswer: "To catch the mice.",
        }),
      shuffleOptions({
          question:
            "What was the outcome of the mice's discussions about dealing with the cat?",
          optionA: "They found a perfect solution.",
          optionB: "They decided to fight the cat.",
          optionC: "None of the plans were good enough.",
          correctAnswer: "None of the plans were good enough.",
        }),
      shuffleOptions({
          question:
            "How did the young mouse propose to protect themselves from the cat?",
          optionA: "By fighting the cat.",
          optionB: "By setting traps for the cat.",
          optionC: "By belling the cat.",
          correctAnswer: "By belling the cat.",
        }),
      shuffleOptions({
          question:
            "Why were the mice happy when the young mouse suggested belling the cat?",
          optionA: "They were excited to make jewelry for the cat.",
          optionB: "They realized it was a perfect solution.",
          optionC: "They wanted to befriend the cat.",
          correctAnswer: "They realized it was a perfect solution.",
        }),
      shuffleOptions({
          question:
            "What happened when the old mouse asked, 'Who will bell the cat?'",
          optionA: "The mice immediately found a volunteer.",
          optionB: "The assembly fell silent with no response.",
          optionC: "The cat agreed to wear the bell.",
          correctAnswer: "The assembly fell silent with no response.",
        }),
      shuffleOptions({
          question:
            "What was the main problem the mice faced in implementing the plan to bell the cat?",
          optionA: "They couldn't find a bell.",
          optionB: "They couldn't agree on the type of bell.",
          optionC: "They didn't know how to attach the bell to the cat.",
          correctAnswer: "They didn't know how to attach the bell to the cat.",
        }),
      shuffleOptions({
          question: "What did the cat do during her time in the house?",
          optionA: "She became friends with the mice.",
          optionB: "She hunted and killed the mice.",
          optionC: "She helped the old lady with her chores.",
          correctAnswer: "She hunted and killed the mice.",
        }),
      shuffleOptions({
          question: "What did the mice do when the cat came into the house?",
          optionA: "They hid in their holes.",
          optionB: "They approached the cat to befriend her.",
          optionC: "They sang songs to welcome her.",
          correctAnswer: "They hid in their holes.",
        }),
      shuffleOptions({
          question:
            "Why did the mice decide to come up with a plan to protect themselves from the cat?",
          optionA: "They wanted to make the cat their leader.",
          optionB: "They realized their lives were at the cat's mercy.",
          optionC: "They wanted to organize a party with the cat.",
          correctAnswer: "They realized their lives were at the cat's mercy.",
        },
],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "The mice enjoyed their life well. They roamed about the house wherever they liked. They stole food from the __________ and from the dining table.",
          "options": ["Fridge", "Shelf", "Oven"],
          "correctAnswer": "Shelf"
        }),
      shuffleOptions({
          "question": "The old lady of the house was very disturbed. She brought a __________, but the mice were clever.",
          "options": ["New pet", "Cheese platter", "Mousetrap"],
          "correctAnswer": "Mousetrap"
        }),
      shuffleOptions({
          "question": "The cat was vicious. She would catch a mouse in the morning for breakfast and then one in the evening for dinner. Not only this, she hunted several mice for __________ every day.",
          "options": ["Sleep", "Game", "Safety"],
          "correctAnswer": "Game"
        }),
      shuffleOptions({
          "question": "Life for the mice had become very difficult. Now, they could not go out of the hole whenever they felt like. They had to go without food on some __________.",
          "options": ["Adventures", "Occasions", "Vacations"],
          "correctAnswer": "Occasions"
        }),
      shuffleOptions({
          "question": "To overcome this terrible situation, the mice called a __________. The old mouse said, 'Look, friends, this is sure that we cannot fight the cat, nor can we expel her from the house.",
          "options": ["Party", "General assembly", "Picnic"],
          "correctAnswer": "General assembly"
        }),
      shuffleOptions({
          "question": "They discussed many plans, but none of them was good enough to bring them out of their constant __________.",
          "options": ["Sleep", "Fear", "Excitement"],
          "correctAnswer": "Fear"
        }),
      shuffleOptions({
          "question": "In the end, a young mouse rose to his hind feet and said, 'There can be a very simple way to protect us from the cat.",
          "What is that?' said the anxious mice together.\n'This can happen if we __________ the cat. We can hear the sound of the bell whenever she comes. This will alert us,' said the young mouse.",
          "options": ["Feed", "Challenge", "Bell"],
          "correctAnswer": "Bell"
        }),
      shuffleOptions({
          "question": "A loud noise was raised. All mice were happy that they had found the perfect solution. They were surprised why they had not thought of this before.\nWhen the noise pacified a little, the old mouse stood up and said, 'The plan is really good. But tell me, who will __________ the cat.'",
          "options": ["Feed", "Challenge", "Bell"],
          "correctAnswer": "Bell"
        }),
      shuffleOptions({
          "question": "With these words, the assembly fell as quiet as if there were no mice. It is easy to say something and quite another to __________ it.",
          "options": ["Execute", "Imagine", "Forget"],
          "correctAnswer": "Execute"
        }),
      shuffleOptions({
          "question": "What is the moral of this story? It teaches us that __________ can be more powerful than strength when facing adversity.",
          "options": ["Intelligence", "Teamwork", "Solitude"],
          "correctAnswer": "Teamwork"
        }
      ]
      
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "The disease mentioned in the text is caused by a virus.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Maintaining cleanliness is not essential for preventing diseases.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "The text recommends eating snacks from the market for a healthy diet.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Physical exercise can include activities like running and playing games.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Brushing your teeth and taking a bath daily are mentioned as ways to maintain cleanliness.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "It is essential to wash your hands with soap when entering the house from outside.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "The text suggests that sleeping late and rising late is beneficial for health.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Snacks are considered good for health because they are tasty to eat.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Maintaining hygiene can help keep diseases away.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "According to the text, thinking is a method to take a rest for the brain.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }
      ]
      
    ],
  };
}

export var activityData;
