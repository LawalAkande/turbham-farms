import Link from "next/link";
import React from "react";

const Button = ({ href, title, className }) => {
  return (
    <Link href={href}>
      <button className={`${className} transition-all duration-500`}>
        {title}
      </button>
    </Link>
  );
};

export default Button;
