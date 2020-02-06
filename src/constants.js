export const BLOGS_API = (no, searchString, cat) => `https://app.userhoot.com/notify/posts?page=${no}&projectkey=${window.uHootSettings.projectKey}&title=${searchString}&category=${cat}`;

export const SETTINGS_API = `https://app.userhoot.com/notify/assets?projectkey=${window.uHootSettings.projectKey}`;

export const CATEGORY_API = `https://app.userhoot.com/notify/categories?projectkey=${window.uHootSettings.projectKey}`;

export const FEEDBACK_API = `https://app.userhoot.com/notify/feedback/save?projectkey=${window.uHootSettings.projectKey}`;

export const NO_POSTS_MESSAGE = 'No posts to display yet';

export const FEEDBACK_MESSAGE = 'Thanks for your feedback!';
