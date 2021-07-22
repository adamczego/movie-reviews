const Dashboard = () => {

  const goToDashboard = () => {
    window.location.href = '/dashboard'
    return true
  }
  const goToMovies = () => {
    window.location.href = '/movies'
    return true
  }

  return (
    <div>
      Dashboard
      <button type="button" onClick={() => goToDashboard() }>Dashboard</button>
      <button type="button" onClick={() => goToMovies() }>Top Rated Movies</button>
    </div>
  )
}

export default Dashboard
