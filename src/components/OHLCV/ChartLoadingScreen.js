// @flow
import React from 'react';
import Chart from './Chart';
import { Loading, CenteredMessage } from '../Common';
import { TypeChooser } from 'react-stockcharts/lib/helper';
import AutoScaler from '../AutoScaler';
import styled from 'styled-components';

type Props = {
  macd: Object,
  volume: Object,
  chartHeight: number,
  indicatorHeight: number,
  rsi: Object,
  line: Object,
  currentChart: Object,
  atr: Object,
  forceIndex: Object,
  data: Array<Object>,
  noOfCandles: number,
  width: string,
};

export default class ChartLoadingScreen extends React.PureComponent<Props> {
  render() {
    const nullIndicator = { name: '', height: 0, active: false };
    const {
      macd,
      volume,
      noOfCandles,
      chartHeight,
      currentChart,
      indicatorHeight,
      rsi,
      line,
      atr,
      forceIndex,
      data,
    } = this.props;

    if (!data) {
      return <Loading />;
    }

    if (data.length < 1) {
      return <CenteredMessage message="There are currently no trades for this token pair" />;
    }

    return (
        <Wrapper className="chart-container">
            <AutoScaler>
              {({ width, height }) => (
                <TypeChooser>
                {type => (
                  <Chart
                  width={width}
                  type={type}
                  macd={macd}
                  volume={volume}
                  chartHeight={height - indicatorHeight}
                  indicatorHeight={indicatorHeight}
                  rsi={rsi}
                  line={line}
                  currentChart={currentChart}
                  atr={atr ? atr : nullIndicator}
                  forceIndex={forceIndex ? forceIndex : nullIndicator}
                  data={data}
                  noOfCandles={noOfCandles}
                />
                )}
                </TypeChooser>
              )}
            </AutoScaler>
        </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  text-align: left;
  margin: 10px -10px 0px -20px;
  height: 80%;
`;