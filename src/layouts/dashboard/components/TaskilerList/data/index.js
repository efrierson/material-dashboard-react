/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoGmail from "assets/images/small-logos/icon-gmail.svg";
import logoSamsara from "assets/images/small-logos/icon-samsara.svg";
import logoZendesk from "assets/images/small-logos/icon-zendesk.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Ticket Name", accessor: "ticket", width: "45%", align: "left" },
      { Header: "Contact(s)", accessor: "members", width: "10%", align: "left" },
      { Header: "ETA", accessor: "eta", align: "center" },
      { Header: "Timeline", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        ticket: <Company image={logoZendesk} name="GPS Inaccuracies with TxDMV" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Alex Jensen"],
              [team2, "Austin Smith"],
              [team3, "Mason Heller"],
              [team4, "Alexandra Milne-Smith"],
            ])}
          </MDBox>
        ),
        eta: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            November 13, 2023
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        ticket: <Company image={logoGmail} name="Legal for Austin Resource Recovery" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team2, "Austin Smith"],
              [team4, "Alexandra Milne-Smith"],
            ])}
          </MDBox>
        ),
        eta: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            November 2, 2023
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="error" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        ticket: <Company image={logoSlack} name="PM question about Geofences for Dallas" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Alex Jensen"],
              [team3, "Mason Heller"],
            ])}
          </MDBox>
        ),
        eta: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            November 10, 2023
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        ticket: (
          <Company image={logoSamsara} name="Alex designing custom cable for Komatsu for El Paso" />
        ),
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team4, "Alexandra Milne-Smith"],
              [team3, "Mason Heller"],
              [team2, "Austin Smith"],
              [team1, "Alex Jensen"],
            ])}
          </MDBox>
        ),
        eta: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            November 12, 2023
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={75} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
    ],
  };
}
