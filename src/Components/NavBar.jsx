// 2. NavBar is the top presentation container that displays the app’s title, a username greeter, and a cart
// icon that indicates whether the cart is full, shown by the red dot over the cart icon or empty.

//NavBar: Renders :Hello, Username" (No functionality...yet), Groceries App with a cute little apple, and
//a cart icon; icon will render with a red dot if the cart has anything in it. If the cart is emptied, will
//revert back to empty cart pic.

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
