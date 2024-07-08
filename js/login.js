var username=document.querySelector("#username");
var password=document.querySelector("#password");

let loginbtn=document.querySelector("#sign_in");

let getusername=localStorage.getItem("username");
let getpassword=localStorage.getItem("password");

loginbtn.addEventListener("click",function(e){
e.preventDefault();
if(username.value===""||password.value===""){
    alert("please fill in data");
}else{
    if(getusername &&getusername.trim() ===username.value &&getpassword&&getpassword.trim()===password.value){
        setTimeout(() => {
            window.location="index.html"
        }, 1500);
    }else{
        alert("username or password incorrect");
    }
}
})