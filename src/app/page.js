import Hero from "./components/HomeComponents/Hero";
import PopularProducts from "./components/HomeComponents/PopularProducts";
import SummerCareTips from "./components/HomeComponents/SummerCareTips";
import TopBrands from "./components/HomeComponents/topBrands";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularProducts />
      <SummerCareTips />
      <TopBrands />
    </div>
  );
}
