import './results.css';
import { timeConversion } from '../helper/time';


export const Results = ({results, loading}) => {
  
  if (!results) return <div className="results-wrapper"></div>;
  if (loading) return <h2>Loading...</h2>

  console.log(results)

  // api came back with a null value in array randomly
  const filteredResults = results.filter((result,i) => result != null || undefined);

  const result = filteredResults.map((result,i) => {
    
    let date = new Date(result.time * 1000)
    let time = timeConversion(date)
    return (
      <div key={i} className="result-wrapper">
        <div className="box-1">
            <div>{i+1}.</div>
            <div><a href={result.url}>{result.title}</a></div>
        </div>
        <div className="box-2">
            <div>{result.score} points</div>
            <div>by {result.by}</div>
            <div>{time} ago</div>
        </div>
      </div>
    )
  })
  
  
  return (
    <div className="results-wrapper">
      {result}
      {/* <div className="more-btn" onClick={() => handleClick()} >More</div> */}
    </div>
  )
}