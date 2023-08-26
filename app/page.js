"use client";

import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import ShareIcon from "@mui/icons-material/Share";
import VerifiedIcon from "@mui/icons-material/Verified";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Image from "next/image";
import QRCode from "qrcode";
import { NumericFormat } from "react-number-format";

function generateQR(open_link = false) {
  let upiId = document.getElementById("upiId").value;
  let name = document.getElementById("name").value;
  let amount = document.getElementById("amount").value;
  let qr = document.getElementById("qr");
  let avatar = document.getElementById("avatar");
  let cardTitle = document.getElementById("card-title");
  let cardSubheader = document.getElementById("card-subheader");
  let note = document.getElementById("note").value;

  if (upiId === "") {
    upiId = "sample@upi";
  }
  if (name === "") {
    name = "John Doe";
  }

  avatar.innerHTML = name.charAt(0);
  cardTitle.innerHTML = name;
  cardSubheader.innerHTML = upiId;

  let url = `upi://pay?pa=${upiId}&pn=${name}`;

  amount = parseFloat(amount.replace(/,/g, ""));

  if (amount > 0) {
    url += `&am=${amount}`;
  }

  if (note !== "" && note !== undefined) {
    url += `&tn=${note}`;
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
      <Typography variant="h6">Required Fields</Typography>
      <TextField
        required
        id="upiId"
        label="UPI ID"
        variant="outlined"
        className="form-element"
        helperText="Enter payee's UPI ID"
        sx={{ m: 1 }}
        onChange={(e) => generateQR()}
      />
      <TextField
        required
        id="name"
        label="Name"
        variant="outlined"
        className="form-element"
        helperText="Enter payee's name"
        sx={{ m: 1 }}
        onChange={(e) => generateQR()}
      />
      <Typography variant="h6">Optional Fields</Typography>
      <NumericFormat
        customInput={TextField}
        label="Amount"
        id="amount"
        helperText="Enter amount to be paid"
        onValueChange={(e) => generateQR()}
        allowNegative={false}
        thousandSeparator=","
        decimalScale={2}
        thousandsGroupStyle="lakh"
        sx={{ m: 1, width: "210px" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">₹</InputAdornment>,
        }}
      />
      <TextField
        label="Note"
        id="note"
        variant="outlined"
        className="form-element"
        helperText="This shows up on Google Pay"
        sx={{ m: 1 }}
        onChange={(e) => generateQR()}
      />
      <div>
        <Button
          variant="outlined"
          startIcon={<VerifiedIcon />}
          style={{
            margin: "8px",
          }}
        >
          Validate
        </Button>
      </div>
    </div>
  );
}

function QRCard() {
  return (
    <Card sx={{ maxWidth: 300, m: 1 }}>
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
      <Container>
        <Image
          style={{
            display: "block",
            margin: "0 auto",
          }}
          id="qr"
          alt="QR Code"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eqrcode-edit%3C/title%3E%3Cpath d='M5,5H7V7H5V5M1,1H11V11H1V1M3,3V9H9V3H3M5,17H7V19H5V17M1,13H11V23H1V13M3,15V21H9V15H3M13,13H17V15H19V13H23V15H19V17H23V23H19V21H15V23H13V21H15V19H13V13M21,21V19H19V21H21M19,17H17V15H15V19H19V17M22.7,3.35L21.7,4.35L19.65,2.35L20.65,1.35C20.85,1.14 21.19,1.13 21.42,1.35L22.7,2.58C22.91,2.78 22.92,3.12 22.7,3.35M13,8.94L19.07,2.88L21.12,4.93L15.06,11H13V8.94Z' /%3E%3C/svg%3E"
          width={200}
          height={200}
        />
      </Container>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          startIcon={<CurrencyRupeeIcon />}
          style={{
            margin: "6px auto",
          }}
          onClick={() => generateQR(true)}
        >
          Pay now
        </Button>
      </CardActions>
    </Card>
  );
}

export default function Home() {
  return (
    <div>
      <style jsx>{`
        .form-element {
          margin: 8px;
        }
      `}</style>
      <AppBar position="static">
        <Toolbar>
          <QrCodeScannerIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            UPI QR Code Generator
          </Typography>
        </Toolbar>
      </AppBar>
      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="space-between"
        style={{
          margin: "16px",
        }}
      >
        <QRForm />
        <div
          style={{
            margin: "0 auto",
          }}
        >
          <QRCard />
        </div>
      </Stack>
    </div>
  );
}
