import React from 'react';

function Dashboard(props) {
  const { data } = props;
  console.log(data); // This will log "This is some data passed down from the parent" to the console
  return(
    <div>{data}</div>
  )
}

export default Dashboard;
