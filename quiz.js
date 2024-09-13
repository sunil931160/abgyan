let inp = document.getElementById("inp-1");
let para1 = document.getElementById("para-1");
let NextBtn = document.getElementById("btn-1");


function submit(){
    if(inp.value=== "Paris"){
        para1.innerHTML = "Your Answer is Correct Please Click on Next Question button ";
        para1.style.color = "green";
        NextBtn.style.display = "block";
    }else{
        para1.innerHTML = "Your Answer is Wrong";
        para1.style.color = "red";
        NextBtn.style.display = "none";
    }
}
function nextBtn1(){
let lists1 = document.getElementsByClassName("lists-1")[0];
let lists = document.getElementsByClassName("lists")[0];

    lists1.style.display = "block";
    lists.style.display = "none";
    inp.value="";
    para1.innerHTML ="";
}


// 1 list
let inp2 = document.getElementById("inp-2");
let para2 = document.getElementById("para-2");
let NextBtn2 = document.getElementById("btn-2");
let submitBtn2 = document.getElementById("submit-btn-2")

submitBtn2.addEventListener("click",() => {
    if(inp2.value === "Au"){
        para2.innerHTML = "Your Answer is Correct Please Click on Next Question button ";
        para2.style.color = "green";
        NextBtn2.style.display = "block";
    }else{
        para2.innerHTML = "Your Answer is Wrong";
        para2.style.color = "red";
        NextBtn2.style.display = "none";
    }
})
NextBtn2.addEventListener ("click",() => {
    let lists2 = document.getElementsByClassName("lists-2")[0];
    let lists1 = document.getElementsByClassName("lists-1")[0];
    let lists = document.getElementsByClassName("lists")[0];

    lists2.style.display = "block";
    lists1.style.display = "none";
    lists.style.display = "none";
    inp2.value="";
    para2.innerHTML ="";
})

// 2nd list
let inp3 = document.getElementById("inp-3");
let para3 = document.getElementById("para-3");
let NextBtn3 = document.getElementById("btn-3");
let submitBtn3 = document.getElementById("submit-btn-3")

submitBtn3.addEventListener("click",() => {
    if(inp3.value === "Harper Lee"){
        para3.innerHTML = "Your Answer is Correct Please Click on Next Question button ";
        para3.style.color = "green";
        NextBtn3.style.display = "block";
    }else{
        para3.innerHTML = "Your Answer is Wrong";
        para3.style.color = "red";
        NextBtn3.style.display = "none";
    }
})
NextBtn3.addEventListener ("click",() => {
    let lists3 = document.getElementsByClassName("lists-3")[0];
    let lists2 = document.getElementsByClassName("lists-2")[0];
    let lists1 = document.getElementsByClassName("lists-1")[0];
    let lists = document.getElementsByClassName("lists")[0];

    lists3.style.display = "block";
    lists2.style.display = "none";
    lists1.style.display = "none";
    lists.style.display = "none";
    inp3.value="";
    para3.innerHTML ="";
})



// 3nd list
let inp4 = document.getElementById("inp-4");
let para4 = document.getElementById("para-4");
let NextBtn4 = document.getElementById("btn-4");
let submitBtn4 = document.getElementById("submit-btn-4")

submitBtn4.addEventListener("click",() => {
    if(inp4.value === "Jupiter"){
        para4.innerHTML = "Your Answer is Correct Please Click on Next Question button ";
        para4.style.color = "green";
        NextBtn4.style.display = "block";
    }else{
        para4.innerHTML = "Your Answer is Wrong";
        para4.style.color = "red";
        NextBtn4.style.display = "none";
    }
})
NextBtn4.addEventListener ("click",() => {
    let lists4 = document.getElementsByClassName("lists-4")[0];
    let lists3 = document.getElementsByClassName("lists-3")[0];
    let lists2 = document.getElementsByClassName("lists-2")[0];
    let lists1 = document.getElementsByClassName("lists-1")[0];
    let lists = document.getElementsByClassName("lists")[0];

    lists4.style.display = "block";
    lists3.style.display = "none";
    lists2.style.display = "none";
    lists.style.display = "none";
    lists1.style.display = "none";
    inp4.value="";
    para4.innerHTML ="";
})



// 4 list
let inp5 = document.getElementById("inp-5");
let para5 = document.getElementById("para-5");
let NextBtn5 = document.getElementById("btn-5");
let submitBtn5 = document.getElementById("submit-btn-5")

submitBtn5.addEventListener("click",() => {
    if(inp5.value!="Hydrogen"){
        para5.innerHTML = "Your Answer is Wrong";
        para5.style.color = "red";
        NextBtn5.style.display = "none";
    }else{
        para5.innerHTML = "Your Answer is Correct Please Click on Next Question button ";
        para5.style.color = "green";
        NextBtn5.style.display = "block";
    }
})
NextBtn5.addEventListener ("click",() => {
    let lists5 = document.getElementsByClassName("lists-5")[0];
    let lists4 = document.getElementsByClassName("lists-4")[0];
    let lists3 = document.getElementsByClassName("lists-3")[0];
    let lists2 = document.getElementsByClassName("lists-2")[0];
    let lists1 = document.getElementsByClassName("lists-1")[0];
    let lists = document.getElementsByClassName("lists")[0];

    lists5.style.display = "block";
    lists4.style.display = "none";
    lists3.style.display = "none";
    lists2.style.display = "none";
    lists.style.display = "none";
    lists1.style.display = "none";
    inp5.value="";
    para5.innerHTML ="";
})

// 5 list

let inp6 = document.getElementById("inp-6");
let para6 = document.getElementById("para-6");
let NextBtn6 = document.getElementById("btn-6");
let submitBtn6 = document.getElementById("submit-btn-6")

submitBtn6.addEventListener("click",() => {
    if(inp6.value === "1912"){
        para6.innerHTML = "Your Answer is Correct Please Click on Next Question button ";
        para6.style.color = "green";
        NextBtn6.style.display = "block";
    }else{
        para6.innerHTML = "Your Answer is Wrong";
        para6.style.color = "red";
        NextBtn6.style.display = "none";
    }
})
NextBtn6.addEventListener ("click",() => {
    let lists6 = document.getElementsByClassName("lists-6")[0];
    let lists5 = document.getElementsByClassName("lists-5")[0];
    let lists4 = document.getElementsByClassName("lists-4")[0];
    let lists3 = document.getElementsByClassName("lists-3")[0];
    let lists2 = document.getElementsByClassName("lists-2")[0];
    let lists1 = document.getElementsByClassName("lists-1")[0];
    let lists = document.getElementsByClassName("lists")[0];

    lists6.style.display = "block";
    lists5.style.display = "none";
    lists4.style.display = "none";
    lists3.style.display = "none";
    lists2.style.display = "none";
    lists.style.display = "none";
    lists1.style.display = "none";
    inp6.value="";
    para6.innerHTML ="";
})

// // 6 list


let inp7 = document.getElementById("inp-7");
let para7 = document.getElementById("para-7");
let NextBtn7 = document.getElementById("btn-7");
let submitBtn7 = document.getElementById("submit-btn-7")

submitBtn7.addEventListener("click",() => {
    if(inp7.value === "Leonardo da Vinci"){
        para7.innerHTML = "Your Answer is Correct Please Click on Next Question button ";
        para7.style.color = "green";
        NextBtn7.style.display = "block";
    }else{
        para7.innerHTML = "Your Answer is Wrong";
        para7.style.color = "red";
        NextBtn7.style.display = "none";
    }
})
NextBtn7.addEventListener ("click",() => {
    let lists7 = document.getElementsByClassName("lists-7")[0];
    let lists6 = document.getElementsByClassName("lists-6")[0];
    let lists5 = document.getElementsByClassName("lists-5")[0];
    let lists4 = document.getElementsByClassName("lists-4")[0];
    let lists3 = document.getElementsByClassName("lists-3")[0];
    let lists2 = document.getElementsByClassName("lists-2")[0];
    let lists1 = document.getElementsByClassName("lists-1")[0];
    let lists = document.getElementsByClassName("lists")[0];

    lists7.style.display = "block";
    lists6.style.display = "none";
    lists5.style.display = "none";
    lists4.style.display = "none";
    lists3.style.display = "none";
    lists2.style.display = "none";
    lists.style.display = "none";
    lists1.style.display = "none";
    inp7.value="";
    para7.innerHTML ="";
})



 // 7 list

let inp8 = document.getElementById("inp-8");
let para8 = document.getElementById("para-8");
let NextBtn8 = document.getElementById("btn-8");
let submitBtn8 = document.getElementById("submit-btn-8")

submitBtn8.addEventListener("click",() => {
    if(inp8.value === "Mars"){
        para8.innerHTML = "Your Answer is Correct Please Click on Next Question button ";
        para8.style.color = "green";
        NextBtn8.style.display = "block";
    }else{
        para8.innerHTML = "Your Answer is Wrong";
        para8.style.color = "red";
        NextBtn8.style.display = "none";
    }
})
NextBtn8.addEventListener ("click",() => {
    let lists8 = document.getElementsByClassName("lists-8")[0];
    let lists7 = document.getElementsByClassName("lists-7")[0];
    let lists6 = document.getElementsByClassName("lists-6")[0];
    let lists5 = document.getElementsByClassName("lists-5")[0];
    let lists4 = document.getElementsByClassName("lists-4")[0];
    let lists3 = document.getElementsByClassName("lists-3")[0];
    let lists2 = document.getElementsByClassName("lists-2")[0];
    let lists1 = document.getElementsByClassName("lists-1")[0];
    let lists = document.getElementsByClassName("lists")[0];

    lists8.style.display = "block";
    lists7.style.display = "none";
    lists6.style.display = "none";
    lists5.style.display = "none";
    lists4.style.display = "none";
    lists3.style.display = "none";
    lists2.style.display = "none";
    lists.style.display = "none";
    lists1.style.display = "none";
    inp8.value="";
    para8.innerHTML ="";
})
 // 8 list

let inp9 = document.getElementById("inp-9");
let para9 = document.getElementById("para-9");
let NextBtn9 = document.getElementById("btn-9");
let submitBtn9 = document.getElementById("submit-btn-9")

submitBtn9.addEventListener("click",() => {
    if(inp9.value!="Diamond"){
        para9.innerHTML = "Your Answer is Wrong";
        para9.style.color = "red";
        NextBtn9.style.display = "none";
    }else{

        para9.innerHTML = "Your Answer is Correct Please Click on Next Question button ";
        para9.style.color = "green";
        NextBtn9.style.display = "block";
    }
})
NextBtn9.addEventListener ("click",() => {
    let lists9 = document.getElementsByClassName("lists-9")[0];
    let lists8 = document.getElementsByClassName("lists-8")[0];
    let lists7 = document.getElementsByClassName("lists-7")[0];
    let lists6 = document.getElementsByClassName("lists-6")[0];
    let lists5 = document.getElementsByClassName("lists-5")[0];
    let lists4 = document.getElementsByClassName("lists-4")[0];
    let lists3 = document.getElementsByClassName("lists-3")[0];
    let lists2 = document.getElementsByClassName("lists-2")[0];
    let lists1 = document.getElementsByClassName("lists-1")[0];
    let lists = document.getElementsByClassName("lists")[0];

    lists9.style.display = "block";
    lists8.style.display = "none";
    lists7.style.display = "none";
    lists6.style.display = "none";
    lists5.style.display = "none";
    lists4.style.display = "none";
    lists3.style.display = "none";
    lists2.style.display = "none";
    lists1.style.display = "none";
    lists.style.display = "none";
    inp9.value="";
    para9.innerHTML ="";
})

// 9 list

let inp10 = document.getElementById("inp-10");
let para10 = document.getElementById("para-10");
let NextBtn10 = document.getElementById("btn-10");
let submitBtn10 = document.getElementById("submit-btn-10")

submitBtn10.addEventListener("click",() => {
    if(inp10.value === "Russia"){
        para10.innerHTML = "Your Answer is Correct Thank You for playing this game with us ";
        para10.style.color = "green";
    }else{
        para10.innerHTML = "Your Answer is Wrong";
        para10.style.color = "red";
    }
})



