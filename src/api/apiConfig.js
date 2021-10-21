const apiConfig={
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey:'f0d4dca4118de327d443618973871bc1',
    originalImage:(imgPath) =>`https://image.tmdb.org/t/p/original${imgPath}`,
    w500Image:(imgPath) =>`https://image.tmdb.org/t/p/w500${imgPath}`,
}

export default apiConfig