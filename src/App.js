import { useState, useEffect } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import Total from "./components/Total/Total";

function App() {
  const [counterList, setCounterList] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ]);
  /**
   * Increment
   * @param {*} counter
   * @returns
   */
  function handleIncrementClick(counter) {
    const index = counterList.findIndex((x) => x.id === counter.id);
    if (index < 0) return;
    // Clone new array
    const newCounterList = [...counterList];
    // determined index clicked
    const objIndex = newCounterList[index];
    // update new state
    objIndex.value += 1;
    // remove and replace new state
    newCounterList.splice(index, 1);
    newCounterList.splice(index, 0, objIndex);
    setCounterList(newCounterList);
  }

  /**
   * Decrement
   * @param {*} counter
   * @returns
   */
  function handleDecrementClick(counter) {
    const index = counterList.findIndex((x) => x.id === counter.id);
    if (index < 0) return;
    // Clone new array
    const newCounterList = [...counterList];
    // determined index clicked
    const objIndex = newCounterList[index];
    // update new state
    objIndex.value -= 1;
    if (objIndex.value < 0) objIndex.value = 0;
    // remove and replace new state
    newCounterList.splice(index, 1);
    newCounterList.splice(index, 0, objIndex);
    setCounterList(newCounterList);
  }

  return (
    <div className="App">
      <Counter
        counters={counterList}
        onIncrementClick={handleIncrementClick}
        onDecrementClick={handleDecrementClick}
      />
      <Total totals={counterList} />
    </div>
  );
}

export default App;
