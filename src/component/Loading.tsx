import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading() {
  return (
    <div className="flex justify-center items-center mt-96 text-6xl">
      <div className="spinner-border animate-spin inline-block " role="status">
        <FontAwesomeIcon icon={faSpinner} className=" text-blue-500" />
      </div>
      <span className="pl-10">Loading</span>
    </div>
  );
}
