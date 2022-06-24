import { TripleImg, PlayStoreImg, AppleBadgeImg } from '../../assets/images'

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
          <li>
            <strong>700만 명</strong>의 여행자
          </li>
          <li>
            <strong>100만 개</strong>의 여행 리뷰
          </li>
          <li>
            <strong>470만 개</strong>의 여행 일정
          </li>
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
