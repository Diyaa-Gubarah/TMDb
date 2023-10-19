import { ITheme } from "../types/theme";
import { scale } from "../utils/responsive";

export const DEFAULT_LIGHT_THEME_ID = "default-light";

export const DEFAULT_DARK_THEME_ID = "default-dark";




export const DEFAULT_LIGHT_COLOR_THEME = {
    textPrimary: '#040404', // Dark blue for primary text
    textSecondary: '#6B778D', // Light blue-grey for secondary text
    primary: '#E50914', // Netflix red for primary accents
    background: '#FFFFFF', // Light background color
    transparent: 'rgba(4, 4, 4, 0.1)' // Dark blue with transparency
};

export const DEFAULT_DARK_COLOR_THEME = {
    textPrimary: '#ffffff', // White text for dark mode
    textSecondary: '#b3b3b3', // Light grey for secondary text
    primary: '#E50914', // Netflix red for primary accents
    background: '#000000', // Black background color
    transparent: 'rgba(255, 255, 255, 0.1)' // White text with transparency
};




const base: Omit<ITheme, 'colors' | 'id'> = {
    fontSizes: {
        lg: scale(16),
        md: scale(12),
        sm: scale(8),
        xsm: scale(4)
    },
    spacing: {
        lg: scale(16),
        md: scale(8),
        sm: scale(4),
        xsm: scale(2),
    },
    fonts: {
        header: 'System',
        body: 'System',
    },
    fontWeights: {
        normal: 'normal',
        bold: 'bold',
    },
};


export const DarkTheme: ITheme = {
    ...base,
    colors: DEFAULT_DARK_COLOR_THEME,
    id: DEFAULT_DARK_THEME_ID,

};


export const LightTheme: ITheme = {
    ...base,
    colors: DEFAULT_LIGHT_COLOR_THEME,
    id: DEFAULT_LIGHT_THEME_ID,

};


