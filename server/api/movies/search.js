export default defineEventHandler(async event => {
    const userQuery = getQuery(event)
    const {searchTerm} = userQuery
    const config = useRuntimeConfig(event)
    const {AccessToken} = config
    const {ApiBaseUrl} = config
    const movieSearchUrl = `${ApiBaseUrl}search/movie`
    const seriesSearchUrl = `${ApiBaseUrl}search/tv`

    const movies = await $fetch(movieSearchUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        },
        query: {
            query: searchTerm
        }
    })

    const series = await $fetch(seriesSearchUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        },
        query: {
            query: searchTerm
        }
    })

    return {movies, series}
})