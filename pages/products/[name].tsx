import { useRouter } from "next/router";

export default function ProductName() {
  const router = useRouter();
  console.log(router)
  return <h2>Viewing Product: {router.query.name} </h2>;
}