window.addEventListener('DOMContentLoaded', () => {
    let navbar = document.querySelector(".navbar");

    let contactButton = navbar.querySelector("#contact-btn");
    let contactButtonContent = contactButton.innerHTML;
    let contactWrapper = document.querySelector(".contact");
    let contactForm = document.querySelector("#contact-form");


    let menuButton = document.querySelector("#menu-btn");
    let menuButtonContent = menuButton.innerHTML;
    let menu = document.querySelector(".menu");
    let menuContactButton = menu.querySelector("#menu-contact");

    let url = "https://formspree.io/f/xgerldoo"
  
  const mutationObserver = new MutationObserver(callback)

  mutationObserver.observe(
    navbar,
    { attributes: true }
  )

  function callback(mutationsList) {
    mutationsList.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          if(mutation.target.classList.contains("active")){
            document.querySelector("body").style.overflowY = "hidden"
          }
          else{
            document.querySelector("body").style.overflowY = "scroll"
          }
        }
    })
}

    menuButton.addEventListener("click", e => {
      e.preventDefault();

      if(contactWrapper.classList.contains("contact-active")){
        if(!menu.classList.contains("menu-active")){
          navbar.classList.toggle("active")
          menuButton.innerHTML = menuButtonContent
        }

        contactWrapper.classList.remove("contact-active");
        contactButton.innerHTML = contactButtonContent
      }

      else{
        menu.classList.toggle("menu-active")
        navbar.classList.toggle("active")
  
        if(menu.classList.contains("menu-active")){
          menuButton.innerHTML = "close";
          contactButton.innerHTML = "close"
          menuContactButton.addEventListener("click",e => {
            e.preventDefault();
            contactWrapper.classList.add("contact-active")
          })
        }else{
          menuButton.innerHTML = menuButtonContent
          contactButton.innerHTML = contactButtonContent
        }
      }
    })

    contactButton.addEventListener("click", (e)=>{
      e.preventDefault();

      if(menu.classList.contains("menu-active")){
        menu.classList.remove("menu-active")
        navbar.classList.remove("active")
        contactButton.innerHTML = contactButtonContent
        menuButton.innerHTML = menuButtonContent
      }
      else{
        contactWrapper.classList.toggle("contact-active")
        navbar.classList.toggle("active")
      
        if(contactWrapper.classList.contains("contact-active")){
          contactButton.innerHTML = "close";
          menuButton.innerHTML = "close";
      }else{
          contactButton.innerHTML = contactButtonContent
          menuButton.innerHTML = menuButtonContent
      }
      }
    })

    const formDataToJson = formData => {
        const entries = formData.entries();
  
        const dataObj = Array.from(entries).reduce( (data, [key, value]) => {
          data[key] = value;
        //   if (key === 'email') {
        //     data._replyTo = value;
        //   }
          return data;
        }, {});
  
        return JSON.stringify(dataObj);
      };

    contactForm.addEventListener("submit", (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target);

        console.log(formDataToJson(formData));

        axios({
            url: url,
            method: 'post',
            headers: {
              'Accept': 'application/json'
            },
            data: formDataToJson(formData)
          }).then((response) => { console.log(response); })
    })

    // contactForm.addEventListener("formdata", event => {
    //     const data = event.formData;

    //     const something = {
    //         "_replyto": data.get("_replyto"),
    //         "message": data.get("message")
    //     }

    //     console.log(something
    //   });
})