import React from "react";

const EmailIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 0H24V17C24 17.2652 23.8946 17.5196 23.7071 17.7071C23.5196 17.8946 23.2652 18 23 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V0Z"
        fill="#79CD00"
      />
      <path
        d="M23 2L12 13L1 2"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EmailIcon;
