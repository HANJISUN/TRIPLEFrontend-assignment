import { TripleImg, PlayStoreImg, AppleBadgeImg } from '../../assets/images'
import Metrics from '../../components/Metrics'

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
          <div>
            <img src={PlayStoreImg} alt="play-store-img" />
            <p>
              2018 구글 플레이스토어 <br /> 올해의 앱 최우수상 수상
            </p>
          </div>
          <div>
            <img src={AppleBadgeImg} alt="apple-badge-img" />
            <p>
              2018 애플 앱스토어 <br /> 오늘의 여행앱 선정
            </p>
          </div>
        </AwardsBox>
      </StatisticBox>
    </PerformanceSection>
  )
}

export default PerformancePage
