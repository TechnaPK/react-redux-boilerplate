import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import FacebookLogin from 'react-facebook-login';

import { facebookLogin } from '../redux/actions/actions-auth'
import Spinner from './widgets/Spinner'
import shakeHands from '../images/shake.svg'

class Login extends Component {

    state = {
        loading: false
    }

    handleClick = () => {
        console.log("I m clicked")
        // this.setState({ loading: true })
    }

    handleSuccess = (message) => {

        window.notify(message)
        this.setState({ loading: false })

        if( this.props.successCB !== undefined )
            this.props.successCB()
            
        if ( this.props.redirect !== false )
            this.props.history.go(-1)

    }

    handleFailure = (message) => {

        window.notify(message)
        this.setState({ loading: false })

    }

    responseFacebook = (response) => {

        this.setState({ loading: true })
        // console.log(response)
        this.props.dispatch(facebookLogin(response, this.handleSuccess, this.handleFailure))

    }

    render() {
        return (
            <Fragment>
                <header></header>
                <main className="loginRoute">
                    <div className="purple darken-1">
                        <div className="container">
                            <div className="row margin0">
                                <div className="col s12 white-text flexBox flexColumn">
                                    <h3 className="center-align margin0">The Ultimate Todo</h3>
                                    <div className="center-align marginTop marginBottom">
                                        <img src={shakeHands} alt="Shake" style={{ width: '100%', maxWidth: 250 }} />
                                    </div>
                                    <div className="loginButtons flex">
                                        {
                                            this.state.loading
                                                ? (
                                                    <div className="center">
                                                        <Spinner size="big" color="white" />
                                                    </div>
                                                )
                                                : (
                                                    <FacebookLogin
                                                        appId={ window.isDelvelopment ? "1988058381486259" : "1565313530236371" }
                                                        autoLoad={false}
                                                        disableMobileRedirect={true}
                                                        fields="name,email,picture"
                                                        cssClass="btn-large waves-effect waves-light indigo hoverable m-full-width"
                                                        // onClick={this.handleClick}
                                                        callback={this.responseFacebook}
                                                        // render={ renderProps => (
                                                        //     <a className="btn-large waves-effect waves-light indigo hoverable m-full-width" onClick={renderProps.onClick}>Login</a>
                                                        // )}
                                                    />
                                                )
                                        }
                                    </div>

                                    <p className="center-align white-text">* Don't have an account? We'll automatically create it. Simply Login using facebook.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer></footer>
            </Fragment>
        )
    }

}


export default withRouter(connect()(Login))