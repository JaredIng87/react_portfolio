import React, { useState } from 'react';
import NavTabs from './NavTabs';
import { PageContent } from './pages/Content';
import PageComponent from './pages/PageComponent';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    const pageContent = PageContent.find(p => p.page === currentPage)
    return (
    <PageComponent
        header= {pageContent.header}
        content= {pageContent.content}
        />
        );
    };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
