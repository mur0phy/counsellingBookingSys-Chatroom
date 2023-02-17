import React from 'react'

function load(){
  return(
    <div></div>
  )
}
/*
function Load() {
    const { decodedToken } = this.state
    const signedIn = !!decodedToken

    if (signedIn) {
      // display loading page
      this.setState({ loading: true })
      // load all of the workers from the database
      listWorkers()
        .then(workers => {
          this.setState({ WorkerData: workers })
          // load the current user's bookings
          this.loadMyBookings()
          // the state's current worker defaults to first worker
          const worker = this.state.WorkerData[0]
          this.setWorker(worker._id)
          // toggle loading page off
          this.setState({ loading: false })
        })
        .catch(error => {
          console.error('Error loading worker data', error)
          this.setState({ error })
        })
    }

  // When the App first renders
  const componentDidMount() {
    this.load()
  }

  // When state changes
  const componentDidUpdate(prevProps, prevState) {
    // If just signed in, signed up, or signed out,
    // then the token will have changed
    if (this.state.decodedToken !== prevState.decodedToken) {
      this.load()
    }
  }
} 
*/

export default Load