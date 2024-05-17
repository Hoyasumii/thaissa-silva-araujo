import { ThemeConfig, theme } from "antd";

const palette: Array<string> = ["#141414", "#2C3333", "#395B64", "#A5C9CA", "#E7F6F2"];
const primaryColor = "#6600FF";
const errorColor = "#E31937";

export default {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: primaryColor,
    colorBgContainer: palette[2],
    colorError: errorColor,
    colorBgBase: palette[0],
  },
  components: {
    Layout: {
      headerBg: palette[1],
      bodyBg: palette[1],
      footerBg: palette[1],
      triggerBg: primaryColor,
    },
    Menu: {
      itemBg: "transparent",
      darkItemBg: palette[1],
      activeBarHeight: 2,
      horizontalItemBorderRadius: 8
    },
    Input: {
      colorBorder: palette[4],
      colorBgContainer: palette[3]
    },
    DatePicker: {
      colorBorder: palette[4],
      colorBgContainer: palette[3]

    },
    Checkbox: {
      colorBorder: palette[4],
      colorBgContainer: palette[3]
    },
    Card: {
      colorBgContainer: palette[3],
      colorBorderSecondary: palette[4]
    },
    Button: {
      defaultBg: palette[3],
      defaultActiveBg: palette[3],
      defaultBorderColor: palette[4],
      primaryShadow: `0 0 0 ${palette[2]}`,
      defaultShadow: `0 0 0 ${palette[2]}`,
      defaultHoverBorderColor: palette[4],
      defaultHoverColor: "white",
      defaultActiveColor: "white",
      defaultActiveBorderColor: palette[4]
    },
    Popover: {
      colorBgElevated: palette[2]
    },
    Progress: {
      defaultColor: primaryColor,
      colorSuccess: primaryColor
    },
    Typography: {
      
    }
  },
} as ThemeConfig;