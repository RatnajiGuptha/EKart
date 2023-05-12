import { Link } from "react-router-dom";

function HomeCategories() {
    return (
        <div className='categories-container'>
            <Link to="/fashion" className="link">
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683279944/fashion1_drwetu.png" alt="/" className="w-100" />
                    <p className='card-names'> Fashion </p>
                </div>
            </Link>
            <Link to="/kidswear" className="link">
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280396/kids_wear_xgdhkr.png" alt="/" className='w-75' />
                    <p className='card-names'> Kids wear</p>
                </div>
            </Link>
            <Link to="/accessories" className="link">
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280111/accesories_yqpt8o.png" alt="/" className='w-75' />
                    <p className='card-names'>  Accessories</p>
                </div>
            </Link>
            <Link to="/toys" className="link">
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280398/toys_zyfzq2.png" alt="/" className='w-75' />
                    <p className='card-names'>   Toys </p>
                </div>
            </Link>
            <Link to="/beauty" className="link">
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280205/beauty_rbw6fv.png" alt="/" className='w-75' />
                    <p className='card-names'>  Beauty </p>
                </div>
            </Link>
            <Link to="/electronics" className="link">
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522149/electronics_yjk1bl.webp" alt="/" className='w-75' />
                    <p className='card-names'>   Electronics </p>
                </div>
            </Link>


            <Link to="/appliances" className="link">
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683280343/appliances_zxbxbl.png" alt="/" className='w-75 p-1' />
                    <p className='card-names'>   Appliances</p>
                </div>
            </Link>
            <Link to="/mobiles" className="link">
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683523235/mobiles_s5p07b.webp" alt="/" className='w-75' />
                    <p className='card-names'>    Mobiles </p>
                </div>
            </Link>

            <Link to="/footwear" className="link">
                <div className='card-info'>
                    <img src="https://rukminim1.flixcart.com/image/612/612/ktizdzk0/shoe/y/b/x/7-ws-9310-tying-grey-original-imag6ut3hzm2zyqm.jpeg?q=70" alt="/" className='w-75' />
                    <p className='card-names img'>  Footwear </p>
                </div>
            </Link>

        </div>
    );
}

export default HomeCategories;