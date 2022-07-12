import {
  faChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

interface ProductProps {
  handleClick: (value: string) => void;
  product: any;
}

export default function Product({ handleClick, product }: ProductProps) {
  const selectedID =
    useSelector((state: RootState) => state.product.selectedID) === product.id;

  return (
    <div
      key={product.id}
      onClick={() => handleClick(product.id)}
      className="flex flex-row items-center space-x-4 shadow-sm p-3 text-xs font-bold cursor-pointer hover:bg-gray-400/30 min-w-[250px] lg:px-10 xl:min-w-[700px] lg:max-w-[700px] "
    >
      <img
        src={product.image}
        alt=""
        className="object-cover w-8 h-8  lg:w-24 lg:h-24 "
      />
      <div className="text-bold flex-1 lg:text-base">{product?.title}</div>
      {selectedID ? (
        <FontAwesomeIcon
          icon={faCircleChevronRight}
          className="text-blue-900 lg:text-4xl "
        />
      ) : (
        <FontAwesomeIcon icon={faChevronLeft} className={"lg:text-4xl"} />
      )}
    </div>
  );
}
