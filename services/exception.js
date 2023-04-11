const joiException = (error) => {
    let message = ""
    for (let err of error) {
        message += err.message + " "
    }
    return message
}

module.exports = {
    joiException: joiException
}