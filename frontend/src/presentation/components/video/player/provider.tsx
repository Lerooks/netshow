import {
  createContext,
  useContext,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { playerStore } from "@/infrastructure/stores/player.store";
import { Box } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import ReactPlayer from "react-player";

interface ProviderProps {
  url: string;
  posterUrl?: string;
  children: React.ReactNode;
  onReady?: () => void;
  onError?: (error: Error) => void;
  onProgress?: (state: { played: number }) => void;
}

type PlayerContextType = {
  playerRef: React.RefObject<ReactPlayer | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  toggleFullscreen: () => Promise<void>;
  handleSeek: (amount: number) => void;
  togglePlay: () => void;
  toggleMute: () => void;
};

const PlayerContext = createContext<PlayerContextType | null>(null);

export const Provider = observer(
  ({
    url,
    posterUrl,
    children,
    onReady,
    onError,
    onProgress,
  }: ProviderProps) => {
    const playerRef = useRef<ReactPlayer>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleSeek = useCallback((amount: number) => {
      if (playerRef.current) {
        const clampedAmount = Math.max(0, Math.min(amount, 1));
        const seconds = clampedAmount * playerStore.duration;
        playerStore.setPlayed(clampedAmount);
        playerStore.setPlayedSeconds(seconds);
        playerRef.current.seekTo(clampedAmount, "fraction");
      }
    }, []);

    const seekRelative = useCallback(
      (seconds: number) => {
        if (!playerRef.current) return;
        const newTime = Math.max(
          0,
          Math.min(playerStore.playedSeconds + seconds, playerStore.duration),
        );
        const fraction = newTime / playerStore.duration;
        handleSeek(fraction);
      },
      [handleSeek],
    );

    const toggleFullscreen = async () => {
      if (!containerRef.current) return;
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await containerRef.current.requestFullscreen();
      }
      playerStore.toggleFullscreen();
    };

    const contextValue: PlayerContextType = {
      playerRef,
      containerRef,
      toggleFullscreen,
      handleSeek,
      togglePlay: () => {
        playerStore.togglePlay();
        playerStore.setShowControls(true);
      },
      toggleMute: playerStore.toggleMute,
    };

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.target !== containerRef.current) return;

        switch (e.code) {
          case "Space":
            e.preventDefault();
            playerStore.togglePlay();
            break;
          case "KeyF":
            toggleFullscreen();
            break;
          case "KeyM":
            playerStore.toggleMute();
            break;
          case "ArrowLeft":
            seekRelative(-5);
            break;
          case "ArrowRight":
            seekRelative(5);
            break;
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [seekRelative]);

    useEffect(() => {
      if (!playerStore.showControls || !playerStore.isPlaying) return;

      const timeout = setTimeout(() => {
        playerStore.setShowControls(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }, []);

    return (
      <PlayerContext.Provider value={contextValue}>
        <Box width="100%" bg="black">
          <Box
            ref={containerRef}
            onMouseMove={() => playerStore.setShowControls(true)}
            position="relative"
            w="100%"
            aspectRatio="16/9"
            overflow="hidden"
          >
            <ReactPlayer
              ref={playerRef}
              url={url}
              width="100%"
              height="100%"
              playing={playerStore.isPlaying}
              volume={playerStore.volume}
              muted={playerStore.isMuted}
              playbackRate={playerStore.playbackRate}
              onReady={() => {
                playerStore.setIsReady(true);
                onReady?.();
              }}
              onError={(error) => {
                playerStore.setError(error);
                onError?.(error);
              }}
              onDuration={(duration) => {
                playerStore.setDuration(duration);
                playerStore.setPlayedSeconds(0);
                playerStore.setPlayed(0);
              }}
              onProgress={({ played, playedSeconds, loaded }) => {
                if (!playerStore.isSeeking) {
                  playerStore.setProgress({ played, playedSeconds, loaded });
                  onProgress?.({ played });
                }
              }}
              onEnded={() => playerStore.pause()}
              light={posterUrl && !playerStore.isReady ? posterUrl : undefined}
              controls={false}
              playsinline
            />
            {children}
          </Box>
        </Box>
      </PlayerContext.Provider>
    );
  },
);

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context)
    throw new Error("usePlayer must be used within Player.Provider");
  return context;
};
