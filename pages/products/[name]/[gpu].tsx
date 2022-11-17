import { useRouter } from "next/router"

const ProductGPU = () => {
  const router = useRouter();
  const {name, gpu} = router.query;
  return <h2>Viewing Product: {name} with {gpu} </h2>;
}

export default ProductGPU;