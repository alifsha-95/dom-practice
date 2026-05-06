// get container
const container = document.querySelector('#container');// # for id

//1. create a REd color paragraph element

// * create an element <p>
const redP = document.createElement('p');

// give content in element p
redP.textContent = "Hey I'm red";

//give style and color
redP.style.color = 'red';


// add to page
container.appendChild(redP);


//2.create a Blue color h3 element
const blueH3 = document.createElement('h3');
blueH3.textContent = "I'am blue h3!";
blueH3.style.color = 'blue';
container.appendChild(blueH3);



//3. add a Div element  with black border and pink backgorund


const pinkDiv = document.createElement('div');
pinkDiv.style.border = '1px solid black';
pinkDiv.style.backgroundColor = 'pink';

//* create a  <h1> element inside <div> element

const h1 = document.createElement('h1');
h1.textContent = "Hey I'am inside the div element";
// adding h1 element inside the div element 
pinkDiv.appendChild(h1);

//create a <p> element inside <div> element
const p = document.createElement('p');
p.textContent = "I'am also inside the div element";
pinkDiv.appendChild(p);

//add the div to container
container.appendChild(pinkDiv);

// add 3 button to the page
 
const button1 = document.createElement('button');
button1.textContent = 'Button-1';
// set a attribute
button1.setAttribute("id","button1");
button1.onclick = ()=> alert('button 1')
container.appendChild(button1);

const button2 = document.createElement('button');
button2.textContent = "Button-2";
button2.setAttribute("id","button2");
button2.onclick = ()=> alert('Button2')
container.appendChild(button2);

const button3 = document.createElement('button');
button3.textContent = 'Button-3';
button3.setAttribute("id","button3");
button3.onclick = ()=>alert('button 3')
container.appendChild(button3);



//make button-1 alert using method 3 addEventListener
const btn = document.querySelector('#button1');
btn.addEventListener('click',()=>{
    alert('Hello from Button -1');
});

const show = document.querySelector("#button2");
show.addEventListener('click',()=>{
    alert("Hello from Button -2");
});


const popup = document.querySelector('#button3');
popup.addEventListener('click',()=>{
    alert('Hello from button-3')
})












