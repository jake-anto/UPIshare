"use client";

import { red } from "@mui/material/colors";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import QRCode from "qrcode";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import * as React from "react";

function generateQR(open_link=false) {
  let upiId = document.getElementById("upiId").value;
  let name = document.getElementById("name").value;
  let amount = document.getElementById("amount").value;
  let qr = document.getElementById("qr");
  let avatar = document.getElementById("avatar");
  let cardTitle = document.getElementById("card-title");
  let cardSubheader = document.getElementById("card-subheader");

  if (upiId === "") {
    upiId = "sample@upi";
  }
  if (name === "") {
    name = "John Doe";
  }

  avatar.innerHTML = name.charAt(0);
  cardTitle.innerHTML = name;
  cardSubheader.innerHTML = upiId;

  let url = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}`;

  if (amount === "") {
    url = `upi://pay?pa=${upiId}&pn=${name}`;
  }

  QRCode.toDataURL(url, function (err, data) {
    if (err) throw err;
    qr.src = data;
  });

  if (open_link) window.open(url);
}

function QRForm() {
  return (
    <div>
      <TextField
        id="upiId"
        label="UPI ID*"
        variant="outlined"
        className="form-element"
        onChange={(e) => generateQR()}
      />
      <TextField
        id="name"
        label="Name*"
        variant="outlined"
        className="form-element"
        onChange={(e) => generateQR()}
      />
      <TextField
        label="Amount (optional)"
        id="amount"
        onChange={(e) => generateQR()}
        sx={{ m: 1, width: "25ch" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">₹</InputAdornment>,
        }}
      />
    </div>
  );
}

function QRCard() {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardHeader
        avatar={
          <Avatar id="avatar" sx={{ bgcolor: red[500] }} alt="John Doe">
            JD
          </Avatar>
        }
        action={
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        }
        title="John Doe"
        titleTypographyProps={{ id: "card-title" }}
        subheader=""
        subheaderTypographyProps={{ id: "card-subheader" }}
      />
      <div id="qr-div">
        <Image id="qr" alt="QR Code" />
      </div>
      <CardActions>
        <Button size="small" onClick={() => generateQR(true)}>Pay now</Button>
      </CardActions>
    </Card>
  );
}

export default function Home() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <QrCodeScannerIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            UPI QR Code Generator
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        spacing={2}
        className="inner"
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Grid xs={8}>
          <QRForm />
        </Grid>
        <Grid xs={4}>
          <QRCard />
        </Grid>
      </Grid>
    </div>
  );
}
