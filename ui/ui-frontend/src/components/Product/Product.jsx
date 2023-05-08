import {
  CardMedia,
  Card,
  CardContent,
  CardActions,
  Typography,
  CardActionArea,
  Button,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import "./style.css";

const Product = ({ product, addProduct = () => {} }) => (
  <Card className="custom-card">
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="260"
        className="card-image image-size"
        image={product.image.url}
        title="Contemplative Reptile"
      />
      <CardContent className="content">
        <Typography className="title" gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions className="actions-content">
      <>
        <Typography className="price" gutterBottom variant="h5" component="h2">
          {product.price.formatted_with_symbol}
        </Typography>
        <Button
          size="large"
          className="custom-button"
          onClick={() => {
            addProduct(product.id, 1);
          }}
        >
          <ShoppingCart /> Add to basket
        </Button>
      </>
    </CardActions>
  </Card>
);
export default Product;
