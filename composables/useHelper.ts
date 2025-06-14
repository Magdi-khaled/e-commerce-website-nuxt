// composables/useHelper.ts
export default function useHelper(filters: {
  page: number;
  size: string;
  availability: string;
  category: string;
  color: string[];
  price: number;
  type: string;
  rate: number;
}) {
  const buildQuery = () =>
    Object.fromEntries(
      Object.entries({
        type: filters.type !== "all" ? filters.type : null,
        page: filters.page !== 1 ? filters.page : null,
        category: filters.category,
        availability: filters.availability,
        price: filters.price !== 4000 ? filters.price : null,
        size: filters.size,
        color: filters.color,
        rate: filters.rate !== 0 ? filters.rate : null,
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
