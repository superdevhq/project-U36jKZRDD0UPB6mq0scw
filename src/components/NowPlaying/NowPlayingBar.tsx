
import { useState } from "react";
import { 
  Play, Pause, SkipBack, SkipForward, 
  Repeat, Repeat1, Shuffle, Volume2, Volume1, VolumeX 
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { tracks } from "@/data/mockData";
import { formatDuration } from "@/data/mockData";

const NowPlayingBar = () => {
  // In a real app, these would come from a context or state management
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [position, setPosition] = useState(30);
  const [repeat, setRepeat] = useState<'off' | 'all' | 'one'>('off');
  const [shuffle, setShuffle] = useState(false);
  
  // For demo purposes, we'll use the first track
  const currentTrack = tracks[0];
  
  const togglePlay = () => setIsPlaying(!isPlaying);
  
  const toggleRepeat = () => {
    const states: ('off' | 'all' | 'one')[] = ['off', 'all', 'one'];
    const currentIndex = states.indexOf(repeat);
    const nextIndex = (currentIndex + 1) % states.length;
    setRepeat(states[nextIndex]);
  };
  
  const toggleShuffle = () => setShuffle(!shuffle);
  
  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };
  
  const handlePositionChange = (value: number[]) => {
    setPosition(value[0]);
  };
  
  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX size={18} />;
    if (volume < 50) return <Volume1 size={18} />;
    return <Volume2 size={18} />;
  };
  
  return (
    <div className="h-20 bg-card border-t border-border px-4 flex items-center">
      {/* Track Info */}
      <div className="w-1/4 flex items-center gap-3">
        {currentTrack && (
          <>
            <img 
              src={currentTrack.album.imageUrl} 
              alt={currentTrack.album.title} 
              className="h-14 w-14 rounded-md object-cover"
            />
            <div className="overflow-hidden">
              <h4 className="text-sm font-medium truncate">{currentTrack.title}</h4>
              <p className="text-xs text-muted-foreground truncate">{currentTrack.artist.name}</p>
            </div>
            <button className="ml-4 text-muted-foreground hover:text-foreground">
              <Heart size={16} />
            </button>
          </>
        )}
      </div>
      
      {/* Player Controls */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex items-center gap-4 mb-2">
          <button 
            className={`text-muted-foreground hover:text-foreground ${shuffle ? 'text-primary' : ''}`}
            onClick={toggleShuffle}
          >
            <Shuffle size={18} />
          </button>
          <button className="text-muted-foreground hover:text-foreground">
            <SkipBack size={18} />
          </button>
          <button 
            className="bg-white text-black rounded-full p-2 hover:scale-105 transition-transform"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button className="text-muted-foreground hover:text-foreground">
            <SkipForward size={18} />
          </button>
          <button 
            className={`text-muted-foreground hover:text-foreground ${repeat !== 'off' ? 'text-primary' : ''}`}
            onClick={toggleRepeat}
          >
            {repeat === 'one' ? <Repeat1 size={18} /> : <Repeat size={18} />}
          </button>
        </div>
        
        <div className="w-full flex items-center gap-2">
          <span className="text-xs text-muted-foreground w-10 text-right">
            {formatDuration(Math.floor(position / 100 * currentTrack.duration))}
          </span>
          <Slider
            value={[position]}
            max={100}
            step={1}
            className="flex-1"
            onValueChange={handlePositionChange}
          />
          <span className="text-xs text-muted-foreground w-10">
            {formatDuration(currentTrack.duration)}
          </span>
        </div>
      </div>
      
      {/* Volume Controls */}
      <div className="w-1/4 flex justify-end items-center gap-2">
        <button className="text-muted-foreground hover:text-foreground">
          {getVolumeIcon()}
        </button>
        <Slider
          value={[volume]}
          max={100}
          step={1}
          className="w-24"
          onValueChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

// Heart icon component for liked songs
const Heart = ({ size }: { size: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

export default NowPlayingBar;
