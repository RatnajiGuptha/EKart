import { authenticateApi, api } from "./axiosConfig";

export const CartService = {
  async getAllItemsInCart() {
    const res = await api.request({
      url: `/api/cart/getAllProducts`,
      method: "GET",
    });
    return res;
  },

  async getProductCategoryAndProductId(category, productId) {
    const res = await api.request({
      url: `/api/cart/getProductCategoryAndProductId/${category}/${productId}`,
      method: "GET",
    });
    return res;
  },

  async getCartItemsByUser(user) {
    const res = await api.request({
      url: `/api/cart/getByUserName/${user}`,
      method: "GET",
    });
    return res;
  },

  async addItemsToCart(cart) {
    const res = await api.request({
      url: `/api/cart/add`,
      method: "POST",
      data: cart,
    });
    return res;
  },

  async updateQuantity(id, userName, qty) {
    const res = await api.request({
      url: `/api/cart/${id}/${userName}/${qty}`,
      method: "PUT"
    });
    return res;
  },

  async deleteItemFromCart(cartId) {
    const res = await api.request({
      url: `/api/cart/deleteProductInCart/${cartId}`,
      method: "DELETE",
    });
    return res;
  },
}