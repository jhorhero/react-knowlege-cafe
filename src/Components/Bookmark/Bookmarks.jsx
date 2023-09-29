import Bookmark from "../../Bookmark/Bookmark";


const Bookmarks = ({bookmarks,readingmarks}) => {
    return (
        <div className='md:w-1/3 bg-gray-300 ml-4 mt-4'>
            <div>
                <h3 className="text-4xl text-center border-2">Reading-Time:{readingmarks}</h3>
            </div>
            <h2 className="text-3xl text-center ">Bookmarks Blog: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark
                key={bookmark.id}
                    bookmark={bookmark}
                ></Bookmark>)
            }

        </div>
    );
};

export default Bookmarks;