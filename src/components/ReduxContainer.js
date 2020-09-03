import React, { Component } from 'react'
import store from '../redux/store'
import { Provider } from 'react-redux'
import CakeContainer from './CakeContainer'
import HooksCakeContainer from './HooksCakeContainer'
import IcecreamContainer from './IcecreamContainer'
import NewCakeContainer from './NewCakeContainer'

export class ReduxContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <CakeContainer />
                    <HooksCakeContainer />
                    <IcecreamContainer />
                    <NewCakeContainer />
                </div>
            </Provider>
        )
    }
}

export default ReduxContainer
