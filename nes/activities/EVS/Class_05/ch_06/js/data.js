export const chapter = "Chapter - 6: Forests and Forest Life ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What is the main occupation of the Bodo tribe?",
            options: [
              "A) Woodcutting",
              "B) Tea plantation",
              "C) Herding animals",
            ],
            answer: "B) Tea plantation",
          },
          {
            question:
              "What is jhum agriculture practiced by many tribal people?",
            options: [
              "A) Irrigated farming",
              "B) Terrace farming",
              "C) Slash-and-burn agriculture",
            ],
            answer: "C) Slash-and-burn agriculture",
          },
          {
            question:
              "Which tribe is known for being the best craftsmen of bamboo in Assam?",
            options: ["A) Gonds", "B) Mundas", "C) Bodos"],
            answer: "C) Bodos",
          },
          {
            question:
              "What is the chief occupation of the Van Gujjars, Cabadis, and Bakarwals?",
            options: ["A) Farming", "B) Herding animals", "C) Fishing"],
            answer: "B) Herding animals",
          },
          {
            question:
              "What is the negative impact of deforestation on underground water levels?",
            options: ["A) Increase", "B) No impact", "C) Decrease"],
            answer: "C) Decrease",
          },
          {
            question:
              "Which method is NOT used for clearing forests during deforestation?",
            options: ["A) Burning", "B) Logging", "C) Recycling"],
            answer: "C) Recycling",
          },
          {
            question: "What is the purpose of the Chipko Movement?",
            options: [
              "A) Ban on hunting",
              "B) Forest conservation",
              "C) Tree hugging",
            ],
            answer: "B) Forest conservation",
          },
          {
            question:
              "Which method fosters ecological balance by planting trees on barren lands?",
            options: [
              "A) Deforestation",
              "B) Social Forestry",
              "C) Shifting cultivation",
            ],
            answer: "B) Social Forestry",
          },
          {
            question:
              "Where are the Gonds, one of the largest tribes in India, predominantly found?",
            options: [
              "A) Punjab",
              "B) Madhya Pradesh, Andhra Pradesh, Odisha",
              "C) Jharkhand, Bihar, Odisha, West Bengal",
            ],
            answer: "B) Madhya Pradesh, Andhra Pradesh, Odisha",
          },
          {
            question:
              "What percentage of the Indian population do the tribal people (Adivasis) constitute?",
            options: ["A) 2%", "B) 5%", "C) 8%"],
            answer: "C) 8%",
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
        fill_in_the_blank_questions: [
          {
            question:
              "A large area of land densely covered with trees and bushes is called a ___________.",
            options: ["A) Desert", "B) Forest", "C) Meadow"],
            answer: "B) Forest",
          },
          {
            question:
              "Forests support a large variety of life forms such as humans, animals, birds, etc. They perform functions such as maintaining ecological balance and helping in the purification of ___________.",
            options: ["A) Water", "B) Air", "C) Soil"],
            answer: "B) Air",
          },
          {
            question:
              "Tribal people who live in or near the forests and are totally dependent on forests for their sustenance are known as ___________.",
            options: ["A) Nomads", "B) Adivasis", "C) Settlers"],
            answer: "B) Adivasis",
          },
          {
            question:
              "Many tribal people practice __________ agriculture, also known as slash-and-burn, where they cut or burn trees to get land for cultivation.",
            options: ["A) Terrace", "B) Jhum", "C) Irrigated"],
            answer: "B) Jhum",
          },
          {
            question:
              "The Gonds, one of the largest tribes in India, are predominantly found in __________, Andhra Pradesh, and Odisha.",
            options: ["A) Punjab", "B) Madhya Pradesh", "C) Jharkhand"],
            answer: "B) Madhya Pradesh",
          },
          {
            question:
              "Deforestation is the removal or destruction of large areas of __________.",
            options: ["A) Deserts", "B) Oceans", "C) Forests"],
            answer: "C) Forests",
          },
          {
            question:
              "Burning and cutting are the two methods used for clearing forests during __________.",
            options: ["A) Urbanization", "B) Conservation", "C) Deforestation"],
            answer: "C) Deforestation",
          },
          {
            question:
              "To prevent deforestation, one of the suggested steps is to recycle things like paper, cloth, and __________.",
            options: ["A) Plastic", "B) Metal", "C) Glass"],
            answer: "C) Glass",
          },
          {
            question:
              "__________ is the management and protection of forests by planting more and more trees on barren and deforested lands.",
            options: [
              "A) Urbanization",
              "B) Social Forestry",
              "C) Industrialization",
            ],
            answer: "B) Social Forestry",
          },
          {
            question:
              "The leaders of the famous Chipko Movement, including Sundarlal Bahuguna and Chandi Prasad, advocated for the __________ of trees and forests.",
            options: ["A) Conservation", "B) Destruction", "C) Expansion"],
            answer: "A) Conservation",
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
        true_or_false_questions: [
          {
            question:
              "Forests support a large variety of life forms such as humans, animals, birds, etc. and are vital for ecological balance.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Tribal people, known as Adivasis, often practice jhum agriculture, involving cutting or burning trees for cultivation.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Deforestation can be intentional or unintentional and is primarily caused by human activities like farming, grazing, mining, and drilling.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Recycling materials like paper, cloth, and glass is suggested as a step to prevent deforestation and promote environmental conservation.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Social Forestry involves the management and protection of forests by planting more trees on barren and deforested lands.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "National Parks and Sanctuaries provide natural habitats for wildlife, helping protect flora and fauna in their natural state.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "The Chipko Movement, led by environmentalists like Sundarlal Bahuguna, aimed to prevent the cutting down of trees and promote forest conservation.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Shifting cultivation, often starting with cutting trees and using fire for crop production, is a sustainable agricultural practice among many tribal communities.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Herding and rearing animals is the chief occupation of groups like the Van Gujjars, Cabadis, and Bakarwals.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "The negative impacts of deforestation include a decrease in the level of underground water and adverse effects on natural ecosystems, biodiversity, and climate.",
            options: ["True", "False"],
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
