import React, { useState, useEffect } from "react";
import { Outlet, Link, Popover, Typography } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
const url = "https://62dcbf6f4438813a2618d496.mockapi.io/student";

function Create() {
  let [disable, setDisable] = useState();
  // let [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  let getData = async () => {
    let teacher_data = await axios.get(url);
    console.log(teacher_data);
    if (teacher_data.data.length != null) {
      setDisable(true);
      console.log("student is active " + disable);
    } else {
      setDisable(false);
      console.log("student is disable " + disable);
    }
    // setData(teacher_data.data);
    // console.log(teacher_data.data);
  };
  const buttons = [
    <Button key="one">
      <Link to={"create-teacher"} style={{ textDecoration: "none" }}>
        Teacher
      </Link>
    </Button>,
    <Button key="two" >
      <Link
        style={{ pointerEvents: disable ? "" : "none", textDecoration: "none" }}
        to={"create-student"}
      >
        Student
      </Link>
    </Button>,
  ];

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
              m: 1,
            },
          }}
        >
          <ButtonGroup size="large" color="secondary">
            {buttons}
          </ButtonGroup>
        </Box>
        <Outlet />
      </>
    </>
  );
}

export default Create;
