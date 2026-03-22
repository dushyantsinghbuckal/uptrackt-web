export function getPricing(country: string | null) {

  const isIndia = country === "IN";

  if (isIndia) {
    return {
      symbol: "₹",
      prices: {
        starter: {
          monthly: 899,
          yearly: 9499
        },
        growth: {
          monthly: 2999,
          yearly: 32999
        },
        scale: {
          monthly: 7999,
          yearly: 69999
        }
      }
    };
  }

  return {
    symbol: "$",
    prices: {
      starter: {
        monthly: 11,
        yearly: 99
      },
      growth: {
        monthly: 35,
        yearly: 349
      },
      scale: {
        monthly: 99,
        yearly: 999
      }
    }
  };
}