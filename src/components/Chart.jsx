// src/components/Chart.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/dataActions';
import mockData from '../data/mockData';
import { Sankey, Tooltip, Layer } from 'recharts';
import { useTranslation } from 'react-i18next';
import './Chart.css';

const CustomTooltip = ({ active, payload }) => {
    const { t } = useTranslation();
    if (active && payload && payload.length) {
        return (
            <div style={{ backgroundColor: 'white', border: '1px solid #ccc', padding: '5px' }}>
                <p>{t(payload[0].name, { defaultValue: t('Unknown') })}: {payload[0].value}</p>
            </div>
        );
    }
    return null;
};

// Custom node component to render node with title
const NodeComponent = ({ x, y, width, height, payload, padding, nodes }) => {
    const { t } = useTranslation();

    if (x === undefined || y === undefined) return null;

    // Find the original node value from the nodes prop using payload.id
    const originalNode = nodes.find((node) => node.id === payload.id);
    const displayValue = originalNode ? originalNode.value : payload.value;

    return (
        <Layer>
            <rect
                x={x}
                y={y + 20}
                width={width}
                height={height - padding}
                fill="#87CEFA"
                stroke="#007bff"
                strokeWidth={3}
            />
            <text
                x={x + width / 2}
                y={y}
                textAnchor="middle"
                fill="#333"
                fontSize="14px"
                fontWeight="bold"
            >
                {t(payload.name, { defaultValue: payload.name })} - {displayValue}
            </text>
        </Layer>
    );
};



const Chart = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { nodes, links } = useSelector((state) => state.data);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await mockData.fetch();
                console.log('Fetched Data:', fetchedData); // Check fetched data
                dispatch(setData(fetchedData));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [dispatch]);


    if (!nodes.length || !links.length) {
        return <div>{t('Loading')}...</div>;
    }

    return (
        <div className="chart-container">
            <div style={{ position: 'relative', height: '700px', width: '900px' }}>
                <Sankey
                    key={nodes.map(node => node.value).join('-')}
                    width={900}
                    height={700}
                    data={{
                        nodes: nodes.filter(Boolean),
                        links: links.filter(link => link.source !== undefined && link.target !== undefined)
                    }}
                    node={<NodeComponent nodes={nodes} width={180} padding={40} />} // Pass nodes as a prop
                    margin={{ top: 40, left: 60, right: 60, bottom: 40 }}
                    link={{ stroke: '#77c', strokeWidth: 10 }}
                >
                    <Tooltip content={<CustomTooltip />} />
                </Sankey>

            </div>
        </div>
    );
};

export default Chart;