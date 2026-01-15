import {
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
        <InputSlot paddingLeft="$3">
          <InputIcon as={SearchIcon} size="xl" />
        </InputSlot>
        <InputField
          placeholder="Busca drinks"
          size="lg"
          autoCapitalize="none"
          value={value}
          onChangeText={onChange}
        />
      </Input>
    </>
  );
};

export default SearchInput;
