import { useParams } from "react-router-dom";
import { useRef, useEffect } from 'react';

const { tableau } = window;

const DashBoard = () => {
  const { dashboardName } = useParams();
  const ref = useRef(null)

  const url = 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms'
  const options = {
    hideTabs: true,
    onFirstInteractive: function () {
      console.log("Run this code when the viz has finished loading.");
    }
  };

  const initViz = () => {
    new tableau.Viz(ref.current, url, options);
  }

  // useEffect(() => {
  //   initViz();
  // }, []);

  return (
    <div>
      <h1>This is Tableau dashboard - {dashboardName}</h1>
      <div ref={ref} />
    </div>
  );
};

export default DashBoard;
