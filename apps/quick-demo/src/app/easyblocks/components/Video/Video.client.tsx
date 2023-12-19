import { VideoSrc } from "@easyblocks/editable-components";
import { useForceRerender } from "@easyblocks/utils";
import { ReactElement, useEffect } from "react";
import { VideoRenderer } from "./VideoRenderer";

export type VideoProps = {
  image: VideoSrc | undefined;
  enablePlaybackControls: boolean;
  enableSoundControls: boolean;
  autoplay: boolean;
  Wrapper: ReactElement;
  AspectRatioMaker: ReactElement;
  NaturalAspectRatioMaker: ReactElement;
  ImageWrapper: ReactElement;
  isEditing: boolean;
  ControlsContainer: ReactElement;
  PlayButton: ReactElement;
  PauseButton: ReactElement;
  MuteButton: ReactElement;
  UnmuteButton: ReactElement;
  Video: ReactElement;
};

function Video(props: VideoProps) {
  const { image: video, Wrapper, AspectRatioMaker, ImageWrapper } = props;

  const { forceRerender } = useForceRerender();

  useEffect(() => {
    const onResize = () => {
      forceRerender();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return (
    <Wrapper.type {...Wrapper.props}>
      <AspectRatioMaker.type {...AspectRatioMaker.props} />

      <ImageWrapper.type {...ImageWrapper.props}>
        <VideoRenderer {...props} video={video} />
      </ImageWrapper.type>
    </Wrapper.type>
  );
}

export { Video };