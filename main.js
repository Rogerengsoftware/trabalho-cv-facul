function getProjects() {
    const urlGitHub = 'https://api.github.com/users/Rogerengsoftware/repos';
    var loadingElement = document.getElementById('loading');

    fetch(urlGitHub, {
        method: 'GET'
    })
    .then((response) => {
        console.log('Status da resposta:', response.status);
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.statusText);
        }
        return response.json();
    })
    .then((data) => {
        loadingElement.style.display = 'none';
        showProjects(data); // Corrigido para passar 'data' em vez de 'response'
    })
    .catch((e) => {
        console.error('Erro:', e);
    });

    function showProjects(data) {
        var listElement = document.getElementById('my-projects-list');

        for (let i = 0; i < data.length; i++) {
            let a = document.createElement("a");
            a.href = data[i]['clone_url'];
            a.target = '_blank'; // Corrigido para '_blank'
            a.title = data[i]['description'];
            let linkText = document.createTextNode(data[i]['name']);
            a.appendChild(linkText);
            listElement.appendChild(a);
        }
    }
}

getProjects();

