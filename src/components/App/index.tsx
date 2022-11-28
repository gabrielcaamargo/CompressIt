import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';

import theme from '../../styles/themes/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>...</h1>
    </ThemeProvider>
  );
}
