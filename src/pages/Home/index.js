import {useState} from 'react';
import {FiLink} from 'react-icons/fi';
import './home.css';
import Menu from '../../components/menu';
import LinkItem from '../../components/LinkItem';

import api from '../../services/api';
import { saveLink } from '../../services/storeLink'

export default function Home(){

    const [link, setLink]=useState('');
    const [showModal, setShowModal] =useState(false);
    const [data, setData] = useState({});
   async function handleShortLink(){
        try{
            const response = await api.post('/shorten',{
                long_url: link
            })
            setData(response.data);
            setShowModal(true);
            
            saveLink('@seuLink', response.data)
            setLink('');
        }catch{
            alert("Ops parece que algo deu errado!");
            setLink('');
        }
    }
    return(
       <div className="container-home" >
           <div className="logo">
                {/* <img src="link.png" alt="logo" /> */}
                <h1>SeuLink</h1> 
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
                {showModal && (
                    <LinkItem  
                    closeModal={() => setShowModal(false)}
                    content={data}
                    />
                )}

       </div>
    )
}