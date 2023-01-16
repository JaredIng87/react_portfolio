import React, { useState } from 'react';
import NavTabs from './NavTabs';
import { PageContent } from './pages/Content';
import PageComponent from './pages/PageComponent';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

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
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
