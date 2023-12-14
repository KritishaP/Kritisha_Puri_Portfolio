//script for displaying skills and education

let tablinks = document.getElementsByClassName('tab-links')
let tabcontents = document.getElementsByClassName('tab-contents')


const opentab = (tabname) => {
  for (tablink of tablinks) {
    tablink.classList.remove('active-link');

  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove('active-tab');

  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab')
}

//responsive design show and hide menu

const sidemenu = document.getElementById('sidemenu');
const openmenu = () => {
  sidemenu.style.right = '0';
}
const closemenu = () => {
  sidemenu.style.right = '-200px';
}



//script for gettimg response of form in our google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycby_d3SKGwAxa7oE_7Cr3e_oyhfL-VO7Qch_D1iOHmPhmwsWhY9KtkGXvoybJ1ipFpZ3/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = 'Message Sent Successfully'
      setTimeout(() => {
        msg.innerHTML = ''
      }, 5000)
      form.reset()
    })

    .catch(error => console.error('Error!', error.message))
})