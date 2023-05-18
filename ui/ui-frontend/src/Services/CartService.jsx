import axios from "axios";

const CART_SERVICE_BASE_URL = "http://localhost:8300/api/cart";

class CartService {
  addItemsToCart(cart) {
    return axios.post(CART_SERVICE_BASE_URL + "/add", cart);
  }

  getAllItemsInCart() {
    return axios.get(CART_SERVICE_BASE_URL + "/getProducts");
  }
  deleteItemFromCart(cartId) {
    axios.delete(CART_SERVICE_BASE_URL + "/deleteProductInCart/" + cartId);
  }
}

export default new CartService();
