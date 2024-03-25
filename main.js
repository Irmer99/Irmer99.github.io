const graphSkills = document.querySelectorAll('.bulb')


const observerOne = new IntersectionObserver(
    entries =>{
        console.log('hey')
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('show')
            }
            else{
                entry.target.classList.remove('show')

            }
        })
    }
)

graphSkills.forEach((el)=>observerOne.observe(el))

// for the hero button

const heroBtn = document.querySelector('#hero-btn')
const contactInfo = document.querySelector('#contact-foot')
const callTag = document.querySelector('#call-tag')
// set the page to a sooth instead of jagged scroll
document.documentElement.style.scrollBehavior = "smooth"

heroBtn.addEventListener('click', ()=>{
    contactInfo.scrollIntoView()
})
callTag.addEventListener('click', ()=>{
    contactInfo.scrollIntoView()
})

// FOR THE STARS
let index = 0
let interval = 2000
const rando = (min, max)=> {
   return Math.floor(Math.random() * (max - min + 1)) + min
}

const stars = document.querySelectorAll('.star')

stars.forEach((star)=>{


    setTimeout(setInterval(() =>{
        star.style.setProperty("--star-left", `${rando(-10, 100)}%`)
        star.style.setProperty("--star-top", `${rando(-10, 80)}%`)

        star.style.animation = 'none'
        star.offsetHeight

        star.style.animation = ''
    }, 1000), index++ * (interval /7)
)
})