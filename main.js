document.getElementById('formularioCadastro').addEventListener('submit', function(e) {
    e.preventDefault();

    const matricula = document.getElementById('matricula').value;
    const turma = document.getElementById('turma').value;
    const nome = document.getElementById('nome').value;

    const url = "https://script.google.com/macros/s/AKfycbx7EBum9xZn8mBsKFcgeK-lE3-l6zwdTwyBSUPLSUBGcpsX6g4T-FVJwjUlaVvM6VjXNw/exec"; // Coloque aqui a URL do seu Google Apps Script

    const formData = new URLSearchParams();
    formData.append('matricula', matricula);
    formData.append('turma', turma);
    formData.append('nome', nome);

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        alert('Cadastro realizado com sucesso!');
        document.getElementById('formularioCadastro').reset();
    })
    .catch(error => {
        alert('Erro ao enviar o formulário. Tente novamente.');
        console.error('Erro:', error);
    });
});

