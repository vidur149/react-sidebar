import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  #uh-sidebar {
    font-family: Helvetica;
  }

  div,
  nav,
  span {
    box-sizing: border-box;
  }

  #uh-toggle-btn {
    position: fixed;
    bottom: 20px;
    width: 60px;
    height: 60px;
    right: ${props => props.iconPos === 'left' ? 'calc(100% - 80px)' : '20px'};
    cursor: pointer;
    z-index: 999;
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
    font-family: Helvetica;
    position: static !important;
    background-color: #f7f7f7;
    box-sizing: border-box;
    box-shadow: -1px -1px 15px #0000006b;
  }

  .uh-sidebar-container {
    width: ${props => props.width + 'px'};
  }

  .uh-sidenav-title {
    align-items: center;
    position: static;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    color: ${props => props.brandColor || 'white'};
    background: ${props => props.brandBg || '#000000'};
    font-family: ${props => props.brandFont || 'Helvetica'};
    font-size: ${props => props.brandSize || '20px'};
    font-weight: ${props => props.brandWeight || '600'};
    min-height: 74px;
  }

  .uh-sidenav-search {
    position: static;
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
    height: calc(100vh - 99px);
    overflow-y: auto;
    padding: 10px;
  }

  .uh-post {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-color: rgb(66, 66, 66);
    margin-bottom: 15px;
    background: ${props => props.bodyBg || 'white'};
    font-family: ${props => props.bodyFont};
    color: ${props => props.bodyColor || 'rgb(66, 66, 66)'};
    font-size: ${props => props.bodySize || '14px !important'};
    font-weight: ${props => props.bodyWeight || '400'};
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
    color: ${props => props.dateColor || '#8da2b5'};
    font-size: ${props => props.dateSize};
    font-weight: ${props => props.dateWeight || '400'};
  }

  .uh-post-heading {
    font-family: ${props => props.titleFont};
    font-size: ${props => props.titleSize || '20px'};
    font-weight: ${props => props.titleWeight || '700'};
    color: ${props => props.titleColor || '#4b63af'};
    margin-bottom: 15px;
    line-height: 1.4;
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
    top: -35px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60px;
  }

  .uh-feedback svg {
    width: 32px;
    transition: all 0.1s ease-in-out;
    height: 32px;
    box-shadow: 0 1px 2px rgba(0,0,0,.08), 0 1px 2px rgb(209, 209, 209);
    border-radius: 100%;
    margin: 5px;
    cursor: pointer;
  }

  svg.uh-selected >g path:first-child {
    fill: #ffcc80;
  }

  svg.uh-selected >g path:nth-child(2) {
    fill: #ffb74d;
  }

  svg.uh-selected {
    width: 38px;
    height: 38px;
  }

  .uh-feedback svg:hover {
    width: 38px;
    height: 38px;
  }

  .uh-feedback svg:hover >g path:first-child {
    fill: #ffcc80;
  }

  .uh-feedback svg:hover >g path:nth-child(2) {
    fill: #ffb74d;
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
    min-height: 100px !important;
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

  .uh-no-posts {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-color: rgb(66, 66, 66);
    background: white;
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #d1d1d1;
  }

  .uh-no-posts svg {
    width: 30px;
    height: 30px;
  }

  .uh-no-posts svg g {
    fill: #d1d1d1;
  }
  
  .uh-fb-container {
    position: relative;
  }

  .uh-send-icon {
    position: absolute;
    bottom: -10px;
    right: -10px;
    cursor: pointer;
  }

  .uh-email {
    outline: none;
    border: 1px solid #eaeaea;
    border-radius: 2px;
    overflow: hidden;
    padding: 9px 7px 7px;
    box-sizing: border-box;
    width: 100%;
    background: white;
  }

  .uh-email input {
    padding: 0;
    font-size: 13px;
  }

  .uh-fb-sent {
    font-size: 13px;
    color: rgb(66, 66, 66);
    display: flex;
    align-items: center;
  }

  .uh-fb-sent svg{
    margin-right: 6px;
    fill: #00d8a6
  }

  .uh-link {
    text-decoration: none;
    color: ${props => props.linkColor || '#4b63af'};
  }

  .uh-banner-fixed {
    color: rgb(119, 118, 120);
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .uh-banner-fixed p {
    margin: 5px 0px;
  }

  .uh-banner-fixed img {
    width: 20px;
    margin-right: 10px;
  }
`;