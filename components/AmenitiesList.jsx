import { IoIosCheckmarkCircle } from "react-icons/io";

const AmenitiesList = ({ name }) => {
  return (
    <>
      <IoIosCheckmarkCircle 
        aria-hidden="true"
        className="text-xl sm:text-2xl text-sky-900 shrink-0"
      />
      <span>{name}</span>
      <span className="sr-only">Amenity available</span>
    </>
  )
}

export default AmenitiesList;