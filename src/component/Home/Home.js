import react from 'react';
import Header from '../Header/Header';
import Catgorse from '../categorse/Categorse';
import Main from '../Main/Main';
import './Home.css';
import Flash_deals from '../flash/fleash';
import Top_item from './../top_item/Top_item'
import New_item from '../New_item/New_item';
import Brands from '../Beands/Brands';
import Poster from '../poster/Poster';
import Support from '../Support/Support';
import Footer from '../footer/Footer';
const Home=()=>{
    return(
        <div className="home">
                <Header/>
                
                <div className="contener ">
                    <div className='mains'>
                        <Catgorse/>
                        <Main/>
                    </div>
                </div>

                <div className="categorse">
                    <Flash_deals />
                    <Top_item/>
                    <New_item/>
                    <Brands/>
                    <Poster/>
                    <Support/>
                </div>
                <Footer/>
            
        </div>
    )
}
export default Home;