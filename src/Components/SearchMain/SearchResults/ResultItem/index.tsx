import React from 'react';

interface ResultItemProps {
  title: string;
  uri: string;
  prixnum: number;
  pays: string;
  millesime: string;
  thumbnailuri: string;
}

const ResultItem: React.FC<ResultItemProps> = ({
  title,
  uri,
  prixnum,
  pays,
  millesime,
  thumbnailuri
}) => {
  return (
    <div className="results-item">
      {title + ' ' + prixnum + ' ' + pays + ' ' + millesime}
    </div>
  );
};

export default ResultItem;
