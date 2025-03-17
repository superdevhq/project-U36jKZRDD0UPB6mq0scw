
export interface Artist {
  id: string;
  name: string;
  imageUrl?: string;
}

export interface Album {
  id: string;
  title: string;
  artist: Artist;
  imageUrl: string;
  releaseYear: number;
}

export interface Track {
  id: string;
  title: string;
  artist: Artist;
  album: Album;
  duration: number; // in seconds
  audioUrl?: string;
}

export interface Playlist {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  createdBy: string;
  tracks: Track[];
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  name: string;
  imageUrl?: string;
  playlists: Playlist[];
}

export interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  position: number;
  duration: number;
  shuffle: boolean;
  repeat: 'off' | 'all' | 'one';
}
