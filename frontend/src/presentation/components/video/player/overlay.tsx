import { Box, Portal } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { playerStore } from "@/infrastructure/stores/player.store";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { usePlayer } from "@/presentation/components/video/player/provider";

interface OverlayProps extends PropsWithChildren {
  clickThrough?: boolean;
  showDelay?: number;
  fadeDuration?: number;
}

export const Overlay = observer(
  ({
    children,
    clickThrough = false,
    showDelay = 3000,
    fadeDuration = 300,
  }: OverlayProps) => {
    const { containerRef } = usePlayer();
    const overlayRef = useRef<HTMLDivElement>(null);
    const [internalVisible, setInternalVisible] = useState(false);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
      if (playerStore.showControls) {
        setInternalVisible(true);
        setOpacity(1);
      } else {
        setOpacity(0);
        const timer = setTimeout(() => {
          setInternalVisible(false);
        }, fadeDuration);
        return () => clearTimeout(timer);
      }
    }, [fadeDuration]);

    useEffect(() => {
      if (!playerStore.showControls) return;

      const timeout = setTimeout(() => {
        playerStore.setShowControls(false);
      }, showDelay);

      return () => clearTimeout(timeout);
    }, [showDelay]);

    if (!containerRef?.current) {
      return (
        <Box
          ref={overlayRef}
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          pointerEvents={clickThrough ? "none" : "auto"}
        >
          {children}
        </Box>
      );
    }

    if (!internalVisible) return null;

    return (
      <Portal container={containerRef}>
        <Box
          ref={overlayRef}
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          pointerEvents="none"
          bg="linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 30%)"
          transition={`opacity ${fadeDuration}ms ease`}
          opacity={opacity}
          onClick={() => {
            if (clickThrough) {
              playerStore.togglePlay();
              playerStore.setShowControls(true);
            }
          }}
        >
          {clickThrough && (
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              pointerEvents="auto"
            />
          )}

          <Box
            p={4}
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            pointerEvents="auto"
          >
            {children}
          </Box>
        </Box>
      </Portal>
    );
  },
);
