export const chapter = "Chapter -5: Tenzing Norgay";
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
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question:
            "When did Tenzing Norgay step on Mount Everest, creating history?",
          optionA: "29 May, 1953",
          optionB: "28 May, 1952",
          optionC: "26 May, 1952",
          correctAnswer: "29 May, 1953",
        }),
      shuffleOptions({
          question: "What does the name 'Tenzing Norgay' signify?",
          optionA: "Brave conqueror of mountains",
          optionB: "Wealthy-fortunate-follower-of-religion",
          optionC: "Mountain guide and explorer",
          correctAnswer: "Wealthy-fortunate-follower-of-religion",
        }),
      shuffleOptions({
          question: "Which Sherpa clan did Tenzing Norgay belong to?",
          optionA: "Khumbu",
          optionB: "Everestian",
          optionC: "Sherpa",
          correctAnswer: "Sherpa",
        }),
      shuffleOptions({
          question:
            "How many times did Tenzing Norgay attempt Everest missions before succeeding?",
          optionA: "Five",
          optionB: "Six",
          optionC: "Seven",
          correctAnswer: "Seven",
        }),
      shuffleOptions({
          question:
            "In which year did Tenzing Norgay make his first attempt to scale Everest?",
          optionA: "1935",
          optionB: "1947",
          optionC: "1952",
          correctAnswer: "1947",
        }),
      shuffleOptions({
          question:
            "Who accompanied Tenzing Norgay during the successful ascent of Mount Everest in 1953?",
          optionA: "Raymond Lambert",
          optionB: "Edmund Hillary",
          optionC: "George Lowe",
          correctAnswer: "Edmund Hillary",
        }),
      shuffleOptions({
          question:
            "What was the altitude of Mount Everest when Tenzing Norgay and Edmund Hillary reached its summit?",
          optionA: "7,890 m (25,900 ft)",
          optionB: "8,500 m (27,900 ft)",
          optionC: "8,848 m (29,028 ft)",
          correctAnswer: "8,848 m (29,028 ft)",
        }),
      shuffleOptions({
          question:
            "Which institute was founded in Darjeeling in 1954, with Tenzing Norgay appointed as its first Director of Field Training?",
          optionA: "Himalayan Adventure Institute",
          optionB: "Everest Expedition Training Center",
          optionC: "Himalayan Mountaineering Institute",
          correctAnswer: "Himalayan Mountaineering Institute",
        }),
      shuffleOptions({
          question:
            "In 2008, which airport in Nepal was renamed in honor of Tenzing Norgay?",
          optionA: "Lukla Airport",
          optionB: "Everest Airport",
          optionC: "Himalaya Airport",
          correctAnswer: "Lukla Airport",
        }),
      shuffleOptions({
          question:
            "When did Tenzing Norgay pass away, and where were his remains cremated?",
          optionA: "9 May, 1986, Himalayan Mountaineering Institute",
          optionB: "29 May, 1953, Lukla Airport",
          optionC: "28 May, 1952, Everest Base Camp",
          correctAnswer: "9 May, 1986, Himalayan Mountaineering Institute",
   }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question:
            "Tenzing Norgay stepped on Mount Everest on ___________, 1953, creating history.",
          optionA: "28 May",
          optionB: "29 May",
          optionC: "30 May",
          correctAnswer: "29 May",
        }),
      shuffleOptions({
          question: "Tenzing Norgay's birthplace was ___________ in Nepal.",
          optionA: "Tengboche",
          optionB: "Khumbu",
          optionC: "Darjeeling",
          correctAnswer: "Tengboche",
        }),
      shuffleOptions({
          question:
            "The word 'Tenzing Norgay' signifies '____________-fortunate-follower-of-religion.'",
          optionA: "Wealthy",
          optionB: "Lucky",
          optionC: "Healthy",
          correctAnswer: "Lucky",
        }),
      shuffleOptions({
          question: "Tenzing Norgay belonged to the ___________ clan.",
          optionA: "Everestian",
          optionB: "Sherpa",
          optionC: "Khumbu",
          correctAnswer: "Sherpa",
        }),
      shuffleOptions({
          question:
            "Tenzing took part in Everest missions ___________ times before achieving success.",
          optionA: "Five",
          optionB: "Six",
          optionC: "Seven",
          correctAnswer: "Seven",
        }),
      shuffleOptions({
          question:
            "Tenzing Norgay got his first opportunity for Everest expedition in the year ___________.",
          optionA: "1935",
          optionB: "1947",
          optionC: "1952",
          correctAnswer: "1935",
        }),
      shuffleOptions({
          question:
            "In 1947, Tenzing attempted to scale Everest with ___________ and Ange Dawa Sherpa, but it ended in failure.",
          optionA: "Raymond Lambert",
          optionB: "Earl Denman",
          optionC: "John Hunt",
          correctAnswer: "Earl Denman",
        }),
      shuffleOptions({
          question:
            "The altitude of Mount Everest when Tenzing and Hillary reached its summit was ___________.",
          optionA: "7,890 m (25,900 ft)",
          optionB: "8,500 m (27,900 ft)",
          optionC: "8,848 m (29,028 ft)",
          correctAnswer: "8,848 m (29,028 ft)",
        }),
      shuffleOptions({
          question:
            "In 1954, Tenzing Norgay was appointed the first Director of Field Training at the ___________ in Darjeeling.",
          optionA: "Everest Expedition Training Center",
          optionB: "Himalayan Adventure Institute",
          optionC: "Himalayan Mountaineering Institute",
          correctAnswer: "Himalayan Mountaineering Institute",
        }),
      shuffleOptions({
          question:
            "Tenzing Norgay's remains were cremated at the ___________ in Darjeeling.",
          optionA: "Lukla Airport",
          optionB: "Tenzing-Hillary Airport",
          optionC: "Himalayan Mountaineering Institute",
          correctAnswer: "Himalayan Mountaineering Institute",
   }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question: "Mount Everest is the highest peak in the world.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Tenzing Norgay was born in Darjeeling, India.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Tenzing Norgay and Edmund Hillary successfully climbed Everest on their first attempt together.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Sherpas are known for their involvement in mountaineering expeditions.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Tenzing Norgay became the first Director of Field Training at the Himalayan Adventure Institute.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Tenzing Norgay's birth name was Namgyal Wangdi.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The first ascent of Kedarnath peak was made by Tenzing Norgay in 1947.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Tenzing Norgay passed away in Kathmandu, Nepal.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The Tenzing-Hillary Airport is located in Kathmandu, Nepal.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Tenzing Norgay and Edmund Hillary reached the summit of Mount Everest on 29 May, 1953.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
