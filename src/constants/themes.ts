import { ITheme } from "../types/theme";
import { scale } from "../utils/responsive";

export const DEFAULT_LIGHT_THEME_ID = "default-light";

export const DEFAULT_DARK_THEME_ID = "default-dark";



// export const DEFAULT_LIGHT_COLOR_THEME = {
//     textPrimary: '#041C32',
//     textSecondary: '#94a3b3',
//     primary: '#ffcd33',
//     background: '#F4FCFC',
//     transparent: "#041C321A"
// }

// export const DEFAULT_DARK_COLOR_THEME = {
//     textPrimary: '#ffffff',
//     textSecondary: '#bdbdbd',
//     primary: '#2196f3',
//     background: '#212121',
//     transparent: '#ffffff1A',
// }


export const DEFAULT_LIGHT_COLOR_THEME = {
    textPrimary: '#041C32',
    textSecondary: '#94a3b3',
    primary: '#40E0D0',
    background: '#F4FCFC',
    transparent: '#94a3b31A'
};

export const DEFAULT_DARK_COLOR_THEME = {
    textPrimary: '#fffbff',
    textSecondary: '#d1e0e9',
    primary: '#40E0D0',
    background: '#181D31',
    transparent: '#fffbff1A'
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


