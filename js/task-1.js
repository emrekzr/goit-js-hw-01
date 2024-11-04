function makeTransaction (quantity, pricePerDroid){
    
    const totalPrice = quantity * pricePerDroid
    
    return `You ordered ${quantity} droid worth ${totalPrice} credits`;
    
}