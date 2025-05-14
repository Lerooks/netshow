import { UseCaseFactory } from "@/infrastructure/factories/use-cases.factory";
import { VideoContent } from "@/presentation/components/video/video-content/video-content";
import { VideoProvider } from "@/presentation/contexts/video.context";

interface VideoPageProps {
  params: { id: string };
}

export default async function VideoPage(props: VideoPageProps) {
  const params = await props.params;
  const useCase = UseCaseFactory.getVideoDetailsUseCase();
  const video = await useCase.execute(params.id);

  return (
    <VideoProvider initialVideo={video}>
      <VideoContent />
    </VideoProvider>
  );
}
