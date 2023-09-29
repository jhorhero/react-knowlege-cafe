// import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleAddBookmark, handleMarkASread}) => {
    const {title, cover, author_img, reading_time,author,posted_date, hashtags} = blog;
    return (
        <div className="mb-20 space-y-4">
            <img className="w-full mb-8" src={cover} alt={`Cover picure of the title ${title}`} />
            <div className="flex justify-between">
                <div className="flex ">
                <img className="w-14" src={author_img}
                 alt="" />
                 <div className="ml-6">
                    <h3 className="text-2xl">{author}</h3>
                    <p>{posted_date}</p>
                 </div>
                </div>
                <div>
            <span>{reading_time} min {}read</span>
            <button 
            onClick={() => handleAddBookmark(blog)}
             className='ml-2 text-red-400 text-2xl'><FaBookmark></FaBookmark> </button>  
                </div>
            </div>
            <h1 className='text-4xl'>{title}</h1>
            <p>
                {
                    hashtags.map((hash,idx) => <span  key={idx}><a  href="">#{hashtags}</a></span>)
                }
            </p>
            <button onClick={()=> handleMarkASread(reading_time)} className='text-purple-600 underline'>Mark as Read</button>
        </div>
    );
};



export default Blog;