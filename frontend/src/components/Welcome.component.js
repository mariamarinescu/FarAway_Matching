import React from 'react'

class Welcome extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="background">
                <div className="stars"></div>
                <div className="twinkling"></div>
            </div>

        )
    }
}

export default Welcome;