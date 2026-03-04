import {
  CloseIcon,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
} from '@gluestack-ui/themed';

type SearchInputProps = {
  value: string;
  onChange: (text: string) => void;
};

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <>
      <Input variant="outline" h="$12" borderRadius="$lg">
        <InputSlot pl="$3">
          <InputIcon as={SearchIcon} size="xl" />
        </InputSlot>
        <InputField
          type="text"
          placeholder="Busca drinks"
          size="lg"
          autoCapitalize="none"
          value={value}
          onChangeText={onChange}
        />
        {value.length > 0 && (
          <InputSlot pr="$3" onPress={() => onChange('')}>
            <InputIcon as={CloseIcon} size="xl" />
          </InputSlot>
        )}
      </Input>
    </>
  );
};

export default SearchInput;
