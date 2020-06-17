import React from 'react'
import { connect } from 'react-redux'

const Login = ({ loginResponse, history }) => {
  console.log(loginResponse)
  React.useEffect(() => {
    if(!loginResponse){
      history.push('/login')
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

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(Login)