import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const CustomTooltip = ({ active, payload }) => {
    const { t } = useTranslation();
    const data = useSelector((state) => state.data);

    if (active && payload && payload.length) {
        console.log('Tooltip Payload:', payload);

        const linkData = payload[0]?.payload;
        const sourceId = linkData?.source;
        const targetId = linkData?.target;

        const sourceNode = data.nodes.find((node) => node.id === sourceId);
        const targetNode = data.nodes.find((node) => node.id === targetId);

        const value = linkData?.value || 0;

        const linkPhrase = `${t(sourceNode?.name || 'Unknown')} - ${t(targetNode?.name || 'Unknown')}`;

        return (
            <div
                style={{
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '5px',
                }}
            >
                <p>
                    <strong>{t('Flow')}:</strong> {linkPhrase}
                </p>
                <p>
                    <strong>{t('Value')}:</strong> {value}
                </p>
            </div>
        );
    }

    return null;
};

export default CustomTooltip;
