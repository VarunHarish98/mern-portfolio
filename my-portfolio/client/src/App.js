import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/main";
import { useEffect } from "react";
import Loader from "./Components/Loader";
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, SetPortfolioData, ShowLoading } from "./redux/rootSlice";
import Admin from "./pages/Admin";
import { serverAPIURI } from "./utils/constants";

export default function App() {
  const { loading, portfolioData } = useSelector(state => state.root)
  const dispatch = useDispatch()
  const getData = async () => {
    try {
      dispatch(ShowLoading())
      const resp = await axios.get(`${serverAPIURI}/api/v1/portfolio/get-portfolio-data`)
      dispatch(SetPortfolioData(resp?.data))
      dispatch(HideLoading())
    } catch (error) {
      dispatch(HideLoading())
    }
  }

  useEffect(() => {
    if (!portfolioData)
      getData()
  }, [portfolioData])

  return (
    <BrowserRouter >
      {loading ? <Loader /> : null}
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}
