import axios from "axios";
import React, { useEffect } from "react";

const useFetchGraphql = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  let DATA_QUERY = `query getData {
    alert {
        data {
            attributes {
                Title
                Body
            }
        }
    }
    businessHour {
        data {
            id
            attributes {
                Daycare
                Park
            }
        }
    }
    price {
        data {
            id
            attributes {
                daycare_day
                daycare_day_add
                daycare_fiveDays
                daycare_fiveDays_add
                daycare_halfDay
                daycare_halfDay_add
                daycare_tenDays
                daycare_tenDays_add
                park_single
                park_single_add
                park_punch
                park_monthly
                park_monthly_add
                park_yearly
                park_yearly_add
                park_self_wash           

            }
        }
    }
    posts {
        data {
            attributes {
                Title
                createdAt
                Body
                Media {
                    data {
                        attributes {
                            formats
                        }
                    }
                }
                Expiration
            }
        }
    }
}`;

  useEffect(() => {
    setLoading(true);
    axios({
      url: process.env.REACT_APP_GRAPHQL_URL,
      method: "post",
      data: {
        query: DATA_QUERY,
      },
    })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [DATA_QUERY]);
  return { data, loading, error };
};
export default useFetchGraphql;
