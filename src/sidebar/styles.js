import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

div,
nav,
span {
  box-sizing: border-box;
}

#uh-toggle-btn {
  position: fixed;
  bottom: 0;
  right: 0;
  cursor: pointer;
}

#uh-close-sidenav,
#uh-search,
#uh-left {
  cursor: pointer;
  margin-right: 4px;
}

.uh-sidenav img {
  width: 100%;
  object-fit: cover;
}

.uh-sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #f7f7f7;
  overflow-x: hidden;
  transition: 0.2s;
  box-sizing: border-box;
  box-shadow: -1px -1px 15px #0000006b;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.uh-showSideNav {
  width: 400px;
}

.uh-sidenav-title {
  align-items: center;
  position: fixed;
  width: 400px;
  top: 0;
  transition: top 0.5s ease;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  color: white;
  background: linear-gradient(180deg, #3d50e0 0, #3d50e0ab 100%);
}

.uh-sidenav-search {
  position: fixed;
  width: 400px;
  top: 0;
  transition: top 0.5s ease;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  color: rgb(66, 66, 66);
  background: white;
  border: 1px solid #e8e8e8;
  align-items: center;
}

#uh-blogs,
#uh-cats {
  margin-top: 67px;
  height: calc(100vh - 67px);
  overflow-y: auto;
  padding: 10px;
}

.uh-post {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-color: rgb(66, 66, 66);
  margin-bottom: 15px;
  color: rgb(66, 66, 66);
  background: white;
}

.uh-post-content {
  padding: 15px;
}

.uh-post-title {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.uh-post-status {
  background: #ffae1b;
  padding: 4px 6px;
  font-size: 10px;
  color: #fff;
  border-radius: 10px;
  margin-right: 5px;
  overflow: hidden;
  text-transform: uppercase;
}

.uh-post-date {
  color: #8da2b5;
}

.uh-post-heading {
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 1.4;
  color: #4b63af;
  font-size: 20px;
}

.uh-list-icon {
  width: 8px;
  height: 8px;
  border-radius: 10px;
  margin-right: 10px;
}

.uh-fb-container {
  position: relative;
}

.uh-feedback {
  position: absolute;
  width: 100%;
  top: -56px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
}

.uh-feedback svg {
  width: 40px;
  transition: all 0.1s ease-in-out;
  height: 40px;
  border: 2px solid white;
  border-radius: 100%;
  margin: 5px;
  cursor: pointer;
}

.uh-feedback svg g {
  fill: #d1d1d1;
}

.uh-feedback svg g:hover {
  fill: #ffcc4d;
}

.uh-feedback svg:hover {
  width: 45px;
  height: 45px;
}

.uh-feedback svg:hover g {
  fill: #ffcc4d;
}

.uh-fb-form {
  background: rgba(156, 156, 156, 0.1);
  padding: 10px;
  margin-top: 20px;
  border-top: 1px solid rgba(195, 193, 193, 0.45);
  position: relative;
  padding-top: 22px;
  height: auto;
  min-height: 65px;
}

.uh-fb-text {
  outline: none;
  border: 1px solid #eaeaea;
  border-radius: 2px;
  font-size: 13px;
  overflow: hidden;
  padding: 9px 7px 7px;
  resize: none;
  min-height: 32px;
  box-sizing: border-box;
  width: 100%;
  transition: min-height 0.25s ease-in-out;
}

.uh-fb-text:focus {
  min-height: 60px !important;
}

#uh-loader {
  width: 100%;
  display: flex;
  justify-content: center;
}

#uh-loader img {
  width: 100px;
  height: 75px;
}
`;