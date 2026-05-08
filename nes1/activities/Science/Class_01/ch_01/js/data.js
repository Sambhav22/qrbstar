export const chapter = 'Chapter - 1: LIVING AND NON-LIVING THINGS'
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

if (localStorage.getItem('activityNumber') == 1) {
  activityData = {
    activity: 'Tick the correct option:',
    questions: shuffleQues([
      shuffleOptions({
        question: 'What are examples of living things mentioned in the text?',
        optionA: 'Table, TV, Cycle',
        optionB: 'Human, Insects, Birds',
        optionC: 'Clouds, Rainbow, Rock',
        correctAnswer: 'Human, Insects, Birds',
      }),
      shuffleOptions({
        question: 'Which of the following is a characteristic of all living things mentioned in the text?',
        optionA: 'Being stationary',
        optionB: 'Not needing air to breathe',
        optionC: 'Growing and reproducing',
        correctAnswer: 'Growing and reproducing',
      }),
      shuffleOptions({
        question: 'What do all living things need according to the text?',
        optionA: 'Money to spend',
        optionB: 'Food to eat, air to breathe, water to drink',
        optionC: 'Electricity to function',
        correctAnswer: 'Food to eat, air to breathe, water to drink',
      }),
      shuffleOptions({
        question: 'What distinguishes non-living things from living things based on the text?',
        optionA: 'Ability to feel emotions',
        optionB: 'Lack of movement, growth, breathing, feeling, and reproduction',
        optionC: 'Requirement of sunlight to survive',
        correctAnswer: 'Lack of movement, growth, breathing, feeling, and reproduction',
      }),
      shuffleOptions({
        question: 'Which of the following is an example of a natural non-living thing?',
        optionA: 'Books',
        optionB: 'Rainbow',
        optionC: 'Clothes',
        correctAnswer: 'Rainbow',
      }),
      shuffleOptions({
        question: 'What term is used for non-living things made by man, according to the text?',
        optionA: 'Natural non-living things',
        optionB: 'Artificial non-living things',
        optionC: 'Man-made non-living things',
        correctAnswer: 'Man-made non-living things',
      }),
      shuffleOptions({
        question: 'Which of the following is a characteristic of man-made non-living things?',
        optionA: 'Found in nature',
        optionB: 'Require air to survive',
        optionC: 'Made by man',
        correctAnswer: 'Made by man',
      }),
      shuffleOptions({
        question: 'What is mentioned as a common characteristic of all living things in the text?',
        optionA: 'Ability to fly',
        optionB: 'Ability to feel emotions',
        optionC: 'Need for air, water, and food',
        correctAnswer: 'Need for air, water, and food',
      }),
      shuffleOptions({
        question: 'Which of the following is a living thing according to the text?',
        optionA: 'Rock',
        optionB: 'Cylinder',
        optionC: 'Animals',
        correctAnswer: 'Animals',
      }),
      shuffleOptions({
        question: 'What do non-living things not need, according to the text?',
        optionA: 'Air, water, and food',
        optionB: 'Sunlight',
        optionC: 'Space to exist',
        correctAnswer: 'Air, water, and food',
      }),
    ]),
  }
}

if (localStorage.getItem('activityNumber') == 2) {
  activityData = {
    activity: 'Fill in the blank with correct option:',
    questions: shuffleQues([
      shuffleOptions({
        question: 'All living things _, _, _, _, and _.',
        optionA: 'Sing, dance, sleep, talk, write',
        optionB: 'Move, grow, breathe, feel, reproduce',
        optionC: 'Fly, swim, read, build, eat',
        correctAnswer: 'Move, grow, breathe, feel, reproduce',
      }),
      shuffleOptions({
        question: 'Living things need _ to eat, _ to breathe, and _ to drink.',
        optionA: 'Sunshine, music, soda',
        optionB: 'Food, air, water',
        optionC: 'Money, love, juice',
        correctAnswer: 'Food, air, water',
      }),
      shuffleOptions({
        question: 'Non-living things do not _, _, _, _, and _.',
        optionA: 'Travel, sing, laugh, dream, create',
        optionB: 'Move, grow, breathe, feel, reproduce',
        optionC: 'Sleep, eat, dance, talk, write',
        correctAnswer: 'Move, grow, breathe, feel, reproduce',
      }),
      shuffleOptions({
        question: 'Natural non-living things include _, _, _, _, and _.',
        optionA: 'Cars, computers, buildings, furniture, lights',
        optionB: 'Clouds, rainbow, rock, water, soil',
        optionC: 'Books, clothes, cycle, train, TV',
        correctAnswer: 'Clouds, rainbow, rock, water, soil',
      }),
      shuffleOptions({
        question: 'Non-living things made by man are called _ non-living things.',
        optionA: 'Artificial',
        optionB: 'Supernatural',
        optionC: 'Magical',
        correctAnswer: 'Artificial',
      }),
      shuffleOptions({
        question: 'Examples of man-made non-living things include _, _, _, and _.',
        optionA: 'Birds, insects, animals, plants',
        optionB: 'Books, clothes, cycle, train',
        optionC: 'Clouds, rainbow, rock, water',
        correctAnswer: 'Books, clothes, cycle, train',
      }),
      shuffleOptions({
        question: 'Living things need _ to eat, _ to breathe, and _ to drink.',
        optionA: 'Money, love, juice',
        optionB: 'Food, air, water',
        optionC: 'Sunshine, music, soda',
        correctAnswer: 'Food, air, water',
      }),
      shuffleOptions({
        question: 'Non-living things _ move, grow, breathe, feel, and reproduce.',
        optionA: 'Often',
        optionB: 'Rarely',
        optionC: 'Do not',
        correctAnswer: 'Do not',
      }),
      shuffleOptions({
        question: 'Natural non-living things are found _, while man-made non-living things are _ by man.',
        optionA: 'Underground, created',
        optionB: 'In the air, painted',
        optionC: 'In nature, made',
        correctAnswer: 'In nature, made',
      }),
      shuffleOptions({
        question: 'All living things _, _, _, _, and _.',
        optionA: 'Play, study, sleep, talk, run',
        optionB: 'Move, grow, breathe, feel, reproduce',
        optionC: 'Cook, swim, write, sing, dance',
        correctAnswer: 'Move, grow, breathe, feel, reproduce',
      }),
    ]),
  }
}

if (localStorage.getItem('activityNumber') == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: 'Living things do not move, grow, breathe, feel, or reproduce.',
        optionA: 'True',
        optionB: 'False',
        correctAnswer: 'False',
      }),
      shuffleOptions({
        question: 'Non-living things can be both natural and man-made.',
        optionA: 'True',
        optionB: 'False',
        correctAnswer: 'True',
      }),
      shuffleOptions({
        question: 'Plants are examples of non-living things.',
        optionA: 'True',
        optionB: 'False',
        correctAnswer: 'False',
      }),
      shuffleOptions({
        question: 'All living things need air, water, and food to survive.',
        optionA: 'True',
        optionB: 'False',
        correctAnswer: 'True',
      }),
      shuffleOptions({
        question: 'Natural non-living things are found in nature.',
        optionA: 'True',
        optionB: 'False',
        correctAnswer: 'True',
      }),
      shuffleOptions({
        question: 'Man-made non-living things include clouds, rainbow, and rock.',
        optionA: 'True',
        optionB: 'False',
        correctAnswer: 'False',
      }),
      shuffleOptions({
        question: 'Non-living things do not need air, water, and food.',
        optionA: 'True',
        optionB: 'False',
        correctAnswer: 'True',
      }),
      shuffleOptions({
        question: 'Animals are considered non-living things.',
        optionA: 'True',
        optionB: 'False',
        correctAnswer: 'False',
      }),
      shuffleOptions({
        question: 'Living things do not reproduce.',
        optionA: 'True',
        optionB: 'False',
        correctAnswer: 'False',
      }),
      shuffleOptions({
        question: 'All living things need sunlight to survive.',
        optionA: 'True',
        optionB: 'False',
        correctAnswer: 'False',
      }),
    ]),
  }
}

export var activityData