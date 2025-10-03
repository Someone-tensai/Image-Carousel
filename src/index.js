import "./index.css"


let prev_index = 0;
let dots = document.querySelectorAll(".dot");
show_image(prev_index);

window.setInterval(move_carousel, 5000);


function show_image(current_index)
{

    if(current_index < 0) current_index = 4;
    else if(current_index > 4) current_index = 0;

    let images = document.querySelectorAll(".image");
    images[prev_index].style.display = "none";
    images[current_index].style.display = "inline";
    
    dots[prev_index].style.backgroundColor = "#bbb";
    dots[current_index].style.backgroundColor = "#717171";
    
    prev_index = current_index;
    
}

function move_carousel(e)
{   
    if(!e) 
    {
        show_image(prev_index+1);
        return;
    }
    let dirn = e.target.id;
    let next_index = prev_index + Number(dirn);
    show_image(next_index);
   

}
let left_button = document.querySelector(".left");
let right_button = document.querySelector(".right");

left_button.addEventListener("click", move_carousel);
right_button.addEventListener("click", move_carousel);

for(let i = 0; i < dots.length ; i++)
{
    dots[i].addEventListener("click", ()=>show_image(i));
}
    