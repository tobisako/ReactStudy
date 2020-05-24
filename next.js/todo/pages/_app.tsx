//import theme from '@common/theme'
//import CssBaseline from '@material-ui/core/CssBaseline'
//import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { initStore, ReduxStore } from '@store/index'
import withRedux from 'next-redux-wrapper'
import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */
export default withRedux(initStore)(
  class CustomApp extends App<{ store: ReduxStore }> {
    // (中略)    
    public render() {
      const { Component, pageProps, store } = this.props
      // Providerの中にあるコンポーネントでreduxで定義したstoreに参照することができるため、一番外側にProviderを呼ぶ
      // material-uiを使用しているのでThemeProviderやCssBaselineを呼んでいるが、Reduxとは別の設定なので説明は割愛
      return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
      )
    }
  }
)

//<CssBaseline />
//<ThemeProvider theme={theme}>
//</ThemeProvider>
