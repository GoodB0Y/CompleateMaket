const modalFunctions = () => {
    /* button mobile menu active */
    const menuButtonActive = document.querySelector('.mobile-menu__button');
    const mobileOnlyMenu = document.querySelector('.navigation__mobile');
    const containerBody = document.querySelector('.container');
    
    /* button mobile menu close */
    const crossButtonInMenu = document.querySelector('.info-button.info-button--close');
    
    /* callback form info */
    const formPhoneButton = document.querySelectorAll('.tel-js');
    const callBackForm = document.querySelector('.callback.side-up');
    
    /* feedback form info */
    const formChatButton = document.querySelectorAll('.contact-js');
    const feedbackBackForm = document.querySelector('.feedback.side-up');
    
    /* all close buttons */
    const closeButtons = document.querySelectorAll('.info-button.info-button--close');

    /* button mobile menu active */
    let mobileMenuFlag = false;
    
    /* modal Open function */ 
    function openModal(form) {
        form.classList.remove('popup__animation--hidden');
        form.classList.add('popup__animation--show');
        containerBody.classList.add('blure-on');
        containerBody.classList.remove('blure-off');
    
        if (form.classList.contains('popup__animation--show') && window.matchMedia("(max-width: 768px)").matches) {
            mobileOnlyMenu.classList.remove('show-mobile-menu');
            mobileOnlyMenu.classList.add('hidden-mobile-menu');
        }
    }
    
    /* modal Close function */ 
    function closeModals(form, btn) {
            for (let i = 0; i < btn.length; i++){        
                btn[i].addEventListener('click', function() {
                    form.classList.add('popup__animation--hidden');
                    form.classList.remove('popup__animation--show');
                    containerBody.classList.remove('blure-on');
                    containerBody.classList.add('blure-off');
                });
            }
    } 
    
    /* function blure close modal */
    function closeOnBlure (form) {
        if (form.classList.contains('popup__animation--show')) {
    
            form.classList.add('popup__animation--hidden');
            form.classList.remove('popup__animation--show');
            containerBody.classList.add('blure-off');
            containerBody.classList.remove('blure-on'); 
        } 
    }
    
    /* button mobile menu active */
    menuButtonActive.addEventListener('click', function () {
        mobileMenuFlag = true;
        //formActionFlag = true;
        mobileOnlyMenu.classList.toggle('hidden-mobile-menu');
        mobileOnlyMenu.classList.toggle('show-mobile-menu');
        
        if (mobileOnlyMenu.classList.contains('show-mobile-menu')) {
            containerBody.classList.toggle('blure-off');
            containerBody.classList.toggle('blure-on');
        } 
    });
    /* cross mobile menu close */
    crossButtonInMenu.addEventListener('click', function () {
        if (mobileOnlyMenu.classList.contains('show-mobile-menu')) {
            mobileOnlyMenu.classList.toggle('hidden-mobile-menu');
            mobileOnlyMenu.classList.toggle('show-mobile-menu');
            containerBody.classList.toggle('blure-off');
            containerBody.classList.toggle('blure-on');
        }
    });
    
    containerBody.addEventListener('click',  function () {
        if (mobileOnlyMenu.classList.contains('show-mobile-menu') && !mobileMenuFlag) {
            mobileOnlyMenu.classList.toggle('show-mobile-menu');
            mobileOnlyMenu.classList.toggle('hidden-mobile-menu');
            containerBody.classList.toggle('blure-on');
            containerBody.classList.toggle('blure-off');
        }
        mobileMenuFlag = false;
    });
    
    /* вызов скрытия по blur */
    containerBody.addEventListener('click',  function (evt) {
        if (evt.target.closest('.info')) return;
         closeOnBlure(callBackForm);
         closeOnBlure(feedbackBackForm);
     });
    
    /* вызов модалок */
    formPhoneButton.forEach(button => {
        button.addEventListener('click', function() {
          closeOnBlure(feedbackBackForm);
          closeModals(callBackForm, closeButtons);
          openModal(callBackForm);
        });
      });
    
      formChatButton.forEach(button => {
        button.addEventListener('click', function() {
          closeOnBlure(callBackForm);
          closeModals(feedbackBackForm, closeButtons);
          openModal(feedbackBackForm);
        });
      });
    }
    
    export default modalFunctions;