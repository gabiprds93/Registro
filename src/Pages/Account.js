import React from 'react'
import { connect } from 'react-redux'

import { fetchGetUsers } from '../redux/actions/userActions'

const Login = ({ loginResponse, history, fetchGetUsers }) => {
  
  React.useEffect(() => {
    if(!loginResponse){
      history.push('/login')
    }
    else{
      fetchGetUsers()
    }
  }, [])
  
  return(
    <div>
      <div className="header">
        <h2 className="title">{loginResponse && loginResponse['0'].NOMBRE}</h2>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  loginResponse: state.user.loginResponse,
})

const mapDispatchToProps = { fetchGetUsers }

export default connect(mapStateToProps, mapDispatchToProps)(Login)