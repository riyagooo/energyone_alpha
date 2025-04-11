// @ts-nocheck
/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ parent }) {
  // Get data from parent layout
  const parentData = await parent();
  return parentData;
}