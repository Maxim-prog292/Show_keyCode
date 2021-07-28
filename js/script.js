document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('#wrapper'),
          codeKey = wrapper.querySelector('#code-key'),
          code = wrapper.querySelector('#code'),
          key = wrapper.querySelector('#key'),
          location = wrapper.querySelector('#location'),
          ctrlKey = wrapper.querySelector('#ctrlKey'),
          enter = document.querySelector('#enter');

    wrapper.style.display = 'none';

    document.addEventListener('keydown', (e) => {
        e.preventDefault();
        console.dir(e);
        codeKey.innerHTML = e.keyCode;
        code.innerHTML = e.code;
        key.innerHTML = `"${e.key}"`;
        location.innerHTML = e.location;
        ctrlKey.innerHTML = e.ctrlKey;

        enter.style.display = 'none';
        showWrap();
    });

    function showWrap() {
        wrapper.style.display = 'flex';
    }
});