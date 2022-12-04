let panels = document.querySelectorAll('.panel');
let n = 0;
let time  = null;

panels.forEach((panel,index)=>{
    panel.addEventListener('click',()=> {
        removeActiveClass();
        panel.classList.add('active');
        clearInterval(time);
        n = index;
        intervalnow();
    })
})

function removeActiveClass() {
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}

function intervalnow() {
    clearInterval(time);
    time = setInterval(()=>{
        removeActiveClass();
        if(n>=panels.length) {
            n = 0;
        }
        console.log(n)
        panels[n++].classList.add('active');
    },1000);
}

intervalnow();