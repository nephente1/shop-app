import React from 'react';
import * as d3 from 'd3';

//export const StatisticsPage = () => {

    export const StatisticsPage = () => {
        const ref: any = React.useRef();
        const data = [180, 200, 220, 400, 450, 480, 500];
        const width = '100%';
        const height = 250;

        React.useEffect(() => {
            d3.select(ref.current)
                .attr('width', width)
                .attr('height', height)
                .style('border', '1px solid black');
        }, []);

        React.useEffect(() => {
            draw();
        }, [data]);

        const draw = () => {

            const svg = d3.select(ref.current);
            var selection = svg.selectAll('rect').data(data);
            var yScale = d3.scaleLinear()
            //@ts-ignore
                                .domain([0, d3.max(data)])
                                .range([0, height-100]);

            selection
                .transition().duration(300)
                    .attr('height', (d) => yScale(d))
                    .attr('y', (d) => height - yScale(d));

            selection
                .enter()
                .append('rect')
                .attr('x', (d, i) => i * 45)
                .attr('y', (d) => height)
                .attr('width', 40)
                .attr('height', 0)
                .attr('fill', 'orange')
                .transition().duration(300)
                    .attr('height', (d) => yScale(d))
                    .attr('y', (d) => height - yScale(d));

            selection
                .exit()
                .transition().duration(300)
                    .attr('y', (d) => height)
                    .attr('height', 0)
                .remove();
        };


        return (
            <div className="chart">
                <svg ref={ref} />

            </div>

        );

    //const inputRef: React.RefObject<HTMLInputElement> | null = React.createRef();
//     const myRef: React.RefObject<any> = React.createRef();
//     const dataset = [180, 200, 220, 400, 450];
//     const size = 600;

//  const rysuj = () => {
//     const svg = d3.select(myRef.current)
//     .append('svg')
//     .attr('width', size)
//     .attr('height', size);

//     const rect_width = 95;
//     svg.selectAll('rect')
//     .data(dataset)
//     .enter()
//     .append('rect')
//     .attr('x', (d, i) => 20 + i*(rect_width + 20))
//     .attr('y', d => size - d)
//     .attr('width', rect_width)
//     .attr('height', el => el)
//     .attr('fill', 'teal');
//  };
//     console.log('myRef', myRef);

//     React.useEffect( () => {
//         rysuj();
//     }, []);
//     return (
//         <>
//             <p>statistic page</p>
//             <div ref={myRef} />
//         </>
//     );
};
