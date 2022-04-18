// Create HTML elements----------------------------------------------------------------------------------------------------------------
// --------------------------------------Header stars here-------------------------------------------------------------
// Header Tag
let headTag = document.createElement("header");

// Nav Tag

let navTag = document.createElement("nav");
navTag.classList.add("navbar","navbar-expand-md","navbar-dark","bg-dark");

// container div
let container = createDiv("div","class","container");

// nav brand Tag

let navBrand = createATag("a","class","navbar-brand","href","index.html","Mack shoppy");

// button for toggle
let togBtn = createBtn("button","class","navbar-toggler","type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent");

// span toggle
let togSpan = document.createElement("span");
togSpan.classList.add("navbar-toggler-icon");
togBtn.append(togSpan);

// div for collapse

let collapse = createDiv("div","class","collapse navbar-collapse","id","navbarSupportedContent")

// create form

let form = document.createElement("form");
form.className="mx-auto";

// input group div

let inputGrp = createDiv("div","class","input-group");
 
// button for inputgrp

inpBtn = createBtn("button","class","btn btn-light text-dark btn-outline-warning dropdown-toggle fw-bold","type","button","data-bs-toggle","dropdown");
inpBtn.textContent="All";
// Create Ul tag
let ul = document.createElement("ul");
ul.className="dropdown-menu";

// li tag for product type

let li1= createLi("li");
let li2= createLi("li");
let li3= createLi("li");
let li4= createLi("li");
let li5= createLi("li");
let li6= createLi("li");
let li7= createLi("li");
let li8= createLi("li");
let li9= createLi("li");
let li10= createLi("li");
let li11= createLi("li");

let a1 = createATag("a","class","dropdown-item catcol","href","#","Product Types");
let a2 = createATag("a","class","dropdown-item","href","#","Blush")
let a3 = createATag("a","class","dropdown-item","href","#","Bronzer")
let a4 = createATag("a","class","dropdown-item","href","#","Eyebro")
let a5 = createATag("a","class","dropdown-item","href","#","Eyeliner")
let a6 = createATag("a","class","dropdown-item","href","#","Eyeshadow")
let a7 = createATag("a","class","dropdown-item","href","#","Foundation")
let a8 = createATag("a","class","dropdown-item","href","#","Lipliner")
let a9 = createATag("a","class","dropdown-item","href","#","Lipstick")
let a10 = createATag("a","class","dropdown-item","href","#","Mascara")
let a11= createATag("a","class","dropdown-item","href","#","Nail polish")
li1.append(a1);
li2.append(a2);
li3.append(a3);
li4.append(a4);
li5.append(a5);
li6.append(a6);
li7.append(a7);
li8.append(a8);
li9.append(a9);
li10.append(a10);
li11.append(a11);

ul.append(li1,li2,li3,li4,li5,li6,li7,li8,li9,li10,li11);

// input for search

let inputBox = document.createElement("input");
inputBox.classList.add("form-control","fs-5","fw-bold");
inputBox.setAttribute("placeholder","Search Your Products...");
inputBox.id="searchBox";

// button for searchproduct

let searchButn= createBtn("button","class","btn btn-warning","type","submit","id","searchBtn")

// i tag for icon
let iTag = document.createElement("i");
iTag.classList.add("fa","fa-search","fa-lg");
iTag.setAttribute("aria-hidden","true");
searchButn.append(iTag);


// append the all elements

document.body.append(headTag);
headTag.append(navTag);
navTag.append(container);
container.append(navBrand,togBtn,collapse);
collapse.append(form);
form.append(inputGrp);
inputGrp.append(inpBtn,ul,inputBox,searchButn);
// --------------------------------------Header ends here-------------------------------------------------------------


// ----------------------------------------------------Create Section-----------------------------------------------------------------------

let section = document.createElement("section");
section.className="my-5";

// sectiopn container

let secContainer = createDiv("div","class","container my-5");

// row div
let rowDiv = createDiv("div","class","row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4","id","product-container");

// section append
document.body.append(section);
section.append(secContainer);
secContainer.append(rowDiv);

// ----------------------------------------------------Section ends here-----------------------------------------------------------------------


// ----------------------------------------Modal starts here--------------------------------------------------------------------------

// div for modal
let modalDiv = createDiv("div","class","modal fade","id","exampleModal");
modalDiv.setAttribute("tabindex","-1");
// div for modal Dialogue
let modDialg = createDiv("div","class","modal-dialog");

// div for modal content
let modCon = createDiv("div","class","modal-content");

// div for modal header
let modHead = createDiv("div","class","modal-header");

// h5 for title
let modtitle = document.createElement("h5");
modtitle.className="modal-title";
modtitle.id="exampleModalLabel";
modtitle.textContent="Product Description";

// modal body
let modbody = createDiv("div","class","modal-body","id","viewModalBody")

// modal footer
let modfooter = createDiv("div","class","modal-footer");

// mod close btn
let modcls = createBtn("button","class","btn btn-secondary","type","button","data-bs-dismiss","modal")
modcls.textContent="Close";
// modal append
document.body.append(modalDiv);
modalDiv.append(modDialg);
modDialg.append(modCon);
modHead.append(modtitle);
modfooter.append(modcls);
modCon.append(modHead,modbody,modfooter)
// ----------------------------------------Modal endss here--------------------------------------------------------------------------



// ----------------------------------------------Corosel starts here--------------------------------------------------------------

let coroselCon = document.createElement("div");
coroselCon.classList.add("container","remove");
coroselCon.innerHTML=` <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button> <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
</div>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true/mediafiles/ecomm/misc/1650092878_faces-home-banner-web-1.png" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="https://images-static.nykaa.com/uploads/a60fdc13-54b4-4cf4-b0b9-e2e48513e589.jpg?tr=w-1200,cm-pad_resize"" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,f-gif/mediafiles/ecomm/misc/1650014552_gv-web-banner-1298x418-2.gif" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
  <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true/mediafiles/ecomm/misc/1650090664_nyb-takeover-red-hot-sale-main-banner_1298_418-1.jpg" class="d-block w-100" alt="...">
</div>
<div class="carousel-item">
  <img src="https://images-static.nykaa.com/uploads/df144cc9-f0b9-4d5d-b561-d66f5a0699c7.gif?tr=w-1200,cm-pad_resize" class="d-block w-100" alt="...">
</div>
<div class="carousel-item">
  <img src="./depositphotos.jpg" class="d-block w-100" alt="...">
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>`

document.body.append(coroselCon);

// ----------------------------------------------Corosel ends here--------------------------------------------------------------



// -----------------------------------function for create elements--------------------------------------------------------------------
// function for div
function createDiv(elename,eleAttrClas,eleClsValue,idatt,idval,content){
let div = document.createElement(elename);
   div.setAttribute(eleAttrClas,eleClsValue);
   div.setAttribute(idatt,idval);
   div.textContent=content;
   return div;
}

// function for a Tag
function createATag (elename,eleAttrClas,eleClsValue,eleHref,eleHrefval,content){
let aTag = document.createElement(elename);
aTag.setAttribute(eleAttrClas,eleClsValue);
aTag.setAttribute(eleHref,eleHrefval);
aTag.textContent=content;
return aTag;
}

// Function for li

function createLi (elename){
let li = document.createElement(elename);
return li;
}

// function for button

function createBtn(elename,eleAttrClas,eleClsValue,eletype,eleval,eleBs,eleBsVal,eleTog,eleTogVal,idatt,idval,content){
let button = document.createElement(elename);
button.setAttribute(eleAttrClas,eleClsValue);
button.setAttribute(eletype,eleval);
button.setAttribute(eleBs,eleBsVal);
button.setAttribute(eleTog,eleTogVal);
button.setAttribute(idatt,idval);
button.textContent=content;
return button;
}


// ------------------------------------------------------------------Start Fetching here----------------------------------------------------------
let productContainer = document.getElementById("product-container");
let searchForm = document.querySelector("form");
let searchBtn=document.getElementById("searchBtn");
let searchQuery ='';
// form submit event
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector('input').value;
  //  console.log(searchQuery);
    fetchAPI();

})

//   search icon click event
searchBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  searchQuery =document.querySelector('input').value;
  // console.log(searchQuery);
 fetchAPI();
})

// get the datas from API

async function fetchAPI(){
  try {
    let datas = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${searchQuery}`);
   console.log(datas)
  let fulldatas = await datas.json();
  console.log(fulldatas)
  generateHTML(fulldatas);
  if(!datas.ok) throw new Error("Failed to get the datas");
  } catch (error) {
    console.log(error.message);
  }

}

function generateHTML(results){
  productContainer.innerHTML="";
  coroselCon.remove();
    results.map((result)=>{
  //Creating col div
  let colDiv = document.createElement("div");
      colDiv.className="col";

  // Creating card div
  let cardDiv = document.createElement("div");
      cardDiv.classList.add("card","mx-auto","p-3","border-0");

  // Creating img div
  let imgTag = document.createElement("img");
  imgTag.src = `${result.api_featured_image}`;
  imgTag.className ="card-img-top";

  // Creating card body div
  let cardBody =document.createElement("div");
  cardBody.classList.add("card-body","text-center");

  // Creating brand tag
  let brandTag = document.createElement("h5");
  brandTag.classList.add("card-title","mb-4");
  brandTag.textContent=`${result.brand}`

  // Creating product name Tag
  let nameTag = document.createElement("h6");
  nameTag.classList.add("card-title","mb-4");
  nameTag.textContent=`${result.name}`
  
  // Creating category tag
  let pCategory = document.createElement("p");
  pCategory.classList.add("card-title","mb-3","fw-ptag");
  pCategory.textContent = "category: ";
  
  // Span tag for category
 let spanTag = document.createElement("span");
 spanTag.className="fw-normal";
 spanTag.textContent=`${result.category?result.category:"No data"}`;

//  button for view description
let viewDes = document.createElement("button");
viewDes.classList.add("btn","btn-primary","mb-3");
viewDes.textContent="View description";
viewDes.setAttribute("data-bs-toggle","modal");
viewDes.setAttribute("data-bs-target","#exampleModal");

//  view description in modal
viewDes.addEventListener("click",()=>{
modbody.innerHTML=`${result.description}`;
})

// div for price
let price = document.createElement("div");
price.className="card-text";
price.innerHTML = `<span class="rs text-danger fs-3 fw-bold"> <small><sup> ${result.price_sign ? result.price_sign:"$"}</sup></small>${result.price ? result.price:"30.3"}</span>`

// View product link
let proDiv=document.createElement("div");
proDiv.className="d-grid";
let viewlink = document.createElement("a");
viewlink.textContent="Buy Now";
viewlink.setAttribute("target","_blank")
viewlink.href=`${result.product_link}`
viewlink.classList.add("btn","btn-warning","mb-3");
proDiv.append(viewlink);

productContainer.append(colDiv);
colDiv.append(cardDiv);
cardDiv.append(imgTag,cardBody);
pCategory.append(spanTag);
cardBody.append(brandTag,nameTag,pCategory,viewDes,price,proDiv)
 })

}





