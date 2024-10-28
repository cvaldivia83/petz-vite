import React from 'react';

const Head = (props) => {

  React.useEffect(() => {
    document.title = `Petz | ${props.title}`;
    const description = document.querySelector('meta[name="description"]')
    description.setAttribute('content', props.description || '')
  }, [props])

  return (
    <></>
  )
}


export default Head;