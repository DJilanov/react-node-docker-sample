import React from 'react'
import { connect } from 'react-redux'
import Footer from './Footer'
import { fetchMessages } from '../actions'
import FormContainer from '../containers/FormContainer'
import VisibleMessageList from '../containers/VisibleMessageList'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchMessages()
  }

  render() {
    return (
      <div>
        <FormContainer />
        <VisibleMessageList />
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchMessages: () => dispatch(fetchMessages()),
})

export default connect(null, mapDispatchToProps)(App);
