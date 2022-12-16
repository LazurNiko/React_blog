import React from 'react';

export const HomePage = (props) => (
  <section className="article_home">
      <h1 className="page_title">Welcome to World of Wonders!</h1>
      <p className="article_paragraph">Here you can learn more about most popular Wonders of 
      the World. The Seven Wonders of the World is a compiled list of monuments 
      from all over the world that excel in unique architecture, craftsmanship and 
      ingenuity. The included catalogue includes the best natural wonders or human-built 
      monuments over time. The list has been modified and changed over time, but here is 
      the latest compilation of the seven wonders of the world as of 2020.</p>
      <p className="article_paragraph">You can comment each article and upvote your favorite place. Please create account 
        (log in) to share your thoughts!
      </p>
      <div className="footer-container">
      <footer className="footer">
    Copyright {new Date().getFullYear()}
  </footer>
      </div>
  </section>
)
