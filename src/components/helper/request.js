import axios from 'axios';
import BottleNeck from 'bottleneck'

const limiter = new BottleNeck({
  maxConcurrent: 1, 
  minTime: 333
})

// news, past, comments, ask, show, jobs 

export const Request = () => {

  const getData = () => {
    const options = 'newstories' 
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
    const {data} = await getData()

    Promise.all(
      data.map(async (d) => {
        const dataId = await limiter.schedule(() => getIdFromData(d))
        console.log(dataId)
      })
    )
  }

  // runAsyncFunctions()

  
  // make first call, go through array, for each id, call for info, then return that/ save in new array and render it or paginate it
  // Promise.all on the array (response of new storeis, certain block like ten per page), call other url within in to get data on those ten items
  // when styling, copy paste data into random file so you don't have to keep calling endpoint
  // maybe cache data


}
