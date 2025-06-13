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
        page: filters.page !== 1 ? filters.page : null,
        size: filters.size,
        availability: filters.availability,
        category: filters.category,
        color: filters.color,
        price: filters.price !== 4000 ? filters.price : null,
        type: filters.type !== "all" ? filters.type : null,
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
