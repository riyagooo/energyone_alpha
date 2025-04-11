async function load({ parent }) {
  const parentData = await parent();
  return parentData;
}
export {
  load
};
