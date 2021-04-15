

//Will run this JS after everything on the page has loaded

window.onload = function() {
    var emailState = false; //To keep up with the state of the modal
    var emailModal = document.getElementsByClassName('email-modal') [0];

    var closeButton = document.getElementsByClassName('email-modal__close-btn') [0];
    var emailInput = document.getElementsByClassName('email-modal__input')[0];
    var emailButton = document.getElementsByClassName('email-modal__button')[0];
    var thankContainer = document.getElementsByClassName('email-thank')[0];
    var declineOffer = document.getElementsByClassName('email-modal__decline-offer') [0];

    //Makes sure the email is valid
    function emailIsValid (email) {
        return /\S+@\S+\.\S/.test(email);
    }

    var showModal = () => {
        if (emailState == false)
        {
        emailModal.classList.add('email-modal--visible'); //Adds this to the emailModal element
        emailState = true;
        }
    }

    //Logic for closing the modal
    var closeModal = () => {
        emailModal.classList.remove('email-modal--visible');
    }

    //Logic for adding the error messages once 
    var addErrors = () => {
        document.getElementsByClassName('email-modal__form-group')[0].classList.add('email-modal__form-group--error');
        document.getElementsByClassName('email-modal__error-message')[0].classList.add('email-modal__error-message--active');
    }

    //Removes the error messages
    var removeErrors = () => {
        document.getElementsByClassName('email-modal__form-group') [0].classList.remove('email-modal__form-group--error');
        document.getElementsByClassName('email-modal__error-message')[0].classList.remove('email-modal__error-message--active');
    }

    //Shows the thank you message after the email address gets sent
    var showThankMessage = () => {
        thankContainer.classList.add('email-thank--success');
        setTimeout( () => { //Closes the thank you message for the user after 3 seconds
            closeModal();
        }, 3000);
    }
    emailInput.addEventListener('click', () =>
    {
        removeErrors();
    })
    //Logic for what happens if the email entered is in a valid format or not
    emailButton.addEventListener('click', () =>
    {
        if(emailIsValid(emailInput.value))
        {
            showThankMessage();
        }
        else {
            addErrors();
        }
    })

    //When the user clicks the "Sorry, I'm not interested" text
    declineOffer.addEventListener('click', () =>
    {
        closeModal();
    })

    
    
    //When the "X" button is clicked, it removes the modal and it's back to being invisible. We are removing the class that makes it visible
    closeButton.addEventListener('click', () => {
        closeModal();
    })

   
        //Adding a listener so when the mouse "leaves" the window or document, the modal/pop-up will appear.
    //Adding "body" will allow this to work on other browsers other than Chrome
    document.body.addEventListener('mouseleave', () => {
       showModal();
        
    })
    

    
    //console.log(window.document);
} 