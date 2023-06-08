import { Link } from "react-router-dom";

function HomeCategories() {
    return (
        <div className='categories-container'>
            <Link to="/fashion" className="link">
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dmanaxtze/image/upload/v1686028336/fashion1_drwetu-removebg-preview_nt1iwn.png" alt="/" className="w-100" />
                    <p className='card-names'> Fashion </p>
                </div>
            </Link>
            <Link to="/fashionByType/KidsWear" className="link"> 
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dmanaxtze/image/upload/v1686029756/kids_wear_xgdhkr-removebg-preview_vewfbc.png" alt="/" className='w-75' />
                    <p className='card-names'> Kids wear</p>
                </div>
            </Link>
            <Link to="/accessories" className="link">
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dmanaxtze/image/upload/v1686029898/accesories_yqpt8o-removebg-preview_barrmr.png" alt="/" className='w-75' />
                    <p className='card-names'>  Accessories</p>
                </div>
            </Link>
            <Link to="/toys" className="link">
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dmanaxtze/image/upload/v1686029897/toys_zyfzq2-removebg-preview_yij2eg.png" alt="/" className='w-75' />
                    <p className='card-names'>   Toys </p>
                </div>
            </Link>
            <Link to="/beauty" className="link">
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dmanaxtze/image/upload/v1686029984/beauty_rbw6fv-removebg-preview_vwfybg.png" alt="/" className='w-75' />
                    <p className='card-names'>  Beauty </p>
                </div>
            </Link>
            <Link to= "/electronics" className="link">
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522149/electronics_yjk1bl.webp" alt="/" className='w-75' />
                    <p className='card-names'>   Electronics </p>
                </div>
            </Link>

            <Link to="/electronicsBy/Appliances" className="link">
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dmanaxtze/image/upload/v1686030174/appliances_zxbxbl-removebg-preview_1_ejrszv.png" alt="/" className='w-75 p-1' />
                    <p className='card-names'>   Appliances</p>
                </div>
            </Link>
            <Link to="/electronicsBy/Mobiles" className="link">
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683523235/mobiles_s5p07b.webp" alt="/" className='w-75' />
                    <p className='card-names'>    Mobiles </p>
                </div>
            </Link>

            <Link to="/footwear" className="link">
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dmanaxtze/image/upload/v1686030089/7-ws-9310-tying-grey-original-imag6ut3hzm2zyqm-removebg-preview_qc6mqb.png" alt="/" className='w-75' />
                    <p className='card-names img'>  Footwear </p>
                </div>
            </Link>

        </div>
    );
}

export default HomeCategories;