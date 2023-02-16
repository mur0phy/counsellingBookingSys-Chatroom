function load() {
    const { decodedToken } = this.state
    const signedIn = !!decodedToken

    if (signedIn) {
      // display loading page
      this.setState({ loading: true })
      // load all of the rooms from the database
      listRooms()
        .then(rooms => {
          this.setState({ roomData: rooms })
          // load the current user's bookings
          this.loadMyBookings()
          // the state's current room defaults to first room
          const room = this.state.roomData[0]
          this.setRoom(room._id)
          // toggle loading page off
          this.setState({ loading: false })
        })
        .catch(error => {
          console.error('Error loading room data', error)
          this.setState({ error })
        })
    }
  }

  // When the App first renders
  function componentDidMount() {
    this.load()
  }