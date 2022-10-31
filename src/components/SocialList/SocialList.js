import React from "react";

import Link from "../../ui/Link";
import IconFacebook from "../../ui/Icons/IconFacebook";
import IconYT from "../../ui/Icons/IconYT";
import IconTwitter from "../../ui/Icons/IconTwitter";

const SocialList = ({...props}) => {
  return (
    <ul className="social-icons" {...props}>
      <li>
        <Link>
          <IconFacebook />
        </Link>
      </li>
      <li className="mx-3">
        <Link>
          <IconYT />
        </Link>
      </li>
      <li>
        <Link>
          <IconTwitter />
        </Link>
      </li>
    </ul>
  );
};

export default SocialList;
