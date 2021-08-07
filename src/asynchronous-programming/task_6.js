function getResolvedPromise(value) {
  return Promise.resolve(value)
    .then(res => {
      if (res > 300) {
        throw new Error('Ошибка');
      }
    })
    .catch(error => console.log(error))
    .finally(() => console.log('This is Finally!'));
}

getResolvedPromise(500);
