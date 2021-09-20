import React from "react";
import { useHistory } from 'react-router-dom';
import "./style.scss";

const Arrow = () => {
    return (
        <i className="RightArrow fas fa-chevron-right"></i>
    )
}

const NavHeader = (props) => {
    const history = useHistory();

    const MoveTo = (path) => {
        // alert(path)
        history.push(`${path}`)
    }
    return (
        <>
            {/* As a heading */}
            {(props.Nav === "Product") ? (
                <nav className={`NavHeader1`}>
                    <div className="navTextDiv container-fluid">
                        <span onClick={() => MoveTo(`/`)} className="navheader-text mb-0">{props.text}</span>
                    </div>
                </nav>
            ) : (props.Nav === "SubProduct") ? (
                <nav className={`NavHeader2`}>
                    <div className="navTextDiv container-fluid">
                        <span className="navheader-text mb-0"> <span onClick={() => MoveTo(`/`)}>{props.text}</span> <Arrow /> <span onClick={() => MoveTo(`/Products/bio-plus®ProcessComponents`)}>{props.text2}</span> </span>
                    </div>
                </nav>
            ) : (props.Nav === "SubSubProduct") ? (
                <nav className={`NavHeader3`}>
                    <div className="navTextDiv container-fluid">
                        <span className="navheader-text mb-0"> <span onClick={() => MoveTo(`/`)}>{props.text}</span> <Arrow /> <span onClick={() => MoveTo(`/Products/bio-plus®ProcessComponents`)}>{props.text2}</span> <Arrow /> <span onClick={() => MoveTo(`/Products/bio-plus®ProcessComponents/ProcessHoseAssemblies&HoseFittings`)}>{props.text3}</span> </span>
                    </div>
                </nav>
            ) : (props.Nav === "Requirements") ? (
                <nav className={`NavHeader4`}>
                    <div className="navTextDiv container-fluid">
                        <span className="navheader-text mb-0"> <span onClick={() => MoveTo(`/`)}>{props.text}</span> <Arrow /> <span onClick={() => MoveTo(`/Products/bio-plus®ProcessComponents`)}>{props.text2}</span> <Arrow /> <span onClick={() => MoveTo(`/Products/bio-plus®ProcessComponents/ProcessHoseAssemblies&HoseFittings`)}>{props.text3}</span> <Arrow /> <span onClick={() => MoveTo(`/Products/bio-plus®ProcessComponents/ProcessHoseAssemblies&HoseFittings/Requirements`)}>{props.text4}</span> </span>
                    </div>
                </nav>
            ) : (
                <></>
            )}

        </>
    )
}
export default NavHeader;