import React, { Component } from 'react'
import MoviesNavbar from "./MoviesNavbar";

export default class MoviesPage extends Component {
    render() {
        return (
            <React.Fragment>
              <MoviesNavbar />
              <p style={{marginTop: "150px"}}>This is movies page</p>
            </React.Fragment>
        )
    }
}
