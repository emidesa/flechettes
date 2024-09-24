import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from'react-bootstrap';   // Import Container from react-bootstrap
import { Button } from 'react-bootstrap';        // Import Button from react-bootstrap
import ScoreIndicator from './components/ScoreIndicator';
import { useState } from 'react';

function App() {
  const [scoreToReach, setScoreToReach] = useState(501);
  const [score, setScore] = useState(501);
  const [multiplicator, setMultiplicator] = useState(1);


const handleClick = (number) => { 
  if(number == 25 && multiplicator == 3) {
    alert("tricheur !!!!");
    setMultiplicator(1);
  } else if((score - (number * multiplicator)) < 0){
    alert('tour terminé !');
    setMultiplicator(1);
  }else if ((score -  (number * multiplicator)) == 0) {
    setScore(score -  (number * multiplicator));
    setMultiplicator(1);
    alert("Victoire !!!");
  } else{
setScore(score - (number * multiplicator));
setMultiplicator(1);
  }
}

  return <>
  <Container className="d-flex flex-column align-items-center" >
  <h1>flechettes</h1>
  <ScoreIndicator maxValue={scoreToReach} value={score} />

  <div className='d-flex justify-content-between col-6 mt-3 '>

    <Button variant='dark' className='col-2' onClick = {()=> {handleClick(1)}}>1</Button>
    <Button variant='light'className='col-2'onClick = {()=> {handleClick(2)}}>2</Button>
    <Button variant='dark'className='col-2'onClick = {()=> {handleClick(3)}}>3</Button>
    <Button variant='light'className='col-2'onClick = {()=> {handleClick(4)}}>4</Button>
    <Button variant='dark'className='col-2'onClick = {()=> {handleClick(5)}}>5</Button>
    
  </div>

  <div className='d-flex  justify-content-between col-6 mt-3'>
    <Button variant='light' className='col-2'onClick = {()=> {handleClick(6)}}>6</Button>
    <Button variant='dark' className='col-2'onClick = {()=> {handleClick(7)}}>7</Button>
    <Button variant='light' className='col-2'onClick = {()=> {handleClick(8)}}>8</Button>
    <Button variant='dark' className='col-2'onClick = {()=> {handleClick(9)}}>9</Button>
    <Button variant='light' className='col-2'onClick = {()=> {handleClick(10)}}>10</Button>
    
  </div>

  <div className='d-flex  justify-content-between col-6 mt-3'>

<Button variant='dark' className='col-2'onClick = {()=> {handleClick(11)}}>11</Button>
<Button variant='light'className='col-2'onClick = {()=> {handleClick(12)}}>12</Button>
<Button variant='dark'className='col-2'onClick = {()=> {handleClick(13)}}>13</Button>
<Button variant='light'className='col-2'onClick = {()=> {handleClick(14)}}>14</Button>
<Button variant='dark'className='col-2'onClick = {()=> {handleClick(15)}}>15</Button>

</div>

<div className='d-flex  justify-content-between col-6 mt-3 '>
    <Button variant='light' className='col-2'onClick = {()=> {handleClick(16)}}>16</Button>
    <Button variant='dark' className='col-2'onClick = {()=> {handleClick(17)}}>17</Button>
    <Button variant='light' className='col-2'onClick = {()=> {handleClick(18)}}>18</Button>
    <Button variant='dark' className='col-2'onClick = {()=> {handleClick(19)}}>19</Button>
    <Button variant='light' className='col-2'onClick = {()=> {handleClick(20)}}>20</Button>
    
  </div>

  <div className='d-flex justify-content-between col-6 mt-3'>
    <Button variant='danger' className='col-2'onClick = {()=> {handleClick(0)}}>0</Button>
    <Button variant='dark' className='col-2' onClick = {()=> {handleClick(25)}}>25</Button>
    <Button variant='light' className='col-3' onClick={() => (setMultiplicator(2))}>Double</Button>
    <Button variant='dark' className='col-3'onClick={() => (setMultiplicator(3))}>Triple</Button>
    
  </div>
  </Container>
  </>
}

export default App;
