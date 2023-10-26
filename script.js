function showUserData(usr){

    let img = document.querySelector("#fotopessoa");
    let h2 = document.querySelector("#nomepessoa");
    let rua = document.querySelector("#localizacao");
    let sexo = document.querySelector("#sexopessoa");
    let codigoPostal = document.querySelector("#codigopostal");
    let cidade = document.querySelector("#cidadepessoa");
    let estado = document.querySelector("#estadopessoa");
    let pais = document.querySelector("#paispessoa");
    let telefone = document.querySelector("#telefonepessoa");
    let email = document.querySelector("#emailpessoa");

    let imgSrc = usr.picture.medium;
    let nomeCompleto = `${usr.name.first} ${usr.name.last}`;
    let ruaUsr = `${usr.location.street.name} ${usr.location.street.number}`;
    let sexoUsr = usr.gender;
    let codigoPostalUsr = usr.location.postcode;
    let cidadeUsr = usr.location.city;
    let estadoUsr = usr.location.state;
    let paisUsr = usr.location.country;
    let telefoneUsr = usr.phone;
    let emailUsr = usr.email;

    sexoUsr = sexoUsr === 'male' ? 'Masculino' : 'Feminino';

    img.src = imgSrc;
    h2.innerHTML = nomeCompleto;
    rua.innerHTML = "Rua: " + ruaUsr;
    sexo.innerHTML = sexoUsr;
    codigoPostal.innerHTML = "Código Postal: " + codigoPostalUsr;
    cidade.innerHTML = "Cidade: " + cidadeUsr;
    estado.innerHTML = "Estado: " + estadoUsr;
    pais.innerHTML = "País: " + paisUsr;
    telefone.innerHTML = "Telefone: " + telefoneUsr;
    email.innerHTML = "E-mail: " + emailUsr;
}


async function getUserData(){

    let url = 'https://randomuser.me/api/?nat=br';
    let response = await fetch(url);

    if(response.ok){
        let jsonUser = await response.json();
        console.log(jsonUser);
        showUserData(jsonUser.results[0]);

    }else{
        console.log("ERRO API");
    }

}

botao = document.querySelector(".button");
botao.onclick = function(){
    getUserData();
}

getUserData();

