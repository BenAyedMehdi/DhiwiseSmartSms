import NavbarButton from "components/NavbarButton";
import React from "react";

export default function Navbar() {
    return (
        <div className="flex flex-col md:flex-row md:gap-10 gap-[70px] items-start justify-start md:mt-0 mt-[10%] w-auto md:self-center">
            <NavbarButton label={"About us"} link={"/aboutpage"}/>
            <NavbarButton label={"Live the experience"} link={"/demopage"} className="middle-button"/>
            <NavbarButton label={"Solutions"} link={"/featurepage"}/>
        </div>
    )
}