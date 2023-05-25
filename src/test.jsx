import React, { useState } from "react";

const Disclosure = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDisclosure = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="disclosure" onClick={toggleDisclosure}>
      <div className="disclosure-header">
        <span>{isExpanded ? "Скрыть информацию" : "Показать информацию"}</span>
      </div>
      {isExpanded && (
        <div className="disclosure-content">
          <p>Скрытая информация о продуктах</p>
        </div>
      )}
    </div>
  );
};

export default Disclosure;
