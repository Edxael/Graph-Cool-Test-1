import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { client } from './gcool/EndPoint.jsx'
// -----------------------------
import App from './App.jsx'


const ApolloWrap = () => {
  return(
    <ApolloProvider client={client}>
     <App/>
    </ApolloProvider>
  )
}

ReactDOM.render( <ApolloWrap/> , document.getElementById("root"))
