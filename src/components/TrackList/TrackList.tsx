
import { Track } from "@/types/music";
import TrackItem from "./TrackItem";
import { Clock } from "lucide-react";

interface TrackListProps {
  tracks: Track[];
  currentTrackId?: string;
  onTrackPlay?: (track: Track) => void;
}

const TrackList = ({ tracks, currentTrackId, onTrackPlay }: TrackListProps) => {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-[16px_4fr_3fr_1fr] gap-4 px-4 py-2 border-b border-border text-xs font-medium text-muted-foreground uppercase tracking-wider">
        <div>#</div>
        <div>Title</div>
        <div>Album</div>
        <div className="flex justify-end">
          <Clock size={16} />
        </div>
      </div>
      
      <div className="mt-2 space-y-1">
        {tracks.map((track, index) => (
          <TrackItem 
            key={track.id}
            track={track}
            index={index}
            isActive={track.id === currentTrackId}
            onPlay={onTrackPlay}
          />
        ))}
      </div>
    </div>
  );
};

export default TrackList;
