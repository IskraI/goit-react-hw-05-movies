import styled from 'styled-components';

export const SearchFormStyled = styled.form`
  width: 350px;
  /* margin-left: auto; */
  margin-right: auto;

  position: relative;

  margin-bottom: 20px;
`;

export const InputStyled = styled.input`
  width: 100%;

  border: 1px solid grey;
  border-radius: 4px;

  padding: 4px;
  font-size: 18px;
  outline: none;
  letter-spacing: 0.06em;
  font-weight: 200;

  transition: all 0.5s ease-in-out;

  /* padding-right: 40px; */

  /* cursor: pointer; */
`;

export const BtnSearch = styled.button`
  /* width: 50px; */
  /* height: 50px; */
  /* margin-top:auto */
  font-size: 18px;
  /* font-weight: bold; */
  color: rgb(145, 10, 109);
  /* justify-content: center; */
  position: absolute;
  top: 2px;

  right: 0;
  transition: all 0.3s ease-in-out;
  :hover {
    color: white;
    background-color: rgb(145, 10, 109, 0.9);
  }
`;
