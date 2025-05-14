import { Button } from "@/presentation/components/ui/button";
import { Divider } from "@/presentation/components/ui/divider";
import { Actions } from "@/presentation/components/video/actions/actions";
import { useVideoStore } from "@/presentation/contexts/video.context";
import { BookmarkAddOutlined } from "@/presentation/icons/bookmark-add.outlined.icon";
import { Badge, Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { DateTime } from "luxon";
import { observer } from "mobx-react-lite";
import { useState } from "react";

export const Meta = observer(() => {
  const [pressed, setPressed] = useState(false);
  const { currentVideo } = useVideoStore();

  const handleToggle = () => {
    setPressed((prev) => !prev);
  };

  return (
    <Box padding={{ base: "20px 16px 24px 16px", md: "32px 60px 60px 60px" }}>
      <Stack
        direction={{ base: "column", md: "row" }}
        gap="1rem"
        justifyContent={{ base: "stretch", md: "space-between" }}
      >
        <VStack alignItems="flex-start" gap="0.5rem">
          <Text
            as="h1"
            textStyle={{ base: "heading-h5", md: "heading-h6" }}
            color="dark.text.primary"
          >
            {currentVideo?.title}
          </Text>
          <HStack>
            <Badge
              padding="3px 4px"
              background="#1E1E1E"
              height="24px"
              borderRadius="16px"
              fontFamily="nunito"
              fontWeight="400"
              fontSize="13px"
              lineHeight="18px"
              letterSpacing="0px"
              color="common.white"
            >
              {currentVideo?.category.title}
            </Badge>
            <Text
              fontFamily="nunito"
              fontWeight="400"
              fontSize="13px"
              lineHeight="18px"
              letterSpacing="0px"
              color="dark.text.secondary"
            >
              {DateTime.fromSQL(currentVideo?.published_at || "").toFormat(
                "dd/LL/yyyy, HH:mm",
              )}
            </Text>
            <Button onClick={handleToggle}>
              <HStack>
                <BookmarkAddOutlined size="md" />
                <Text as="span" display={{ md: "none" }}>
                  {pressed ? "Remover" : "Minha lista"}
                </Text>
                <Text as="span" display={{ base: "none", md: "block" }}>
                  {pressed ? "Remover da lista" : "Adicionar à minha lista"}
                </Text>
              </HStack>
            </Button>
          </HStack>
        </VStack>
        <Divider display={{ md: "none" }} />
        <Actions />
      </Stack>
    </Box>
  );
});
