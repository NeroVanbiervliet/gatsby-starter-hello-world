import './index.css';
import React, {useState} from "react"

const NO_URL = 'NO URL';

const getUrl = () => {
  if ((typeof window) === 'undefined') {
    return NO_URL;
  }

  return window.location.href;
}

export default function Home() {
  const [url, setUrl] = useState(getUrl())
  const invalidClass = url === NO_URL ? 'invalid' : '';
  return <div className={invalidClass}>{`URL = ${url}`}</div>
}
