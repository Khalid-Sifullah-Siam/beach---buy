import Hero from "./components/HomeComponents/Hero";
import PopularProducts from "./components/HomeComponents/PopularProducts";
import SummerCareTips from "./components/HomeComponents/SummerCareTips";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularProducts />
      <SummerCareTips />
    </div>
  );
}
