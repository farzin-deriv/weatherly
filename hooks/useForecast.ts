import { useQuery } from "react-query";
import { IWeather } from "../types";

const baseUrl = "https://api.weatherapi.com/v1/forecast.json";
const key = "7aacb96ac9124b899e651012233003";

const useForecast = (query: string) =>
  useQuery<IWeather>(
    ["forecast", query],
    () => fetch(`${baseUrl}?key=${key}&q=${query}`).then((res) => res.json()),
    {
      select: (data) => {
        return {
          ...data,
          current: {
            ...data.current,
            condition: {
              ...data.current.condition,
              icon: iconMapper(data.current.condition.icon),
            },
          },
          forecast: {
            ...data.forecast,
            forecastday: data.forecast.forecastday?.map((day) => ({
              ...day,
              day: {
                ...day.day,
                condition: {
                  ...day.day.condition,
                  icon: iconMapper(data.current.condition.icon),
                },
              },
              hour: day.hour?.map((hour) => ({
                ...hour,
                condition: {
                  ...hour.condition,
                  icon: iconMapper(data.current.condition.icon),
                },
              })),
            })),
          },
        };
      },
    }
  );

export default useForecast;

const iconMapper = (url: string) => {
  const mapper = {
    113: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    116: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    119: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    122: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    143: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    176: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    179: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    182: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    185: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    200: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    227: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    230: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    248: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    260: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    263: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    266: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    281: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    284: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    293: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    296: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    299: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    302: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    305: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    308: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    311: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    314: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    317: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    320: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    323: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    326: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    329: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    332: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    335: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    338: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    350: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    353: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    356: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    359: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    362: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    365: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    368: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    371: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    374: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    377: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    386: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    389: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    392: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
    395: {
      day: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
      night: "https://cdn-icons-png.flaticon.com/512/1146/1146856.png",
    },
  };

  const dayOrNight = url.match(/(day|night)/)?.[0];
  const iconName = url.match(/\/(\d+)\.png/)?.[1];

  return mapper[iconName][dayOrNight];
};
