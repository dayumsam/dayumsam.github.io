window.addEventListener('DOMContentLoaded', () => {
    //update current year in footer
    const d = new Date();
    document.querySelector("#copyright-year").innerHTML = d.getFullYear();

})