// console.log(`${the_Title} \n ${the_description} \n ${the_date}`);
// console.log(markup);
// mytitle.innerHTML=("Elzero"+"<br>").repeat(5);
// markup.appendChild(mytitle);
// let myparagraph=document.createElement("p");
// myparagraph.innerHTML=("Elzero Web School"+"<br>").repeat(5);
// markup.appendChild(myparagraph);
// let myspan= document.createElement("span");
// myspan.innerHTML=("25/10"+"<br>").repeat(5);
// let the_Title="Elzero", the_description = "Elzero web school", the_date = "25/10"; 
// markup.appendChild(myspan);
// document.body.appendChild(markup);
// let markup = document.createElement("div");
// let mytitle=document.createElement("h3");
// mytitle.textContent="Elzero";
// markup.appendChild(mytitle);
// let myparagraph=document.createElement("p");
// myparagraph.textContent="Elzero Web School";
// markup.appendChild(myparagraph);
// let myspan= document.createElement("span");
// myspan.textContent="25/10";
// markup.appendChild(myspan);
// document.body.appendChild(markup);
// document.body.appendChild(markup);
// document.body.appendChild(markup);
// document.body.appendChild(markup);
// document.body.appendChild(markup);
// window.alert("فعل الاشعارات ليصلك كل جديد");
let thebtn=document.getElementById("change-mode"), thebody=document.body, thehead=document.getElementById("head2");
thebtn.onclick=function(){
    if(thebody.classList.contains("dark-theme")){
        thebody.classList.remove("dark-theme");
        thehead.style.backgroundColor="dark";//rgb(7 10 37)
        thebtn.textContent= "dark mode";
    }
    else {
        thebody.classList.add("dark-theme");
        thehead.style.backgroundColor="dark";//black
        thebtn.textContent= "light mode";
    }
    //thebody.classList.toggle("dark-theme");
};
let thelist=document.getElementById("menu"), themenu=document.getElementById("the-menu");
thelist.onclick=function() {
    if(themenu.classList.contains("show")){
        themenu.classList.remove("show");
    }
    else {
        themenu.classList.add("show");
    }
};
let sea=document.getElementById("icons"), effe=document.getElementById("theresult"), can=document.getElementById("cancel");
sea.onclick=function(){
    effe.classList.add("show");
};
can.onclick=function(){
    effe.classList.remove("show");
};





    
