import '../App.css'

function CartItem(id, image, product, price, quantity, deleteItem, changeQuantity) {
    
    const handleIncrease = () => changeQuantity(id, product, 1);
    const handleDecrease = () => changeQuantity(id, product, -1);
    const handleDelete = () => deleteItem(id);

    return (
        <div>
            {product}
            {id}
            {price}
            {quantity}
            <button type='button' onClick={handleDelete}>Delete</button>

        </div>
    )

}


