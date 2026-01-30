let users = JSON.parse(localStorage.getItem("users")) || [];
let posts = JSON.parse(localStorage.getItem("posts")) || [];

/* MÜŞTERİ GİRİŞ */
function login(){
  let u = document.getElementById("logUser").value;
  let p = document.getElementById("logPass").value;

  let ok = users.find(x => x.user === u && x.pass === p);

  if(ok){
    alert("Müşteri girişi başarılı");
    // müşteri paneli sonra eklenecek
  }else{
    alert("Kullanıcı adı veya şifre yanlış");
  }
}

/* ADMIN GİRİŞ */
function adminLogin(){
  let u = document.getElementById("aUser").value;
  let p = document.getElementById("aPass").value;

  if(u === "barisguzel" && p === "baro1453"){
    document.getElementById("adminLoginBox").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
    loadPosts();
  }else{
    alert("Admin bilgileri hatalı");
  }
}

/* ADMIN PAYLAŞIMLARI YÜKLE */
function loadPosts(){
  let list = document.getElementById("postList");
  let html = "";

  posts.forEach(p=>{
    html += `
      <div class="post">
        <b>Kullanıcı:</b> ${p.user}<br>
        <b>Söz:</b> ${p.text}
      </div>
    `;
  });

  list.innerHTML = html || "Henüz müşteri paylaşımı yok";
}
