//Js code of website 

//On click event of nav bar 

let nav_btn = document.getElementById('btn-nav')

function collapse(){
    let nav_ul = document.getElementById('ul-nav'); 
      if(nav_ul.style.display == 'none'){
        nav_ul.style.display = 'flex'
      }else{
        nav_ul.style.display = 'none'
      }
}

nav_btn.addEventListener('click',collapse);
