export const chapter = "Chapter - 15: Resources and Their Types ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the main characteristic of a resource?",
        optionA: "Value",
        optionB: "Size",
        optionC: "Color",
        correctAnswer: "A) Value",
      },
      {
        question:
          "What is the second characteristic of a resource, in addition to value?",
        optionA: "Rarity",
        optionB: "Utility",
        optionC: "Age",
        correctAnswer: "B) Utility",
      },
      {
        question:
          "What type of resource can be considered as an actual resource?",
        optionA: "Renewable resource",
        optionB: "Potential resource",
        optionC: "Non-renewable resource",
        correctAnswer: "C) Non-renewable resource",
      },
      {
        question:
          "Which type of resource depends on factors like development in technology, varying needs, and availability of substitutes?",
        optionA: "Renewable resource",
        optionB: "Non-renewable resource",
        optionC: "Actual resource",
        correctAnswer: "B) Non-renewable resource",
      },
      {
        question:
          "What type of resource includes air, water, soil, plants, animals, minerals, and fossil fuels?",
        optionA: "Human resources",
        optionB: "Natural resources",
        optionC: "Manmade resources",
        correctAnswer: "B) Natural resources",
      },
      {
        question:
          "Which type of resource cannot be renewed within a reasonable time?",
        optionA: "Renewable resource",
        optionB: "Non-renewable resource",
        optionC: "Human resource",
        correctAnswer: "B) Non-renewable resource",
      },
      {
        question: "What is the main objective of resource conservation?",
        optionA: "Deplete resources as quickly as possible",
        optionB: "Ensure resources are never used",
        optionC: "Use resources judiciously to maintain availability over time",
        correctAnswer:
          "C) Use resources judiciously to maintain availability over time",
      },
      {
        question: "How can sustainable development be defined?",
        optionA: "Consuming resources at an unsustainable rate",
        optionB: "Balancing needs to conserve resources for the future",
        optionC: "Maximizing resource depletion for immediate benefits",
        correctAnswer:
          "B) Balancing needs to conserve resources for the future",
      },
      {
        question:
          "What is one of the measures for resource conservation and sustainable development mentioned in the text?",
        optionA: "Increasing losses in energy transmission",
        optionB: "Using water resources without restrictions",
        optionC: "Developing alternate sources of energy like wind energy",
        correctAnswer:
          "C) Developing alternate sources of energy like wind energy",
      },
      {
        question:
          "What is one of the measures for resource conservation and sustainable development related to wildlife?",
        optionA: "Increasing hunting of wildlife",
        optionB: "Creating national parks and sanctuaries",
        optionC: "Ignoring the environment",
        correctAnswer: "B) Creating national parks and sanctuaries",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        question:
          "What makes itself manifest all around us in the form of rocks, soil, water, air, minerals, plants, animals, and other things? ",
        optionA: "Nature",
        optionB: "Technology",
        optionC: "Civilization",
        correctAnswer: "Nature",
      },
      {
        question:
          "Man first realized the value of ________, which he could gather to satisfy his needs.",
        optionA: "Fruits",
        optionB: "Leaves",
        optionC: "Animals",
        correctAnswer: "Fruits",
      },
      {
        question:
          "Man discovered fire and used it as a means to cook his food and ________ himself.",
        optionA: "Shelter",
        optionB: "Heat",
        optionC: "Educate",
        correctAnswer: "Heat",
      },
      {
        question:
          "The story of civilization is closely connected with man's learning to use different things in different ways. In using these things, he also learned how to convert a thing into a useful article; for example, he learned to make tools out of ________.",
        optionA: "Wood",
        optionB: "Stone",
        optionC: "Metal",
        correctAnswer: "Stone",
      },
      {
        question:
          "Early Man first found the value and utility of ________, which he could use as a tool.",
        optionA: "Water",
        optionB: "Fire",
        optionC: "Stone",
        correctAnswer: "Stone",
      },
      {
        question:
          "Without technology and skill, it is not possible to transform substances into ________.",
        optionA: "Food",
        optionB: "Resources",
        optionC: "Tools",
        correctAnswer: "Resources",
      },
      {
        question:
          "India has been rich in natural resources, yet it has remained poor because of non-availability of ________ and skill.",
        optionA: "Technology",
        optionB: "Education",
        optionC: "Money",
        correctAnswer: "Technology",
      },
      {
        question:
          "The value of a particular resource can change with time due to factors such as development in technology, varying needs of people, or availability of ________ materials.",
        optionA: "Substitute",
        optionB: "Rare",
        optionC: "Expensive",
        correctAnswer: "Substitute",
      },
      {
        question:
          "Some resources fall under more than one type. Let us know more about the following types of ________.",
        optionA: "Animals",
        optionB: "Resources",
        optionC: "Humans",
        correctAnswer: "Resources",
      },
      {
        question:
          "Sustainable development is meant to balance our needs such that we can conserve these resources for the ________.",
        optionA: "Past",
        optionB: "Present",
        optionC: "Future",
        correctAnswer: "Future",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "A resource is a thing which has some value and utility.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Renewable resources are those that cannot be renewed within a reasonable time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Manmade resources are natural resources made valuable with human effort.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Non-renewable resources, like minerals and petroleum, can be replenished quickly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Sustainable development is about balancing human needs to conserve resources for the future.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Natural resources include air, water, soil, plants, animals, minerals, and fossil fuels.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Actual resources are fully surveyed, quantified, and developed for actual use.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Man's technology and skill provide value and utility to resources.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Potential resources are those with no possibility of development in the future.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Resource conservation involves using resources in a way that they are never depleted.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
