/** @type {import('./$types').PageServerLoad} */
export async function load({ parent }) {
  // Get data from parent layout
  const parentData = await parent();
  return parentData;
}