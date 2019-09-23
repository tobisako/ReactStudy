import { connect } from 'react-redux'
import { pingStart, pingResult, pingError } from '../../actions/PingActions'
import PingForm from '../parts/PingForm'

const mapStateToProps = (state) => ({
  mainState: state.mainState
})

const mapDispatchToProps = (dispatch) => ({
  onPingStart: () => {
    dispatch(pingStart())
  },
  onPingResult: () => {
    dispatch(pingResult())
  },
  onPingError: () => {
    dispatch(pingError())
  }
})

const PingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PingForm)

export default PingContainer
