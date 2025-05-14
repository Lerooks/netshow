import { Button } from "@/presentation/components/ui/button";
import { useVideoStore } from "@/presentation/contexts/video.context";
import { SharedOutlined } from "@/presentation/icons/shared.outlined.icon";
import { ThumbDownAltOutlined } from "@/presentation/icons/thumb-down-alt.outlined.icon";
import { ThumbUp } from "@/presentation/icons/thumb-up.icon";
import { HStack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useState } from "react";

export const Actions = observer(() => {
  const [isLiked, setLiked] = useState(false);
  const { incrementLike } = useVideoStore();

  const handleLike = () => {
    incrementLike();
    setLiked(true);
  };

  return (
    <Wrap justifyContent={{ md: "flex-end" }} gap="1rem">
      <WrapItem>
        <Button onClick={handleLike} disabled={isLiked}>
          <HStack>
            <ThumbUp />
            <Text as="span">Gostei</Text>
          </HStack>
        </Button>
      </WrapItem>
      <WrapItem>
        <Button>
          <HStack>
            <ThumbDownAltOutlined />
            <Text as="span">Não é pra mim</Text>
          </HStack>
        </Button>
      </WrapItem>
      <WrapItem>
        <Button>
          <HStack>
            <SharedOutlined />
            <Text as="span">Compartilhar</Text>
          </HStack>
        </Button>
      </WrapItem>
    </Wrap>
  );
});
