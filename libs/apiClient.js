import axios from 'axios'
const baseURL = `https://www.omdbapi.com/?apikey=7f517297`

export async function getMovies(keyword, year , page = 1)
{
    if(!keyword) return 

    const offset = page || 1

    const url = `${baseURL}&type=movie&s=${keyword}&y=${year}&page=${offset}`

    const res = await axios.get(url)

    if(!res || !res.data || res.data.Response === 'False')
    {
        console.error('error');
        return []
    }
    return res.data
}

export function getUrl(keyword, page = 1)
{
    const offset = page || 1
    return `${baseURL}&type=movie&s=${keyword}&page=${offset}`
}