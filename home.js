
const validPin = 1234;
//home page logout btn
document.getElementById("log-out-btn" ).
addEventListener('click', function(e){
     e.preventDefault()
    window.location.href = "./index.html";
})
//add money button
document.getElementById("add-money").addEventListener('click', function(e){
    e.preventDefault()
    const bank = document.getElementById("bank").value 
    const accountNumber = document.getElementById("Account-number").value
    const addAmount = parseInt(document.getElementById("add-amount").value)
    const pin = parseInt(document.getElementById("pin").value)
    const avlaiableBalence = parseInt(document.getElementById("Avlaiable-balence").innerText)

    if(accountNumber.length<11){
        alert('please provide valid account number')
        return;
    }
    if(pin != validPin){
        alert('please provide valid pin number')
        return;
    }

    const newAvlaiableBalence = addAmount + avlaiableBalence;
    document.getElementById("Avlaiable-balence").innerText = newAvlaiableBalence
})
//withdrw button
document.getElementById("wihdraw-money").addEventListener('click', function(e){
    e.preventDefault()
    const agentNumber = document.getElementById("agent-number").value
    const withdrwAmount = parseInt(document.getElementById("withdrw-ammount" ).value)
    const pinNumber = parseInt(document.getElementById("pin-number").value)
    const avlaiableBalenceBefore = parseInt(document.getElementById("Avlaiable-balence").innerText)
    const totalNewAvlaiableBalence = avlaiableBalenceBefore - withdrwAmount;
    console.log(totalNewAvlaiableBalence)
    document.getElementById("Avlaiable-balence").innerText = totalNewAvlaiableBalence
})

//toggling section
document.getElementById("add-money-button").addEventListener('click',function(){
    document.getElementById("cash-out-parent").style.display = 'none'
    document.getElementById("add-money-parent").style.display = 'block'
    document.getElementById("transfer-money-parent").style.display = 'none'
})
document.getElementById("cash-out-button").addEventListener('click',function(){
    document.getElementById("add-money-parent").style.display = 'none'
    document.getElementById("cash-out-parent").style.display = 'block'
     document.getElementById("transfer-money-parent").style.display = 'none'
})

document.getElementById("transfer-money-btn").addEventListener('click',function(){
    document.getElementById("add-money-parent").style.display = 'none'
    document.getElementById("cash-out-parent").style.display = 'none'
    document.getElementById("transfer-money-parent").style.display = 'block'
})