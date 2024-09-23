const faqContainer = document.querySelectorAll(".faq-box")

faqContainer.forEach((faq)=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('active')
    })
})