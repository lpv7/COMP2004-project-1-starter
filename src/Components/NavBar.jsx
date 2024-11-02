// 2. NavBar is the top presentation container that displays the app’s title, a username greeter, and a cart
// icon that indicates whether the cart is full, shown by the red dot over the cart icon or empty.

export default function NavBar({ cartList }) {
  const isCartEmpty = cartList.length === 0; // Check if cart is empty

  return (
    <div className="NavBar">
      <div className="NavDiv">
        <div className="NavUser">
          <h3>Hello, Username</h3>
        </div>
      </div>
      <div className="NavDiv">
        <div className="NavTitle">
          <h2>
            <b>Groceries App</b>
          </h2>
        </div>
      </div>
      <div className="NavDiv">
        <div className="NavCart">
          <p>
            <img
              src={
                isCartEmpty
                  ? "src/assets/cart-empty.png"
                  : "src/assets/cart-full.png"
              }
              alt="cart icon"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
