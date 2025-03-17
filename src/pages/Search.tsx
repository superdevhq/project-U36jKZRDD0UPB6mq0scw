
import { useState } from "react";
import MainLayout from "@/components/Layout/MainLayout";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import PlaylistGrid from "@/components/Playlists/PlaylistGrid";
import TrackList from "@/components/TrackList/TrackList";
import { playlists, tracks, artists, albums } from "@/data/mockData";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState({
    tracks: tracks.slice(0, 5),
    playlists: playlists,
    artists: [],
    albums: []
  });
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setSearchResults({
        tracks: tracks.slice(0, 5),
        playlists: playlists,
        artists: [],
        albums: []
      });
      return;
    }
    
    // Simple search implementation
    const filteredTracks = tracks.filter(track => 
      track.title.toLowerCase().includes(query.toLowerCase()) ||
      track.artist.name.toLowerCase().includes(query.toLowerCase())
    );
    
    const filteredPlaylists = playlists.filter(playlist =>
      playlist.name.toLowerCase().includes(query.toLowerCase())
    );
    
    const filteredArtists = artists.filter(artist =>
      artist.name.toLowerCase().includes(query.toLowerCase())
    );
    
    const filteredAlbums = albums.filter(album =>
      album.title.toLowerCase().includes(query.toLowerCase()) ||
      album.artist.name.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults({
      tracks: filteredTracks,
      playlists: filteredPlaylists,
      artists: filteredArtists,
      albums: filteredAlbums
    });
  };
  
  return (
    <MainLayout>
      <div className="pb-20">
        <div className="relative mb-8">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="What do you want to listen to?"
            className="pl-10 h-12 bg-secondary/50 border-none text-lg"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        
        {searchQuery.trim() === "" ? (
          <>
            <h2 className="text-2xl font-bold mb-6">Browse all</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {['Pop', 'Hip-Hop', 'Rock', 'Electronic', 'Indie', 'Jazz', 'Classical', 'R&B', 'Country', 'Metal'].map((genre) => (
                <div 
                  key={genre} 
                  className="aspect-square rounded-lg bg-gradient-to-br from-primary/80 to-primary/30 flex items-center justify-center overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform"
                  style={{ backgroundColor: getRandomColor() }}
                >
                  <span className="text-xl font-bold">{genre}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-8">
            {searchResults.tracks.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Songs</h2>
                <TrackList 
                  tracks={searchResults.tracks.slice(0, 5)} 
                  onTrackPlay={(track) => console.log('Play track:', track.title)}
                />
              </div>
            )}
            
            {searchResults.playlists.length > 0 && (
              <PlaylistGrid 
                title="Playlists" 
                playlists={searchResults.playlists.slice(0, 5)} 
              />
            )}
            
            {searchResults.artists.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Artists</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {searchResults.artists.map(artist => (
                    <div key={artist.id} className="text-center">
                      <img 
                        src={artist.imageUrl || '/placeholder.svg'} 
                        alt={artist.name}
                        className="w-full aspect-square object-cover rounded-full mb-3"
                      />
                      <h3 className="font-semibold">{artist.name}</h3>
                      <p className="text-sm text-muted-foreground">Artist</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {searchResults.albums.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Albums</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {searchResults.albums.map(album => (
                    <div key={album.id} className="bg-card hover:bg-card/80 transition-colors p-4 rounded-md">
                      <img 
                        src={album.imageUrl} 
                        alt={album.title}
                        className="w-full aspect-square object-cover rounded-md shadow-md mb-3"
                      />
                      <h3 className="font-semibold truncate">{album.title}</h3>
                      <p className="text-sm text-muted-foreground truncate">
                        {album.artist.name} • {album.releaseYear}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {searchResults.tracks.length === 0 && 
             searchResults.playlists.length === 0 && 
             searchResults.artists.length === 0 && 
             searchResults.albums.length === 0 && (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-2">No results found for "{searchQuery}"</h2>
                <p className="text-muted-foreground">
                  Please check your spelling or try different keywords.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

// Helper function to generate random colors for genre cards
const getRandomColor = () => {
  const colors = [
    'from-blue-500 to-indigo-700',
    'from-green-500 to-emerald-700',
    'from-purple-500 to-violet-700',
    'from-red-500 to-rose-700',
    'from-orange-500 to-amber-700',
    'from-pink-500 to-fuchsia-700',
    'from-teal-500 to-cyan-700',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default Search;
