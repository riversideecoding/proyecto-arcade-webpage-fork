const fun = () => {
    let text = document.querySelector("#account-name");

    console.log(text);
    console.log(localStorage.getItem("username"));
    let user = localStorage.getItem("username")
    if (user) {
        text.innerHTML = user;
        return;
    }
    text.innerHTML = "Cuenta";
};

fun();