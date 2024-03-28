/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
export default function CampaignBar() {
  return (
    <Link to="/item-product-list/collection?filter=price-down">
      <div className="bg-primary text-secondary text-center py-4 px-6 top-0 left-0 right-0 z-50 flex items-center justify-center h-[60px]">
        <p className="text-sub font-semibold">
          Discover Fashion's Grand Opening: Enjoy Exclusive Discounts!
        </p>
      </div>
    </Link>
  );
}
