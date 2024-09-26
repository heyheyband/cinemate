export default defineEventHandler(async event => {
const config = useRuntimeConfig(event)
    const {AccessToken} = config
    const {ApiBaseUrl} = config
    const upcomingMoviesUrl = `${ApiBaseUrl}movie/upcoming`

    const upcomingMovies = await $fetch(upcomingMoviesUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        }
    })

    return {upcomingMovies}
})