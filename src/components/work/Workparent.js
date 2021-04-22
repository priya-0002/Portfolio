import React from 'react'
import Work from './Work'

const Workparent = () => {
  let url="innoovatum.com"
    return (
        <div>
              <h1 className="work__heading">
                Experience
            </h1>
          <Work title="Innoovatum.com"/>
          <Work description="Innoovatum is a software company which believes in practical engineering; having its own search engine, which is one platform to grab engineering related resources. I've worked there for 1 year as a junior web developer on the search engine."/>
          
        </div>
    )
}

export default Workparent
