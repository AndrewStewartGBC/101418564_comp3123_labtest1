function resolvedPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Resolved: This is a success message after 500ms.");
      }, 500);
    });
  }

  function rejectedPromise() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Rejected: This is an error message after 500ms."));
      }, 500);
    });
  }

  
resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));
rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
