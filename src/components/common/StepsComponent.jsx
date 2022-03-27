import { Steps } from "antd";
import _ from "lodash";

const { Step } = Steps;

// itemKey: 应为每个item的唯一识别符对应的字段，例如 item.id,item.key
// itemStatusObj：一个对象，该对象的key === itemKey, value === status
// itemDescObj :  一个对象，该对象的key === itemKey, value === description
const StepsComponent = ({
  current,
  direction,
  itemList,
  itemKey,
  itemTitle,
  itemStatusObj,
  itemDescObj,
  ...rest
}) => {
  return (
    <Steps current={current} direction={direction} {...rest}>
      {itemList.map((item) => (
        <Step
          key={_.get(item, itemKey)}
          title={_.get(item, itemTitle)}
          status={itemStatusObj[item[itemKey]]}
          description={_.get(itemDescObj, item[itemKey])}
          {...rest}
        />
      ))}
    </Steps>
  );
};

export default StepsComponent;
