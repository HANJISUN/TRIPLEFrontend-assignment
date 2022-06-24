import { TripleImg, PlayStoreImg, AppleBadgeImg } from '../../assets/images'
import Metrics from '../../components/Metrics'
import Award from '../../components/Award'

import {
  PerformanceSection,
  ContentLogoBox,
  StatisticBox,
  MetricsList,
  AwardsBox,
} from './performance.style'

const PerformancePage = () => {
  return (
    <PerformanceSection>
      <ContentLogoBox>
        <img src={TripleImg} alt="triple-img" />
        <p>2021년 12월 기준</p>
      </ContentLogoBox>
      <StatisticBox>
        <MetricsList>
          <Metrics number={700} unit="만 명" desc="의 여행자" />
          <Metrics number={100} unit="만 개" desc="의 여행 리뷰" />
          <Metrics number={470} unit="만 개" desc="의 여행 일정" />
        </MetricsList>
        <AwardsBox>
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
        </AwardsBox>
      </StatisticBox>
    </PerformanceSection>
  )
}

export default PerformancePage
