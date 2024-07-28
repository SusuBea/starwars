import './Dashboard.css';
import Menu from '../components/Menu';
import Search from '../components/Search';
import Sortby from '../components/Sortby';
import Cards from '../components/Cards';
import useAdatContext from "../context/adatContext";

export default function Dashboard(){
    const {characterList} = useAdatContext();
    return(
        <>
        <Menu />
        <Search />
        <Sortby />
        <div className='cards'>
        {characterList.map((element, index) => { return <Cards adat={element} key={index} />})}
        </div>
        <button>Load more</button>
        </>
    );
}
