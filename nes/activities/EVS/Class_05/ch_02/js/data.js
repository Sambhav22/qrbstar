export const chapter = "Chapter - 2: Animals and their Masters";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "What is the term used to describe the illegal hunting of animals for valuable body parts such as skin, tusk, teeth, fur, and horn?",
            options: ["Preservation", "Conservation", "Poaching"],
            answer: "Poaching",
          },
          {
            question:
              "Why is the government concerned about the declining number of wild animals?",
            options: [
              "To increase industrialization",
              "To maintain a balance in the environment",
              "To encourage illegal hunting",
            ],
            answer: "To maintain a balance in the environment",
          },
          {
            question:
              "What initiative was launched by the government in 1973 to protect tigers and their habitats?",
            options: ["Project Elephant", "Project Wildlife", "Project Tiger"],
            answer: "Project Tiger",
          },
          {
            question: "What is the main purpose of Project Tiger?",
            options: [
              "To train tigers for entertainment",
              "To increase the population of tigers for hunting",
              "To protect tigers and their habitats",
            ],
            answer: "To protect tigers and their habitats",
          },
          {
            question:
              "What is the consequence of the exploitation of animals for entertainment purposes, such as making them dance in circuses?",
            options: [
              "Increase in animal population",
              "Decrease in revenue for circus authority",
              "Exploitation of a wide range of animal species",
            ],
            answer: "Exploitation of a wide range of animal species",
          },
          {
            question:
              "What are animals whose life is in danger of being extinct called?",
            options: [
              "Endangered animals",
              "Exploited animals",
              "Extinct animals",
            ],
            answer: "Endangered animals",
          },
          {
            question:
              "Which of the following animals is mentioned as an example of an endangered species?",
            options: ["Dodo", "Blue whale", "Elephant"],
            answer: "Blue whale",
          },
          {
            question:
              "What is the major threat to the survival of animals mentioned in the text?",
            options: [
              "Conservation efforts",
              "Industrialization and modernization",
              "Government regulations",
            ],
            answer: "Industrialization and modernization",
          },
          {
            question:
              "What is the main message for individuals to protect wildlife mentioned in the text?",
            options: [
              "Encourage the use of animal products",
              "Destroy natural habitats for urbanization",
              "Raise awareness about the significance of wildlife",
            ],
            answer: "Raise awareness about the significance of wildlife",
          },
          {
            question:
              "What initiative was launched to conserve wildlife in India by setting up national parks and sanctuaries?",
            options: ["Project Tiger", "Project Elephant", "Project Wildlife"],
            answer: "Project Wildlife",
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
        fillInTheBlankQuestions: [
          {
            question:
              "Animals play a very important role in human life. They carry a special bond with their masters. Domestic or pet animals love their masters a lot. But in the cases of wild animals, these are trapped and sold in the market for their ________, ________, ________, ________, etc. as these are very valuable in Indian and international markets.",
            options: [
              "fur, horn, scales, feathers",
              "skin, tusk, teeth, fur",
              "hooves, antlers, claws, fins",
            ],
            answer: "skin, tusk, teeth, fur",
          },
          {
            question:
              "Preservation and protection of wildlife is crucial to balance the environment. The government has launched certain important programmes to conserve wildlife, and many national parks and sanctuaries have been set up. One such initiative is Project ________, which aims to protect tigers and their habitats.",
            options: ["Lion", "Tiger", "Elephant"],
            answer: "Tiger",
          },
          {
            question:
              "Despite being the national animal of India, tigers are still being killed ruthlessly for their ________. The government initiated the Project Tiger in ________ to protect them and their habitats.",
            options: ["meat, bones", "skin, tusks", "fur, claws"],
            answer: "skin, tusks",
          },
          {
            question:
              "Some animal masters, like snake charmers and circus trainers, exploit animals for entertainment purposes. To make money, they make animals dance on their tune, which exploits a wide range of species. This method of entertainment raises great revenue for the circus _________.",
            options: ["administration", "management", "authority"],
            answer: "authority",
          },
          {
            question:
              "Increasing population, industrialization, and modernization are threats to the survival of animals. Animals whose life is in danger of being extinct are called ________ animals. Examples include blue whale, giant panda, and ________ leopard.",
            options: ["African wild dog", "Snow", "Cheetah"],
            answer: "Snow",
          },
          {
            question:
              "To protect wildlife, individuals should be aware of the significance of wildlife, avoid using products made from animals' skin, and refrain from destroying natural habitats for ________ and ________.",
            options: [
              "agriculture, mining",
              "urbanization, industrialization",
              "tourism, recreation",
            ],
            answer: "urbanization, industrialization",
          },
          {
            question:
              "The government's concern about the declining number of wild animals has led to the launch of various programmes. Projects like Project Tiger and Project Elephant have been started to protect wildlife in their _________.",
            options: ["zoos", "habitats", "sanctuaries"],
            answer: "habitats",
          },
          {
            question:
              "Animals, such as donkey, horse, and ox, are used for transportation purposes. Despite people depending on animals for their livelihood, they are often harsh and ________ towards them.",
            options: ["kind", "cruel", "loving"],
            answer: "cruel",
          },
          {
            question:
              "The population of tigers in India decreased significantly from about 10,000 in the early 1900s to only 1827 in 1972. Due to this, tigers got listed under the category of ________ species by the government.",
            options: ["Protected", "Endangered", "Extinct"],
            answer: "Endangered",
          },
          {
            question:
              "To conserve wildlife, individuals should raise awareness, motivate people not to use products made from animals' skin, and avoid destroying natural habitats for ________ and ________.",
            options: [
              "agriculture, urbanization",
              "industrialization, tourism",
              "mining, recreation",
            ],
            answer: "urbanization, industrialization",
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
        trueOrFalseQuestions: [
          {
            question:
              "Animals play a very important role in human life. They carry a special bond with their masters. Domestic or pet animals love their masters a lot.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Preservation and protection of wildlife are not crucial to balance the environment.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Project Tiger, initiated by the government in 1973, aims to protect elephants and their habitats.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Animals like donkey, horse, and ox are never used for transportation purposes.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The government is not concerned about the declining number of wild animals.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Project Tiger seeks to protect tigers and the area in which they live, providing a suitable environment for their life.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Exploitation of animals for entertainment purposes, such as making them dance in circuses, does not raise great revenue for circus authority.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Endangered animals are those whose life is in danger of being extinct.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "The government's concern about the declining number of wild animals has led to the launch of various conservation programs.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Individuals should not raise awareness about the significance of wildlife to protect it.",
            options: ["True", "False"],
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
