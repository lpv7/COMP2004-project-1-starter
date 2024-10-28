// 2. NavBar is the top presentation container that displays the app’s title, a username greeter, and a cart
// icon that indicates whether the cart is full, shown by the red dot over the cart icon or empty.

export default function NavBar() {
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
            <b>Groceries App </b>
            {/* Don't forget the Red Apple Emoji! */}
          </h2>
        </div>
      </div>
      <div className="NavDiv">
        <div className="NavCart">
          <p>
            <img src="src\assets\cart-empty.png" alt="" />
          </p>
        </div>
      </div>
    </div>
  );
}
