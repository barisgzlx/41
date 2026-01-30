let users = JSON.parse(localStorage.getItem("users")) || [];

// KAYIT
function register(){
  let u = regUser.value;
  let m = regMail.value;
  let p = regPass.value;
  if(!u||!m||!p){alert("Tüm alanlar dolu olmalı");return;}
  users.push({user:u,mail:m,pass:p});
  localStorage.setItem("users",JSON.stringify(users));
  alert("Kayıt başarılı");
  location.href="index.html";
}

// GİRİŞ
function login(){
  let u = logUser.value;
  let p = logPass.value;
  let ok = users.find(x=>x.user===u && x.pass===p);
  if(ok){
    localStorage.setItem("activeUser",u);
    location.href="customer.html";
  }else alert("Bilgiler yanlış");
}

// ŞİFRE DEĞİŞTİR
function resetPass(){
  let u=rUser.value, m=rMail.value, p=rNewPass.value;
  let user = users.find(x=>x.user===u && x.mail===m);
  if(user){
    user.pass=p;
    localStorage.setItem("users",JSON.stringify(users));
    alert("Şifre değişti");
    location.href="index.html";
  }else alert("Bilgiler eşleşmiyor");
}

// ADMIN
function adminLogin(){
  if(aUser.value === "barisguzel" && aPass.value === "baro1453"){
    location.href="admin-panel.html";
  }else{
    alert("Admin bilgileri hatalı");
  }
}
