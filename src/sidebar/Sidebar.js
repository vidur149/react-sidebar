import React, { useCallback } from 'react';
import { getData } from '../utils';
import List from '@material-ui/core/List';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import ListItemText from '@material-ui/core/ListItemText';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import UhootIcon from '../assets/uhooticon.png';
import Loader from '../assets/loading.gif';
import { ReactComponent as Sad } from '../assets/sad.svg';
import { ReactComponent as Flat } from '../assets/flat.svg';
import { ReactComponent as Happy } from '../assets/happy.svg';
import { GlobalStyle } from './styles';
import { SETTINGS_API, CATEGORY_API } from '../constants';

const cats = ['All', 'Announcement', 'Beta', 'Blog', 'Coming Soon', 'Feature', 'Improvement', 'New', 'Other'];

const catColors = ['#8da2b5', '#ffae1b', '#ff5a80', '#fbae4e', '#59d457', '#9eccaf', '#71c4ff', '#ff5a80', '#26c6da'];

export const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);
  const [pageNo, setPageNo] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(true);
  const [showCats, setShowCats] = React.useState(false);
  const [blogs, setBlogs] = React.useState([]);
  const blogsContainerEle = React.useRef(null);
  const [title, setTitle] = React.useState('');
  const [isSearchFocused, setFocus] = React.useState(false);

  React.useEffect(() => {
    const fetchSettings = async () => {
      const settings = await getData(SETTINGS_API);
    };
    const fetchCategories = async () => {
      const cats = await getData(CATEGORY_API);
    };
    fetchSettings();
    fetchCategories();
  }, []);

  const getBlogs = useCallback(async (
    no,
    force = false,
    searchString = "",
    cat = ""
  ) => {
    if ((hasMore && !loading) || force) {
      setLoading(true);
      setPageNo(no);
      const res = await getData(
        `https://app.userhoot.com/post/list?page=${no}&projectkey=C81E728D9D4C2F636F067F89CC14862C&title=${searchString}&category=${cat}`
      );
      setLoading(false);
      setHasMore(res.has_more);
      let newBlogs = force ? [] : [...blogs];
      newBlogs = newBlogs.concat(res.data);
      setBlogs(newBlogs);
    }
  }, [hasMore, loading, blogs]);

  const toggle = useCallback(async () => {
    if (!isSidebarOpen) {
      setBlogs([]);
      setSidebarOpen(true);
      await getBlogs(1, true);
      if (blogsContainerEle.current) {
        blogsContainerEle.current.scrollTop = 0;
      }
    } else {
      setBlogs([]);
      setShowCats(false);
      setSidebarOpen(false);
    }
  }, [isSidebarOpen, blogsContainerEle, getBlogs]);

  const fetchBlogs = useCallback(async () => {
    if (blogsContainerEle && blogsContainerEle.current) {
      if (
        blogsContainerEle.current.scrollTop + 20 > blogsContainerEle.current.clientHeight
      ) {
        if (!loading) {
          await getBlogs(pageNo + 1);
        }
      }
    }
  }, [blogsContainerEle, getBlogs, pageNo, loading]);

  React.useEffect(() => {
    const toggleLink = document.getElementById('toggle-sidebar');
    const toggleButton = document.getElementById('uh-toggle-btn');
    if (toggleLink) {
      toggleLink.addEventListener('click', toggle);
    }
    if (toggleButton) {
      toggleButton.addEventListener('click', toggle);
    }

    return (
      () => {
        if (toggleLink) {
          toggleLink.removeEventListener('click', toggle);
        }
        if (toggleButton) {
          toggleButton.removeEventListener('click', toggle);
        }
      }
    );
  }, [toggle]);

  React.useEffect(() => {
    if (blogsContainerEle && blogsContainerEle.current) {
      let current = blogsContainerEle.current;
      current.addEventListener('scroll', fetchBlogs);
      return (
        () => {
          current.removeEventListener('scroll', fetchBlogs);
        }
      );
    }
  }, [blogsContainerEle, fetchBlogs]);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const closeSearch = () => {
    setTitle('');
    setShowCats(false);
    setBlogs([]);
    getBlogs(1, true);
  };

  const handleSearch = (event) => {
    setFocus(false);
    setTitle(event.target.value);
    getBlogs(1, true, event.target.value);
  };

  const handleCategorySearch = (cat) => {
    setTitle(`#${cat}`);
    setFocus(false);
    getBlogs(1, true, title, cat);
  }

  const renderBlogs = () => {
    if (!loading && !blogs.length) {
      return (
        <div className="uh-no-posts">
          <h4>No pots to display yet</h4>
          <Sad />
        </div>
      );
    }

    return (
      <>
        <div id="uh-blogs" ref={blogsContainerEle}>
          {blogs.map(blog => (
            <div key={blog.id} className="uh-post">
              <div className="uh-post-content">
                <div className="uh-post-title">
                  <span className="uh-post-status">{blog.status}</span>
                  <span className="uh-post-date">{blog.created_at.date}</span>
                </div>
                <div className="uh-post-heading">
                  {blog.title}
                  {blog.category_title ? ` - ${blog.category_title}` : ''}
                </div>
                <div dangerouslySetInnerHTML={{ __html: blog.post_content }} />
              </div>
              <div className="uh-fb-form">
                <div className="uh-fb-container">
                  <div className="uh-feedback">
                    <Sad />
                    <Flat />
                    <Happy />
                  </div>
                  <TextareaAutosize
                    className="uh-fb-text"
                    aria-label="empty textarea" placeholder="Send us your feedback"
                  />
                </div>
              </div>
            </div>
          ))}
          {loading &&
            <div id="uh-loader">
              <img src={Loader} alt="loader" />
            </div>
          }
        </div>
      </>
    );
  }

  const renderNavBody = () => {
    if (!showCats) {
      return (
        <div className="uh-sidebar-container">
          <div className="uh-sidenav-title">
            <div>What's new ?</div>
            <div>
              <SearchIcon id="uh-search" onClick={() => setShowCats(true)} />
              <CloseIcon id="uh-close-sidenav" onClick={closeSidebar} />
            </div>
          </div>
          {renderBlogs()}
        </div>
      );
    }

    if (showCats) {
      return (
        <div className="uh-sidebar-container">
          <div className="uh-sidenav-search">
            <div>
              <KeyboardArrowLeftIcon
                id="uh-left"
                onClick={closeSearch}
              />
            </div>
            <div style={{ width: '100%' }}>
              <FormControl fullWidth>
                <Input
                  size="small"
                  fullWidth
                  value={title}
                  onChange={handleSearch}
                  id="uh-search-input"
                  placeholder="Search in this feed"
                  disableUnderline
                  endAdornment={
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  }
                  onFocus={() => {
                    if (title[0] === '#') {
                      setFocus(true);
                    }
                  }}
                />
              </FormControl>
            </div>
          </div>
          {(!title) || isSearchFocused ? <div id="uh-cats">
            <List className="uh-cats" component="nav" aria-label="secondary mailbox folders">
              {cats.map((cat, index) => (
                <ListItem
                  button
                  key={cat}
                  onClick={() => handleCategorySearch(cat)}
                >
                  <span className="uh-list-icon" style={{ background: catColors[index] }} />
                  <ListItemText
                    style={{ color: 'rgb(75, 99, 175)' }}
                    primary={cat}
                  />
                </ListItem>
              ))}
            </List>
          </div> : renderBlogs()}
        </div>
      );
    }
  }

  return (
    <>
      <GlobalStyle width="320" />
      <img src={UhootIcon} alt="toggle-sidebar" id="uh-toggle-btn" />
      <Drawer
        className={isSidebarOpen ? 'uh-sidenav uh-showSideNav' : 'uh-sidenav'}
        anchor="right"
        open={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
      >
        {renderNavBody()}
      </Drawer>
    </>
  );
}