//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState("");
  var data2 = [];
  data2.push(num);
  var data1 = num.split(",");


  for (let i = 0; i < data1.length - 1; i++){
    for(let j = 0; j< data1.length - 1 - i; j++){
      if(data1[j] > data1[j+1]){
        const temp = data1[j];
        data1[j] = data1[j + 1];
        data1[j+1] = temp;
      }
    }
}
  const noSortlistTxt = data1.toString();
  const noSortlistTxt2 = data2.toString();
  return (
    <div>
      <h1>Random List(Type Single Digit Numbers Only)</h1>
        <form >
          <input type="text" value = {num} onChange={(e) => setNum(e.target.value)}/>
          {/* <input type="submit"/> */}
        </form>
        <p>Before Sort Output:</p>
        <p class="output">{noSortlistTxt2}</p>
        <p>After Sort Output:</p>
        <p class="output">{noSortlistTxt}</p>
    </div>

  );

}

export default App;
