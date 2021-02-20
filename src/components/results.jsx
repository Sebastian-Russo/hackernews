import './results.css';
import { timeConversion } from '../helper/time';

export const Results = ({results}) => {
  
  if (!results) return <div className="results-wrapper"></div>;

  console.log(results)

  const result = results.map((result,i) => {
    let date = new Date(result.time * 1000)
    let time = timeConversion(date)
    return (
      <div key={result.id} className="result-wrapper">
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
    </div>
  )
}