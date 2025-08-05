import { IoIosCheckmarkCircle } from "react-icons/io";

const AmenitiesList = ({ name }) => {
  return (
    <>
      <IoIosCheckmarkCircle className="text-xl sm:text-2xl text-sky-900 shrink-0"/>
      <span>{name}</span>
    </>
  )
}

export default AmenitiesList;