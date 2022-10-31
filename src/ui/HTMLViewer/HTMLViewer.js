import React, { useRef, useState } from "react";
import PropTypes from 'prop-types'

const HTMLViewer = () => {
    return (
      <div
      className="x-html-viewer"
      style={{
        color,
        margin,
        padding,
      }}
      dangerouslySetInnerHTML={{
        __html: Content,
      }}
      >
      </div>
    )
}

HTMLViewer.propTypes = {

}

HTMLViewer.defaultProps = {

}