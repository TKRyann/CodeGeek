const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return ;
    }
    
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');

    form.classList.remove('dark');
});

function validarUsuario(){
    const nome = document.getElementById('nome');
    const senha = document.getElementById('senha');

    if(!nome || !senha) return true;

    if(nome.value.trim() === '' || senha.value.trim() === ''){
        alert('Por favor preencha usuário e senha.');
        return false;
    }

    return true;
}