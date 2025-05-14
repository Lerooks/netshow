"use client";

import { MdPause, MdPlayArrow } from "react-icons/md";
import { observer } from "mobx-react-lite";
import { IconButton } from "@chakra-ui/react";
import { playerStore } from "@/infrastructure/stores/player.store";

export const PlayButton = observer(() => {
  const handlePlayPause = () => {
    playerStore.togglePlay();
  };

  return (
    <IconButton onClick={handlePlayPause} backgroundColor="transparent">
      {playerStore.isPlaying ? <MdPause /> : <MdPlayArrow />}
    </IconButton>
  );
});
