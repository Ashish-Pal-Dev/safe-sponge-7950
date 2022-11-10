document.querySelector(".logo").addEventListener("click",goHome);
function goHome(){
    window.location.assign("index.html");
}
document.querySelector("#ut1").addEventListener("click",goLogin);
function goLogin(){
    window.location.assign("login.html");
}
document.querySelector("#ut2").addEventListener("click",goFav);
function goFav(){
    window.location.assign("favourites.html");
}
document.querySelector("#ut3").addEventListener("click",goCart);
function goCart(){
    window.location.assign("cart.html");
}

let catlist=document.querySelector("#catlist");
catlist.querySelectorAll("li>a").forEach((item)=>{
    item.addEventListener("mouseenter",displaySubcat);
});

catlist.querySelectorAll("li>a").forEach((item)=>{
    item.addEventListener("mouseout",function(){
        subcat.innerHTML="";
    });
});


let subcat;
function displaySubcat(event){
    event.preventDefault();
    subcat=document.createElement("div");
    subcat.className="subcategories";
    let subcat1=document.createElement("div");
    subcat1.className="subcat1";
    let ul1=document.createElement("ul");
    let arr1=["Smart Electronics","Smart Watches", "Smart Wactch Phone", "Smart Wristband", "Smart Watch Accessories","Sport Watch","Smart Health Watch"];
    arr1.forEach((elem,index)=>{
        let li=document.createElement("li");
        if(index===0){
            li.className="subhead";
        }
        li.innerText=elem;
        ul1.appendChild(li);
    });    
    subcat1.append(ul1);

    let subcat2=document.createElement("div");
    subcat2.className="subcat2";
    let ul2=document.createElement("ul");
    let arr2=["Smart Electronics","Smart Watches", "Smart Wactch Phone", "Smart Wristband", "Smart Watch Accessories","Sport Watch","Smart Health Watch"];
    arr2.forEach((elem,index)=>{
        let li=document.createElement("li");
        if(index===0){
            li.className="subhead";
        }
        li.innerText=elem;
        ul2.appendChild(li);
    });    
    subcat2.append(ul2);

    let subcat3=document.createElement("div");
    subcat3.className="subcat3";
    let ul3=document.createElement("ul");
    let arr3=["Smart Electronics","Smart Watches", "Smart Wactch Phone", "Smart Wristband", "Smart Watch Accessories","Sport Watch","Smart Health Watch"];
    arr3.forEach((elem,index)=>{
        let li=document.createElement("li");
        if(index===0){
            li.className="subhead";
        }
        li.innerText=elem;
        ul3.appendChild(li);
    });    
    subcat3.append(ul3);

    let subcat4=document.createElement("div");
    subcat4.className="subcat4";
    let subimg=document.createElement("img");
    subimg.setAttribute("src","images/subcat.jpg");
    subcat4.append(subimg);

    let subcat5=document.createElement("div");
    subcat5.className="subcat5";
    let ul5=document.createElement("ul");
    let arr5=["Smart Electronics","Smart Watches", "Smart Wactch Phone", "Smart Wristband", "Smart Watch Accessories","Sport Watch","Smart Health Watch"];
    arr5.forEach((elem,index)=>{
        let li=document.createElement("li");
        if(index===0){
            li.className="subhead";
        }
        li.innerText=elem;
        ul5.appendChild(li);
    });    
    subcat5.append(ul5);

    let subcat6=document.createElement("div");
    subcat6.className="subcat6";
    let ul6=document.createElement("ul");
    let arr6=["Smart Electronics","Smart Watches", "Smart Wactch Phone", "Smart Wristband", "Smart Watch Accessories","Sport Watch","Smart Health Watch"];
    arr6.forEach((elem,index)=>{
        let li=document.createElement("li");
        if(index===0){
            li.className="subhead";
        }
        li.innerText=elem;
        ul6.appendChild(li);
    });    
    subcat6.append(ul6);

    let subcat7=document.createElement("div");
    subcat7.className="subcat7";
    let ul7=document.createElement("ul");
    let arr7=["Smart Electronics","Smart Watches", "Smart Wactch Phone", "Smart Wristband", "Smart Watch Accessories","Sport Watch","Smart Health Watch"];
    arr7.forEach((elem,index)=>{
        let li=document.createElement("li");
        if(index===0){
            li.className="subhead";
        }
        li.innerText=elem;
        ul7.appendChild(li);
    });    
    subcat7.append(ul7);
    subcat.append(subcat1,subcat2,subcat3,subcat4,subcat5,subcat6,subcat7);
    document.querySelector(".slider").append(subcat);
}


