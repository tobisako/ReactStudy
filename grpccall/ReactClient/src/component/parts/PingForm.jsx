import React from 'react'

class PingForm extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log("render!")
    return (
      <div>
        <p>pingテスト</p>
        <button onClick={this.onClick.bind(this)}>pingボタン</button>
        <p>{this.props.mainState.message}</p>
      </div>
    )
  }

  onClick() {
    this.props.onPingStart()
  }
}

export default PingForm
