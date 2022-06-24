import styled from 'styled-components'

const PerformanceSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 1200px;
  margin: 0 auto;

  > div {
    flex: 1;
  }
`

const ContentLogoBox = styled.div`
  position: relative;
  text-align: center;
  opacity: 0;
  animation: ${({ theme }) => theme.animations.fadeIn} 1s ease 0s forwards;

  img {
    width: 400px;
    height: 340px;
  }

  p {
    position: absolute;
    bottom: 47px;
    left: 50%;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray700};
    transform: translateX(-50%);
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
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: ${({ theme }) => theme.animations.fadeIn} 1s ease 1s forwards;
`

export {
  PerformanceSection,
  ContentLogoBox,
  StatisticBox,
  IndicatorsList,
  AwardsList,
}
