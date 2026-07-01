export const chapter = "Chapter - 8: Reproduction in Plants";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What are the two main parts of plants mentioned in the text?",
          optionA: "Leaves and flowers",
          optionB: "Vegetative and Reproductive",
          optionC: "Fruits and stems",
          correctAnswer: "B",
        },
        {
          question:
            "Which part of a plant is primarily concerned with reproduction?",
          optionA: "Leaves",
          optionB: "Buds",
          optionC: "Flower",
          correctAnswer: "C",
        },
        {
          question:
            "What are the two types of reproduction in plants discussed in the text?",
          optionA: "Single and Double reproduction",
          optionB: "Asexual and Sexual reproduction",
          optionC: "Spring and Summer reproduction",
          correctAnswer: "B",
        },
        {
          question:
            "Which of the following is an example of vegetative propagation through stem?",
          optionA: "Floral bud",
          optionB: "Root tuber",
          optionC: "Runner",
          correctAnswer: "C",
        },
        {
          question:
            "What method is used for artificial propagation where a healthy branch is cut and planted in moist soil?",
          optionA: "Grafting",
          optionB: "Layering",
          optionC: "Cutting",
          correctAnswer: "C",
        },
        {
          question:
            "What is the advantage of vegetative propagation mentioned in the text?",
          optionA: "Produces genetically diverse plants",
          optionB: "Takes more time to produce new plants",
          optionC: "Produces identical plants to the parent plant",
          correctAnswer: "C",
        },
        {
          question:
            "In budding, what happens when the newly formed cell is fully grown?",
          optionA: "It detaches from the parent cell",
          optionB: "It forms a colony",
          optionC: "It remains attached to the parent cell",
          correctAnswer: "A",
        },
        {
          question:
            "Which process involves breaking up of algae like Spirogyra into two or more fragments that grow into new individuals?",
          optionA: "Budding",
          optionB: "Fragmentation",
          optionC: "Spore Formation",
          correctAnswer: "B",
        },
        {
          question: "What is essential for pollination to occur in plants?",
          optionA: "Water",
          optionB: "Sunlight",
          optionC: "Transfer of pollen grains",
          correctAnswer: "C",
        },
        {
          question:
            "What is the process that follows fertilization and involves the formation of fruit and seed?",
          optionA: "Pollination",
          optionB: "Seed Dispersal",
          optionC: "Fruit and Seed Formation",
          correctAnswer: "C",
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
            "Asexual reproduction, also known as ____________ reproduction, is carried out by means of a single parent in plants.",
          options: {
            A: "Binary",
            B: "Sexual",
            C: "Unisexual",
          },
          correctAnswer: "A",
        },
        {
          question:
            "Vegetative propagation through ________ involves the production of new plants from roots, stems, leaves, and buds.",
          options: {
            A: "Flowers",
            B: "Fruits",
            C: "Bulbs",
          },
          correctAnswer: "C",
        },
        {
          question:
            "______ is a common example of a root tuber, where buds develop at the base of the stem and grow into new plants.",
          options: {
            A: "Potato",
            B: "Ginger",
            C: "Onion",
          },
          correctAnswer: "A",
        },
        {
          question:
            "_______ is a method of artificial propagation where a healthy branch is cut and planted in moist soil to grow into a new plant.",
          options: {
            A: "Budding",
            B: "Grafting",
            C: "Cutting",
          },
          correctAnswer: "C",
        },
        {
          question:
            "In budding, the newly formed cell detaches from the parent cell and may form a _______.",
          options: {
            A: "Colony",
            B: "Tuber",
            C: "Rhizome",
          },
          correctAnswer: "A",
        },
        {
          question:
            "Spirogyra, a multicellular alga, undergoes reproduction through ________ when it breaks up into two or more fragments that grow into new individuals.",
          options: {
            A: "Pollination",
            B: "Fragmentation",
            C: "Budding",
          },
          correctAnswer: "B",
        },
        {
          question:
            "______ is essential for sexual reproduction in plants, involving the transfer of pollen grains from an anther to a stigma.",
          options: {
            A: "Seed Dispersal",
            B: "Pollination",
            C: "Fertilization",
          },
          correctAnswer: "B",
        },
        {
          question:
            "Fertilization occurs when a pollen grain lands on the stigma and forms a ________ that grows through the style to reach the ovule.",
          options: {
            A: "Pollen Tube",
            B: "Root",
            C: "Runner",
          },
          correctAnswer: "A",
        },
        {
          question:
            "After fertilization, the ripened ovary becomes the _______, and the ovule develops into the _______.",
          options: {
            A: "Stem, Leaf",
            B: "Fruit, Seed",
            C: "Flower, Petal",
          },
          correctAnswer: "B",
        },
        {
          question:
            "________ is the process by which seeds are scattered to distant places, preventing overcrowding near the parent plant.",
          options: {
            A: "Pollination",
            B: "Seed Dispersal",
            C: "Germination",
          },
          correctAnswer: "B",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Plants undergo both sexual and asexual reproduction.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A",
        },
        {
          question:
            "Vegetative propagation involves the production of new plants from roots, stems, leaves, and buds.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A",
        },
        {
          question:
            "Bulbs, tubers, and rhizomes are examples of vegetative propagation in plants.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A",
        },
        {
          question:
            "Cutting is a method of artificial propagation where a branch is cut and planted to grow into a new plant.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A",
        },
        {
          question:
            "Spirogyra reproduces by fragmentation, breaking up into two or more fragments that grow into new individuals.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A",
        },
        {
          question:
            "Pollination is the process of transferring pollen grains from a stigma to an anther.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
        {
          question:
            "Fertilization occurs when a pollen tube carries the male gamete to the ovule, resulting in the formation of a zygote.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A",
        },
        {
          question:
            "Seed dispersal ensures that seeds are concentrated near the parent plant for better growth conditions.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
        {
          question:
            "Asexual reproduction involves the fusion of male and female gametes.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
        {
          question:
            "The Taj Mahal, built by Shah Jahan, is made entirely of sandstone.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
      ],
  };
}

export var activityData;
