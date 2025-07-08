import "../Accesorios/Accesorios_style.css"
import CardDress from "../../components/CardDress/CardDress";
import Navbar from "../../components/nav-bar/nav_bar.component";
import Search from "../../components/Search/Search";
import FooterComponent from "../../components/footer/footer.component";
import FilterSidebar from "../../components/Filtro/Filtro";
const Accesorios = () => {
    return(
    <>
    <Navbar />
    <h1 className="header-accesorios">Catálogo de accesorios</h1>
    <div className="Cont_Header">
        <Search/>
    </div>
    <div className="Contenedoruno">
        <div className="Contenedordos">
            <CardDress/>
            <CardDress/>
            <CardDress/>
            <CardDress/>
            <CardDress/>
            <CardDress/>
            <CardDress/>
            <CardDress/>
            <CardDress/>
        </div>

        <div className="Cont_Filtrar">
        <FilterSidebar/>
        </div>
        
    </div>
    <FooterComponent/>
    </>
    )
}
export default Accesorios;