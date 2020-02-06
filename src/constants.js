export const BLOGS_API = (no, searchString, cat) => `https://app.userhoot.com/notify/posts?page=${no}&projectkey=C81E728D9D4C2F636F067F89CC14862C&title=${searchString}&category=${cat}`;

export const SETTINGS_API = 'https://app.userhoot.com/notify/assets?projectkey=C81E728D9D4C2F636F067F89CC14862C';

export const CATEGORY_API = 'https://app.userhoot.com/notify/categories?projectkey=C81E728D9D4C2F636F067F89CC14862C';

export const FEEDBACK_API = 'https://app.userhoot.com/notify/feedback?projectkey=C81E728D9D4C2F636F067F89CC14862C';