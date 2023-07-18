export const generateBookACallLink = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  return `https://calendly.com/antoniovidakovic/30min?month=${year}-${
    +month < 10 ? "0" + month : month
  }`;
};
