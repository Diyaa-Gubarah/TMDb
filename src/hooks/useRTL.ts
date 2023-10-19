import * as React from 'react';

import I18n from "../i18n/i18n";
import { getLocales } from "react-native-localize";

const deviceLanguages = getLocales();



const useRTL = () => {
    const language = React.useMemo(() => I18n.language, [I18n.language])


    return deviceLanguages[0].isRTL
    // return deviceLanguages[0].isRTL||language === 'ar'
}

export default useRTL

