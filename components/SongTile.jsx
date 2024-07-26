import { useState, useEffect, useRef } from "react";
import { favourites } from "../constants";
import { Play, Pause, SkipBack, SkipForward, Volume } from "lucide-react";

export const SongTile = () => {
  const songs = favourites.songs;
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3); // Default volume set to 50%
  const audioRef = useRef(new Audio(songs[currentSongIndex].audioSrc));

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const playPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const nextSong = () => {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
      setIsPlaying(true);
      audioRef.current.src = songs[currentSongIndex + 1].audioSrc;
      audioRef.current.play();
    }
  };

  const prevSong = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
      setIsPlaying(true);
      audioRef.current.src = songs[currentSongIndex - 1].audioSrc;
      audioRef.current.play();
    }
  };

  return (
    <div className="relative bg-gray-800 p-4 rounded-lg shadow-md overflow-hidden">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${songs[currentSongIndex].albumArt})`,
          filter: "blur(10px) brightness(80%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Currently Playing */}
        <div className="flex items-center gap-4">
          <img
            src={songs[currentSongIndex].albumArt}
            alt="Album Art"
            className="w-12 h-12 rounded-md"
          />
          <div>
            <h3 className="text-white text-lg font-semibold">
              {songs[currentSongIndex].name}
            </h3>
            <p className="text-gray-100">
              {songs[currentSongIndex].artist} - {songs[currentSongIndex].album}
            </p>
          </div>
        </div>

        {/* Next Up Songs */}
        <div className="mt-4 text-white">
          <h4 className="font-semibold">Next up:</h4>
          <ul className="mt-2 space-y-1">
            {songs.map((song, index) => (
              <li
                key={index}
                className={`flex items-center border-t-[1px] py-1 border-[#ffffff29] gap-2 ${
                  index === currentSongIndex ? "text-green-500" : ""
                }`}
              >
                {/* <button onClick={() => setCurrentSongIndex(index)}>
                  {index === currentSongIndex && isPlaying ? (
                    <Pause
                      size={20}
                      color="#ffffff"
                      strokeWidth={0.7}
                      absoluteStrokeWidth
                    />
                  ) : (
                    <Play
                      size={20}
                      color="#ffffff"
                      strokeWidth={0.7}
                      absoluteStrokeWidth
                    />
                  )}
                </button> */}
                <img
                  src={song.albumArt}
                  alt="Album Art"
                  className="w-8 h-8 rounded-md"
                />
                <div>
                  <h4 className="text-sm">{song.name}</h4>
                  <p className="text-gray-200 text-xs">{song.artist}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center mt-4">
          <button onClick={prevSong}>
            <SkipBack
              size={20}
              color="#ffffff"
              strokeWidth={0.7}
              absoluteStrokeWidth
              className="mx-1"
            />
          </button>
          <button onClick={playPause}>
            {isPlaying ? (
              <Pause
                className="mx-1"
                size={20}
                color="#ffffff"
                strokeWidth={0.7}
                absoluteStrokeWidth
              />
            ) : (
              <Play
                className="mx-1"
                size={20}
                color="#ffffff"
                strokeWidth={0.7}
                absoluteStrokeWidth
              />
            )}
          </button>
          <button onClick={nextSong}>
            <SkipForward
              className="mx-1"
              size={20}
              color="#ffffff"
              strokeWidth={0.7}
              absoluteStrokeWidth
            />
          </button>
          <div className="flex items-center">
            <Volume
              className="mx-2"
              size={20}
              color="#ffffff"
              strokeWidth={0.7}
              absoluteStrokeWidth
            />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
