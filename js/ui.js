'use strict';

import xss from 'xss-filters';

let ui = {
    renderPosts(posts) {
        let elements = posts.map((post) => {
            let { title, lastReply } = post;
            return articleTemplate(title, lastReply);
        });

        let target = document.querySelector('.container');
        target.innerHTML = elements.join('');
    },

    renderUsers(users) {
        let elements = users.map((user) => {
            let { name, avatar } = user;
            return userTemplate(name, avatar);
        });
        let target = document.querySelector('.sidebar-content');
        target.innerHTML = elements.join('');
    }
};

function articleTemplate(title, lastReply) {
    let [safeTitle, safeLastReply] = sanitize(title, lastReply);
    return `
        <article class='post'>
            <h2 class='post-title'>
                ${safeTitle}
            </h2>
            <p class='post-meta'>
                ${safeLastReply}
            </p>
        </article>`;
}

function userTemplate(name, avatar) {
    let [safeName, safeAvatar] = sanitize(name, avatar);
    return `
    <div class='active-avatar'>
        <img width='54' src='../assets/images/${safeAvatar}'/>
        <h5 class='post-author'>${safeName}</h5>
    </div>`;
}

function sanitize(...variables) {
    let result = [];
    for (let variable of variables) {
        result.push(xss.inHTMLData(variable));
    }
    return result;
}

export default ui;