
var values = [];
var input1,insert;
var msg = "empty";
function Node(val){
  this.data = val;
  this.next = null;
}

function SinglyLinkedList(){
  this._lenght = 0;
  this.head = null;
  //console.log("hi");

}

SinglyLinkedList.prototype.addLast = function(val){
  var node = new Node(val);
  var currNode = this.head;

  //if list is empty 
  if(!currNode)
  {
    this.head = node;
    this._lenght++;
    return node;
  }

  while(currNode.next != null){
    currNode = currNode.next;

  }

  currNode.next = node;
  this._lenght++;
  return node;

};

SinglyLinkedList.prototype.addBegin = function(val) {
  var node = new Node(val);

  var currNode = this.head;

  //if list if empty
  if(!currNode)
  {
    this.head = node;
    this._lenght++;
    return node;
  }

  node.next = currNode;
  this.head = node;
  this._lenght++;
  return node;
};


SinglyLinkedList.prototype.addLoc = function(loc,val) {
  var node = new Node(val);

  var currNode = this.head;
  var counter = 1;
  if(loc >0 && loc<= this._lenght+1) {
    if(loc === this._lenght+1) {
      sing.addLast(val);
      sing.traverse(sing.head);
    } else {
      if(loc == 1){
        sing. addBegin(val);
      } else {
      var prev = null;
      while(counter != loc) {
        prev = currNode;
        currNode = currNode.next;
        counter++;
      }
      prev.next = node;
      node.next = currNode;
      this._lenght++;
    }
    }
  } else {
    console.log("out of range");
    msg = "out of range";
  }


};

SinglyLinkedList.prototype.delLast = function() {

  var currNode = this.head;

  if(!currNode) {
    console.log("The list is empty.");
    msg = "The list is empty.";
    return;
  } else {
    if(this._lenght == 1){
      this._lenght--;
      this.head = null;
      return;
    } else {
      prev = currNode;
      currNode = currNode.next;
    while(currNode.next != null) {
      prev = currNode;
      currNode = currNode.next;
    }
    }
    //console.log("D"+prev.data);
    prev.next = null;
    this._lenght--;
  }
};

SinglyLinkedList.prototype.delBegin = function() {
  var currNode = this.head;
  if(!currNode) {
    console.log("The list is empty.");
    msg = "The list is empty.";
    return;
  } else {
    if(this._lenght == 1){
      this._lenght--;
      this.head = null;
      return;
    } else {
      this.head = currNode.next;
      this._lenght--;
    }
    
  }
};

SinglyLinkedList.prototype.delLoc = function(loc) {
  
  var currNode = this.head;
  //console.log("L"+loc);
  if(loc>0 && loc<=this._lenght){
    if(this._lenght == loc){
      sing.delLast();
      return;
    } else if(loc == 1) {
      sing.delBegin();
    } else {
      var counter = 1;

      var prev = null;

      while(counter != loc) {
        prev = currNode;
        currNode = currNode.next;
        counter++;
      }
      prev.next = currNode.next;
      this._lenght--;
    }
  } else {
    console.log("out of range");
    msg = "out of range";
  }
};


SinglyLinkedList.prototype.traverse = function(head) {
  if(!head) {
    console.log("List is empty.");
    msg = "The list is empty.";
    return true;
  } 
  var i = 0;
  var temp = head;
  while(temp != null) {
    console.log(temp.data +" ");
    values[i] = temp.data;
    i++;
    temp = temp.next;
  }
};
var lineLen = 600;
var sing = new SinglyLinkedList();
function setup() {
  createCanvas(800, 800);
  
  //line for options
  
  //creating button to insert into list at last
  input1 = createInput();
  input1.position(lineLen+10,100);
  input1.attribute("placeholder","value");

  insert1 = createButton('Last');
  insert1.position(lineLen+10+140,100);
  insert1.mousePressed(insertValueAtLast);


  //creating button to insert into list at begin
  input2 = createInput();
  input2.position(lineLen+10,125);
  input2.attribute("placeholder","value");

  insert2 = createButton('Begin');
  insert2.position(lineLen+10+140,125);
  insert2.mousePressed(insertValueAtBegin);

  //creating button to insert into list at location
  input3 = createInput();
  input4 = createInput();
  input3.size(50);
  input4.size(50);
  input3.position(lineLen+10,150);
  input4.position(lineLen+70,150);

  input3.attribute("placeholder","location");
  input4.attribute("placeholder","value");

  insert3 = createButton('Location');
  insert3.position(lineLen+125,150);
  insert3.mousePressed(insertValueAtLoc);

  //delete at last of the list
  delete1 = createButton('Last');
  delete1.position(lineLen+10,200);
  delete1.mousePressed(deleteValueAtLast);

  //delete at begining of the list
  delete1 = createButton('Begin');
  delete1.position(lineLen+60,200);
  delete1.mousePressed(deleteValueAtBegin);

  //delete at location of the list
  input5 = createInput();
  input5.size(50);
  input5.position(lineLen+10,230)
  input5.attribute("placeholder","location");
  delete1 = createButton('Location');
  delete1.position(lineLen+60,230);
  delete1.mousePressed(deleteValueAtLoc);





  //var sing = new SinglyLinkedList(); 
  sing.addLast(10);
  sing.addLast(20);
  sing.addBegin(100);
  sing.addLoc(2,50);
  
  sing.traverse(sing.head);

}


function draw() {
  background(51);
  noFill(0);
  stroke(255);
  strokeWeight(2);


  line(lineLen,0,lineLen,800);
  strokeWeight(1);
  text('Singly Linked List',610,10);
  text('Lenght : '+sing._lenght,610,30);
  fill(255,0,0);
  stroke(255,0,0);
  text(msg,610,50);
  fill(255);
  stroke(255);
  //text.scale(0.5);
  text("Insert At",610,90);
  text("Delete At",610,190);



  var x,y,width,height;
  
  x = 30;
  y = 30;
  width = 50;
  height = 30;
  //rect(x,y,width,height);
  for(var i = 0;i<values.length;i++) {
    noFill(0);
  stroke(255);
  strokeWeight(2);
    rect(x,y,width,height);
    strokeWeight(1);
    text(values[i],x+20,y+20);

//line(10, 16, 20, 16);
    
    if((i+1) != values.length)
    {
      fill(255);
      stroke(255);
      strokeWeight(2);
      //line(10, 16, 20, 16);
      var len = x+width;
      var bred = y+(height*0.5);
      line(len,bred,len+25,bred)
      triangle(len+17,bred-10,len+17,bred+10,len+25,bred);
    }
    x += width+25;
  }
  

}

function insertValueAtLast() {
  var number = input1.value().trim();
  //console.log(number);
  if(number === '') {
    console.log("Input field is empty.");
    msg = "Input field is empty.";
  } else {
    
    sing.addLast(number);
    sing.traverse(sing.head);
    input1.value('');
  }
}

function insertValueAtBegin() {
  var number = input2.value().trim();
  //console.log(number);
  if(number === '') {
    console.log("Input field is empty.");
    msg = "Input field is empty.";
  } else {
    
    sing.addBegin(number);
    sing.traverse(sing.head);
    input2.value('');
  }
}

function insertValueAtLoc() {
  var number1 = input3.value().trim();
  var number2 = input4.value().trim();
  //console.log(number);
  if(number1 === '' || number2 === '' ) {
    console.log("Input field is empty.");
    msg = "Input field is empty.";
  } else {
    
    sing.addLoc(number1,number2);
    sing.traverse(sing.head);
    input3.value('');
    input4.value('');
  }
}

function deleteValueAtLast() {
    sing.delLast();
    if(values.length)
    values.length = values.length-1;
    sing.traverse(sing.head);
    
}
function deleteValueAtBegin() {
    sing.delBegin();
    if(values.length)
    values.length = values.length-1;
    sing.traverse(sing.head);
    
}

function deleteValueAtLoc() {
  var number = input5.value();

  if(number === '') {
    console.log("Input field is empty.");
    msg = "Input field is empty.";
  } else {
    
    sing.delLoc(number);
    if(values.length)
    values.length = values.length-1;
    sing.traverse(sing.head);
    input5.value('');
  }
    
    
}


