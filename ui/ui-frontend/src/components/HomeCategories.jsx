import { Link } from "react-router-dom";

function HomeCategories() {
    return (
        <div className='categories-container'>
            <div className='card-info'>
                <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280111/accesories_yqpt8o.png" alt="/" className='w-75' />
                <p className='card-names'>  Accessories</p>
            </div>
            <div className='card-info'>
                <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280205/beauty_rbw6fv.png" alt="/" className='w-75' />
                <p className='card-names'>  Beauty </p>
            </div>
            <div className='card-info'>
                <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522149/electronics_yjk1bl.webp" alt="/" className='w-75' />
                <p className='card-names'>   Electronics </p>
            </div>
            <Link to="/fashion">
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683279944/fashion1_drwetu.png" alt="/" className="w-100" />
                    <p className='card-names'> Fashion </p>
                </div>
            </Link>
            <div className='card-info'>
                <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280292/groceries_xwmz5e.png" alt="/" className='w-75' />
                <p className='card-names'>   Grocery </p>
            </div>
            <div className='card-info'>
                <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280343/appliances_zxbxbl.png" alt="/" className='w-75 p-1' />
                <p className='card-names'>   Appliances</p>
            </div>
            <div className='card-info'>
                <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683523235/mobiles_s5p07b.webp" alt="/" className='w-75' />
                <p className='card-names'>    Mobiles </p>
            </div>
            <div className='card-info'>
                <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280398/toys_zyfzq2.png" alt="/" className='w-75' />
                <p className='card-names'>   Toys </p>
            </div>

            <div className='card-info'>
                <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280396/kids_wear_xgdhkr.png" alt="/" className='w-75' />
                <p className='card-names'> Kids wear</p>
            </div>
        </div>
    );
}

export default HomeCategories;