import React from 'react';

import './index.css';

interface ResultItemProps {
  title: string;
  uri: string;
  prixnum: number;
  pays: string;
  categorie: string;
  thumbnailuri: string;
}

const ResultItem: React.FC<ResultItemProps> = ({
  title,
  uri,
  prixnum,
  pays,
  categorie,
  thumbnailuri
}) => {
  return (
    <div className="results-item">
      <a
        href={uri}
        target="_blank"
        rel="noopener noreferrer"
        className="results-img-container"
      >
        <img src={thumbnailuri} alt={'Image of ' + title}></img>
      </a>
      <a
        href={uri}
        target="_blank"
        rel="noopener noreferrer"
        className="results-title"
      >
        {title}
      </a>
      <div className="results-pays-prix">
        {pays + ' $' + prixnum.toFixed(2)}
      </div>
      <div className="results-categorie">{categorie}</div>
    </div>
  );
};

export default ResultItem;
