import { useState } from 'react';
import { Page } from './Page';
import Pages from './Pages';

const pageArray = [Pages.Equality, Pages.Decorate, Pages.ForLoops];

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

  const buttonAreaStyle = {
    'position': 'fixed',
    'width': '95%',
    'bottom': '10%',
    'display': 'flex',
    'flex-wrap': 'nowrap',
    'justify-content': 'space-between'
  };

  const buttonStyle = {
    'width': '80px',
    'height': '40px'
  };

  return (
    <>
      <Page title={pageContent.Title} outputCallback={pageContent.Output} />
      <div style={buttonAreaStyle}>
        <button style={buttonStyle} onClick={previousPage}>&#9664;&#9664;</button>
        <button style={buttonStyle} onClick={nextPage}>&#9654;&#9654;</button>
      </div>
    </>
  );
}