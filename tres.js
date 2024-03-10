/* Verificador de maioridade*/

var data = prompt('Digite a data do seu nascimento - dd/mm/aa');

function getAge(data) {

    const today = new Date();
    const birthDate = new Date(data);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

console.log(data)

if(data <18){
    alert('você é menor de idade! bye')
}else{
    alert('Você é maior de idade! ok')
}
