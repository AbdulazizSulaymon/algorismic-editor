import styled from "@emotion/styled";

const StyledInput = styled.div`
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
    min-width: 30px;
    width: 100%;
  }
`;

type Props = {
  value: string | number;
  label: string;
  name: string;
  type: string;
};

export default function Input({ value, label, name }: Props) {
  const id = `id-${name}`;
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} name={name} value={value} onChange={() => {}} />
    </StyledInput>
  );
}
