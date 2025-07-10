import React from "react";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Flex, Segmented } from "antd";

export const ThemeButton = () => {
  return (
    <Flex gap="small" align="flex-start" vertical>
      <Segmented
        shape="round"
        options={[
          { value: "light", icon: <SunOutlined /> },
          { value: "dark", icon: <MoonOutlined /> },
        ]}
      />
    </Flex>
  );
};
