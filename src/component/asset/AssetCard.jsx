/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const AssetCard = ({ asset }) => {
  const cssCard = () => {
    return css({
      border: '1px solid #444',
      borderRadius: '10px',
      padding: '10px'
    })
  }
  
  return (
    <div css={cssCard}>
      {Object.entries(asset).map(([key, value]) => (
        <div key={key}>
          {key}: {value}
        </div>
      ))}
    </div>
  );
};
// 이렇게 하면 각 자산 항목을 AssetCard 컴포넌트로 렌더링하고, 필요한 값을 props로 전달할 수 있습니다.








export default AssetCard;