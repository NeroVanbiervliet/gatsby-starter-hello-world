import './index.css';
import React, {useState, useEffect} from "react"

const URL_WITHOUT_PARAMS = 'http://localhost:8000/';

const getUrl = (location) => {
   return URL_WITHOUT_PARAMS + location.search;
}

export default function Home({ location }) {
  const [url, setUrl] = useState(getUrl(location))
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(typeof window !== 'undefined');
    setUrl(getUrl(location))
  }, []);

  const invalidClass = url === URL_WITHOUT_PARAMS ? 'invalid' : '';
  return <div className={invalidClass}>{`URL = ${url}`}</div>
}
