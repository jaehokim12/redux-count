import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../action/count';

class count extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      localCount: 0,
    };
  }
  increaseCount = () => {
    // same
    this.setState((prevState) => {
      return {
        localCount: prevState.localCount + 1,
      };
    });
  };
  decreaseCount = () => {
    // same
    this.setState((prevState) => {
      return {
        localCount: prevState.localCount - 1,
      };
    });
  };

  render() {
    // this:count {props: {…}, context: {…}, refs: {…}, updater: {…}, increaseCount: ƒ, …}
    //this.props: {storeCount: 0, increaseStoreCount: ƒ, decreaseStoreCount: ƒ}
    const { localCount } = this.state;
    const { storeCount, increaseStoreCount, decreaseStoreCount } = this.props;
    return (
      <div>
        {localCount}
        <div
          onClick={() => {
            this.increaseCount(); // localCount+1
            increaseStoreCount(); // action type increaseCount인 reducer실행 initialstate의 count +1
          }}
        >
          {'+'}
        </div>
        <div
          onClick={() => {
            this.decreaseCount();
            decreaseStoreCount();
          }}
        >
          {'-'}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  //counter.props:{storeCount:value}  접근가능
  storeCount: state.count.count,
});
// countreducer를받아서 component의  state: countreducer의 initialstate의 value
const mapDispatchToProps = (dispatch) => {
  return {
    increaseStoreCount: () => dispatch(actions.increaseCount()),
    decreaseStoreCount: () => dispatch(actions.decreaseCount()),
  };
};
// dispatch 인자로받고
export default connect(mapStateToProps, mapDispatchToProps)(count);
//redux와count component를 합쳐 새로운 컴포넌트로 반환 countcomponent가 store에 접근할수있게하고 count로 리턴
