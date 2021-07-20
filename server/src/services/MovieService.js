const { MovieDb } = require('moviedb-promise')



const mdb = new MovieDb(process.env.TMDB_KEY)


exports.getTopRated = async (req, res) => {
  const movies = await mdb.movieTopRated()
  res.json(movies)
}

