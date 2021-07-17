const getBooks = () => {
  return [
    {
      id: 1,
      title: "Book Title",
      author: "balshy",
      year: 2021,
      pages: 100,
      createdAt: new Date(),
    },
  ];
};

module.exports = { getBooks };
