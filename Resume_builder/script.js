//alert('Loading');
function addNewWeField()
{
    //console.log("adding New Field");
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder',"Enter here");
    
    let  weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById('weAddButton');

    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewaqField()
{
    //console.log("adding New Field");
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder',"Enter here");
    
    let  AqOb=document.getElementById("Aq");
    let AqAddButtonOb=document.getElementById('AqAddButton');

    AqOb.insertBefore(newNode, AqAddButtonOb);
}

//Generating CV
function generateCV(){
    //console.log("generate cv")
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;
    //direct
    document.getElementById('nameT2').innerHTML=nameField;
    //contact
    document.getElementById('contactT').innerHTML=document.getElementById("contactField").value;
    //address
    document.getElementById('addressT').innerHTML=document.getElementById("addressField").value;
     //facebook
    document.getElementById('fbT').innerHTML=document.getElementById("fbField").value;
     //instagram
    document.getElementById('instaT').innerHTML=document.getElementById("instaField").value;
   //Linkedin
    document.getElementById('linkedT').innerHTML=document.getElementById("linkedField").value;
    // Gooing to set Objective
    document.getElementById('objectiveT').innerHTML=document.getElementById("objectiveField").value;
    // Gooing to set Work Experiance
    let wes=document.getElementsByClassName('weField');
    let str="";
    for (e of wes)
    {
        str=str+`<li> ${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML=str;

    // Academic Qualification
    let aqs=document.getElementsByClassName('eqField');
    let str1="";
    for(e of aqs)
    {
        str1 +=`<li> ${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML=str1;
}   
document.getElementById('cv-template').style.display="none";
document.getElementById('cv-template').style.display="block";


function printCV()
{
    window.print();
}