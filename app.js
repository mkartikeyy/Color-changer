const buttons = document.querySelectorAll('.box')
const body = document.querySelector('body')


buttons.forEach(function(button){
    button.addEventListener('click',function(event){
        if(event.target.id === 'blue')
            body.style.backgroundColor = event.target.id;
        if(event.target.id === 'purple')
            body.style.backgroundColor = event.target.id;
        if(event.target.id === 'green')
            body.style.backgroundColor = event.target.id;
        if(event.target.id === 'orange')
            body.style.backgroundColor = event.target.id;
    })
})
