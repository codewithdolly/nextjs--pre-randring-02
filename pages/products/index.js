import React from "react";
import Link from "next/link";

const productList = ({ products }) => {
  return (
    <>
      <h1>List of products</h1>
      {products.map((product) => {
        return (
          <div key={product.id} style={{ borderBottom: "2px solid gray" }}>
            
              <h2>
                {product.id}. {product.title} {product.price}
              </h2>
          
          </div>
        );
      })}
    </>
  );
};

export default productList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      products: data,
    },
    // revelidate: 10,
  };
}
