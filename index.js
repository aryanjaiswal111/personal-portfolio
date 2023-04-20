//  ....................Create Auto Navbar Scrolling.................... 
const select=document.querySelector('section');
const navLink=document.querySelector('header nav a');
window.onscroll=()=>{
    Selection.forEach(sec=>{
        let top=window.scrollY;
        let offset=set.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top < offset + height){
            navLink.forEach(links=>{
                links.classlis.remove('home-link')
                document.querySelector('header nav a[href*='+id+']').classList.add('home-link')
            })
        }
    })
}

//  ....................Create Auto Navbar Scrolling.................... 

let header=document.querySelector('header')