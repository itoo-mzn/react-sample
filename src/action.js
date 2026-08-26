export function updateForm(form) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const errors = [];
      if (form.title === "") {
        errors.push("書名は必須");
      }
      if (form.price < 0) {
        errors.push("0円以上でないといけない");
      }
      if (form.published === "") {
        errors.push("刊行日は必須");
      }
      if (errors.length > 0) {
        resolve({ errors });
      } else {
        resolve({ result: form, errors: null });
      }
    }, 1000);
  });
}
