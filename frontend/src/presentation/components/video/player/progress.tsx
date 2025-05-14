import { Flex, Slider, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { usePlayer } from "./provider";
import { Duration } from "luxon";
import { playerStore } from "@/infrastructure/stores/player.store";

export const Progress = observer(() => {
  const { handleSeek } = usePlayer();
  const [isSeeking, setIsSeeking] = useState(false);
  const [seekValue, setSeekValue] = useState(0);

  const formatTime = (seconds: number) => {
    return Duration.fromObject({ seconds }).toFormat(
      seconds >= 60 * 60 ? "hh:mm:ss" : "mm:ss",
    );
  };

  const currentTime = isSeeking
    ? seekValue * playerStore.duration
    : playerStore.playedSeconds;
  const displayValue = isSeeking ? seekValue : playerStore.played;

  return (
    <Slider.Root
      value={[displayValue]}
      min={0}
      max={1}
      step={0.0001}
      onValueChange={({ value }) => {
        setSeekValue(value[0]);
        setIsSeeking(true);
      }}
      onValueChangeEnd={({ value }) => {
        handleSeek(value[0]);
        setIsSeeking(false);
      }}
      width="100%"
      px={2}
    >
      <Flex align="center" gap={3} width="100%">
        <Text
          fontFamily="inter"
          fontWeight="600"
          fontSize="14px"
          lineHeight="157%"
          letterSpacing="0.1px"
          textAlign="center"
          color="common.white"
          flexShrink={0}
        >
          {formatTime(currentTime)}
        </Text>
        <Slider.Control width="100%" _hover={{ cursor: "pointer" }}>
          <Slider.Track bg="rgba(255, 255, 255, 0.3)" height="4px">
            <Slider.Range bg="additional.blue" />
          </Slider.Track>
          <Slider.Thumb
            index={0}
            boxSize="14px"
            bg="additional.blue"
            boxShadow="none"
            border="none"
          />
        </Slider.Control>
        <Text
          fontFamily="inter"
          fontWeight="600"
          fontSize="14px"
          lineHeight="157%"
          letterSpacing="0.1px"
          textAlign="center"
          color="common.white"
          flexShrink={0}
        >
          {formatTime(playerStore.duration)}
        </Text>
      </Flex>
    </Slider.Root>
  );
});
