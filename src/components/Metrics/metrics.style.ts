import styled from 'styled-components'

const MetricsItem = styled.li`
  font-size: 36px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.gray};
  letter-spacing: -1px;

  strong {
    font-weight: bold;
  }

  :last-child {
    margin-bottom: 50px;
  }
`

export { MetricsItem }
