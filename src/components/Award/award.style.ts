import styled from 'styled-components'

const AwardItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 40px;

  img {
    width: 54px;
    height: 54px;
    margin-right: 8px;
  }

  p {
    font-size: 14px;
    font-weight: bold;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.gray800};
  }
`

export { AwardItem }
