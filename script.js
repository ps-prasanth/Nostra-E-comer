var offerBar = document.querySelector (".offer-bar")

document.getElementById("offer-close").addEventListener("click",

function(){
    offerBar.style.display="none"
}
)

//slider function

var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})


var sliderimgcontainer=document.querySelector(".slider-image-container")
var slidecount=document.querySelectorAll(".slider-image").length
var currentindex=0
console.log(slidecount)

var left=document.querySelector(".slider-left-button").addEventListener("click", ()=> change(-1))
var right=document.querySelector(".slider-right-button").addEventListener("click",()=>change(1))
function change(d){
    
    currentindex+=d
    

    if(currentindex<0)
    {
        currentindex=slidecount-1
        
        
    }

    else if(currentindex>=slidecount){
        currentindex=0
    }

  sliderimgcontainer.style.transform = `translateX(-${currentindex*100}%)`;

}


//like function
var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
     
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            console.log("jkjk");
            e.target.src="imgs/icons/redheart.png"
        }
        else{
            e.target.src="imgs/icons/blackheart.png"
        }
    })
})


//scroll function

window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()
   

     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")

    }
    
})
    
})
