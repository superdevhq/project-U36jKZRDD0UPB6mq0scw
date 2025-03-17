
import PlaylistCard from "./PlaylistCard";
import { Playlist } from "@/types/music";

interface PlaylistGridProps {
  title: string;
  playlists: Playlist[];
}

const PlaylistGrid = ({ title, playlists }: PlaylistGridProps) => {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        {playlists.length > 4 && (
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            See all
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </section>
  );
};

export default PlaylistGrid;
