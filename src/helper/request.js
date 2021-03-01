import axios from 'axios';


export const Request = (results, setResults, searchBarType, setLoading, indexOfFirstResult, indexOfLastResult) => {
  
  
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
  
  
  const getData = () => {
    const options = searchBar(searchBarType)
    const API_URL = `https://hacker-news.firebaseio.com/v0/${options}.json?print=pretty`;

    return new Promise((resolve, reject) => {
      return resolve(axios.get(API_URL))
    })
  }

  const getIdFromData = (dataId) => {
    const API_URL = `https://hacker-news.firebaseio.com/v0/item/${dataId}.json?print=pretty`;
    return new Promise((resolve, reject) => {
      return resolve(axios.get(API_URL))
    })
  }


  const runAsyncFunctions = async () => {
    setLoading(true)
    const {data} = await getData()
    let ids = data.slice(indexOfFirstResult, indexOfLastResult)

    Promise.all(
      ids.map(async (d) => {
        const {data} = await getIdFromData(d)
        console.log(data)
        return data;
      })
    )
    .then((newresults) => {
      setResults([...results, ...newresults])
      return
    }) 
    setLoading(false)
    // make conditional: check if searchBar type has changed, then clear array of results first
  }  
  

  runAsyncFunctions()
}



