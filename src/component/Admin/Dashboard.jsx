import React, { useState, useEffect } from "react";
import { BarChart } from "@material-ui/icons";
import Highcharts from "highcharts";
import { ShoppingCart, AssignmentInd, People } from "@material-ui/icons";
import HighchartsReact from "highcharts-react-official";
import Highcharts3D from "highcharts/highcharts-3d";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProducts, clearErrors } from "../../actions/productAction";
import MetaData from "../layouts/MataData/MataData";
import Loader from "../layouts/loader/Loader";
import { useAlert } from "react-alert";

import Navbar from "./Navbar";
import Sidebar from "./Siderbar";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
Highcharts3D(Highcharts);

const useStyles = makeStyles((theme) => ({
  dashboard: {
    display: "flex",
    alignItems: "flex-start",
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    width: "100%",
    gap: "1rem",
    overflow: "hidden",
    margin: 0,
    padding: 0,
  },
  firstBox: {
    width: "20%",
    margin: "0rem",
    height: "fit-content",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
    display: "block",
    [theme.breakpoints.down("999")]: {
      display: "none",
    },
  },

  toggleBox: {
    width: "16rem",
    margin: "0rem",
    height: "fit-content",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
    display: "block",
    zIndex: "100",
    position: "absolute",
    top: "58px",
    left: "17px",
  },
  secondBox: {
    width: "75%",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "center",
    [theme.breakpoints.down("999")]: {
      width: "100%",
    },
  },
  navBar: {
    margin: "0rem",
  },
  summaryCard: {
    display: "flex",
    justifyContent: "center",
    color: "white",
    width: "100%",
    height: "15rem",
    gap: "1rem",
    margin: "1rem 0 0 0",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "20rem",
      alignItems: "center",
      marginTop: "7rem !important",
    },
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#414141",
    margin: "0 1rem ",
    width: "30%",
    height: "10rem",

    borderRadius: "5px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
    transition: "transform 0.2s ease-in-out",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1) !important",
      backgroundColor: "#ed1c24 ",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, black) !important",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "32% !important",
      marginBottom: "1rem !important",
      padding: "1rem 2rem ! important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "85% !important",
      marginBottom: "1rem !important",
      padding: "2rem 2rem ! important",
    },
    [theme.breakpoints.down("xs")]: {
      width: "85%",

      padding: "1.2rem",
      margin: "0   auto",
      marginBottom: "1rem",
      "&:hover": {
        transform: "scale(1.05) !important",
      },
    },
  },
  textContainer: {
    marginTop: "0.5rem",
    textAlign: "center",
    color: "white",
    textShadow: "1px 1px 2px black",
  },
  heading: {
    fontSize: "20px",
    fontWeight: 800,
    marginBottom: "0.5rem",
    textShadow: "1px 1px 2px black",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
    },
  },
  number: {
    fontSize: "1.5rem",
    fontWeight: 500,
    textShadow: "1px 1px 2px black",
  },
  headerConetnt: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    color: "white",

    [theme.breakpoints.down("md")]: {
      "& svg": {
        fontSize: "2rem",
      },
    },

    [theme.breakpoints.down("sm")]: {
      "& svg": {
        fontSize: "3rem",
      },
    },
  },
  doughnutChart: {
    height: "fit-content",
    width: "42%",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
    padding: "1rem 2rem",
    margin: "0 1rem",
    [theme.breakpoints.down("md")]: {
      width: "30%",
      padding: "1rem 3rem",
      ".highcharts-background": {
        height: "350px !important",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "85%",
      padding: "2rem",
      marginTop: "2rem",
    },

    [theme.breakpoints.down("xs")]: {
      width: "85%",
      marginBottom: "1rem",
      padding: "1.2rem",
    },
  },
  revnueContainer: {
    width: "42%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 1rem",
    height: "400px",
    backgroundColor: "black",
    borderRadius: "5px",
    padding: "1rem 2rem",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
    transition: "background-color 0.3s",

    [theme.breakpoints.down("sm")]: {
      width: "85% !important",
      padding: "1rem",
      height: "250px",
    },

    [theme.breakpoints.down("md")]: {
      width: "30%",
      padding: "1rem 3rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
      width: "85% !important",
      padding: "2rem !important",
      height: "250px",
    },

    [theme.breakpoints.down("xs")]: {
      width: "85%",
      marginBottom: "1rem",
      padding: "1rem !important",
    },
  },
  lineChart: {
    width: "90%",
    height: "fit-content",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
    padding: "2rem",
    margin: "1rem auto",

    [theme.breakpoints.down("sm")]: {
      width: "85%",
    },

    [theme.breakpoints.down("xs")]: {
      width: "85%",
      marginBottom: "1rem",
      padding: "1.2rem",
    },
  },
}));

function Dashboard() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const { products, loading, error } = useSelector((state) => state.products);

  const { users, error: usersError } = useSelector((state) => state.allUsers);

  const alert = useAlert();

  let OutOfStock = 0;
  products &&
    products.forEach((element) => {
      // check how much items out of stocks in products array
      if (element.stock === 0) {
        OutOfStock += 1;
      }
    });


  // togle handler =>
  const toggleHandler = () => {
    console.log("toggle");
    setToggle(!toggle);
  };


  // to close the sidebar when the screen size is greater than 1000px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 999 && toggle) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [toggle]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Dashboard - Admin Panel" />
          <div className={classes.dashboard}>
            <div
              className={
                !toggle ? `${classes.firstBox}` : `${classes.toggleBox}`
              }
            >
              <Sidebar />
            </div>

            <div className={classes.secondBox}>
              <div className={classes.navBar}>
                <Navbar toggleHandler={toggleHandler} />
              </div>

              <div className={classes.summaryCard}>
                <div
                  className={classes.cardContainer}
                  style={{
                    backgroundSize: "cover",
                    transition: "transform 0.2s ease-in-out",
                    cursor: "pointer",
                    ":hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                  onClick={() => history.push("/admin/products")}
                >
                  <div className={classes.headerConetnt}>
                    <ShoppingCart
                      fontSize="large"
                      style={{
                        fontSize: "3rem",
                        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
                      }}
                    />
                    <Typography variant="h6" className={classes.heading}>
                      Total Products
                    </Typography>
                  </div>
                  <div className={classes.textContainer}>
                    <Typography variant="body2" className={classes.number}>
                      {products && products.length}
                    </Typography>
                  </div>
                </div>
                </div>
              </div>
            </div>
        </>
      )}
    </>
  );
}

export default Dashboard;
