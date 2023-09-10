import Home from "../pages/Home";
import { NotFound } from "../pages";
import { Header, Footer } from "../layouts";
import  {useState, useEffect} from 'react'
import { IResultProps } from '../types/Home';

const BrowserRouter = require("react-router-dom").BrowserRouter;
const Routes = require("react-router-dom").Routes;
const Route = require("react-router-dom").Route;

function Index() {
  const [result, setResult] = useState<IResultProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://api.spacexdata.com/v5/launches", {
        method: "GET"
      });
      console.log(data)
      const jsonData = await data.json();
      setResult(jsonData);
    };

    api();
  }, []);

  return (
    <div className="Index">
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element= {<Home /> }/>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>

  );
}

export default Index;
