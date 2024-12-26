var offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",

    function () {
        offerBar.style.display = "none"
    }
)

//sideNavebar

var sideNavMenu = document.querySelector(".navbar-menu-toggle")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click", function () {

    sidenavbar.style.marginLeft = "0px"
})

document.getElementById("side-navbar-close").addEventListener("click", () => {
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})



//search function
var productcontainer = document.querySelector(".products")
var productlist = productcontainer.querySelectorAll("div")
var search = document.getElementById("search")

search.addEventListener("keyup", function () {
    var enterdvalue = event.target.value.toUpperCase()


    for (count = 0; count <= productlist.length; count = count + 1) {

        var productname = productlist[count].querySelector("h2").textContent


        if (productname.toUpperCase().indexOf(enterdvalue) < 0) {
            productlist[count].style.display = 'none'
        }

        else {

            productlist[count].style.display = 'block'
        }

    }

})


///filter function

var selectcategories = []
var productcategories = []
var tags = document.getElementsByName("tags")


console.log(tags)

tags.forEach((tags) => {

    tags.addEventListener("click", (e) => {

        if (e.target.checked) {

            selectcategories.push(e.target.value)

            console.log(selectcategories)
        }

        else {
            selectcategories = selectcategories.filter(data => data !== e.target.value)
        }


        var product = document.querySelectorAll(".product")

        product.forEach((product) => {


            var to = product.dataset.category

            productcategories.push(to)


            console.log(productcategories)

            if (selectcategories.length <= 0 || selectcategories.includes(to)) {
                console.log(selectcategories)
                console.log(to + "false")
                product.style.display = "block"
            }

            else {
                product.style.display = 'none'
            }


        })

    })


})
