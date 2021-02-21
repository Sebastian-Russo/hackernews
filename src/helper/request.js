import axios from 'axios';
import BottleNeck from 'bottleneck'

const limiter = new BottleNeck({
  maxConcurrent: 1, 
  minTime: 333
})


export const Request = (results, setResults, searchBarType, setLoading) => {
  
  const searchBar = type => {
    const obj = {
      'new': 'newstories',
      'past': '',
      'comments': 'user',
      'ask': 'askstories',
      'show': 'showstories',
      'jobs': 'jobstories',
      'top': 'topstories',
      'best': 'beststories',
      'user': 'user'
    }
  
    return obj[type] ? obj[type] : obj['new'];
  }

  let type = searchBar(searchBarType)

  const getData = () => {
    const options = type
    const API_URL = `https://hacker-news.firebaseio.com/v0/${options}.json?print=pretty`;

    return new Promise((resolve, reject) => {
      return resolve(axios.get(API_URL))
    })
  }

////////////////////////////////////////////////////


const fetchData = async () => {
  let currentPage = 1
  setLoading(true)
  const options = type
  const API_URL = `https://hacker-news.firebaseio.com/v0/${options}&page=${currentPage}.json?print=pretty`;
  const {data} = await axios.get(API_URL)
  setResults(data)
  setLoading(false)
}

// fetchData()



//////////////////////////////////////////////////

  const getIdFromData = (dataId) => {
    const API_URL = `https://hacker-news.firebaseio.com/v0/item/${dataId}.json?print=pretty`;
    return new Promise((resolve, reject) => {
      return resolve(axios.get(API_URL))
    })
  }


  const runAsyncFunctions = async () => {
    setLoading(true)
    const {data} = await getData()
    let firstTen = data.filter((d,i) => i < 10);

    Promise.all(
      firstTen.map(async (d) => {
        const {data} = await limiter.schedule(() => getIdFromData(d))
        console.log(data)
        return data;
      })
      )
      .then((newresults) => setResults((results) => [...results, ...newresults]))
      setLoading(false)
    // make conditional: check if searchBar type has changed, then clear array of results first
  }  
  

  runAsyncFunctions()
}
  
  // make first call, go through array, for each id, call for info, then return that/ save in new array and render it or paginate it
  // Promise.all on the array (response of new storeis, certain block like ten per page), call other url within in to get data on those ten results
  // Promise.all return each data, after you can chain with then that passes an array with all resolved data. This way you only need to call it once setResults:
  // maybe cache data


