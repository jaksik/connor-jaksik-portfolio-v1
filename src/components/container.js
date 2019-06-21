import React from "react"

const Layout = ({ children, ...props }) => {

    return (

        <div
            style={{
                width: `100%`,
                background: props.background
            }}
        >
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                }}
            >
                <main>{children}</main>
            </div>
        </div>
    )
}

export default Layout
