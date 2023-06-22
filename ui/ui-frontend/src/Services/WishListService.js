import { authenticateApi } from "./axiosConfig";

export const WishListService = {
    async getWishListByUser(email){
        const res = await authenticateApi.request({
            url: `/api/wishlist/getItemByEmail/${email}`,
            method: "GET",
          });
          return res;
    },

    async addItemsToWishList(wishList) {
        const res = await authenticateApi.request({
          url: `/api/wishlist/addToWishList`,
          method: "POST",
          data: wishList,
        });
        return res;
    },

    async getItemByTypeAndId(inventoryType,prodId){
        const res = await authenticateApi.request({
            url:`/api/wishlist/getItemByProdIdAndInventoryType/${inventoryType}/${prodId}`,
            method:"GET"
        });
        return res
    },

    async deleteItemFromWishList(wishListId){
        const res = await authenticateApi.request({
            url:`/api/wishlist/deleteItemById/${wishListId}`,
            method:"DELETE"
        })
        return res
    }

    


}
