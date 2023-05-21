import { useFetchProducts } from '../../hooks/products/useFetchProducts';
import { Spinner } from '../Spinner';
import { ProductListRow } from './ProductListRow';

export const ProductsList = () => {
  const { data: products, loading, error } = useFetchProducts();

  if (loading) return <Spinner />;

  if (error) {
    return <p>There was an error</p>;
  }

  return (
    <div className="product-container">
      {products.length > 0 &&
        products.map((product) => {
          return <ProductListRow key={product.id} product={product} />;
        })}
    </div>
  );
};
