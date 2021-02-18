// Document Object Model in Javascript

//  1. Window is the main container or we can say the global Object and any operation related to entire browser window can be a part of  window object.
// For ex, the histor or to find the url etc.
// Whereas, the DOM is the child of the window Object


// 2. All the members like object, methods, or properties , if they are the part of window object then we do not refer the window object. Since window is the global object so it is not required ot write down window







// DOM VS BOM

// The DOM is the Document object Model, which deals with the document, the HTML elements themselves, eg. document and all traversal you would do in it, events, etc.

// For example,
// change the background color to red,    document.body.style.background = "red"


// The BOM is the Browser Object Model, which deals with browser components aside from the document, like history, location, navigator and as well as screen (as well as some others that vary by browsers). Or in simple meaning all the Window operations which comes under BOM are performed using BOM


// Let 's see more practical on History Object

// Functions alert/confirm/prompt are also a part of BOM:
// They are directly not related to the document, but represent pure browser methods of communicating with the user.

// alert(location.href); // shows current URL.
// if (confirm("Want to Visit ThapaTechnical?") {location.href = "https: // www.youtube.com/thapatechnical";})



// DOM workds with document, html, body, head, a, p etc.






// Navigate through the DOM

// 1. document.documentElement,   returns the Element that is the root element of the document.
// 2. document.head
// 3. document.body
// 4. document.body.childNodes (includes tab, enter and white spaces),  list of the direct children only.
// 5. document.children (without text nodes, only regular Elements).
// 6. document.childNodes.length




// Practice Time

// How to check whether an element has child nodes or not?

// for body

document.body.hasChildNodes();




// How to find the child in DOM tree
// firstChild vs firstElementChild
// lastChild vs lastElementChild












// How to search the Elements and the References. ---> Check searchDom.html

















//  Events in Javascript


// HTML events are 'things' that happen to HTML elements.
// When Javascript is used in HTML pages, Javascript can 'react' on these events.



// HTML Events
// An HTML event can be something the browser does, or something a user does.


// Here are some examples of HTML events:

// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked
// Often, when events happen, you may want to do something.


// Javascript lets you execute code when events are detected.

// HTML allows event handler attributes, with Javascript code to be added to HtML elements.






// 4 ways of writing Events in Javascript.

// 1. using alert()
// 2. By calling a function (we already seen and most common way of writing)
// 3. usint inline events (HTML onclick = "" property and element.onclick)
// 4. using Event Listeners (addEventListener and IE 's attachement)

// check the Events HTML File













// What is Event Object?
// Event Object is the parent object of the event object. For example: MouseEvent, focusEvent, keyboardEvent etc.







// MouseEvent in Javascript

// The MouseEvent Object
// Events that occur when the mouse interacts with the HTML document belong to the MouseEvent Object.




// KeyboardEvents in Javascript

// Events that occur when user presses a key on the keyboard, belonging to the KeyboardEventObject.

// onkeypress = "KeyPress()" onkeydown = "keyDown()"  onkeyup = "KeyUp()"



//  InputEvents in Javascript
// The onchange event occurs when the value of an element has been changed.

// For radiobuttons and checkboxes, the onchange event occurs when the checked state has been changed.




// Interview Questions

// Difference between inline listeners  and event listeners
// AddEventListeners does not overwrite the existing event handlers whereas onclick overrides any existing  onclick= fn event handlers. The other difference is, the onclick will always work, whereas addEventListener does not work in InternetExplorer before version 9.



