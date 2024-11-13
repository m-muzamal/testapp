import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const MyResponsiveLineChart = ({ data }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',                 
                direction: 'column',
                translateX: 100,
                translateY: 0,
                itemWidth: 80,
                itemHeight: 20,
                symbolSize: 5,
                symbolShape: 'circle',
            }
        ]}
    />
);

export default MyResponsiveLineChart;
