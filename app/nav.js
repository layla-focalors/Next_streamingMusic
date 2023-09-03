"use client"

import Image from "next/image"
import logos from "public/stelle.png"

export default function Navbar() {
    return (
        <div className="nav">
            <Image src={logos} alt="Stelle" className="logos"/>
            <div className="logost">ArtsNoa</div>
        </div>
    )
}

export { Navbar }