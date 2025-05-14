import { Player } from "@/presentation/components/video/player";
import { useVideoStore } from "@/presentation/contexts/video.context";
import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

export const PlayerSection = observer(() => {
  const { currentVideo } = useVideoStore();

  return (
    <Box
      as="section"
      backgroundColor="common.black"
      padding={{ base: "20px 8px", md: "0" }}
    >
      <Flex alignItems="center" justifyContent="center">
        <Box width="full" maxWidth="924px">
          {currentVideo && (
            <Player.Provider url={currentVideo.hls_path}>
              <Player.Overlay>
                <VStack alignItems="stretch">
                  <Player.Progress />
                  <HStack>
                    <HStack>
                      <Player.PlayButton />
                      <Player.Volume />
                    </HStack>
                  </HStack>
                </VStack>
              </Player.Overlay>
            </Player.Provider>
          )}
        </Box>
      </Flex>
    </Box>
  );
});
