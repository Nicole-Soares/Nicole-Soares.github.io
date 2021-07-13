import React from "react";

let apiKey = process.env.REACT_APP_GIPHY_API_KEY;
let url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;
