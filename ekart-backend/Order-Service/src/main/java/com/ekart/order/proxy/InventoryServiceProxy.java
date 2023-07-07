package com.ekart.order.proxy;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

@FeignClient(name = "inventory-service", url = "http://localhost:8200/api")
public interface InventoryServiceProxy {

	@PutMapping("/fashionProducts/setQuantity/{prodIds}/{quantity}")
	public void settingQuantityFashion(@PathVariable int prodIds, @PathVariable int quantity);

	@PutMapping("/footWear/setQuantity/{prodIds}/{quantity}")
	public void settingQuantityFootWear(@PathVariable int prodIds, @PathVariable int quantity);

	@PutMapping("/accessoriesProducts/setQuantity/{prodIds}/{quantity}")
	public void settingQuantityAccessory(@PathVariable int prodIds, @PathVariable int quantity);

	@PutMapping("/beauty/setQuantity/{prodIds}/{quantity}")
	public void settingQuantityBeauty(@PathVariable int prodIds, @PathVariable int quantity);

	@PutMapping("/Toys/setQuantity/{prodIds}/{quantity}")
	public void settingQuantityToys(@PathVariable int prodIds, @PathVariable int quantity);

	@PutMapping("/electronicsProducts/setQuantity/{prodIds}/{quantity}")
	public void settingQuantityElectronics(@PathVariable int prodIds, @PathVariable int quantity);
}
