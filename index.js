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

//SUBCATEGORIES BY JS HERE

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
let a=document.querySelector("#spdeal").innerHTML;
  let b=document.querySelector(".slider").innerHTML;
  let c=document.querySelector(".sliderbottom").innerHTML;
  let d=document.querySelector(".collection").innerHTML;
  let e=document.querySelector("#collectiontext").innerHTML;
  let f=document.querySelector("#superdealtext").innerHTML;
  let g=document.querySelector("#recommendedtext").innerHTML;
//FETCH PART STARTED HERE(I'LL BASICALLY FETCH FAKE DATA HEERE)

let cartitems=JSON.parse(localStorage.getItem("cart"))||[];
let data=[
    {
      "createdAt": "2022-11-11T04:31:33.712Z",
      "name": "Bulb",
      "price": "250",
      "description": "New range of Bulbs and Led are designed keeping you in mind. With fits and styling that will make you stand apart",
      "image": "https://images.unsplash.com/photo-1641113403042-0b6f6e5e0a35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxlZHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      "category": "Electronics",
      "id": "1"
    },
    {
      "createdAt": "2022-11-11T08:05:07.023Z",
      "name": "Iphone 6",
      "price": "35650",
      "description": "Ergonomic executive Mobile spartphone in bonded black leather and PVC padded seat and back for all-day comfort and support",
      "image": "https://images.unsplash.com/photo-1595392029731-a6a252df1fd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlJTIwaXBob25lfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Mobile",
      "id": "2"
    },
    {
      "createdAt": "2022-11-11T15:40:08.909Z",
      "name": "Fan",
      "price": "2500",
      "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      "image": "https://images.unsplash.com/photo-1602951236204-ac1cf7682875?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8RmFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Appliances",
      "id": "3"
    },
    {
      "createdAt": "2022-11-11T00:52:25.702Z",
      "name": "Suit Formal",
      "price": "5500",
      "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnMlMjBmYXNoaW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Men",
      "id": "4"
    },
    {
      "createdAt": "2022-11-11T06:50:28.288Z",
      "name": "Sandals High Heels",
      "price": "3900",
      "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW5zJTIwZmFzaGlvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      "category": "Women",
      "id": "5"
    },
    {
      "createdAt": "2022-11-11T06:48:38.996Z",
      "name": "Top",
      "price": "450",
      "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      "image": "https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a2lkcyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "category": "Kid",
      "id": "6"
    },
    {
      "createdAt": "2022-11-11T11:10:37.973Z",
      "name": "Pen",
      "price": "145",
      "description": "The Football Is Good For Training And Recreational Purposes",
      "image": "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Stationary",
      "id": "7"
    },
    {
      "createdAt": "2022-11-11T03:09:14.745Z",
      "name": "Macbook Air 3",
      "price": "150000",
      "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Laptops",
      "id": "8"
    },
    {
      "createdAt": "2022-11-11T09:33:02.693Z",
      "name": "Analog Watch",
      "price": "2950",
      "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      "image": "https://images.unsplash.com/photo-1619134778706-7015533a6150?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fFdhdGNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "category": "Watches",
      "id": "9"
    },
    {
      "createdAt": "2022-11-11T03:07:09.284Z",
      "name": " Gold Earings",
      "price": "8600",
      "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      "image": "https://images.unsplash.com/photo-1651160670627-2896ddf7822f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGp3ZWxsZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Jwellery",
      "id": "10"
    },
    {
      "createdAt": "2022-11-10T16:27:41.508Z",
      "name": "Bicycle",
      "price": "6500",
      "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      "image": "https://images.unsplash.com/photo-1544611112-97ce45c45456?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmljeWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Bicycles",
      "id": "11"
    },
    {
      "createdAt": "2022-11-11T12:18:05.675Z",
      "name": "Sofa",
      "price": "43000",
      "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Furniture",
      "id": "12"
    },
    {
      "createdAt": "2022-11-11T13:39:21.899Z",
      "name": "Glass Pot",
      "price": "840",
      "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      "image": "https://images.unsplash.com/photo-1623244307563-f9ade3df13c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWUlMjBkZWNvcmF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Decoration",
      "id": "13"
    },
    {
      "createdAt": "2022-11-11T12:52:45.059Z",
      "name": "Jars Transparent",
      "price": "119",
      "description": "The Football Is Good For Training And Recreational Purposes",
      "image": "https://images.unsplash.com/photo-1622428051717-dcd8412959de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Kitchen",
      "id": "14"
    },
    {
      "createdAt": "2022-11-10T23:20:21.561Z",
      "name": "Fan Part",
      "price": "5200",
      "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      "image": "https://images.unsplash.com/photo-1628009151393-a6fa59844e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvb2xlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Electronics",
      "id": "15"
    },
    {
      "createdAt": "2022-11-10T22:05:19.000Z",
      "name": "Iphone X",
      "price": "41900",
      "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      "image": "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Mobile",
      "id": "16"
    },
    {
      "createdAt": "2022-11-11T03:48:46.703Z",
      "name": "Juicer Mixer",
      "price": "6300",
      "description": "The Football Is Good For Training And Recreational Purposes",
      "image": "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGFwcGxpYW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Appliances",
      "id": "17"
    },
    {
      "createdAt": "2022-11-11T14:15:11.833Z",
      "name": "T-shirt",
      "price": "510",
      "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8VCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Men",
      "id": "18"
    },
    {
      "createdAt": "2022-11-11T09:18:09.111Z",
      "name": "Books",
      "price": "240",
      "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      "image": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Stationary",
      "id": "19"
    },
    {
      "createdAt": "2022-11-11T11:09:59.436Z",
      "name": "T-shirt",
      "price": "843",
      "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "image": "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fFQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Women",
      "id": "20"
    },
    {
      "createdAt": "2022-11-11T02:28:13.074Z",
      "name": "Full Sleeve Shirts",
      "price": "659",
      "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      "image": "https://plus.unsplash.com/premium_photo-1664303144070-3068f26fd378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fFQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Kid",
      "id": "21"
    },
    {
      "createdAt": "2022-11-11T13:13:46.012Z",
      "name": "Dell Inspiration",
      "price": "51700",
      "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Laptops",
      "id": "22"
    },
    {
      "createdAt": "2022-11-10T21:44:58.479Z",
      "name": "Luxurious Watch",
      "price": "131000",
      "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      "image": "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNtYXQlMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Watches",
      "id": "23"
    },
    {
      "createdAt": "2022-11-11T04:42:00.899Z",
      "name": "Gold Pendant",
      "price": "35700",
      "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      "image": "https://images.unsplash.com/photo-1656428361267-b309fd9b20f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGp3ZWxsZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Jwellery",
      "id": "24"
    },
    {
      "createdAt": "2022-11-11T08:02:28.063Z",
      "name": "Sleek Fresh Bike",
      "price": "36300",
      "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      "image": "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmljeWNsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "category": "Bicycle",
      "id": "25"
    },
    {
      "createdAt": "2022-11-11T07:35:37.950Z",
      "name": "Double Bed",
      "price": "97600",
      "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      "image": "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Furniture",
      "id": "26"
    },
    {
      "createdAt": "2022-11-10T21:02:07.287Z",
      "name": "Playstation Mini",
      "price": "8280",
      "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      "image": "https://images.unsplash.com/photo-1635514569156-ca58f1247e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8UEN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "category": "Electronics",
      "id": "27"
    },
    {
      "createdAt": "2022-11-10T16:19:03.243Z",
      "name": "Pants",
      "price": "2500",
      "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8UGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "category": "Women",
      "id": "28"
    },
    {
      "createdAt": "2022-11-11T07:48:24.291Z",
      "name": "Redmi Note 3",
      "price": "18700",
      "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnRwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "category": "Mobile",
      "id": "29"
    },
    {
      "createdAt": "2022-11-11T09:28:57.559Z",
      "name": "Apple Watch 3",
      "price": "63400",
      "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNtYXJ0d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "category": "Watches",
      "id": "30"
    }
]
let bag=data;
function funfilter(){
  let filter=document.querySelector("#filter").value;
  let filterdata=bag.filter(function(item){
    return item.category==filter;
});
displayData(filterdata);
}

function funcSearch(){
  let x=document.querySelector("input").value;
  console.log(x.length);
  let newData=bag.filter(function(item){
      return item.name.toLowerCase().includes(x.toLowerCase());
  });

  if((x.length)!==0){
    document.querySelector("#spdeal").innerHTML="";
    document.querySelector(".slider").innerHTML="";
    document.querySelector(".sliderbottom").innerHTML="";
    document.querySelector(".collection").innerHTML="";
    document.querySelector("#collectiontext").innerHTML="";
    document.querySelector("#superdealtext").innerHTML="";
    document.querySelector("#recommendedtext").innerHTML="";
  }
  if(x.length===0){
    document.querySelector("#spdeal").innerHTML=a;
    document.querySelector(".slider").innerHTML=b;
    document.querySelector(".sliderbottom").innerHTML=c;
    document.querySelector(".collection").innerHTML=d;
    document.querySelector("#collectiontext").innerHTML=e;
    document.querySelector("#superdealtext").innerHTML=f;
    document.querySelector("#recommendedtext").innerHTML=g;
    // displayData(newData);
  }
  displayData(newData);
}
displayData(data);
function displayData(arr){
    document.querySelector(".recommended").innerHTML="";
    arr.forEach((elem,index)=>{
        let div=document.createElement("div");
        let image=document.createElement("img");
        image.setAttribute("src",elem.image);
        let title=document.createElement("p");
        title.innerText=elem.name;
        let price=document.createElement("p");
        price.innerText="$"+elem.price;
        let button=document.createElement("button");
        button.setAttribute("id","b1");
        button.innerText="Add to cart";
        button.addEventListener("click", function(){
          cartitems.push(elem);
          // alert("Item added to Cart successfully");  
          // setTimeout(() => {
          //   console.log("ashish")
          // }, 2000);
          // button.innerText="Added succesfully";
          localStorage.setItem("cart",JSON.stringify(cartitems));
        });
        let button2=document.createElement("button");
        button2.setAttribute("id","b2");
        button2.innerText="Buy now";
        div.append(image,title,price,button,button2);
        document.querySelector(".recommended").append(div);
    });
}



