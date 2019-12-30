var objUsers = [
    {
        email: "guilherme@gmail.com",
        password: "teste1"
    },
    {
        email: "tadashii@gmail.com",
        password: "teste2"
    }
]

function loginUser() {
    var usermail = document.getElementById("user-mail").value
    var password = document.getElementById("user-password").value

    alert("Seu email é " + usermail + " e sua senha é " + password)
}