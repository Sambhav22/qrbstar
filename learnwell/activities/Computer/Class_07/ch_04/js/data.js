export const chapter = "Chapter - 4: Mail Merge";
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
        question: "What feature in Word helps to send the same letter to many people at once?",
        optionA: "Template",
        optionB: "Mail Merge",
        optionC: "Macros",
        correctAnswer: "Mail Merge",
      }),
      shuffleOptions({
        question: "Which document contains the common text and layout used for every letter?",
        optionA: "Data Source",
        optionB: "Main Document",
        optionC: "Merge Field",
        correctAnswer: "Main Document",
      }),
      shuffleOptions({
        question: "What stores the names, addresses, and contact numbers of recipients?",
        optionA: "Table",
        optionB: "Data Source",
        optionC: "Template",
        correctAnswer: "Data Source",
      }),
      shuffleOptions({
        question: "Which tab on the ribbon provides the Mail Merge Wizard?",
        optionA: "Home",
        optionB: "Mailings",
        optionC: "Insert",
        correctAnswer: "Mailings",
      }),
      shuffleOptions({
        question: "What is a placeholder that shows where the recipient’s information will appear?",
        optionA: "Field Name",
        optionB: "Merge Field",
        optionC: "Page Break",
        correctAnswer: "Merge Field",
      }),
      shuffleOptions({
        question: "Which command allows you to add a new blank row in the recipient list?",
        optionA: "Add New Entry",
        optionB: "Delete Entry",
        optionC: "Cancel",
        correctAnswer: "Add New Entry",
      }),
      shuffleOptions({
        question: "Which dialog box lets you rename or delete a column in the address list?",
        optionA: "Customize Address List",
        optionB: "Page Setup",
        optionC: "Print Preview",
        correctAnswer: "Customize Address List",
      }),
      shuffleOptions({
        question: "What option lets you insert a salutation such as “Dear Sir”?",
        optionA: "Greeting Line",
        optionB: "Address Block",
        optionC: "Insert Field",
        correctAnswer: "Greeting Line",
      }),
      shuffleOptions({
        question: "In which step of the wizard do you preview merged letters?",
        optionA: "Step 5",
        optionB: "Step 3",
        optionC: "Step 1",
        correctAnswer: "Step 5",
      }),
      shuffleOptions({
        question: "Which command is used to print all the merged letters?",
        optionA: "Print",
        optionB: "Save As",
        optionC: "Layout",
        correctAnswer: "Print",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The process of joining a main document with a data source is called ______.",
        optionA: "Mailing",
        optionB: "Merging",
        optionC: "Printing",
        correctAnswer: "Merging",
      }),
      shuffleOptions({
        question: "The document that holds standard information is called the ______.",
        optionA: "Data Source",
        optionB: "Main Document",
        optionC: "Form",
        correctAnswer: "Main Document",
      }),
      shuffleOptions({
        question: "Mail Merge is sometimes also called ______.",
        optionA: "Print Merge",
        optionB: "Merge Sheet",
        optionC: "Letter List",
        correctAnswer: "Print Merge",
      }),
      shuffleOptions({
        question: "The recipient information in Mail Merge is stored in ____ form.",
        optionA: "Paragraph",
        optionB: "Tabular",
        optionC: "Column",
        correctAnswer: "Tabular",
      }),
      shuffleOptions({
        question: "The Mail Merge Wizard is found under the ____ tab.",
        optionA: "Insert",
        optionB: "Mailings",
        optionC: "Review",
        correctAnswer: "Mailings",
      }),
      shuffleOptions({
        question: "The placeholder inserted for recipient information is known as ______.",
        optionA: "Merge Field",
        optionB: "Text Box",
        optionC: "Label",
        correctAnswer: "Merge Field",
      }),
      shuffleOptions({
        question: "You can add, delete, or rename columns using ______.",
        optionA: "Customize Columns",
        optionB: "Mail Preview",
        optionC: "Insert Menu",
        correctAnswer: "Customize Columns",
      }),
      shuffleOptions({
        question: "The letters created by Mail Merge can be ____ or printed later.",
        optionA: "Saved",
        optionB: "Deleted",
        optionC: "Merged Again",
        correctAnswer: "Saved",
      }),
      shuffleOptions({
        question: "The “Find Entry” option helps you to ____ an existing record.",
        optionA: "Search",
        optionB: "Remove",
        optionC: "Create",
        correctAnswer: "Search",
      }),
      shuffleOptions({
        question: "The final step of Mail Merge is ______.",
        optionA: "Completing the Merge",
        optionB: "Starting Document",
        optionC: "Formatting Text",
        correctAnswer: "Completing the Merge",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mail Merge can create letters, labels, and envelopes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The data source can be prepared only in Word.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The “Greeting Line” option adds a salutation like “Dear Mr. Sharma.”",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "It is not possible to delete a column from the address list.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "You can preview merged letters before printing them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mail Merge Wizard guides the user through six steps.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The main document stores all recipient data.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The “Customize Columns” button allows you to work with column headings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The merge field contains the actual address details.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mail Merge can also use an Excel file as a data source.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
