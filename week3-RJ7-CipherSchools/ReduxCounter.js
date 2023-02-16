import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../actions/CounterAction";

const ReduxCounter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h2> The count is: {count}</h2>
            <button onClick={(e) => inc()}>Increase</button>
            <button onClick={(e) => dec()}>Decrease</button>
            <button onClick={(e) => res()}>Reset</button>
        </div>
    );
};

// const mapStateToProps = (state) => ({ count: state.count});
// const mapDispatchToProps = (dispatch) => ({
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//     reset: () => dispatch(reset()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);