// document.getElementsByName("Subnet").value = 'changed Value';
// $('save').click(function() {
    
//     })




//что-то интересное и рабочее
// const elem=document.querySelector('.set_ip__settings')
// const save=document.querySelector('save');
// function func(event){
//     let ips=[]
//     // console.log(event)
//     const parent=event.target.parentNode;
//     const setting=parent.querySelectorAll('.settings')
//     for(let i=0;i<setting.length;i++){
//        ips.push(setting[i].querySelector('input').value) 
//     }
//     // console.log(ips)
// }
// elem.addEventListener('click', func);
//111111111111111111111111111
const elem=document.querySelector(".save")
const b=[]
function savesss(evt){
    a=document.querySelectorAll("input")

for(let i=0;i<4;i++){
    b[i]=a[i].value
}
evt.preventDefault()
console.log(b)
// for(let i=0;i<b.length;i++){
    // document.querySelectorAll(".ips")[i].value=b[i]
// }
}

elem.addEventListener('click', savesss)
//111111111111111111111111111
// const buttons=document.querySelectorAll(".add-btn")

// const toggleMenu=function(event){
//     const parent = event.target.parentNode;
//     const menu = parent.querySelector('.choose-elem')
//     menu.classList.toggle('hidden')
// }
// const showElement=function(button){button.addEventListener('click', toggleMenu)}

// buttons.forEach(showElement);

// const elem = document.querySelector('.grid-select__header');

// const func=function(event){
//     console.log(event)
//     if(event.ctrlKey){
//     event.target.classList.toggle('qwe')}
// }
// elem.addEventListener('click', func);