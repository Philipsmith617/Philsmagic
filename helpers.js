function successfullMessage(msg) {
    return "✅ *Philsmagic*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *Philsmagic*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "• *Philsmagic :*  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
