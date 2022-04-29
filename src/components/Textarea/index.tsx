import styled from "@emotion/styled";

const StyledTextArea = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  flex: 1;

  label {
    margin-bottom: 4px;
    display: block;
  }
  textarea {
    padding: 10px;
    border: none !important ;
    outline: none !important ;
    border-radius: 4px;
    min-width: 100%;
    max-width: 100%;
    width: 100%;
    min-height: 50px;
  }
`;

type Props = {
  value: string | number;
  label: string;
  name: string;
  onChange?: React.ChangeEventHandler;
  placeholder?: string;
};

export default function TextArea({ value, label, name, placeholder = "", onChange }: Props) {
  const id = `id-${name}`;
  return (
    <StyledTextArea>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    </StyledTextArea>
  );
}
