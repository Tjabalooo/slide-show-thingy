import { useState } from 'react';
import { Page } from './Page';
import Pages from './Pages';

const pageArray = [Pages.Equality, Pages.Decorate];

export const App = () => {

  const [pageIndex, setPageIndex] = useState(0);

  const pageContent = pageArray[pageIndex];

  const nextPage = () => {
    if (pageIndex+1 < pageArray.length) {
      setPageIndex(pageIndex+1);
    }
  };

  const previousPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex-1);
    }
  };

  const nextButtonStyle = {
    'position': 'relative',
    'width': '40px',
    'height': '30px',
    'margin-bottom': '20px',
    'margin-right': '20px'
  };

  const previousButtonStyle = {

  };

  return (
    <>
      <Page title={pageContent.Title} outputCallback={pageContent.Output} />
      <div style={previousButtonStyle} onClick={previousPage}>BACK</div>
      <div style={nextButtonStyle} onClick={nextPage}>NEXT</div>
    </>
  );
}