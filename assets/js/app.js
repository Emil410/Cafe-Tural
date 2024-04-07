function copyText(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Text copied: ' + text);
}
document.addEventListener("DOMContentLoaded", () => {
    let btnBurger = document.querySelector("#burger_click");
    let burgerMenyu = document.querySelector("#burger-menyu");
    let desertClick = document.querySelector("#desert_click");
    let desertMenyu = document.querySelector("#desert-menyu");
    let ickiClick = document.querySelector("#icki_click");
    let ickiMenyu = document.querySelector("#icki-menyu");
    let qelyanClick = document.querySelector("#qelyan_click");
    let qelyanMenyu = document.querySelector("#qelyan-menyu");
    let qelyanaltiClick = document.querySelector("#qelyanalti_click");
    let qelyanaltiMenyu = document.querySelector("#qelyanalti-menyu");
    let randomClick = document.querySelector("#random_click");
    let randomMenyu = document.querySelector("#random-menyu");

    document.addEventListener("click", (event) => {
        event.preventDefault();
        if (event.target === btnBurger) {
            burgerMenyu.style.display = 'flex';
            desertMenyu.style.display = 'none';
            ickiMenyu.style.display = 'none';
            qelyanMenyu.style.display = 'none';
            qelyanaltiMenyu.style.display = 'none';
            randomMenyu.style.display = 'none';
        } else if (event.target === desertClick) {
            desertMenyu.style.display = 'flex';
            burgerMenyu.style.display = 'none';
            ickiMenyu.style.display = 'none';
            qelyanMenyu.style.display = 'none';
            qelyanaltiMenyu.style.display = 'none';
            randomMenyu.style.display = 'none';
        } else if (event.target === ickiClick) {
            ickiMenyu.style.display = 'flex';
            burgerMenyu.style.display = 'none';
            desertMenyu.style.display = 'none';
            qelyanMenyu.style.display = 'none';
            qelyanaltiMenyu.style.display = 'none';
            randomMenyu.style.display = 'none';
        } else if (event.target === qelyanClick) {
            qelyanMenyu.style.display = 'flex';
            burgerMenyu.style.display = 'none';
            desertMenyu.style.display = 'none';
            ickiMenyu.style.display = 'none';
            qelyanaltiMenyu.style.display = 'none';
            randomMenyu.style.display = 'none';
        } else if (event.target === qelyanaltiClick) {
            qelyanaltiMenyu.style.display = 'flex';
            burgerMenyu.style.display = 'none';
            desertMenyu.style.display = 'none';
            ickiMenyu.style.display = 'none';
            qelyanMenyu.style.display = 'none';
            randomMenyu.style.display = 'none';
        } else if (event.target === randomClick) {
            randomMenyu.style.display = 'flex';
            burgerMenyu.style.display = 'none';
            desertMenyu.style.display = 'none';
            ickiMenyu.style.display = 'none';
            qelyanMenyu.style.display = 'none';
            qelyanaltiMenyu.style.display = 'none';
        }
    });
});