export const chapter = "Chapter - 9: Electricity and Circuits";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is electricity?",
          optionA: "A form of gas",
          optionB: "A form of energy involving the flow of electrons",
          optionC: "A type of liquid",
          correctAnswer: "A form of energy involving the flow of electrons",
        },
        {
          question: "What is the function of an electric cell?",
          optionA: "Converts mechanical energy into electrical energy",
          optionB: "Converts chemical energy into electrical energy",
          optionC: "Stores electrical energy permanently",
          correctAnswer: "Converts chemical energy into electrical energy",
        },
        {
          question:
            "What is the difference between primary cells and secondary cells?",
          optionA: "Primary cells are rechargeable; secondary cells are not",
          optionB:
            "Primary cells can be used only once; secondary cells can be recharged",
          optionC: "Primary cells are larger in size than secondary cells",
          correctAnswer:
            "Primary cells can be used only once; secondary cells can be recharged",
        },
        {
          question: "What is the primary component of a dry cell?",
          optionA: "Copper wire",
          optionB: "Zinc metal container with ammonium chloride paste",
          optionC: "Aluminum rod",
          correctAnswer: "Zinc metal container with ammonium chloride paste",
        },
        {
          question: "Why is an inert gas used in an electric bulb?",
          optionA: "To produce a pleasant scent",
          optionB: "To prevent the filament from burning up",
          optionC: "To make the bulb glow brighter",
          correctAnswer: "To prevent the filament from burning up",
        },
        {
          question: "What are the essential components of an electric circuit?",
          optionA: "Source, conductor, and switch",
          optionB: "Source, conductor, and insulator",
          optionC: "Source, appliance, and battery",
          correctAnswer: "Source, conductor, and switch",
        },
        {
          question: "What happens in an open circuit?",
          optionA: "Current flows through the circuit",
          optionB: "Bulb glows brightly",
          optionC: "Circuit is incomplete, and the bulb does not glow",
          correctAnswer: "Circuit is incomplete, and the bulb does not glow",
        },
        {
          question: "How does an electric switch control the flow of current?",
          optionA: "By producing more electricity",
          optionB: "By cutting off the current when in the OFF position",
          optionC: "By increasing the resistance in the circuit",
          correctAnswer: "By cutting off the current when in the OFF position",
        },
        {
          question:
            "What does the green-colored wire in a domestic circuit represent?",
          optionA: "Positive terminal",
          optionB: "Negative terminal",
          optionC: "Earthing wire",
          correctAnswer: "Earthing wire",
        },
        {
          question: "What is the purpose of a fuse in an electrical circuit?",
          optionA: "Increases the flow of current",
          optionB: "Protects the circuit from short circuits or overloading",
          optionC: "Acts as a conductor in the circuit",
          correctAnswer:
            "Protects the circuit from short circuits or overloading",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question:
            "Electricity is the flow of tiny charges called __________.",
          optionA: "Protons",
          optionB: "Electrons",
          optionC: "Neutrons",
          correctAnswer: "Electrons",
        },
        {
          question:
            "An electric cell is a device that converts chemical energy into __________ energy.",
          optionA: "Mechanical",
          optionB: "Thermal",
          optionC: "Electrical",
          correctAnswer: "Electrical",
        },
        {
          question:
            "Dry cells, such as those used in torches, do not contain any __________ and can be handled safely.",
          optionA: "Liquid electrolyte",
          optionB: "Gaseous electrolyte",
          optionC: "Solid electrolyte",
          correctAnswer: "Liquid electrolyte",
        },
        {
          question:
            "An electric bulb consists of a thin, coiled wire made of __________ that glows when current passes through it.",
          optionA: "Copper",
          optionB: "Tungsten",
          optionC: "Aluminum",
          correctAnswer: "Tungsten",
        },
        {
          question:
            "In an electric circuit, the direction of current is considered from the __________ terminal to the __________ terminal of an electric cell.",
          optionA: "Positive, positive",
          optionB: "Negative, positive",
          optionC: "Positive, negative",
          correctAnswer: "Positive, negative",
        },
        {
          question:
            "An electric switch is used to control the flow of __________ through an electric circuit.",
          optionA: "Water",
          optionB: "Air",
          optionC: "Electric current",
          correctAnswer: "Electric current",
        },
        {
          question:
            "The green-colored wire in a domestic circuit is also known as the __________ wire and is used for protection against shocks.",
          optionA: "Positive",
          optionB: "Neutral",
          optionC: "Earthing",
          correctAnswer: "Earthing",
        },
        {
          question:
            "A device used for protecting the circuit from short circuits or overloading is called a __________.",
          optionA: "Resistor",
          optionB: "Capacitor",
          optionC: "Fuse",
          correctAnswer: "Fuse",
        },
        {
          question:
            "Conductors of electricity, such as metals, allow electric current to pass through them, while __________ do not.",
          optionA: "Semiconductors",
          optionB: "Insulators",
          optionC: "Superconductors",
          correctAnswer: "Insulators",
        },
        {
          question:
            "If an electric cell's chemicals are used up without a switch and device like a bulb in the circuit, the cell __________ working.",
          optionA: "Continues",
          optionB: "Increases",
          optionC: "Stops",
          correctAnswer: "Stops",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question:
            "The emergence of towns during the second urbanization was solely due to agricultural expansion.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Harappan Civilization is considered the last urbanization in the Indian subcontinent.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Population increase and surplus labor were significant factors contributing to the growth of towns during the second urbanization.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Mathura attracted skilled craftsmen primarily due to its association with Lord Krishna.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Guilds formed during urbanization aimed to diminish the market value of manufactured goods.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Agricultural intensification during urbanization was supported by the introduction of new agricultural tools.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The village headman in North Indian villages did not have the responsibility of collecting taxes from villagers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Tamil Nadu did not have large villages with vast land owned by rich individuals known as Vellalars.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Arikamedu was not a port town known for its trade relations with the Roman Empire.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The emergence of towns during the second urbanization was mainly due to a surplus of labor from administrative duties.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
