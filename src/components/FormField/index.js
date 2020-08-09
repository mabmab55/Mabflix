import React from "react";
import styled from "styled-components";


const Input = styled.input`
  background: #054f77;
  color: white;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #054f77;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
`;


function FormField({ label, type, name, value, onChange }) {
  return (
    <div>
      <label>
        {label}: 
        <Input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default FormField;