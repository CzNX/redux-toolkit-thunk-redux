import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dummy_Array = [
  { id: "p1", price: 6, title: "My first book", desc: "the description" },
  { id: "p2", price: 60, title: "My second book", desc: "the description2" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Array.map((p) => (
          <ProductItem
            key={p.id}
            title={p.title}
            price={p.price}
            description={p.desc}
            id={p.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
