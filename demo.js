const sayHello = () => {
    const yourName = document.getElementById('yourName')

    const response = document.getElementById('response')

    response.innerText = `Hello, ${yourName.value}`
}