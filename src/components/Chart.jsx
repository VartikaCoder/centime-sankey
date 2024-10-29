import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/dataActions'; // Import setData action
import mockData from '../data/mockData';
import { Sankey, Tooltip } from 'recharts';
import { useTranslation } from 'react-i18next';

const CustomTooltip = ({ active, payload }) => {
    const { t } = useTranslation();
    if (active && payload && payload.length) {
        return (
            <div style={{ backgroundColor: 'white', border: '1px solid #ccc', padding: '5px' }}>
                <p>{t(payload[0].name)}: {payload[0].value}</p>
            </div>
        );
    }
    return null;
};

const Chart = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { nodes, links } = useSelector((state) => state.data);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await mockData.fetch();
                console.log('Fetched Data:', fetchedData);
                dispatch(setData(fetchedData));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [dispatch]);

    const nodePositions = useMemo(() =>
        nodes.map((node, index) => ({
            ...node,
            x: index * 180 + 50,
            y: 80 + index * 100,
            width: 160,
            height: 80,
        })),
        [nodes]
    );

    const renderNodeLabels = () =>
        nodePositions.map((node) => (
            <div
                key={`label-${node.id}`}
                style={{
                    position: 'absolute',
                    top: `${node.y}px`,
                    left: `${node.x}px`,
                    width: `${node.width}px`,
                    height: `${node.height}px`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#333',
                    whiteSpace: 'nowrap',
                    textAlign: 'center',
                }}
            >
                {t(node.name)} - {node.value}
            </div>
        ));

    if (!nodes.length || !links.length) {
        return <div>{t('Loading')}...</div>;
    }

    return (
        <div style={{ position: 'relative', textAlign: 'center' }}>
            <h2>{t('Financial Sankey Diagram')}</h2>
            <div style={{ position: 'relative', height: '800px', width: '1200px' }}>
                <Sankey
                    width={1200}
                    height={800}
                    data={{ nodes, links }}
                    node={{ width: 160, padding: 20 }}
                    margin={{ top: 20, left: 20, right: 20, bottom: 20 }}
                    link={{ stroke: '#77c', strokeWidth: 10 }}
                >
                    <Tooltip content={<CustomTooltip />} />
                </Sankey>
                {renderNodeLabels()}
            </div>
        </div>
    );
};

export default Chart;
