import React from 'react'
import ReactDOM from 'react-dom'
import FacebookLogin from 'react-facebook-login'

const test = response => {
  console.log(response)
}
const onClick = () => {
  alert(
    'Sorry friend. We dont like Mr. Zuckerburg. Please use google or sign up! '
  )
}
class ResponseFacebook extends React.Component {
  render() {
    return (
      <div>
        <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          onClick={onClick}
          callback={test}
        />
      </div>
    )
  }
}

export default ResponseFacebook
