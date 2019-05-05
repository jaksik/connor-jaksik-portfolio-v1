import React from "react"

const footer = () => (
    <>
        <div style={{ height: `100px`, background: `#718190` }}>
            <footer
                style={{
                    textAlign: `center`,
                    width: `100%`
                }}>
                © {new Date().getFullYear()}, Built by
    {` `}
                Connor Jaksik
      </footer>
        </div>
    </>
)

export default footer
