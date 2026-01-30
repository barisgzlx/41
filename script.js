let users = JSON.parse(localStorage.getItem("users")) || [];
let posts = JSON.parse(localStorage.getItem("posts")) || [];

/* MÜŞTERİ GİRİŞ */
function login(){
  let u = document.getElementById("logUser").value;
  let p = document.getElementById("logPass").value;

  let ok = users.find(x => x.user === u && x.pass === p);

  if(ok){
    alert("Müşteri girişi başarılı");
  }else{
    alert("Kullanıcı adı veya şifre yanlış");
  }
}
