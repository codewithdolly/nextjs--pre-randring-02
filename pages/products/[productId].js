import React from "react";
import { useRouter } from "next/router";

const product = ({ product }) => {
  const router= useRouter()  //for fallback true
  if(router.isFallback){
    return <h1>Loading.....</h1>
  }
  return (
    <>
      <h2>{product.id}. {product.title}</h2>
      <p>{product.body}</p>
    </>
  );
};

export default product;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http:/localhost:3000/products/${params.productId}`
  );

  const data = await response.json();
console.log(`generating pafe for /products/${params.productId}`);
  return {
    props: {
      product: data,
    },
  };
}

//bugs


export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "1" }, //callied product one by one
      },
    ],
    fallback: true,
  };
}