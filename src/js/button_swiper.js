const buttonFunctionsRead = () => {
    /* slider button Brand */
    const dropdownContainer = document.querySelector('.swiper-wrapper__builder.brand-js');
    const dropDownBrandButton = document.querySelector('.brand__button-js');
    
    /* slider button Technical */
    const dropdownContainerTechnical = document.querySelector('.swiper-wrapper__builder.technical-js');
    const dropDownTechnicalButton = document.querySelector('.technical__button-js');
    
    /* button read text */
    const textContainerArticle = document.querySelector('.content__description-item');
    const textButtonArticle = document.querySelector('.content__read-more');
    
    /* функция свернуть/развернуть */
    function checkClass(containerName, hiddenClass, showClass, buttonName){
        containerName.classList.toggle(hiddenClass);
        containerName.classList.toggle(showClass);
    
        if (containerName.classList.contains(showClass)) {
            buttonName.textContent = 'Скрыть';
            buttonName.classList.toggle('swiper-container__button--vector');
        } else {
            buttonName.textContent = 'Показать всё';
            buttonName.classList.toggle('swiper-container__button--vector');
        }
    } 
    
    /* slider button Brand */
    dropDownBrandButton.addEventListener('click', function() {
        checkClass(dropdownContainer, 'hidden-brand-animate', 'show-brand-animate', dropDownBrandButton);
    });
    
    /* slider button Technical */
    dropDownTechnicalButton.addEventListener('click', function() {
        checkClass(dropdownContainerTechnical, 'hidden-technical-animate', 'show-technical-animate', dropDownTechnicalButton);
    });
    
    /* button read text */
    textButtonArticle.addEventListener('click', function (evt) {
        evt.preventDefault();
        textContainerArticle.classList.toggle('no-read-text');
        textContainerArticle.classList.toggle('read-text');
        textButtonArticle.classList.toggle('content__read-more--rotate');
    
        if (textContainerArticle.classList.contains('read-text')) {
            textButtonArticle.textContent = 'Свернуть';
        } else {
            textButtonArticle.textContent = 'Читать далее';
        }
    });
    }
    
    export default buttonFunctionsRead;