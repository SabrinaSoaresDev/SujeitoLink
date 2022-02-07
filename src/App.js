import {useState} from 'react';
import './App.css';
import RoutesApp from './routes';
export default function App(){
const [mensagem, setMensagem]= useState('');

function gerarLink(){
}
  return(
      <div className='app'>
          <RoutesApp/>
      </div>
    
  );
}