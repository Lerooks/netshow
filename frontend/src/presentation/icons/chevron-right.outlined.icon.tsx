import { Icon, IconProps } from "@chakra-ui/react";

function ChevronRightOutlined(props: IconProps) {
  return (
    <Icon {...props}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.70501 6L8.29501 7.41L12.875 12L8.29501 16.59L9.70501 18L15.705 12L9.70501 6Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
}

export { ChevronRightOutlined };
