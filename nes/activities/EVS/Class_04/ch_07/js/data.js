export const chapter = "Chapter - 7: Plants Around Us";
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
    questions: [
      {
        questions: [
          {
            question: "What is the trunk of a tree called?",
            options: ["Stem", "Branch", "Trunk"],
            answer: "Trunk",
          },
          {
            question: "Which category do wheat, paddy, and tomato belong to?",
            options: ["Trees", "Shrubs", "Herbs"],
            answer: "Shrubs",
          },
          {
            question:
              "What is the impact of cutting down trees on soil conservation mentioned in the text?",
            options: [
              "Increased fertility",
              "Shallow rivers and floods",
              "Improved water retention",
            ],
            answer: "Shallow rivers and floods",
          },
          {
            question: "Why do forests become the habitat of many wild animals?",
            options: [
              "Due to industrial activities",
              "Because of human settlements",
              "Presence of trees",
            ],
            answer: "Presence of trees",
          },
          {
            question:
              "What is the consequence of cutting down trees on air quality and respiratory health?",
            options: [
              "Increased oxygen levels",
              "Decreased carbon dioxide levels",
              "Decreased oxygen levels and increased carbon dioxide levels",
            ],
            answer:
              "Decreased oxygen levels and increased carbon dioxide levels",
          },
          {
            question:
              "How do plants contribute to humans according to the text?",
            options: [
              "Provide shelter",
              "Give oxygen, food, perfumes, fuels, wood, and medicines",
              "Absorb excessive carbon dioxide",
            ],
            answer: "Give oxygen, food, perfumes, fuels, wood, and medicines",
          },
          {
            question:
              "What should individuals do after planting trees, according to the text?",
            options: [
              "Ignore them",
              "Water and provide manure",
              "Cut them down for personal use",
            ],
            answer: "Water and provide manure",
          },
          {
            question:
              "Who owns the fruits, vegetables, and flowers grown in a family's lawn?",
            options: [
              "Community",
              "Neighbors",
              "The family that owns the lawn",
            ],
            answer: "The family that owns the lawn",
          },
          {
            question:
              "What are plants in a garden essential for, according to the text?",
            options: [
              "Solely for decoration",
              "Providing oxygen only",
              "Fulfilling various human needs such as food, perfumes, fuels, wood, and medicines",
            ],
            answer:
              "Fulfilling various human needs such as food, perfumes, fuels, wood, and medicines",
          },
          {
            question:
              "How does the text suggest individuals can contribute to saving the environment?",
            options: [
              "Ignoring plants and trees",
              "Exploiting plants for personal needs",
              "Protecting and taking care of plants",
            ],
            answer: "Protecting and taking care of plants",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        questions: [
          {
            question:
              "Big and tall plants, such as mango, neem, and peepal, are called ___________.",
            options: ["Herbs", "Shrubs", "Trees"],
            answer: "Trees",
          },
          {
            question:
              "Small plants with thin and woody stems are known as ___________.",
            options: ["Trees", "Shrubs", "Herbs"],
            answer: "Shrubs",
          },
          {
            question:
              "The stem of a tree is commonly referred to as ___________.",
            options: ["Branch", "Trunk", "Root"],
            answer: "Trunk",
          },
          {
            question:
              "Cutting down of trees causes problems such as soil erosion, leading to shallow rivers and ___________.",
            options: ["Desertification", "Floods", "Droughts"],
            answer: "Floods",
          },
          {
            question:
              "Forests serve as the habitat for many wild animals, and cutting down trees puts these animals at risk of becoming ___________ and ___________.",
            options: [
              "Extinct, endangered",
              "Endangered, rare",
              "Endangered, protected",
            ],
            answer: "Endangered, extinct",
          },
          {
            question:
              "Trees play a crucial role in reducing pollution by decreasing the amount of ___________ in the air.",
            options: ["Oxygen", "Carbon dioxide", "Nitrogen"],
            answer: "Oxygen",
          },
          {
            question:
              "Plants, being living beings, eat, grow, and ___________.",
            options: ["Fly", "Breathe", "Hibernate"],
            answer: "Breathe",
          },
          {
            question:
              "The fruits, vegetables, and flowers grown in a family's lawn belong to that family as they have ___________ of these plants.",
            options: ["Ownership", "Rights", "Stewardship"],
            answer: "Ownership",
          },
          {
            question:
              "Plants provide humans with essential resources such as oxygen, food, perfumes, fuels, wood, and ___________.",
            options: ["Metals", "Clothing", "Medicines"],
            answer: "Medicines",
          },
          {
            question:
              "When walking in a garden, individuals feel relaxed and close to nature, emphasizing the importance of protecting and taking care of ___________.",
            options: ["Pets", "Animals", "Plants"],
            answer: "Plants",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        questions: [
          {
            question:
              "Big and tall plants like mango, neem, and peepal are referred to as shrubs.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "The stem of a tree is commonly known as a trunk.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Cutting down trees can lead to soil erosion and shallow rivers.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Forests serve as the habitat for many wild animals, and cutting down trees does not impact their survival.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Trees play a role in reducing pollution by increasing the amount of oxygen in the air.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Plants do not contribute to humans by providing essential resources such as oxygen, food, and medicines.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Ownership of the fruits, vegetables, and flowers grown in a family's lawn belongs to the community.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Plants in a garden are essential solely for decoration purposes.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "It is not the responsibility of individuals to protect and take care of plants.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Cutting down trees has no impact on air quality and respiratory health.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
