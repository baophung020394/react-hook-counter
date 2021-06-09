import PropTypes from "prop-types";
import React from "react";
import './style.scss';

Counter.propTypes = {
  counters: PropTypes.array,
  onIncrementClick: PropTypes.func,
  onDecrementClick: PropTypes.func,
};

Counter.defaultProps = {
  counters: [],
  onIncrementClick: null,
  onDecrementClick: null,
};

function Counter(props) {
  const { counters, onIncrementClick, onDecrementClick } = props;

  function handleIncrementClick(counter) {
    if (onIncrementClick) {
      onIncrementClick(counter);
    }
  }

  function handleDecrementClick(counter) {
    if (onIncrementClick) {
      onDecrementClick(counter);
    }
  }

  return (
    <div className="counter-controls">
      <ul>
        {counters.map((counter) => (
          <li key={counter.id}>
            <span>{counter.value}</span>
            <button className="increment" onClick={() => handleDecrementClick(counter)}>-</button>
            <button className="decrement" onClick={() => handleIncrementClick(counter)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Counter;
