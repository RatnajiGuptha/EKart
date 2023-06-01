import axios from "axios";

const CART_SERVICE_BASE_URL = "http://localhost:8888/api/cart";

const token = localStorage.getItem('token');

const header = {
  headers: { Authorization: `Bearer ${token}` }
};

class CartService {
  addItemsToCart(cart) {
    return axios.post(CART_SERVICE_BASE_URL + "/add", cart, header);
  }

  getCartItemsByUser(user) {
    return axios.get(CART_SERVICE_BASE_URL + "/getByUserName/" + user, header);
  }

  getAllItemsInCart() {
    return axios.get(CART_SERVICE_BASE_URL + "/getProducts", header);
  }
  deleteItemFromCart(cartId) {
    axios.delete(CART_SERVICE_BASE_URL + "/deleteProductInCart/" + cartId);
  }
  updateQuantity(id, userName, qty) {
    axios.put(CART_SERVICE_BASE_URL + "/" + id + "/" + userName + "/" + qty);
  }
  getProductCategoryAndProductId(category, productId) {
    return axios.get(CART_SERVICE_BASE_URL + "/getProductCategoryAndProductId/" + category + "/" + productId, header);
  }
}

export default new CartService();
