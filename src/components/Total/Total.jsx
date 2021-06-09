import React from "react";
import PropTypes from "prop-types";

Total.propTypes = {
  totals: PropTypes.array,
};

Total.defaultProps = {
    totals: [],
};

function Total(props) {
  const { totals } = props;
  const total = totals.reduce((totalValue, value) => totalValue + value.value, 0);
  return (
    <div className="total">
      <div className="result">
        Total:
        <span>{total}</span>
      </div>
    </div>
  );
}

export default Total;
