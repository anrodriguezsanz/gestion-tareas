const colorPrimary = '#1A4B83'
const colorPrimaryFont = '#fff'
const colorSecondary = '#595959'
const colorSecondaryFont = '#fff'
const colorGreyPrimary = "#595959"
const colorgreyBGPrimary = "#F0F0F0"
const colorGreyBGSecodnary = "#FAFAFA"

export const themeConfig = {
  token: {
    colorPrimary: colorPrimary,
    colorPrimaryFont: colorPrimaryFont,
    colorSecondary: colorSecondary,
    colorSecondaryFont: colorSecondaryFont,
    colorBgLayout: '#FFFFFF',
    colorGreyPrimary: colorGreyPrimary,
    colorgreyBGPrimary: colorgreyBGPrimary,
    colorGreyBGSecodnary: colorGreyBGSecodnary,
    colorTextHeading: colorPrimary,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
  },
  components: {
    Table: {
      headerBorderRadius: 8
    }
  }
}