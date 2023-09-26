function abrirModal(){
  document.querySelector('.modal').style.display = "flex";
}

function fecharModal(){
  document.querySelector('.modal').style.display = "none";
}

function enviarMensagem(){
  let nome = document.getElementById('input_nome');
  let mensagem = document.getElementById('input_mensagem');

  if(nome.value == ""){
    nome.classList.add("erro");
    nome.placeholder = "O nome é obrigatório";
  }else{
    let texto = `Olá me chamo ${nome.value}, ${mensagem.value}`
    let url = `https://api.whatsapp.com/send?phone=5511964114277&text=${texto}`
    window.open(url)
  }
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
