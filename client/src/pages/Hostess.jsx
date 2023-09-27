
import Header from '../components/Header';
import HostessPosts from '../components/Hostess/HostessPosts';
import { useState, useEffect } from 'react';
import BeatLoader from "react-loading";
import './../Loading.scss';
function Hostess() {


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Cambiar el estado a "false" después de cierto tiempo
    }, 1000);
  }, []);

  return (
    <>
    <div>

    <Header/>
    </div>
    {isLoading ? (
        <div className="loading-container">
          <BeatLoader color="#8B008B" size="80" />
        </div>
      ) : (
    <div>
  <HostessPosts/>

      </div>
        )}
      <div>

      </div>
        </>
  );
}

export default Hostess;