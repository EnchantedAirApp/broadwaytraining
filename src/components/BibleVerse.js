import React, { useState, useEffect } from 'react';
import JSONToHTML from './JSONToHTML';
import './BibleVerse.css';

const BibleVerse = () => {
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://labs.bible.org/api/?formatting=para&passage=random&type=json')
      .then((response) => {
        if (!response.ok) {
          console.log(response.status)
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setVerse(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="verse-card">
      {verse && (
        <div>
          <strong>{verse.bookname} {verse.chapter}:{verse.verse}</strong><br/><br/>
          <JSONToHTML Content={verse.text}/>
        </div>
      )}
    </div>
  );
};

export default BibleVerse;
