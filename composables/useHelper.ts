// composables/useHelper.ts
export default function useHelper(filters: {
  size: string;
  availability: string;
  category: string;
  color: string[];
  price: number;
  type: string;
}) {
  const buildQuery = () =>
    Object.fromEntries(
      Object.entries({
        size: filters.size,
        availability: filters.availability,
        category: filters.category,
        color: filters.color,
        price: filters.price,
        // price: filters.price !== 200 ? filters.price : null,
        type: filters.type !== "all" ? filters.type : null,
      }).filter(
        ([_, value]) =>
          value !== null &&
          value !== undefined &&
          value !== "" &&
          !(Array.isArray(value) && value.length === 0)
      )
    );
  return { buildQuery };
}
