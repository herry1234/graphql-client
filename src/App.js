import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ReactPlayer from 'react-player';
const myQuery = gql`{ streams{message} }`
const App = ({ refetch }) => (
  <Query
    query={myQuery}
    fetchPolicy={refetch ? 'cache-and-network' : 'cache-first'}
  >
    {({ loading, data: { streams } }) => {
      if (loading) return <span>loading....</span>
      return (
        <div className={'app'}>
          <div className='section'>
            <div className='player-wrapper'>

              {
                streams.message.map(url => (
                  <ReactPlayer
                    url={url}
                    controls
                    className="react-player"
                  />
                ))
              }
            </div>
          </div>
        </div>
      )
    }}
  </Query>
);
export default App;

