const FeatureList = ({ name, value }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm md:text-lg font-light tracking-widest uppercase">{ name }</span>
      <span className="text-sm md:text-lg font-bold tracking-wider capitalize">{ value }</span>
    </div>
  )
}

export default FeatureList;