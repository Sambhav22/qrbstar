export const chapter = "Chapter - 13: Light ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is reflection of light?",
          optionA: "Absorption of light",
          optionB: "Bouncing back of light",
          optionC: "Refraction of light",
          correctAnswer: "B) Bouncing back of light",
        },
        {
          question:
            "Which law of reflection states that the angle of incidence is always equal to the angle of reflection?",
          optionA: "Law of refraction",
          optionB: "Law of diffraction",
          optionC: "Law of reflection",
          correctAnswer: "C) Law of reflection",
        },
        {
          question: "What is the main characteristic of regular reflection?",
          optionA: "Hazy image",
          optionB: "Parallel reflection",
          optionC: "Irregular reflection",
          correctAnswer: "B) Parallel reflection",
        },
        {
          question: "How is the image formed by a plane mirror described?",
          optionA: "Inverted and magnified",
          optionB: "Erect and same size",
          optionC: "Virtual and enlarged",
          correctAnswer: "B) Erect and same size",
        },
        {
          question:
            "What is the phenomenon of seeing the back of your head in a barber's mirror called?",
          optionA: "Single reflection",
          optionB: "Multiple reflections",
          optionC: "Dispersion",
          correctAnswer: "B) Multiple reflections",
        },
        {
          question:
            "What principle does a kaleidoscope rely on for creating patterns?",
          optionA: "Refraction of light",
          optionB: "Multiple reflections",
          optionC: "Dispersion of light",
          correctAnswer: "B) Multiple reflections",
        },
        {
          question: "What is the main function of the iris in the human eye?",
          optionA: "Control of light entering the eye",
          optionB: "Formation of images",
          optionC: "Detection of colors",
          correctAnswer: "A) Control of light entering the eye",
        },
        {
          question:
            "Which defect of vision is caused by the elongation of the eyeball?",
          optionA: "Myopia",
          optionB: "Hypermetropia",
          optionC: "Presbyopia",
          correctAnswer: "A) Myopia",
        },
        {
          question: "What is the least distance of distinct vision?",
          optionA: "20 cm",
          optionB: "25 cm",
          optionC: "30 cm",
          correctAnswer: "B) 25 cm",
        },
        {
          question:
            "Who developed the Braille system for visually challenged people?",
          optionA: "Sir Isaac Newton",
          optionB: "Louis Braille",
          optionC: "Sir William Herschel",
          correctAnswer: "B) Louis Braille",
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
            "When a light falls on a surface, it bounces back. This bouncing back of light from a surface is called ____________ of light.",
          optionA: "Absorption",
          optionB: "Refraction",
          optionC: "Reflection",
          correctAnswer: "C) Reflection",
        },
        {
          question:
            "The angle of incidence is always equal to the angle of reflection, which is governed by the ____________ of reflection.",
          optionA: "Laws",
          optionB: "Rules",
          optionC: "Principles",
          correctAnswer: "A) Laws",
        },
        {
          question:
            "Reflection is of two types: Regular reflection or specular reflection, and Irregular reflection or ____________ reflection.",
          optionA: "Concentrated",
          optionB: "Diffuse",
          optionC: "Transparent",
          correctAnswer: "B) Diffuse",
        },
        {
          question:
            "A plane mirror is made up of a smooth piece of ____________.",
          optionA: "Plastic",
          optionB: "Glass",
          optionC: "Metal",
          correctAnswer: "B) Glass",
        },
        {
          question:
            "Multiple reflections refer to the reflection of a ray of light more than once, as seen in a ____________.",
          optionA: "Microscope",
          optionB: "Periscope",
          optionC: "Telescope",
          correctAnswer: "B) Periscope",
        },
        {
          question:
            "The dispersion of light splits sunlight into seven colors, known as ____________.",
          optionA: "VIBGYOR",
          optionB: "RGB",
          optionC: "CMYK",
          correctAnswer: "A) VIBGYOR",
        },
        {
          question:
            "The main parts of the human eye include the cornea, iris, pupil, eye lens, and ____________.",
          optionA: "Retina",
          optionB: "Optic Nerve",
          optionC: "Sclera",
          correctAnswer: "A) Retina",
        },
        {
          question:
            "The ability of the eye to change the focal length of the eye lens is called ____________.",
          optionA: "Accommodation",
          optionB: "Refraction",
          optionC: "Dispersion",
          correctAnswer: "A) Accommodation",
        },
        {
          question:
            "Myopia, or short-sightedness, is caused by the ____________ of the eye lens.",
          optionA: "Increase",
          optionB: "Decrease",
          optionC: "Shifting",
          correctAnswer: "B) Decrease",
        },
        {
          question:
            "Who developed the Braille system for visually challenged people?",
          optionA: "Sir Isaac Newton",
          optionB: "Louis Braille",
          optionC: "Sir William Herschel",
          correctAnswer: "B) Louis Braille",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "When a light falls on a surface, it refracts.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "B) False",
        },
        {
          question:
            "The angle of incidence is always greater than the angle of reflection.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "B) False",
        },
        {
          question:
            "Regular reflection or specular reflection occurs when light falls on an uneven surface.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "B) False",
        },
        {
          question:
            "A plane mirror reflects almost all the light falling on it.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "A) True",
        },
        {
          question:
            "Multiple reflections involve the reflection of a ray of light only once.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "B) False",
        },
        {
          question:
            "The dispersion of light results in the formation of six colors, not seven.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "A) True",
        },
        {
          question: "Cones in the retina are sensitive to dim light.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "B) False",
        },
        {
          question:
            "The Braille system uses sixty-three dot patterns or characters.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "A) True",
        },
        {
          question:
            "Myopia is caused by the decrease of the eye lens focal length.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "A) True",
        },
        {
          question:
            "The Communal Award in 1934 reserved 50% seats for untouchables in Provincial Legislative Councils.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "B) False",
        },
      ],
  };
}

export var activityData;
