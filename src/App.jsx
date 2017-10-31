import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
// -------
import AddTeam from './AddTeam.jsx'
// ------------------------------------------


class MyApp extends Component {
  render() {

    console.log(this.props.data)
    const { loading, allTeams } = this.props.data

    return(
      <div>
        <h1>Teams</h1>
        {!loading && allTeams.map( (team) => { return(
          <div key={team.id}>
            {team.id}
          </div>
        ) } )}

      <AddTeam />

      </div>
    )
  }
}


const MUTATION = gql`
  mutation createTeam($name: String!, $location: String!) {
    createTeam(name: $name, location: $location) {
      id
      name
      location
    }
  }
`

const QUERY = gql`
  query {
    allTeams {
      id
      name
      location
    }

    allUsers {
      id
    }
  }
`

export default graphql(QUERY)(MyApp)
