// const buttton = document.getElementById('button').addEventListener('click', btnClicked);

// function btnClicked(e){
//     // console.log("Button Clicked!");
//     // document.getElementById('header-title').textContent = "text changed";
//     // document.querySelector('#main').getElementsByClassName.backgroundColor = "#f4f4f4";
// //  console.log(e.target);
// //  console.log(e.target.id);
// //  console.log(e.target.className);
// //  console.log(e.target.classList);

// //  console.log(e.type);
// //  position from window
// //  console.log(e.clientX);

// console.log(e.altkey);
// }

// var buttton = document.getElementById('button').addEventListener('click', runEvent);
// var buttton = document.getElementById('button').addEventListener('onmouseover', runEvent);
// var box = document.getElementById('box');

// Mouse Events

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseleave', runEvent);
   //box.addEventListener('mousemove', runEvent);

   //Input Events 
//    var itemInput = document.querySelector('input[type="text"]');
    //   var form = document.querySelector('form');
//    var selectInput = document.querySelector('select');

   //Form Events

    //  form.addEventListener('submit', runEvent);


//    itemInput.addEventListener('keydown', runEvent);
//    itemInput.addEventListener('keypress', runEvent);
//    itemInput.addEventListener('focus', runEvent);
//    itemInput.addEventListener('blur', runEvent);
    //form.addEventListener('change', runEvent);



// function runEvent(e) {
//     e.preventDefault();
//     console.log( 'Event type: ' + e.type);
//     console.log(e.target.value);
    

//     // output.innerHTML = '<h3>MouseX: ' +e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

//     // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
//     //  document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
//     // console.log( e.target.value);
// } 

//form submit 
var form = document.getElementById('addForm');
var itemList = document.getElementById("items");

//variable for fitering the items 
var filter = document.getElementById('filter');


//attach event listner to form 
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
//filter event 
filter.addEventListener('keyup', filterItems);


function addItem(e){
    e.preventDefault();

    //get new item
    var newItem = document.getElementById('item').value;

    //create a delete button
    var deletebtn = document.createElement('button');

    deletebtn.className = 'btn btn-danger btn-sm pull-right delete';
    
    deletebtn.appendChild(document.createTextNode('X'));
    
    //create list
    var li = document.createElement('li');
    
   
    //add class
    li.className = 'list-group-item';

    
   

    //add text node with input value 
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deletebtn);

   
    itemList.appendChild(li);
    
}

//Remove Items 
function removeItem(e){
    
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            console.log(1);
            var li = e.target.parentElement;
            console.log(li);
            itemList.removeChild(li);
        }
        
    }
}

//Function to filter Items 
function filterItems(e){
 //get filter text and convert it to lower case
  var text = e.target.value.toLowerCase();
  //get lists 
  var items = itemList.getElementsByTagName('li');
  
  //covert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
    }else {
        item.style.display = 'none';
    }
  });
}



