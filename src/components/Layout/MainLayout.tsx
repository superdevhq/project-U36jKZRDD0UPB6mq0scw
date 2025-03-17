
import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import NowPlayingBar from "@/components/NowPlaying/NowPlayingBar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="h-screen flex flex-col bg-background text-foreground overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
      <NowPlayingBar />
    </div>
  );
};

export default MainLayout;
