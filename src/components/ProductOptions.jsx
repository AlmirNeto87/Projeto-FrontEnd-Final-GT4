
import { useState } from 'react';

import {
  ProductOptionsContainer,
  OptionsList,
  OptionButton,
  OptionsTitle
} from './ProductOptions.styles';

const ProductOptions = ({
  title = 'Opções',
  options = [],
  radius = '4px',
  shape = 'square',
  type = 'text',
}) => {

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <ProductOptionsContainer>
        <OptionsTitle>{title}</OptionsTitle>
      <OptionsList>
        {options.map((option, index) => (
                    
            <OptionButton
            key={`${option}-${index}`}
            type="button"
            $shape={shape}
            $radius={radius}
            $type={type}
            $optionColor={type === 'color' ? option : undefined}
            $selected={selectedOption === option}
            aria-label={`${title}: ${option}`}
            aria-pressed={selectedOption === option}
            onClick={() => setSelectedOption(option)}
            >
            {type === 'text' ? option : null}
            </OptionButton>

        ))}
      </OptionsList>
    </ProductOptionsContainer>
  );
};

export default ProductOptions;
