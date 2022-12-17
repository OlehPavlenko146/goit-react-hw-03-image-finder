function fetchImages(query, page) {
  return fetch(
    `https://pixabay.com/api/?key=30666690-80ad85c3f2d79ccbcdd2ca85c&q=${query}}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`По Вашему запросу ${query} ничего не найдено!`)
    );
  });
}

export const api = { fetchImages };
