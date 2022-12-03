import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes}>
      <h1 className="m-3">
        <Link to="/">
          <Image
            src={require("./../../../assets/images/logo.png")}
            alt="Open"
            width={90}
            height={90}
          />
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
