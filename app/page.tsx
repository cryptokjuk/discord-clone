import React from "react";
import MainContent from "./MainContent";
import "../styles/globals.css";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import { unstable_getServerSession } from "next-auth";

function HomePage() {
  return (
    <div id="container">
      <SidebarLeft />
      <SidebarRight />
      <MainContent />
    </div>
  );
}

export default HomePage;
