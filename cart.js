document.querySelector("#headerlogo").addEventListener("click",goHome);
function goHome(){
    window.location.assign("index.html");
}



let cartitems=JSON.parse(localStorage.getItem("cart"));
displayCart(cartitems);

function displayCart(arr){
    let total=0;
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
        button.innerText="Remove from cart";
        button.addEventListener("click", function(){
          cartitems.splice(index,1);
          displayCart(cartitems);
          localStorage.setItem("cart",JSON.stringify(cartitems));
        });
        div.append(image,title,price,button);
        document.querySelector(".recommended").append(div);
        total+=Number(elem.price);
    });
    document.querySelector(".cartvalue").innerText="Total Cart value: "+"$"+total;
}