import React, { NextPage } from 'next'
import {ApplicationWrapper} from '../../components/layout/ApplicationWrapper'
import {MovieList} from '../../components/MovieList/MovieList'

interface TProps {
  response: string;
}


const Movies : NextPage<TProps> = () => {
  return (
    <div className=''>
      <ApplicationWrapper 
        title="Movies" 
        description="Movies of the jhosebro movies application"
      >
        <MovieList />
      </ApplicationWrapper>
    </div>
  )
}

export default Movies;