var wrapperEle = document.body.querySelector(".wrapper");
var chrs = [
  {name:"Optimus Prime",
   class: "leader",
   afl:"autobot",
   vehicle:"truck"
  },
  {name:"Megatron",
   class: "leader",
   afl:"decepticon",
   vehicle:"tank"
  },
  {name:"Bumblebee",
   class: "scout",
   afl:"autobot",
   vehicle:"car"
  },
  {name:"Starscream",
   class: "scout",
   afl:"decepticon",
   vehicle:"plane"
  },
  {name:"Ironhide",
   class: "soldier",
   afl:"autobot",
   vehicle:"truck"
  },
  {name:"Brawl",
   class: "soldier",
   afl:"decepticon",
   vehicle:"tank"
  },
  
];

function rollOut(obj){
var robotEle=document.createElement("div");
robotEle.classList.add("character");

var nameEle=document.createElement("h1");
nameEle.style.color=obj.fColor;   
nameEle.innerHTML=obj.name;
  
var classEle=document.createElement("h3");  
  if(obj.class==="leader"){
    classEle.innerHTML=" Class:Leader";
 }else if(obj.class==="scout"){
    classEle.innerHTML=" Class:Scout";
 }else if(obj.class==="soldier"){
    classEle.innerHTML=" Class:Soldier";
  }
    
var aflEle=document.createElement("h3");    
   if(obj.afl==="autobot"){
    aflEle.innerHTML=" Afl:Autobot";
    aflEle.classList.add("autobot");
   }else if(obj.afl==="decepticon"){
    aflEle.innerHTML="Afl:Autobot";
    aflEle.classList.add("autobot");
     
   }  

    
  }
  


  
  
var vehicleEle=document.createElement("h3");   
  
robotEle.appendChild(nameEle);
robotEle.appendChild(classEle);  
wrapperEle.appendChild(robotEle);  


for(var i=0; i<chrs.length; i++){
 rollOut(chrs[i]);
}  
// do not write any elements into your HTML file

// loop through the above array to append a div using .append() into the body tag

// the appended div should always have the ".character" class

// display the characters name, class, and vehicle in the div

// Information should be displayed as "Name: Optimus Prime", with the next information on a different line

// if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"

// in the top right, based on the top information, insert an img elemnt for either the autobot or decepticon

// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png

// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png

// in the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER')

// in the characters' "vehicle" data, change the color of that value in the div based on its value
// truck=blue
// tank=green
// card=gold
// plane=white