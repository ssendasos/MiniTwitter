export const state = () => ({
  users: [
    {
      userId: 'qqqqqqqqqqq',
      userName: 'qqqqqqqqqqq',
      followed: false,
      posts: [],
      follows: [
        {
          userId: 'Bret',
          userName: 'Leanne Graham',
          followed: false,
          posts: [
            {
              postId: 9,
              textContent: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
              authorId: 'Bret',
              userName: 'Leanne Graham',
              reposts: 0,
              likes: 0,
              liked: false,
              likedBy: [],
              reposted: false,
              isAnswer: false,
              answers: 0,
              answerTo: {},
              comments: []
            },
            {
              postId: 4,
              textContent: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
              authorId: 'Bret',
              userName: 'Leanne Graham',
              reposts: 0,
              likes: 0,
              liked: false,
              likedBy: [],
              reposted: false,
              isAnswer: true,
              answers: 0,
              answerTo: {
                userId: 'Karianne',
                postId: 8
              },
              comments: []
            },
            {
              postId: 5,
              textContent: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
              authorId: 'Bret',
              userName: 'Leanne Graham',
              reposts: 0,
              likes: 0,
              liked: false,
              likedBy: [],
              reposted: false,
              isAnswer: false,
              answers: 0,
              answerTo: {},
              comments: []
            },
            {
              postId: 1,
              textContent: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
              authorId: 'Bret',
              userName: 'Leanne Graham',
              reposts: 0,
              likes: 0,
              liked: false,
              likedBy: [],
              reposted: false,
              isAnswer: true,
              answers: 0,
              answerTo: {
                userId: 'Bret',
                postId: 3
              },
              comments: []
            },
            {
              postId: 3,
              textContent: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
              authorId: 'Bret',
              userName: 'Leanne Graham',
              reposts: 0,
              likes: 0,
              liked: false,
              likedBy: [],
              reposted: false,
              isAnswer: true,
              answers: 0,
              answerTo: {
                userId: 'Bret',
                postId: 5
              },
              comments: []
            },
          ],
          follows: [],
          followers: [],
          likedPosts: [

          ]
        },
      ],
      followers: [],
    },
    {
      userId: 'Bret',
      userName: 'Leanne Graham',
      followed: true,
      posts: [
        {
          postId: 9,
          textContent: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          authorId: 'Bret',
          userName: 'Leanne Graham',
          date: new Date(),
          reposts: 0,
          likes: 0,
          liked: false,
          likedBy: [],
          reposted: false,
          repostedBy: [],
          isAnswer: false,
          answers: 0,
          answerTo: {},
          comments: [],

        },
        {
          postId: 4,
          textContent: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
          authorId: 'Bret',
          userName: 'Leanne Graham',
          date: new Date().toJSON(),
          reposts: 0,
          likes: 0,
          liked: false,
          likedBy: [],
          reposted: false,
          repostedBy: [],
          isAnswer: true,
          answers: 0,
          answerTo: {
            userId: 'Karianne',
            postId: 8
          },
          comments: [],
        },
        {
          postId: 5,
          textContent: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
          authorId: 'Bret',
          userName: 'Leanne Graham',
          date: new Date().toJSON(),
          reposts: 0,
          likes: 0,
          liked: false,
          likedBy: [],
          reposted: false,
          repostedBy: [],
          isAnswer: false,
          answers: 0,
          answerTo: {},
          comments: [],
        },
        {
          postId: 1,
          textContent: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
          authorId: 'Bret',
          userName: 'Leanne Graham',
          date: new Date().toJSON(),
          reposts: 0,
          likes: 0,
          liked: false,
          likedBy: [],
          reposted: false,
          repostedBy: [],
          isAnswer: true,
          answers: 0,
          answerTo: {
            userId: 'Bret',
            postId: 3
          },
          comments: []
        },
        {
          postId: 3,
          textContent: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
          authorId: 'Bret',
          userName: 'Leanne Graham',
          date: new Date().toJSON(),
          reposts: 0,
          likes: 0,
          liked: false,
          likedBy: [],
          reposted: false,
          repostedBy: [],
          isAnswer: true,
          answers: 0,
          answerTo: {
            userId: 'Bret',
            postId: 5
          },
          comments: []
        },
      ],
      follows: [],
      followers: [
        {
          userId: 'qqqqqqqqqqq',
          userName: 'qqqqqqqqqqq',
          followed: false,
          posts: [],
          follows: [
            {
              userId: 'Bret',
              userName: 'Leanne Graham',
              followed: false,
              posts: [
              {
                postId: 9,
                textContent: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                authorId: 'Bret',
                userName: 'Leanne Graham',
                date: new Date(),
                reposts: 0,
                likes: 0,
                liked: false,
                likedBy: [],
                reposted: false,
                repostedBy: [],
                isAnswer: false,
                answers: 0,
                answerTo: {},
                comments: [],
      
              },
              {
                postId: 4,
                textContent: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
                authorId: 'Bret',
                userName: 'Leanne Graham',
                date: new Date().toJSON(),
                reposts: 0,
                likes: 0,
                liked: false,
                likedBy: [],
                reposted: false,
                repostedBy: [],
                isAnswer: true,
                answers: 0,
                answerTo: {
                  userId: 'Karianne',
                  postId: 8
                },
                comments: [],
              },
              {
                postId: 5,
                textContent: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
                authorId: 'Bret',
                userName: 'Leanne Graham',
                date: new Date().toJSON(),
                reposts: 0,
                likes: 0,
                liked: false,
                likedBy: [],
                reposted: false,
                repostedBy: [],
                isAnswer: false,
                answers: 0,
                answerTo: {},
                comments: [],
              },
              {
                postId: 1,
                textContent: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
                authorId: 'Bret',
                userName: 'Leanne Graham',
                date: new Date().toJSON(),
                reposts: 0,
                likes: 0,
                liked: false,
                likedBy: [],
                reposted: false,
                repostedBy: [],
                isAnswer: true,
                answers: 0,
                answerTo: {
                  userId: 'Bret',
                  postId: 3
                },
                comments: []
              },
              {
                postId: 3,
                textContent: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
                authorId: 'Bret',
                userName: 'Leanne Graham',
                date: new Date().toJSON(),
                reposts: 0,
                likes: 0,
                liked: false,
                likedBy: [],
                reposted: false,
                repostedBy: [],
                isAnswer: true,
                answers: 0,
                answerTo: {
                  userId: 'Bret',
                  postId: 5
                },
                comments: []
              },
            ],
              follows: [],
              followers: [],
            },
          ],
          followers: [],
        },
      ],
    },
    {
      userId: 'Karianne',
      userName: 'Patricia Lebsack',
      followed: false,
      posts: [
        {
          postId: 8,
          textContent: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
          userName: 'Patricia Lebsack',
          authorId: 'Karianne',
          date: new Date().toJSON(),
          reposts: 0,
          likes: 0,
          liked: false,
          likedBy: [],
          reposted: false,
          repostedBy: [],
          isAnswer: false,
          answers: 0,
          answerTo: {},
          comments: []
        },
        {
          postId: 6,
          textContent: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
          userName: 'Patricia Lebsack',
          authorId: 'Karianne',
          date: new Date().toJSON(),
          reposts: 0,
          likes: 0,
          liked: false,
          likedBy: [],
          reposted: false,
          repostedBy: [],
          isAnswer: false,
          answers: 0,
          answerTo: {},
          comments: []
        },
        {
          postId: 2,
          textContent: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
          userName: 'Patricia Lebsack',
          authorId: 'Karianne',
          date: new Date().toJSON(),
          reposts: 0,
          likes: 0,
          liked: false,
          likedBy: [],
          reposted: false,
          repostedBy: [],
          isAnswer: true,
          answers: 0,
          answerTo: {
            userId: 'Bret',
            postId: 1
          },
          comments: []
        },
      ],
      follows: [],
      followers: [],
    },
  ],
  activeUser: {
    userId: 'Bret',
    userName: 'Leanne Graham',
    isUserChanged: false
  }
})

export const mutations = {
  createTweet(state, { user, newTweet }) {
    user.posts.unshift(newTweet)
    user.followers.forEach(f => state.users.find(u => u.userId === f.userId).posts.unshift(newTweet))
  },

  like(state, { userId, postId }) {
    const user = state.users.find(u => u.userId === userId)
    const post = user.posts.find(p => p.postId === postId)
    const activeUser = state.users.find(u => u.userId === state.activeUser.userId)
    if (!post.likedBy.includes(activeUser) && !post.liked) {
      post.liked = true
      post.likes++
      post.likedBy.push(activeUser)
    } else {
      post.liked = false
      post.likes--
      post.likedBy = post.likedBy.filter(u => u.userId !== activeUser.userId)
    }
  },

  fetchLikesState(state, { userId, postId }) {
    const activeUser = state.users.find(u => u.userId === state.activeUser.userId)
    const user = state.users.find(u => u.userId === userId)
    const post = user.posts.find(p => p.postId === postId)
    if (!post.likedBy.find(u => u.userId === activeUser.userId)) {
      post.liked = false
    } else {
      post.liked = true
    }
  },

  repost(state, { userId, postId }) {
    const activeUser = state.users.find(u => u.userId === state.activeUser.userId)
    if (userId !== activeUser.userId) {
      const user = state.users.find(u => u.userId === userId)
      const post = user.posts.find(p => p.postId === postId)

      if (activeUser.follows.find(f => f.userId === user.userId) && activeUser.posts.find(p => p.postId === post.postId)) {
        if (!post.reposted) {
          post.reposted = true
          post.reposts++
          activeUser.posts.push({...post, isRepostCopy: true})
          post.repostedBy.push(activeUser)
        } else {
          post.reposted = false
          post.reposts--
          activeUser.posts = activeUser.posts.filter(p => p.postId !== postId)
          post.repostedBy = post.repostedBy.filter(u => u.userId !== activeUser.userId)
        }
      } else {
        if (!post.repostedBy.includes(activeUser) && !post.reposted) {
          activeUser.posts.unshift(post)
          post.reposted = true
          post.reposts++
          post.repostedBy.push(activeUser)
          activeUser.followers.forEach(f => state.users.find(u => u.userId === f.userId).posts.unshift(post))
        } else {
          post.reposted = false
          post.reposts--
          activeUser.posts = activeUser.posts.filter(p => p.postId !== postId)
          post.repostedBy = post.repostedBy.filter(u => u.userId !== activeUser.userId)
        }
      }
    }
  },

  fetchRepostsState(state, { userId, postId }) {
    const activeUser = state.users.find(u => u.userId === state.activeUser.userId)
    const user = state.users.find(u => u.userId === userId)
    const post = user.posts.find(p => p.postId === postId)
    if (!post.repostedBy.find(u => u.userId === activeUser.userId)) {
      post.reposted = false
    } else {
      post.reposted = true
    }

  },

  countAnswers(state) {
    state.users.forEach(currentUser => currentUser.posts.forEach(currentPost => {
      currentPost.answers = 0
      currentPost.comments = []
      state.users.forEach(user => user.posts.forEach(post => {
        if ((currentPost.authorId === post.answerTo.userId) && (currentPost.postId === post.answerTo.postId) && !post.isAswerCopy) {
          currentPost.answers++
          currentPost.comments.push(post)
        }
      }))
    }))
  },

  reply(state, newTweet) {
    const activeUser = state.users.find(u => u.userId === state.activeUser.userId)
    activeUser.posts.unshift(newTweet)
    activeUser.followers.forEach(f => state.users.find(u => u.userId === f.userId).posts.unshift({ ...newTweet, isAswerCopy: true }))

  },

  follow(state, userId) {
    const activeUser = state.users.find(u => u.userId === state.activeUser.userId)
    const followsUser = state.users.find(u => u.userId === userId)
    if (!activeUser.follows.includes(followsUser)) {
      followsUser.followed = true
      activeUser.follows.push(followsUser)
      followsUser.followers.push(activeUser)
    } else {
      activeUser.follows = activeUser.follows.filter(f => f.userId !== followsUser.userId)
      followsUser.followers = followsUser.followers.filter(f => f.userId !== activeUser.userId)
      followsUser.followed = false
    }
  },

  changeUser(state, user) {
    if (user) {
      state.activeUser = {
        userId: user.userId,
        userName: user.userName,
        isUserChanged: true
      }
    }
  },

  deletePost(state, { userId, postId }) {
    const activeUser = state.users.find(u => u.userId === state.activeUser.userId)
    state.users.forEach(u => {
      u.posts = u.posts.filter(p => p.postId !== postId)
    })
    activeUser.posts = activeUser.posts.filter(p => p.postId !== postId)
  }
}

export const actions = {
  async createTweet({ commit, dispatch }, newTweet) {
    const user = await dispatch('fetchUser')
    commit('createTweet', {
      newTweet,
      user
    })
  },

  fetchUser({ state }, id = state.activeUser.userId) {
    return state.users.find(u => u.userId === id)
  },

  fetchPosts({ state }, id = state.activeUser.userId) {
    return state.users.find(u => u.userId === id).posts || []
  },

  fetchRepostsState({ commit }, ids) {
    commit('fetchRepostsState', ids)
  },

  like({ commit }, ids) {
    commit('like', ids)
  },

  fetchLikesState({ commit }, ids) {
    commit('fetchLikesState', ids)
  },

  repost({ commit, state }, ids) {
    const user = state.users.find(u => u.userId === ids.userId)
    const post = user.posts.find(p => p.postId === ids.postId)
    commit('repost', ids)
    if (!post.liked) {
      commit('like', ids)
    }
  },

  fetchSelectedPost({ state }, ids) {
    const user = state.users.find(u => u.userId === ids.userId)
    const post = user.posts.find(p => p.postId === ids.postId)
    return post
  },

  fetchAnswerTo({ state }, ids) {
    const user = state.users.find(u => u.userId === ids.answerToUserId)
    const post = user.posts.find(p => p.postId === ids.answerToPostId)
    return post
  },

  countAnswers({ commit }) {
    commit('countAnswers')
  },

  reply({ commit }, newTweet) {
    commit('reply', newTweet)
  },

  fetchUsers({ state }) {
    return state.users
  },

  follow({ commit }, userId) {
    commit('follow', userId)
  },

  changeUser({ commit, state }, id) {
    const user = state.users.find(u => u.userId === id)
    commit('changeUser', user)
  },

  deletePost({ commit }, ids) {
    commit('deletePost', ids)
  }


}

export const getters = {
  userPosts: s => id => s.users
    .find(u => u.userId === id).posts
    .filter(p => p.authorId === id || p.repostedBy
      .find(u => u.userId === id)).filter(p => !p.isRepostCopy),
  feedPosts: s => s.users.find(u => u.userId === s.activeUser.userId).posts.filter(p => !p.isRepostCopy) || [],
  isUserChanged: s => s.activeUser.isUserChanged,
  users: s => s.users
}