import Image from "next/image";
import Link from "next/link";

const products = [{ name: "phone" }, { name: "computer" }, { name: "tablet" }];

export default function PreRender() {
  return(
    <div>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.name}>
              <Link href={`/products/${product.name}`} >
                {product.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <h2>Welcome to my homepage!</h2>
      <Image src="/me.jpeg" width={500} height={300} alt=''/>
    </div>
  )
}