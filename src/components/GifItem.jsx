import React from 'react'
import PropTypes from 'prop-types'

export const GifItem = ({title, url, id}) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}


GifItem.propTypes = {  // Sirve para definir los tipos de las properties
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}


export default GifItem
