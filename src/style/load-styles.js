import { createGlobalStyle } from '@nfront/global-styles';
import Styles from "@app/style/index.scss";

// Global style object to load CSS
// From this plugin: https://www.gatsbyjs.org/packages/gatsby-plugin-global-styles/?=css
// This means CSS is compiled and loaded in the HTML (via a <style> tag) instead of being requested
//  by javascript (default behaviour is for JS Gatsby to append a <link> tag after JS has loaded)

const GlobalStyleComponent = createGlobalStyle`${Styles}`;

export default GlobalStyleComponent;
