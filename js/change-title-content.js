(function () {
    
    const massages = [
        'Greetings!',
        'What We Will Speak About'
    ]
    function getGreeting() {
        const index = Math.floor(Math.random() * massages.length);
        return massages[index];
    }
    const title = document.querySelector('.content__title');
    title.innerHTML = '<i>What We Will Speak About</i>';
    title.innerHTML = getGreeting();

    
}) ();