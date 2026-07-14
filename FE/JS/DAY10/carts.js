const showTotal = document.getElementById("total");
const tbody = document.querySelector("tbody");
const showDetailCart = document.getElementById("showDetailCart");

const fetchDataCarts = () => {
    fetch("https://dummyjson.com/carts")
        .then(res => {
            return res.json();
        })
        .then(data => renderCarts(data))
}
fetchDataCarts();

const renderCarts = (data) => {
    const { carts, total } = data;
    showTotal.innerText = `Total: ${total}`
    tbody.innerHTML = carts.map(cart => {
        const { id, totalProducts, discountedTotal, totalQuantity, total } = cart;
        return `<tr>
      <td>${id}</td>
      <td>${totalProducts} Product</td>
      <td>${discountedTotal} USD</td>
      <td>x${totalQuantity}</td>
      <td>${total} USD</td>
      <td>
        <button onclick="handleDetail(${id})">
           Detail
        </button>
      </td>
    </tr>`

    }).join("")
}

const handleDetail = (id) => {
    fetch(`https://dummyjson.com/carts/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => renderShowDetailCart(data))
}

const renderShowDetailCart = (data) => {
    console.log(data);
    const { products } = data;
    showDetailCart.innerHTML = products.map(item => {
        return `  <div class="cart-item" >
          <img src=${item.thumbnail} alt=${item.title} />

          <div class="info">
            <h3>${item.title}</h3>

            <p>
              Price: <strong>${item.price}</strong>
            </p>

            <p>Quantity: ${item.quantity}</p>

            <p>Total: ${item.total.toFixed(2)}</p>

            <p class="discount">
              Discount ${item.discountPercentage}% →
              <strong> ${item.discountedTotal.toFixed(2)}</strong>
            </p>
          </div>
        </div>`
    }).join('')

}