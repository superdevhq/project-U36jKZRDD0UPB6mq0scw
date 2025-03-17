
import MainLayout from "@/components/Layout/MainLayout";
import PlaylistGrid from "@/components/Playlists/PlaylistGrid";
import { playlists } from "@/data/mockData";

const Home = () => {
  // In a real app, you would fetch these from an API
  const recentPlaylists = playlists.slice(0, 5);
  const featuredPlaylists = [...playlists].reverse().slice(0, 5);
  
  return (
    <MainLayout>
      <div className="pb-20">
        <h1 className="text-3xl font-bold mb-6">Good afternoon</h1>
        
        <PlaylistGrid 
          title="Recently played" 
          playlists={recentPlaylists} 
        />
        
        <PlaylistGrid 
          title="Made for you" 
          playlists={featuredPlaylists} 
        />
      </div>
    </MainLayout>
  );
};

export default Home;
