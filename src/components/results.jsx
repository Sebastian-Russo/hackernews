import './results.css';

export const Results = ({results}) => {
  
  if (!results) return <div className="results-wrapper"></div>;

  console.log(results)

  

  // const render = results.data[0]

  // console.log(render)
  
  return (
    <div className="results-wrapper">
      Results
    </div>
  )
}