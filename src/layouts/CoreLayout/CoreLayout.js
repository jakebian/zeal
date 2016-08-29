import React from 'react'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
    <div>
        <div>
          {children}
        </div>
    </div>
)

CoreLayout.propTypes = {
    children: React.PropTypes.element.isRequired
}

export default CoreLayout
