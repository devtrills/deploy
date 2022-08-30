import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
// import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Aug 26, 2022 7:02 PM EDT" text="Tyson pork plant in Indiana suspended from exporting to China -USDA" />
        <Article imgUrl={blog03} date="Aug 26, 2022 6:56 PM EDT" text="Freight railroads, some unions reach contract deals covering 15,000 U.S. workers" />
        <Article imgUrl={blog04} date="Aug 26, 2022 6:01 PM EDT" text="Finnish Olkiluoto 3 nuclear reactor back on grid after disturbance" />
        <Article imgUrl={blog05} date="Aug 26, 2022 5:38 PM EDT, " text="Software firm Corcentric, SPAC North Mountain end $1.2-billion deal" />
      </div>
    </div>
  </div>
);

export default Blog;
