/* eslint no-unused-expressions:0 */
import { injectGlobal } from "emotion"
import latoRegular from "~assets/fonts/Lato/Lato-Regular.ttf"
import latoBold from "~assets/fonts/Lato/Lato-Bold.ttf"

injectGlobal`
    * {
        box-sizing: border-box;
    }

    @font-face {
      font-family: 'Lato';
      src: url(${latoRegular});
      font-weight: 400;
    }

    @font-face {
      font-family: 'Lato';
      src: url(${latoBold});
      font-weight: 600;
    }

    body {
        font-family: Lato, Arial, "Lucida Grande", sans-serif;
        margin: 0px;
    }
`
