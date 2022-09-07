const listHelper = require('../utils/list_helper')

const blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  }  
]

const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }
]

test('dummy returns one', () => {
  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
  test('of empty list is zero', () => {
    expect(listHelper.totalLikes([])).toBe(0)
  })

  test('when list has only one blog, equals the likes of that', () => {
    expect(listHelper.totalLikes(listWithOneBlog)).toBe(5)
  })

  test('of a bigger list is calculated right', () => {
    expect(listHelper.totalLikes(blogs)).toBe(36)
  })
})

describe('favorite blog', () => {
  test('of empty list is an empty object', () => {
    expect(listHelper.favoriteBlog([])).toEqual({})
  })

  test('when list has only one blog, equals that blog', () => {
    result = listHelper.favoriteBlog(listWithOneBlog)
    expect(result.title).toEqual('Go To Statement Considered Harmful')
    expect(result.author).toEqual('Edsger W. Dijkstra')
    expect(result.likes).toEqual(5)
  })

  test('of a bigger list, equals the blog with most likes', () => {
    result = listHelper.favoriteBlog(blogs)
    expect(result.title).toEqual('Canonical string reduction')
    expect(result.author).toEqual('Edsger W. Dijkstra')
    expect(result.likes).toEqual(12)
  })
})

describe('author with the most blogs', () => {
  test('of empty list is an empty object', () => {
    expect(listHelper.mostBlogs([])).toEqual({})
  })

  test('when list has only one blog, equals that author', () => {
    result = listHelper.mostBlogs(listWithOneBlog)
    expect(result.author).toEqual('Edsger W. Dijkstra')
    expect(result.blogs).toEqual(1)
  })

  test('of a bigger list, is correct', () => {
    result = listHelper.mostBlogs(blogs)
    expect(result.author).toEqual('Robert C. Martin')
    expect(result.blogs).toEqual(3)
  })
})

describe('author of the blog with the most likes', () => {
  test('of empty list is an empty object', () => {
    expect(listHelper.mostLikes([])).toEqual({})
  })

  test('when list has only one blog, equals that author', () => {
    result = listHelper.mostLikes(listWithOneBlog)
    console.log(result)
    expect(result.author).toEqual('Edsger W. Dijkstra')
    expect(result.likes).toEqual(5)
  })

  test('of a bigger list, is correct', () => {
    result = listHelper.mostLikes(blogs)
    expect(result.author).toEqual('Edsger W. Dijkstra')
    expect(result.likes).toEqual(12)
  })
})