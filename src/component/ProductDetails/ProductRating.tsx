import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";

export default function ProductRating({ rating }: { rating: any }) {
  const rate = useMemo(() => Math.round(rating?.rate), [rating]); // get the rounded up value for the rating
  return (
    <div className="flex flex-row items-center space-x-1">
      {rating &&
        [...Array(rate)].map((_, i) => (
          <FontAwesomeIcon icon={faStar} color="#f8ff2e" />
        ))}
      {rating && <div>({rating.count})</div>}
    </div>
  );
}
