import { Divider } from "@/presentation/components/ui/divider";
import { useVideoStore } from "@/presentation/contexts/video.context";
import { Box, Text, VStack } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

export const Summary = observer(() => {
  const { currentVideo } = useVideoStore();
  return (
    <Box
      as="section"
      padding={{ base: "0 16px 24px 16px", md: "0 60px 24px 60px" }}
    >
      <VStack alignItems="stretch" gap="1.5rem">
        <Text
          as="h2"
          fontFamily="nunito"
          fontWeight="700"
          fontSize="24px"
          lineHeight="133%"
          letterSpacing="0px"
          color="dark.text.secondary"
        >
          Resumo
        </Text>
        <Text
          fontFamily="nunito"
          fontWeight="400"
          fontSize="16px"
          lineHeight="150%"
          letterSpacing="0px"
          color="dark.text.secondary"
        >
          {currentVideo?.description}
        </Text>
        <Divider />
        <Text
          fontFamily="nunito"
          fontWeight="400"
          fontSize="16px"
          lineHeight="150%"
          letterSpacing="0px"
          color="dark.text.secondary"
        >
          Para acrescentar vídeo ao conteúdo, é preciso que ele esteja hospedado
          em uma plataforma que disponibilize código embed. Nós da Netshow.me
          disponibilizamos para você acesso a plataforma Netshow.me Live, que
          permite upload de vídeo e fornece{" "}
          <Box as="strong" color="primary.main">
            código embed
          </Box>
          .
        </Text>
        <Text
          fontFamily="nunito"
          fontWeight="400"
          fontSize="16px"
          lineHeight="150%"
          letterSpacing="0px"
          color="dark.text.secondary"
        >
          Agora vamos te ensinar o passo a passo completo de upload de vídeo na
          plataforma Netshow.me Live. E passar pelos campos fundamentais a serem
          preenchidos no momento da criação do conteúdo de vídeo na OTT. Caso
          tenha optado pelo embed de outra plataforma, pule para o título ”Como
          fazer colocar vídeo no conteúdo”.
        </Text>
        <Text
          as="h3"
          color="dark.text.secondary"
          fontFamily="nunito"
          fontWeight="700"
          fontSize={{ base: "18px", md: "32px" }}
          lineHeight="100%"
          letterSpacing="0px"
        >
          Como fazer upload
        </Text>
        <Text color="dark.text.secondary">
          Ao acessar, selecione no menu superior a opção Gerenciar vídeos, em
          seguida Criar vídeo. Para começar o processo de upload, selecione a
          opção Carregar vídeo. Ao abrir a janela de busca, localize o arquivo e
          o selecione.
        </Text>
      </VStack>
    </Box>
  );
});
