
let news = [
    {
        name: 'News Title Lorem Ipsum Dolor Sit Amet',
        date: new Date(),
        authour: 'CNN Indonesia',
        public_status: true
    },
    {
        name: 'News Title Lorem Ipsum Dolor Sit Amet',
        date: new Date(),
        authour: 'CNN Indonesia',
        public_status: false
    },
    {
        name: 'News Title Lorem Ipsum Dolor Sit Amet',
        date: new Date(),
        authour: 'CNN Indonesia',
        public_status: false
    },
    {
        name: 'News Title Lorem Ipsum Dolor Sit Amet',
        date: new Date(),
        authour: 'CNN Indonesia',
        public_status: false
    }
]
let inputTitle = document.getElementById('title')
let inputAuthour = document.getElementById('authour')
let btn = document.querySelector('.btn_add')

let errorTitle = document.querySelector('.errorTitle')
let errorAuthour = document.querySelector('.errorAuthour')




let newsPlace = document.querySelector('.news-content')



function arrayNews () {

    newsPlace.innerHTML = ''

    if(news.length === 0){
        newsPlace.innerHTML = '<p class="option">Нет заметок</p>'
    }
    
    for(let i = 0; i < news.length; i++){
        newsPlace.insertAdjacentHTML('beforeend', getNews(news[i], i))
    }
}

function getNews(news, index){
    return `
    <div class="news_item ${news.action ? 'public_status' : ''}">
        <div class="news_photo">
            <img src="assets/img/news_photo.png" alt="photo" class="news-img">
        </div>
        <h3>${news.name}</h3>
        <p class="status_news"></p>
        <div class="wrapper_elements_news">
            <div class="date_and_place">
                <p class="date">${news.date}</p>
                <p class="place">${news.authour}</p>
            </div>
            <div class="btns_wrapper">
                <a href="#" class="btn yes ${news.public_status ? 'doneActive' : '' }" data-index = ${index} data-type = "done">
                    <img src="assets/img/remove.svg" alt="" class="btn_icon">
                </a>
                <a href="#" class="btn remove" data-index = ${index} data-type = "remove">
                    <img src="assets/img/edit.svg" alt="" class="btn_icon">
                </a>
            </div>
        </div>
    </div>
    `
}

btn.onclick = function (event){
    if(inputTitle.value.length === 0){
        log = false
        errorTitle.innerHTML = `<p class="error">Введите имя</p>`
    }
    if (inputAuthour.value.length === 0){
        log = false;
        errorAuthour.innerHTML =`<p class="error">Введите год рождения</p>`;
    }

    if(log == true){
        let inputNews ={
            name: inputTitle.value,
            date: new Date(),
            authour: inputAuthour.value,
            public_status: false
        }
    
        news.push(inputNews)
    }
    
    arrayNews()

    event.preventDefault()

    inputTitle.value = ''
    inputAuthour.value = ''
}

newsPlace.onclick = function (event){
    if(event.target.dataset.index){
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type
        
        if(type === 'done'){
            news[index].public_status = !news[index].public_status
        }else if (type === 'remove'){
            news.splice(index, 1)
        }

        arrayNews()

    }
}

let form = document.querySelector('.form')
reg = /[A-Za-zA-яА-яЁё]/g

log = true

form.addEventListener('keyup', function(){
    if(inputTitle.value.length < 5){
        inputTitle.style.border = '2px solid red'
        errorTitle.innerHTML = `<p class="error">Не менее 5 символов</p>`
        log = false
    }else{
        inputTitle.style.border = '2px solid green'
        errorTitle.innerHTML = ``
        log = true
    }
    if(inputAuthour.value.length < 5){
        inputAuthour.style.border = '2px solid red'
        errorAuthour.innerHTML = `<p class="error">Не менее 5 символов</p>`
        log = false
    }else{
        inputAuthour.style.border = '2px solid green'
        errorAuthour.innerHTML = ``
        log = true
    }

    
})
// фон

document.addEventListener('keydown', function(event){
    document.addEventListener('keydown', (event)=>{
        if(event.key.toLowerCase() == 'w') {document.body.style.background = 'white'}
        else if (event.key.toLowerCase() == 'b') {
            document.body.style.background = 'black'
            document.body.style.color = 'white'
        }
    
    })
    document.addEventListener('keyup',()=> document.body.style.background = '')
})

