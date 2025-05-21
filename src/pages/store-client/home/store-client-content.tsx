import {
  Deals,
  FeaturedProducts,
  Info,
  NewArrivals,
  PopularSneakers,
  Search,
  SpecialOffers,
} from './components';

export function StoreClientContent() {
  return (
    <div className="grid grid-cols-1 gap-6">
      {/* <Search /> */}
      <SpecialOffers />
      <FeaturedProducts />
      <NewArrivals />
      <PopularSneakers />
      <Deals />
      <Info />
    </div>
  );
}
