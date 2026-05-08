export const chapter = "Chapter - 1: Growing New Plants ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "How do most plants reproduce?",
          optionA: "By seeds",
          optionB: "By spores",
          optionC: "By body parts",
          correctAnswer: "By seeds",
        },
        {
          question: "What is the main function of the seed coat?",
          optionA: "Absorb water",
          optionB: "Protect the seed",
          optionC: "Provide nutrients",
          correctAnswer: "Protect the seed",
        },
        {
          question:
            "What is the process of growing a seed into a seedling called?",
          optionA: "Fertilization",
          optionB: "Germination",
          optionC: "Pollination",
          correctAnswer: "Germination",
        },
        {
          question:
            "What are the two components inside the seed that store food and develop into the new plant?",
          optionA: "Cotyledons and radicle",
          optionB: "Plumule and seed coat",
          optionC: "Embryo and seed leaves",
          correctAnswer: "Embryo and seed leaves",
        },
        {
          question: "How are seeds dispersed by wind?",
          optionA: "Seeds with wing-like structures",
          optionB: "Seeds with hook-like structures",
          optionC: "Seeds with hair around them",
          correctAnswer: "Seeds with hair around them",
        },
        {
          question:
            "Which method of reproduction is used by non-flowering plants like fern, mould, and mushroom?",
          optionA: "By seeds",
          optionB: "By spores",
          optionC: "By body parts",
          correctAnswer: "By spores",
        },
        {
          question:
            "Which part of the plant can develop into a new plant when placed in moist soil and provided with warmth and air?",
          optionA: "Leaves",
          optionB: "Stems",
          optionC: "Roots",
          correctAnswer: "Roots",
        },
        {
          question:
            "What are the two types of crops based on the season they are grown in?",
          optionA: "Summer and winter crops",
          optionB: "Kharif and rabi crops",
          optionC: "Rainy and dry crops",
          correctAnswer: "Kharif and rabi crops",
        },
        {
          question:
            "What is the process of cutting and gathering mature crops called?",
          optionA: "Ploughing",
          optionB: "Harvesting",
          optionC: "Sowing",
          correctAnswer: "Harvesting",
        },
        {
          question:
            "What is added to the soil to increase its fertility in the process of cultivation?",
          optionA: "Water",
          optionB: "Pesticides",
          optionC: "Manure or fertilizers",
          correctAnswer: "Manure or fertilizers",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question: "Most plants originate from ____________.",
          options: {
            optionA: "Flowers",
            optionB: "Seeds",
            optionC: "Spores",
          },
          correctAnswer: "Seeds",
        },
        {
          question:
            "The outer protective covering of a seed is called the seed ____________.",
          options: {
            optionA: "Shield",
            optionB: "Coat",
            optionC: "Wrap",
          },
          correctAnswer: "Coat",
        },
        {
          question:
            "The process of growing a seed into a seedling is known as ____________.",
          options: {
            optionA: "Fertilization",
            optionB: "Germination",
            optionC: "Pollination",
          },
          correctAnswer: "Germination",
        },
        {
          question:
            "Inside the seed, the baby plant is called the ____________, which has a tiny shoot called plumule and a tiny root called radicle.",
          options: {
            optionA: "Embryo",
            optionB: "Cotyledon",
            optionC: "Germ",
          },
          correctAnswer: "Embryo",
        },
        {
          question:
            "Seeds are dispersed by different natural agents, and some seeds are dispersed by the ____________.",
          options: {
            optionA: "Sun",
            optionB: "Wind",
            optionC: "Rain",
          },
          correctAnswer: "Wind",
        },
        {
          question:
            "Non-flowering plants like fern, mould, and mushroom reproduce by ____________.",
          options: {
            optionA: "Seeds",
            optionB: "Spores",
            optionC: "Body parts",
          },
          correctAnswer: "Spores",
        },
        {
          question:
            "Plants like ginger and potato are grown from their underground ____________.",
          options: {
            optionA: "Leaves",
            optionB: "Stems",
            optionC: "Roots",
          },
          correctAnswer: "Stems",
        },
        {
          question:
            "Crops grown from June to September are called ____________ crops.",
          options: {
            optionA: "Winter",
            optionB: "Kharif",
            optionC: "Rabi",
          },
          correctAnswer: "Kharif",
        },
        {
          question:
            "The process of loosening the soil in agriculture is called ____________ or ploughing.",
          options: {
            optionA: "Harvesting",
            optionB: "Sowing",
            optionC: "Tilling",
          },
          correctAnswer: "Tilling",
        },
        {
          question:
            "The cutting and gathering of mature crops is known as ____________.",
          options: {
            optionA: "Sowing",
            optionB: "Harvesting",
            optionC: "Irrigation",
          },
          correctAnswer: "Harvesting",
        },
        {
          question:
            "What is added to the soil to increase its fertility in the process of cultivation?",
          options: {
            optionA: "Water",
            optionB: "Pesticides",
            optionC: "Manure or fertilizers",
          },
          correctAnswer: "Manure or fertilizers",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Plants reproduce only by seeds.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question: "The seed coat protects the seed from sunlight.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Germination is the process of turning a seed into a mature plant.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question: "The radicle is the tiny shoot of a growing plant.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question: "Seeds are dispersed by water, wind, and animals.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question: "All non-flowering plants reproduce by seeds.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question: "Roots cannot develop into new plants.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question: "Crops grown from October to March are called rabi crops.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Harvesting involves the cutting and gathering of mature crops.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Manure and fertilizers are added to the soil to decrease its fertility.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
