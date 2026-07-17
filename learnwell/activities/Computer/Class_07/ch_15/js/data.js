export const chapter = "Chapter - 15: Light";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const optionKeys = ["optionA", "optionB", "optionC", "optionD"];
  const optionsArray = optionKeys
    .map((key) => object[key])
    .filter((option) => option !== undefined);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  optionKeys.forEach((key, index) => {
    if (index < optionsArray.length) {
      object[key] = optionsArray[index];
    } else {
      delete object[key];
    }
  });

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Who first showed that white light is made up of seven colours?",
        optionA: "Isaac Newton",
        optionB: "Albert Einstein",
        optionC: "Galileo Galilei",
        correctAnswer: "Isaac Newton",
      }),
      shuffleOptions({
        question: "What happens to light when it falls on a smooth shiny surface?",
        optionA: "It bounces back",
        optionB: "It passes through",
        optionC: "It gets absorbed",
        correctAnswer: "It bounces back",
      }),
      shuffleOptions({
        question: "Which phenomenon shows that light travels in a straight line?",
        optionA: "Rectilinear propagation",
        optionB: "Diffusion",
        optionC: "Refraction",
        correctAnswer: "Rectilinear propagation",
      }),
      shuffleOptions({
        question: "What is the effect called when the right side of an object appears as the left in a mirror?",
        optionA: "Lateral inversion",
        optionB: "Dispersion",
        optionC: "Reflection",
        correctAnswer: "Lateral inversion",
      }),
      shuffleOptions({
        question: "Which mirror is used by dentists to obtain a larger image of teeth?",
        optionA: "Concave mirror",
        optionB: "Convex mirror",
        optionC: "Plane mirror",
        correctAnswer: "Concave mirror",
      }),
      shuffleOptions({
        question: "What type of image is always formed by a convex mirror?",
        optionA: "Virtual and diminished",
        optionB: "Real and inverted",
        optionC: "Enlarged and real",
        correctAnswer: "Virtual and diminished",
      }),
      shuffleOptions({
        question: "Which lens is thicker in the middle and thinner at the edges?",
        optionA: "Convex lens",
        optionB: "Concave lens",
        optionC: "Cylindrical lens",
        correctAnswer: "Convex lens",
      }),
      shuffleOptions({
        question: "What is the splitting of white light into seven colours called?",
        optionA: "Dispersion",
        optionB: "Reflection",
        optionC: "Absorption",
        correctAnswer: "Dispersion",
      }),
      shuffleOptions({
        question: "What is the band of seven colours formed by dispersion called?",
        optionA: "Spectrum",
        optionB: "Shadow",
        optionC: "Ray",
        correctAnswer: "Spectrum",
      }),
      shuffleOptions({
        question: "Which device, when rotated fast, combines seven colours into white light?",
        optionA: "Newton’s colour disc",
        optionB: "Periscope",
        optionC: "Microscope",
        correctAnswer: "Newton’s colour disc",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Light is a form of ______ that enables us to see things.",
        optionA: "energy",
        optionB: "matter",
        optionC: "sound",
        correctAnswer: "energy",
      }),
      shuffleOptions({
        question: "Objects that emit their own light are called ______ objects.",
        optionA: "luminous",
        optionB: "opaque",
        optionC: "transparent",
        correctAnswer: "luminous",
      }),
      shuffleOptions({
        question: "Light travels in a ______ line.",
        optionA: "straight",
        optionB: "curved",
        optionC: "zig-zag",
        correctAnswer: "straight",
      }),
      shuffleOptions({
        question: "The bouncing back of light from a surface is called ______.",
        optionA: "reflection",
        optionB: "refraction",
        optionC: "diffusion",
        correctAnswer: "reflection",
      }),
      shuffleOptions({
        question: "The image formed by a plane mirror is always ______.",
        optionA: "virtual",
        optionB: "real",
        optionC: "inverted",
        correctAnswer: "virtual",
      }),
      shuffleOptions({
        question: "The mirror that curves inward like the inside of a sphere is ______.",
        optionA: "concave",
        optionB: "convex",
        optionC: "flat",
        correctAnswer: "concave",
      }),
      shuffleOptions({
        question: "The mirror that curves outward like the back of a spoon is ______.",
        optionA: "convex",
        optionB: "concave",
        optionC: "plane",
        correctAnswer: "convex",
      }),
      shuffleOptions({
        question: "A ______ lens is used as a magnifying glass.",
        optionA: "convex",
        optionB: "concave",
        optionC: "diverging",
        correctAnswer: "convex",
      }),
      shuffleOptions({
        question: "The seven colours of light are represented by the word ______.",
        optionA: "VIBGYOR",
        optionB: "ROYGBIV",
        optionC: "RGB",
        correctAnswer: "VIBGYOR",
      }),
      shuffleOptions({
        question: "A lens that diverges light rays and makes objects appear smaller is ______.",
        optionA: "concave",
        optionB: "convex",
        optionC: "cylindrical",
        correctAnswer: "concave",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Light becomes visible only when it falls on an object.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Opaque objects allow light to pass completely through them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In regular reflection, light scatters in all directions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A plane mirror forms a virtual and erect image.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Concave mirrors are used as shaving and makeup mirrors.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Convex mirrors always form virtual and diminished images.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "White light consists of seven colours.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A convex lens is also known as a converging lens.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A concave lens always forms a virtual and erect image.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Newton’s colour disc shows that seven colours can combine to form white light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
