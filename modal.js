var modal = document.getElementById("modalOverlay")
var innerModal = document.createElement('div')
var modalHeader = document.createElement('div')
var modalHeading = document.createElement('h2')
modalHeading.textContent  = 'Wait, was there something wrong?'
var closeX = document.createElement('span')
closeX.textContent = 'x'
var modalContent = document.createElement('div')
var modalParagraph = document.createElement('p')
var closeButton = document.createElement('button')
closeButton.setAttribute('type', 'button')
closeButton.textContent = 'click here'
modalParagraph.textContent = 'If you\'re having trouble '


modal.appendChild(innerModal)
innerModal.appendChild(modalHeader)
innerModal.appendChild(modalContent)
modalHeading.appendChild(closeX)
modalHeader.appendChild(modalHeading)
modalContent.appendChild(modalParagraph)
modalParagraph.appendChild(closeButton)


modal.style.cssText="display: none; position: fixed; left: 0; top: 0; z-index: 99; width: 100%; height: 100%; overflow: auto;"
innerModal.style.cssText = " text-align: center; margin: 15% auto; width: 60%; border-radius: 32px; border: 1px solid #04111b;"
modalHeader.style.cssText = " background-color: #e98b6d; border-radius: 32px 32px 0 0; padding: 20px;"
modalHeading.style.margin = "0px"
closeX.style.cssText = " color: #04111b; float: right; font-size: 28px; font-weight: bold;"
modalContent.style.padding = "20px"
closeButton.style.cssText="background-color: rgb(233, 139, 109); border: none; padding: 8px; border-radius: 32px;"



if(window.innerWidth < 500){
    console.log('on phone')
    let isScrollingDown = false
    let scrollPosition = window.scrollY
  
    window.addEventListener('scroll', function () {
    if (window.scrollY >= document.documentElement.scrollHeight / 2) {
      scrollPosition = window.scrollY
      isScrollingDown = true
      console.log('user has scrolled down')
    } 
    if (isScrollingDown && window.scrollY <= scrollPosition * 0.95) {
      isScrollingDown = false
      console.log('user has scrolled up')
      displayPopup()
    }
  })

  }

//actual behaviour
const exitEvent = e => {
  if (!e.toElement && !e.relatedTarget && e.clientY < 5) {
    document.removeEventListener('mouseout', exitEvent)
    displayPopup()
  }
}

// window.onclick = (e) => {
//   if (e.target === modal) {
//     modal.style.display = "none"
//   }
// } 

// When the user clicks on <span> (x), close the modal
closeX.onclick = () => {
  modal.style.display = "none"
  closePopup()
}

closeButton.onclick = () => {
    modal.style.display = "none"
    closePopup()
  }

setTimeout(() => {
  document.addEventListener('mouseout', exitEvent)
}, 1500)

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
    setTimeout(() =>{
        displayPopup()
      }, 1500)
    }
  })
function displayPopup() {
    if (sessionStorage.getItem('popupAlreadyShown')) {
        console.log('already cookie')
        return
    }

    modal.style.display = 'block'
  }
  
function closePopup() {
    modal.style.display = 'none'
    sessionStorage.setItem('popupAlreadyShown', 'true')
    console.log('pop up closed')
    console.log(sessionStorage.getItem('popupAlreadyShown') + 'session')
  }

