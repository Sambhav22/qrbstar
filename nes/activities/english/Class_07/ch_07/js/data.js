export const chapter = "Chapter - 7: Museums of India ";
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
        question: "What is a museum often considered to be?",
        optionA: "A place for scientific research",
        optionB: "A storehouse of knowledge",
        optionC: "A government office",
        correctAnswer: "B. A storehouse of knowledge",
     }),
      shuffleOptions({
        question: "What types of objects can be found in a museum?",
        optionA: "Coins, weapons, and jewelry",
        optionB: "Books, newspapers, and magazines",
        optionC: "Food, clothing, and electronic gadgets",
        correctAnswer: "A. Coins, weapons, and jewelry",
     }),
      shuffleOptions({
        question:
          "What is the primary purpose of a museum in preserving the country's heritage and culture?",
        optionA: "Entertainment",
        optionB: "Education",
        optionC: "Agriculture",
        correctAnswer: "B. Education",
     }),
      shuffleOptions({
        question: "Which is the oldest and largest museum in India?",
        optionA: "The Indian Museum, Kolkata",
        optionB: "Napier Museum, Thiruvananthapuram",
        optionC: "National Rail Museum, Delhi",
        correctAnswer: "A. The Indian Museum, Kolkata",
     }),
      shuffleOptions({
        question: "How many galleries does the Indian Museum, Kolkata, have?",
        optionA: "10",
        optionB: "60",
        optionC: "100",
        correctAnswer: "B. 60",
     }),
      shuffleOptions({
        question:
          "What is the unique feature of the Indian Museum, Kolkata, regarding its artifacts?",
        optionA: "They are all replicas",
        optionB: "Some artifacts can be viewed online",
        optionC: "All artifacts are made of gold",
        correctAnswer: "B. Some artifacts can be viewed online",
     }),
      shuffleOptions({
        question:
          "What is the significance of the sword displayed at Napier Museum?",
        optionA: "It belonged to Lord Napier",
        optionB: "It is a symbol of Indian freedom struggle",
        optionC: "It is a piece of artwork",
        correctAnswer: "B. It is a symbol of Indian freedom struggle",
     }),
      shuffleOptions({
        question:
          "What is the National Rail Museum in Delhi primarily dedicated to?",
        optionA: "Maritime history",
        optionB: "Aviation history",
        optionC: "Railway history",
        correctAnswer: "C. Railway history",
     }),
      shuffleOptions({
        question: "What is unique about the National Rail Museum's collection?",
        optionA: "It has the largest collection of ancient paintings",
        optionB: "It features the latest electric trains",
        optionC: "It includes life-size exhibits and rail simulators",
        correctAnswer: "C. It includes life-size exhibits and rail simulators",
     }),
      shuffleOptions({
        question: "What is the main focus of the Calico Museum of Textiles?",
        optionA: "Textiles and sacred bronze images",
        optionB: "Mughal miniature paintings",
        optionC: "Sculpture and objects from South India",
        correctAnswer: "A. Textiles and sacred bronze images",
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
          "A museum is a _________ of knowledge. It gives us a glimpse into our past through a variety of objects, like photographs, artifacts, statues, coins, weapons, clothes, jewelry, pottery, furniture, and more.",
        optionA: "repository",
        optionB: "restaurant",
        optionC: "recreational center",
        correctAnswer: "A) repository",
     }),
      shuffleOptions({
        question:
          "The Indian Museum, Kolkata, is the _________ and largest museum in India, and is also the ninth oldest museum in the world. It was established in 1814 and was shifted to its present location in 1878.",
        optionA: "newest",
        optionB: "oldest",
        optionC: "smallest",
        correctAnswer: "B) oldest",
     }),
      shuffleOptions({
        question:
          "The museum houses a rare collection of artifacts of Indian and trans-Indian origin, including coins, pottery, textiles, statues, sculpture, and is very popular for the collection of its artifacts on Goddess Durga and the _________.",
        optionA: "Buddha",
        optionB: "Mahatma Gandhi",
        optionC: "Lord Shiva",
        correctAnswer: "A) Buddha",
     }),
      shuffleOptions({
        question:
          "The Napier Museum, Thiruvananthapuram, was originally established in _________; however, its building was not big enough to display all its artifacts, so it was pulled down and a new building was constructed at its present site in 1880.",
        optionA: "1900",
        optionB: "1857",
        optionC: "1950",
        correctAnswer: "B) 1857",
     }),
      shuffleOptions({
        question:
          "The Calico Museum of Textiles mainly focuses on textiles, but it also displays sacred bronze images from South India, Jain manuscripts, sculpture, and objects, Indian miniature paintings, as well as other arts. However, textiles remain its _________ attractions.",
        optionA: "least significant",
        optionB: "main",
        optionC: "secondary",
        correctAnswer: "B) main",
     }),
      shuffleOptions({
        question:
          "The National Rail Museum is the first of its kind in the country. It was inaugurated in 1977 but was brought into its present form in 1995, devoted to the railway _________.",
        optionA: "employees",
        optionB: "trains",
        optionC: "full-fledged",
        correctAnswer: "C) full-fledged",
     }),
      shuffleOptions({
        question:
          "The museum collection comprises life-size exhibits and other rail components from across the Indian subcontinent. It houses locomotives and coaches from the princely states and is upgraded from time to time. The museum also houses the maximum number of rail simulators anywhere in the world, offering a unique _________ experience.",
        optionA: "shopping",
        optionB: "learning",
        optionC: "cooking",
        correctAnswer: "B) learning",
     }),
      shuffleOptions({
        question:
          "The Air Force Museum, Palam, New Delhi, is fully devoted to the Indian Air Force and houses a rich collection of exhibits about the air arm of our _________.",
        optionA: "Navy",
        optionB: "Army",
        optionC: "Armed forces",
        correctAnswer: "C) Armed forces",
     }),
      shuffleOptions({
        question:
          "The children are most excited when they visit the Air Force Museum hangar. It houses a total of 15 aircraft, comprising transport, bomber, and fighter varieties, showing the role our Air Force can play in _________ and peace.",
        optionA: "cooking",
        optionB: "war",
        optionC: "art",
        correctAnswer: "B) war",
     }),
      shuffleOptions({
        question:
          "The narrator wishes they were gardening instead of being a watchman, demonstrating a desire for a different _________.",
        optionA: "profession",
        optionB: "hobby",
        optionC: "routine",
        correctAnswer: "B) hobby",
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
