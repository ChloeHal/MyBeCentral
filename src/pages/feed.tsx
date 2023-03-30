import Post from "../component/Post/Post";
import SideBar from "../component/SideBar/SideBar";
import Navbar from "../component/Navbar/navbar";
import { useState, useEffect } from "react";
import posts from "../assets/backend/posts";
import { Filters } from "../assets/interface/Filters";
import Notification from "../component/Notification/Notification";
import MessageInput from "../component/Post/MessageInput";
import DragDrop from "../component/Drag&drop/Dragdrop";
import GoBackTop from "../component/GoBackTop/GoBackTop";

function Feed() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };
  const [filter, setFilter] = useState<Filters>({});
  const [noPost, setNoPost] = useState(false);
  const handleFilterChange = (newFilter: Filters) => {
    setFilter(newFilter);
    setNoPost(false);
  };
  const matchingAllFilters = Object.values(posts).filter((post) => {
    const selectedCompanies = Object.keys(filter).filter(
      (company) => filter[company]
    );
    const selectedSubjects = Object.keys(filter).filter(
      (subject) => filter[subject]
    );
    return (
      selectedCompanies.every((company) => post.company.includes(company)) &&
      selectedSubjects.every((subject) => post.subject.includes(subject))
    );
  });

  const matchingSomeFilters = Object.values(posts).filter((post) => {
    const selectedCompanies = Object.keys(filter).filter(
      (company) => filter[company]
    );
    const selectedSubjects = Object.keys(filter).filter(
      (subject) => filter[subject]
    );
    return (
      selectedCompanies.length === 0 ||
      selectedCompanies.some((company) => post.company.includes(company)) ||
      selectedSubjects.some((subject) => post.subject.includes(subject))
    );
  });

  useEffect(() => {
    if (
      Object.keys(filter).some((company) => filter[company]) &&
      matchingAllFilters.length === 0 &&
      matchingSomeFilters.length <
        Object.values(filter).filter((value) => value === true).length
    ) {
      setNoPost(true);
    } else {
      setNoPost(false);
    }
  }, [filter, matchingAllFilters]);

  const hasFilteredPosts = matchingAllFilters.length > 0;
  const noPostsFilter = Object.entries(filter)
    .filter(
      ([key, value]) =>
        value &&
        !matchingSomeFilters.some((post) => post.company.includes(key)) &&
        !matchingSomeFilters.some((post) => post.subject.includes(key))
    )
    .map(([key]) => key)
    .join(", ");
  console.log(
    matchingSomeFilters.length,
    Object.values(filter).filter((value) => value === true).length
  );
  return (
    <>
      <GoBackTop />
      <Navbar />
      <div className="mt-12 bg-whitish dark:bg-dark">
        <SideBar
          onChange={handleFilterChange}
          isOpen={isSidebarOpen}
          toggleSideBar={toggleSideBar}
        />
        {hasFilteredPosts ? (
          <div className={isSidebarOpen ? "lg:ml-[451.25px]" : "lg:mx-60"}>
            <MessageInput
              onSubmit={(message) => {
                console.log(message);
              }}
            />
            {matchingAllFilters.map((post) => (
              <Post
                id={post.id}
                key={post.id}
                name={post.name}
                picture={post.picture}
                poste={post.poste}
                company={post.company}
                texte={post.texte}
                ashtag={post.ashtag}
                commentsProps={post.comments}
                postAcommentProps={post.picture}
              />
            ))}
          </div>
        ) : matchingSomeFilters.length === 0 ? (
          <div className="lg:ml-[451.25px]">
            <MessageInput
              onSubmit={(message) => {
                console.log(message);
              }}
            />
            {Object.values(posts).map((post) => (
              <Post
                id={post.id}
                key={post.id}
                name={post.name}
                picture={post.picture}
                poste={post.poste}
                company={post.company}
                texte={post.texte}
                ashtag={post.ashtag}
                commentsProps={post.comments}
                postAcommentProps={post.picture}
              />
            ))}
            <Notification
              text={`Sorry, there are no posts for ${noPostsFilter}`}
              title="Oops"
            />
          </div>
        ) : (
          <div className="lg:ml-[451.25px]">
            <MessageInput
              onSubmit={(message) => {
                console.log(message);
              }}
            />
            {matchingSomeFilters.map((post) => (
              <Post
                id={post.id}
                key={post.id}
                name={post.name}
                picture={post.picture}
                poste={post.poste}
                company={post.company}
                texte={post.texte}
                ashtag={post.ashtag}
                commentsProps={post.comments}
                postAcommentProps={post.picture}
              />
            ))}
            {noPost && matchingSomeFilters.length > 0 && (
              <Notification
                text={`Sorry, there are no posts for ${noPostsFilter}`}
                title="Oops"
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}
export default Feed;
