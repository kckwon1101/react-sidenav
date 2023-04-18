import { useParams, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import QueryString from 'qs';

const DashBoard = () => {
  const { dashboardName } = useParams();
  const location = useLocation();
  const queryData = QueryString.parse(location.search, { ignoreQueryPrefix: true });
  console.log(location);
  console.log(queryData.url);
  console.log(queryData.url === '');
  useEffect(() => {

  }, [dashboardName]);

  if (queryData.url === undefined || queryData.url === '') {
    return (
      <div>Has No Tableau URL</div>
    )
  }

  return (
    <div className="">
      <tableau-viz id="tableauViz"
                   src={queryData.url || ''}
                   toolbar="bottom"
                   width="300px"
      >
      </tableau-viz>
    </div>
  );
};

export default DashBoard;
