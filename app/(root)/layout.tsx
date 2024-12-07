import React from "react";
import Navbar from "@/components/Navbar";

function layout({children}: {children: React.ReactNode}) {
    return (
        <main className="font-work-sans">
            <Navbar />
            {children}
        </main>
    )
}

export default layout;