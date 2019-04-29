// 첫페이지 설정
document.getElementById("p2").style.display = "none";

document.getElementById("ba_btn").style.display="none";

// 첫페이지에서 두번째페이지로 이동
function se_page(){
    document.getElementById("p1").style.display = "none";
    document.getElementById("p2").style.display = "";

    document.getElementById("ba_btn").style.display="";

    document.getElementById("se_btn").style.display="none";

    document.getElementById("p2_btn").click();
}

// 두번째에서 첫번째로 이동
function ba_page(){
      document.getElementById("p1").style.display = "";
      document.getElementById("p2").style.display = "none";

      document.getElementById("ba_btn").style.display="none";

      document.getElementById("se_btn").style.display="";

      document.getElementById("p1_btn").click();
}

