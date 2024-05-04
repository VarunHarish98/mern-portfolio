// import { Main } from "./Components/Main";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/main";
import { useEffect } from "react";
import Loader from "./Components/Loader";
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { SetPortfolioData } from "./redux/rootSlice";

export default function App() {
  // const [showLoading, setShowLoading] = useState(false)
  const { loading } = useSelector(state => state.root)
  const dispatch = useDispatch()
  const getData = async () => {
    try {
      const resp = await axios.get('/api/v1/portfolio/get-portfolio-data')
      dispatch(SetPortfolioData(resp?.data))
      console.log(resp?.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  })

  // useEffect(() => {
  //   console.log(portfolioData)
  // }, [portfolioData])
  return (
    <BrowserRouter >
      {loading ? <Loader /> : null}
      <Routes >
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}