export const chapter = "Chapter - 11: Light, Shadow and Reflections ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What are the two categories under which sources of light can be grouped?",
          optionA: "Hot and Cold",
          optionB: "Luminous and Non-luminous",
          optionC: "Natural and Artificial",
          correctAnswer: "C) Natural and Artificial",
        },
        {
          question: "Which of the following is a cold source of light?",
          optionA: "Electric bulb",
          optionB: "Firefly",
          optionC: "Candle",
          correctAnswer: "B) Firefly",
        },
        {
          question: "What are objects called that give out their own light?",
          optionA: "Non-luminous objects",
          optionB: "Transparent objects",
          optionC: "Luminous objects",
          correctAnswer: "C) Luminous objects",
        },
        {
          question:
            "According to the rectilinear propagation of light, why can't you see objects on your right or left side in the light of a car headlight on a misty night?",
          optionA: "Light is not strong enough",
          optionB: "Light travels in a curved path",
          optionC: "Light travels in a straight line",
          correctAnswer: "C) Light travels in a straight line",
        },
        {
          question: "What is a pinhole camera a simple application of?",
          optionA: "Reflection of light",
          optionB: "Refraction of light",
          optionC: "Rectilinear propagation of light",
          correctAnswer: "C) Rectilinear propagation of light",
        },
        {
          question:
            "What is the dark region formed behind an opaque object in the path of light called?",
          optionA: "Reflection",
          optionB: "Refraction",
          optionC: "Shadow",
          correctAnswer: "C) Shadow",
        },
        {
          question: "What conditions are needed for the formation of a shadow?",
          optionA: "Opaque object, source of light, and screen",
          optionB: "Translucent object, source of light, and screen",
          optionC: "Transparent object, source of light, and screen",
          correctAnswer: "A) Opaque object, source of light, and screen",
        },
        {
          question: "When does a solar eclipse take place?",
          optionA: "When the moon comes between the sun and the earth",
          optionB: "When the earth comes between the sun and the moon",
          optionC: "When the sun comes between the earth and the moon",
          correctAnswer: "A) When the moon comes between the sun and the earth",
        },
        {
          question: "What is lateral inversion?",
          optionA: "Change in color of an image",
          optionB: "Change in size of an image",
          optionC: "Change of sides in the image formed in a plane mirror",
          correctAnswer:
            "C) Change of sides in the image formed in a plane mirror",
        },
        {
          question:
            "What determines the amount of light that is reflected according to the reflection of light section?",
          optionA: "Time of day",
          optionB: "Material and nature of the surface",
          optionC: "Distance from the light source",
          correctAnswer: "B) Material and nature of the surface",
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
            "An object which gives us light is called a ________ of light.",
          options: ["Emitter", "Radiator", "Source"],
          correctAnswer: "Source",
        },
        {
          question:
            "The stars are also natural sources of light, but they are very far away from the earth, and therefore we get extremely poor light from them. The stars are examples of ________ sources of light.",
          options: ["Luminous", "Transparent", "Opaque"],
          correctAnswer: "Luminous",
        },
        {
          question:
            "Candle, lantern, bulb, electric lamp, fluorescent tube, etc., give us light. These are examples of ________ sources of light.",
          options: ["Radiant", "Man-made", "Thermal"],
          correctAnswer: "Man-made",
        },
        {
          question:
            "Some sources of light become hot when they give out light. The sun is the hottest and brightest source of light for us. An electric bulb gets heated up as electric current flows in it. Hence, these sources of light are called ________ sources of light.",
          options: ["Luminous", "Cold", "Hot"],
          correctAnswer: "Hot",
        },
        {
          question:
            "Shadows are formed when an opaque object comes in the path of _________.",
          options: ["Heat rays", "Sound waves", "Light rays"],
          correctAnswer: "Light rays",
        },
        {
          question:
            "The shadow has the following characteristics: The size and shape of the shadow depend on the size and shape of the _________.",
          options: ["Light source", "Observer", "Object"],
          correctAnswer: "Object",
        },
        {
          question:
            "The process of sending back the light rays which fall on the surface of an object is called ________ of light.",
          options: ["Diffraction", "Reflection", "Refraction"],
          correctAnswer: "Reflection",
        },
        {
          question:
            "On the basis of the nature of the surface, there are two types of reflection: Regular reflection and ________ reflection.",
          options: ["Irregular", "Diffused", "Distorted"],
          correctAnswer: "Irregular",
        },
        {
          question:
            "A plane mirror reflects the light coming from an object. When this reflected light reaches our eyes, we see a copy of the object, and this copy is called _________.",
          options: ["Image", "Shadow", "Reflection"],
          correctAnswer: "Image",
        },
        {
          question:
            "We see objects because they ________ light. If an object absorbs all the light falling on it, then it will appear perfectly black. For example, a blackboard appears black because most of the light falling on the blackboard is absorbed.",
          options: ["Transmit", "Reflect", "Absorb"],
          correctAnswer: "Absorb",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "The sun is a natural source of light.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Cold sources of light, such as fireflies and CFLs, do not produce heat when emitting light.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Transparent objects, like glass, allow light to pass through them freely.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Irregular reflection occurs when light falls on a smooth surface.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "A pinhole camera is a complex device with multiple lenses for capturing images.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Shadows are formed when an opaque object comes in the path of light.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Regular reflection results in light being reflected in multiple directions.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The main source of revenue during the Gupta period was trade routes.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Aryabhatta, a famous astronomer and mathematician, lived during the Gupta period and developed the hexadecimal system of numerals.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "India enjoyed enriched trade relations with other countries like Myanmar, Java, and Cambodia during the Gupta period, especially through major trade centers like Ujjain.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
