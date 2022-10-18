// import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import { fetchArticles } from "../redux/IndonesiaSlice";

function IndonesiaPages() {
  const allArticles = useSelector((state) => state.articles.dataArticles);
  const dispatch = useDispatch();

  dispatch(fetchArticles());

  console.log("allArticles", allArticles);

  return <div></div>;
}

export default IndonesiaPages;
