export const chapter = "Chapter - 8: Matter";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What are the two common characteristics shared by all materials or substances mentioned in the text?",
          optionA: "Shape and Color",
          optionB: "Mass and Volume",
          optionC: "Density and Texture",
          correctAnswer: "Mass and Volume",
        },
        {
          question:
            "In which state of matter do particles have a fixed shape and definite volume?",
          optionA: "Liquid",
          optionB: "Solid",
          optionC: "Gas",
          correctAnswer: "Solid",
        },
        {
          question: "Which property is characteristic of liquids?",
          optionA: "Fixed shape",
          optionB: "Definite volume",
          optionC: "Ability to flow and take the shape of the container",
          correctAnswer: "Ability to flow and take the shape of the container",
        },
        {
          question:
            "What is the process called when a gas changes into a liquid on cooling?",
          optionA: "Condensation",
          optionB: "Evaporation",
          optionC: "Vaporization",
          correctAnswer: "Condensation",
        },
        {
          question:
            "During which process does a liquid change into a gas by forming water vapor?",
          optionA: "Melting",
          optionB: "Boiling",
          optionC: "Freezing",
          correctAnswer: "Boiling",
        },
        {
          question: "What property of matter does transparency refer to?",
          optionA: "Ability to dissolve",
          optionB: "Ability to float",
          optionC: "Ability to allow light to pass through",
          correctAnswer: "Ability to allow light to pass through",
        },
        {
          question:
            "Which property helps in distinguishing between transparent, translucent, and opaque materials?",
          optionA: "Roughness",
          optionB: "Lustre",
          optionC: "Transparency",
          correctAnswer: "Transparency",
        },
        {
          question: "What is the term for materials that dissolve in water?",
          optionA: "Insoluble",
          optionB: "Solvent",
          optionC: "Soluble",
          correctAnswer: "Soluble",
        },
        {
          question:
            "What property is associated with materials that can float on water?",
          optionA: "Transparency",
          optionB: "Solubility",
          optionC: "Floatation",
          correctAnswer: "Floatation",
        },
        {
          question:
            "How is the process of a solid changing into a liquid on heating described?",
          optionA: "Condensation",
          optionB: "Melting",
          optionC: "Freezing",
          correctAnswer: "Melting",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            "Walls are typically made of _______ and cement; books are made of _______; utensils are made of _______.",
          optionA: "Wood",
          optionB: "Plastic",
          optionC: "Bricks",
          correctAnswer: "Bricks",
        },
        {
          question:
            "Matter exists in three states: solid, liquid, and _______.",
          optionA: "Gas",
          optionB: "Plasma",
          optionC: "Vapor",
          correctAnswer: "Gas",
        },
        {
          question: "Solids have a fixed shape and _______ volume.",
          optionA: "Changing",
          optionB: "Indefinite",
          optionC: "Definite",
          correctAnswer: "Definite",
        },
        {
          question:
            "Liquids take the shape of the container but have a _______ volume.",
          optionA: "Changing",
          optionB: "Definite",
          optionC: "Infinite",
          correctAnswer: "Definite",
        },
        {
          question: "Gases have no fixed shape and no fixed _______.",
          optionA: "Density",
          optionB: "Mass",
          optionC: "Volume",
          correctAnswer: "Volume",
        },
        {
          question:
            "The process by which a liquid changes into a solid on cooling is called _______.",
          optionA: "Melting",
          optionB: "Freezing",
          optionC: "Evaporation",
          correctAnswer: "Freezing",
        },
        {
          question:
            "Water (liquid) changes into water vapour (gas) by the process of _______ that can occur through evaporation or boiling.",
          optionA: "Condensation",
          optionB: "Sublimation",
          optionC: "Vaporization",
          correctAnswer: "Vaporization",
        },
        {
          question:
            "Materials that allow light to pass through them are called _______; things like glass fall into this category.",
          optionA: "Opaque",
          optionB: "Translucent",
          optionC: "Transparent",
          correctAnswer: "Transparent",
        },
        {
          question:
            "The substance that can be dissolved is called the ______; the substance in which the solute is dissolved is called the ______.",
          optionA: "Solvent, Solute",
          optionB: "Solute, Solution",
          optionC: "Solution, Solvent",
          correctAnswer: "Solute, Solution",
        },
        {
          question:
            "Some materials float on water, and this property is known as _______.",
          optionA: "Buoyancy",
          optionB: "Density",
          optionC: "Solubility",
          correctAnswer: "Buoyancy",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "Matter can exist in four states: solid, liquid, gas, and plasma.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Liquids have a fixed shape and volume.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "During condensation, a gas changes into a liquid.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Transparency is a property that refers to the ability of materials to dissolve in water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Solubility is the property of materials that allows them to float on water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Black soil is mainly found in the Western Ghats of India.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Humus is formed by the decomposition of dead plants and organic matter in the soil.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Evaporation is a process by which a liquid changes into a gas at any temperature.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Soil erosion is a factor that causes variations in soil from region to region.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Red soil gets its distinct color from the calcium found in its composition.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
