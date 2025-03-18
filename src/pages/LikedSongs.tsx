
import { useState, useEffect } from "react";
import MainLayout from "@/components/Layout/MainLayout";
import TrackList from "@/components/TrackList/TrackList";
import { tracks } from "@/data/mockData";
import { Track } from "@/types/music";
import { Play, Heart } from "lucide-react";

const LikedSongs = () => {
  const [likedTracks, setLikedTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call to fetch liked songs
    // In a real app, this would come from your backend
    const fetchLikedSongs = () => {
      setIsLoading(true);
      setTimeout(() => {
        // For demo purposes, we'll use a subset of tracks as "liked"
        setLikedTracks(tracks.filter((_, index) => index % 2 === 0));
        setIsLoading(false);
      }, 500);
    };
    
    fetchLikedSongs();
  }, []);
  
  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div className="pb-20">
        {/* Header */}
        <div className="flex items-end gap-6 mb-8">
          <div className="w-60 h-60 bg-gradient-to-br from-pink-500 to-purple-700 flex items-center justify-center shadow-lg">
            <Heart size={80} className="text-white" fill="white" />
          </div>
          <div>
            <p className="text-sm font-medium uppercase mb-2">Playlist</p>
            <h1 className="text-5xl font-bold mb-6">Liked Songs</h1>
            <p className="text-muted-foreground mb-2">
              Songs you've liked will appear here
            </p>
            <div className="flex items-center text-sm">
              <span className="font-medium">Your Library</span>
              <span className="mx-1">•</span>
              <span>{likedTracks.length} songs</span>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-4 mb-8">
          <button className="bg-primary text-primary-foreground rounded-full p-4 hover:scale-105 transition-transform shadow-lg">
            <Play size={24} fill="currentColor" />
          </button>
        </div>
        
        {/* Track List */}
        {likedTracks.length > 0 ? (
          <TrackList 
            tracks={likedTracks} 
            onTrackPlay={(track) => console.log('Play track:', track.title)}
          />
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2">Songs you like will appear here</h2>
            <p className="text-muted-foreground">
              Save songs by tapping the heart icon.
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default LikedSongs;
