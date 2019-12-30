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

    for(i = 0; i < objUsers.length; i++) {
        if(usermail == objUsers[i].email && password == objUsers[i].password) {
            console.log(usermail + " está logado!!!")
        }
        return
    }
    console.log("Email ou senha incorretos!!!")
}