let itemQuant = [1,1]
let itemPrice = [15, 25]
const cart = document.querySelector('.cart')
const quantUp = cart.querySelectorAll('#quantity-up')
const quantDown = cart.querySelectorAll('#quantity-down')
const totalQuant = cart.querySelectorAll('.total-quantity')
const item = cart.querySelectorAll('.cart-item')
const rmvButton = cart.querySelectorAll('.remove')
const totalPrice = cart.querySelectorAll('.total-price')

for(let i = 0; i < 2; i++){

    quantUp[i].addEventListener('click', function(){
        itemQuant[i] += 1
        totalQuant[i].textContent = `Quantity: ${itemQuant[i]}`
        totalPrice[i].textContent = `Total Price: \$ ${itemQuant[i]*itemPrice[i]}`
        
    })
    quantDown[i].addEventListener('click', function(){
        if (itemQuant[i] > 0){
            itemQuant[i] -= 1
            totalQuant[i].textContent = `Quantity: ${itemQuant[i]}`
            totalPrice[i].textContent = `Total Price: \$ ${itemQuant[i]*itemPrice[i]}`
        }
    })
    rmvButton[i].addEventListener('click', function(){
        item[i].remove()
    })
}
