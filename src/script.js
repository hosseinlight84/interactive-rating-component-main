const form = document.getElementById('form')
const thank_you = document.getElementById('thank-you')
const text = document.querySelector('#thank-you h3')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const submit = document.getElementById('submit')
const rating = document.querySelector('.btn-inpt')


btn1.addEventListener('click' , function (click1){
    btn1.style.backgroundColor = "hsl(25, 97%, 53%)"
    btn1.style.color = "hsl(0, 0%, 100%)" 
    
})

btn2.addEventListener('click' , function (){
    btn2.style.backgroundColor = "hsl(25, 97%, 53%)"
    btn2.style.color = "hsl(0, 0%, 100%)"

})
    
btn3.addEventListener('click' , function (){
    btn3.style.backgroundColor = "hsl(25, 97%, 53%)"
    btn3.style.color = "hsl(0, 0%, 100%)"
})

btn4.addEventListener('click' , function (){
    btn4.style.backgroundColor = "hsl(25, 97%, 53%)"
    btn4.style.color = "hsl(0, 0%, 100%)"

})

btn5.addEventListener('click' , function (){
    btn5.style.backgroundColor = "hsl(25, 97%, 53%)"
    btn5.style.color = "hsl(0, 0%, 100%)"
})


submit.addEventListener('click' ,function () {
    form.style.display = 'none';
    thank_you.style.display = 'block'

} )

