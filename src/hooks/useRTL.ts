import * as React from 'react';

import I18n from "../i18n/i18n";

const useRTL = () => {
    const language = React.useMemo(() => I18n.language, [I18n.language])
    return false
    // return language !== 'en'
}

export default useRTL

