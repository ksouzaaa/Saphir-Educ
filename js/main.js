$(document).ready(()=>{
  $('#cellphone').mask("(99) 99999-9999")

  $("header a").each(function (index, element){
     let href = $(this).attr("href");
     $(this).attr("hiddenhref", href);
     $(this).removeAttr("href");
 });
 $("header a").click(function(){
      url = $(this).attr("hiddenhref");
      window.location.href = url;
 })
})

let menuBtn = document.querySelector('.mobile_btn')

let menu = document.querySelector('.menu')

menuBtn.onclick =  function() {
  this.classList.toggle('change')
  menu.classList.toggle('show')

}



let modal = document.querySelector('.modal')
let span = document.querySelector('.close')

const openModal = () => {
  modal.classList.add('show')
  document.body.classList.add('modal-open')
}


span.onclick = () => {
  modal.classList.remove('show')
  document.body.classList.remove('modal-open')
}

window.onclick = (e) =>{
  if (e.target == modal) {
    modal.classList.remove('show')
    document.body.classList.remove('modal-open')
  }
}


function elementInViewport(element) {
    let rect = element.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function animateOnScroll() {
    let companies = document.querySelectorAll('.partner');
  
    for (let i = 0; i < companies.length; i++) {
      let element = companies[i];
      if (elementInViewport(element)) {
        element.classList.add('visible');
      } 
    }
  }
  
  window.addEventListener('scroll', animateOnScroll);


  /*function getG1News() {
    let apiUrl = 'http://servicodados.ibge.gov.br/api/v3/noticias/'


    fetch(apiUrl)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        let news = data.items;



        let newHTML = ''
        news.forEach(function(item) {
            newHTML += '<div>';
            newHTML += '<h3>' + items.titulo + '</h3>';
            newHTML += '<p>' + item.introducao + '</p>';
            newHTML += '</div>';
        });


        let container = document.getElementById('noticia');
        container.innerHTML = newHTML;
    })
    .catch(error => {
        console.log('ocorreu um erro ao buscar as notícias:', error);
    })
  }


  getG1News();
  */