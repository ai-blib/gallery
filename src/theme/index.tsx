import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import {Theme,SIZE} from './Color';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    return <StyledComponentsThemeProvider theme={(Theme())}>{children}</StyledComponentsThemeProvider>
};

