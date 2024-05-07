// Função para consultar CNPJ
async function fetchCnpj() {
    const cnpj = document.getElementById('cnpjInput').value;
    const cnpjInfoDiv = document.getElementById('cnpjInfo');
    
    try {
        const response = await fetch(`https://www.apiconsultacnpj.com.br/api/v1/cnpj/${cnpj}`);
        const data = await response.json();
        if (data.status === "ERROR") {
            cnpjInfoDiv.innerHTML = data.message;
        } else {
            cnpjInfoDiv.innerHTML = `
                <p><strong>Razão Social:</strong> ${data.razao_social}</p>
                <p><strong>Nome Fantasia:</strong> ${data.nome_fantasia}</p>
                <p><strong>CNPJ:</strong> ${data.cnpj}</p>
                <p><strong>Atividade Principal:</strong> ${data.atividade_principal[0].text}</p>
                <p><strong>CEP:</strong> ${data.cep}</p>
                <p><strong>Endereço:</strong> ${data.logradouro}, ${data.numero}</p>
                <p><strong>Bairro:</strong> ${data.bairro}</p>
                <p><strong>Cidade:</strong> ${data.municipio}</p>
                <p><strong>Estado:</strong> ${data.uf}</p>
            `;
        }
    } catch (error) {
        console.error('Erro ao buscar CNPJ:', error);
        cnpjInfoDiv.innerHTML = "Erro ao buscar CNPJ. Por favor, tente novamente mais tarde.";
    }
}
