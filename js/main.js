function admin() {
  if (
    document.getElementById("adminname").value == "harun" &&
    document.getElementById("adminpassword").value == "1234"
  ) {
    window.location.href = "mainPage.html";
  } else if (
    document.getElementById("adminname").value == "" ||
    document.getElementById("adminpassword").value == ""
  ) {
    alert("Kullanıcı adı veya şifre alanı boş bırakılmamalı!!");
    document.getElementById("adminname").value = "";
    document.getElementById("adminpassword").value = "";
  } else {
    alert("Kullanıcı adı veya şifre hatalı!!");
    document.getElementById("adminname").value = "";
    document.getElementById("adminpassword").value = "";
  }
}
