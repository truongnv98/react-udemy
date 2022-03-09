import { Box, Typography } from '@material-ui/core';

import { Skeleton } from '@material-ui/lab';

Product.propTypes = {};

function Product({ product }) {
  return (
    <>
      <Box>
        <Skeleton variant="rect" width="100%" height={118} />
        <Typography variant="body2">{product.name}</Typography>
        <Typography variant="body2">
          {product.salePrice} - {product.promotionPercent}
        </Typography>
      </Box>
    </>
  );
}

export default Product;
