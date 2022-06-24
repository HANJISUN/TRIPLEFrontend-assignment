import styled from 'styled-components'

const PerformanceSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  width: 1200px;

  > div {
    flex: 1;
  }
`

const ContentLogoBox = styled.div`
  position: relative;
  text-align: center;

  img {
    width: 400px;
    height: 340px;
  }

  p {
    position: absolute;
    left: 50%;
    bottom: 47px;
    transform: translateX(-50%);
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray700};
  }
`

const StatisticBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const IndicatorsList = styled.ul`
  width: 448px;
`

const AwardsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export {
  PerformanceSection,
  ContentLogoBox,
  StatisticBox,
  IndicatorsList,
  AwardsList,
}
