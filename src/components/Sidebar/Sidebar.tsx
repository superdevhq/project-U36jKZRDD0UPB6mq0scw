
import { Home, Search, Library, PlusCircle, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { playlists } from "@/data/mockData";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  return (
    <div className="w-64 bg-card flex flex-col h-full overflow-hidden border-r border-border">
      <div className="p-6">
        <h1 className="text-xl font-bold text-primary mb-6">Musicify</h1>
        
        <nav className="space-y-1">
          <NavItem to="/" icon={<Home size={20} />} label="Home" />
          <NavItem to="/search" icon={<Search size={20} />} label="Search" />
          <NavItem to="/library" icon={<Library size={20} />} label="Your Library" />
        </nav>
        
        <div className="mt-8">
          <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <PlusCircle size={20} />
            <span>Create Playlist</span>
          </button>
          
          <Link 
            to="/liked-songs" 
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mt-4"
          >
            <Heart size={20} />
            <span>Liked Songs</span>
          </Link>
        </div>
      </div>
      
      <div className="border-t border-border mt-4 pt-4 px-2 flex-1 overflow-y-auto">
        <h2 className="px-4 text-sm font-semibold text-muted-foreground mb-2">PLAYLISTS</h2>
        <div className="space-y-1">
          {playlists.map((playlist) => (
            <Link
              key={playlist.id}
              to={`/playlist/${playlist.id}`}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors block truncate"
            >
              {playlist.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem = ({ to, icon, label, active }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-4 text-sm font-medium p-2 rounded-md transition-colors",
        active
          ? "text-foreground bg-secondary"
          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default Sidebar;
