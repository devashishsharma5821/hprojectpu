import React from "react";
import classes from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { pink } from "@mui/material/colors";
export default function footer() {
  return (
    <div className={classes.footer}>
      <p>Copyright © 2022 FoodOrderApp.com | All Rights Reserved.</p>
      <div>
        <ul className={classes.Icons}>
          <li>
            <FacebookIcon color="primary" fontSize="large" />
          </li>
          <li>
            <InstagramIcon sx={{ color: pink[500] }} fontSize="large" />
          </li>
          <li>
            <TwitterIcon color="primary" fontSize="large" />
          </li>
          <li>
            <GitHubIcon fontSize="large" />
          </li>
        </ul>
      </div>
    </div>
  );
}
