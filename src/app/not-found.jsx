import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div>
            <h2>notFound</h2>
            <p>Sorry not found</p>
            <Link href={"/"}>Retirn home</Link>
        </div>
    )
}

export default NotFound