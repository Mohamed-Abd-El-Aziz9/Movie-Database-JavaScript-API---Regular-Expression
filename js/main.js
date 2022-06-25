/*================Handealing Navbar ================*/

let sidebar = document.getElementById('sidebar');
let navbtn = document.getElementById('navbarbtn');
let navLink = document.getElementById('nav-link');
let sideBarBtn = document.getElementById('sideBarBtn');
sideBarBtn.addEventListener('click', function () {
    navbtn.classList.toggle('navbar-btn-click');
    sidebar.classList.toggle('d-block');
    sidebar.classList.toggle('d-none');
    sideBarBtn.classList.toggle('toggle');
    sideBarBtn.classList.toggle('toggle2');
    sideBarBtn.classList.toggle('pt-3');
});
/*================Handealing API ================*/


let newList = [];
let apiKey = `f80be9a8b4e946e19edb2dbb536bb42d`;
let myHttp = new XMLHttpRequest;
let naBarObject = {
    now_playing: 'Now playing',
    popular: "Popular",
    top_rated: 'Top Rated',
    Trending: 'trending',
    upcoming: 'Upcoming'
}
let FullData = []
const links = document.querySelectorAll(".nav-link")
let target;
var catergory = 'now_playing';
links.forEach((elem) => {
    elem.addEventListener("click", function () {
        const ActiveElemnt = document.getElementById(elem.getAttribute("id"));
        target = ActiveElemnt.id;
        catergory = target;
        if (catergory == 'trending') {
            myHttp.open('GET', `https://api.themoviedb.org/3/trending/all/day?api_key=63ec497c294359e7b4d1d53ef9ed5c58`);
            myHttp.send();
            myHttp.addEventListener('readystatechange', () => {
                if (myHttp.readyState == 4 && myHttp.status == 200) {
                    FullData = JSON.parse(myHttp.response).results;
                    console.log(FullData)
                    display();
                }
            })
        }
        else {
            getData(catergory);
        }
    })
})

function getData(catergory) {
    myHttp.open('GET', `https://api.themoviedb.org/3/movie/${catergory}?api_key=63ec497c294359e7b4d1d53ef9ed5c58&language=en-US&page=1`);
    myHttp.send();
    myHttp.addEventListener('readystatechange', () => {
        if (myHttp.readyState == 4 && myHttp.status == 200) {
            FullData = JSON.parse(myHttp.response).results;
            console.log(FullData)
            display();
        }
    })
}
getData(catergory);
console.log(FullData);

function display() {
    let temp = '';

    FullData.forEach((element) => {
        temp += `  <div class="col-md-6 col-lg-4"  data-aos="fade-up"   data-aos-duration="2500" >
        <div class="full-data position-relative "   style="background-image:url(https://image.tmdb.org/t/p/w500/${element.poster_path}");">
            <div class="data text-white text-center position-absolute ">
                <h3>${element.original_title}</h3>
                <p>${element.overview} </p>
                <p>Rate : ${element.vote_average} </p>
                <p>Release date : ${element.release_date} </p>
            </div>
        </div>
        </div>  `;
    })
    document.getElementById('data-container').innerHTML = temp;


}

function search() {
    let searchVlaue = document.getElementById("search1").value;
    myHttp.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=63ec497c294359e7b4d1d53ef9ed5c58&language=en-US%page=1&include_adult=false&query=${searchVlaue}`);
    myHttp.send();
    myHttp.addEventListener('readystatechange', () => {
        if (myHttp.readyState == 4 && myHttp.status == 200) {
            FullData = JSON.parse(myHttp.response).results;
            console.log(FullData)
            display();
        }
    })
}
function search2() {
    let searchVlaue = document.getElementById("search2").value;
    myHttp.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=63ec497c294359e7b4d1d53ef9ed5c58&language=en-US%page=1&include_adult=false&query=${searchVlaue}`);
    myHttp.send();
    myHttp.addEventListener('readystatechange', () => {
        if (myHttp.readyState == 4 && myHttp.status == 200) {
            FullData = JSON.parse(myHttp.response).results;
            console.log(FullData)
            display();
        }
    })
}

/*================Handealing ContacUs... ================*/


/*================Handealing firstName... ================*/

let firstName = document.getElementById('firstName');
let error = document.getElementById('error');
function validationFirstName() {
    var regex = /^[A-Z][a-z]{2,10}$/;
    if (regex.test(firstName.value) == true) {
        firstName.classList.remove('is-invalid')
        firstName.classList.add('is-valid')
        error.classList.add('d-none')
        error.classList.remove('d-block')
    }
    else {
        firstName.classList.remove('is-valid')
        firstName.classList.add('is-invalid')
        error.classList.remove('d-none')
        error.classList.add('d-block')
    }
}


/*================Handealing Last Name... ================*/
let lastName = document.getElementById('lastName');
let error2 = document.getElementById('error2');

function validationLastName() {
    var regex = /^[A-Z][a-z]{2,10}$/;
    if (regex.test(lastName.value) == true) {
        lastName.classList.remove('is-invalid')
        lastName.classList.add('is-valid')
        error2.classList.add('d-none')
        error2.classList.remove('d-block')
    }
    else {
        lastName.classList.remove('is-valid')
        lastName.classList.add('is-invalid')
        error2.classList.remove('d-none')
        error2.classList.add('d-block')
    }
}

/*================Handealing Phone Number... ================*/
let phone = document.getElementById('phone');
let error3 = document.getElementById('error3');

function validationphone() {
    var regex = /^01[0125][0-9]{8}$/;
    if (regex.test(phone.value) == true) {
        phone.classList.remove('is-invalid')
        phone.classList.add('is-valid')
        error3.classList.add('d-none')
        error3.classList.remove('d-block')
    }
    else {
        phone.classList.remove('is-valid')
        phone.classList.add('is-invalid')
        error3.classList.remove('d-none')
        error3.classList.add('d-block')
    }
}

/*================Handealing Age ... ================*/
let age = document.getElementById('age');
let error4 = document.getElementById('error4');

function validationage() {
    var regex = /^[0-9]{0,2}$/;
    if (regex.test(age.value) == true) {
        age.classList.remove('is-invalid')
        age.classList.add('is-valid')
        error4.classList.add('d-none')
        error4.classList.remove('d-block')
    }
    else {
        age.classList.remove('is-valid')
        age.classList.add('is-invalid')
        error4.classList.remove('d-none')
        error4.classList.add('d-block')
    }
}
/*================Handealing password ... ================*/
let password = document.getElementById('password');

function validationpassword() {
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regex.test(password.value) == true) {
        password.classList.remove('is-invalid')
        password.classList.add('is-valid')
        error5.classList.add('d-none')
        error5.classList.remove('d-block')
    }
    else {
        password.classList.remove('is-valid')
        password.classList.add('is-invalid')
        error5.classList.remove('d-none')
        error5.classList.add('d-block')
    }
}
/*================Handealing repassword ... ================*/
let repassword = document.getElementById('repassword');
let matched = document.getElementById('matched');

console.log(reEnter);
function validationrepassword() {
    if (password.value == repassword.value) {
        repassword.classList.remove('is-invalid')
        repassword.classList.add('is-valid')
        matched.classList.remove('d-none')
        matched.classList.add('d-block')


    }
    else {
        repassword.classList.remove('is-valid')
        repassword.classList.add('is-invalid')
        matched.classList.add('d-none')
        matched.classList.remove('d-block')
    }
}