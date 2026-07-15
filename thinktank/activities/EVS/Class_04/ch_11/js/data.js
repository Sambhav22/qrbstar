export const chapter = "Chapter - 11: Eating Food";
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
            "What are some examples of vegetables mentioned in the text?",
          optionA: "Apple, mango, cherry",
          optionB: "Bean, carrot, potato",
          optionC: "Rice, wheat, oats",
          correctAnswer: "Bean, carrot, potato",
         }),
      shuffleOptions({
          question: "Which of the following is considered a fleshy fruit?",
          optionA: "Almond",
          optionB: "Mango",
          optionC: "Raisins",
          correctAnswer: "Mango",
         }),
      shuffleOptions({
          question: "What do food grains provide us with?",
          optionA: "Vitamins and minerals",
          optionB: "Energy",
          optionC: "Proteins",
          correctAnswer: "Energy",
         }),
      shuffleOptions({
          question: "What is the purpose of a Langar in Gurdwaras?",
          optionA: "Selling food to visitors",
          optionB: "Cooking food for all visitors",
          optionC: "Hosting festivals",
          correctAnswer: "Cooking food for all visitors",
         }),
      shuffleOptions({
          question:
            "What is the journey of food from the field to our homes according to the text?",
          optionA: "Seeds are sown, harvested, stored, and then sold",
          optionB:
            "Field is watered, manure is added, harvested, and then stored",
          optionC:
            "Ploughing, sowing seeds, watering, harvesting, storing, and selling",
          correctAnswer:
            "Ploughing, sowing seeds, watering, harvesting, storing, and selling",
         }),
      shuffleOptions({
          question:
            "How does eating together as a family impact members according to the text?",
          optionA: "Creates disunity",
          optionB: "Establishes a bond of unity",
          optionC: "Encourages isolation",
          correctAnswer: "Establishes a bond of unity",
         }),
      shuffleOptions({
          question: "What is the purpose of a Bhandara?",
          optionA: "Cooking food for all visitors",
          optionB: "Serving free meals on festivals",
          optionC: "Eating together in schools",
          correctAnswer: "Serving free meals on festivals",
         }),
      shuffleOptions({
          question:
            "Where do students in a hostel or boarding school eat their meals together?",
          optionA: "Kitchen",
          optionB: "Dining hall or mess",
          optionC: "Classroom",
          correctAnswer: "Dining hall or mess",
         }),
      shuffleOptions({
          question:
            "What is the common feature of community eating as described in the text?",
          optionA: "Eating alone",
          optionB: "Sharing meals with friends",
          optionC: "Eating together on certain occasions",
          correctAnswer: "Eating together on certain occasions",
         }),
      shuffleOptions({
          question:
            "What is the role of spices in food, as mentioned in the text?",
          optionA: "Provide energy",
          optionB: "Make food tasty, colourful, and spicy",
          optionC: "Rich in proteins",
          correctAnswer: "Make food tasty, colourful, and spicy",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "To get food, the field is first ________.",
          optionA: "harvested",
          optionB: "ploughed",
          optionC: "watered",
          correctAnswer: "ploughed",
         }),
      shuffleOptions({
          question: "The ____________ is watered at regular intervals.",
          optionA: "harvested crop",
          optionB: "field",
          optionC: "none",
          correctAnswer: "field",
         }),
      shuffleOptions({
          question: "Langar is a community eating held in __________.",
          optionA: "temples",
          optionB: "gurdwaras",
          optionC: "churches",
          correctAnswer: "gurdwaras",
         }),
      shuffleOptions({
          question: "________ started the practice of langar.",
          optionA: "Mahatma Gandhi",
          optionB: "Guru Nanak Dev Ji",
          optionC: "Mother Teresa",
          correctAnswer: "Guru Nanak Dev Ji",
         }),
      shuffleOptions({
          question: "Mid-day meal is provided in _______.",
          optionA: "government schools",
          optionB: "private schools",
          optionC: "both",
          correctAnswer: "both",
         }),
      shuffleOptions({
          question: "Seeds are sown in the ________.",
          optionA: "kitchen",
          optionB: "classroom",
          optionC: "soil",
          correctAnswer: "soil",
         }),
      shuffleOptions({
          question: "We purchase the food we need from the ________.",
          optionA: "field",
          optionB: "retail shops",
          optionC: "mandi",
          correctAnswer: "retail shops",
         }),
      shuffleOptions({
          question:
            "Eating together as a family establishes a bond of unity among the members of the family and brings the family members closer to one another. We should eat at least one meal together with our ________.",
          optionA: "friends",
          optionB: "community",
          optionC: "family",
          correctAnswer: "family",
         }),
      shuffleOptions({
          question:
            "Community is a group of people living together in the same area. When the people of a community eat together on certain occasions, it is called ________ eating.",
          optionA: "family",
          optionB: "community",
          optionC: "school",
          correctAnswer: "community",
         }),
      shuffleOptions({
          question:
            "Eating together in schools encourages discipline, manners, and oneness in students. It helps them to understand the diversity and culture of our ________.",
          optionA: "country",
          optionB: "state",
          optionC: "city",
          correctAnswer: "country",
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
            "Vegetables such as bean, carrot, potato, and spinach are rich in vitamins and minerals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Food grains like rice, wheat, oats, and corn are also known as cereals and provide us with proteins.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Pulses, such as kidney bean, moth bean, and black gram, are dried seeds of certain plants and are rich in proteins.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Oil is obtained by crushing the seeds of some plants, such as mustard, groundnut, linseed, and sunflower seeds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Fruits can be classified into two types: fleshy fruits like apple, mango, cherry, and dry fruits like apricot, almond, and raisins.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Spices like pepper, chilli, clove, cardamom, turmeric, and bay leaf are obtained from leaves, seeds, flowers, or barks of many plants.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "The journey of food from the field to our homes involves ploughing, sowing seeds, watering, harvesting, storing, and selling.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Eating together as a family establishes a bond of disunity among the members of the family.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Community eating refers to people of a community eating alone on certain occasions.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Eating together in schools encourages discipline, manners, and oneness in students.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
           }),
    ]),
  }
}

export var activityData;
