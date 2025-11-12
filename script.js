
let courses=[
    {
        id: 101,
        name: "Global History",
        teacher: "Mr. Smith",
        color: "blue"
    },
    {
        id: 202,
        name: "Algebra 1",
        teacher: "Mr. Wong",
        color: "red"
    },
    {
        id: 303,
        name: "Biology",
        teacher: "Ms. Boswell",
        color: "green"
    },
    {        
        id: 404,
        name: "ELA",
        teacher: "Ms. Tavarez",
        color: "yellow"
    }    
]

//------- use getElementByID to get cards container and addcourse button
let cardsContainer = -----;
let addCourseButton = -----;

//----- make function to render class cards called "renderClasses""
function renderClasses() {
    // start with assigning the innerHTML of cardsContainer to an empty string

    // loop through classes array and create class cards
    // ----- for each course in the courses array 

     
        // ----- create an element using the document.createElement function and store it in a variable called card
        

        // ----- set the class name and border color of the card by using card.className and card.style.borderColor
        

        // ----- set the innerHTML of the card to include the class name and teacher from the 
        // classInfo object from this for Each loop
        // make classInfo.name an h2 element and classInfo.teacher a p element
        // use template literals to do this
        



        // ----- append the card to the cardsContainer using insertAdjacentElement("beforeend", card)
        
    
}

// ----- add event listener to the add course button
addCourseButton.addEventListener('click', () => {
    // create a new class object with default values
    const newClass = {
        id: Date.now(),
        name: "New Class",
        teacher: "New Teacher",
        color: "gray"
    };
    // add it to the courses array
    courses.push(newClass);
    renderClasses();
});

renderClasses();
