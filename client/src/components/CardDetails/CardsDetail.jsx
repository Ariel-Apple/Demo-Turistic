import * as React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import "./CardsDetail.scss";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "react-bootstrap/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Header from "../Header";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsPostTuristic } from "../../redux/action";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import { Calendar, theme } from "antd";
import { FcGlobe } from "react-icons/fc";
import { CgAirplane } from "react-icons/cg";
import { Table, Flag } from "semantic-ui-react";
//import 'semantic-ui-css/semantic.min.css';
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker, Space } from "antd";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";
import { Image } from 'antd';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://a0.muscache.com/im/pictures/1ef9b49c-6f99-4018-95f9-8471a9fbbd15.jpg?im_w=1200",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://a0.muscache.com/im/pictures/d3041174-4fd1-4199-a8ac-a44907d07bcc.jpg?im_w=720",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://a0.muscache.com/im/pictures/6f8e927e-c0d1-4952-ae0d-705ae391ff8a.jpg?im_w=720",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://a0.muscache.com/im/pictures/880cf735-ac0b-4ad8-93d4-c748564ec103.jpg?im_w=1200",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CardDetails() {
  const { idTuristic } = useParams();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [isLoading, setIsLoading] = React.useState(true);
  const detailpost = useSelector((state) => state.detailpost);
  const dispatch = useDispatch();
  const values = [true];
  const [fullscreen, setFullscreen] = React.useState(true);
  const [detailsModal, setDetailsModal] = React.useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setDetailsModal(true);
  }
  console.log(detailpost.Users && detailpost.Users[0].backgroundColor);


  React.useEffect(() => {
    dispatch(DetailsPostTuristic(idTuristic));
    setTimeout(() => {
      setIsLoading(false); // Cambiar el estado de isLoading a "false" después de cierto tiempo
    }, 1000);
  }, [dispatch, idTuristic]);

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [VistPreview, setVistPreview] = React.useState(false);

  const handleShowVistPreview = () => {
    setVistPreview(true);
  };
  const Close = () => {
    setVistPreview(false);
  };
  const countries = [
    { name: "Afghanistan", countryCode: "af" },
    { name: "Aland Islands", countryCode: "ax" },
    { name: "Albania", countryCode: "al" },
    { name: "Algeria", countryCode: "dz" },
    { name: "American Samoa", countryCode: "as" },
    { name: "Andorra", countryCode: "ad" },
    { name: "Angola", countryCode: "ao" },
    { name: "Anguilla", countryCode: "ai" },
    { name: "Antigua", countryCode: "ag" },
    { name: "Argentina", countryCode: "ar" },
    { name: "Armenia", countryCode: "am" },
    { name: "Aruba", countryCode: "aw" },
    { name: "Australia", countryCode: "au" },
    { name: "Austria", countryCode: "at" },
    { name: "Azerbaijan", countryCode: "az" },
    { name: "Bahamas", countryCode: "bs" },
    { name: "Bahrain", countryCode: "bh" },
    { name: "Bangladesh", countryCode: "bd" },
    { name: "Barbados", countryCode: "bb" },
    { name: "Belarus", countryCode: "by" },
    { name: "Belgium", countryCode: "be" },
    { name: "Belize", countryCode: "bz" },
    { name: "Benin", countryCode: "bj" },
    { name: "Bermuda", countryCode: "bm" },
    { name: "Bhutan", countryCode: "bt" },
    { name: "Bolivia", countryCode: "bo" },
    { name: "Bosnia", countryCode: "ba" },
    { name: "Botswana", countryCode: "bw" },
    { name: "Bouvet Island", countryCode: "bv" },
    { name: "Brazil", countryCode: "br" },
    { name: "British Virgin Islands", countryCode: "vg" },
    { name: "Brunei", countryCode: "bn" },
    { name: "Bulgaria", countryCode: "bg" },
    { name: "Burkina Faso", countryCode: "bf" },
    { name: "Burma", countryCode: "mm", alias: "Myanmar" },
    { name: "Burundi", countryCode: "bi" },
    { name: "Caicos Islands", countryCode: "tc" },
    { name: "Cambodia", countryCode: "kh" },
    { name: "Cameroon", countryCode: "cm" },
    { name: "Canada", countryCode: "ca" },
    { name: "Cape Verde", countryCode: "cv" },
    { name: "Cayman Islands", countryCode: "ky" },
    { name: "Central African Republic", countryCode: "cf" },
    { name: "Chad", countryCode: "td" },
    { name: "Chile", countryCode: "cl" },
    { name: "China", countryCode: "cn" },
    { name: "Christmas Island", countryCode: "cx" },
    { name: "Cocos Islands", countryCode: "cc" },
    { name: "Colombia", countryCode: "co" },
    { name: "Comoros", countryCode: "km" },
    { name: "Congo", countryCode: "cd" },
    { name: "Congo Brazzaville", countryCode: "cg" },
    { name: "Cook Islands", countryCode: "ck" },
    { name: "Costa Rica", countryCode: "cr" },
    { name: "Cote Divoire", countryCode: "ci" },
    { name: "Croatia", countryCode: "hr" },
    { name: "Cuba", countryCode: "cu" },
    { name: "Cyprus", countryCode: "cy" },
    { name: "Czech Republic", countryCode: "cz" },
    { name: "Denmark", countryCode: "dk" },
    { name: "Djibouti", countryCode: "dj" },
    { name: "Dominica", countryCode: "dm" },
    { name: "Dominican Republic", countryCode: "do" },
    { name: "Ecuador", countryCode: "ec" },
    { name: "Egypt", countryCode: "eg" },
    { name: "El Salvador", countryCode: "sv" },
    { name: "England", countryCode: "gb eng" },
    { name: "Equatorial Guinea", countryCode: "gq" },
    { name: "Eritrea", countryCode: "er" },
    { name: "Estonia", countryCode: "ee" },
    { name: "Ethiopia", countryCode: "et" },
    { name: "Europeanunion", countryCode: "eu" },
    { name: "Falkland Islands", countryCode: "fk" },
    { name: "Faroe Islands", countryCode: "fo" },
    { name: "Fiji", countryCode: "fj" },
    { name: "Finland", countryCode: "fi" },
    { name: "France", countryCode: "fr" },
    { name: "French Guiana", countryCode: "gf" },
    { name: "French Polynesia", countryCode: "pf" },
    { name: "French Territories", countryCode: "tf" },
    { name: "Gabon", countryCode: "ga" },
    { name: "Gambia", countryCode: "gm" },
    { name: "Georgia", countryCode: "ge" },
    { name: "Germany", countryCode: "de" },
    { name: "Ghana", countryCode: "gh" },
    { name: "Gibraltar", countryCode: "gi" },
    { name: "Greece", countryCode: "gr" },
    { name: "Greenland", countryCode: "gl" },
    { name: "Grenada", countryCode: "gd" },
    { name: "Guadeloupe", countryCode: "gp" },
    { name: "Guam", countryCode: "gu" },
    { name: "Guatemala", countryCode: "gt" },
    { name: "Guinea", countryCode: "gn" },
    { name: "Guinea-Bissau", countryCode: "gw" },
    { name: "Guyana", countryCode: "gy" },
    { name: "Haiti", countryCode: "ht" },
    { name: "Heard Island", countryCode: "hm" },
    { name: "Honduras", countryCode: "hn" },
    { name: "Hong Kong", countryCode: "hk" },
    { name: "Hungary", countryCode: "hu" },
    { name: "Iceland", countryCode: "is" },
    { name: "India", countryCode: "in" },
    { name: "Indian Ocean Territory", countryCode: "io" },
    { name: "Indonesia", countryCode: "id" },
    { name: "Iran", countryCode: "ir" },
    { name: "Iraq", countryCode: "iq" },
    { name: "Ireland", countryCode: "ie" },
    { name: "Israel", countryCode: "il" },
    { name: "Italy", countryCode: "it" },
    { name: "Jamaica", countryCode: "jm" },
    { name: "Jan Mayen", countryCode: "sj", alias: "Svalbard" },
    { name: "Japan", countryCode: "jp" },
    { name: "Jordan", countryCode: "jo" },
    { name: "Kazakhstan", countryCode: "kz" },
    { name: "Kenya", countryCode: "ke" },
    { name: "Kiribati", countryCode: "ki" },
    { name: "Kuwait", countryCode: "kw" },
    { name: "Kyrgyzstan", countryCode: "kg" },
    { name: "Laos", countryCode: "la" },
    { name: "Latvia", countryCode: "lv" },
    { name: "Lebanon", countryCode: "lb" },
    { name: "Lesotho", countryCode: "ls" },
    { name: "Liberia", countryCode: "lr" },
    { name: "Libya", countryCode: "ly" },
    { name: "Liechtenstein", countryCode: "li" },
    { name: "Lithuania", countryCode: "lt" },
    { name: "Luxembourg", countryCode: "lu" },
    { name: "Macau", countryCode: "mo" },
    { name: "Macedonia", countryCode: "mk" },
    { name: "Madagascar", countryCode: "mg" },
    { name: "Malawi", countryCode: "mw" },
    { name: "Malaysia", countryCode: "my" },
    { name: "Maldives", countryCode: "mv" },
    { name: "Mali", countryCode: "ml" },
    { name: "Malta", countryCode: "mt" },
    { name: "Marshall Islands", countryCode: "mh" },
    { name: "Martinique", countryCode: "mq" },
    { name: "Mauritania", countryCode: "mr" },
    { name: "Mauritius", countryCode: "mu" },
    { name: "Mayotte", countryCode: "yt" },
    { name: "Mexico", countryCode: "mx" },
    { name: "Micronesia", countryCode: "fm" },
    { name: "Moldova", countryCode: "md" },
    { name: "Monaco", countryCode: "mc" },
    { name: "Mongolia", countryCode: "mn" },
    { name: "Montenegro", countryCode: "me" },
    { name: "Montserrat", countryCode: "ms" },
    { name: "Morocco", countryCode: "ma" },
    { name: "Mozambique", countryCode: "mz" },
    { name: "Namibia", countryCode: "na" },
    { name: "Nauru", countryCode: "nr" },
    { name: "Nepal", countryCode: "np" },
    { name: "Netherlands", countryCode: "nl" },
    { name: "Netherlandsantilles", countryCode: "an" },
    { name: "New Caledonia", countryCode: "nc" },
    { name: "New Guinea", countryCode: "pg" },
    { name: "New Zealand", countryCode: "nz" },
    { name: "Nicaragua", countryCode: "ni" },
    { name: "Niger", countryCode: "ne" },
    { name: "Nigeria", countryCode: "ng" },
    { name: "Niue", countryCode: "nu" },
    { name: "Norfolk Island", countryCode: "nf" },
    { name: "North Korea", countryCode: "kp" },
    { name: "Northern Mariana Islands", countryCode: "mp" },
    { name: "Norway", countryCode: "no" },
    { name: "Oman", countryCode: "om" },
    { name: "Pakistan", countryCode: "pk" },
    { name: "Palau", countryCode: "pw" },
    { name: "Palestine", countryCode: "ps" },
    { name: "Panama", countryCode: "pa" },
    { name: "Paraguay", countryCode: "py" },
    { name: "Peru", countryCode: "pe" },
    { name: "Philippines", countryCode: "ph" },
    { name: "Pitcairn Islands", countryCode: "pn" },
    { name: "Poland", countryCode: "pl" },
    { name: "Portugal", countryCode: "pt" },
    { name: "Puerto Rico", countryCode: "pr" },
    { name: "Qatar", countryCode: "qa" },
    { name: "Reunion", countryCode: "re" },
    { name: "Romania", countryCode: "ro" },
    { name: "Russia", countryCode: "ru" },
    { name: "Rwanda", countryCode: "rw" },
    { name: "Saint Helena", countryCode: "sh" },
    { name: "Saint Kitts and Nevis", countryCode: "kn" },
    { name: "Saint Lucia", countryCode: "lc" },
    { name: "Saint Pierre", countryCode: "pm" },
    { name: "Saint Vincent", countryCode: "vc" },
    { name: "Samoa", countryCode: "ws" },
    { name: "San Marino", countryCode: "sm" },
    { name: "Sandwich Islands", countryCode: "gs" },
    { name: "Sao Tome", countryCode: "st" },
    { name: "Saudi Arabia", countryCode: "sa" },
    { name: "Scotland", countryCode: "gb sct" },
    { name: "Senegal", countryCode: "sn" },
    { name: "Serbia", countryCode: "cs" },
    { name: "Serbia", countryCode: "rs" },
    { name: "Seychelles", countryCode: "sc" },
    { name: "Sierra Leone", countryCode: "sl" },
    { name: "Singapore", countryCode: "sg" },
    { name: "Slovakia", countryCode: "sk" },
    { name: "Slovenia", countryCode: "si" },
    { name: "Solomon Islands", countryCode: "sb" },
    { name: "Somalia", countryCode: "so" },
    { name: "South Africa", countryCode: "za" },
    { name: "South Korea", countryCode: "kr" },
    { name: "Spain", countryCode: "es" },
    { name: "Sri Lanka", countryCode: "lk" },
    { name: "Sudan", countryCode: "sd" },
    { name: "Suriname", countryCode: "sr" },
    { name: "Swaziland", countryCode: "sz" },
    { name: "Sweden", countryCode: "se" },
    { name: "Switzerland", countryCode: "ch" },
    { name: "Syria", countryCode: "sy" },
    { name: "Taiwan", countryCode: "tw" },
    { name: "Tajikistan", countryCode: "tj" },
    { name: "Tanzania", countryCode: "tz" },
    { name: "Thailand", countryCode: "th" },
    { name: "Timorleste", countryCode: "tl" },
    { name: "Togo", countryCode: "tg" },
    { name: "Tokelau", countryCode: "tk" },
    { name: "Tonga", countryCode: "to" },
    { name: "Trinidad", countryCode: "tt" },
    { name: "Tunisia", countryCode: "tn" },
    { name: "Turkey", countryCode: "tr" },
    { name: "Turkmenistan", countryCode: "tm" },
    { name: "Tuvalu", countryCode: "tv" },
    { name: "U.A.E.", countryCode: "ae", alias: "United Arab Emirates" },
    { name: "Uganda", countryCode: "ug" },
    { name: "Ukraine", countryCode: "ua" },
    { name: "United Kingdom", countryCode: "gb", alias: "uk" },
    { name: "United States", countryCode: "us", alias: "America" },
    { name: "Uruguay", countryCode: "uy" },
    { name: "US Minor Islands", countryCode: "um" },
    { name: "US Virgin Islands", countryCode: "vi" },
    { name: "Uzbekistan", countryCode: "uz" },
    { name: "Vanuatu", countryCode: "vu" },
    { name: "Vatican City", countryCode: "va" },
    { name: "Venezuela", countryCode: "ve" },
    { name: "Vietnam", countryCode: "vn" },
    { name: "Wales", countryCode: "gb wls" },
    { name: "Wallis and Futuna", countryCode: "wf" },
    { name: "Western Sahara", countryCode: "eh" },
    { name: "Yemen", countryCode: "ye" },
    { name: "Zambia", countryCode: "zm" },
    { name: "Zimbabwe", countryCode: "zw" },
  ];

  const list = () => (
    <div>
      <Box sx={{ display: "grids" }}>
        <List >
        
          <div className="container-image" >
            {detailpost.imageFile.map((img, index) => (
              <div className="modal-image">
                <img src={img} alt="not found" />
              </div>
            ))}
          </div>
        </List>
      </Box>

      {VistPreview && (
        <div class="overlay">
          <span onClick={Close} class="close-button-modal">
            &times;
          </span>

          <Carousel fade>
            {detailpost.imageFile.map((img, index) => (
              <Carousel.Item className="img-carrusel">
                <img src={img} alt="Not found" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );

  return (
    <div>
      <Header />

      <div className="bg-white">
        <div className="pt-6">
          {/* Image gallery */}
          {isLoading ? (
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <Skeleton variant="rectangular" id="skeleton1" />
              </div>
              <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg ">
                  <Skeleton variant="rectangular" id="skeleton2" />
                </div>
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                  <Skeleton variant="rectangular" id="skeleton2" />
                </div>
              </div>

              <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <Skeleton variant="rectangular" id="skeleton1" />
              </div>
            </div>
          ) : (
            <div>
                      {values.map((v, idx) => (
                                                    <div key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
                    <div className="title-continent">
                      <h1>{detailpost.title}</h1>
                      {/*    <h1 className="title">Lagos</h1> */}
                    </div>
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 fixed-image">
                      <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <img
                          src={detailpost.imageFile[0]}
                          /*   src={product.images[0].src} */
                          alt="Not found"
                          className="h-full w-full object-cover object-center hover-image"
                        />
                      </div>

                      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg ">
                          <img
                            src={detailpost.imageFile[1]}
                            /*  src={product.images[1].src} */
                            alt="Not found"
                            className="h-full w-full object-cover object-center hover-image"
                          />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                          <img
                            src={detailpost.imageFile[2]}
                            /* src={product.images[2].src} */
                            alt="Not found"
                            className="h-full w-full object-cover object-center hover-image"
                          />
                        </div>
                      </div>
                      <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img
                          src={detailpost.imageFile[3]}
                          /*  src={product.images[3].src} */
                          alt="Not found"
                          className="h-full w-full object-cover object-center hover-image"
                        />
                        
                      <div>
                          
                                             
           <Fab size="small" id="icons-details" aria-label="add">
                          <AddIcon />{detailpost.imageFile.length}
                        </Fab>
        </div>
                      </div>
                    </div>

                  </div>
                    ))}
                  <Modal show={detailsModal} fullscreen={fullscreen} onHide={() => setDetailsModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {list()}
          
        </Modal.Body>
      </Modal>
          </div>
            
          )}

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">

              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl flex-name">
  Anfitrión: {detailpost.Users && detailpost.Users[0].name }
   <div className="avatar-container">

    <Avatar
    sx={{

      width: 80,
      height: 80,
      backgroundColor: detailpost.Users && detailpost.Users[0].backgroundColor
    }}
    >
    {detailpost.Users && detailpost.Users[0].name[0].toUpperCase()}
  </Avatar>
    </div>
</h1>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Lugar para visitar.
              </h1>

              <div>
                {detailpost.continent}{" "}
                {/* <Flag name={countries[0].countryCode} /> */}{" "}
                {detailpost.country}
              </div>

              <div className="horizontal-line-with-o">
                <div className="line"></div> {/* Línea a la izquierda */}
              </div>
            </div>

            {/* Options */}
            <div
              className={detailpost.status === "Privado" ? "card-reserve" : ""}
            >
              <div className="mt-4 lg:row-span-3 lg:mt-0 ">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  {detailpost.price ? <span>${detailpost.price}</span> : null}
                  <div>
                    <div className="space-y-6">
                      <h3 className="text-base text-gray-900">
                        {detailpost.people ? (
                          <div>
                            <Diversity3RoundedIcon />
                            {detailpost.people} personas
                          </div>
                        ) : null}
                      </h3>
                    </div>
                    {detailpost.status === "Privado" ? (
                      <div style={wrapperStyle}>
                        <Space direction="vertical" size={12}>
                          <RangePicker
                            defaultValue={[
                              dayjs("2015/01/01", dateFormat),
                              dayjs("2015/01/01", dateFormat),
                            ]}
                            format={dateFormat}
                          />
                        </Space>
                      </div>
                    ) : null}
                  </div>
                </p>

                {/* Reviews */}

                <form className="mt-10">
                  {/* Colors */}

                  {/* Sizes */}
                  {detailpost.status === "Privado" ? (
                    <button
                      type="submit"
                      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 btn-reserve"
                    >
                      Reservar
                    </button>
                  ) :  null
                  /*   <div
                      type="submit"
                      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 btn-reserve"
                    >
                      Gratis
                    </div> */
                  }
                </form>
              </div>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}

              <div className="space-y-6">
                <p className="text-base text-gray-900">{detailpost.summary}</p>
              </div>
              {detailpost.status === "Privado" ? (
                <div>
                  <div className="horizontal-line-with-o">
                    <div className="line"></div> {/* Línea a la izquierda */}
                  </div>

                  <div className="mt-10">
                    <h2 className="text-sm font-medium text-gray-900">
                      Dias de atención al cliente de {detailpost.daysAtentions}.
                    </h2>

                    <p className="text-sm text-gray-600">
                      de {detailpost.hoursAtetionsInitial}am a{" "}
                      {detailpost.hoursAtentionsFinally}pm
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="mt-10">
                {detailpost.status === "Privado" ? (
                  <div>
                    <div className="horizontal-line-with-o">
                      <div className="line"></div> {/* Línea a la izquierda */}
                    </div>
                    <h3 className="text-sm font-medium text-gray-900">
                      El lugar cuenta con:
                    </h3>

                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-sm"
                    >
                      {detailpost.listDetails &&
                        detailpost.listDetails.map((list) => (
                          <li className="text-gray-400">
                            <span className="text-gray-600">{list}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                ) : null}

                <div className="mt-10">
                  {detailpost.status === "Privado" ? (
                    <div>
                      <div className="horizontal-line-with-o">
                        <div className="line"></div>{" "}
                        {/* Línea a la izquierda */}
                      </div>
                      <h2 className="text-sm font-medium text-gray-900">
                        información importante
                      </h2>

                      <p className="text-sm text-gray-600">
                        <ul
                          role="list"
                          className="list-disc space-y-2 pl-4 text-sm"
                        >
                          {detailpost.infoImportant &&
                            detailpost.infoImportant.map((list) => (
                              <li className="text-gray-400">
                                <span className="text-gray-600">{list}</span>
                              </li>
                            ))}
                        </ul>
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="horizontal-line-with-o">
                  <div className="line"></div> {/* Línea a la izquierda */}
                </div>
                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">
                    Descripción
                  </h2>

                  <p className="text-sm text-gray-600">
                    {detailpost.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
