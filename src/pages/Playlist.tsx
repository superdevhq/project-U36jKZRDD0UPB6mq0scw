import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "@/components/Layout/MainLayout";
import TrackList from "@/components/TrackList/TrackList";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { playlists } from "@/data/mockData";
import { Playlist as PlaylistType } from "@/types/music";
import { Clock, Play, MoreHorizontal } from "lucide-react";

const Playlist = () => {
  const { id } = useParams<{ id: string }>();
  const [playlist, setPlaylist] = useState<PlaylistType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchPlaylist = () => {
      setIsLoading(true);
      setTimeout(() => {
        const foundPlaylist = playlists.find(p => p.id === id) || null;
        setPlaylist(foundPlaylist);
        setIsLoading(false);
      }, 500);
    };

    fetchPlaylist();
  }, [id]);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-full">
          <LoadingSpinner size="lg" />
        </div>
      </MainLayout>
    );
  }

  if (!playlist) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl font-bold mb-2">Playlist not found</h2>
          <p className="text-muted-foreground">The playlist you're looking for doesn't exist.</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="pb-20">
        {/* Playlist Header */}
        <div className="flex items-end gap-6 mb-8">
          <img 
            src={playlist.imageUrl || '/placeholder.svg'} 
            alt={playlist.name}
            className="w-60 h-60 shadow-lg object-cover"
          />
          <div>
            <p className="text-sm font-medium uppercase mb-2">Playlist</p>
            <h1 className="text-5xl font-bold mb-6">{playlist.name}</h1>
            <p className="text-muted-foreground mb-2">{playlist.description}</p>
            <div className="flex items-center text-sm">
              <span className="font-medium">Created by User</span>
              <span className="mx-1">•</span>
              <span>{playlist.tracks.length} songs</span>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-4 mb-8">
          <button className="bg-primary text-primary-foreground rounded-full p-4 hover:scale-105 transition-transform shadow-lg">
            <Play size={24} fill="currentColor" />
          </button>
          <button className="text-muted-foreground hover:text-foreground">
            <MoreHorizontal size={32} />
          </button>
        </div>
        
        {/* Track List */}
        <TrackList 
          tracks={playlist.tracks} 
          onTrackPlay={(track) => console.log('Play track:', track.title)}
        />
      </div>
    </MainLayout>
  );
};

export default Playlist;