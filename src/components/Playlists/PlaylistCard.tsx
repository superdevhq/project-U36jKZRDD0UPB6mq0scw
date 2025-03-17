
import { Playlist } from "@/types/music";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard = ({ playlist }: PlaylistCardProps) => {
  return (
    <Link 
      to={`/playlist/${playlist.id}`}
      className="group bg-card hover:bg-card/80 transition-colors p-4 rounded-md"
    >
      <div className="relative mb-4">
        <img 
          src={playlist.imageUrl || '/placeholder.svg'} 
          alt={playlist.name}
          className="w-full aspect-square object-cover rounded-md shadow-md"
        />
        <button 
          className="absolute bottom-2 right-2 bg-primary text-primary-foreground rounded-full p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-lg hover:scale-105"
        >
          <Play size={20} fill="currentColor" />
        </button>
      </div>
      <h3 className="font-semibold truncate">{playlist.name}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
        {playlist.description || `By ${playlist.createdBy}`}
      </p>
    </Link>
  );
};

export default PlaylistCard;
