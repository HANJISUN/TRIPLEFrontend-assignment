import { TripleImg, PlayStoreImg, AppleBadgeImg } from '../../assets/images'
import Indicator from '../../components/Indicator'
import Award from '../../components/Award'

import {
  PerformanceSection,
  ContentLogoBox,
  StatisticBox,
  IndicatorsList,
  AwardsList,
} from './performancePage.style'

const PerformancePage = () => {
  return (
    <PerformanceSection>
      <ContentLogoBox>
        <img src={TripleImg} alt="triple-img" />
        <p>2021년 12월 기준</p>
      </ContentLogoBox>
      <StatisticBox>
        <IndicatorsList>
          <Indicator number={700} unit="만 명" desc="의 여행자" />
          <Indicator number={100} unit="만 개" desc="의 여행 리뷰" />
          <Indicator number={470} unit="만 개" desc="의 여행 일정" />
        </IndicatorsList>
        <AwardsList>
          <Award
            imgSrc={PlayStoreImg}
            imgAlt="play-store-img"
            firstLine="2018 구글 플레이스토어"
            secondLine="올해의 앱 최우수상 수상"
          />
          <Award
            imgSrc={AppleBadgeImg}
            imgAlt="apple-badge-img"
            firstLine="2018 애플 앱스토어"
            secondLine="오늘의 여행앱 선정"
          />
        </AwardsList>
      </StatisticBox>
    </PerformanceSection>
  )
}

export default PerformancePage
