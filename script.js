let users = JSON.parse(localStorage.getItem("users")) || [];

/* KAYIT FORMUNU AÇ */
function showRegister(){
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("registerBox").style.display = "block";
}

/* GİRİŞ FORMUNA DÖN */
function showLogin(){
  document.getElementById("registerBox").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
}

/* KAYIT OL */
function register(){
  let u = document.getElementById("regUser").value;
  let m = document.getElementById("regMail").value;
  let p = document.getElementById("regPass").value;

  if(!u || !m || !p){
    alert("Tüm alanları doldur");
    return;
  }

  let kontrol = users.find(x => x.user === u);
  if(kontrol){
    alert("Bu kullanıcı adı zaten var");
    return;
  }

  users.push({user:u, mail:m, pass:p});
  localStorage.setItem("users", JSON.stringify(users));

  alert("Kayıt başarılı, şimdi giriş yapabilirsin");
  showLogin();
}

/* 🔥 MÜŞTERİ GİRİŞ (ASİL DEĞİŞEN YER) */
function login(){
  let u = document.getElementById("logUser").value;
  let p = document.getElementById("logPass").value;

  let ok = users.find(x => x.user === u && x.pass === p);

  if(ok){
    localStorage.setItem("activeUser", u); // 👈 kullanıcıyı hatırla
    location.href = "customer.html";       // 👈 MÜŞTERİ SAYFASINA GİT
  }else{
    alert("Kullanıcı adı veya şifre yanlış");
  }
}
