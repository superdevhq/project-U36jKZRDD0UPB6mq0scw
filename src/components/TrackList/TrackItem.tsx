
import { Track } from "@/types/music";
import { Play, MoreHorizontal } from "lucide-react";
import { formatDuration } from "@/data/mockData";

interface TrackItemProps {
  track: Track;
  index: number;
  isActive?: boolean;
  onPlay?: (track: Track) => void;
}

const TrackItem = ({ track, index, isActive = false, onPlay }: TrackItemProps) => {
  return (
    <div 
      className={`group grid grid-cols-[16px_4fr_3fr_1fr] gap-4 px-4 py-2 rounded-md text-sm items-center ${
        isActive ? 'bg-secondary text-primary' : 'hover:bg-secondary/50'
      }`}
    >
      <div className="flex items-center justify-center w-4">
        <span className="group-hover:hidden">{index + 1}</span>
        <button 
          className="hidden group-hover:block text-white"
          onClick={() => onPlay && onPlay(track)}
        >
          <Play size={14} fill="currentColor" />
        </button>
      </div>
      
      <div className="flex items-center gap-3 min-w-0">
        <img 
          src={track.album.imageUrl} 
          alt={track.album.title}
          className="w-10 h-10 rounded object-cover"
        />
        <div className="min-w-0">
          <h4 className={`font-medium truncate ${isActive ? 'text-primary' : ''}`}>
            {track.title}
          </h4>
          <p className="text-xs text-muted-foreground truncate">
            {track.artist.name}
          </p>
        </div>
      </div>
      
      <div className="text-muted-foreground truncate">
        {track.album.title}
      </div>
      
      <div className="flex items-center justify-end gap-4">
        <span className="text-muted-foreground">
          {formatDuration(track.duration)}
        </span>
        <button className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  );
};

export default TrackItem;
