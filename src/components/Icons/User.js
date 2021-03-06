import React from "react";
import { PropTypes } from "prop-types";

const UserIcon = ({ children, color, size, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    {children}
    <g fill="none" fillRule="evenodd">
      <path d="M24 0H0v24h24z" />
      <path
        fill={color}
        fillRule="nonzero"
        d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-1c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 7.5a.5.5 0 1 1-1 0V19a6 6 0 1 1 12 0v1.5a.5.5 0 1 1-1 0V19a5 5 0 0 0-10 0v1.5z"
      />
    </g>
  </svg>
);

UserIcon.displayName = "UserIcon";

UserIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.number
};

UserIcon.defaultProps = {
  children: null,
  color: "currentColor",
  size: 24
};

export default UserIcon;
