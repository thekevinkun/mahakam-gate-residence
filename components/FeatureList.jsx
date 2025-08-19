const FeatureList = ({ name, value }) => {
  return (
    <dl className="flex flex-col items-center">
      <dt className="text-sm md:text-lg font-light tracking-widest uppercase">{ name }</dt>
      <dd className="text-sm md:text-lg font-bold tracking-wider capitalize">{ value }</dd>
    </dl>
  )
}

export default FeatureList;