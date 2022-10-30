
import { Outlet } from "react-router-dom";
import StyledNavbar from "../components.js/StyleNavbar";

const ShareLayout=()=>
{
    return(<>
    <StyledNavbar/>
    <section className="section p-2">
        <Outlet/>   
    </section>
    </>);
};
export default ShareLayout;