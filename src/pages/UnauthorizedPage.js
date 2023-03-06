import React from "react"
import alertTriangle from "react-useanimations/lib/alertTriangle"
import UseAnimations from "react-useanimations"
import { Link } from "react-router-dom"
import "./Unauthorize.css"

const UnauthorizedPage = () => {

    return (
        <div className="Section-unauthorized">
            <div className="container">
                <div className="unauthorized-content">
                    <div className="image-container">
                        <UseAnimations strokeColor={'var(--comet-primary)'} animation={alertTriangle} size={100} style={{ padding: 20 }} wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }} />
                    </div>
                    <div className="title-container">
                        <h1>
                            404
                        </h1>
                    </div>
                    <div className="text-container">
                        <h2>
                            Vous ne pouvez pas accéder à ce service.
                        </h2>
                    </div>
                    <Link className="unauthorized-back" to="/">
                        Retour à l'accueil
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UnauthorizedPage