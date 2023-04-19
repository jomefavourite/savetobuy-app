import { extendTheme } from "native-base";

export const theme = extendTheme({
  fontConfig: {
    Karla: {
      400: {
        normal: "Karla_400Regular",
        italic: "Karla_400Regular_Italic",
      },
      500: {
        normal: "Karla_500Medium",
      },
      600: {
        normal: "Karla_600SemiBold",
      },
      700: {
        normal: "Karla_700Bold",
        italic: "Karla_700Bold_Italic",
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "Karla",
    body: "Karla",
    mono: "Karla",
  },
});
