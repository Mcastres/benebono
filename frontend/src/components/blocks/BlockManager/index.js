import React from "react";
import dynamic from "next/dynamic";

const dynamicComponents = {
  "blocks.hero": dynamic(() => import("../../blocks/Hero"), {
    ssr: false,
  }),
};

const getBlockComponent = ({ __component, ...rest }, index) => {
  const BlockComponent = dynamicComponents[__component];

  return BlockComponent ? (
    <BlockComponent key={`index${index}`} {...rest} />
  ) : null;
};

const BlockManager = ({ blocks }) => {
  return <div className="flex flex-grow">{blocks?.map(getBlockComponent)}</div>;
};

BlockManager.defaultProps = {
  blocks: [],
};

export default BlockManager;
