
import {
  FilterGroupContainer,
  FilterGroupTitle,
  FilterOptions,
  FilterOption,
  FilterInput,
  FilterLabel,
} from './FilterGroup.styles';

const FilterGroup = ({
  title,
  inputType = 'checkbox',
  options = [],
  selectedValues = [],
  onChange,
}) => {
  const handleChange = (value) => {
    const isSelected = selectedValues.includes(value);

    const updatedValues = isSelected
      ? selectedValues.filter((item) => item !== value)
      : [...selectedValues, value];

    onChange(updatedValues);
  };

  return (
    <FilterGroupContainer>
      <FilterGroupTitle>{title}</FilterGroupTitle>

      <FilterOptions>
        {options.map((option, index) => (
          <FilterOption key={`${option.text}-${index}`}>
            <FilterInput
              type={inputType}
              id={`${title}-${index}`}
              name={title}
              value={option.value ?? option.text}
              checked={selectedValues.includes(option.value ?? option.text)}
              onChange={() => handleChange(option.value ?? option.text)}
            />

            <FilterLabel htmlFor={`${title}-${index}`}>
              {option.text}
            </FilterLabel>
          </FilterOption>
        ))}
      </FilterOptions>
    </FilterGroupContainer>
  );
};

export default FilterGroup;
