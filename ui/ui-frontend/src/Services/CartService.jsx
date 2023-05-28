import axios from "axios";

const CART_SERVICE_BASE_URL = "http://localhost:8300/api/cart";

class CartService {
  addItemsToCart(cart) {
    return axios.post(CART_SERVICE_BASE_URL + "/add", cart);
  }

  getCartItemsByUser(user) {
    return axios.get(CART_SERVICE_BASE_URL + "/getByUserName/" + user);
  }

  getAllItemsInCart() {
    return axios.get(CART_SERVICE_BASE_URL + "/getProducts");
  }
  deleteItemFromCart(cartId) {
    axios.delete(CART_SERVICE_BASE_URL + "/deleteProductInCart/" + cartId);
  }
  updateQuantity(id, userName, qty) {
    axios.put(CART_SERVICE_BASE_URL + "/" + id + "/" + userName + "/" + qty);
  }
  getProductCategoryAndProductId(category, productId) {
    return axios.get(
      CART_SERVICE_BASE_URL +
        "/getProductCategoryAndProductId/" +
        category +
        "/" +
        productId
    );
  }
}

export default new CartService();
