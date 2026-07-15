export const chapter = "Chapter - 11: Light  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the representation of a ray of light?",
          optionA: "Line",
          optionB: "Arrow",
          optionC: "Curve",
          correctAnswer: "B",
        },
        {
          question: "Which property is associated with emitting light?",
          optionA: "Luminosity",
          optionB: "Opacity",
          optionC: "Transparency",
          correctAnswer: "A",
        },
        {
          question:
            "What is the phenomenon of light traveling in a straight line called?",
          optionA: "Diffraction",
          optionB: "Refraction",
          optionC: "Rectilinear propagation",
          correctAnswer: "C",
        },
        {
          question:
            "What is the angle between the incident ray and the normal called?",
          optionA: "Angle of incidence",
          optionB: "Angle of reflection",
          optionC: "Reflecting angle",
          correctAnswer: "A",
        },
        {
          question: "What type of reflection occurs on a smooth surface?",
          optionA: "Regular reflection",
          optionB: "Diffused reflection",
          optionC: "Scattered reflection",
          correctAnswer: "A",
        },
        {
          question: "What is lateral inversion in the context of reflection?",
          optionA: "Upside-down reflection",
          optionB: "Left and right interchange",
          optionC: "Distorted reflection",
          correctAnswer: "B",
        },
        {
          question: "What is the nature of the image formed by a plane mirror?",
          optionA: "Real and inverted",
          optionB: "Virtual and erect",
          optionC: "Both A and B",
          correctAnswer: "B",
        },
        {
          question:
            "What type of mirror is used as a rear-view mirror in vehicles?",
          optionA: "Concave mirror",
          optionB: "Convex mirror",
          optionC: "Plane mirror",
          correctAnswer: "B",
        },
        {
          question: "Which lens converges or focuses light?",
          optionA: "Concave lens",
          optionB: "Convex lens",
          optionC: "Both A and B",
          correctAnswer: "B",
        },
        {
          question:
            "What is the phenomenon of splitting white light into seven colors called?",
          optionA: "Refraction",
          optionB: "Dispersion",
          optionC: "Reflection",
          correctAnswer: "B",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question: "A ray is represented by ___________.",
          optionA: "Line",
          optionB: "Arrow",
          optionC: "Curve",
          correctAnswer: "B",
        },
        {
          question:
            "Objects that emit light are called __________ objects, such as the sun and a bulb.",
          optionA: "Transparent",
          optionB: "Luminous",
          optionC: "Opaque",
          correctAnswer: "B",
        },
        {
          question:
            "Rectilinear propagation of light is observed when a beam of light enters a dark room through ___________.",
          optionA: "A window",
          optionB: "A crack or a tiny hole",
          optionC: "A mirror",
          correctAnswer: "B",
        },
        {
          question:
            "Reflection from a smooth surface is known as __________ reflection.",
          optionA: "Scattered",
          optionB: "Regular",
          optionC: "Diffused",
          correctAnswer: "B",
        },
        {
          question:
            "The angle between the normal and the incident ray is called the __________.",
          optionA: "Reflecting angle",
          optionB: "Angle of incidence",
          optionC: "Angle of reflection",
          correctAnswer: "B",
        },
        {
          question:
            "A plane mirror produces a __________ image that appears to be of the same size as the original object.",
          optionA: "Virtual and inverted",
          optionB: "Real and inverted",
          optionC: "Virtual and erect",
          correctAnswer: "C",
        },
        {
          question:
            "The reflecting surface of a concave mirror is curved __________.",
          optionA: "Inwards",
          optionB: "Outwards",
          optionC: "Upwards",
          correctAnswer: "A",
        },
        {
          question: "Convex lenses are also known as __________ lenses.",
          optionA: "Converging",
          optionB: "Diverging",
          optionC: "Refracting",
          correctAnswer: "A",
        },
        {
          question:
            "Isaac Newton demonstrated that white sunlight is made up of seven colors through the phenomenon of __________.",
          optionA: "Refraction",
          optionB: "Dispersion",
          optionC: "Reflection",
          correctAnswer: "C",
        },
        {
          question:
            "When a disc painted with VIBGYOR colors is rotated fast, it appears almost white due to the phenomenon of __________.",
          optionA: "Refraction",
          optionB: "Dispersion",
          optionC: "Persistence of vision",
          correctAnswer: "C",
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
            "A beam is a broader stream of light energy represented by a number of rays.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Opacity is the property of emitting light.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Regular reflection occurs when light falls on a rough or uneven surface.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The laws of reflection state that the incident ray, normal, and the reflected ray lie in different planes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A real image formed by a plane mirror can be obtained on a screen.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Concave mirrors converge or focus light.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Convex lenses are also known as diverging lenses.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Isaac Newton demonstrated that white sunlight is made up of six colors.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A concave lens forms a virtual, erect, and enlarged image when the object is very close to it.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Rainbow is an example of the dispersion of light.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
