import React from "react";
import MainContent from "./MainContent";
import "../styles/globals.css";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import { unstable_getServerSession } from "next-auth";
import ProvidersWrapper from "./ProvidersWrapper";

 async function HomePage() {
  const session = await unstable_getServerSession();
  return (
    <ProvidersWrapper>
      <div id="container">

        <SidebarLeft />
        <SidebarRight />
        <MainContent />
      </div>
    </ProvidersWrapper>
  );
}

export default HomePage;
