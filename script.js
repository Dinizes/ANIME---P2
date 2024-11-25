
function validateForm() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

   
    if (nome === "" || email === "" || assunto === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return false; 
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false; 
    }

   
    alert("Mensagem enviada com sucesso!");
    document.getElementById("form-contato").reset(); 
    return true; 
}

window.onload = function() {
    const savedTheme = localStorage.getItem('theme'); 
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        
        document.body.classList.add('light-theme');
    }


    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        
        themeToggleButton.style.display = 'inline-block';
    }
}

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
    
    
    body.classList.remove(currentTheme);
    
    if (currentTheme === 'light-theme') {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme'); 
    } else {
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme'); 
    }
}



