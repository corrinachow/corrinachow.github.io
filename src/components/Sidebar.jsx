import React from 'react'
import Link from 'gatsby-link'

const Sidebar = ({ text, alignment }) => (
    <aside className={ alignment }>
        <p>{ text }</p>
    </aside>
)

export default Sidebar
