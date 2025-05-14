import {
  Box,
  Flex,
  IconButton,
  SliderValueChangeDetails,
} from "@chakra-ui/react";
import { Slider } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { playerStore } from "@/infrastructure/stores/player.store";
import { MdVolumeUp, MdVolumeOff, MdVolumeDown } from "react-icons/md";
import { Tooltip } from "@/presentation/components/ui/tooltip";

export const Volume = observer(() => {
  const [lastVolume, setLastVolume] = useState(playerStore.volume);

  const handleVolumeChange = (details: SliderValueChangeDetails) => {
    const value = details.value[0];
    playerStore.setVolume(value);
    if (value > 0 && playerStore.isMuted) {
      playerStore.toggleMute();
    }
  };

  const toggleMute = () => {
    if (playerStore.isMuted) {
      playerStore.setVolume(Math.max(0.1, lastVolume));
    } else {
      setLastVolume(playerStore.volume);
      playerStore.setVolume(0);
    }
    playerStore.toggleMute();
  };

  const getVolumeIcon = () => {
    if (playerStore.isMuted || playerStore.volume === 0) {
      return <MdVolumeOff size="md" />;
    }
    return playerStore.volume < 0.5 ? (
      <MdVolumeDown size="md" />
    ) : (
      <MdVolumeUp size="md" />
    );
  };

  const volumeValue = playerStore.isMuted ? 0 : playerStore.volume;
  const volumePercent = Math.round(volumeValue * 100);

  return (
    <Flex align="center" gap={2} flexShrink={0}>
      <Tooltip content={playerStore.isMuted ? "Ativar som" : "Desativar som"}>
        <IconButton
          aria-label={playerStore.isMuted ? "Ativar som" : "Desativar som"}
          onClick={toggleMute}
          variant="ghost"
          color="white"
          _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
          size="sm"
        >
          {getVolumeIcon()}
        </IconButton>
      </Tooltip>
      <Box width="80px">
        <Slider.Root
          value={[volumeValue]}
          min={0}
          max={1}
          step={0.01}
          onValueChange={handleVolumeChange}
        >
          <Slider.Control>
            <Slider.Track bg="rgba(255, 255, 255, 0.3)" height="4px">
              <Slider.Range bg="additional.blue" />
            </Slider.Track>
            <Slider.Thumb
              index={0}
              boxSize="14px"
              bg="#2BA1DA"
              boxShadow="none"
              border="none"
            >
              <Tooltip content={`${volumePercent}%`}>
                <Box boxSize={3} bg="white" borderRadius="full" />
              </Tooltip>
            </Slider.Thumb>
          </Slider.Control>
        </Slider.Root>
      </Box>
    </Flex>
  );
});
