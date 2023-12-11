import React, { useState  } from "react";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 455,
    minHeight: "50vh",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: "4px",
    background: "white",
  },
  cardheader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  avatar: {
    marginRight: theme.spacing(1),
  },

  title: {
    marginBottom: "1rem",
    fontWeight: 700,
  },
  commentTxt: {
    marginBottom: "1.5rem",
    fontSize: "14px",
    color: "#414141",
  },

  subHeadings: {
    fontSize: "16px",
    color: "#414141",
    fontWeight: 700,
  },
  bodyText: {
    fontSize: "14px",
    color: "#414141",
    fontWeight: 500,
  },

  star: {
    color: "black",
    fontSize: 24,
    marginTop: "2px",
  },
  clicked: {
    color: "red",
  },
  yes: {
    color: "green",
  },
  no: {
    color: "red",
  },
}));

const MyCard = ({ review }) => {
  const classes = useStyles();

  function formateDate(dateString){
    const date = new Date(dateString);

    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
    return formattedDate;
  }

  return (
    <div className={classes.cardRoot}>
      <div className={classes.cardheader}>
        <Avatar
          alt="User Avatar"
          src={review.avatar || "https://i.imgur.com/JSW6mEk.png"}
          className={classes.avatar}
        />
        <Typography variant="body1" className={classes.subHeadings}>
          {review.name}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          style={{ marginLeft: "12rem" }}
          className={classes.bodyText}
        >
          {formateDate(review.createdAt)}
        </Typography>
      </div>
      <div>
        <Rating
          value={4}
          precision={0.5}
          size="midium"
          readOnly
          className={classes.star}
        />
      </div>
      <Typography variant="h6" className={classes.title}>
        {review.title}
      </Typography>
      <Typography variant="body1" className={classes.commentTxt}>
        {review.comment}
      </Typography>
    </div>
  );
};
export default MyCard;
