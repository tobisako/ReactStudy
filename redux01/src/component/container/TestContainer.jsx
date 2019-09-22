import { connect } from 'react-redux'
import { addValue, asyncCountStart, asyncCountDone, selectScene1, selectScene2 } from '../../actions/TestActions'
import TestParts from '../parts/TestParts'

const mapStateToProps = (state) => ({
  testState: state.testState
})

const mapDispatchToProps = (dispatch) => ({
  onCountUpAmount: (amount) => {
    dispatch(addValue(amount))
  },
  onAsyncCountStart: (times) => {
    dispatch(asyncCountStart(times))
  },
  onAsyncCountNotice: (amount) => {
    dispatch(asyncCountStart(amount))
  },
  onAsyncCountDone: () => {
    dispatch(asyncCountDone())
  },
  onSelectScene1: () => {
    dispatch(selectScene1())
  },
  onSelectScene2: ({ name, age, sex }) => {
    dispatch(selectScene2(name, age, sex))
  }
})

const TestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestParts)

export default TestContainer
