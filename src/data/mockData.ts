
import { Album, Artist, Playlist, Track } from "@/types/music";

// Mock Artists
export const artists: Artist[] = [
  {
    id: "artist-1",
    name: "The Weeknd",
    imageUrl: "https://images.unsplash.com/photo-1618609377864-68609b857e90?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: "artist-2",
    name: "Dua Lipa",
    imageUrl: "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: "artist-3",
    name: "Kendrick Lamar",
    imageUrl: "https://images.unsplash.com/photo-1619963258837-b83f3406cfcd?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: "artist-4",
    name: "Billie Eilish",
    imageUrl: "https://images.unsplash.com/photo-1619963258837-b83f3406cfcd?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: "artist-5",
    name: "Taylor Swift",
    imageUrl: "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?q=80&w=200&h=200&auto=format&fit=crop"
  }
];

// Mock Albums
export const albums: Album[] = [
  {
    id: "album-1",
    title: "After Hours",
    artist: artists[0],
    imageUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&h=300&auto=format&fit=crop",
    releaseYear: 2020
  },
  {
    id: "album-2",
    title: "Future Nostalgia",
    artist: artists[1],
    imageUrl: "https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?q=80&w=300&h=300&auto=format&fit=crop",
    releaseYear: 2020
  },
  {
    id: "album-3",
    title: "DAMN.",
    artist: artists[2],
    imageUrl: "https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?q=80&w=300&h=300&auto=format&fit=crop",
    releaseYear: 2017
  },
  {
    id: "album-4",
    title: "Happier Than Ever",
    artist: artists[3],
    imageUrl: "https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?q=80&w=300&h=300&auto=format&fit=crop",
    releaseYear: 2021
  },
  {
    id: "album-5",
    title: "1989 (Taylor's Version)",
    artist: artists[4],
    imageUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&h=300&auto=format&fit=crop",
    releaseYear: 2023
  }
];

// Mock Tracks
export const tracks: Track[] = [
  {
    id: "track-1",
    title: "Blinding Lights",
    artist: artists[0],
    album: albums[0],
    duration: 203,
    audioUrl: "/audio/sample.mp3"
  },
  {
    id: "track-2",
    title: "Save Your Tears",
    artist: artists[0],
    album: albums[0],
    duration: 215,
    audioUrl: "/audio/sample.mp3"
  },
  {
    id: "track-3",
    title: "Don't Start Now",
    artist: artists[1],
    album: albums[1],
    duration: 183,
    audioUrl: "/audio/sample.mp3"
  },
  {
    id: "track-4",
    title: "Levitating",
    artist: artists[1],
    album: albums[1],
    duration: 203,
    audioUrl: "/audio/sample.mp3"
  },
  {
    id: "track-5",
    title: "HUMBLE.",
    artist: artists[2],
    album: albums[2],
    duration: 177,
    audioUrl: "/audio/sample.mp3"
  },
  {
    id: "track-6",
    title: "LOYALTY.",
    artist: artists[2],
    album: albums[2],
    duration: 227,
    audioUrl: "/audio/sample.mp3"
  },
  {
    id: "track-7",
    title: "Happier Than Ever",
    artist: artists[3],
    album: albums[3],
    duration: 298,
    audioUrl: "/audio/sample.mp3"
  },
  {
    id: "track-8",
    title: "NDA",
    artist: artists[3],
    album: albums[3],
    duration: 198,
    audioUrl: "/audio/sample.mp3"
  },
  {
    id: "track-9",
    title: "Blank Space (Taylor's Version)",
    artist: artists[4],
    album: albums[4],
    duration: 231,
    audioUrl: "/audio/sample.mp3"
  },
  {
    id: "track-10",
    title: "Style (Taylor's Version)",
    artist: artists[4],
    album: albums[4],
    duration: 231,
    audioUrl: "/audio/sample.mp3"
  }
];

// Mock Playlists
export const playlists: Playlist[] = [
  {
    id: "playlist-1",
    name: "Chill Vibes",
    description: "Relaxing tunes for your downtime",
    imageUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&h=300&auto=format&fit=crop",
    createdBy: "user-1",
    tracks: [tracks[0], tracks[2], tracks[6], tracks[8]],
    createdAt: new Date("2023-01-15"),
    updatedAt: new Date("2023-05-20")
  },
  {
    id: "playlist-2",
    name: "Workout Mix",
    description: "High energy tracks to keep you moving",
    imageUrl: "https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?q=80&w=300&h=300&auto=format&fit=crop",
    createdBy: "user-1",
    tracks: [tracks[1], tracks[3], tracks[4], tracks[7]],
    createdAt: new Date("2023-02-10"),
    updatedAt: new Date("2023-06-05")
  },
  {
    id: "playlist-3",
    name: "Focus",
    description: "Concentration and productivity boost",
    imageUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&h=300&auto=format&fit=crop",
    createdBy: "user-1",
    tracks: [tracks[5], tracks[9], tracks[2], tracks[6]],
    createdAt: new Date("2023-03-22"),
    updatedAt: new Date("2023-04-18")
  },
  {
    id: "playlist-4",
    name: "Party Starters",
    description: "Get the party going with these hits",
    imageUrl: "https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?q=80&w=300&h=300&auto=format&fit=crop",
    createdBy: "user-1",
    tracks: [tracks[3], tracks[4], tracks[7], tracks[1]],
    createdAt: new Date("2023-04-05"),
    updatedAt: new Date("2023-07-12")
  }
];

// Helper function to format track duration
export const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};
