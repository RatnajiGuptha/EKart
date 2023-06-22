
import React, { useState, useEffect } from 'react'
import { WishListService } from '../../Services/WishListService';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";

const WishListComponent = () => {
    const [wishList, setWishList] = useState([]);
    const email = localStorage.getItem("email");
    const navigate = useNavigate();



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await WishListService.getWishListByUser(email);
                console.log(response.data);
                setWishList(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [email]);

    console.log(wishList)

    const handleDelete = async (e) => {
        try {
            const response = await WishListService.deleteItemFromWishList(e);
            console.log(response.data);

        } catch (error) {
            console.log(error);
        }

        navigate("/wishList");

    }

    return (
        <div className="cards-container mr-5">
            {wishList.map((item) => (
                <Link key={item.wishlistId} to={`/${item.inventoryType}/${item.prodId}`} className="link" id={item.wishlistId}>
                    <div className="cards-row">
                        <div className="cards-tables">
                            <img className="images" src={item.logoImg} alt='/' />
                            <div className="product-info">
                                <p className="cat">{item.type}</p>
                                <p className="title">{item.productName}</p>
                                <p className="price">₹ {item.price} /-</p>
                            </div>
                            <RiDeleteBinLine className='Delete-Button' onClick={() => handleDelete(item.wishlistId)} />
                        </div>
                    </div>

                </Link>

            ))}

        </div>
    )
}

export default WishListComponent

