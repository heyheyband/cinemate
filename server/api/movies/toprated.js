export default defineEventHandler(async event => {
    const config = useRuntimeConfig(event)
    const {AccessToken} = config
    const {ApiBaseUrl} = config
    const topRatedMoviesUrl = `${ApiBaseUrl}movie/top_rated`
    const topRatedSeriesUrl = `${ApiBaseUrl}tv/top_rated`

    const topRatedMovies = await $fetch(topRatedMoviesUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        }
    })

    const topRatedSeries = await $fetch(topRatedSeriesUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        }
    })

    return {topRatedMovies, topRatedSeries}
})