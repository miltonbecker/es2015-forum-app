'use strict';

import Post from './post';
import ui from './ui';
import User from './user';

Post.findAll()
    .then(ui.renderPosts)
    .catch((error) => {
        console.log(error)
    });

User.findRecent()
    .then(ui.renderUsers)
    .catch((error) => {
        console.log(error)
    });