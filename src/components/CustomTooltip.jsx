import React from 'react';
import { useTranslation } from 'react-i18next';

const CustomTooltip = ({ active, payload }) => {
    const { t } = useTranslation();
    if (active && payload && payload.length) {
        // Fallback to the actual node name if it's not found in the translation
        const nodeName = payload[0].name;
        const displayName = t(nodeName, { defaultValue: nodeName }); // Use nodeName itself as default

        return (
            <div style={{ backgroundColor: 'white', border: '1px solid #ccc', padding: '5px' }}>
                <p>{displayName}: {payload[0].value}</p>
            </div>
        );
    }
    return null;
};

export default CustomTooltip;
