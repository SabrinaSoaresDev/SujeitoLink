import {useState} from 'react';
import {FiLink} from 'react-icons/fi';
import './home.css';
import Menu from '../../components/menu';

export default function Home(){
    const [link, setLink]=useState('');

    function handleShortLink(){
        alert("MEU LINK" + link)
    }
    return(
       <div className="container-home" >
           <div className="logo">
                <img src="link.png" alt="logo" />
                <h1>SujeitoLink</h1>
                <span>Cole seu Link para encurtar 👇</span>
            </div>

                <div className="area-input">
                    <div>
                        <FiLink size={24} color="#fff" />
                        <input placeholder="Cole seu link aqui..." 
                        valeu={link}
                        onChange={(e) => setLink(e.target.value)}
                        />
                    </div>
                    <button onClick={handleShortLink}>Gerar Link</button>
                </div>
                <Menu/>
       </div>
    )
}