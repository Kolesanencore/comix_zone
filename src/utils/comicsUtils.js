export function filterComics(comicsData) {
  return comicsData.filter(comic => {
    const { thumbnail } = comic;
    return (
      thumbnail &&
      thumbnail.path &&
      thumbnail.extension &&
      thumbnail.path !==
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
    );
  });
}
