import './Dashboard.css';
import Menu from '../components/Menu';
import Search from '../components/Search';
import Sortby from '../components/Sortby';
import Cards from '../components/Cards';

export default function Dashboard(){
    return(
        <>
        <Menu />
        <Search />
        <Sortby />
        <Cards />
        </>
    );
}
