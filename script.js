let users = JSON.parse(localStorage.getItem("users")) || [];

/* KAYIT GÖSTER */
function showRegister(){
  document.getElementById("registerBox").style.display = "block";
}

/* KAYIT OL */
function register(){
  let u = regUser.value;
  let m = regMail.value;
  let p = regPass.value;

  if(!u || !m || !p){
    alert("Tüm alanları doldur");
    return;
  }

  users.push({user:u, mail:m, pass:p});
  localStorage.setItem("users", JSON.stringify(users));

  alert("Kayıt başarılı, giriş yapabilirsin");
  document.getElementById("registerBox").style.display = "none";
}

/* MÜŞTERİ GİRİŞ */
function login(){
  let u = logUser.value;
  let p = logPass.value;

  let ok = users.find(x => x.user === u && x.pass === p);

  if(ok){
    alert("Giriş başarılı 🎉");
  }else{
    alert("Hatalı kullanıcı adı veya şifre");
  }
}
