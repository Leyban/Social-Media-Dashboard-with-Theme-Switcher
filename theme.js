const darkTheme = () => {
    const slider = document.getElementById('toggle-switch');
    console.log(slider.checked);

    const whiten = document.querySelectorAll('h3, h1');
    const body = document.body;
    const cards = document.querySelectorAll('.container, .highlight div');
    const overview = document.querySelector('body > h3');
    const header = document.querySelector('header');
    const grayshift = document.querySelectorAll('p:not(.update)')
    console.log(cards);


    if (slider.checked){
        body.style.backgroundColor = "rgb(30, 32, 42)";
        whiten.forEach(text => text.style.color = "white");
        cards.forEach(card => card.style.backgroundColor = "rgb(37, 42, 65)");
        header.style.backgroundColor = 'rgb(31, 33, 46)';
        grayshift.forEach(text => text.style.color = "hsl(228, 34%, 66%)")
    } else {
        body.style.backgroundColor = "";
        cards.forEach(card => card.style.backgroundColor = "hsl(227, 47%, 96%)");
        whiten.forEach(text => text.style.color = "hsl(230, 17%, 14%)");
        header.style.backgroundColor = 'hsl(225, 100%, 98%)';
        grayshift.forEach(text => text.style.color = "hsl(228, 12%, 44%)")
        overview.style.color = "hsl(228, 12%, 44%)";
    }
}