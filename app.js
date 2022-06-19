const loadcarousel1 =()=>{
    const rows= document.querySelectorAll('.row1');
    for(const row of rows){
        for(let i=1;i<=3;i++){
        const div = document.createElement('div');
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then(res=>res.json())
  .then(data=>carousel1(data.drinks[0]))
  
  const carousel1=(drinks)=>{
        //const url= drinks.strDrinkThumb
        //console.log(url)
   div.innerHTML=`<div class="col">
    <div class="card h-80 rounded ">
      <img src='${drinks.strDrinkThumb}' class="card-img-top ms-5" alt="..." style="width:75%;">
      <div class="card-body">
        <h5 class="card-title text-center">${drinks.strDrink}</h5>
      </div>
    </div>
  </div>`
  
    }
    row.appendChild(div);
  
  }
}
  
}

const loadcarousel2 =()=>{
  fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
  .then(res=>res.json())
  .then(data=>drinksShow((data.drinks).slice(0,8)));

  const drinksShow=(drinks)=>{
    
    for(const drink of drinks){
      const row=document.getElementById('drinkShow');
    const div = document.createElement('div');
    div.classList.add('col-lg-3')
    
    div.innerHTML=`<div class="card h-80 rounded" onclick="detailsload('${drink.idDrink}')">
      <img src='${drink.strDrinkThumb}' class="card-img-top ms-5" alt="..." style="width:75%;">
      <div class="card-body">
        <h5 class="card-title text-center">${drink.strDrink}</h5>
      </div>
    </div>`
   row.appendChild(div);
  }}
}

const detailsload=(id)=>{
  const main = document.getElementById('main');
      main.textContent='';
  const row=document.getElementById('drinkShow');
  row.innerText=''
     fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
     .then(res=>res.json())
     .then(data=>detailsDrinks(data.drinks[0]));

     const detailsDrinks=(drinks)=>{
       
      
      const div = document.createElement('div');
      

        
      
      div.classList.add('d-flex')
      div.innerHTML=`
      <div class="col-lg-6">
      <div class=" h-80 rounded text-center">
       <h3 class="card-title text-center" style="color:white;">${drinks.strDrink}</h3> 
        <img src='${drinks.strDrinkThumb}' class="card-img-top ms-5" alt="..." style="width:50%;">
        <h6 class="card-title text-center mt-3 bg-secondary mx-5" style="color:white;">${drinks.strCategory}</h6> 
        <h6 class="card-title text-center bg-secondary mx-5" style="color:white;">${drinks.strAlcoholic}</h6> 
        </div>
      </div>
      <div class="col-lg-6">
      <div class=" h-80 rounded">
       <h3 class="card-title text-center mb-5" style="color:white;">Ingredients</h3> 
       <div class="d-flex">
       <div class="text-center col-lg-4">
       <img src='https://www.thecocktaildb.com/images/ingredients/${drinks.strIngredient1}-small.png' style="width:50%;" class="card-img-top ms-5 " alt="">
       <h6 style="color:white;">${drinks.strIngredient1}</h6>
       </div>
       <div class="text-center col-lg-4">
       <img src='https://www.thecocktaildb.com/images/ingredients/${drinks.strIngredient2}-small.png' style="width:50%;" class="card-img-top ms-5" alt="">
       <h6 style="color:white;">${drinks.strIngredient2}</h6>
       </div>
       
       <div class="text-center col-lg-4">
       <img src='https://www.thecocktaildb.com/images/ingredients/${drinks.strIngredient3}-small.png' style="width:50%;" class="card-img-top ms-5" alt="">
       <h6 style="color:white;">${drinks.strIngredient3}</h6>
       </div>
       
       </div>
        </div>
        <h3 class="text-center mt-5" style="color:white;">Instruction</h3>
        <p style="color:white;">${drinks.strInstructions}</p>
      </div>`
     row.appendChild(div);

     }
}

const searchBtn =document.getElementById('search-btn');
 searchBtn.addEventListener('click',function(){
  
  
   const input = document.getElementById('input').value;
   console.log(input);
   const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
   console.log(url);
    fetch(url)
   .then(res=>res.json())
   .then(data=>searchShow(data.drinks))

   const searchShow=(searchdata)=>{

      const main = document.getElementById('main');
      main.textContent='';
     const row=document.getElementById('drinkShow');
     row.innerText=''
     for(const data of searchdata){
     const div = document.createElement('div');
    div.classList.add('col-lg-3')
    
    div.innerHTML=`<div class="card h-80 rounded" onclick="detailsload('${data.idDrink}')">
      <img src='${data.strDrinkThumb}' class="card-img-top ms-5" alt="..." style="width:75%;">
      <div class="card-body">
        <h5 class="card-title text-center">${data.strDrink}</h5>
      </div>
    </div>`
   row.appendChild(div);
  }


   }
});


for(let i=1;i<=26;i++){
  let id = document.getElementById(i);
  let finalid = document.getElementById(i).innerText.slice(2,3).toLowerCase()
  id.addEventListener('click',function(){
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${finalid}`)
    .then(res=>res.json())
    .then(data=>loadLetterDrinks(data.drinks))

    const loadLetterDrinks =(drinks)=>{
      const main = document.getElementById('main');
      main.textContent='';
     const row=document.getElementById('drinkShow');
     row.innerText=''
     for(const data of drinks){
      const div = document.createElement('div');
     div.classList.add('col-lg-3')
     
     div.innerHTML=`<div class="card h-80 rounded" onclick="detailsload('${data.idDrink}')">
       <img src='${data.strDrinkThumb}' class="card-img-top ms-5" alt="..." style="width:75%;">
       <div class="card-body">
         <h5 class="card-title text-center">${data.strDrink}</h5>
       </div>
     </div>`
    row.appendChild(div);
   }
    }
  })
}


  


loadcarousel1()
loadcarousel2()
