import React from "react";
import Image from "next/image";
import mountainImage from "./mountain-8187621_1280.jpg";

export function SimpleBanner(props: any) {
  const { Root, Stack, CoverContainer, TitleContainer, DescriptionContainer } =
    props.__fromEditor.components;

  return (
    <Root.type {...Root.props}>
      <CoverContainer.type {...CoverContainer.props}>
        <Image
          src={mountainImage}
          alt={"some pic"}
          style={{ width: "100%", height: "auto" }}
        />
      </CoverContainer.type>
      <Stack.type {...Stack.props}>
        <TitleContainer.type {...TitleContainer.props}>
          Hello world
        </TitleContainer.type>
        <DescriptionContainer.type {...DescriptionContainer.props}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </DescriptionContainer.type>
      </Stack.type>
    </Root.type>
  );
}