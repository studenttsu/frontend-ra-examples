// console.log('Request data...');

// Web API

//-----------------------

// setTimeout(() => console.log(2));
// console.log(1);

// -------------------------


// console.log('Request data...');

// function getUser(callback) {
//     setTimeout(() => {
//         console.log('Preparing data...');

//         const data = {
//             id: 1,
//             name: 'Ivan'
//         };

//         setTimeout(() => {
//             callback(data);
//         }, 2000);
//     }, 2000);
// }

// function getUserPosts(userId, callback) {
//     setTimeout(() => {
//         callback([
//             {
//                 id: 1,
//                 name: 'Post 1',
//                 text: ''
//             },
//             {
//                 id: 2,
//                 name: 'Post 2',
//                 text: ''
//             }
//         ])
//     }, 2000);
// }

// getUser(user => {
//     getUserPosts(user.id, posts => {
//         console.log(posts);
//     });
// });

// getImage('./image.png', (image, err) => {
// 	compressImage(image, (compressedImage, err) => {
// 		applyFilter(compressedImage, (filteredImage, err) => {
// 			saveImage(filteredImage, (res, err) => {
// 				console.log('Saved', res);
// 			});
// 		});
// 	});
// });

// Promise

// pending
// fullfilled
// rejected

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//     }, 3000);

//     reject();
// });

// promise
//     .then(() => console.log('Fullfilled'))
//     .catch(error => console.error(promise))
//     .finally(() => console.log('Finally'));


// getUser(user => {
//     getUserPosts(user.id, posts => {
//         console.log(posts);
//     });
// });

// getUser().then(user => {
//     getUserPosts(user.id).then(posts => {
//         console.log(posts);
//     });
// });

// getUser()
//     .then(user => getUserPosts(user.id))
//     .then(posts => console.log(posts))
//     .catch(error => console.error(error));

function getUser() {
    console.log('Preparing data...');

    return fetch('path-to-server.com/user')
        .then(response => response.json());
    
    // return new Promise(resolve => {
    //     setTimeout(() => {
    //         const data = {
    //             id: 1,
    //             name: 'Ivan'
    //         };
    
    //         setTimeout(() => {
    //             resolve(data);
    //         }, 2000);
    //     }, 2000);
    // });
}

async function getUserPosts(userId) {
    if (!userId) {
        throw new Error('Id пользователя не был передан');
    }

    return fetch(`path-to-server.com/user-posts/${userId}`)
        .then(response => response.json());

    // return new Promise((resolve, reject) => {
    //     if (!userId) {
    //         reject(new Error('Id пользователя не был передан'));
    //     }

    //     setTimeout(() => {
    //         resolve([
    //             {
    //                 id: 1,
    //                 name: 'Post 1',
    //                 text: ''
    //             },
    //             {
    //                 id: 2,
    //                 name: 'Post 2',
    //                 text: ''
    //             }
    //         ])
    //     }, 2000);
    // });
}

async function getPostCommentsById(postId) {
    return {
        id: postId,
        name: ''
    }
}

let isLoading = false;

async function init() {
    isLoading = true;

    try {
        const user = await getUser();
        const posts = await getUserPosts(user.id);

        const postsComments = await Promise.all(posts.map(post => getPostCommentsById(post.id)));
        const postsCommentsSettled = await Promise.allSettled(posts.map(post => getPostCommentsById(post.id)));
        
        postsCommentsSettled.forEach(resp => {
            if (resp.status === 'fulfilled') {
                console.log(resp.value);
            }
        });
    
        console.log(user, posts);
    } catch(e) {
        console.error(e);
    } finally {
        isLoading = false;
    }
}

const setPosts = posts => {};
getPosts().then(setPosts);

init();

// const timerId = setInterval(() => {
//     console.log('Tick');
// }, 1000);

// clearInterval(timerId);



fetch(`path?search=value`, {
    method: 'DELETE',
});

// GET
// POST
// PUT
// PATCH
// DELETE
