import React from 'react'
import { connect } from 'react-redux'

import { fetchGetUsers } from '../redux/actions/userActions'
import { columns } from '../config/tableConfig'
import DataTable from '../Components/DataTable'

const Account = ({ loginResponse, history, fetchGetUsers, listUsers }) => {
  
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

      {listUsers && (
        <DataTable
          data={listUsers}
          columns={columns}
        />
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  loginResponse: state.user.loginResponse,
  listUsers: state.user.listUsers,
})

const mapDispatchToProps = { fetchGetUsers }

export default connect(mapStateToProps, mapDispatchToProps)(Account)