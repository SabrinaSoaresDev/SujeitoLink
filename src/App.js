import {useState} from 'react';
import './App.css';

export default function App(){
const [mensagem, setMensagem]= useState('');

function gerarLink(){
  
  
}
  return(
    <div className="app">
      <head className='menu'>
          <div>
            <a href='https://www.youtube.com/channel/UC1bwSRgCMQUalLADdWPO5TQ'>youtube</a>
            <a href='https://www.instagram.com/sabrinams.9/'>instagram</a>
          </div>
      </head>
        <h1>SujeitoLink</h1>
        <span>Cole seu link para encurtar</span>

      <div className='area-input'>
        <input
        type="text"
        placeholder="Cole seu link aqui..."
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        />

        <button onclick={gerarLink}>
          Gerar Link
        </button>
      </div>
    </div>
    
  );
}