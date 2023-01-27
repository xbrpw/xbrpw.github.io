const unownContainer = document.querySelector('#unown-container');
        const textInput = document.querySelector('#text-input');
        const inputInfo = document.querySelector('#input-info');

        function setUnownContainerContent(inputText) {
            
            if (!(/^[A-Za-z\s]*$/g.test(inputText))) {
                inputInfo.style.color = 'var(--c-input-info-error)';
                textInput.style.background = 'var(--c-text-input-error)';
                return;
            }

            inputInfo.style.color = 'var(--c-bl2)';
            textInput.style.background = 'var(--c-text-input)';
            unownContainer.innerHTML = inputText.split('').reduce((acc, char) => 
                acc + `<div class="unown unown__${char.trim().length ? char.toLowerCase() : 'space'}"></div>`
            , '');
        }

        textInput.addEventListener('keyup', e => setUnownContainerContent(e.target.value));
        textInput.addEventListener('paste', e => setUnownContainerContent(e.target.value));