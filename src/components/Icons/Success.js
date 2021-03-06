import React from "react";
import { PropTypes } from "prop-types";
import { allSizes, types } from "./iconConstants";

const successIcons = {
  outline: {
    small: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        {children}
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h16v16H0z" />
          <path
            fill={color}
            d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm0 1A7 7 0 1 1 8 1a7 7 0 0 1 0 14zM6.537 9.738l4.242-4.243a.667.667 0 1 1 .943.943l-4.714 4.714a.667.667 0 0 1-.943 0l-2.37-2.37a.667.667 0 0 1 .943-.943l1.899 1.899z"
          />
        </g>
      </svg>
    ),
    regular: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        {children}
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z" />
          <path
            fill={color}
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 1C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm-1.758-8.343l6.364-6.364a1 1 0 0 1 1.414 1.414l-7.071 7.071a1 1 0 0 1-1.414 0L5.98 13.223a1 1 0 0 1 1.414-1.414l2.848 2.848z"
          />
        </g>
      </svg>
    ),
    large: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
      >
        {children}
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h36v36H0z" />
          <path
            fill={color}
            d="M18 34c8.837 0 16-7.163 16-16S26.837 2 18 2 2 9.163 2 18s7.163 16 16 16zm0 1C8.611 35 1 27.389 1 18S8.611 1 18 1s17 7.611 17 17-7.611 17-17 17zm-2.637-12.818l9.546-9.546a1.5 1.5 0 1 1 2.121 2.121L16.424 25.364a1.5 1.5 0 0 1-2.122 0L8.97 20.032a1.5 1.5 0 1 1 2.121-2.122l4.272 4.272z"
          />
        </g>
      </svg>
    )
  },
  filled: {
    small: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        {children}
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h16v16H0z" />
          <path
            fill={color}
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM6.813 9.584l4.242-4.243a.667.667 0 1 1 .943.943l-4.714 4.714a.667.667 0 0 1-.943 0l-2.37-2.37a.667.667 0 1 1 .943-.943l1.899 1.899z"
          />
        </g>
      </svg>
    ),
    regular: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        {children}
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z" />
          <path
            fill={color}
            d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm-1.549-8.388l6.364-6.364a.998.998 0 0 1 1.412-.003.998.998 0 0 1-.003 1.412l-7.071 7.07a.998.998 0 0 1-1.412.004l-3.54-3.541a.998.998 0 0 1 .002-1.412.998.998 0 0 1 1.412-.003l2.836 2.837z"
          />
        </g>
      </svg>
    ),
    large: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
      >
        {children}
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h36v36H0z" />
          <path
            fill={color}
            d="M18 35c9.389 0 17-7.611 17-17S27.389 1 18 1 1 8.611 1 18s7.611 17 17 17zm-2.314-12.829l9.546-9.546c.586-.586 1.556-.565 2.167.046.612.612.632 1.582.046 2.168L16.84 25.445c-.586.586-1.556.566-2.168-.046l-5.564-5.564c-.611-.612-.632-1.582-.046-2.168.585-.586 1.556-.565 2.167.046l4.458 4.458z"
          />
        </g>
      </svg>
    )
  }
};

const SuccessIcon = ({ type, size, color, children, ...props }) =>
  successIcons[type][size](color, children, props);

SuccessIcon.displayName = "SuccessIcon";

SuccessIcon.defaultProps = {
  type: types[0],
  size: allSizes[0],
  children: null,
  color: "currentColor"
};

SuccessIcon.propTypes = {
  type: PropTypes.oneOf(types),
  size: PropTypes.oneOf(allSizes),
  children: PropTypes.node,
  color: PropTypes.string
};

export default SuccessIcon;
