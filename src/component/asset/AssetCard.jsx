/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Button from '../atom/Button';
import useAsset from '../../hook/useAsset';

const AssetCard = ({ asset }) => {
  const { deleteAsset } = useAsset();
  const { id: assetId } = asset;

  const cssCard = () => {
    return css({
      border: '1px solid #444',
      borderRadius: '10px',
      padding: '10px',
    });
  };

  const handleBtnDelete = () => {
    deleteAsset({id: assetId});
  }

  return (
    <div css={cssCard}>
      {Object.entries(asset).map(([key, value]) => (
        <div key={key}>
          {key}: {value}
        </div>
      ))}
      <Button onClick={handleBtnDelete}>
        삭제
      </Button>
    </div>
  );
};
// 이렇게 하면 각 자산 항목을 AssetCard 컴포넌트로 렌더링하고, 필요한 값을 props로 전달할 수 있습니다.

export default AssetCard;
