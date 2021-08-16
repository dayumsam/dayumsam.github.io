window.addEventListener('DOMContentLoaded', () => {

    let designationPlaceholder = designation.querySelector("#designation .placeholder");

    let currentHeroItem = 0
    let heroContent = ["designer", "teacher", "maker"]

    function updateHero(i){
        // designationPlaceholder.innerHTML = `${heroContent[i]}`

        if(currentHeroItem === heroContent.length - 1){
            currentHeroItem = 0;
        }else{
            currentHeroItem++
        }
    }

    var typed = new Typed("#designation .placeholder", {
        strings: heroContent,
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 700,
        showCursor: false,
        loop: true,
      });

    // updateHero(currentHeroItem)

    // setInterval(()=>{
    //     updateHero(currentHeroItem)
    // }, 8000)
});